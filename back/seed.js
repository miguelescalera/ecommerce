const { Product } = require("./models/index.js");
const { User } = require("./models/index.js");
const { Category } = require("./models/index.js");
const { Brand } = require("./models/index");
const { Image } = require("./models/index");

function adduser({ email, password, firstName, lastName, status }) {
  User.create({
    email,
    password,
    firstName,
    lastName,
    status
  })
    .then(newUser => {
      console.log("done", newUser);
    })
    .catch(console.log);
}

const addWines = async function(input) {
  const categorias = ["Tinto", "Blanco", "Espumante", "Rose"];
  Promise.all(
    categorias.map(async element => {
      await Category.findOrCreate({ where: { name: element } });
    })
  );
  Product.create(input.product).then(product =>
    Promise.all([
      Brand.findOrCreate({
        where: {
          name: input.brand.name,
          origin: input.brand.origin
        }
      }).then(brand => product.setBrand(brand[0])),
      input.categories.map(element => {
        Category.findOne({
          where: { name: element.name }
        }).then(category => product.addCategory(category));
      }),
      input.images
        ? input.images.map(element => {
            Image.create(element).then(image => product.addImage(image));
          })
        : []
    ])
  );
};

const wine = [
  (wine15 = {
    product: {
      name: "Zorzal Terroir Único. Chardonnay",
      price: 200,
      stock: 10,
      description: "",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/163090-445-445/Finca-El-Zorzal-.-Chardonnay-.-750-ml.300424.jpg?v=635707652749030000",
      rating: 1
    },
    brand: {
      name: "Andeluna",
      origin: "Mendoza"
    },
    categories: [{ name: "Blanco" }]
  }),
  (wine1 = {
    product: {
      name: "Zuccardi Aluvional",
      price: 2000,
      stock: 15,
      description:
        "Zuccardi Aluvional es una selección de los mejores suelos de origen aluvial en el Valle de Uco, en Mendoza. Las particularidades de cada parcela se dan a conocer a través de la variedad que mejor representa a la región: el Malbec",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/164680-445-445/Aluvional-Finca-Altamira750-mlMalbec-112140.jpg?v=635762658595070000",
      rating: 3.5
    },
    brand: {
      name: "Zuccardi",
      origin: "Valle de Uco"
    },
    categories: [{ name: "Tinto" }],
    images: [
      {
        url:
          "https://http2.mlstatic.com/zuccardi-aluvional-malbec-6-x-750-ml-D_NQ_NP_947825-MLA25517544352_042017-O.webp"
      },
      {
        url: "https://mla-s2-p.mlstatic.com/684659-MLA25726629878_072017-F.jpg"
      }
    ]
  }),
  (wine2 = {
    product: {
      name: "Pala Corazon BLEND ",
      price: 1200,
      stock: 20,
      description:
        "Corte de variedades que provienen de distintas localidades de Lujan de Cuyo: Cabernet Franc (Perdriel), Cabernet Sauvignon (Dique Cipolletti), Malbec (Ugarteche). Fermentado con levaduras indigenas. Una parte del corte ha sido criado en vasijas de concreto, y otra parte en barricas de roble frances por un periodo de 13 meses. Es un vino potente y de taninos bien presentes.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/179785-445-445/320165.jpg?v=636803124206470000",
      rating: 4
    },
    brand: {
      name: "Corazon del Sol",
      origin: "Mendoza"
    },
    categories: [{ name: "Tinto" }],
    images: [
      {
        url:
          "https://lh3.googleusercontent.com/proxy/AaYGDiTmGI3cG-JoQ-dllZr44_uTINCZi3GvE4ezHAf5xxMyUG7GB0jyYZhxQl9WPeUx2yqAPDsuIy3XLMbnYethkjbTgJjhx0wIYZiBivCAKdNH7w_12NSiEVvBWGU1g4E6levXvqWzxsZYf5NZBWtUdCW55A4"
      }
    ]
  }),
  (wine3 = {
    product: {
      name: "Ocio Malbec",
      price: 600,
      stock: 10,
      description:
        "Te invitamos a disfrutar de los aires frescos, aromas florales y frutados, colores intensos y sensaciones únicas de la Patagonia. Una experiencia en donde el ocio, se convierta en ese momento de encuentro con tu yo interno",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183026-445-445/237004.jpg?v=637081484892770000",
      rating: 3.5
    },
    brand: {
      name: "Tonel privado",
      origin: "Patagonia"
    },
    categories: [{ name: "Tinto" }],
    images: [
      {
        url:
          "https://http2.mlstatic.com/ocio-malbec-mayorista-zona-flores-D_NQ_NP_791010-MLA31667372185_082019-F.jpg"
      }
    ]
  }),
  (wine4 = {
    product: {
      name: "Hey Malbec",
      price: 500,
      stock: 100,
      description:
        "Un Malbec de impacto, con mucha fruta fresca, gran cuerpo, largo y carnoso. Apuesta a la simpleza, con tipicidad y frescura.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183278-445-445/catena_zapata_nuevo.jpg?v=637158997628700000",
      rating: 4.5
    },
    brand: {
      name: "Matías Riccitelli Wines",
      origin: "Mendoza"
    },
    categories: [{ name: "Tinto" }]
  }),
  (wine5 = {
    product: {
      name: "Cobos malbec marchiori",
      price: 32000,
      stock: 5,
      description:
        "Sus taninos finos y maduros y su acidez equilibrada nos dejan una impresión duradera.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/179105-445-445/115564.jpg?v=636759816788400000",
      rating: 5
    },
    brand: {
      name: "Cobos",
      origin: "Patagonia"
    },
    categories: [{ name: "Tinto" }]
  }),
  (wine6 = {
    product: {
      name: "Nicolas Catena 2009 BLEND",
      price: 11000,
      stock: 10,
      description:
        "De profundo e intenso color violeta, su aroma remite a concentradas notas de frutos negros, chocolate amargo y licor. También se perciben complejos aromas minerales y florales, junto a notas especiadas y de hierbas frescas. En boca es un vino de gran concentración, con pronunciados sabores a frutos negros y un fuerte lado mineral. Se trata de un vino notoriamente complejo, que esperamos alcanzará su máximo esplendor dentro de los próximos cinco a seis años.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/163649-445-445/Nicolas-Catena-2009-.-Blend-.-750-ml.112026.jpg?v=635724942466330000",
      rating: 4.5
    },
    brand: {
      name: "Cantena Zapata",
      origin: "Patagonia"
    },
    categories: [{ name: "Tinto" }]
  }),
  (wine7 = {
    product: {
      name: "Pian Delle Vigne R.D.M",
      price: 4560,
      stock: 25,
      description:
        "Intenso color rojo ciruela/ de tonos teja/ limpio/ brillante y de gran densidad. En aroma se presenta intenso con notas de vainilla/ chocolate/ frutas rojas y flores.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183192-445-445/701056.jpg?v=637140076918070000",
      rating: 4
    },
    brand: {
      name: "Marchesi Antinori",
      origin: "Italia"
    },
    categories: [{ name: "Tinto" }]
  }),
  (wine8 = {
    product: {
      name: "Cara sucia Sangiovese",
      price: 420,
      stock: 50,
      description:
        "Cara Sucia es una vuelta a los orígenes, a la tierra que vio nacer a los hermanos Durigutti, donde pasaron su infancia con muchos momentos felices. Como esas historias de sobre mesa y esas pequeñas cosas que nos vuelven a reconectar con el lugar de dónde venimos, así son estos nuevos vinos, simples y amenos. Un viaje en el tiempo y una nueva mirada sobre las variedades del este mendocino, otra cara de la vitivinicultura argentina.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183310-445-445/301487.jpg?v=637190246504100000",
      rating: 2.5
    },
    brand: {
      name: "Familia Durigutti",
      origin: "Mendoza"
    },
    categories: [{ name: "Tinto" }]
  }),
  (wine9 = {
    product: {
      name: "Trumpetter Chardonnay",
      price: 420,
      stock: 100,
      description:
        "Intenso color amarillo verdoso. Los primeros aromas que impactan en la nariz recuerdan a fruta madura de carozo (durazno) con un toque de vainilla, proveniente de la crianza en roble. Redondo y suave, en boca, entrega dejos a frutos tropicales (ananás) combinados con un fino marco mineral.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/174753-445-445/Trumpeter-Chardonnay-750-ml-112647.jpg?v=636337419619900000",
      rating: 3.5
    },
    brand: {
      name: "Rutini Wines",
      origin: "Patagonia"
    },
    categories: [{ name: "Blanco" }]
  }),
  (wine10 = {
    product: {
      name: "Cuesta Pedro Ximenez",
      price: 2900,
      stock: 20,
      description: "",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183200-445-445/701034.jpg?v=637140114464100000",
      rating: 4.5
    },
    brand: {
      name: "Cuesta",
      origin: "España"
    },
    categories: [{ name: "Blanco" }]
  }),
  (wine11 = {
    product: {
      name: "East Indian Solera CREAM",
      price: 3100,
      stock: 10,
      description:
        "Elaborado a partir de Oloroso y Pedro Ximénez. Tras envejecer por separado en sus respectivas soleras durante 12 años, los dos vinos se combinan para volver a envejecer en una Solera de 45 botas ubicada en la Sacristía de la bodega.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183268-445-445/701047.jpg?v=637151407649200000",
      rating: 3
    },
    brand: {
      name: "Lustua",
      origin: "España"
    },
    categories: [{ name: "Blanco" }]
  }),
  (wine12 = {
    product: {
      name: "Barroco agua viognier",
      price: 450,
      stock: 100,
      description:
        "Expresión AGUA. Fiel a su esencia, se expresa libremente con la capacidad de expandirse y adquirir formas infinitas. Es el inicio de Barroco, el vino que dio origen a una visión sin límites.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/179796-445-445/320193.jpg?v=636803135059330000",
      rating: 2
    },
    brand: {
      name: "Barroco Wines",
      origin: "Mendoza"
    },
    categories: [{ name: "Blanco" }]
  }),
  (wine13 = {
    product: {
      name: "Alta vista vive torrontes",
      price: 300,
      stock: 70,
      description:
        "“Esta nueva línea invita a conectarse con el vino a través de lo clásico y elegante pero, al mismo tiempo, con el carácter vanguardista y creativo de la propuesta de VIVE”",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/178817-445-445/301580.jpg?v=636723661353600000",
      rating: 3.5
    },
    brand: {
      name: "Alta vista",
      origin: "Patagonia"
    },
    categories: [{ name: "Blanco" }]
  }),
  (wine14 = {
    product: {
      name: "Casillero Del Diable.",
      price: 540,
      stock: 35,
      description:
        "Es un vino elegante gracias a su intensa y balanceada acidez, donde sobresalen características cítricas de las zonas costeras del valle central. Es fresco de principio y fin, donde el balance de la fruta y la acidez logra refrescar el paladar.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/177201-445-445/Casillero-del-Diablo.-Sauvignon-Blanc.-750-ml-10-01-212445.jpg?v=636572448071170000",
      rating: 4
    },
    brand: {
      name: "Casillero del Diablo",
      origin: "Chile"
    },
    categories: [{ name: "Blanco" }]
  }),
  (wine16 = {
    product: {
      name: "Andeluna Chardonnay",
      price: 500,
      stock: 45,
      description:
        "Andeluna 1300 Chardonnay es muy fresco, frutado pero con la tipicidad característica del varietal, muy untuoso. Bien joven y fácil de tomar.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/163329-445-445/Andeluna-1300-.-Chardonnay-.-750-ml-.-115004.jpg?v=635714635774970000",
      rating: 3
    },
    brand: {
      name: "Andeluna",
      origin: "Mendoza"
    },
    categories: [{ name: "Blanco" }]
  }),
  (wine17 = {
    product: {
      name: "Barroco Aire Rosado",
      price: 500,
      stock: 40,
      description:
        "Garnacha - Pinot Noir - Sangiovese. Con un potencial de guarda de 5 años.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/182125-445-445/Barroco_320201.jpg?v=636880804207370000",
      rating: 4
    },
    brand: {
      name: "Barroco wines",
      origin: "Mendoza"
    },
    categories: [{ name: "Rose" }]
  }),
  (wine18 = {
    product: {
      name: "Jose L Mounier",
      price: 900,
      stock: 19,
      description: "Con un potencial de guarda de 25 años.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/170795-445-445/Jose-L.-Mounier-.-Rosado-.-750-ml-300959.jpg?v=636083213042370000",
      rating: 4
    },
    brand: {
      name: "José L. Mounier",
      origin: "Mendoza"
    },
    categories: [{ name: "Rose" }]
  }),
  (wine19 = {
    product: {
      name: "Altocedro Rosado",
      price: 900,
      stock: 5,
      description:
        "Un viaje donde los sentidos se funden con la naturaleza. Creado por manos de un enologo revolucionario.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/165295-445-445/Altocedro-750-ml-Rosado-300230.jpg?v=635774868158570000",
      rating: 4.5
    },
    brand: {
      name: "Altocedro",
      origin: "Patagonia"
    },
    categories: [{ name: "Rose" }]
  }),
  (wine20 = {
    product: {
      name: "Aguijon de abeja Rosado",
      price: 600,
      stock: 40,
      description:
        "La expresión más profunda del Terroir. Preparemos las copas!",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/178587-445-445/Aguijon-De-Abeja.-Rosado.-750-ml.jpg?v=636710679175830000",
      rating: 4.5
    },
    brand: {
      name: "Familia Durigutti",
      origin: "Cordoba"
    },
    categories: [{ name: "Rose" }]
  }),
  (wine21 = {
    product: {
      name: "Festivo Rosado",
      price: 300,
      stock: 20,
      description: "Un vino perfecto para acompañar tus momentos!",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/161369-445-445/LindaflorFestivo.Rosado.750ml.110327B.jpg?v=635608973420670000",
      rating: 5
    },
    brand: {
      name: "Clon de los siete",
      origin: "Cordoba"
    },
    categories: [{ name: "Rose" }]
  }),
  (wine22 = {
    product: {
      name: "Sottano Rose Brut",
      price: 500,
      stock: 30,
      description:
        "De color rosa vibrante y seductor, de pequeñas y persistente burbujas que guían hacia nuestra nariz aromas a frutas rojas como frambuesas, cereza y frutillas. También encontramos notas típicas de pan tostado como así también notas florales de rosas y jazmines. Es fresco, frutado y juvenil, los frutos rojos como frutillas o guindas le otorgan una sensación envolvente y placentera.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/175190-445-445/10-01-300692.jpg?v=636377911432300000",
      rating: 3.5
    },
    brand: {
      name: "Sottano",
      origin: "Cordoba"
    },
    categories: [{ name: "Espumante" }, { name: "Rose" }]
  }),
  (wine23 = {
    product: {
      name: "Martini Prosecco espumante",
      price: 1000,
      stock: 5,
      description:
        "Es un vino ligero y equilibrado con un gran sabor que se distingue por los sabores de frutas de manzana y melocotón.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/176295-445-445/114011.jpg?v=636465202048600000",
      rating: 4
    },
    brand: {
      name: "Martini",
      origin: "Mendoza"
    },
    categories: [{ name: "Espumante" }]
  }),
  (wine24 = {
    product: {
      name: "Dom perignon blanc",
      price: 53000,
      stock: 2,
      description: "Dom Pérignon Blanc Vintage Magnum. 1500 ml.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/175954-445-445/10--111844.jpg?v=636444716623770000",
      rating: 5
    },
    brand: {
      name: "Dom Pérignon",
      origin: "Francia"
    },
    categories: [{ name: "Espumante" }]
  })
];

const users = [
  (user1 = {
    email: "admin@winenot.com",
    password: "123",
    firstName: "Winenot",
    lastName: "Admin",
    status: 3
  }),
  (user2 = {
    email: "migue@winenot.com",
    password: "123",
    firstName: "Miguel",
    lastName: "Escalera",
    status: 2
  }),
  (user3 = {
    email: "alan@winenot.com",
    password: "123",
    firstName: "Alan",
    lastName: "Fernandez",
    status: 2
  }),
  (user4 = {
    email: "chiqui@gmail.com",
    password: "123",
    firstName: "Jose",
    lastName: "Chiquillo",
    status: 1
  }),
  (user5 = {
    email: "vico@gmail.com",
    password: "123",
    firstName: "Vico",
    lastName: "Disicia",
    status: 1
  }),
  (user6 = {
    email: "mati@gmail.com",
    password: "123",
    firstName: "Matias",
    lastName: "Pugliese",
    status: 1
  })
];
wine.map(e => addWines(e));
users.map(e => adduser(e));
