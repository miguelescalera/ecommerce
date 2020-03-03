const express = require("express")
const app = express()

const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const {sequelize} = require("./models/index")

const productsRouters = require("./routes/products.js")
const UsersRouters  = require("./routes/users.js")

function isLogedIn(req, res, next) {
    if (req.isAuthenticated()) {       
      next();
    } else {
      res.send(false);
    }
  }
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(session({ 
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true
  }))

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy({ inputEmail: 'email' },
  function(inputEmail, password, done) {
    
    User.findOne({ where: {email: inputEmail} })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user); 
      })
      .catch(done);
  }
));


passport.serializeUser(function(user, done) {
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {
    User.findByPk(id)
        .then(user => done(null, user))
});



app.use("/products", productsRouters)
app.use("/users", UsersRouters)


sequelize.sync().then(function(){
    console.log("database ready")
        app.listen("3000",function(){
            console.log("server on port 3000")
        })
    })
    