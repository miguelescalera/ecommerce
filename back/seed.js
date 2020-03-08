const { Product } = require("./models/index.js");
function addWines({
  name,
  price,
  description,
  imgUrl,
  rating,
  type,
  brand,
  origin
}) {
  Product.create({
    name,
    price,
    description,
    rating,
    imgUrl,
    type,
    brand,
    origin
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
    origin: "Valle de Uco",
    type: "Tinto",
    brand: "Zuccardi",
    description:
      "Zuccardi Aluvional es una selección de los mejores suelos de origen aluvial en el Valle de Uco, en Mendoza. Las particularidades de cada parcela se dan a conocer a través de la variedad que mejor representa a la región: el Malbec",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/164680-445-445/Aluvional-Finca-Altamira750-mlMalbec-112140.jpg?v=635762658595070000",
    rating: 3.5
  }),
  (vino2 = {
    name: "Pala Corazon BLEND ",
    price: 1200,
    origin: "Mendoza",
    type: "Tinto",
    brand: "Corazon del Sol",
    description:
      "Corte de variedades que provienen de distintas localidades de Lujan de Cuyo: Cabernet Franc (Perdriel), Cabernet Sauvignon (Dique Cipolletti), Malbec (Ugarteche). Fermentado con levaduras indigenas. Una parte del corte ha sido criado en vasijas de concreto, y otra parte en barricas de roble frances por un periodo de 13 meses. Es un vino potente y de taninos bien presentes.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/179785-445-445/320165.jpg?v=636803124206470000",
    rating: 4.5
  }),
  (vino3 = {
    name: "Ocio Malbec",
    price: 600,
    origin: "Patagonia Argentina",
    type: "Tinto",
    brand: "Tonel privado",
    description:
      "Te invitamos a disfrutar de los aires frescos, aromas florales y frutados, colores intensos y sensaciones únicas de la Patagonia. Una experiencia en donde el ocio, se convierta en ese momento de encuentro con tu yo interno",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/183026-445-445/237004.jpg?v=637081484892770000",
    rating: 3.5
  }),
  (vino4 = {
    name: "Hey Malbec",
    price: 500,
    origin: "Mendoza",
    type: "Tinto",
    brand: "Matías Riccitelli Wines",
    description:
      "Un Malbec de impacto, con mucha fruta fresca, gran cuerpo, largo y carnoso. Apuesta a la simpleza, con tipicidad y frescura.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/183278-445-445/catena_zapata_nuevo.jpg?v=637158997628700000",
    rating: 4.5
  }),
  (vino5 = {
    name: "Cobos malbec marchiori",
    price: 32000,
    origin: "Patagonia",
    type: "Tinto",
    brand: "Cobos",
    description:
      "Sus taninos finos y maduros y su acidez equilibrada nos dejan una impresión duradera.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/179105-445-445/115564.jpg?v=636759816788400000",
    rating: 5
  }),
  (vino6 = {
    name: "Nicolas Catena 2009 BLEND",
    price: 11000,
    origin: "Patagonia",
    type: "Tinto",
    brand: "Cantena Zapata",
    description:
      "De profundo e intenso color violeta, su aroma remite a concentradas notas de frutos negros, chocolate amargo y licor. También se perciben complejos aromas minerales y florales, junto a notas especiadas y de hierbas frescas. En boca es un vino de gran concentración, con pronunciados sabores a frutos negros y un fuerte lado mineral. Se trata de un vino notoriamente complejo, que esperamos alcanzará su máximo esplendor dentro de los próximos cinco a seis años.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/163649-445-445/Nicolas-Catena-2009-.-Blend-.-750-ml.112026.jpg?v=635724942466330000",
    rating: 4.5
  }),
  (vino7 = {
    name: "Pian Delle Vigne R.D.M.",
    price: 4560,
    origin: "Italia",
    type: "Tinto",
    brand: "Marchesi Antinori",
    description:
      "Intenso color rojo ciruela/ de tonos teja/ limpio/ brillante y de gran densidad. En aroma se presenta intenso con notas de vainilla/ chocolate/ frutas rojas y flores",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/183192-445-445/701056.jpg?v=637140076918070000",
    rating: 4
  }),
  (vino8 = {
    name: "Cara sucia Sangiovese",
    price: 420,
    origin: "Mendoza",
    type: "Tinto",
    brand: "Familia Durigutti",
    description:
      "Cara Sucia es una vuelta a los orígenes, a la tierra que vio nacer a los hermanos Durigutti, donde pasaron su infancia con muchos momentos felices. Como esas historias de sobre mesa y esas pequeñas cosas que nos vuelven a reconectar con el lugar de dónde venimos, así son estos nuevos vinos, simples y amenos. Un viaje en el tiempo y una nueva mirada sobre las variedades del este mendocino, otra cara de la vitivinicultura argentina.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/183310-445-445/301487.jpg?v=637190246504100000",
    rating: 2.5
  }),
  (vino9 = {
    name: "Trumpetter . Chardonnay",
    price: 420,
    origin: "Patagonia",
    type: "Blanco",
    brand: "Rutini Wines",
    description:
      "Intenso color amarillo verdoso. Los primeros aromas que impactan en la nariz recuerdan a fruta madura de carozo (durazno) con un toque de vainilla, proveniente de la crianza en roble. Redondo y suave, en boca, entrega dejos a frutos tropicales (ananás) combinados con un fino marco mineral.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/174753-445-445/Trumpeter-Chardonnay-750-ml-112647.jpg?v=636337419619900000",
    rating: 3.5
  }),
  (vino10 = {
    name: "Cuesta Pedro Ximenez",
    price: 2900,
    origin: "España",
    type: "Blanco",
    brand: "Cuesta",
    description: "",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/183200-445-445/701034.jpg?v=637140114464100000",
    rating: 5
  }),
  (vino11 = {
    name: "East Indian Solera CREAM",
    price: 3100,
    origin: "España",
    type: "Blanco",
    brand: "Lustua",
    description:
      "Elaborado a partir de Oloroso y Pedro Ximénez. Tras envejecer por separado en sus respectivas soleras durante 12 años, los dos vinos se combinan para volver a envejecer en una Solera de 45 botas ubicada en la Sacristía de la bodega.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/183268-445-445/701047.jpg?v=637151407649200000",
    rating: 3
  }),
  (vino12 = {
    name: "Barroco agua viognier",
    price: 450,
    origin: "Mendoza",
    type: "Blanco",
    brand: "Barroco Wines",
    description:
      "Expresión AGUA. Fiel a su esencia, se expresa libremente con la capacidad de expandirse y adquirir formas infinitas. Es el inicio de Barroco, el vino que dio origen a una visión sin límites.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/179796-445-445/320193.jpg?v=636803135059330000",
    rating: 2
  }),
  (vino13 = {
    name: "Alta vista vive torrontes",
    price: 300,
    origin: "Patagonia",
    type: "Blanco",
    brand: "Alta vista",
    description:
      "“Esta nueva línea invita a conectarse con el vino a través de lo clásico y elegante pero, al mismo tiempo, con el carácter vanguardista y creativo de la propuesta de VIVE”",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/178817-445-445/301580.jpg?v=636723661353600000",
    rating: 3.5
  }),
  (vino14 = {
    name: "Casillero Del Diable. Sauvignon Blanc",
    price: 540,
    origin: "Chile",
    type: "Blanco",
    brand: "Casillero del Diablo",
    description:
      "Es un vino elegante gracias a su intensa y balanceada acidez, donde sobresalen características cítricas de las zonas costeras del valle central. Es fresco de principio y fin, donde el balance de la fruta y la acidez logra refrescar el paladar.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/177201-445-445/Casillero-del-Diablo.-Sauvignon-Blanc.-750-ml-10-01-212445.jpg?v=636572448071170000",
    rating: 4
  }),
  (vino15 = {
    name: "Zorzal Terroir Único. Chardonnay",
    price: 200,
    origin: "Mendoza",
    type: "Blanco",
    brand: "Andeluna",
    description: "",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/163090-445-445/Finca-El-Zorzal-.-Chardonnay-.-750-ml.300424.jpg?v=635707652749030000",
    rating: 1
  }),
  (vino16 = {
    name: "Andeluna Chardonnay",
    price: 500,
    origin: "Mendoza",
    type: "Blanco",
    brand: "Andeluna",
    description:
      "Andeluna 1300 Chardonnay es muy fresco, frutado pero con la tipicidad característica del varietal, muy untuoso. Bien joven y fácil de tomar.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/163329-445-445/Andeluna-1300-.-Chardonnay-.-750-ml-.-115004.jpg?v=635714635774970000",
    rating: 3
  }),
  (vino17 = {
    name: "Barroco Aire Rosado 750 ml",
    price: 500,
    origin: "Mendoza",
    type: "Rose",
    brand: "Barroco wines",
    description:
      "Garnacha - Pinot Noir - Sangiovese. Con un potencial de guarda de 5 años.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/182125-445-445/Barroco_320201.jpg?v=636880804207370000",
    rating: 4
  }),
  (vino18 = {
    name: "Jose L Mounier",
    price: 900,
    origin: "Mendoza",
    type: "Rose",
    brand: "José L. Mounier",
    description: "Con un potencial de guarda de 25 años.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/170795-445-445/Jose-L.-Mounier-.-Rosado-.-750-ml-300959.jpg?v=636083213042370000",
    rating: 4
  }),
  (vino19 = {
    name: "Altocedro Rosado",
    price: 900,
    origin: "Patagonia",
    type: "Rose",
    brand: "Altocedro",
    description:
      "Un viaje donde los sentidos se funden con la naturaleza. Creado por manos de un enologo revolucionario.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/165295-445-445/Altocedro-750-ml-Rosado-300230.jpg?v=635774868158570000",
    rating: 4.5
  }),
  (vino20 = {
    name: "Aguijon de abeja Rosado",
    price: 600,
    origin: "Cordoba",
    type: "Rose",
    brand: "Familia Durigutti",
    description: "La expresión más profunda del Terroir. Preparemos las copas!",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/178587-445-445/Aguijon-De-Abeja.-Rosado.-750-ml.jpg?v=636710679175830000",
    rating: 4.5
  }),
  (vino21 = {
    name: "Festivo Rosado",
    price: 300,
    origin: "Cordoba",
    type: "Rose",
    brand: "Clon de los siete",
    description: "Un vino perfecto para acompañar tus momentos!",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/161369-445-445/LindaflorFestivo.Rosado.750ml.110327B.jpg?v=635608973420670000",
    rating: 5
  }),
  (vino22 = {
    name: "Sottano Rose Brut",
    price: 500,
    origin: "Cordoba",
    type: "Espumante / Rose",
    brand: "Sottano",
    description:
      "De color rosa vibrante y seductor, de pequeñas y persistente burbujas que guían hacia nuestra nariz aromas a frutas rojas como frambuesas, cereza y frutillas. También encontramos notas típicas de pan tostado como así también notas florales de rosas y jazmines. Es fresco, frutado y juvenil, los frutos rojos como frutillas o guindas le otorgan una sensación envolvente y placentera.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/175190-445-445/10-01-300692.jpg?v=636377911432300000",
    rating: 3.5
  }),
  (vino23 = {
    name: "Martini Prosecco espumante",
    price: 1000,
    origin: "Mendoza",
    type: "Espumante",
    brand: "Martini",
    description:
      "Es un vino ligero y equilibrado con un gran sabor que se distingue por los sabores de frutas de manzana y melocotón.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/176295-445-445/114011.jpg?v=636465202048600000",
    rating: 4
  }),
  (vino24 = {
    name: "DOM PÉRIGNON BLANC VINTAGE MAGNUM",
    price: 50000,
    origin: "Francia",
    type: "Espumante",
    brand: "Dom Pérignon",
    description: "Dom Pérignon Blanc Vintage Magnum. 1500 ml.",
    imgUrl:
      "https://tonelprivado.vteximg.com.br/arquivos/ids/175954-445-445/10--111844.jpg?v=636444716623770000",
    rating: 5
  })
];
vinos.map(e => addWines(e));
