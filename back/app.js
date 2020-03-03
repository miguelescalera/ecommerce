const express = require("express")
const app = express()
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const {db} = require("./models/index")
const routes = require('./routes')
const volleyball = require("volleyball")
const path = require("path")

function isLogedIn(req, res, next) {
    if (req.isAuthenticated()) {       
      next();
    } else {
      res.send(false);
    }
  }

//LOGGING MIDDLEWARE
app.use(volleyball)
  
//PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser())

//STATIC MIDDLEWARE
app.use('/', express.static(path.join(__dirname, 'public')))

/*******PASSPORT ********/
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

//Serialize 
passport.serializeUser(function(user, done) {
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {
    User.findByPk(id)
        .then(user => done(null, user))
});

//Rutas de back
app.use("/", routes)

//servimos el index
app.use("/*", function(req, res, next){
  res.sendFile(__dirname+"/public/index.html")
})


db.sync({force: false}).then(function(){
    console.log("database ready")
        app.listen("3000",function(){
            console.log("Server on port 3000")
        })
    })
    
