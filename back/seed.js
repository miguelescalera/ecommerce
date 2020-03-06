// Para correr el seed deberias tener en "/models/index" importados los dos modelos y despues exportarlos
const { Product } = require("./models/index.js");
function addWines({ name, price, description, imgUrl, rating }) {
  Product.create({
    name,
    price,
    description,
    imgUrl,
    rating
  })
    .then(newWine => {
      console.log("done", newWine);
    })
    .catch(console.log);
}
const vinos = [
  (vino1 = {
    name: "Zuccardi Aluvional",
    price: 2000,
    description:
      "Zuccardi Aluvional es una selección de los mejores suelos de origen aluvial en el Valle de Uco, en Mendoza. Las particularidades de cada parcela se dan a conocer a través de la variedad que mejor representa a la región: el Malbec",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/164680-445-445/Aluvional-Finca-Altamira750-mlMalbec-112140.jpg?v=635762658595070000",
    rating: 3.5
  }),
  (vino2 = {
    name: "Pala Corazon BLEND ",
    price: 1200,
    description:
      "Corte de variedades que provienen de distintas localidades de Lujan de Cuyo: Cabernet Franc (Perdriel), Cabernet Sauvignon (Dique Cipolletti), Malbec (Ugarteche). Fermentado con levaduras indigenas. Una parte del corte ha sido criado en vasijas de concreto, y otra parte en barricas de roble frances por un periodo de 13 meses. Es un vino potente y de taninos bien presentes.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/179785-445-445/320165.jpg?v=636803124206470000",
      rating: 4.5
  }),
  (vino3 = {
    name: "Ocio Malbec",
    price: 600,
    description:
      "Te invitamos a disfrutar de los aires frescos, aromas florales y frutados, colores intensos y sensaciones únicas de la Patagonia. Una experiencia en donde el ocio, se convierta en ese momento de encuentro con tu yo interno",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/183026-445-445/237004.jpg?v=637081484892770000",
      rating: 5
  }),
    (vino4 = {
      name: "Hey Malbec",
      price: 500,
      description:
        "Un Malbec de impacto, con mucha fruta fresca, gran cuerpo, largo y carnoso. Apuesta a la simpleza, con tipicidad y frescura.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183278-445-445/catena_zapata_nuevo.jpg?v=637158997628700000",
        rating: 4.5
    }),
    (vino5 = {
      name: "Hey Loco",
      price: 540,
      description:
        "Un Malbec de impacto, con mucha fruta fresca, gran cuerpo, largo y carnoso. Apuesta a la simpleza, con tipicidad y frescura.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183278-445-445/catena_zapata_nuevo.jpg?v=637158997628700000",
        rating: 2.5
    }),
    (vino6 = {
      name: "Hey Rose",
      price: 500,
      description:
        "Un Malbec de impacto, con mucha fruta fresca, gran cuerpo, largo y carnoso. Apuesta a la simpleza, con tipicidad y frescura.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183278-445-445/catena_zapata_nuevo.jpg?v=637158997628700000",
        rating: 4
    }),
    (vino7 = {
      name: "Chardonnay Toro",
      price: 500,
      description:
        "Un Malbec de impacto, con mucha fruta fresca, gran cuerpo, largo y carnoso. Apuesta a la simpleza, con tipicidad y frescura.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183278-445-445/catena_zapata_nuevo.jpg?v=637158997628700000",
        rating: 3.5
    }),
    (vino8 = {
      name: "Finca Las Rojas Syrah",
      price: 120,
      description:
        "Un Malbec de impacto, con mucha fruta fresca, gran cuerpo, largo y carnoso. Apuesta a la simpleza, con tipicidad y frescura.",
      imgUrl:
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183278-445-445/catena_zapata_nuevo.jpg?v=637158997628700000",
        rating: 1.5
    })
];
vinos.map(e => addWines(e));
