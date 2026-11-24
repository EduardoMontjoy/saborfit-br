// Verified 120-dish catalog (40 Brazil, 20 Mexico, 20 Peru, 20 Colombia, 20 Spain) with local dish-matched photos
const CATALOG_DISHES = [
  {
    "id": "br_1",
    "country": "BRAZILIAN",
    "time": 50,
    "fav": true,
    "img": "images/br_1.jpg",
    "title": {
      "es": "Feijoada Brasileña",
      "pt": "Feijoada Brasileira",
      "en": "Brazilian Feijoada"
    },
    "brTip": {
      "es": "Usa feijão preto, lombo suíno, paio/calabresa y acompaña con couve refogada, arroz, farofa y naranja.",
      "pt": "Use feijão preto, lombo suíno, paio/calabresa e sirva com couve, arroz, farofa e laranja.",
      "en": "Use black beans, pork loin, smoked sausage, collard greens, rice, farofa, and orange."
    },
    "macrosTrad": {
      "kcal": 914,
      "p": 51,
      "c": 83,
      "f": 42
    },
    "macrosFit": {
      "kcal": 688,
      "p": 42,
      "c": 68,
      "f": 28
    },
    "ingredients": [
      {
        "id": "feijao_preto",
        "grams": 140,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "carne_seca",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 50,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "costelinha",
        "grams": 50,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "panceta",
        "grams": 20,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "farinha_mandioca",
        "grams": 20,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "laranja",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Lava el frijol negro y déjalo remojando en agua fría toda la noche (mínimo 8 horas) para que ablande parejo.",
          "s": null
        },
        {
          "t": "Escurre el agua del remojo, pon el frijol en olla (o olla a presión) con agua limpia que lo cubra 3 dedos y 2 hojas de laurel. Cocina 25 min en presión (o 1h en olla normal) hasta que el grano esté tierno.",
          "s": 1500
        },
        {
          "t": "Mientras tanto, desala la carne seca hirviéndola 10 min y córtala en cubos; corta la costilla de cerdo en trozos, la lingüiça en rodajas y la panceta en cubitos. Dóralos en sartén aparte a fuego medio-alto hasta que suelten su grasa y tomen color.",
          "s": 360
        },
        {
          "t": "En otra sartén, sofríe la cebolla picada y el ajo machacado con un hilo de aceite 3 min hasta que queden transparentes y dorados. Agrega 2 cucharones del frijol cocido con caldo y aplástalos con cuchara para espesar.",
          "s": 180
        },
        {
          "t": "Vierte ese sofrito y las carnes doradas dentro de la olla principal de frijol. Cocina destapado a fuego bajo 15 min removiendo de vez en cuando hasta que el caldo quede espeso y oscuro.",
          "s": 900
        },
        {
          "t": "Para acompañar: corta la couve (col) en tiras finísimas, saltéala 2 min con ajo y sal. Sirve la feijoada caliente con arroz blanco, couve, farofa y rodajas de naranja (ayuda a la digestión).",
          "s": 120
        }
      ],
      "pt": [
        {
          "t": "Lave o feijão preto e deixe de molho em água fria por pelo menos 8 horas para cozinhar por igual.",
          "s": null
        },
        {
          "t": "Escorra a água do molho, coloque na panela de pressão com água limpa (3 dedos acima) e 2 folhas de louro. Cozinhe 25 min após pegar pressão.",
          "s": 1500
        },
        {
          "t": "Enquanto isso, dessalgue a carne seca fervendo 10 min e corte em cubos; corte a costelinha em pedaços, a linguiça em rodelas e o bacon em cubinhos. Doure tudo em frigideira à parte em fogo médio-alto até soltar a gordura e pegar cor.",
          "s": 360
        },
        {
          "t": "Refogue cebola e alho picados por 3 min, adicione 2 conchas do feijão cozido e amasse para engrossar o caldo.",
          "s": 180
        },
        {
          "t": "Misture o refogado e as carnes na panela principal de feijão e apure em fogo baixo sem tampa por 15 min.",
          "s": 900
        },
        {
          "t": "Fatie a couve bem fininha e refogue 2 min no alho. Sirva tudo com arroz branco, farofa e rodelas de laranja.",
          "s": 120
        }
      ],
      "en": [
        {
          "t": "Rinse black beans and soak in cold water overnight (8h) for even cooking.",
          "s": null
        },
        {
          "t": "Drain soaking water and pressure-cook beans in fresh water with bay leaves for 25 min until tender.",
          "s": 1500
        },
        {
          "t": "Meanwhile, desalt the dried beef by boiling it 10 min and cube it; cut the pork ribs into pieces, the sausage into rounds and the bacon into small cubes. Brown them in a separate pan over medium-high heat until they render their fat and take color.",
          "s": 360
        },
        {
          "t": "Sauté chopped onion and garlic 3 min, mash 2 ladles of cooked beans into it to create a thickener.",
          "s": 180
        },
        {
          "t": "Combine seared meats and bean mash into the main pot; simmer uncovered 15 min until thick and glossy.",
          "s": 900
        },
        {
          "t": "Flash-sauté thinly shredded collards with garlic 2 min. Serve with white rice, farofa, and orange slices.",
          "s": 120
        }
      ]
    },
    "videoQuery": "como hacer Feijoada Brasileña receta paso a paso"
  },
  {
    "id": "br_2",
    "country": "BRAZILIAN",
    "time": 35,
    "fav": false,
    "img": "images/br_2.jpg",
    "title": {
      "es": "Moqueca Baiana de Pescado",
      "pt": "Moqueca Baiana de Peixe",
      "en": "Bahian Fish Moqueca"
    },
    "brTip": {
      "es": "Usa filetes firmes (tilápia, cação o robalo), leite de coco de botellita, azeite de dendê y pimentões de colores.",
      "pt": "Use peixe firme (tilápia, cação ou robalo), leite de coco, azeite de dendê e pimentões.",
      "en": "Use firm fish (tilapia, sea bass), bottled coconut milk, dendê palm oil, and bell peppers."
    },
    "macrosTrad": {
      "kcal": 666,
      "p": 43,
      "c": 50,
      "f": 33
    },
    "macrosFit": {
      "kcal": 524,
      "p": 47,
      "c": 44,
      "f": 20
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 200,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite_coco",
        "grams": 80,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "dende",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Seca los filetes de pescado con papel toalla. Sazónalos con sal, pimienta, ajo machacado y el jugo de medio limón; deja marinar 15 min (no más, o el limón 'cocina' el pescado antes de tiempo).",
          "s": 900
        },
        {
          "t": "Corta en rodajas medianas la cebolla, los tomates y el pimentón (sin semillas ni venas blancas).",
          "s": null
        },
        {
          "t": "En una olla ancha o sartén honda (con el fuego aún apagado), haz una cama con la mitad de la cebolla, pimentón y tomate.",
          "s": null
        },
        {
          "t": "Coloca los filetes de pescado encima de las verduras y cúbrelos con el resto de rodajas de tomate, cebolla y pimentón.",
          "s": null
        },
        {
          "t": "Vierte el leite de coco por los bordes, agrega 1 cucharada de azeite de dendê (o aceite de oliva en modo fit), tapa la olla y cocina a fuego medio 12 a 15 min sin revolver para que el pescado no se rompa.",
          "s": 780
        },
        {
          "t": "Destapa, espolvorea cilantro/cheiro-verde picado por encima y sirve caliente con arroz blanco.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Seque o peixe e tempere com sal, alho amassado e suco de meio limão por no máximo 15 min.",
          "s": 900
        },
        {
          "t": "Corte cebola, tomate e pimentão (sem sementes) em rodelas médias.",
          "s": null
        },
        {
          "t": "Com o fogo desligado, forre uma panela larga com metade das rodelas de cebola, pimentão e tomate.",
          "s": null
        },
        {
          "t": "Acomode os filés de peixe por cima e cubra com o restante dos legumes.",
          "s": null
        },
        {
          "t": "Regue com o leite de coco e o azeite de dendê, tampe e cozinhe em fogo médio por 12 a 15 min sem mexer.",
          "s": 780
        },
        {
          "t": "Finalize com coentro ou cheiro-verde fresco e sirva com arroz branco.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Pat fish dry and marinate with salt, garlic, and half a lime for 15 min.",
          "s": 900
        },
        {
          "t": "Slice onion, tomato, and seeded bell pepper into medium rounds.",
          "s": null
        },
        {
          "t": "With heat off, line a wide pot with half the onion, pepper, and tomato slices.",
          "s": null
        },
        {
          "t": "Lay fish fillets on top and cover with remaining vegetable slices.",
          "s": null
        },
        {
          "t": "Pour in coconut milk and dendê oil, cover, and simmer over medium heat 12–15 min without stirring.",
          "s": 780
        },
        {
          "t": "Top with fresh cilantro and serve with white rice.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Moqueca Baiana de Pescado receta paso a paso"
  },
  {
    "id": "br_3",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_3.jpg",
    "title": {
      "es": "Pão de Queijo Casero",
      "pt": "Pão de Queijo Tradicional",
      "en": "Brazilian Cheese Bread"
    },
    "brTip": {
      "es": "En Brasil compra 'polvilho azedo' o 'polvilho doce' en cualquier súper, queijo minas padrão curado o muçarela rallada.",
      "pt": "Use polvilho azedo (ou doce) e queijo minas padrão ou muçarela ralada.",
      "en": "Use Brazilian polvilho (tapioca starch) and cured Minas cheese or mozzarella."
    },
    "macrosTrad": {
      "kcal": 615,
      "p": 19,
      "c": 60,
      "f": 33
    },
    "macrosFit": {
      "kcal": 383,
      "p": 14,
      "c": 46,
      "f": 16
    },
    "ingredients": [
      {
        "id": "tapioca",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 60,
        "fitGrams": 40,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "ovo",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 60,
        "fitGrams": 40,
        "sub": null,
        "fitId": "leite_desnatado"
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Precalienta el horno a 200°C (o la airfryer a 180°C).",
          "s": null
        },
        {
          "t": "En una ollita, lleva a hervor la leche junto con el aceite/mantequilla y una pizca de sal (apenas burbujee, apaga el fuego).",
          "s": 120
        },
        {
          "t": "Coloca el polvilho (almidón de tapioca) en un bol y vierte encima el líquido hirviendo poco a poco mientras mezclas con cuchara de madera (esto se llama 'escaldar' y evita que quede duro).",
          "s": null
        },
        {
          "t": "Deja entibiar 3 minutos para que no cocine el huevo. Luego agrega el huevo y amasa con las manos hasta integrar.",
          "s": 180
        },
        {
          "t": "Incorpora el queso rallado y amasa 2 min hasta lograr una masa lisa que no se pegue demasiado (si se pega, úntate un poco de aceite en las manos).",
          "s": null
        },
        {
          "t": "Forma bolitas del tamaño de una nuez, colócalas separadas en bandeja y hornea 20–25 min hasta que inflen y queden doraditas por fuera.",
          "s": 1320
        }
      ],
      "pt": [
        {
          "t": "Preaqueça o forno a 200°C (ou a airfryer a 180°C).",
          "s": null
        },
        {
          "t": "Ferva o leite com o óleo/azeite e uma pitada de sal até levantar fervura.",
          "s": 120
        },
        {
          "t": "Coloque o polvilho numa tigela e despeje o líquido fervente por cima, mexendo com colher para escaldar.",
          "s": null
        },
        {
          "t": "Espere amornar por 3 min, adicione o ovo e misture bem até incorporar.",
          "s": 180
        },
        {
          "t": "Junte o queijo ralado e sove por 2 min até formar massa homogênea.",
          "s": null
        },
        {
          "t": "Modele bolinhas, disponha com espaço na assadeira e asse por 20–25 min até dourar.",
          "s": 1320
        }
      ],
      "en": [
        {
          "t": "Preheat oven to 200°C (or airfryer to 180°C).",
          "s": null
        },
        {
          "t": "Bring milk, oil, and salt just to a boil in a small pot.",
          "s": 120
        },
        {
          "t": "Pour hot liquid over tapioca starch (polvilho) in a bowl and stir to scald.",
          "s": null
        },
        {
          "t": "Cool 3 min until lukewarm, then mix in egg thoroughly.",
          "s": 180
        },
        {
          "t": "Knead in grated cheese for 2 min until smooth.",
          "s": null
        },
        {
          "t": "Roll into walnut-sized balls and bake 20–25 min until puffed and golden.",
          "s": 1320
        }
      ]
    },
    "videoQuery": "como hacer Pão de Queijo Casero receta paso a paso"
  },
  {
    "id": "br_4",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_4.jpg",
    "title": {
      "es": "Strogonoff Brasileño de Pollo",
      "pt": "Strogonoff de Frango",
      "en": "Brazilian Chicken Stroganoff"
    },
    "brTip": {
      "es": "En Brasil lleva creme de leite de cajita, ketchup/mostaza y se sirve siempre con arroz blanco y batata palha crocante.",
      "pt": "Feito com creme de leite, ketchup/mostarda e servido com arroz branco e batata palha.",
      "en": "Made with Brazilian boxed creme de leite, ketchup, mustard, rice, and potato sticks."
    },
    "macrosTrad": {
      "kcal": 641,
      "p": 58,
      "c": 47,
      "f": 23
    },
    "macrosFit": {
      "kcal": 467,
      "p": 62,
      "c": 39,
      "f": 6
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "creme_leite",
        "grams": 60,
        "fitGrams": 40,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la pechuga de pollo en cubos parejos de 2 cm y sazona con sal, pimienta y ajo machacado.",
          "s": null
        },
        {
          "t": "Calienta muy bien una sartén con un hilo de aceite. Coloca el pollo sin amontonarlo y sella 4–5 min moviendo poco para que se dore y no suelte demasiada agua.",
          "s": 270
        },
        {
          "t": "Baja a fuego medio, añade la cebolla picada y sofríe 3 min. Si tienes champiñones laminados, agrégalos ahora.",
          "s": 180
        },
        {
          "t": "Incorpora 3 cucharadas de salsa de tomate (o 2 de ketchup) y 1 cucharadita de mostaza amarilla; mezcla bien 2 min.",
          "s": 120
        },
        {
          "t": "Baja el fuego al mínimo (¡clave para que no se corte!), agrega el creme de leite (o requeijão light en modo fit) y mezcla 2 min solo hasta calentar sin dejar hervir.",
          "s": 120
        },
        {
          "t": "Sirve de inmediato acompañado de arroz blanco suelto y batata palha crocante por encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte o frango em cubos de 2 cm e tempere com alho, sal e pimenta.",
          "s": null
        },
        {
          "t": "Aqueça bem a frigideira com um fio de óleo e doure o frango por 4–5 min sem mexer demais para não juntar água.",
          "s": 270
        },
        {
          "t": "Abaixe o fogo, junte a cebola picada (e champignon se desejar) e refogue por 3 min.",
          "s": 180
        },
        {
          "t": "Adicione molho de tomate (ou ketchup) e mostarda, misturando por 2 min.",
          "s": 120
        },
        {
          "t": "Com o fogo no mínimo para não talhar, incorpore o creme de leite (ou requeijão light) e aqueça por 2 min sem ferver.",
          "s": 120
        },
        {
          "t": "Sirva com arroz branco soltinho e batata palha crocante.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut chicken into 2cm cubes and season with garlic, salt, and pepper.",
          "s": null
        },
        {
          "t": "Sear in a hot pan for 4–5 min without crowding so it browns instead of steaming.",
          "s": 270
        },
        {
          "t": "Lower heat, add diced onion (and mushrooms if using), and sauté 3 min.",
          "s": 180
        },
        {
          "t": "Stir in tomato sauce/ketchup and yellow mustard; cook 2 min.",
          "s": 120
        },
        {
          "t": "Reduce heat to lowest setting, fold in cream (or light requeijão), and warm 2 min without boiling.",
          "s": 120
        },
        {
          "t": "Serve immediately with white rice and crispy potato sticks.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Strogonoff Brasileño de Pollo receta paso a paso"
  },
  {
    "id": "br_5",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_5.jpg",
    "title": {
      "es": "Baião de Dois Nordestino",
      "pt": "Baião de Dois",
      "en": "Baião de Dois (Rice & Beans)"
    },
    "brTip": {
      "es": "Lleva feijão de corda (o carioca), arroz, queijo coalho dorado en cubos y carne seca o patinho.",
      "pt": "Feijão de corda (ou carioca), arroz, queijo coalho dourado e carne seca.",
      "en": "Cowpeas/beans cooked with rice, seared queijo coalho, and cured beef."
    },
    "macrosTrad": {
      "kcal": 816,
      "p": 61,
      "c": 62,
      "f": 35
    },
    "macrosFit": {
      "kcal": 625,
      "p": 54,
      "c": 51,
      "f": 22
    },
    "ingredients": [
      {
        "id": "feijao_fradinho",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "carne_seca",
        "grams": 100,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "coalho",
        "grams": 60,
        "fitGrams": 40,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "panceta",
        "grams": 15,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Si usas carne seca, desálala hirviéndola en agua 15 min, escurre y desmenúzala con tenedor.",
          "s": 900
        },
        {
          "t": "Corta el queijo coalho en cubos de 1.5 cm y dóralos en sartén antiadherente 2 min por lado hasta que formen costra; reserva.",
          "s": 120
        },
        {
          "t": "En una olla, sofríe cebolla, ajo y la carne desmenuzada en aceite 4 min.",
          "s": 240
        },
        {
          "t": "Agrega el arroz crudo lavado, mezcla 1 min, luego añade el feijão cocido con 2 tazas de su propio caldo de cocción (o agua caliente).",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego bajo 15 min hasta que el arroz esté tierno y haya absorbido casi todo el caldo.",
          "s": 900
        },
        {
          "t": "Apaga el fuego, mezcla suavemente los cubos de queijo coalho dorados y abundante cilantro/cheiro-verde.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Se usar carne seca, dessalgue fervendo por 15 min, escorra e desfie.",
          "s": 900
        },
        {
          "t": "Corte o queijo coalho em cubos e doure na frigideira por 2 min; reserve.",
          "s": 120
        },
        {
          "t": "Refogue cebola, alho e a carne desfiada na panela por 4 min.",
          "s": 240
        },
        {
          "t": "Junte o arroz, misture e adicione o feijão cozido com seu caldo (2 xícaras).",
          "s": null
        },
        {
          "t": "Tampe e cozinhe em fogo baixo por 15 min até o arroz secar.",
          "s": 900
        },
        {
          "t": "Misture os cubos de queijo dourados e finalize com coentro ou cheiro-verde.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "If using cured beef, boil 15 min to desalt, drain, and shred.",
          "s": 900
        },
        {
          "t": "Dice queijo coalho and pan-sear 2 min until golden; set aside.",
          "s": 120
        },
        {
          "t": "Sauté onion, garlic, and shredded beef for 4 min.",
          "s": 240
        },
        {
          "t": "Stir in raw rice, then add cooked beans with 2 cups of bean broth.",
          "s": null
        },
        {
          "t": "Cover and simmer on low 15 min until rice is tender.",
          "s": 900
        },
        {
          "t": "Fold in golden cheese cubes and fresh cilantro.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Baião de Dois Nordestino receta paso a paso"
  },
  {
    "id": "br_6",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_6.jpg",
    "title": {
      "es": "Escondidinho de Mandioca y Carne",
      "pt": "Escondidinho de Mandioca",
      "en": "Cassava Shepherd's Pie"
    },
    "brTip": {
      "es": "Puré cremoso de mandioca (aipim) con requeijão sobre carne seca o patinho moído.",
      "pt": "Purê cremoso de mandioca com requeijão cobrindo carne seca ou patinho.",
      "en": "Creamy cassava mash over seasoned Brazilian beef."
    },
    "macrosTrad": {
      "kcal": 803,
      "p": 58,
      "c": 66,
      "f": 34
    },
    "macrosFit": {
      "kcal": 696,
      "p": 58,
      "c": 55,
      "f": 26
    },
    "ingredients": [
      {
        "id": "mandioca",
        "grams": 180,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "carne_seca",
        "grams": 130,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "requeijao",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 35,
        "fitGrams": 25,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "manteiga",
        "grams": 8,
        "fitGrams": 4,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela la mandioca, córtala en trozos de 5 cm y retira la fibra central dura. Si usas carne seca, desálala hirviéndola 15 min en agua y escurre; si usas patinho, sazónalo con sal y pimienta.",
          "s": null
        },
        {
          "t": "Cuece la mandioca en agua con sal hasta que al pincharla con un tenedor se deshaga fácil.",
          "s": 1200
        },
        {
          "t": "Escúrrela y aplástala aún caliente con el requeijão y 3 cucharadas de leche hasta lograr un puré liso; prueba la sal.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla y el ajo picados en un hilo de aceite 3 min; agrega el tomate picado y cocina hasta que se deshaga.",
          "s": 240
        },
        {
          "t": "Añade la carne desmenuzada (o molida) y cocina a fuego medio hasta que quede jugosa, sin líquido suelto; termina con cheiro-verde.",
          "s": 300
        },
        {
          "t": "En un molde para horno pon la carne en el fondo, cubre con el puré de mandioca alisando con una cuchara y espolvorea el queso rallado.",
          "s": null
        },
        {
          "t": "Gratina en el horno a 200 °C (o airfryer) hasta que la superficie burbujee y se dore. Deja reposar 5 min antes de servir.",
          "s": 600
        }
      ],
      "pt": [
        {
          "t": "Descasque a mandioca, corte em pedaços de 5 cm e retire a fibra central. Se usar carne seca, dessalgue fervendo 15 min e escorra; se usar patinho, tempere com sal e pimenta.",
          "s": null
        },
        {
          "t": "Cozinhe a mandioca em água com sal até desmanchar ao espetar com um garfo.",
          "s": 1200
        },
        {
          "t": "Escorra e amasse ainda quente com o requeijão e 3 colheres de leite até virar um purê liso; acerte o sal.",
          "s": null
        },
        {
          "t": "Refogue a cebola e o alho picados num fio de óleo por 3 min; junte o tomate picado e cozinhe até desmanchar.",
          "s": 240
        },
        {
          "t": "Acrescente a carne desfiada (ou moída) e cozinhe em fogo médio até ficar suculenta, sem líquido solto; finalize com cheiro-verde.",
          "s": 300
        },
        {
          "t": "Num refratário coloque a carne no fundo, cubra com o purê de mandioca alisando com uma colher e polvilhe o queijo ralado.",
          "s": null
        },
        {
          "t": "Gratine no forno a 200 °C (ou airfryer) até a superfície borbulhar e dourar. Deixe descansar 5 min antes de servir.",
          "s": 600
        }
      ],
      "en": [
        {
          "t": "Peel the cassava, cut it into 5 cm pieces and remove the tough central fiber. If using dried beef, desalt it by boiling 15 min and drain; if using lean beef, season with salt and pepper.",
          "s": null
        },
        {
          "t": "Boil the cassava in salted water until it falls apart when pierced with a fork.",
          "s": 1200
        },
        {
          "t": "Drain and mash while hot with the requeijão and 3 tablespoons of milk into a smooth purée; check the salt.",
          "s": null
        },
        {
          "t": "Sauté the chopped onion and garlic in a drizzle of oil for 3 min; add the chopped tomato and cook until it breaks down.",
          "s": 240
        },
        {
          "t": "Add the shredded (or ground) beef and cook over medium heat until juicy with no loose liquid; finish with fresh herbs.",
          "s": 300
        },
        {
          "t": "In a baking dish spread the beef on the bottom, cover with the cassava purée smoothing it with a spoon, and sprinkle with grated cheese.",
          "s": null
        },
        {
          "t": "Gratinate in the oven at 200 °C (or air fryer) until bubbling and golden. Rest 5 min before serving.",
          "s": 600
        }
      ]
    },
    "videoQuery": "como hacer Escondidinho de Mandioca y Carne receta paso a paso"
  },
  {
    "id": "br_7",
    "country": "BRAZILIAN",
    "time": 30,
    "fav": false,
    "img": "images/br_7.jpg",
    "title": {
      "es": "Galinhada Goiana",
      "pt": "Galinhada Tradicional",
      "en": "Brazilian Saffron Chicken Rice"
    },
    "brTip": {
      "es": "El color amarillo viene del açafrão-da-terra (cúrcuma), fácil en cualquier súper brasileño.",
      "pt": "Cor dourada com açafrão-da-terra (cúrcuma), milho verde e cheiro-verde.",
      "en": "Golden color comes from Brazilian açafrão-da-terra (turmeric)."
    },
    "macrosTrad": {
      "kcal": 618,
      "p": 48,
      "c": 55,
      "f": 23
    },
    "macrosFit": {
      "kcal": 504,
      "p": 66,
      "c": 45,
      "f": 6
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 170,
        "fitGrams": 185,
        "sub": null,
        "fitId": "frango"
      },
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azafran",
        "grams": 1,
        "fitGrams": 1,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el pollo en presas medianas (o la pechuga en cubos grandes) y sazónalo con ajo machacado, sal, pimienta y la cúrcuma. Deja reposar 10 min.",
          "s": null
        },
        {
          "t": "Pica la cebolla, el pimentón y el tomate en cubos pequeños. Lava el arroz hasta que el agua salga clara y escúrrelo.",
          "s": null
        },
        {
          "t": "Calienta el aceite en una olla grande y dora el pollo por todos sus lados hasta que tome color dorado.",
          "s": 360
        },
        {
          "t": "Agrega la cebolla, el pimentón y el tomate; sofríe raspando el fondo de la olla para levantar los jugos dorados.",
          "s": 180
        },
        {
          "t": "Añade el arroz y remueve para que se impregne de la grasa y la cúrcuma. Vierte agua hirviendo (el doble del volumen del arroz) y prueba la sal.",
          "s": 120
        },
        {
          "t": "Tapa y cocina a fuego bajo hasta que el agua se consuma y el arroz esté suelto.",
          "s": 960
        },
        {
          "t": "Apaga, deja reposar tapado 5 min, mezcla el cheiro-verde picado y sirve.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Corte o frango em pedaços médios (ou o peito em cubos grandes) e tempere com alho amassado, sal, pimenta e a cúrcuma. Deixe descansar 10 min.",
          "s": null
        },
        {
          "t": "Pique a cebola, o pimentão e o tomate em cubinhos. Lave o arroz até a água sair limpa e escorra.",
          "s": null
        },
        {
          "t": "Aqueça o óleo numa panela grande e doure o frango por todos os lados.",
          "s": 360
        },
        {
          "t": "Junte a cebola, o pimentão e o tomate; refogue raspando o fundo da panela para soltar o queimadinho.",
          "s": 180
        },
        {
          "t": "Acrescente o arroz e mexa para pegar a gordura e a cúrcuma. Despeje água fervente (o dobro do volume do arroz) e acerte o sal.",
          "s": 120
        },
        {
          "t": "Tampe e cozinhe em fogo baixo até a água secar e o arroz ficar soltinho.",
          "s": 960
        },
        {
          "t": "Desligue, deixe descansar tampado 5 min, misture o cheiro-verde picado e sirva.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Cut the chicken into medium pieces (or the breast into large cubes) and season with crushed garlic, salt, pepper and the turmeric. Rest 10 min.",
          "s": null
        },
        {
          "t": "Dice the onion, bell pepper and tomato small. Rinse the rice until the water runs clear and drain.",
          "s": null
        },
        {
          "t": "Heat the oil in a large pot and brown the chicken on all sides.",
          "s": 360
        },
        {
          "t": "Add the onion, pepper and tomato; sauté, scraping the bottom of the pot to lift the browned bits.",
          "s": 180
        },
        {
          "t": "Stir in the rice so it is coated with the fat and turmeric. Pour in boiling water (twice the volume of rice) and adjust the salt.",
          "s": 120
        },
        {
          "t": "Cover and cook on low until the water is absorbed and the rice is fluffy.",
          "s": 960
        },
        {
          "t": "Turn off the heat, rest covered 5 min, stir in the chopped herbs and serve.",
          "s": 300
        }
      ]
    },
    "videoQuery": "como hacer Galinhada Goiana receta paso a paso"
  },
  {
    "id": "br_8",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_8.jpg",
    "title": {
      "es": "Virado à Paulista",
      "pt": "Virado à Paulista",
      "en": "São Paulo Pork & Bean Mash"
    },
    "brTip": {
      "es": "Tutu de feijão espesado con farinha de mandioca + bisteca suína + huevo frito + couve + banana-da-terra.",
      "pt": "Tutu de feijão com farinha de mandioca, bisteca, ovo, couve e banana.",
      "en": "Bean mash thickened with cassava flour, pork chop, egg, and greens."
    },
    "macrosTrad": {
      "kcal": 1112,
      "p": 70,
      "c": 108,
      "f": 44
    },
    "macrosFit": {
      "kcal": 953,
      "p": 68,
      "c": 88,
      "f": 36
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 35,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 80,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 50,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "panceta",
        "grams": 20,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sazona las chuletas o el lomo de cerdo con ajo machacado, jugo de limón, sal y pimienta; deja marinar 10 min.",
          "s": null
        },
        {
          "t": "Asa el cerdo en sartén caliente con unas gotas de aceite hasta dorar por ambos lados y que el centro deje de estar rosado. Reserva tapado.",
          "s": 480
        },
        {
          "t": "Tutu: sofríe ajo y cebolla picados 2 min, agrega el feijão cocido con su caldo y aplasta la mitad de los granos con una cuchara.",
          "s": 180
        },
        {
          "t": "Añade la farinha de mandioca en lluvia, removiendo sin parar, hasta obtener una crema espesa; ajusta la sal.",
          "s": 180
        },
        {
          "t": "Corta la couve en tiras muy finas (enrolla las hojas como un cigarro) y saltéala con ajo y sal solo hasta que brille.",
          "s": 120
        },
        {
          "t": "En la misma sartén dora la banana-da-terra en rodajas y fríe el huevo dejando la yema blanda.",
          "s": 300
        },
        {
          "t": "Sirve todo junto en el plato: arroz, tutu, cerdo, couve, banana y el huevo encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Tempere as bistecas ou o lombo com alho amassado, suco de limão, sal e pimenta; deixe marinar 10 min.",
          "s": null
        },
        {
          "t": "Grelhe o porco em frigideira quente com gotas de óleo até dourar dos dois lados e o centro não estar mais rosado. Reserve tampado.",
          "s": 480
        },
        {
          "t": "Tutu: refogue alho e cebola picados por 2 min, junte o feijão cozido com caldo e amasse metade dos grãos com uma colher.",
          "s": 180
        },
        {
          "t": "Acrescente a farinha de mandioca em chuva, mexendo sem parar, até virar um creme grosso; acerte o sal.",
          "s": 180
        },
        {
          "t": "Corte a couve em tiras bem finas (enrole as folhas como um charuto) e refogue com alho e sal só até brilhar.",
          "s": 120
        },
        {
          "t": "Na mesma frigideira doure a banana-da-terra em rodelas e frite o ovo com a gema mole.",
          "s": 300
        },
        {
          "t": "Sirva tudo junto no prato: arroz, tutu, porco, couve, banana e o ovo por cima.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Season the pork chops or loin with crushed garlic, lime juice, salt and pepper; marinate 10 min.",
          "s": null
        },
        {
          "t": "Sear the pork in a hot pan with a few drops of oil until golden on both sides and no longer pink in the center. Keep covered.",
          "s": 480
        },
        {
          "t": "Tutu: sauté chopped garlic and onion 2 min, add the cooked beans with their broth and mash half of them with a spoon.",
          "s": 180
        },
        {
          "t": "Rain in the cassava flour, stirring constantly, until it becomes a thick cream; adjust the salt.",
          "s": 180
        },
        {
          "t": "Slice the collard greens very thin (roll the leaves like a cigar) and sauté with garlic and salt just until glossy.",
          "s": 120
        },
        {
          "t": "In the same pan brown the plantain slices and fry the egg with a runny yolk.",
          "s": 300
        },
        {
          "t": "Plate everything together: rice, tutu, pork, greens, plantain and the egg on top.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Virado à Paulista receta paso a paso"
  },
  {
    "id": "br_9",
    "country": "BRAZILIAN",
    "time": 22,
    "fav": false,
    "img": "images/br_9.jpg",
    "title": {
      "es": "Bobó de Camarón",
      "pt": "Bobó de Camarão",
      "en": "Shrimp Bobó"
    },
    "brTip": {
      "es": "Crema dorada de mandioca con leite de coco y azeite de dendê (usa tilápia si quieres versión económica).",
      "pt": "Creme de mandioca com leite de coco e dendê (pode usar tilápia ou camarão).",
      "en": "Velvety cassava-coconut cream with shrimp or tilapia."
    },
    "macrosTrad": {
      "kcal": 725,
      "p": 35,
      "c": 89,
      "f": 25
    },
    "macrosFit": {
      "kcal": 567,
      "p": 37,
      "c": 73,
      "f": 15
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 160,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite_coco",
        "grams": 70,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "dende",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela la mandioca, córtala en trozos y retira la fibra central.",
          "s": null
        },
        {
          "t": "Cuécela en agua con sal hasta que esté muy blanda; guarda una taza del agua de cocción.",
          "s": 1200
        },
        {
          "t": "Licúa la mandioca tibia con la leche de coco y un poco del agua de cocción hasta obtener una crema espesa y lisa.",
          "s": null
        },
        {
          "t": "Sazona los camarones (o cubos de tilapia) con limón, sal y ajo; séllalos en sartén muy caliente y retíralos enseguida para que no queden chiclosos.",
          "s": 120
        },
        {
          "t": "En la misma sartén sofríe la cebolla, el pimentón y el tomate picados hasta que se deshagan.",
          "s": 300
        },
        {
          "t": "Vierte la crema de mandioca y el dendê (o aceite de oliva en modo fit); mezcla a fuego bajo. Si queda muy espesa, agrega agua de cocción.",
          "s": 180
        },
        {
          "t": "Devuelve los camarones solo para calentar, espolvorea cilantro y sirve con arroz blanco.",
          "s": 60
        }
      ],
      "pt": [
        {
          "t": "Descasque a mandioca, corte em pedaços e retire a fibra central.",
          "s": null
        },
        {
          "t": "Cozinhe em água com sal até ficar bem macia; guarde uma xícara da água do cozimento.",
          "s": 1200
        },
        {
          "t": "Bata a mandioca morna com o leite de coco e um pouco da água do cozimento até virar um creme grosso e liso.",
          "s": null
        },
        {
          "t": "Tempere os camarões (ou cubos de tilápia) com limão, sal e alho; sele em frigideira bem quente e retire logo para não ficarem borrachudos.",
          "s": 120
        },
        {
          "t": "Na mesma frigideira refogue a cebola, o pimentão e o tomate picados até desmancharem.",
          "s": 300
        },
        {
          "t": "Despeje o creme de mandioca e o dendê (ou azeite no modo fit); misture em fogo baixo. Se ficar grosso demais, junte água do cozimento.",
          "s": 180
        },
        {
          "t": "Volte os camarões só para aquecer, polvilhe coentro e sirva com arroz branco.",
          "s": 60
        }
      ],
      "en": [
        {
          "t": "Peel the cassava, cut it into chunks and remove the central fiber.",
          "s": null
        },
        {
          "t": "Boil in salted water until very soft; save a cup of the cooking water.",
          "s": 1200
        },
        {
          "t": "Blend the warm cassava with the coconut milk and a little cooking water into a thick, smooth cream.",
          "s": null
        },
        {
          "t": "Season the shrimp (or tilapia cubes) with lime, salt and garlic; sear in a very hot pan and remove at once so they do not get rubbery.",
          "s": 120
        },
        {
          "t": "In the same pan sauté the chopped onion, pepper and tomato until they break down.",
          "s": 300
        },
        {
          "t": "Pour in the cassava cream and the dendê (or olive oil in fit mode); stir on low. If too thick, add cooking water.",
          "s": 180
        },
        {
          "t": "Return the shrimp just to heat through, sprinkle with cilantro and serve with white rice.",
          "s": 60
        }
      ]
    },
    "videoQuery": "como hacer Bobó de Camarón receta paso a paso"
  },
  {
    "id": "br_10",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_10.jpg",
    "title": {
      "es": "Feijão Tropeiro Mineiro",
      "pt": "Feijão Tropeiro",
      "en": "Minas Tropeiro Beans"
    },
    "brTip": {
      "es": "Frijol carioca escurrido (sin caldo) salteado con farinha de mandioca, couve, huevo y carne/lingüiça.",
      "pt": "Feijão carioca escorrido salteado com farinha de mandioca, couve, ovo e linguiça.",
      "en": "Drained carioca beans tossed with toasted cassava flour, collards, egg, and pork."
    },
    "macrosTrad": {
      "kcal": 775,
      "p": 33,
      "c": 71,
      "f": 41
    },
    "macrosFit": {
      "kcal": 583,
      "p": 26,
      "c": 58,
      "f": 28
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 140,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 70,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "panceta",
        "grams": 30,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 45,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece el feijão carioca al dente (el grano debe quedar entero) y escúrrelo muy bien en un colador; si usas de lata, enjuágalo.",
          "s": null
        },
        {
          "t": "Corta la panceta (bacon) en cubitos y la lingüiça en rodajas. Pica la cebolla y el ajo; corta la couve en tiras finísimas.",
          "s": null
        },
        {
          "t": "Dora la panceta y la lingüiça en una sartén grande sin aceite (sueltan su grasa) hasta que estén crocantes.",
          "s": 300
        },
        {
          "t": "Agrega la cebolla y el ajo y sofríe hasta que estén transparentes.",
          "s": 180
        },
        {
          "t": "Haz un hueco en el centro, rompe los huevos y revuélvelos ahí mismo hasta cuajar en trozos; mezcla con la carne.",
          "s": 120
        },
        {
          "t": "Añade la couve y, enseguida, el feijão escurrido; mezcla con cuidado para no romper los granos.",
          "s": 60
        },
        {
          "t": "Apaga el fuego y agrega la farinha de mandioca de a pocos, mezclando, hasta que quede suelto y húmedo (no seco). Termina con cheiro-verde y sal al gusto.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o feijão carioca al dente (o grão deve ficar inteiro) e escorra muito bem; se for de lata, enxágue.",
          "s": null
        },
        {
          "t": "Corte o bacon em cubinhos e a linguiça em rodelas. Pique a cebola e o alho; corte a couve em tiras bem finas.",
          "s": null
        },
        {
          "t": "Doure o bacon e a linguiça numa frigideira grande sem óleo (eles soltam gordura) até ficarem crocantes.",
          "s": 300
        },
        {
          "t": "Junte a cebola e o alho e refogue até ficarem transparentes.",
          "s": 180
        },
        {
          "t": "Abra um espaço no centro, quebre os ovos e mexa ali mesmo até firmarem em pedaços; misture com a carne.",
          "s": 120
        },
        {
          "t": "Acrescente a couve e logo o feijão escorrido; misture com cuidado para não quebrar os grãos.",
          "s": 60
        },
        {
          "t": "Desligue o fogo e junte a farinha de mandioca aos poucos, misturando, até ficar soltinho e úmido (não seco). Finalize com cheiro-verde e sal a gosto.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cook the pinto beans al dente (the beans should stay whole) and drain well; if canned, rinse them.",
          "s": null
        },
        {
          "t": "Cut the bacon into small cubes and the sausage into rounds. Chop the onion and garlic; slice the collard greens very thin.",
          "s": null
        },
        {
          "t": "Brown the bacon and sausage in a large pan without oil (they release their fat) until crisp.",
          "s": 300
        },
        {
          "t": "Add the onion and garlic and sauté until translucent.",
          "s": 180
        },
        {
          "t": "Make a well in the center, crack in the eggs and scramble them right there into chunks; mix with the meat.",
          "s": 120
        },
        {
          "t": "Add the greens and then the drained beans; fold gently so the beans do not break.",
          "s": 60
        },
        {
          "t": "Turn off the heat and add the cassava flour little by little, mixing, until loose and moist (not dry). Finish with herbs and salt to taste.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Feijão Tropeiro Mineiro receta paso a paso"
  },
  {
    "id": "br_11",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_11.jpg",
    "title": {
      "es": "Frango com Quiabo Mineiro",
      "pt": "Frango com Quiabo",
      "en": "Minas Chicken & Okra"
    },
    "brTip": {
      "es": "Secreto brasileño para que el quiabo no suelte baba: sécalo bien antes de cortar y dóralo primero en sartén bien caliente con gotas de limón.",
      "pt": "Segredo para o quiabo não babar: seque bem antes de cortar e frite com gotas de limão.",
      "en": "Brazilian trick to avoid slimy okra: dry thoroughly and sear hot with lime juice."
    },
    "macrosTrad": {
      "kcal": 598,
      "p": 49,
      "c": 48,
      "f": 24
    },
    "macrosFit": {
      "kcal": 509,
      "p": 69,
      "c": 43,
      "f": 6
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 175,
        "fitGrams": 195,
        "sub": null,
        "fitId": "frango"
      },
      {
        "id": "quiabo",
        "grams": 130,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Lava el quiabo entero y sécalo completamente con un paño limpio antes de cortarlo en rodajas de 1,5 cm: si está mojado, suelta baba.",
          "s": null
        },
        {
          "t": "En sartén muy caliente con 1 cdta de aceite, saltea el quiabo con unas gotas de limón, sin tapar, hasta que se doren los bordes; reserva.",
          "s": 300
        },
        {
          "t": "Sazona el pollo con ajo machacado, sal y una pizca de páprica.",
          "s": null
        },
        {
          "t": "En una olla con un hilo de aceite dora el pollo por todos lados hasta que suelte color y se forme fondo dorado.",
          "s": 360
        },
        {
          "t": "Agrega la cebolla picada y sofríe 2 min; vierte 1 taza de agua caliente raspando el fondo.",
          "s": 120
        },
        {
          "t": "Tapa y cocina a fuego medio hasta que el pollo esté tierno y la salsa reducida.",
          "s": 900
        },
        {
          "t": "Incorpora el quiabo dorado los últimos minutos solo para integrar sabores, sin revolver mucho. Sirve con arroz o angu.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Lave o quiabo inteiro e seque completamente com um pano limpo antes de cortar em rodelas de 1,5 cm: molhado, ele solta baba.",
          "s": null
        },
        {
          "t": "Em frigideira bem quente com 1 colher (chá) de óleo, salteie o quiabo com gotas de limão, sem tampar, até dourar as bordas; reserve.",
          "s": 300
        },
        {
          "t": "Tempere o frango com alho amassado, sal e uma pitada de páprica.",
          "s": null
        },
        {
          "t": "Numa panela com um fio de óleo doure o frango por todos os lados até pegar cor e formar um fundo dourado.",
          "s": 360
        },
        {
          "t": "Junte a cebola picada e refogue 2 min; despeje 1 xícara de água quente raspando o fundo.",
          "s": 120
        },
        {
          "t": "Tampe e cozinhe em fogo médio até o frango ficar macio e o molho reduzir.",
          "s": 900
        },
        {
          "t": "Incorpore o quiabo dourado nos últimos minutos só para pegar sabor, mexendo pouco. Sirva com arroz ou angu.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Wash the okra whole and dry it completely with a clean cloth before slicing into 1.5 cm rounds: wet okra turns slimy.",
          "s": null
        },
        {
          "t": "In a very hot pan with 1 tsp oil, sauté the okra with a few drops of lime, uncovered, until the edges brown; set aside.",
          "s": 300
        },
        {
          "t": "Season the chicken with crushed garlic, salt and a pinch of paprika.",
          "s": null
        },
        {
          "t": "In a pot with a drizzle of oil brown the chicken on all sides until it colors and leaves a golden base.",
          "s": 360
        },
        {
          "t": "Add the chopped onion and sauté 2 min; pour in 1 cup of hot water, scraping the bottom.",
          "s": 120
        },
        {
          "t": "Cover and cook over medium heat until the chicken is tender and the sauce reduced.",
          "s": 900
        },
        {
          "t": "Fold in the browned okra for the last minutes just to combine flavors, stirring little. Serve with rice or angu.",
          "s": 180
        }
      ]
    },
    "videoQuery": "como hacer Frango com Quiabo Mineiro receta paso a paso"
  },
  {
    "id": "br_12",
    "country": "BRAZILIAN",
    "time": 12,
    "fav": false,
    "img": "images/br_12.jpg",
    "title": {
      "es": "Cuscuz Nordestino con Huevo y Queso",
      "pt": "Cuscuz Nordestino com Ovo e Queijo",
      "en": "Brazilian Corn Couscous"
    },
    "brTip": {
      "es": "Usa 'flocão de milho' (muy barato en todo Brasil) cocido al vapor en cuscuzeira o en plato tapado en microondas 3 min.",
      "pt": "Use flocão de milho hidratado por 10 min e cozido no vapor na cuscuzeira.",
      "en": "Made with hydrated Brazilian cornmeal (flocão) steamed until fluffy."
    },
    "macrosTrad": {
      "kcal": 527,
      "p": 28,
      "c": 32,
      "f": 32
    },
    "macrosFit": {
      "kcal": 380,
      "p": 23,
      "c": 28,
      "f": 19
    },
    "ingredients": [
      {
        "id": "cuscuz",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "coalho",
        "grams": 45,
        "fitGrams": 30,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 5,
        "fitGrams": 2.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "manteiga",
        "grams": 5,
        "fitGrams": 2.5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "En un bol mezcla el flocão de milho con la pizca de sal. Agrega el agua poco a poco, mezclando con los dedos, hasta que quede húmedo pero suelto (como arena mojada).",
          "s": null
        },
        {
          "t": "Deja hidratar para que el maíz absorba toda el agua.",
          "s": 600
        },
        {
          "t": "Pon agua en la base de la cuscuzeira sin que toque la parte perforada. Coloca el maíz hidratado sin presionarlo, para que el vapor pase.",
          "s": null
        },
        {
          "t": "Tapa y cocina al vapor a fuego medio hasta que sientas aroma a maíz cocido y esté firme. (Atajo: bol tapado 3 min en microondas.)",
          "s": 540
        },
        {
          "t": "Mientras tanto, corta el queijo coalho en lonchas y dóralo en sartén antiadherente por ambos lados.",
          "s": 240
        },
        {
          "t": "Haz los huevos estrellados o revueltos en la misma sartén con unas gotas de aceite y sal.",
          "s": 180
        },
        {
          "t": "Desmolda el cuscuz caliente, ponle encima el queso dorado, los huevos y el tomate picado con un hilo de aceite.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Numa tigela misture o flocão com a pitada de sal. Junte a água aos poucos, misturando com os dedos, até ficar úmido mas soltinho (como areia molhada).",
          "s": null
        },
        {
          "t": "Deixe hidratar para o milho absorver toda a água.",
          "s": 600
        },
        {
          "t": "Coloque água na base da cuscuzeira sem encostar na parte furada. Ponha o milho hidratado sem apertar, para o vapor passar.",
          "s": null
        },
        {
          "t": "Tampe e cozinhe no vapor em fogo médio até sentir cheiro de milho cozido e firmar. (Atalho: tigela tampada 3 min no micro-ondas.)",
          "s": 540
        },
        {
          "t": "Enquanto isso, corte o queijo coalho em fatias e doure em frigideira antiaderente dos dois lados.",
          "s": 240
        },
        {
          "t": "Faça os ovos fritos ou mexidos na mesma frigideira com gotas de óleo e sal.",
          "s": 180
        },
        {
          "t": "Desenforme o cuscuz quente e coloque por cima o queijo dourado, os ovos e o tomate picado com um fio de azeite.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "In a bowl mix the flaked corn with the pinch of salt. Add the water gradually, mixing with your fingers, until moist but loose (like wet sand).",
          "s": null
        },
        {
          "t": "Let it hydrate so the corn absorbs all the water.",
          "s": 600
        },
        {
          "t": "Put water in the base of the couscous steamer without touching the perforated part. Add the corn without pressing it, so steam can pass.",
          "s": null
        },
        {
          "t": "Cover and steam over medium heat until it smells of cooked corn and is firm. (Shortcut: covered bowl, 3 min in the microwave.)",
          "s": 540
        },
        {
          "t": "Meanwhile, slice the coalho cheese and brown it in a nonstick pan on both sides.",
          "s": 240
        },
        {
          "t": "Fry or scramble the eggs in the same pan with a few drops of oil and salt.",
          "s": 180
        },
        {
          "t": "Unmold the hot couscous and top with the browned cheese, eggs and chopped tomato with a drizzle of olive oil.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Cuscuz Nordestino con Huevo y Queso receta paso a paso"
  },
  {
    "id": "br_13",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_13.jpg",
    "title": {
      "es": "Caldo Verde Brasileño",
      "pt": "Caldo Verde",
      "en": "Brazilian Potato-Collard Soup"
    },
    "brTip": {
      "es": "Sopa cremosa de papa con tiras ultrafinas de couve-manteiga y rodajas de calabresa o peito de peru.",
      "pt": "Creme de batata com tiras finíssimas de couve e rodelas de calabresa.",
      "en": "Velvety potato soup with shredded collard greens and smoked sausage."
    },
    "macrosTrad": {
      "kcal": 497,
      "p": 19,
      "c": 43,
      "f": 29
    },
    "macrosFit": {
      "kcal": 337,
      "p": 14,
      "c": 38,
      "f": 16
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 180,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 70,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela las papas y córtalas en cubos; pica la cebolla y el ajo. Lava la couve, quítale el tallo central y córtala en tiras finísimas (enrollando las hojas).",
          "s": null
        },
        {
          "t": "Sofríe la cebolla y el ajo en el aceite en una olla hasta que estén transparentes.",
          "s": 180
        },
        {
          "t": "Agrega las papas, cubre con el caldo o agua y una pizca de sal; hierve hasta que estén muy blandas.",
          "s": 900
        },
        {
          "t": "Licúa (o pasa el mixer) las papas con su líquido hasta tener una crema espesa y lisa. Si queda muy espesa, agrega agua caliente.",
          "s": null
        },
        {
          "t": "Aparte, dora las rodajas de lingüiça (o el pollo desmenuzado en modo fit) en una sartén.",
          "s": 240
        },
        {
          "t": "Lleva la crema de nuevo a hervor suave, añade la carne y la couve y cocina solo hasta que la couve esté verde brillante.",
          "s": 120
        },
        {
          "t": "Prueba la sal, sirve bien caliente en tazón y termina con un hilo de aceite de oliva.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Descasque as batatas e corte em cubos; pique a cebola e o alho. Lave a couve, tire o talo central e corte em tiras finíssimas (enrolando as folhas).",
          "s": null
        },
        {
          "t": "Refogue a cebola e o alho no azeite numa panela até ficarem transparentes.",
          "s": 180
        },
        {
          "t": "Junte as batatas, cubra com o caldo ou água e uma pitada de sal; ferva até ficarem bem moles.",
          "s": 900
        },
        {
          "t": "Bata (ou passe o mixer) as batatas com o líquido até virar um creme grosso e liso. Se ficar grosso demais, junte água quente.",
          "s": null
        },
        {
          "t": "À parte, doure as rodelas de linguiça (ou o frango desfiado no modo fit) numa frigideira.",
          "s": 240
        },
        {
          "t": "Volte o creme à fervura suave, junte a carne e a couve e cozinhe só até a couve ficar verde brilhante.",
          "s": 120
        },
        {
          "t": "Acerte o sal, sirva bem quente numa tigela e finalize com um fio de azeite.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Peel and cube the potatoes; chop the onion and garlic. Wash the collard greens, remove the central stem and slice them very thin (rolling the leaves).",
          "s": null
        },
        {
          "t": "Sauté the onion and garlic in the olive oil in a pot until translucent.",
          "s": 180
        },
        {
          "t": "Add the potatoes, cover with stock or water and a pinch of salt; boil until very soft.",
          "s": 900
        },
        {
          "t": "Blend (or use a stick blender) the potatoes with their liquid into a thick, smooth cream. If too thick, add hot water.",
          "s": null
        },
        {
          "t": "Separately, brown the sausage slices (or shredded chicken in fit mode) in a pan.",
          "s": 240
        },
        {
          "t": "Bring the soup back to a gentle boil, add the meat and greens and cook just until the greens are bright green.",
          "s": 120
        },
        {
          "t": "Check the salt, serve piping hot in a bowl and finish with a drizzle of olive oil.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Caldo Verde Brasileño receta paso a paso"
  },
  {
    "id": "br_14",
    "country": "BRAZILIAN",
    "time": 20,
    "fav": false,
    "img": "images/br_14.jpg",
    "title": {
      "es": "Arroz Carreteiro Gaúcho",
      "pt": "Arroz Carreteiro",
      "en": "Gaucho Beef & Rice"
    },
    "brTip": {
      "es": "Tradicional del sur de Brasil: ideal para aprovechar carne asada del día anterior o carne seca.",
      "pt": "Clássico gaúcho: ótimo para aproveitar sobras de churrasco ou carne seca.",
      "en": "Southern Brazilian classic using cured beef or leftover steak."
    },
    "macrosTrad": {
      "kcal": 531,
      "p": 50,
      "c": 46,
      "f": 15
    },
    "macrosFit": {
      "kcal": 535,
      "p": 55,
      "c": 38,
      "f": 17
    },
    "ingredients": [
      {
        "id": "carne_seca",
        "grams": 130,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Si usas carne seca, desálala hirviéndola 15 min y escúrrela; córtala (o el patinho) en cubos pequeños de 1 cm.",
          "s": null
        },
        {
          "t": "Pica la cebolla, el ajo, el pimentón y el tomate. Lava el arroz y escúrrelo.",
          "s": null
        },
        {
          "t": "Dora la carne en una olla caliente con un hilo de aceite hasta que esté bien dorada.",
          "s": 300
        },
        {
          "t": "Agrega la cebolla, el ajo y el pimentón y sofríe hasta que ablanden.",
          "s": 180
        },
        {
          "t": "Incorpora el tomate y el arroz crudo; mezcla para sellar los granos.",
          "s": 120
        },
        {
          "t": "Cubre con agua caliente (2 dedos por encima del arroz), prueba la sal, tapa y cocina a fuego bajo hasta que se seque.",
          "s": 900
        },
        {
          "t": "Deja reposar tapado 5 min, suelta el arroz con un tenedor y termina con abundante cheiro-verde.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Se usar carne seca, dessalgue fervendo 15 min e escorra; corte (ou o patinho) em cubinhos de 1 cm.",
          "s": null
        },
        {
          "t": "Pique a cebola, o alho, o pimentão e o tomate. Lave o arroz e escorra.",
          "s": null
        },
        {
          "t": "Doure a carne numa panela quente com um fio de óleo até ficar bem dourada.",
          "s": 300
        },
        {
          "t": "Junte a cebola, o alho e o pimentão e refogue até amolecerem.",
          "s": 180
        },
        {
          "t": "Incorpore o tomate e o arroz cru; misture para selar os grãos.",
          "s": 120
        },
        {
          "t": "Cubra com água quente (2 dedos acima do arroz), acerte o sal, tampe e cozinhe em fogo baixo até secar.",
          "s": 900
        },
        {
          "t": "Deixe descansar tampado 5 min, solte o arroz com um garfo e finalize com bastante cheiro-verde.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "If using dried beef, desalt it by boiling 15 min and drain; cut it (or the lean beef) into small 1 cm cubes.",
          "s": null
        },
        {
          "t": "Chop the onion, garlic, bell pepper and tomato. Rinse and drain the rice.",
          "s": null
        },
        {
          "t": "Brown the meat in a hot pot with a drizzle of oil until well browned.",
          "s": 300
        },
        {
          "t": "Add the onion, garlic and pepper and sauté until soft.",
          "s": 180
        },
        {
          "t": "Stir in the tomato and raw rice to coat the grains.",
          "s": 120
        },
        {
          "t": "Cover with hot water (2 fingers above the rice), check the salt, cover and cook on low until dry.",
          "s": 900
        },
        {
          "t": "Rest covered 5 min, fluff with a fork and finish with plenty of fresh herbs.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Arroz Carreteiro Gaúcho receta paso a paso"
  },
  {
    "id": "br_15",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_15.jpg",
    "title": {
      "es": "Vaca Atolada (Carne con Mandioca)",
      "pt": "Vaca Atolada",
      "en": "Braised Beef & Cassava"
    },
    "brTip": {
      "es": "La mandioca se deshace parcialmente espesando el caldo de la carne de forma natural.",
      "pt": "A mandioca derrete levemente deixando o caldo da carne naturalmente cremoso.",
      "en": "Cassava partially melts into the beef broth creating a rich stew."
    },
    "macrosTrad": {
      "kcal": 636,
      "p": 36,
      "c": 62,
      "f": 28
    },
    "macrosFit": {
      "kcal": 451,
      "p": 23,
      "c": 54,
      "f": 17
    },
    "ingredients": [
      {
        "id": "falda_res",
        "grams": 170,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 160,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en cubos medianos (4 cm), sécala con papel y sazónala con sal y pimienta. Pela la mandioca, córtala en trozos y quita la fibra central.",
          "s": null
        },
        {
          "t": "Calienta la olla (a presión o normal) con un hilo de aceite y sella la carne a fuego fuerte, en tandas, hasta dorar bien los bordes.",
          "s": 360
        },
        {
          "t": "Agrega la cebolla, el ajo y el tomate picados y sofríe raspando el fondo.",
          "s": 180
        },
        {
          "t": "Cubre con agua caliente y cocina hasta que la carne esté blanda: 20 min en olla a presión (o unos 45 min en olla normal).",
          "s": 1200
        },
        {
          "t": "Libera la presión con cuidado y abre la olla.",
          "s": null
        },
        {
          "t": "Agrega la mandioca y cocina sin tapa hasta que esté suave y empiece a deshacerse, espesando el caldo (la carne queda “atolada” en el puré).",
          "s": 720
        },
        {
          "t": "Prueba la sal, termina con cheiro-verde picado y sirve en plato hondo.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em cubos médios (4 cm), seque com papel e tempere com sal e pimenta. Descasque a mandioca, corte em pedaços e tire a fibra central.",
          "s": null
        },
        {
          "t": "Aqueça a panela (de pressão ou comum) com um fio de óleo e sele a carne em fogo alto, em partes, até dourar bem as bordas.",
          "s": 360
        },
        {
          "t": "Junte a cebola, o alho e o tomate picados e refogue raspando o fundo.",
          "s": 180
        },
        {
          "t": "Cubra com água quente e cozinhe até a carne amaciar: 20 min na pressão (ou uns 45 min em panela comum).",
          "s": 1200
        },
        {
          "t": "Tire a pressão com cuidado e abra a panela.",
          "s": null
        },
        {
          "t": "Junte a mandioca e cozinhe sem tampa até ficar macia e começar a desmanchar, engrossando o caldo (a carne fica “atolada”).",
          "s": 720
        },
        {
          "t": "Acerte o sal, finalize com cheiro-verde picado e sirva em prato fundo.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the beef into medium cubes (4 cm), pat dry and season with salt and pepper. Peel the cassava, cut into chunks and remove the central fiber.",
          "s": null
        },
        {
          "t": "Heat the pot (pressure cooker or regular) with a drizzle of oil and sear the beef over high heat in batches until the edges are well browned.",
          "s": 360
        },
        {
          "t": "Add the chopped onion, garlic and tomato and sauté, scraping the bottom.",
          "s": 180
        },
        {
          "t": "Cover with hot water and cook until the beef is tender: 20 min in a pressure cooker (or about 45 min in a regular pot).",
          "s": 1200
        },
        {
          "t": "Release the pressure carefully and open the pot.",
          "s": null
        },
        {
          "t": "Add the cassava and cook uncovered until soft and starting to break down, thickening the broth (the beef ends up “stuck” in the purée).",
          "s": 720
        },
        {
          "t": "Check the salt, finish with chopped herbs and serve in a deep plate.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Vaca Atolada (Carne con Mandioca) receta paso a paso"
  },
  {
    "id": "br_16",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_16.jpg",
    "title": {
      "es": "Vatapá Baiano de Camarón",
      "pt": "Vatapá Baiano de Camarão",
      "en": "Bahian Shrimp Vatapá"
    },
    "brTip": {
      "es": "Crema bahiana de pan remojado (o avena), leite de coco, amendoim torrado, camarón/pollo y dendê.",
      "pt": "Creme de pão amanhecido (ou aveia), leite de coco, amendoim e camarão/frango.",
      "en": "Creamy bread-coconut-peanut sauce with shrimp or chicken."
    },
    "macrosTrad": {
      "kcal": 787,
      "p": 39,
      "c": 70,
      "f": 40
    },
    "macrosFit": {
      "kcal": 572,
      "p": 38,
      "c": 55,
      "f": 23
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 130,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 60,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite_coco",
        "grams": 80,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "amendoim",
        "grams": 25,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "dende",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el pan del día anterior en trozos y remójalo en la leche de coco con 1/2 taza de agua.",
          "s": null
        },
        {
          "t": "Deja que el pan se ablande por completo.",
          "s": 300
        },
        {
          "t": "Licúa el pan remojado con el maní tostado, la cebolla, el tomate y el jengibre hasta tener una pasta espesa y lisa.",
          "s": null
        },
        {
          "t": "Sazona los camarones (o el pollo) con sal y séllalos rápido en sartén caliente; retira.",
          "s": 120
        },
        {
          "t": "Pasa la pasta a una olla a fuego medio-bajo y remueve sin parar con cuchara de madera hasta que se despegue del fondo. Si espesa demasiado, agrega agua.",
          "s": 480
        },
        {
          "t": "Agrega los camarones y el dendê (o aceite de oliva en modo fit); cocina y ajusta la sal.",
          "s": 180
        },
        {
          "t": "Sirve caliente con arroz blanco; en Bahía también se usa para rellenar acarajé.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte o pão amanhecido em pedaços e deixe de molho no leite de coco com 1/2 xícara de água.",
          "s": null
        },
        {
          "t": "Deixe o pão amolecer por completo.",
          "s": 300
        },
        {
          "t": "Bata o pão demolhado com o amendoim torrado, a cebola, o tomate e o gengibre até virar uma pasta grossa e lisa.",
          "s": null
        },
        {
          "t": "Tempere os camarões (ou o frango) com sal e sele rapidamente em frigideira quente; retire.",
          "s": 120
        },
        {
          "t": "Leve a pasta a uma panela em fogo médio-baixo e mexa sem parar com colher de pau até soltar do fundo. Se engrossar demais, junte água.",
          "s": 480
        },
        {
          "t": "Junte os camarões e o dendê (ou azeite no modo fit); cozinhe e acerte o sal.",
          "s": 180
        },
        {
          "t": "Sirva quente com arroz branco; na Bahia também recheia o acarajé.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Tear the day-old bread into pieces and soak it in the coconut milk with 1/2 cup water.",
          "s": null
        },
        {
          "t": "Let the bread soften completely.",
          "s": 300
        },
        {
          "t": "Blend the soaked bread with the roasted peanuts, onion, tomato and ginger into a thick, smooth paste.",
          "s": null
        },
        {
          "t": "Season the shrimp (or chicken) with salt and sear quickly in a hot pan; remove.",
          "s": 120
        },
        {
          "t": "Transfer the paste to a pot over medium-low heat and stir constantly with a wooden spoon until it pulls away from the bottom. Add water if it gets too thick.",
          "s": 480
        },
        {
          "t": "Add the shrimp and the dendê (or olive oil in fit mode); cook and adjust the salt.",
          "s": 180
        },
        {
          "t": "Serve hot with white rice; in Bahia it is also used to fill acarajé.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Vatapá Baiano de Camarón receta paso a paso"
  },
  {
    "id": "br_17",
    "country": "BRAZILIAN",
    "time": 20,
    "fav": false,
    "img": "images/br_17.jpg",
    "title": {
      "es": "Bife à Cavalo Brasileño",
      "pt": "Bife à Cavalo",
      "en": "Brazilian Steak & Egg"
    },
    "brTip": {
      "es": "El almuerzo clásico de todo Brasil: bife ancho con huevo frito de yema blanda encima, arroz, feijão y papas.",
      "pt": "Clássico do PF brasileiro: bife acebolado com ovo de gema mole por cima, arroz e feijão.",
      "en": "Classic Brazilian lunch plate: seared steak crowned with a sunny-side-up egg."
    },
    "macrosTrad": {
      "kcal": 826,
      "p": 78,
      "c": 59,
      "f": 29
    },
    "macrosFit": {
      "kcal": 766,
      "p": 82,
      "c": 47,
      "f": 26
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 170,
        "fitGrams": 185,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "feijao",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 80,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Saca la carne de la nevera 10 min antes y sécala muy bien con papel (si está húmeda, no dora).",
          "s": null
        },
        {
          "t": "Pica el ajo y corta la cebolla en rodajas. Ten listos el arroz y el feijão calientes.",
          "s": null
        },
        {
          "t": "Sazona el bife con sal y ajo solo justo antes de ponerlo en la sartén (la sal antes le saca jugo).",
          "s": null
        },
        {
          "t": "Calienta la sartén hasta que casi humee, pon un hilo de aceite y sella el bife sin aplastarlo ni moverlo; voltea una sola vez.",
          "s": 300
        },
        {
          "t": "Retíralo a un plato caliente y deja reposar mientras, en la misma sartén, salteas la cebolla.",
          "s": 120
        },
        {
          "t": "Fríe el huevo con unas gotas de aceite, echándole aceite caliente por encima con una cuchara para cuajar la clara sin endurecer la yema.",
          "s": 180
        },
        {
          "t": "Pon el huevo “a caballo” sobre el bife con la cebolla y sirve con arroz blanco y feijão.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Tire a carne da geladeira 10 min antes e seque muito bem com papel (úmida, ela não doura).",
          "s": null
        },
        {
          "t": "Pique o alho e corte a cebola em rodelas. Deixe o arroz e o feijão quentes prontos.",
          "s": null
        },
        {
          "t": "Tempere o bife com sal e alho só na hora de ir para a frigideira (o sal antes tira o suco).",
          "s": null
        },
        {
          "t": "Aqueça a frigideira até quase fumegar, coloque um fio de óleo e sele o bife sem apertar nem mexer; vire uma vez só.",
          "s": 300
        },
        {
          "t": "Retire para um prato quente e deixe descansar enquanto, na mesma frigideira, salteia a cebola.",
          "s": 120
        },
        {
          "t": "Frite o ovo com gotas de óleo, jogando óleo quente por cima com uma colher para firmar a clara sem endurecer a gema.",
          "s": 180
        },
        {
          "t": "Coloque o ovo “a cavalo” sobre o bife com a cebola e sirva com arroz branco e feijão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Take the steak out of the fridge 10 min ahead and pat it very dry (a wet steak will not brown).",
          "s": null
        },
        {
          "t": "Chop the garlic and slice the onion. Have the rice and beans hot and ready.",
          "s": null
        },
        {
          "t": "Season the steak with salt and garlic only right before it goes in the pan (salting early draws out juice).",
          "s": null
        },
        {
          "t": "Heat the pan until almost smoking, add a drizzle of oil and sear the steak without pressing or moving it; flip only once.",
          "s": 300
        },
        {
          "t": "Move it to a warm plate to rest while you sauté the onion in the same pan.",
          "s": 120
        },
        {
          "t": "Fry the egg with a few drops of oil, spooning hot oil over the top to set the white without hardening the yolk.",
          "s": 180
        },
        {
          "t": "Place the egg “on horseback” over the steak with the onion and serve with white rice and beans.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Bife à Cavalo Brasileño receta paso a paso"
  },
  {
    "id": "br_18",
    "country": "BRAZILIAN",
    "time": 22,
    "fav": false,
    "img": "images/br_18.jpg",
    "title": {
      "es": "Frango à Passarinho",
      "pt": "Frango à Passarinho",
      "en": "Crispy Brazilian Garlic-Lime Chicken"
    },
    "brTip": {
      "es": "Crocante por fuera con mucho ajo frito, limón y perejil (en modo fit queda genial en airfryer).",
      "pt": "Crocante com muito alho dourado, limão e salsinha (ótimo na airfryer).",
      "en": "Crispy bite-sized chicken tossed with fried garlic, lime, and parsley."
    },
    "macrosTrad": {
      "kcal": 689,
      "p": 46,
      "c": 40,
      "f": 39
    },
    "macrosFit": {
      "kcal": 534,
      "p": 67,
      "c": 36,
      "f": 13
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 180,
        "fitGrams": 200,
        "sub": null,
        "fitId": "frango"
      },
      {
        "id": "alho",
        "grams": 20,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el pollo en trozos pequeños tamaño bocado (con hueso, con un cuchillo pesado; o pechuga en cubos).",
          "s": null
        },
        {
          "t": "Marina con el jugo de limón, la mitad del ajo machacado, sal y pimienta.",
          "s": 900
        },
        {
          "t": "Escurre y seca ligeramente los trozos con papel para que queden crocantes.",
          "s": null
        },
        {
          "t": "Cocina en airfryer a 200 °C, agitando la canasta a mitad de tiempo, hasta que estén muy dorados (o fríe en aceite caliente por tandas).",
          "s": 1080
        },
        {
          "t": "Mientras, lamina el resto del ajo y dóralo en una sartén con un poco de aceite a fuego bajo hasta que esté apenas dorado (si se quema, amarga).",
          "s": 60
        },
        {
          "t": "Mezcla el pollo caliente con el ajo dorado, el perejil picado y más gotas de limón.",
          "s": null
        },
        {
          "t": "Sirve como tapa (petisco) con mandioca cocida o frita y rodajas de limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte o frango em pedaços pequenos (com osso, usando uma faca pesada; ou peito em cubos).",
          "s": null
        },
        {
          "t": "Marine com o suco de limão, metade do alho amassado, sal e pimenta.",
          "s": 900
        },
        {
          "t": "Escorra e seque levemente os pedaços com papel para ficarem crocantes.",
          "s": null
        },
        {
          "t": "Asse na airfryer a 200 °C, sacudindo o cesto na metade do tempo, até ficarem bem dourados (ou frite em óleo quente aos poucos).",
          "s": 1080
        },
        {
          "t": "Enquanto isso, lamine o resto do alho e doure numa frigideira com um pouco de óleo em fogo baixo até ficar levemente dourado (queimado amarga).",
          "s": 60
        },
        {
          "t": "Misture o frango quente com o alho dourado, a salsinha picada e mais gotas de limão.",
          "s": null
        },
        {
          "t": "Sirva como petisco com mandioca cozida ou frita e rodelas de limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the chicken into small bite-sized pieces (bone-in with a heavy knife, or breast in cubes).",
          "s": null
        },
        {
          "t": "Marinate with the lime juice, half the crushed garlic, salt and pepper.",
          "s": 900
        },
        {
          "t": "Drain and lightly pat the pieces dry so they get crispy.",
          "s": null
        },
        {
          "t": "Air-fry at 200 °C, shaking the basket halfway, until deeply golden (or fry in hot oil in batches).",
          "s": 1080
        },
        {
          "t": "Meanwhile, slice the remaining garlic and fry it gently in a little oil until just golden (burnt garlic is bitter).",
          "s": 60
        },
        {
          "t": "Toss the hot chicken with the golden garlic, chopped parsley and more lime.",
          "s": null
        },
        {
          "t": "Serve as a snack with boiled or fried cassava and lime wedges.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Frango à Passarinho receta paso a paso"
  },
  {
    "id": "br_19",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_19.jpg",
    "title": {
      "es": "Picadinho Carioca",
      "pt": "Picadinho Carioca",
      "en": "Rio-Style Diced Beef"
    },
    "brTip": {
      "es": "Cubos pequeños de carne tierna en salsa oscura con huevo pochado/frito, farofa y plátano.",
      "pt": "Cubinhos de carne em molho escuro brilhante, servido com ovo, arroz e farofa.",
      "en": "Tender diced beef in glossy gravy served with egg, rice, and farofa."
    },
    "macrosTrad": {
      "kcal": 714,
      "p": 72,
      "c": 61,
      "f": 18
    },
    "macrosFit": {
      "kcal": 710,
      "p": 78,
      "c": 50,
      "f": 20
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 165,
        "fitGrams": 180,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "shoyu",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "farinha_mandioca",
        "grams": 25,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en cubos pequeños y parejos de 1 cm, sécalos con papel y sazona con sal y pimienta.",
          "s": null
        },
        {
          "t": "Pica la cebolla, el ajo y el tomate. Ten listos el arroz, el huevo y la farofa.",
          "s": null
        },
        {
          "t": "Calienta bien una sartén con un hilo de aceite y sella la carne en 2 tandas (si la amontonas, hierve en vez de dorar).",
          "s": 240
        },
        {
          "t": "Retira la carne y, en la misma sartén, sofríe la cebolla, el ajo y el tomate hasta que se deshagan.",
          "s": 240
        },
        {
          "t": "Agrega 1 cda de shoyu y 1/2 taza de agua caliente, raspando el fondo para disolver lo dorado.",
          "s": null
        },
        {
          "t": "Devuelve la carne, tapa y cocina a fuego bajo hasta que la salsa quede brillante y espesa.",
          "s": 600
        },
        {
          "t": "Sirve con arroz blanco, un huevo frito o pochado encima y farofa al lado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em cubinhos regulares de 1 cm, seque com papel e tempere com sal e pimenta.",
          "s": null
        },
        {
          "t": "Pique a cebola, o alho e o tomate. Deixe prontos o arroz, o ovo e a farofa.",
          "s": null
        },
        {
          "t": "Aqueça bem uma frigideira com um fio de óleo e sele a carne em 2 levas (amontoada, ela cozinha em vez de dourar).",
          "s": 240
        },
        {
          "t": "Retire a carne e, na mesma frigideira, refogue a cebola, o alho e o tomate até desmancharem.",
          "s": 240
        },
        {
          "t": "Junte 1 colher de shoyu e 1/2 xícara de água quente, raspando o fundo para soltar o dourado.",
          "s": null
        },
        {
          "t": "Volte a carne, tampe e cozinhe em fogo baixo até o molho ficar brilhante e encorpado.",
          "s": 600
        },
        {
          "t": "Sirva com arroz branco, um ovo frito ou pochê por cima e farofa ao lado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the beef into small even 1 cm cubes, pat dry and season with salt and pepper.",
          "s": null
        },
        {
          "t": "Chop the onion, garlic and tomato. Have the rice, egg and farofa ready.",
          "s": null
        },
        {
          "t": "Heat a pan well with a drizzle of oil and sear the beef in 2 batches (crowded meat steams instead of browning).",
          "s": 240
        },
        {
          "t": "Remove the beef and, in the same pan, sauté the onion, garlic and tomato until they break down.",
          "s": 240
        },
        {
          "t": "Add 1 tbsp soy sauce and 1/2 cup hot water, scraping the bottom to dissolve the browned bits.",
          "s": null
        },
        {
          "t": "Return the beef, cover and cook on low until the sauce is glossy and thick.",
          "s": 600
        },
        {
          "t": "Serve with white rice, a fried or poached egg on top and farofa on the side.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Picadinho Carioca receta paso a paso"
  },
  {
    "id": "br_20",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_20.jpg",
    "title": {
      "es": "Canja de Galinha Brasileña",
      "pt": "Canja de Galinha",
      "en": "Brazilian Chicken Rice Soup"
    },
    "brTip": {
      "es": "Sopa reconfortante de pollo desmenuzado con arroz, zanahoria, papa y cheiro-verde.",
      "pt": "Sopa leve e reconfortante com frango desfiado, arroz, cenoura e batata.",
      "en": "Comforting Brazilian chicken, rice, carrot, and potato soup."
    },
    "macrosTrad": {
      "kcal": 428,
      "p": 53,
      "c": 42,
      "f": 4
    },
    "macrosFit": {
      "kcal": 431,
      "p": 58,
      "c": 37,
      "f": 5
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 60,
        "fitGrams": 50,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "cenoura",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 80,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica la cebolla y el ajo; pela la zanahoria y la papa y córtalas en cubitos. Lava el arroz.",
          "s": null
        },
        {
          "t": "En una olla con un hilo de aceite sofríe la cebolla y el ajo; dora la pechuga entera por ambos lados.",
          "s": 360
        },
        {
          "t": "Agrega la zanahoria, la papa, 1 litro de agua y sal; hierve hasta que el pollo esté cocido.",
          "s": 900
        },
        {
          "t": "Retira el pollo, desmenúzalo con dos tenedores y devuélvelo a la olla.",
          "s": null
        },
        {
          "t": "Añade el arroz y cocina a fuego medio hasta que esté muy suave y el caldo se ponga ligeramente cremoso.",
          "s": 900
        },
        {
          "t": "Si espesa demasiado, agrega agua caliente; la canja debe quedar caldosa. Ajusta la sal.",
          "s": null
        },
        {
          "t": "Apaga, mezcla el cheiro-verde picado y sirve bien caliente.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Pique a cebola e o alho; descasque a cenoura e a batata e corte em cubinhos. Lave o arroz.",
          "s": null
        },
        {
          "t": "Numa panela com um fio de óleo refogue a cebola e o alho; doure o peito inteiro dos dois lados.",
          "s": 360
        },
        {
          "t": "Junte a cenoura, a batata, 1 litro de água e sal; ferva até o frango cozinhar.",
          "s": 900
        },
        {
          "t": "Retire o frango, desfie com dois garfos e volte à panela.",
          "s": null
        },
        {
          "t": "Acrescente o arroz e cozinhe em fogo médio até ficar bem macio e o caldo levemente cremoso.",
          "s": 900
        },
        {
          "t": "Se engrossar demais, junte água quente; a canja deve ficar caldosa. Acerte o sal.",
          "s": null
        },
        {
          "t": "Desligue, misture o cheiro-verde picado e sirva bem quente.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Chop the onion and garlic; peel and dice the carrot and potato. Rinse the rice.",
          "s": null
        },
        {
          "t": "In a pot with a drizzle of oil sauté the onion and garlic; brown the whole breast on both sides.",
          "s": 360
        },
        {
          "t": "Add the carrot, potato, 1 liter of water and salt; boil until the chicken is cooked.",
          "s": 900
        },
        {
          "t": "Remove the chicken, shred it with two forks and return it to the pot.",
          "s": null
        },
        {
          "t": "Add the rice and cook over medium heat until very soft and the broth turns slightly creamy.",
          "s": 900
        },
        {
          "t": "If it gets too thick, add hot water; canja should stay brothy. Adjust the salt.",
          "s": null
        },
        {
          "t": "Turn off the heat, stir in the chopped herbs and serve piping hot.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Canja de Galinha Brasileña receta paso a paso"
  },
  {
    "id": "br_21",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_21.jpg",
    "title": {
      "es": "Filé à Parmegiana",
      "pt": "Filé à Parmegiana",
      "en": "Beef Parmigiana (Filé à Parmegiana)"
    },
    "brTip": {
      "es": "Filete empanizado cubierto con salsa de tomate casera y queijo derretido, servido con arroz y papas.",
      "pt": "Filé empanado coberto com molho de tomate e queijo derretido, servido com arroz.",
      "en": "Breaded cutlet baked under tomato sauce and melted cheese."
    },
    "macrosTrad": {
      "kcal": 945,
      "p": 86,
      "c": 82,
      "f": 28
    },
    "macrosFit": {
      "kcal": 840,
      "p": 86,
      "c": 68,
      "f": 23
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 170,
        "fitGrams": 185,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pan_rallado",
        "grams": 30,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_trigo",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 50,
        "fitGrams": 35,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "batata",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en bifes de 1 cm y golpéalos suave para emparejar el grosor. Sazona con ajo, sal y pimienta.",
          "s": null
        },
        {
          "t": "Prepara 3 platos: harina, huevo batido con una pizca de sal, y pan rallado.",
          "s": null
        },
        {
          "t": "Pasa cada bife por harina, luego por huevo y por último por el pan rallado, presionando bien para que se adhiera.",
          "s": null
        },
        {
          "t": "Dóralos en sartén con aceite a fuego medio por ambos lados, o cocínalos en airfryer a 190 °C con un rocío de aceite, volteando a la mitad.",
          "s": 720
        },
        {
          "t": "Mientras, calienta la salsa de tomate con ajo y sal (o licúa los tomates y cocínalos hasta espesar).",
          "s": 480
        },
        {
          "t": "Pon los filetes en una fuente, cúbrelos con salsa y láminas de queso, y llévalos al horno o airfryer hasta que el queso se derrita y dore.",
          "s": 240
        },
        {
          "t": "Sirve de inmediato con arroz blanco (y papas fritas o puré, a la brasileña).",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em bifes de 1 cm e bata levemente para igualar a espessura. Tempere com alho, sal e pimenta.",
          "s": null
        },
        {
          "t": "Prepare 3 pratos: farinha de trigo, ovo batido com uma pitada de sal e farinha de rosca.",
          "s": null
        },
        {
          "t": "Passe cada bife na farinha, depois no ovo e por último na farinha de rosca, pressionando bem para grudar.",
          "s": null
        },
        {
          "t": "Doure em frigideira com óleo em fogo médio dos dois lados, ou asse na airfryer a 190 °C com óleo borrifado, virando na metade.",
          "s": 720
        },
        {
          "t": "Enquanto isso, aqueça o molho de tomate com alho e sal (ou bata os tomates e cozinhe até engrossar).",
          "s": 480
        },
        {
          "t": "Coloque os filés num refratário, cubra com molho e fatias de queijo e leve ao forno ou airfryer até o queijo derreter e dourar.",
          "s": 240
        },
        {
          "t": "Sirva na hora com arroz branco (e batata frita ou purê, à brasileira).",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the beef into 1 cm steaks and pound lightly to an even thickness. Season with garlic, salt and pepper.",
          "s": null
        },
        {
          "t": "Set up 3 plates: flour, egg beaten with a pinch of salt, and breadcrumbs.",
          "s": null
        },
        {
          "t": "Dredge each steak in flour, then egg and finally breadcrumbs, pressing well so it sticks.",
          "s": null
        },
        {
          "t": "Brown in a pan with oil over medium heat on both sides, or air-fry at 190 °C with a spray of oil, flipping halfway.",
          "s": 720
        },
        {
          "t": "Meanwhile, heat the tomato sauce with garlic and salt (or blend the tomatoes and cook until thick).",
          "s": 480
        },
        {
          "t": "Place the cutlets in a dish, cover with sauce and cheese slices and bake or air-fry until the cheese melts and browns.",
          "s": 240
        },
        {
          "t": "Serve right away with white rice (and fries or mash, Brazilian style).",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Filé à Parmegiana receta paso a paso"
  },
  {
    "id": "br_22",
    "country": "BRAZILIAN",
    "time": 22,
    "fav": false,
    "img": "images/br_22.jpg",
    "title": {
      "es": "Salpicão de Frango Brasileño",
      "pt": "Salpicão de Frango",
      "en": "Brazilian Shredded Chicken Salad"
    },
    "brTip": {
      "es": "Pollo desmenuzado frío con zanahoria rallada, milho verde, manzana verde opcional, mayonesa/iogurte y batata palha al servir.",
      "pt": "Frango desfiado com cenoura ralada, milho, maionese/iogurte e batata palha.",
      "en": "Chilled chicken salad with grated carrot, corn, creamy dressing, and potato sticks."
    },
    "macrosTrad": {
      "kcal": 585,
      "p": 54,
      "c": 31,
      "f": 27
    },
    "macrosFit": {
      "kcal": 401,
      "p": 58,
      "c": 30,
      "f": 5
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "maionesa",
        "grams": 30,
        "fitGrams": 15,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "maca",
        "grams": 30,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pon la pechuga en una olla con agua, sal y 1 hoja de laurel.",
          "s": null
        },
        {
          "t": "Cuécela a fuego medio hasta que esté blanca por dentro; deja entibiar en el caldo para que no se seque.",
          "s": 900
        },
        {
          "t": "Desmenúzala bien fina con dos tenedores y déjala enfriar por completo.",
          "s": null
        },
        {
          "t": "Ralla la zanahoria cruda por el lado grueso, pica la cebolla muy fina, escurre el maíz y corta la manzana en cubitos (opcional). Pica las aceitunas.",
          "s": null
        },
        {
          "t": "Mezcla la mayonesa con sal, pimienta y unas gotas de limón para el aderezo.",
          "s": null
        },
        {
          "t": "Une el pollo con las verduras y el aderezo en un bol grande; tapa y refrigera para que se integren los sabores.",
          "s": 900
        },
        {
          "t": "Sirve frío y agrega la batata palha justo al momento de servir para que siga crocante.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Coloque o peito numa panela com água, sal e 1 folha de louro.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo médio até ficar branco por dentro; deixe amornar no caldo para não ressecar.",
          "s": 900
        },
        {
          "t": "Desfie bem fino com dois garfos e deixe esfriar completamente.",
          "s": null
        },
        {
          "t": "Rale a cenoura crua no lado grosso, pique a cebola bem fina, escorra o milho e corte a maçã em cubinhos (opcional). Pique as azeitonas.",
          "s": null
        },
        {
          "t": "Misture a maionese com sal, pimenta e gotas de limão para o molho.",
          "s": null
        },
        {
          "t": "Junte o frango com os legumes e o molho numa tigela grande; tampe e leve à geladeira para os sabores se integrarem.",
          "s": 900
        },
        {
          "t": "Sirva gelado e coloque a batata palha só na hora de servir para continuar crocante.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Put the chicken breast in a pot with water, salt and 1 bay leaf.",
          "s": null
        },
        {
          "t": "Simmer over medium heat until white inside; let it cool in the broth so it does not dry out.",
          "s": 900
        },
        {
          "t": "Shred it very finely with two forks and let it cool completely.",
          "s": null
        },
        {
          "t": "Grate the raw carrot on the coarse side, mince the onion, drain the corn and dice the apple (optional). Chop the olives.",
          "s": null
        },
        {
          "t": "Mix the mayonnaise with salt, pepper and a few drops of lemon for the dressing.",
          "s": null
        },
        {
          "t": "Combine the chicken, vegetables and dressing in a large bowl; cover and chill so the flavors meld.",
          "s": 900
        },
        {
          "t": "Serve cold, adding the potato sticks just before serving so they stay crunchy.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Salpicão de Frango Brasileño receta paso a paso"
  },
  {
    "id": "br_23",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_23.jpg",
    "title": {
      "es": "Fricassê de Frango Cremoso",
      "pt": "Fricassê de Frango",
      "en": "Brazilian Creamy Corn Chicken Bake"
    },
    "brTip": {
      "es": "El secreto brasileño es licuar milho verde con requeijão/creme de leite y gratinar con queso y batata palha.",
      "pt": "Bata milho verde com requeijão e creme de leite no liquidificador e gratine com queijo.",
      "en": "Blended sweet corn & requeijão cream baked over shredded chicken."
    },
    "macrosTrad": {
      "kcal": 704,
      "p": 70,
      "c": 59,
      "f": 20
    },
    "macrosFit": {
      "kcal": 581,
      "p": 69,
      "c": 45,
      "f": 13
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "requeijao",
        "grams": 50,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "batata",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cocina la pechuga en agua con sal hasta que esté blanca por dentro y desmenúzala (o usa pollo cocido que tengas).",
          "s": null
        },
        {
          "t": "Sofríe la cebolla y el ajo picados con un hilo de aceite; añade el tomate picado y el pollo y cocina hasta que esté sabroso y sin líquido.",
          "s": 240
        },
        {
          "t": "Licúa el maíz escurrido con el requeijão y 1/2 taza de leche o caldo hasta tener una crema lisa.",
          "s": null
        },
        {
          "t": "Vierte la crema sobre el pollo y cocina a fuego bajo removiendo hasta que espese. Ajusta la sal y la pimienta.",
          "s": 180
        },
        {
          "t": "Precalienta el horno a 200 °C y pasa la mezcla a un refractario.",
          "s": null
        },
        {
          "t": "Cubre con láminas de queso y hornea hasta que se dore.",
          "s": 720
        },
        {
          "t": "Sirve caliente con arroz blanco y batata palha por encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito em água com sal até ficar branco por dentro e desfie (ou use frango já cozido).",
          "s": null
        },
        {
          "t": "Refogue a cebola e o alho picados num fio de óleo; junte o tomate picado e o frango e cozinhe até ficar saboroso e sem líquido.",
          "s": 240
        },
        {
          "t": "Bata o milho escorrido com o requeijão e 1/2 xícara de leite ou caldo até virar um creme liso.",
          "s": null
        },
        {
          "t": "Despeje o creme sobre o frango e cozinhe em fogo baixo mexendo até engrossar. Acerte sal e pimenta.",
          "s": 180
        },
        {
          "t": "Preaqueça o forno a 200 °C e passe a mistura para um refratário.",
          "s": null
        },
        {
          "t": "Cubra com fatias de queijo e asse até dourar.",
          "s": 720
        },
        {
          "t": "Sirva quente com arroz branco e batata palha por cima.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Poach the chicken breast in salted water until white inside and shred it (or use leftover cooked chicken).",
          "s": null
        },
        {
          "t": "Sauté the chopped onion and garlic in a drizzle of oil; add the chopped tomato and chicken and cook until flavorful and dry.",
          "s": 240
        },
        {
          "t": "Blend the drained corn with the requeijão and 1/2 cup milk or stock into a smooth cream.",
          "s": null
        },
        {
          "t": "Pour the cream over the chicken and cook on low, stirring, until thick. Adjust salt and pepper.",
          "s": 180
        },
        {
          "t": "Preheat the oven to 200 °C and transfer the mixture to a baking dish.",
          "s": null
        },
        {
          "t": "Top with cheese slices and bake until golden.",
          "s": 720
        },
        {
          "t": "Serve hot with white rice and potato sticks on top.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Fricassê de Frango Cremoso receta paso a paso"
  },
  {
    "id": "br_24",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_24.jpg",
    "title": {
      "es": "Bacalhau à Brás (Estilo Brasil)",
      "pt": "Bacalhau à Brás",
      "en": "Shredded Cod, Onion & Egg Skillet"
    },
    "brTip": {
      "es": "Muy consumido en Brasil: bacalao desalado en lascas (o tilápia), cebolla caramelizada, huevo cremoso y aceitunas negras.",
      "pt": "Clássico luso-brasileiro: bacalhau desfiado com cebola, batata, ovos cremosos e azeitonas.",
      "en": "Luso-Brazilian classic of flaked cod, onions, crisp potato, and soft-scrambled eggs."
    },
    "macrosTrad": {
      "kcal": 716,
      "p": 66,
      "c": 35,
      "f": 34
    },
    "macrosFit": {
      "kcal": 658,
      "p": 71,
      "c": 32,
      "f": 26
    },
    "ingredients": [
      {
        "id": "bacalhau",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 90,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 25,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 18,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Si el bacalao no viene desalado, remójalo en agua fría en la nevera 24–48 h cambiando el agua varias veces.",
          "s": null
        },
        {
          "t": "Hierve el bacalao desalado, escurre y sepáralo en lascas quitando piel y espinas.",
          "s": 480
        },
        {
          "t": "Corta las papas en tiras muy finas (tipo fósforo) y dóralas en horno o airfryer hasta que estén crocantes (o usa batata palha).",
          "s": 720
        },
        {
          "t": "Corta la cebolla en juliana fina y sofríela con el ajo en el aceite de oliva a fuego medio-bajo hasta que esté muy blanda y dulce.",
          "s": 360
        },
        {
          "t": "Agrega el bacalao y saltea para que tome sabor.",
          "s": 120
        },
        {
          "t": "Baja el fuego al mínimo, añade las papas y los huevos batidos con pimienta, y remueve suave solo hasta que el huevo esté cremoso, nunca seco.",
          "s": 60
        },
        {
          "t": "Prueba la sal (el bacalao ya es salado), decora con aceitunas y perejil picado y sirve enseguida.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Se o bacalhau não vier dessalgado, deixe de molho em água fria na geladeira 24–48 h trocando a água várias vezes.",
          "s": null
        },
        {
          "t": "Ferva o bacalhau dessalgado, escorra e separe em lascas tirando pele e espinhas.",
          "s": 480
        },
        {
          "t": "Corte as batatas em palitos bem finos e doure no forno ou airfryer até ficarem crocantes (ou use batata palha).",
          "s": 720
        },
        {
          "t": "Corte a cebola em tiras finas e refogue com o alho no azeite em fogo médio-baixo até ficar bem macia e adocicada.",
          "s": 360
        },
        {
          "t": "Junte o bacalhau e salteie para pegar sabor.",
          "s": 120
        },
        {
          "t": "Abaixe o fogo ao mínimo, junte as batatas e os ovos batidos com pimenta e mexa de leve só até o ovo ficar cremoso, nunca seco.",
          "s": 60
        },
        {
          "t": "Prove o sal (o bacalhau já é salgado), decore com azeitonas e salsinha e sirva logo.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "If the salt cod is not desalted, soak it in cold water in the fridge 24–48 h, changing the water several times.",
          "s": null
        },
        {
          "t": "Boil the desalted cod, drain and flake it, removing skin and bones.",
          "s": 480
        },
        {
          "t": "Cut the potatoes into very thin matchsticks and bake or air-fry until crisp (or use store-bought potato sticks).",
          "s": 720
        },
        {
          "t": "Slice the onion thinly and cook it with the garlic in the olive oil over medium-low heat until very soft and sweet.",
          "s": 360
        },
        {
          "t": "Add the cod and sauté so it picks up flavor.",
          "s": 120
        },
        {
          "t": "Lower the heat to minimum, add the potatoes and eggs beaten with pepper and stir gently just until creamy, never dry.",
          "s": 60
        },
        {
          "t": "Taste for salt (the cod is already salty), garnish with olives and parsley and serve at once.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Bacalhau à Brás (Estilo Brasil) receta paso a paso"
  },
  {
    "id": "br_25",
    "country": "BRAZILIAN",
    "time": 20,
    "fav": false,
    "img": "images/br_25.jpg",
    "title": {
      "es": "Picanha a la Parrilla con Vinagrete y Farofa",
      "pt": "Picanha na Brasa com Vinagrete e Farofa",
      "en": "Grilled Picanha with Vinaigrette and Farofa"
    },
    "brTip": {
      "es": "Alcatra o patinho sazonado solo con sal gruesa/parrillero, acompañado de vinagrete brasileño.",
      "pt": "Carne temperada só com sal grosso, servida com vinagrete e farofa.",
      "en": "Skewered beef with classic Brazilian tomato-onion vinaigrette and toasted cassava flour."
    },
    "macrosTrad": {
      "kcal": 685,
      "p": 40,
      "c": 40,
      "f": 41
    },
    "macrosFit": {
      "kcal": 465,
      "p": 26,
      "c": 37,
      "f": 25
    },
    "ingredients": [
      {
        "id": "picanha",
        "grams": 180,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "vinagre",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 35,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "manteiga",
        "grams": 8,
        "fitGrams": 4,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Si usas brochetas de madera, remójalas en agua 20 min para que no se quemen.",
          "s": null
        },
        {
          "t": "Corta la carne en cubos de 3 cm y ensártalos dejando un pequeño espacio entre ellos. Sala justo antes de asar.",
          "s": null
        },
        {
          "t": "Vinagrete: pica tomate, cebolla y pimentón en cubitos diminutos; mezcla con aceite, vinagre (o limón), sal y perejil. Deja reposar para que suelte jugo.",
          "s": null
        },
        {
          "t": "Calienta la parrilla o sartén grill al máximo y asa las brochetas, girándolas, hasta dorar por fuera y dejar el centro jugoso.",
          "s": 480
        },
        {
          "t": "Deja reposar la carne mientras tuestas la farinha de mandioca en una sartén con un poco de aceite y cebolla picada, moviendo, hasta que esté dorada.",
          "s": 180
        },
        {
          "t": "Ajusta la sal de la farofa y del vinagrete.",
          "s": null
        },
        {
          "t": "Sirve las brochetas con el vinagrete por encima y la farofa al lado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Se usar espetos de madeira, deixe de molho em água 20 min para não queimarem.",
          "s": null
        },
        {
          "t": "Corte a carne em cubos de 3 cm e espete deixando um pequeno espaço entre eles. Salgue só na hora de assar.",
          "s": null
        },
        {
          "t": "Vinagrete: pique tomate, cebola e pimentão em cubinhos; misture com azeite, vinagre (ou limão), sal e salsinha. Deixe descansar para soltar o caldo.",
          "s": null
        },
        {
          "t": "Aqueça a churrasqueira ou bistequeira no máximo e asse os espetos, girando, até dourar por fora e ficar suculento por dentro.",
          "s": 480
        },
        {
          "t": "Deixe a carne descansar enquanto torra a farinha de mandioca numa frigideira com um pouco de óleo e cebola picada, mexendo, até dourar.",
          "s": 180
        },
        {
          "t": "Acerte o sal da farofa e do vinagrete.",
          "s": null
        },
        {
          "t": "Sirva os espetos com o vinagrete por cima e a farofa ao lado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "If using wooden skewers, soak them in water 20 min so they do not burn.",
          "s": null
        },
        {
          "t": "Cut the beef into 3 cm cubes and thread them leaving a little space between pieces. Salt just before grilling.",
          "s": null
        },
        {
          "t": "Vinaigrette: dice the tomato, onion and bell pepper very small; mix with oil, vinegar (or lime), salt and parsley. Let it rest to release juice.",
          "s": null
        },
        {
          "t": "Heat the grill or grill pan to maximum and cook the skewers, turning, until browned outside and juicy inside.",
          "s": 480
        },
        {
          "t": "Let the meat rest while you toast the cassava flour in a pan with a little oil and chopped onion, stirring, until golden.",
          "s": 180
        },
        {
          "t": "Adjust the salt of the farofa and vinaigrette.",
          "s": null
        },
        {
          "t": "Serve the skewers topped with vinaigrette and farofa on the side.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Picanha a la Parrilla con Vinagrete y Farofa receta paso a paso"
  },
  {
    "id": "br_26",
    "country": "BRAZILIAN",
    "time": 12,
    "fav": false,
    "img": "images/br_26.jpg",
    "title": {
      "es": "Crepioca Proteica de Queso y Tomate",
      "pt": "Crepioca de Queijo e Tomate",
      "en": "Brazilian Egg-Tapioca Crepe"
    },
    "brTip": {
      "es": "Desayuno fitness nº 1 en Brasil: 1 huevo batido + 2 cucharadas de goma de tapioca = masa elástica sin gluten.",
      "pt": "Café da manhã clássico fit do Brasil: ovo batido com goma de tapioca na frigideira.",
      "en": "Brazil's favorite gluten-free protein breakfast: egg whisked with tapioca starch."
    },
    "macrosTrad": {
      "kcal": 438,
      "p": 23,
      "c": 32,
      "f": 24
    },
    "macrosFit": {
      "kcal": 344,
      "p": 21,
      "c": 26,
      "f": 17
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 45,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 5,
        "fitGrams": 2.5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica el tomate en cubitos y escúrrelo; desmenuza o ralla el queso.",
          "s": null
        },
        {
          "t": "En un bol bate los huevos con la goma de tapioca y la pizca de sal con un tenedor hasta que no queden grumos.",
          "s": null
        },
        {
          "t": "Calienta una sartén antiadherente a fuego medio-bajo y úntala con una gota de aceite.",
          "s": null
        },
        {
          "t": "Vierte la mezcla cubriendo todo el fondo y cocina hasta que la base cuaje y los bordes se despeguen.",
          "s": 120
        },
        {
          "t": "Voltea con espátula y cocina el otro lado.",
          "s": 60
        },
        {
          "t": "Pon el queso, el tomate y el orégano en una mitad, dobla y cocina hasta que el queso se funda.",
          "s": 60
        },
        {
          "t": "Sirve caliente, entera o cortada en triángulos.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Pique o tomate em cubinhos e escorra; esfarele ou rale o queijo.",
          "s": null
        },
        {
          "t": "Numa tigela bata os ovos com a goma de tapioca e a pitada de sal com um garfo até não ter grumos.",
          "s": null
        },
        {
          "t": "Aqueça uma frigideira antiaderente em fogo médio-baixo e unte com uma gota de óleo.",
          "s": null
        },
        {
          "t": "Despeje a mistura cobrindo todo o fundo e cozinhe até a base firmar e as bordas soltarem.",
          "s": 120
        },
        {
          "t": "Vire com espátula e cozinhe o outro lado.",
          "s": 60
        },
        {
          "t": "Coloque o queijo, o tomate e o orégano numa metade, dobre e cozinhe até o queijo derreter.",
          "s": 60
        },
        {
          "t": "Sirva quente, inteira ou cortada em triângulos.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Dice and drain the tomato; crumble or grate the cheese.",
          "s": null
        },
        {
          "t": "In a bowl whisk the eggs with the tapioca starch and pinch of salt with a fork until lump-free.",
          "s": null
        },
        {
          "t": "Heat a nonstick pan over medium-low and grease it with a drop of oil.",
          "s": null
        },
        {
          "t": "Pour in the batter to cover the bottom and cook until the base sets and the edges release.",
          "s": 120
        },
        {
          "t": "Flip with a spatula and cook the other side.",
          "s": 60
        },
        {
          "t": "Add the cheese, tomato and oregano to one half, fold and cook until the cheese melts.",
          "s": 60
        },
        {
          "t": "Serve hot, whole or cut into triangles.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Crepioca Proteica de Queso y Tomate receta paso a paso"
  },
  {
    "id": "br_27",
    "country": "BRAZILIAN",
    "time": 28,
    "fav": false,
    "img": "images/br_27.jpg",
    "title": {
      "es": "Carne de Panela con Papa y Zanahoria",
      "pt": "Carne de Panela com Legumes",
      "en": "Brazilian Pressure-Cooker Pot Roast"
    },
    "brTip": {
      "es": "Con acém, músculo o patinho en olla a presión queda tan tierna que se corta con cuchara.",
      "pt": "Feita na panela de pressão com acém, músculo ou patinho até desmanchar.",
      "en": "Tender braised beef cooked in pressure cooker with potato and carrot."
    },
    "macrosTrad": {
      "kcal": 558,
      "p": 69,
      "c": 39,
      "f": 13
    },
    "macrosFit": {
      "kcal": 592,
      "p": 76,
      "c": 37,
      "f": 15
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 175,
        "fitGrams": 195,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en trozos grandes (4–5 cm), sécala y sazónala con sal, pimienta y ajo machacado.",
          "s": null
        },
        {
          "t": "Pica la cebolla y el tomate; pela las papas y zanahorias y córtalas en trozos grandes.",
          "s": null
        },
        {
          "t": "Calienta la olla a presión destapada con un hilo de aceite y dora muy bien la carne por todos los lados: este dorado da el color oscuro al caldo.",
          "s": 360
        },
        {
          "t": "Agrega la cebolla y el tomate, sofríe y vierte 1 taza de agua caliente raspando el fondo.",
          "s": 180
        },
        {
          "t": "Tapa la olla y cocina desde que toma presión hasta que la carne esté tierna.",
          "s": 1500
        },
        {
          "t": "Libera la presión con cuidado, añade las papas y zanahorias y cocina sin presión, semitapado, hasta que estén suaves.",
          "s": 480
        },
        {
          "t": "Si la salsa está muy líquida, déjala reducir destapada unos minutos. Ajusta la sal y sirve con arroz.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em pedaços grandes (4–5 cm), seque e tempere com sal, pimenta e alho amassado.",
          "s": null
        },
        {
          "t": "Pique a cebola e o tomate; descasque as batatas e cenouras e corte em pedaços grandes.",
          "s": null
        },
        {
          "t": "Aqueça a panela de pressão destampada com um fio de óleo e doure muito bem a carne por todos os lados: esse dourado dá a cor escura ao molho.",
          "s": 360
        },
        {
          "t": "Junte a cebola e o tomate, refogue e despeje 1 xícara de água quente raspando o fundo.",
          "s": 180
        },
        {
          "t": "Tampe e cozinhe a partir do momento em que pegar pressão até a carne ficar macia.",
          "s": 1500
        },
        {
          "t": "Tire a pressão com cuidado, junte as batatas e cenouras e cozinhe sem pressão, semitampado, até ficarem macias.",
          "s": 480
        },
        {
          "t": "Se o molho estiver ralo, deixe reduzir destampado alguns minutos. Acerte o sal e sirva com arroz.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the beef into large chunks (4–5 cm), pat dry and season with salt, pepper and crushed garlic.",
          "s": null
        },
        {
          "t": "Chop the onion and tomato; peel the potatoes and carrots and cut into large pieces.",
          "s": null
        },
        {
          "t": "Heat the uncovered pressure cooker with a drizzle of oil and brown the beef very well on all sides: this browning gives the dark gravy.",
          "s": 360
        },
        {
          "t": "Add the onion and tomato, sauté and pour in 1 cup of hot water, scraping the bottom.",
          "s": 180
        },
        {
          "t": "Lock the lid and cook from the moment it reaches pressure until the beef is tender.",
          "s": 1500
        },
        {
          "t": "Release the pressure carefully, add the potatoes and carrots and cook without pressure, partly covered, until tender.",
          "s": 480
        },
        {
          "t": "If the sauce is thin, reduce it uncovered a few minutes. Adjust the salt and serve with rice.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Carne de Panela con Papa y Zanahoria receta paso a paso"
  },
  {
    "id": "br_28",
    "country": "BRAZILIAN",
    "time": 30,
    "fav": false,
    "img": "images/br_28.jpg",
    "title": {
      "es": "Costelinha Suína al Limón y Ajo",
      "pt": "Costelinha Suína Assada",
      "en": "Brazilian Roast Pork Ribs"
    },
    "brTip": {
      "es": "Marinada en limón cravo/tahiti, ajo y romero (o versión fit con lombo suíno magro).",
      "pt": "Marinada no limão, alho e alecrim (ou use lombo suíno magro no modo fit).",
      "en": "Marinated in lime, garlic, and herbs, roasted until caramelized."
    },
    "macrosTrad": {
      "kcal": 747,
      "p": 44,
      "c": 48,
      "f": 42
    },
    "macrosFit": {
      "kcal": 500,
      "p": 28,
      "c": 40,
      "f": 26
    },
    "ingredients": [
      {
        "id": "costelinha",
        "grams": 190,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 30,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Mezcla el jugo de 1 limón, 4 dientes de ajo machacados, sal, pimienta, orégano y una ramita de romero picada.",
          "s": null
        },
        {
          "t": "Unta bien la carne con la marinada por todos lados y deja reposar en la nevera.",
          "s": 1200
        },
        {
          "t": "Precalienta el horno a 200 °C. Pela la mandioca, córtala en bastones y retira la fibra central.",
          "s": null
        },
        {
          "t": "Coloca la carne en una bandeja con la cebolla en rodajas, cubre con papel aluminio y hornea para que quede jugosa.",
          "s": 1500
        },
        {
          "t": "Mientras, cuece la mandioca en agua con sal hasta que esté tierna y escúrrela.",
          "s": 900
        },
        {
          "t": "Retira el aluminio, sube a 220 °C, pon la mandioca alrededor y hornea hasta dorar y caramelizar la carne.",
          "s": 600
        },
        {
          "t": "Deja reposar 5 min, corta entre los huesos y sirve con rodajas de limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture o suco de 1 limão, 4 dentes de alho amassados, sal, pimenta, orégano e um raminho de alecrim picado.",
          "s": null
        },
        {
          "t": "Esfregue bem a carne com a marinada por todos os lados e deixe descansar na geladeira.",
          "s": 1200
        },
        {
          "t": "Preaqueça o forno a 200 °C. Descasque a mandioca, corte em palitos e tire a fibra central.",
          "s": null
        },
        {
          "t": "Coloque a carne numa assadeira com a cebola em rodelas, cubra com papel-alumínio e asse para ficar suculenta.",
          "s": 1500
        },
        {
          "t": "Enquanto isso, cozinhe a mandioca em água com sal até ficar macia e escorra.",
          "s": 900
        },
        {
          "t": "Retire o alumínio, suba para 220 °C, coloque a mandioca em volta e asse até dourar e caramelizar a carne.",
          "s": 600
        },
        {
          "t": "Deixe descansar 5 min, corte entre os ossos e sirva com rodelas de limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Mix the juice of 1 lime, 4 crushed garlic cloves, salt, pepper, oregano and a chopped sprig of rosemary.",
          "s": null
        },
        {
          "t": "Rub the meat well with the marinade on all sides and let it rest in the fridge.",
          "s": 1200
        },
        {
          "t": "Preheat the oven to 200 °C. Peel the cassava, cut into sticks and remove the central fiber.",
          "s": null
        },
        {
          "t": "Place the meat on a tray with the sliced onion, cover with foil and roast so it stays juicy.",
          "s": 1500
        },
        {
          "t": "Meanwhile, boil the cassava in salted water until tender and drain.",
          "s": 900
        },
        {
          "t": "Remove the foil, raise to 220 °C, arrange the cassava around and roast until the meat browns and caramelizes.",
          "s": 600
        },
        {
          "t": "Rest 5 min, cut between the bones and serve with lime wedges.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Costelinha Suína al Limón y Ajo receta paso a paso"
  },
  {
    "id": "br_29",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_29.jpg",
    "title": {
      "es": "Bolinho de Mandioca Relleno",
      "pt": "Bolinho de Mandioca com Carne",
      "en": "Brazilian Stuffed Cassava Croquettes"
    },
    "brTip": {
      "es": "Masa hecha solo con mandioca cocida machacada (sin harina de trigo) rellena de carne o pollo; queda genial en airfryer.",
      "pt": "Massa pura de mandioca cozida recheada com carne moída ou frango — perfeito na airfryer!",
      "en": "Pure mashed cassava dough stuffed with savory beef, baked or air-fried."
    },
    "macrosTrad": {
      "kcal": 701,
      "p": 53,
      "c": 58,
      "f": 28
    },
    "macrosFit": {
      "kcal": 634,
      "p": 59,
      "c": 48,
      "f": 22
    },
    "ingredients": [
      {
        "id": "mandioca",
        "grams": 170,
        "fitGrams": 135,
        "sub": null,
        "fitId": null
      },
      {
        "id": "patinho",
        "grams": 130,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela la mandioca, córtala en trozos y quita la fibra central.",
          "s": null
        },
        {
          "t": "Cuécela en agua con sal hasta que esté muy blanda; escúrrela muy bien (cuanto más seca, mejor se moldea).",
          "s": 1200
        },
        {
          "t": "Aplástala caliente con sal y la yema de huevo hasta formar una masa firme y lisa. Deja entibiar.",
          "s": null
        },
        {
          "t": "Relleno: sofríe la cebolla y el ajo, agrega la carne molida y el tomate y cocina hasta que quede seco y sabroso; mezcla cheiro-verde y deja enfriar.",
          "s": 480
        },
        {
          "t": "Toma una porción de masa en la palma, aplánala, pon 1 cucharada de relleno al centro y ciérrala dándole forma ovalada sin grietas.",
          "s": null
        },
        {
          "t": "Pincela con un poco de aceite y cocina en airfryer a 200 °C, girando a la mitad, hasta dorar (o fríe en aceite caliente).",
          "s": 900
        },
        {
          "t": "Escurre sobre papel y sirve calientes, solos o con salsa picante.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Descasque a mandioca, corte em pedaços e tire a fibra central.",
          "s": null
        },
        {
          "t": "Cozinhe em água com sal até ficar bem macia; escorra muito bem (quanto mais seca, melhor modela).",
          "s": 1200
        },
        {
          "t": "Amasse ainda quente com sal e a gema até formar uma massa firme e lisa. Deixe amornar.",
          "s": null
        },
        {
          "t": "Recheio: refogue a cebola e o alho, junte a carne moída e o tomate e cozinhe até ficar sequinho e saboroso; misture cheiro-verde e deixe esfriar.",
          "s": 480
        },
        {
          "t": "Pegue uma porção de massa na palma, achate, coloque 1 colher de recheio no centro e feche em formato oval sem rachaduras.",
          "s": null
        },
        {
          "t": "Pincele com um pouco de óleo e asse na airfryer a 200 °C, virando na metade, até dourar (ou frite em óleo quente).",
          "s": 900
        },
        {
          "t": "Escorra no papel e sirva quentes, puros ou com molho de pimenta.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Peel the cassava, cut into chunks and remove the central fiber.",
          "s": null
        },
        {
          "t": "Boil in salted water until very soft; drain very well (the drier, the easier to shape).",
          "s": 1200
        },
        {
          "t": "Mash while hot with salt and the egg yolk into a firm, smooth dough. Let it cool slightly.",
          "s": null
        },
        {
          "t": "Filling: sauté the onion and garlic, add the ground beef and tomato and cook until dry and flavorful; stir in herbs and cool.",
          "s": 480
        },
        {
          "t": "Flatten a portion of dough in your palm, put 1 spoonful of filling in the center and seal into an oval with no cracks.",
          "s": null
        },
        {
          "t": "Brush with a little oil and air-fry at 200 °C, turning halfway, until golden (or deep-fry in hot oil).",
          "s": 900
        },
        {
          "t": "Drain on paper and serve hot, plain or with hot sauce.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Bolinho de Mandioca Relleno receta paso a paso"
  },
  {
    "id": "br_30",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_30.jpg",
    "title": {
      "es": "Arroz de Forno Cremoso",
      "pt": "Arroz de Forno Cremoso",
      "en": "Brazilian Creamy Baked Rice"
    },
    "brTip": {
      "es": "Ideal para aprovechar arroz cocido del día anterior mezclándolo con pollo desmenuzado, milho, cenoura y requeijão.",
      "pt": "Ótimo para reaproveitar arroz pronto com frango desfiado, milho, cenoura e requeijão.",
      "en": "Baked rice casserole with shredded chicken, veggies, and creamy requeijão."
    },
    "macrosTrad": {
      "kcal": 670,
      "p": 66,
      "c": 57,
      "f": 19
    },
    "macrosFit": {
      "kcal": 562,
      "p": 65,
      "c": 46,
      "f": 12
    },
    "ingredients": [
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "frango",
        "grams": 145,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "requeijao",
        "grams": 45,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Precalienta el horno a 200 °C. Cocina el arroz si no lo tienes listo (que quede suelto).",
          "s": null
        },
        {
          "t": "Cocina la pechuga en agua con sal hasta que esté blanca por dentro y desmenúzala; sazónala con sal y pimienta.",
          "s": 900
        },
        {
          "t": "Ralla la zanahoria, escurre el maíz y pica el tomate.",
          "s": null
        },
        {
          "t": "En un bol grande mezcla el arroz cocido con el pollo, la zanahoria, el maíz y el tomate.",
          "s": null
        },
        {
          "t": "Añade el requeijão y 3 cucharadas de leche o salsa de tomate para darle humedad y cremosidad; ajusta la sal.",
          "s": null
        },
        {
          "t": "Pasa a una fuente, cubre con el queso rallado y hornea hasta que burbujee y la superficie se dore.",
          "s": 900
        },
        {
          "t": "Deja reposar 5 min y sirve en porciones.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Preaqueça o forno a 200 °C. Cozinhe o arroz se não tiver pronto (soltinho).",
          "s": null
        },
        {
          "t": "Cozinhe o peito em água com sal até ficar branco por dentro e desfie; tempere com sal e pimenta.",
          "s": 900
        },
        {
          "t": "Rale a cenoura, escorra o milho e pique o tomate.",
          "s": null
        },
        {
          "t": "Numa tigela grande misture o arroz cozido com o frango, a cenoura, o milho e o tomate.",
          "s": null
        },
        {
          "t": "Junte o requeijão e 3 colheres de leite ou molho de tomate para dar umidade e cremosidade; acerte o sal.",
          "s": null
        },
        {
          "t": "Passe para um refratário, cubra com o queijo ralado e asse até borbulhar e dourar.",
          "s": 900
        },
        {
          "t": "Deixe descansar 5 min e sirva em porções.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Preheat the oven to 200 °C. Cook the rice if not ready (keep it fluffy).",
          "s": null
        },
        {
          "t": "Poach the chicken breast in salted water until white inside and shred it; season with salt and pepper.",
          "s": 900
        },
        {
          "t": "Grate the carrot, drain the corn and chop the tomato.",
          "s": null
        },
        {
          "t": "In a large bowl mix the cooked rice with the chicken, carrot, corn and tomato.",
          "s": null
        },
        {
          "t": "Add the requeijão and 3 tablespoons of milk or tomato sauce for moisture and creaminess; adjust the salt.",
          "s": null
        },
        {
          "t": "Transfer to a dish, top with the grated cheese and bake until bubbling and golden.",
          "s": 900
        },
        {
          "t": "Rest 5 min and serve in portions.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Arroz de Forno Cremoso receta paso a paso"
  },
  {
    "id": "br_31",
    "country": "BRAZILIAN",
    "time": 20,
    "fav": false,
    "img": "images/br_31.jpg",
    "title": {
      "es": "Carne Seca con Abóbora Cabotiá",
      "pt": "Carne Seca com Abóbora Cabotiá",
      "en": "Cured Beef & Roasted Kabocha"
    },
    "brTip": {
      "es": "Combinación clásica brasileña: el dulzor natural de la abóbora cabotiá con carne seca salada y requeijão.",
      "pt": "Clássico brasileiro: abóbora cabotiá macia com carne seca desfiada e requeijão.",
      "en": "Classic sweet-savory pairing of kabocha squash and shredded Brazilian cured beef."
    },
    "macrosTrad": {
      "kcal": 504,
      "p": 52,
      "c": 29,
      "f": 20
    },
    "macrosFit": {
      "kcal": 536,
      "p": 57,
      "c": 32,
      "f": 21
    },
    "ingredients": [
      {
        "id": "carne_seca",
        "grams": 130,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "abobora",
        "grams": 180,
        "fitGrams": 205,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "requeijao",
        "grams": 35,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Si usas carne seca, desálala hirviéndola 15 min (o remojándola desde la víspera), escúrrela y desmenúzala.",
          "s": null
        },
        {
          "t": "Lava la abóbora cabotiá y córtala en cubos medianos; su cáscara se puede comer bien cocida.",
          "s": null
        },
        {
          "t": "Cuécela al vapor o en poca agua con sal hasta que esté tierna pero entera.",
          "s": 720
        },
        {
          "t": "Sofríe la cebolla y el ajo picados en un hilo de aceite hasta dorar.",
          "s": 180
        },
        {
          "t": "Agrega la carne desmenuzada y saltea hasta que tome color.",
          "s": 240
        },
        {
          "t": "Incorpora la abóbora con cuidado, aplastando solo algunos cubos para dar cremosidad, y añade cucharadas de requeijão.",
          "s": null
        },
        {
          "t": "Ajusta la sal, termina con cheiro-verde picado y sirve caliente.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Se usar carne seca, dessalgue fervendo 15 min (ou deixando de molho desde a véspera), escorra e desfie.",
          "s": null
        },
        {
          "t": "Lave a abóbora cabotiá e corte em cubos médios; a casca pode ser comida bem cozida.",
          "s": null
        },
        {
          "t": "Cozinhe no vapor ou em pouca água com sal até ficar macia mas inteira.",
          "s": 720
        },
        {
          "t": "Refogue a cebola e o alho picados num fio de óleo até dourar.",
          "s": 180
        },
        {
          "t": "Junte a carne desfiada e salteie até pegar cor.",
          "s": 240
        },
        {
          "t": "Incorpore a abóbora com cuidado, amassando só alguns cubos para dar cremosidade, e junte colheradas de requeijão.",
          "s": null
        },
        {
          "t": "Acerte o sal, finalize com cheiro-verde picado e sirva quente.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "If using dried beef, desalt it by boiling 15 min (or soaking overnight), drain and shred.",
          "s": null
        },
        {
          "t": "Wash the kabocha squash and cut into medium cubes; the skin is edible once well cooked.",
          "s": null
        },
        {
          "t": "Steam or cook in a little salted water until tender but intact.",
          "s": 720
        },
        {
          "t": "Sauté the chopped onion and garlic in a drizzle of oil until golden.",
          "s": 180
        },
        {
          "t": "Add the shredded beef and sauté until it colors.",
          "s": 240
        },
        {
          "t": "Fold in the squash gently, mashing only a few cubes for creaminess, and add spoonfuls of requeijão.",
          "s": null
        },
        {
          "t": "Adjust the salt, finish with chopped herbs and serve hot.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Carne Seca con Abóbora Cabotiá receta paso a paso"
  },
  {
    "id": "br_32",
    "country": "BRAZILIAN",
    "time": 20,
    "fav": false,
    "img": "images/br_32.jpg",
    "title": {
      "es": "Filé de Tilápia Crocante con Limón",
      "pt": "Tilápia Crocante na Airfryer",
      "en": "Crispy Lime Tilapia"
    },
    "brTip": {
      "es": "La tilápia es el pescado más accesible en supermercados de Brasil; empanizado ligero con aveia o fubá.",
      "pt": "Peixe mais popular dos mercados brasileiros, empanado leve com aveia ou fubá.",
      "en": "Brazil's most accessible white fish coated in oat flour or cornmeal."
    },
    "macrosTrad": {
      "kcal": 423,
      "p": 43,
      "c": 52,
      "f": 5
    },
    "macrosFit": {
      "kcal": 405,
      "p": 47,
      "c": 44,
      "f": 5
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 200,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pan_rallado",
        "grams": 30,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 25,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata_doce",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": null
      },
      {
        "id": "brocolis",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Seca los filetes de tilapia con papel y sazónalos con jugo de limón, ajo machacado, sal y pimienta.",
          "s": null
        },
        {
          "t": "Deja marinar (no más tiempo, o el limón empieza a “cocinar” el pescado).",
          "s": 600
        },
        {
          "t": "Mezcla el pan rallado con orégano y una pizca de sal. Pasa cada filete presionando para que se adhiera por ambos lados.",
          "s": null
        },
        {
          "t": "Pela y corta el camote en cubos; cuécelo en agua con sal hasta que esté blando y aplástalo con una pizca de sal para el puré.",
          "s": 900
        },
        {
          "t": "Rocía los filetes con un hilo de aceite y cocínalos en airfryer a 200 °C hasta que estén dorados y crocantes (o 3 min por lado en sartén).",
          "s": 780
        },
        {
          "t": "Cuece el brócoli al vapor hasta que esté verde brillante y tierno pero crujiente.",
          "s": 300
        },
        {
          "t": "Sirve el pescado con el puré de camote, el brócoli y gajos de limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Seque os filés de tilápia com papel e tempere com suco de limão, alho amassado, sal e pimenta.",
          "s": null
        },
        {
          "t": "Deixe marinar (não mais que isso, ou o limão começa a “cozinhar” o peixe).",
          "s": 600
        },
        {
          "t": "Misture a farinha de rosca com orégano e uma pitada de sal. Passe cada filé pressionando para grudar dos dois lados.",
          "s": null
        },
        {
          "t": "Descasque e corte a batata-doce em cubos; cozinhe em água com sal até amolecer e amasse com uma pitada de sal para o purê.",
          "s": 900
        },
        {
          "t": "Borrife os filés com um fio de óleo e asse na airfryer a 200 °C até dourarem e ficarem crocantes (ou 3 min de cada lado na frigideira).",
          "s": 780
        },
        {
          "t": "Cozinhe o brócolis no vapor até ficar verde vivo e macio mas firme.",
          "s": 300
        },
        {
          "t": "Sirva o peixe com o purê de batata-doce, o brócolis e gomos de limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Pat the tilapia fillets dry and season with lime juice, crushed garlic, salt and pepper.",
          "s": null
        },
        {
          "t": "Marinate (no longer, or the lime starts to “cook” the fish).",
          "s": 600
        },
        {
          "t": "Mix the breadcrumbs with oregano and a pinch of salt. Press each fillet into it so it coats both sides.",
          "s": null
        },
        {
          "t": "Peel and cube the sweet potato; boil in salted water until soft and mash with a pinch of salt.",
          "s": 900
        },
        {
          "t": "Drizzle the fillets with a little oil and air-fry at 200 °C until golden and crisp (or 3 min per side in a pan).",
          "s": 780
        },
        {
          "t": "Steam the broccoli until bright green and tender-crisp.",
          "s": 300
        },
        {
          "t": "Serve the fish with the sweet potato mash, broccoli and lime wedges.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Filé de Tilápia Crocante con Limón receta paso a paso"
  },
  {
    "id": "br_33",
    "country": "BRAZILIAN",
    "time": 12,
    "fav": false,
    "img": "images/br_33.jpg",
    "title": {
      "es": "Bauru Paulista Tradicional",
      "pt": "Bauru Paulista",
      "en": "Brazilian Bauru Beef Melt"
    },
    "brTip": {
      "es": "El sándwich icónico de São Paulo: pão francês sin miga, rosbife (bife fino), queijo derretido, tomate y pepinillos.",
      "pt": "Clássico paulista: pão francês, rosbife/patinho em tiras, queijo derretido e tomate.",
      "en": "São Paulo's iconic hot roast beef, melted cheese, and tomato sandwich."
    },
    "macrosTrad": {
      "kcal": 675,
      "p": 66,
      "c": 42,
      "f": 26
    },
    "macrosFit": {
      "kcal": 569,
      "p": 66,
      "c": 34,
      "f": 17
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 70,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 50,
        "fitGrams": 35,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pepino",
        "grams": 20,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "manteiga",
        "grams": 5,
        "fitGrams": 2.5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en filetes muy finos o tiras; sazona con sal y pimienta. Corta el tomate en rodajas.",
          "s": null
        },
        {
          "t": "Sella la carne en sartén bien caliente con un hilo de aceite, por ambos lados, sin cocinarla de más.",
          "s": 240
        },
        {
          "t": "En una sartén antiadherente pon las láminas de queso con 1 cucharada de agua, tapa y deja fundir hasta que quede elástico (el toque del bauru clásico).",
          "s": 60
        },
        {
          "t": "Abre el pan francés (o prepara la base de tapioca en modo fit) y tuéstalo ligeramente.",
          "s": null
        },
        {
          "t": "Acomoda la carne, las rodajas de tomate con una pizca de orégano y sal, y el queso derretido encima.",
          "s": null
        },
        {
          "t": "Cierra y prensa en sanduchera o en sartén con peso encima hasta que esté crocante por fuera.",
          "s": 60
        },
        {
          "t": "Corta por la mitad y sirve caliente.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em bifes bem finos ou tiras; tempere com sal e pimenta. Corte o tomate em rodelas.",
          "s": null
        },
        {
          "t": "Sele a carne em frigideira bem quente com um fio de óleo, dos dois lados, sem passar do ponto.",
          "s": 240
        },
        {
          "t": "Numa frigideira antiaderente coloque as fatias de queijo com 1 colher de água, tampe e deixe derreter até ficar elástico (o toque do bauru clássico).",
          "s": 60
        },
        {
          "t": "Abra o pão francês (ou prepare a base de tapioca no modo fit) e toste levemente.",
          "s": null
        },
        {
          "t": "Acomode a carne, as rodelas de tomate com uma pitada de orégano e sal, e o queijo derretido por cima.",
          "s": null
        },
        {
          "t": "Feche e prense na sanduicheira ou na frigideira com um peso por cima até ficar crocante por fora.",
          "s": 60
        },
        {
          "t": "Corte ao meio e sirva quente.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Slice the beef into very thin steaks or strips; season with salt and pepper. Slice the tomato.",
          "s": null
        },
        {
          "t": "Sear the beef in a very hot pan with a drizzle of oil on both sides, without overcooking.",
          "s": 240
        },
        {
          "t": "In a nonstick pan put the cheese slices with 1 tablespoon of water, cover and let them melt until stretchy (the classic bauru touch).",
          "s": 60
        },
        {
          "t": "Split the bread roll (or make the tapioca base in fit mode) and toast it lightly.",
          "s": null
        },
        {
          "t": "Layer the beef, the tomato slices with a pinch of oregano and salt, and the melted cheese on top.",
          "s": null
        },
        {
          "t": "Close and press in a sandwich maker or in a pan with a weight on top until crisp outside.",
          "s": 60
        },
        {
          "t": "Cut in half and serve hot.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Bauru Paulista Tradicional receta paso a paso"
  },
  {
    "id": "br_34",
    "country": "BRAZILIAN",
    "time": 20,
    "fav": false,
    "img": "images/br_34.jpg",
    "title": {
      "es": "Panqueque Brasileño de Carne",
      "pt": "Panqueca de Carne ao Molho",
      "en": "Brazilian Savory Beef Crepes"
    },
    "brTip": {
      "es": "En Brasil las panqueques saladas se enrollan con carne molida y se bañan en salsa de tomate y queso.",
      "pt": "Panquecas fininhas enroladas com patinho moído, molho de tomate e queijo.",
      "en": "Thin crepes rolled around ground beef and baked in tomato sauce."
    },
    "macrosTrad": {
      "kcal": 717,
      "p": 72,
      "c": 46,
      "f": 26
    },
    "macrosFit": {
      "kcal": 667,
      "p": 74,
      "c": 45,
      "f": 19
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_trigo",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 100,
        "fitGrams": 70,
        "sub": null,
        "fitId": "leite_desnatado"
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 35,
        "fitGrams": 25,
        "sub": null,
        "fitId": "ricota"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa el huevo, la leche, la harina o avena y la pizca de sal hasta tener una masa líquida y lisa. Deja reposar 5 min.",
          "s": null
        },
        {
          "t": "Relleno: sofríe la cebolla y el ajo, agrega la carne molida y la mitad del tomate picado y cocina hasta que esté jugosa pero sin caldo.",
          "s": 480
        },
        {
          "t": "Para la salsa, cocina el resto del tomate picado (o salsa de tomate) con sal y una pizca de orégano hasta espesar.",
          "s": null
        },
        {
          "t": "Calienta una sartén antiadherente untada con unas gotas de aceite, vierte un cucharón de masa y gírala para cubrir el fondo; cocina hasta que se despegue y voltea.",
          "s": 120
        },
        {
          "t": "Repite con el resto de la masa, apilando los discos en un plato.",
          "s": null
        },
        {
          "t": "Rellena cada disco con carne, enróllalo y colócalo en una fuente; cubre con la salsa y el queso.",
          "s": null
        },
        {
          "t": "Gratina en el horno o airfryer a 200 °C hasta que el queso se derrita y dore. Sirve caliente.",
          "s": 360
        }
      ],
      "pt": [
        {
          "t": "Bata o ovo, o leite, a farinha ou aveia e a pitada de sal até ficar uma massa líquida e lisa. Deixe descansar 5 min.",
          "s": null
        },
        {
          "t": "Recheio: refogue a cebola e o alho, junte a carne moída e metade do tomate picado e cozinhe até ficar suculenta mas sem caldo.",
          "s": 480
        },
        {
          "t": "Para o molho, cozinhe o resto do tomate picado (ou molho de tomate) com sal e uma pitada de orégano até engrossar.",
          "s": null
        },
        {
          "t": "Aqueça uma frigideira antiaderente untada com gotas de óleo, despeje uma concha de massa e gire para cobrir o fundo; cozinhe até soltar e vire.",
          "s": 120
        },
        {
          "t": "Repita com o resto da massa, empilhando os discos num prato.",
          "s": null
        },
        {
          "t": "Recheie cada disco com carne, enrole e coloque num refratário; cubra com o molho e o queijo.",
          "s": null
        },
        {
          "t": "Gratine no forno ou airfryer a 200 °C até o queijo derreter e dourar. Sirva quente.",
          "s": 360
        }
      ],
      "en": [
        {
          "t": "Blend the egg, milk, flour or oats and pinch of salt into a smooth, runny batter. Rest 5 min.",
          "s": null
        },
        {
          "t": "Filling: sauté the onion and garlic, add the ground beef and half the chopped tomato and cook until juicy but not watery.",
          "s": 480
        },
        {
          "t": "For the sauce, cook the remaining chopped tomato (or tomato sauce) with salt and a pinch of oregano until thick.",
          "s": null
        },
        {
          "t": "Heat a nonstick pan greased with a few drops of oil, pour in a ladle of batter and swirl to coat; cook until it releases and flip.",
          "s": 120
        },
        {
          "t": "Repeat with the rest of the batter, stacking the crêpes on a plate.",
          "s": null
        },
        {
          "t": "Fill each crêpe with beef, roll it up and place in a baking dish; cover with the sauce and cheese.",
          "s": null
        },
        {
          "t": "Gratinate in the oven or air fryer at 200 °C until the cheese melts and browns. Serve hot.",
          "s": 360
        }
      ]
    },
    "videoQuery": "como hacer Panqueque Brasileño de Carne receta paso a paso"
  },
  {
    "id": "br_35",
    "country": "BRAZILIAN",
    "time": 22,
    "fav": false,
    "img": "images/br_35.jpg",
    "title": {
      "es": "Tutu de Feijão Mineiro con Bisteca",
      "pt": "Tutu de Feijão Mineiro",
      "en": "Minas Creamy Bean Mash & Pork"
    },
    "brTip": {
      "es": "Frijol batido y espesado con farinha de mandioca torrada, servido con huevo duro y lombo.",
      "pt": "Feijão batido engrossado com farinha de mandioca, ovo cozido e lombo.",
      "en": "Savory pureed beans thickened with cassava flour, served with pork and egg."
    },
    "macrosTrad": {
      "kcal": 790,
      "p": 62,
      "c": 61,
      "f": 32
    },
    "macrosFit": {
      "kcal": 721,
      "p": 65,
      "c": 49,
      "f": 29
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 150,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "lombo",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "panceta",
        "grams": 20,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa el feijão carioca cocido con su caldo hasta tener un puré líquido.",
          "s": null
        },
        {
          "t": "Sofríe el ajo machacado y la cebolla picada en un hilo de aceite hasta dorar.",
          "s": 180
        },
        {
          "t": "Vierte el frijol licuado y lleva a hervor suave.",
          "s": 180
        },
        {
          "t": "Agrega la farinha de mandioca en lluvia, batiendo con cuchara para que no haga grumos, y cocina hasta lograr un puré suave. Ajusta la sal.",
          "s": 180
        },
        {
          "t": "Sazona el lomo con sal, ajo y pimienta y ásalo en sartén caliente hasta dorar por ambos lados.",
          "s": 480
        },
        {
          "t": "Cuece el huevo 10 min, pélalo y pícalo; saltea la couve en tiras finas con ajo hasta que brille.",
          "s": 600
        },
        {
          "t": "Sirve el tutu caliente con el huevo picado encima, el lomo y la couve al lado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Bata o feijão carioca cozido com o caldo até virar um purê ralo.",
          "s": null
        },
        {
          "t": "Refogue o alho amassado e a cebola picada num fio de óleo até dourar.",
          "s": 180
        },
        {
          "t": "Despeje o feijão batido e deixe levantar fervura suave.",
          "s": 180
        },
        {
          "t": "Junte a farinha de mandioca em chuva, mexendo com a colher para não empelotar, e cozinhe até virar um purê macio. Acerte o sal.",
          "s": 180
        },
        {
          "t": "Tempere o lombo com sal, alho e pimenta e grelhe em frigideira quente até dourar dos dois lados.",
          "s": 480
        },
        {
          "t": "Cozinhe o ovo por 10 min, descasque e pique; refogue a couve em tiras finas com alho até brilhar.",
          "s": 600
        },
        {
          "t": "Sirva o tutu quente com o ovo picado por cima, o lombo e a couve ao lado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Blend the cooked pinto beans with their broth into a thin purée.",
          "s": null
        },
        {
          "t": "Sauté the crushed garlic and chopped onion in a drizzle of oil until golden.",
          "s": 180
        },
        {
          "t": "Pour in the blended beans and bring to a gentle boil.",
          "s": 180
        },
        {
          "t": "Rain in the cassava flour, stirring with a spoon so it does not lump, and cook into a smooth purée. Adjust the salt.",
          "s": 180
        },
        {
          "t": "Season the pork with salt, garlic and pepper and sear in a hot pan until golden on both sides.",
          "s": 480
        },
        {
          "t": "Boil the egg 10 min, peel and chop it; sauté the thinly sliced greens with garlic until glossy.",
          "s": 600
        },
        {
          "t": "Serve the tutu hot with the chopped egg on top, the pork and greens on the side.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Tutu de Feijão Mineiro con Bisteca receta paso a paso"
  },
  {
    "id": "br_36",
    "country": "BRAZILIAN",
    "time": 20,
    "fav": false,
    "img": "images/br_36.jpg",
    "title": {
      "es": "Cuscuz Paulista de Atún y Verduras",
      "pt": "Cuscuz Paulista de Atum",
      "en": "São Paulo Molded Corn Cake"
    },
    "brTip": {
      "es": "Pastel salado moldeado con farinha de milho amarela, atún/sardina, tomate, palmito/milho y huevo duro.",
      "pt": "Clássico paulista com farinha de milho, atum ou sardinha, tomate, milho e ovo.",
      "en": "Savory molded cornmeal terrine studded with tuna, tomato, corn, and boiled egg."
    },
    "macrosTrad": {
      "kcal": 487,
      "p": 51,
      "c": 49,
      "f": 10
    },
    "macrosFit": {
      "kcal": 488,
      "p": 55,
      "c": 44,
      "f": 11
    },
    "ingredients": [
      {
        "id": "atum",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cuscuz",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece el huevo 10 min, pásalo a agua fría, pélalo y córtalo en rodajas. Corta también rodajas de tomate y las aceitunas.",
          "s": null
        },
        {
          "t": "Engrasa un molde con hueco central (o tazas) y decora el fondo y las paredes con las rodajas de huevo, tomate y aceitunas.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el ajo y el tomate picado con la salsa de tomate hasta que se deshagan.",
          "s": 240
        },
        {
          "t": "Agrega 1 taza de agua o caldo, el maíz y el atún escurrido y desmenuzado; prueba la sal y deja hervir.",
          "s": 120
        },
        {
          "t": "Baja el fuego y agrega la harina de maíz en lluvia, mezclando sin parar hasta que la masa se despegue de la olla.",
          "s": 240
        },
        {
          "t": "Rellena el molde con la masa caliente presionando suavemente con una cuchara para que no queden huecos.",
          "s": null
        },
        {
          "t": "Deja reposar para que tome forma y desmolda tibio sobre un plato.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o ovo por 10 min, passe para água fria, descasque e corte em rodelas. Corte também rodelas de tomate e as azeitonas.",
          "s": null
        },
        {
          "t": "Unte uma forma de furo central (ou xícaras) e decore o fundo e as laterais com as rodelas de ovo, tomate e azeitonas.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o alho e o tomate picado com o molho de tomate até desmancharem.",
          "s": 240
        },
        {
          "t": "Junte 1 xícara de água ou caldo, o milho e o atum escorrido e desfiado; acerte o sal e deixe ferver.",
          "s": 120
        },
        {
          "t": "Abaixe o fogo e junte a farinha de milho em chuva, mexendo sem parar até a massa soltar da panela.",
          "s": 240
        },
        {
          "t": "Encha a forma com a massa quente apertando de leve com uma colher para não ficar buracos.",
          "s": null
        },
        {
          "t": "Deixe descansar para firmar e desenforme morno num prato.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Boil the egg 10 min, cool in cold water, peel and slice. Also slice the tomato and olives.",
          "s": null
        },
        {
          "t": "Grease a ring mold (or cups) and decorate the bottom and sides with the egg, tomato and olive slices.",
          "s": null
        },
        {
          "t": "Sauté the onion, garlic and chopped tomato with the tomato sauce until they break down.",
          "s": 240
        },
        {
          "t": "Add 1 cup of water or stock, the corn and the drained, flaked tuna; check the salt and bring to a boil.",
          "s": 120
        },
        {
          "t": "Lower the heat and rain in the cornmeal, stirring constantly until the mixture pulls away from the pot.",
          "s": 240
        },
        {
          "t": "Fill the mold with the hot mixture, pressing gently with a spoon so there are no gaps.",
          "s": null
        },
        {
          "t": "Let it rest to set and unmold while warm onto a plate.",
          "s": 300
        }
      ]
    },
    "videoQuery": "como hacer Cuscuz Paulista de Atún y Verduras receta paso a paso"
  },
  {
    "id": "br_37",
    "country": "BRAZILIAN",
    "time": 25,
    "fav": false,
    "img": "images/br_37.jpg",
    "title": {
      "es": "Angu / Polenta Brasileña con Carne Molida",
      "pt": "Polenta Mole com Carne Moída",
      "en": "Creamy Cornmeal with Beef Ragù"
    },
    "brTip": {
      "es": "En Minas Gerais se llama Angu; hecha con fubá mimoso cocido y salsa jugosa de patinho moído.",
      "pt": "Fubá mimoso cozido até ficar cremoso coberto com molho de patinho moído.",
      "en": "Creamy Brazilian cornmeal topped with rich ground beef tomato sauce."
    },
    "macrosTrad": {
      "kcal": 631,
      "p": 67,
      "c": 44,
      "f": 19
    },
    "macrosFit": {
      "kcal": 574,
      "p": 69,
      "c": 37,
      "f": 15
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 155,
        "fitGrams": 170,
        "sub": null,
        "fitId": null
      },
      {
        "id": "fuba",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 110,
        "fitGrams": 125,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 35,
        "fitGrams": 25,
        "sub": null,
        "fitId": "ricota"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica la cebolla y el ajo; tritura o pica el tomate.",
          "s": null
        },
        {
          "t": "Salsa: dora la carne molida con el ajo y la cebolla en un hilo de aceite, desmenuzándola con la cuchara.",
          "s": 300
        },
        {
          "t": "Agrega el tomate, sal y un poco de agua, y cocina a fuego bajo hasta espesar.",
          "s": 720
        },
        {
          "t": "Angu: disuelve el fubá en el agua fría con una pizca de sal antes de llevarlo al fuego (así nunca hace grumos).",
          "s": null
        },
        {
          "t": "Cocina a fuego medio-bajo removiendo constantemente hasta que esté cremoso y no sepa a maíz crudo. Si espesa demasiado, agrega agua caliente.",
          "s": 720
        },
        {
          "t": "Apaga y mezcla un poco del queso en el angu.",
          "s": null
        },
        {
          "t": "Sirve el angu caliente en plato hondo, con la salsa de carne encima y el resto del queso rallado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Pique a cebola e o alho; triture ou pique o tomate.",
          "s": null
        },
        {
          "t": "Molho: doure a carne moída com o alho e a cebola num fio de óleo, soltando com a colher.",
          "s": 300
        },
        {
          "t": "Junte o tomate, sal e um pouco de água, e cozinhe em fogo baixo até engrossar.",
          "s": 720
        },
        {
          "t": "Angu: dissolva o fubá na água fria com uma pitada de sal antes de levar ao fogo (assim nunca empelota).",
          "s": null
        },
        {
          "t": "Cozinhe em fogo médio-baixo mexendo sem parar até ficar cremoso e sem gosto de milho cru. Se engrossar demais, junte água quente.",
          "s": 720
        },
        {
          "t": "Desligue e misture um pouco do queijo no angu.",
          "s": null
        },
        {
          "t": "Sirva o angu quente em prato fundo, com o molho de carne por cima e o resto do queijo ralado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Chop the onion and garlic; crush or chop the tomato.",
          "s": null
        },
        {
          "t": "Sauce: brown the ground beef with the garlic and onion in a drizzle of oil, breaking it up with the spoon.",
          "s": 300
        },
        {
          "t": "Add the tomato, salt and a little water and simmer on low until thick.",
          "s": 720
        },
        {
          "t": "Angu: dissolve the cornmeal in the cold water with a pinch of salt before heating it (so it never lumps).",
          "s": null
        },
        {
          "t": "Cook over medium-low heat, stirring constantly, until creamy with no raw-corn taste. If too thick, add hot water.",
          "s": 720
        },
        {
          "t": "Turn off the heat and stir some of the cheese into the angu.",
          "s": null
        },
        {
          "t": "Serve the hot angu in a deep plate with the beef sauce on top and the rest of the grated cheese.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Angu / Polenta Brasileña con Carne Molida receta paso a paso"
  },
  {
    "id": "br_38",
    "country": "BRAZILIAN",
    "time": 22,
    "fav": false,
    "img": "images/br_38.jpg",
    "title": {
      "es": "Peixe na Telha / Assado Brasileño",
      "pt": "Peixe Assado com Batatas e Tomate",
      "en": "Brazilian Herb-Baked Fish"
    },
    "brTip": {
      "es": "Filete de pescado horneado sobre rodajas de papa, pimentón y tomate con mucho aceite de oliva y limón.",
      "pt": "Assado em camadas de batata, tomate, pimentão e azeite com limão.",
      "en": "Oven-baked fish layered over sliced potatoes, bell pepper, and tomato."
    },
    "macrosTrad": {
      "kcal": 460,
      "p": 41,
      "c": 36,
      "f": 19
    },
    "macrosFit": {
      "kcal": 401,
      "p": 45,
      "c": 33,
      "f": 11
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 200,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Precalienta el horno a 200 °C. Sazona la tilapia con limón, ajo machacado, sal y pimienta.",
          "s": null
        },
        {
          "t": "Corta las papas en rodajas finas (3 mm) y precuécelas en agua con sal para que terminen al mismo tiempo que el pescado.",
          "s": 300
        },
        {
          "t": "Corta la cebolla, el pimentón y el tomate en rodajas.",
          "s": null
        },
        {
          "t": "En una fuente (o teja de barro) aceitada, pon una capa de papas y luego la cebolla, el pimentón y el tomate; sazona con sal.",
          "s": null
        },
        {
          "t": "Coloca el pescado encima, rocía el aceite de oliva y unas gotas de limón.",
          "s": null
        },
        {
          "t": "Hornea hasta que el pescado esté blanco y se separe en lascas, y las verduras estén tiernas.",
          "s": 1080
        },
        {
          "t": "Sirve en la misma fuente con perejil picado y gajos de limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Preaqueça o forno a 200 °C. Tempere a tilápia com limão, alho amassado, sal e pimenta.",
          "s": null
        },
        {
          "t": "Corte as batatas em rodelas finas (3 mm) e pré-cozinhe em água com sal para terminarem junto com o peixe.",
          "s": 300
        },
        {
          "t": "Corte a cebola, o pimentão e o tomate em rodelas.",
          "s": null
        },
        {
          "t": "Num refratário (ou telha de barro) untado, faça uma camada de batatas e depois cebola, pimentão e tomate; tempere com sal.",
          "s": null
        },
        {
          "t": "Coloque o peixe por cima e regue com o azeite e gotas de limão.",
          "s": null
        },
        {
          "t": "Asse até o peixe ficar branco e soltar em lascas e os legumes estarem macios.",
          "s": 1080
        },
        {
          "t": "Sirva no próprio refratário com salsinha picada e gomos de limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Preheat the oven to 200 °C. Season the tilapia with lime, crushed garlic, salt and pepper.",
          "s": null
        },
        {
          "t": "Slice the potatoes thin (3 mm) and parboil in salted water so they finish with the fish.",
          "s": 300
        },
        {
          "t": "Slice the onion, bell pepper and tomato.",
          "s": null
        },
        {
          "t": "In an oiled dish (or clay tile) layer the potatoes, then the onion, pepper and tomato; season with salt.",
          "s": null
        },
        {
          "t": "Lay the fish on top and drizzle with the olive oil and a few drops of lime.",
          "s": null
        },
        {
          "t": "Bake until the fish is white and flakes, and the vegetables are tender.",
          "s": 1080
        },
        {
          "t": "Serve in the same dish with chopped parsley and lime wedges.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Peixe na Telha / Assado Brasileño receta paso a paso"
  },
  {
    "id": "br_39",
    "country": "BRAZILIAN",
    "time": 20,
    "fav": false,
    "img": "images/br_39.jpg",
    "title": {
      "es": "Farofa Proteica de Huevo y Banana",
      "pt": "Farofa de Ovo com Banana-da-Terra",
      "en": "Brazilian Egg & Plantain Farofa"
    },
    "brTip": {
      "es": "Acompañamiento clásico o plato único rápido con farinha de mandioca torrada, huevos y banana-da-terra.",
      "pt": "Farinha de mandioca tostada com cebola, ovos mexidos e banana-da-terra.",
      "en": "Toasted cassava flour tossed with scrambled eggs, onion, and caramelized plantain."
    },
    "macrosTrad": {
      "kcal": 625,
      "p": 23,
      "c": 83,
      "f": 24
    },
    "macrosFit": {
      "kcal": 545,
      "p": 24,
      "c": 69,
      "f": 20
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "manteiga",
        "grams": 12,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela la banana-da-terra y córtala en cubos; pica la cebolla y el ajo.",
          "s": null
        },
        {
          "t": "Dora la banana en una sartén con un poco del aceite hasta caramelizar por todos lados; reserva.",
          "s": 240
        },
        {
          "t": "En la misma sartén sofríe la cebolla y el ajo hasta que estén dorados.",
          "s": 240
        },
        {
          "t": "Baja el fuego, rompe los huevos y revuélvelos suavemente hasta formar trozos tiernos; sazona con sal.",
          "s": 120
        },
        {
          "t": "Agrega la farinha de mandioca y tuéstala sin dejar de mover hasta que esté crocante y dorada.",
          "s": 180
        },
        {
          "t": "Apaga el fuego y mezcla la banana caramelizada y el cheiro-verde picado.",
          "s": null
        },
        {
          "t": "Sirve como acompañamiento de carnes o feijão, o sola como comida rápida.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Descasque a banana-da-terra e corte em cubos; pique a cebola e o alho.",
          "s": null
        },
        {
          "t": "Doure a banana numa frigideira com um pouco do óleo até caramelizar por todos os lados; reserve.",
          "s": 240
        },
        {
          "t": "Na mesma frigideira refogue a cebola e o alho até dourarem.",
          "s": 240
        },
        {
          "t": "Abaixe o fogo, quebre os ovos e mexa delicadamente até formar pedaços macios; tempere com sal.",
          "s": 120
        },
        {
          "t": "Junte a farinha de mandioca e toste sem parar de mexer até ficar crocante e dourada.",
          "s": 180
        },
        {
          "t": "Desligue e misture a banana caramelizada e o cheiro-verde picado.",
          "s": null
        },
        {
          "t": "Sirva como acompanhamento de carnes ou feijão, ou sozinha como refeição rápida.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Peel the plantain and cut into cubes; chop the onion and garlic.",
          "s": null
        },
        {
          "t": "Brown the plantain in a pan with a little of the oil until caramelized on all sides; set aside.",
          "s": 240
        },
        {
          "t": "In the same pan sauté the onion and garlic until golden.",
          "s": 240
        },
        {
          "t": "Lower the heat, crack in the eggs and scramble gently into soft curds; season with salt.",
          "s": 120
        },
        {
          "t": "Add the cassava flour and toast, stirring constantly, until crisp and golden.",
          "s": 180
        },
        {
          "t": "Turn off the heat and fold in the caramelized plantain and chopped herbs.",
          "s": null
        },
        {
          "t": "Serve as a side for meats or beans, or on its own as a quick meal.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Farofa Proteica de Huevo y Banana receta paso a paso"
  },
  {
    "id": "br_40",
    "country": "BRAZILIAN",
    "time": 20,
    "fav": false,
    "img": "images/br_40.jpg",
    "title": {
      "es": "Salada de Feijão Fradinho con Atún",
      "pt": "Salada de Feijão Fradinho com Atum",
      "en": "Brazilian Black-Eyed Pea & Tuna Salad"
    },
    "brTip": {
      "es": "Plato fresco muy popular en el verano brasileño: feijão fradinho al dente con atún, vinagrete y cilantro.",
      "pt": "Refrescante para o calor brasileiro: feijão fradinho firme com atum e vinagrete.",
      "en": "Refreshing Brazilian summer salad with firm beans, tuna, and herb vinaigrette."
    },
    "macrosTrad": {
      "kcal": 473,
      "p": 48,
      "c": 40,
      "f": 14
    },
    "macrosFit": {
      "kcal": 414,
      "p": 50,
      "c": 36,
      "f": 8
    },
    "ingredients": [
      {
        "id": "feijao_fradinho",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "atum",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Si usas frijol seco, remójalo desde la víspera.",
          "s": null
        },
        {
          "t": "Cuece el feijão fradinho (o carioca) en agua con sal al dente, sin que se rompan los granos.",
          "s": 900
        },
        {
          "t": "Escúrrelo y enfríalo bajo el chorro de agua fría para cortar la cocción.",
          "s": null
        },
        {
          "t": "Pica el tomate (sin semillas), la cebolla morada y el pimentón en cubitos pequeños.",
          "s": null
        },
        {
          "t": "Escurre bien el atún y desmenúzalo en lascas grandes.",
          "s": null
        },
        {
          "t": "Mezcla el frijol, las verduras y el atún. Aliña con el aceite de oliva, el jugo de limón, sal y abundante cilantro o perejil.",
          "s": null
        },
        {
          "t": "Refrigera para que tome sabor y sirve frío.",
          "s": 600
        }
      ],
      "pt": [
        {
          "t": "Se usar feijão seco, deixe de molho desde a véspera.",
          "s": null
        },
        {
          "t": "Cozinhe o feijão-fradinho (ou carioca) em água com sal al dente, sem desmanchar os grãos.",
          "s": 900
        },
        {
          "t": "Escorra e esfrie em água corrente fria para parar o cozimento.",
          "s": null
        },
        {
          "t": "Pique o tomate (sem sementes), a cebola roxa e o pimentão em cubinhos.",
          "s": null
        },
        {
          "t": "Escorra bem o atum e separe em lascas grandes.",
          "s": null
        },
        {
          "t": "Misture o feijão, os legumes e o atum. Tempere com o azeite, o suco de limão, sal e bastante coentro ou salsinha.",
          "s": null
        },
        {
          "t": "Leve à geladeira para pegar sabor e sirva gelado.",
          "s": 600
        }
      ],
      "en": [
        {
          "t": "If using dried beans, soak them overnight.",
          "s": null
        },
        {
          "t": "Cook the black-eyed peas (or pinto beans) in salted water until al dente, without breaking them.",
          "s": 900
        },
        {
          "t": "Drain and cool under cold running water to stop the cooking.",
          "s": null
        },
        {
          "t": "Dice the seeded tomato, red onion and bell pepper small.",
          "s": null
        },
        {
          "t": "Drain the tuna well and break it into large flakes.",
          "s": null
        },
        {
          "t": "Combine the beans, vegetables and tuna. Dress with the olive oil, lime juice, salt and plenty of cilantro or parsley.",
          "s": null
        },
        {
          "t": "Chill so it absorbs the flavors and serve cold.",
          "s": 600
        }
      ]
    },
    "videoQuery": "como hacer Salada de Feijão Fradinho con Atún receta paso a paso"
  },
  {
    "id": "mx_1",
    "country": "MEXICAN",
    "time": 25,
    "fav": true,
    "img": "images/mx_1.jpg",
    "title": {
      "es": "Tacos al Pastor",
      "pt": "Tacos al Pastor",
      "en": "Al Pastor Tacos"
    },
    "brTip": {
      "es": "En Brasil: tortillas → Rap10 o masa de tapioca; achiote → colorau + páprica defumada; carne de cerdo → lombo suíno.",
      "pt": "No Brasil: tortilhas → Rap10 ou tapioca; achiote → colorau + páprica defumada.",
      "en": "In Brazil: tortillas → Rap10 or tapioca; annatto → colorau + smoked paprika."
    },
    "macrosTrad": {
      "kcal": 552,
      "p": 48,
      "c": 49,
      "f": 18
    },
    "macrosFit": {
      "kcal": 555,
      "p": 52,
      "c": 43,
      "f": 19
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 150,
        "fitGrams": 165,
        "sub": {
          "es": "En Brasil: Pernil ou lombo suíno",
          "pt": "No Brasil: Pernil ou lombo suíno",
          "en": "In Brazil: Pernil ou lombo suíno"
        },
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 70,
        "fitGrams": 55,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      },
      {
        "id": "abacaxi",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile_seco",
        "grams": 8,
        "fitGrams": 9,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta calabresa",
          "pt": "No Brasil: Páprica defumada + pimenta calabresa",
          "en": "In Brazil: Páprica defumada + pimenta calabresa"
        },
        "fitId": null
      },
      {
        "id": "achiote",
        "grams": 5,
        "fitGrams": 5,
        "sub": {
          "es": "En Brasil: Colorau (urucum)",
          "pt": "No Brasil: Colorau (urucum)",
          "en": "In Brazil: Colorau (urucum)"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el lomo de cerdo en láminas muy finas (es más fácil si lo congelas 20 min antes).",
          "s": null
        },
        {
          "t": "Hidrata los chiles guajillo en agua caliente y licúalos con el achiote, 2 dientes de ajo, un chorrito de vinagre, orégano, comino, sal y jugo de piña o naranja hasta tener una pasta roja.",
          "s": null
        },
        {
          "t": "Unta bien la carne con la marinada y deja reposar en la nevera.",
          "s": 900
        },
        {
          "t": "Pica la cebolla y el cilantro, corta la piña en cubitos y el limón en gajos.",
          "s": null
        },
        {
          "t": "Calienta una sartén grande con unas gotas de aceite y sella el cerdo a fuego alto, en tandas, hasta que los bordes queden tostados; agrega la piña el último minuto.",
          "s": 300
        },
        {
          "t": "Calienta las tortillas de maíz en sartén seca por ambos lados.",
          "s": 60
        },
        {
          "t": "Rellena con la carne picada y corona con cebolla, cilantro, piña y unas gotas de limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte o lombo em lâminas bem finas (é mais fácil se congelar 20 min antes).",
          "s": null
        },
        {
          "t": "Hidrate os chiles guajillo em água quente e bata com o achiote, 2 dentes de alho, um fio de vinagre, orégano, cominho, sal e suco de abacaxi ou laranja até virar uma pasta vermelha.",
          "s": null
        },
        {
          "t": "Passe a marinada na carne e deixe descansar na geladeira.",
          "s": 900
        },
        {
          "t": "Pique a cebola e o coentro, corte o abacaxi em cubinhos e o limão em gomos.",
          "s": null
        },
        {
          "t": "Aqueça uma frigideira grande com gotas de óleo e sele o porco em fogo alto, aos poucos, até as bordas tostarem; junte o abacaxi no último minuto.",
          "s": 300
        },
        {
          "t": "Aqueça as tortilhas de milho em frigideira seca dos dois lados.",
          "s": 60
        },
        {
          "t": "Recheie com a carne picada e finalize com cebola, coentro, abacaxi e gotas de limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Slice the pork loin very thin (easier if you freeze it 20 min first).",
          "s": null
        },
        {
          "t": "Soak the guajillo chiles in hot water and blend with the achiote, 2 garlic cloves, a splash of vinegar, oregano, cumin, salt and pineapple or orange juice into a red paste.",
          "s": null
        },
        {
          "t": "Coat the meat well with the marinade and let it rest in the fridge.",
          "s": 900
        },
        {
          "t": "Chop the onion and cilantro, dice the pineapple and cut the lime into wedges.",
          "s": null
        },
        {
          "t": "Heat a large pan with a few drops of oil and sear the pork over high heat in batches until the edges are charred; add the pineapple in the last minute.",
          "s": 300
        },
        {
          "t": "Warm the corn tortillas in a dry pan on both sides.",
          "s": 60
        },
        {
          "t": "Fill with the chopped meat and top with onion, cilantro, pineapple and a squeeze of lime.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Tacos al Pastor receta paso a paso"
  },
  {
    "id": "mx_2",
    "country": "MEXICAN",
    "time": 20,
    "fav": false,
    "img": "images/mx_2.jpg",
    "title": {
      "es": "Chilaquiles con Pollo",
      "pt": "Chilaquiles com Frango",
      "en": "Mexican Chilaquiles"
    },
    "brTip": {
      "es": "En Brasil: totopos → Rap10 cortado en triángulos y horneado/airfryer; crema → requeijão light; queso fresco → queijo minas.",
      "pt": "No Brasil: totopos → Rap10 assado em triângulos; queijo fresco → queijo minas.",
      "en": "In Brazil: tortilla chips → baked Rap10 triangles; queso fresco → queijo minas."
    },
    "macrosTrad": {
      "kcal": 597,
      "p": 57,
      "c": 44,
      "f": 21
    },
    "macrosFit": {
      "kcal": 464,
      "p": 59,
      "c": 39,
      "f": 8
    },
    "ingredients": [
      {
        "id": "tortilla_maiz",
        "grams": 75,
        "fitGrams": 60,
        "sub": {
          "es": "En Brasil: Rap10 em triângulos assado",
          "pt": "No Brasil: Rap10 em triângulos assado",
          "en": "In Brazil: Rap10 em triângulos assado"
        },
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 35,
        "fitGrams": 25,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "creme_leite",
        "grams": 25,
        "fitGrams": 20,
        "sub": null,
        "fitId": "iogurte"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga en agua con sal hasta que esté blanca por dentro y desmenúzala.",
          "s": null
        },
        {
          "t": "Corta las tortillas de maíz en triángulos y hornéalas (o airfryer a 180 °C) hasta que estén crocantes como totopos.",
          "s": 360
        },
        {
          "t": "Salsa: hierve los tomates, la cebolla, el ajo y el chile hasta que estén blandos.",
          "s": 480
        },
        {
          "t": "Licúalos con un poco del agua de cocción, cilantro y sal.",
          "s": null
        },
        {
          "t": "Vierte la salsa en una sartén con unas gotas de aceite y hierve hasta que espese ligeramente.",
          "s": 240
        },
        {
          "t": "Apaga el fuego, agrega los totopos y revuelve rápido para que se impregnen sin ablandarse del todo.",
          "s": 20
        },
        {
          "t": "Sirve de inmediato con el pollo desmenuzado, el queso fresco desmoronado, la crema y aros de cebolla.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito em água com sal até ficar branco por dentro e desfie.",
          "s": null
        },
        {
          "t": "Corte as tortilhas de milho em triângulos e asse (ou airfryer a 180 °C) até ficarem crocantes como totopos.",
          "s": 360
        },
        {
          "t": "Molho: ferva os tomates, a cebola, o alho e a pimenta até amolecerem.",
          "s": 480
        },
        {
          "t": "Bata com um pouco da água do cozimento, coentro e sal.",
          "s": null
        },
        {
          "t": "Despeje o molho numa frigideira com gotas de óleo e ferva até engrossar levemente.",
          "s": 240
        },
        {
          "t": "Desligue o fogo, junte os triângulos e mexa rápido para pegarem molho sem amolecer totalmente.",
          "s": 20
        },
        {
          "t": "Sirva na hora com o frango desfiado, o queijo fresco esfarelado, o creme e anéis de cebola.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Poach the chicken breast in salted water until white inside and shred it.",
          "s": null
        },
        {
          "t": "Cut the corn tortillas into triangles and bake (or air-fry at 180 °C) until crisp like chips.",
          "s": 360
        },
        {
          "t": "Sauce: boil the tomatoes, onion, garlic and chili until soft.",
          "s": 480
        },
        {
          "t": "Blend them with a little cooking water, cilantro and salt.",
          "s": null
        },
        {
          "t": "Pour the sauce into a pan with a few drops of oil and simmer until slightly thickened.",
          "s": 240
        },
        {
          "t": "Turn off the heat, add the chips and toss quickly so they soak up sauce without going fully soft.",
          "s": 20
        },
        {
          "t": "Serve right away with the shredded chicken, crumbled queso fresco, crema and onion rings.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Chilaquiles con Pollo receta paso a paso"
  },
  {
    "id": "mx_3",
    "country": "MEXICAN",
    "time": 28,
    "fav": false,
    "img": "images/mx_3.jpg",
    "title": {
      "es": "Enchiladas Rojas de Pollo",
      "pt": "Enchiladas Vermelhas de Frango",
      "en": "Red Chicken Enchiladas"
    },
    "brTip": {
      "es": "Chile guajillo → páprica defumada + extrato de tomate + pimenta dedo-de-moça; queso → muçarela o minas.",
      "pt": "Chile guajillo → páprica defumada + extrato de tomate + dedo-de-moça.",
      "en": "Guajillo chili sub → smoked paprika + tomato paste + Brazilian chili."
    },
    "macrosTrad": {
      "kcal": 653,
      "p": 62,
      "c": 48,
      "f": 23
    },
    "macrosFit": {
      "kcal": 512,
      "p": 64,
      "c": 43,
      "f": 9
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 75,
        "fitGrams": 60,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      },
      {
        "id": "chile_seco",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta calabresa",
          "pt": "No Brasil: Páprica defumada + pimenta calabresa",
          "en": "In Brazil: Páprica defumada + pimenta calabresa"
        },
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 40,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "creme_leite",
        "grams": 25,
        "fitGrams": 20,
        "sub": null,
        "fitId": "iogurte"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga en agua con sal y desmenúzala con dos tenedores.",
          "s": null
        },
        {
          "t": "Hierve o asa los tomates hasta que estén blandos.",
          "s": 480
        },
        {
          "t": "Hidrata los chiles guajillo en agua caliente y licúalos con los tomates, el ajo, un trozo de cebolla, comino y sal; cuela.",
          "s": null
        },
        {
          "t": "Cocina la salsa en una sartén con unas gotas de aceite hasta que espese.",
          "s": 360
        },
        {
          "t": "Precalienta el horno a 200 °C. Pasa cada tortilla tibia por la salsa, rellénala con pollo y enróllala; colócalas juntas en una fuente.",
          "s": null
        },
        {
          "t": "Baña con el resto de la salsa, cubre con el queso y gratina en el horno.",
          "s": 480
        },
        {
          "t": "Sirve con crema, cebolla en aros y cilantro.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito em água com sal e desfie com dois garfos.",
          "s": null
        },
        {
          "t": "Ferva ou asse os tomates até amolecerem.",
          "s": 480
        },
        {
          "t": "Hidrate os chiles guajillo em água quente e bata com os tomates, o alho, um pedaço de cebola, cominho e sal; coe.",
          "s": null
        },
        {
          "t": "Cozinhe o molho numa frigideira com gotas de óleo até engrossar.",
          "s": 360
        },
        {
          "t": "Preaqueça o forno a 200 °C. Passe cada tortilla morna no molho, recheie com frango e enrole; coloque lado a lado num refratário.",
          "s": null
        },
        {
          "t": "Cubra com o resto do molho e o queijo e gratine no forno.",
          "s": 480
        },
        {
          "t": "Sirva com creme, cebola em anéis e coentro.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Poach the chicken breast in salted water and shred it with two forks.",
          "s": null
        },
        {
          "t": "Boil or roast the tomatoes until soft.",
          "s": 480
        },
        {
          "t": "Soak the guajillo chiles in hot water and blend with the tomatoes, garlic, a piece of onion, cumin and salt; strain.",
          "s": null
        },
        {
          "t": "Cook the sauce in a pan with a few drops of oil until thick.",
          "s": 360
        },
        {
          "t": "Preheat the oven to 200 °C. Dip each warm tortilla in the sauce, fill with chicken and roll; place side by side in a dish.",
          "s": null
        },
        {
          "t": "Pour over the rest of the sauce, top with cheese and bake until bubbling.",
          "s": 480
        },
        {
          "t": "Serve with crema, onion rings and cilantro.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Enchiladas Rojas de Pollo receta paso a paso"
  },
  {
    "id": "mx_4",
    "country": "MEXICAN",
    "time": 40,
    "fav": false,
    "img": "images/mx_4.jpg",
    "title": {
      "es": "Pozole Rojo Tradicional",
      "pt": "Pozole Vermelho (Caldo Mexicano)",
      "en": "Mexican Red Pozole"
    },
    "brTip": {
      "es": "El maíz pozolero en Brasil se llama 'milho para canjica branca' — ¡es exactamente el mismo grano y se consigue en cualquier súper!",
      "pt": "O milho pozolero é exatamente o 'milho para canjica branca' vendido em todo mercado brasileiro!",
      "en": "Hominy corn is sold in every Brazilian supermarket as 'milho para canjica branca'!"
    },
    "macrosTrad": {
      "kcal": 476,
      "p": 47,
      "c": 33,
      "f": 17
    },
    "macrosFit": {
      "kcal": 501,
      "p": 51,
      "c": 31,
      "f": 18
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 150,
        "fitGrams": 165,
        "sub": {
          "es": "En Brasil: Pernil ou lombo suíno",
          "pt": "No Brasil: Pernil ou lombo suíno",
          "en": "In Brazil: Pernil ou lombo suíno"
        },
        "fitId": null
      },
      {
        "id": "mote",
        "grams": 130,
        "fitGrams": 105,
        "sub": {
          "es": "En Brasil: Canjica branca",
          "pt": "No Brasil: Canjica branca",
          "en": "In Brazil: Canjica branca"
        },
        "fitId": null
      },
      {
        "id": "chile_seco",
        "grams": 12,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta calabresa",
          "pt": "No Brasil: Páprica defumada + pimenta calabresa",
          "en": "In Brazil: Páprica defumada + pimenta calabresa"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Si usas maíz seco para pozole o canjica, remójalo 4 horas o desde la víspera.",
          "s": null
        },
        {
          "t": "Cuécelo en olla a presión hasta que los granos revienten “como flor”.",
          "s": 2100
        },
        {
          "t": "Aparte, cuece el cerdo en trozos con agua, media cebolla, ajo, laurel y sal hasta que esté tierno; guarda el caldo.",
          "s": 1500
        },
        {
          "t": "Hidrata los chiles guajillo en agua caliente y licúalos con ajo y un trozo de cebolla; cuela la salsa.",
          "s": null
        },
        {
          "t": "Sofríe esa salsa en la olla con unas gotas de aceite y agrégala al caldo con el maíz y la carne deshebrada.",
          "s": 300
        },
        {
          "t": "Hierve todo junto con orégano seco frotado entre las manos; ajusta la sal.",
          "s": 900
        },
        {
          "t": "Sirve en plato hondo con lechuga o repollo picado fino, cebolla, rábano en rodajas y limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Se usar milho seco para pozole ou canjica, deixe de molho 4 horas ou desde a véspera.",
          "s": null
        },
        {
          "t": "Cozinhe na pressão até os grãos estourarem “como flor”.",
          "s": 2100
        },
        {
          "t": "À parte, cozinhe o porco em pedaços com água, meia cebola, alho, louro e sal até ficar macio; guarde o caldo.",
          "s": 1500
        },
        {
          "t": "Hidrate os chiles guajillo em água quente e bata com alho e um pedaço de cebola; coe o molho.",
          "s": null
        },
        {
          "t": "Refogue esse molho na panela com gotas de óleo e junte ao caldo com o milho e a carne desfiada.",
          "s": 300
        },
        {
          "t": "Ferva tudo junto com orégano seco esfregado entre as mãos; acerte o sal.",
          "s": 900
        },
        {
          "t": "Sirva em prato fundo com alface ou repolho fininho, cebola, rabanete em rodelas e limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "If using dried hominy, soak it 4 hours or overnight.",
          "s": null
        },
        {
          "t": "Cook it in a pressure cooker until the kernels burst open “like flowers”.",
          "s": 2100
        },
        {
          "t": "Separately, simmer the pork pieces in water with half an onion, garlic, bay leaf and salt until tender; keep the broth.",
          "s": 1500
        },
        {
          "t": "Soak the guajillo chiles in hot water and blend with garlic and a piece of onion; strain the sauce.",
          "s": null
        },
        {
          "t": "Fry that sauce in the pot with a few drops of oil and add it to the broth with the hominy and shredded pork.",
          "s": 300
        },
        {
          "t": "Simmer everything together with dried oregano rubbed between your palms; adjust the salt.",
          "s": 900
        },
        {
          "t": "Serve in deep bowls with finely shredded lettuce or cabbage, onion, sliced radish and lime.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Pozole Rojo Tradicional receta paso a paso"
  },
  {
    "id": "mx_5",
    "country": "MEXICAN",
    "time": 15,
    "fav": false,
    "img": "images/mx_5.jpg",
    "title": {
      "es": "Quesadillas de Carne y Queso",
      "pt": "Quesadilhas de Carne e Queijo",
      "en": "Mexican Beef Quesadillas"
    },
    "brTip": {
      "es": "Original con queso Oaxaca o Chihuahua, que se derrite en hilos. En Brasil: muçarela o queijo minas padrão.",
      "pt": "Original com queijo Oaxaca ou Chihuahua, que derrete em fios. No Brasil: muçarela ou queijo minas padrão.",
      "en": "Made with Oaxaca or Chihuahua cheese, which melts into strings. In Brazil: mozzarella or minas padrão cheese."
    },
    "macrosTrad": {
      "kcal": 617,
      "p": 63,
      "c": 38,
      "f": 23
    },
    "macrosFit": {
      "kcal": 531,
      "p": 63,
      "c": 32,
      "f": 16
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 135,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 70,
        "fitGrams": 55,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 55,
        "fitGrams": 40,
        "sub": {
          "es": "En Brasil: Muçarela (queijo Oaxaca)",
          "pt": "No Brasil: Muçarela (queijo Oaxaca)",
          "en": "In Brazil: Muçarela (queijo Oaxaca)"
        },
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica la cebolla y el ajo; ralla el queso.",
          "s": null
        },
        {
          "t": "Sofríe la carne molida con la cebolla, el ajo, el comino y sal en una sartén con unas gotas de aceite hasta que dore y quede suelta.",
          "s": 300
        },
        {
          "t": "Pico de gallo: pica tomate, cebolla y cilantro; mezcla con jugo de limón y sal.",
          "s": null
        },
        {
          "t": "Calienta una sartén sin aceite a fuego medio-bajo y coloca una tortilla.",
          "s": null
        },
        {
          "t": "Reparte queso en toda la tortilla y pon la carne caliente solo en una mitad.",
          "s": null
        },
        {
          "t": "Dobla, presiona con la espátula y dora por ambos lados hasta que esté crocante y el queso fundido.",
          "s": 180
        },
        {
          "t": "Corta en triángulos y sirve con el pico de gallo.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Pique a cebola e o alho; rale o queijo.",
          "s": null
        },
        {
          "t": "Refogue a carne moída com a cebola, o alho, o cominho e sal numa frigideira com gotas de óleo até dourar e ficar soltinha.",
          "s": 300
        },
        {
          "t": "Pico de gallo: pique tomate, cebola e coentro; misture com suco de limão e sal.",
          "s": null
        },
        {
          "t": "Aqueça uma frigideira sem óleo em fogo médio-baixo e coloque uma tortilla.",
          "s": null
        },
        {
          "t": "Espalhe queijo por toda a tortilla e coloque a carne quente só numa metade.",
          "s": null
        },
        {
          "t": "Dobre, aperte com a espátula e doure dos dois lados até ficar crocante e o queijo derreter.",
          "s": 180
        },
        {
          "t": "Corte em triângulos e sirva com o pico de gallo.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Chop the onion and garlic; grate the cheese.",
          "s": null
        },
        {
          "t": "Sauté the ground beef with the onion, garlic, cumin and salt in a pan with a few drops of oil until browned and crumbly.",
          "s": 300
        },
        {
          "t": "Pico de gallo: chop tomato, onion and cilantro; mix with lime juice and salt.",
          "s": null
        },
        {
          "t": "Heat a dry pan over medium-low and place a tortilla in it.",
          "s": null
        },
        {
          "t": "Spread cheese over the whole tortilla and put the hot beef on one half only.",
          "s": null
        },
        {
          "t": "Fold, press with the spatula and cook both sides until crisp and the cheese melts.",
          "s": 180
        },
        {
          "t": "Cut into wedges and serve with the pico de gallo.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Quesadillas de Carne y Queso receta paso a paso"
  },
  {
    "id": "mx_6",
    "country": "MEXICAN",
    "time": 18,
    "fav": false,
    "img": "images/mx_6.jpg",
    "title": {
      "es": "Fajitas de Pollo y Pimentones",
      "pt": "Fajitas de Frango com Pimentão",
      "en": "Sizzling Chicken Fajitas"
    },
    "brTip": {
      "es": "En Brasil usa pimentão verde/amarelo/vermelho, Rap10 y requeijão light como sustituto del sour cream.",
      "pt": "Com pimentões coloridos, Rap10 e requeijão light no lugar do sour cream.",
      "en": "With colorful Brazilian bell peppers, Rap10, and light requeijão."
    },
    "macrosTrad": {
      "kcal": 632,
      "p": 59,
      "c": 52,
      "f": 21
    },
    "macrosFit": {
      "kcal": 574,
      "p": 64,
      "c": 46,
      "f": 15
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 90,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 70,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "creme_leite",
        "grams": 20,
        "fitGrams": 15,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "limao",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el pollo, el pimentón y la cebolla en tiras largas y del mismo grosor para que se cocinen igual.",
          "s": null
        },
        {
          "t": "Mezcla el pollo con 1 cdta de comino, 1 cdta de páprica, ajo, sal y el jugo de medio limón.",
          "s": null
        },
        {
          "t": "Deja marinar mientras calientas la sartén.",
          "s": 600
        },
        {
          "t": "Calienta una sartén bien fuerte con un hilo de aceite y sella el pollo sin amontonarlo hasta dorar; retíralo.",
          "s": 240
        },
        {
          "t": "En la misma sartén saltea la cebolla y el pimentón: deben quedar tiernos pero crocantes.",
          "s": 180
        },
        {
          "t": "Devuelve el pollo, mezcla y calienta las tortillas en sartén seca.",
          "s": 60
        },
        {
          "t": "Sirve en la sartén caliente con las tortillas, crema agria y limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte o frango, o pimentão e a cebola em tiras compridas e da mesma espessura para cozinharem por igual.",
          "s": null
        },
        {
          "t": "Misture o frango com 1 colher (chá) de cominho, 1 de páprica, alho, sal e o suco de meio limão.",
          "s": null
        },
        {
          "t": "Deixe marinar enquanto aquece a frigideira.",
          "s": 600
        },
        {
          "t": "Aqueça bem uma frigideira com um fio de óleo e sele o frango sem amontoar até dourar; retire.",
          "s": 240
        },
        {
          "t": "Na mesma frigideira salteie a cebola e o pimentão: devem ficar macios mas crocantes.",
          "s": 180
        },
        {
          "t": "Volte o frango, misture e aqueça as tortillas em frigideira seca.",
          "s": 60
        },
        {
          "t": "Sirva na frigideira quente com as tortilhas, creme azedo e limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the chicken, bell pepper and onion into long strips of the same thickness so they cook evenly.",
          "s": null
        },
        {
          "t": "Toss the chicken with 1 tsp cumin, 1 tsp paprika, garlic, salt and the juice of half a lime.",
          "s": null
        },
        {
          "t": "Let it marinate while the pan heats.",
          "s": 600
        },
        {
          "t": "Heat a pan very hot with a drizzle of oil and sear the chicken without crowding until golden; remove.",
          "s": 240
        },
        {
          "t": "In the same pan sauté the onion and pepper: tender but still crisp.",
          "s": 180
        },
        {
          "t": "Return the chicken, toss and warm the tortillas in a dry pan.",
          "s": 60
        },
        {
          "t": "Serve in the hot pan with the tortillas, sour cream and lime.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Fajitas de Pollo y Pimentones receta paso a paso"
  },
  {
    "id": "mx_7",
    "country": "MEXICAN",
    "time": 25,
    "fav": false,
    "img": "images/mx_7.jpg",
    "title": {
      "es": "Tinga de Pollo al Chipotle",
      "pt": "Tinga de Frango (Molho Defumado)",
      "en": "Smoky Chicken Tinga"
    },
    "brTip": {
      "es": "Original con chiles chipotle en adobo, que dan el sabor ahumado. En Brasil, si no los encuentras: páprica defumada + extrato de tomate + pimenta dedo-de-moça.",
      "pt": "Original com chiles chipotle em adobo, que dão o sabor defumado. No Brasil, se não achar: páprica defumada + extrato de tomate + pimenta dedo-de-moça.",
      "en": "Made with chipotle chiles in adobo for the smoky flavor. In Brazil, if unavailable: smoked paprika + tomato paste + red chili."
    },
    "macrosTrad": {
      "kcal": 572,
      "p": 62,
      "c": 43,
      "f": 17
    },
    "macrosFit": {
      "kcal": 493,
      "p": 65,
      "c": 40,
      "f": 8
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 130,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile_seco",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Páprica defumada (chipotle)",
          "pt": "No Brasil: Páprica defumada (chipotle)",
          "en": "In Brazil: Páprica defumada (chipotle)"
        },
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 50,
        "fitGrams": 40,
        "sub": {
          "es": "En Brasil: Rap10 assado (tostada)",
          "pt": "No Brasil: Rap10 assado (tostada)",
          "en": "In Brazil: Rap10 assado (tostada)"
        },
        "fitId": null
      },
      {
        "id": "creme_leite",
        "grams": 20,
        "fitGrams": 15,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "queso_fresco",
        "grams": 20,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga en agua con laurel y sal hasta que esté cocida; desmenúzala y guarda un poco de caldo.",
          "s": null
        },
        {
          "t": "Tuesta las tortillas de maíz en el horno o en sartén seca hasta que queden rígidas y crocantes (tostadas).",
          "s": 300
        },
        {
          "t": "Licúa los tomates con 1 diente de ajo, los chiles chipotle en adobo y un chorrito del caldo.",
          "s": null
        },
        {
          "t": "Corta la cebolla en plumas finas y sofríela en una sartén con unas gotas de aceite hasta que transparente.",
          "s": 240
        },
        {
          "t": "Vierte la salsa y hierve hasta que espese.",
          "s": 180
        },
        {
          "t": "Agrega el pollo desmenuzado y cocina hasta que quede jugoso y concentrado; ajusta la sal.",
          "s": 300
        },
        {
          "t": "Sirve la tinga sobre las tostadas con crema y queso fresco desmoronado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito em água com louro e sal até cozinhar; desfie e guarde um pouco do caldo.",
          "s": null
        },
        {
          "t": "Toste as tortilhas de milho no forno ou em frigideira seca até ficarem rígidas e crocantes (tostadas).",
          "s": 300
        },
        {
          "t": "Bata os tomates com 1 dente de alho, os chiles chipotle em adobo e um pouco do caldo.",
          "s": null
        },
        {
          "t": "Corte a cebola em meias-luas finas e refogue numa frigideira com gotas de óleo até ficar transparente.",
          "s": 240
        },
        {
          "t": "Despeje o molho e ferva até engrossar.",
          "s": 180
        },
        {
          "t": "Junte o frango desfiado e cozinhe até ficar suculento e apurado; acerte o sal.",
          "s": 300
        },
        {
          "t": "Sirva a tinga sobre as tostadas com creme e queijo fresco esfarelado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Poach the chicken breast in water with bay leaf and salt until cooked; shred and save some broth.",
          "s": null
        },
        {
          "t": "Toast the corn tortillas in the oven or a dry pan until rigid and crisp (tostadas).",
          "s": 300
        },
        {
          "t": "Blend the tomatoes with 1 garlic clove, the chipotle chiles in adobo and a splash of broth.",
          "s": null
        },
        {
          "t": "Slice the onion thinly and sauté in a pan with a few drops of oil until translucent.",
          "s": 240
        },
        {
          "t": "Pour in the sauce and simmer until thick.",
          "s": 180
        },
        {
          "t": "Add the shredded chicken and cook until juicy and concentrated; adjust the salt.",
          "s": 300
        },
        {
          "t": "Serve the tinga on the tostadas with crema and crumbled queso fresco.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Tinga de Pollo al Chipotle receta paso a paso"
  },
  {
    "id": "mx_8",
    "country": "MEXICAN",
    "time": 16,
    "fav": false,
    "img": "images/mx_8.jpg",
    "title": {
      "es": "Huevos Rancheros",
      "pt": "Ovos Rancheros Mexicanos",
      "en": "Huevos Rancheros"
    },
    "brTip": {
      "es": "Frijoles refritos, tortillas de maíz, salsa ranchera y queso fresco. En Brasil: feijão carioca amassado y queijo minas frescal.",
      "pt": "Feijão refrito, tortilhas de milho, molho ranchero e queijo fresco. No Brasil: feijão carioca amassado e queijo minas frescal.",
      "en": "Refried beans, corn tortillas, ranchera sauce and queso fresco. In Brazil: mashed carioca beans and minas frescal cheese."
    },
    "macrosTrad": {
      "kcal": 553,
      "p": 30,
      "c": 51,
      "f": 27
    },
    "macrosFit": {
      "kcal": 458,
      "p": 28,
      "c": 45,
      "f": 19
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 60,
        "fitGrams": 50,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 25,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "azeite",
        "grams": 8,
        "fitGrams": 4,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica la cebolla, el ajo y el tomate; desmorona el queso.",
          "s": null
        },
        {
          "t": "Salsa ranchera: sofríe la cebolla y el ajo con unas gotas de aceite, añade el tomate y chile al gusto y cocina machacando hasta formar una salsa rústica; sala.",
          "s": 420
        },
        {
          "t": "Calienta el frijol en una ollita y aplástalo con un tenedor hasta tener una pasta cremosa (agrega un chorrito de agua si está seco).",
          "s": 240
        },
        {
          "t": "Tuesta las tortillas en sartén seca y úntales una capa de frijol.",
          "s": 120
        },
        {
          "t": "Fríe los huevos con unas gotas de aceite, dejando la yema blanda.",
          "s": 180
        },
        {
          "t": "Coloca los huevos sobre las tortillas y báñalos con la salsa ranchera caliente.",
          "s": null
        },
        {
          "t": "Termina con el queso y cilantro picado y sirve enseguida.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Pique a cebola, o alho e o tomate; esfarele o queijo.",
          "s": null
        },
        {
          "t": "Molho ranchero: refogue a cebola e o alho com gotas de óleo, junte o tomate e pimenta a gosto e cozinhe amassando até virar um molho rústico; salgue.",
          "s": 420
        },
        {
          "t": "Aqueça o feijão numa panelinha e amasse com um garfo até virar uma pasta cremosa (junte um pouco de água se estiver seco).",
          "s": 240
        },
        {
          "t": "Toste as tortillas em frigideira seca e passe uma camada de feijão.",
          "s": 120
        },
        {
          "t": "Frite os ovos com gotas de óleo, deixando a gema mole.",
          "s": 180
        },
        {
          "t": "Coloque os ovos sobre as tortillas e regue com o molho ranchero quente.",
          "s": null
        },
        {
          "t": "Finalize com o queijo e coentro picado e sirva logo.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Chop the onion, garlic and tomato; crumble the cheese.",
          "s": null
        },
        {
          "t": "Ranchera sauce: sauté the onion and garlic with a few drops of oil, add the tomato and chili to taste and cook, mashing, into a rustic sauce; salt it.",
          "s": 420
        },
        {
          "t": "Heat the beans in a small pot and mash with a fork into a creamy paste (add a splash of water if dry).",
          "s": 240
        },
        {
          "t": "Toast the tortillas in a dry pan and spread with a layer of beans.",
          "s": 120
        },
        {
          "t": "Fry the eggs with a few drops of oil, keeping the yolks runny.",
          "s": 180
        },
        {
          "t": "Set the eggs on the tortillas and spoon the hot ranchera sauce over them.",
          "s": null
        },
        {
          "t": "Finish with the cheese and chopped cilantro and serve right away.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Huevos Rancheros receta paso a paso"
  },
  {
    "id": "mx_9",
    "country": "MEXICAN",
    "time": 18,
    "fav": false,
    "img": "images/mx_9.jpg",
    "title": {
      "es": "Burrito Bowl Mexicano",
      "pt": "Burrito Bowl Mexicano",
      "en": "Mexican Burrito Bowl"
    },
    "brTip": {
      "es": "Fácil en Brasil con arroz, feijão preto/carioca, vinagrete (pico de gallo) y abacate (aguacate).",
      "pt": "Super prático no Brasil com arroz, feijão preto, vinagrete e abacate.",
      "en": "Easy in Brazil with rice, black beans, vinaigrette, and avocado."
    },
    "macrosTrad": {
      "kcal": 667,
      "p": 62,
      "c": 60,
      "f": 19
    },
    "macrosFit": {
      "kcal": 653,
      "p": 66,
      "c": 49,
      "f": 22
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 145,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "feijao_preto",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cocina el arroz y, aún tibio, mézclalo con el jugo de medio limón, cilantro picado y una pizca de sal.",
          "s": null
        },
        {
          "t": "Saltea la carne molida (o pollo en cubos) en una sartén con unas gotas de aceite, comino, páprica, ajo y sal hasta dorar.",
          "s": 300
        },
        {
          "t": "Calienta los frijoles negros con un poco de su líquido y sal.",
          "s": 180
        },
        {
          "t": "Pico de gallo: pica tomate, cebolla morada y cilantro; mezcla con limón y sal.",
          "s": null
        },
        {
          "t": "Corta el aguacate en láminas y rocíale limón para que no se oscurezca.",
          "s": null
        },
        {
          "t": "Arma el bowl por secciones: arroz al limón, frijoles, carne, pico de gallo y aguacate.",
          "s": null
        },
        {
          "t": "Sirve con un gajo de limón y salsa picante al gusto.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o arroz e, ainda morno, misture com o suco de meio limão, coentro picado e uma pitada de sal.",
          "s": null
        },
        {
          "t": "Salteie a carne moída (ou frango em cubos) numa frigideira com gotas de óleo, cominho, páprica, alho e sal até dourar.",
          "s": 300
        },
        {
          "t": "Aqueça o feijão preto com um pouco do caldo e sal.",
          "s": 180
        },
        {
          "t": "Pico de gallo: pique tomate, cebola roxa e coentro; misture com limão e sal.",
          "s": null
        },
        {
          "t": "Corte o abacate em lâminas e regue com limão para não escurecer.",
          "s": null
        },
        {
          "t": "Monte a tigela por seções: arroz com limão, feijão, carne, pico de gallo e abacate.",
          "s": null
        },
        {
          "t": "Sirva com um gomo de limão e molho de pimenta a gosto.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cook the rice and, while warm, mix it with the juice of half a lime, chopped cilantro and a pinch of salt.",
          "s": null
        },
        {
          "t": "Sauté the ground beef (or cubed chicken) in a pan with a few drops of oil, cumin, paprika, garlic and salt until browned.",
          "s": 300
        },
        {
          "t": "Heat the black beans with a little of their liquid and salt.",
          "s": 180
        },
        {
          "t": "Pico de gallo: chop tomato, red onion and cilantro; mix with lime and salt.",
          "s": null
        },
        {
          "t": "Slice the avocado and squeeze lime over it so it does not brown.",
          "s": null
        },
        {
          "t": "Build the bowl in sections: lime rice, beans, meat, pico de gallo and avocado.",
          "s": null
        },
        {
          "t": "Serve with a lime wedge and hot sauce to taste.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Burrito Bowl Mexicano receta paso a paso"
  },
  {
    "id": "mx_10",
    "country": "MEXICAN",
    "time": 15,
    "fav": false,
    "img": "images/mx_10.jpg",
    "title": {
      "es": "Aguachile Verde de Camarón",
      "pt": "Aguachile Verde de Camarão",
      "en": "Green Shrimp Aguachile"
    },
    "brTip": {
      "es": "Plato frío refrescante: tilápia o camarão crudo/blanqueado marinado al momento en limón, pepino y pimenta verde.",
      "pt": "Prato frio refrescante: peixe ou camarão em molho gelado de limão, pepino e coentro.",
      "en": "Zesty cold seafood dish cured in blended lime, cucumber, cilantro, and chili."
    },
    "macrosTrad": {
      "kcal": 252,
      "p": 31,
      "c": 18,
      "f": 8
    },
    "macrosFit": {
      "kcal": 278,
      "p": 34,
      "c": 19,
      "f": 9
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pepino",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 20,
        "fitGrams": 25,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": {
          "es": "En Brasil: Cebola roxa",
          "pt": "No Brasil: Cebola roxa",
          "en": "In Brazil: Cebola roxa"
        },
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Usa camarón muy fresco y bien frío. Si prefieres no comerlo crudo, blanquéalo 30 segundos en agua hirviendo y pásalo a agua con hielo.",
          "s": null
        },
        {
          "t": "Abre los camarones en mariposa y guárdalos en la nevera mientras preparas lo demás.",
          "s": null
        },
        {
          "t": "Pela el pepino y córtalo en medias lunas; corta la cebolla morada en plumas finas.",
          "s": null
        },
        {
          "t": "Licúa el jugo de 3 limones con un puñado de cilantro, 1/3 del pepino, chile verde sin semillas y sal hasta obtener un líquido verde intenso. Enfríalo.",
          "s": null
        },
        {
          "t": "Acomoda los camarones en un plato frío con el pepino y la cebolla.",
          "s": null
        },
        {
          "t": "Vierte la salsa verde helada justo antes de servir y deja reposar solo unos minutos.",
          "s": 300
        },
        {
          "t": "Sirve con láminas de aguacate y tostadas crocantes.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Use camarão bem fresco e gelado. Se preferir não comer cru, branqueie 30 segundos em água fervendo e passe para água com gelo.",
          "s": null
        },
        {
          "t": "Abra os camarões em borboleta e guarde na geladeira enquanto prepara o resto.",
          "s": null
        },
        {
          "t": "Descasque o pepino e corte em meias-luas; corte a cebola roxa em tiras finas.",
          "s": null
        },
        {
          "t": "Bata o suco de 3 limões com um punhado de coentro, 1/3 do pepino, pimenta verde sem sementes e sal até ficar um líquido verde intenso. Gele.",
          "s": null
        },
        {
          "t": "Arrume os camarões num prato frio com o pepino e a cebola.",
          "s": null
        },
        {
          "t": "Despeje o molho verde gelado logo antes de servir e deixe descansar só alguns minutos.",
          "s": 300
        },
        {
          "t": "Sirva com lâminas de abacate e tostadas crocantes.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Use very fresh, well-chilled shrimp. If you prefer it not raw, blanch 30 seconds in boiling water and move to ice water.",
          "s": null
        },
        {
          "t": "Butterfly the shrimp and keep them in the fridge while you prepare the rest.",
          "s": null
        },
        {
          "t": "Peel the cucumber and cut into half-moons; slice the red onion thinly.",
          "s": null
        },
        {
          "t": "Blend the juice of 3 limes with a handful of cilantro, 1/3 of the cucumber, seeded green chili and salt into a vivid green liquid. Chill it.",
          "s": null
        },
        {
          "t": "Arrange the shrimp on a cold plate with the cucumber and onion.",
          "s": null
        },
        {
          "t": "Pour the ice-cold green sauce over just before serving and let it sit only a few minutes.",
          "s": 300
        },
        {
          "t": "Serve with avocado slices and crisp tostadas.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Aguachile Verde de Camarón receta paso a paso"
  },
  {
    "id": "mx_11",
    "country": "MEXICAN",
    "time": 25,
    "fav": false,
    "img": "images/mx_11.jpg",
    "title": {
      "es": "Sopa Azteca (Sopa de Tortilla)",
      "pt": "Sopa Azteca de Tomate",
      "en": "Mexican Aztec Tortilla Soup"
    },
    "brTip": {
      "es": "Caldo de tomate asado con chile pasilla, tiras de tortilla crocante, queso fresco, aguacate y crema. En Brasil: queijo minas frescal.",
      "pt": "Caldo de tomate tostado com chile pasilla, tiras de tortilha crocante, queijo fresco, abacate e creme. No Brasil: queijo minas frescal.",
      "en": "Roasted tomato broth with pasilla chile, crispy tortilla strips, queso fresco, avocado and crema. In Brazil: minas frescal cheese."
    },
    "macrosTrad": {
      "kcal": 539,
      "p": 44,
      "c": 40,
      "f": 23
    },
    "macrosFit": {
      "kcal": 441,
      "p": 45,
      "c": 38,
      "f": 13
    },
    "ingredients": [
      {
        "id": "tortilla_maiz",
        "grams": 50,
        "fitGrams": 40,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 150,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile_seco",
        "grams": 8,
        "fitGrams": 9,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta calabresa",
          "pt": "No Brasil: Páprica defumada + pimenta calabresa",
          "en": "In Brazil: Páprica defumada + pimenta calabresa"
        },
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 100,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 30,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "abacate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "creme_leite",
        "grams": 20,
        "fitGrams": 15,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga en agua con sal y desmenúzala; guarda el caldo.",
          "s": null
        },
        {
          "t": "Asa los tomates partidos, la cebolla y el ajo en sartén caliente hasta que tengan puntos tostados.",
          "s": 360
        },
        {
          "t": "Licúalos con 2 tazas del caldo y el chile pasilla tostado e hidratado.",
          "s": null
        },
        {
          "t": "Cuela y hierve en una olla con unas gotas de aceite; ajusta la sal.",
          "s": 600
        },
        {
          "t": "Mientras, corta tiras finas de tortilla y tuéstalas en horno o airfryer hasta que estén crocantes.",
          "s": 300
        },
        {
          "t": "Corta el queso y el aguacate en cubos.",
          "s": null
        },
        {
          "t": "Sirve el caldo bien caliente y pon en el centro el pollo, el queso, el aguacate y las tiras crocantes.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito em água com sal e desfie; guarde o caldo.",
          "s": null
        },
        {
          "t": "Toste os tomates cortados, a cebola e o alho em frigideira quente até ficarem com pontos queimadinhos.",
          "s": 360
        },
        {
          "t": "Bata com 2 xícaras do caldo e o chile pasilla tostado e hidratado.",
          "s": null
        },
        {
          "t": "Coe e ferva numa panela com gotas de óleo; acerte o sal.",
          "s": 600
        },
        {
          "t": "Enquanto isso, corte tiras finas de tortilla e toste no forno ou airfryer até ficarem crocantes.",
          "s": 300
        },
        {
          "t": "Corte o queijo e o abacate em cubos.",
          "s": null
        },
        {
          "t": "Sirva o caldo bem quente e coloque no centro o frango, o queijo, o abacate e as tiras crocantes.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Poach the chicken breast in salted water and shred it; keep the broth.",
          "s": null
        },
        {
          "t": "Char the halved tomatoes, onion and garlic in a hot pan until spotted with brown.",
          "s": 360
        },
        {
          "t": "Blend with 2 cups of the broth and the toasted, soaked pasilla chile.",
          "s": null
        },
        {
          "t": "Strain and simmer in a pot with a few drops of oil; adjust the salt.",
          "s": 600
        },
        {
          "t": "Meanwhile, cut thin tortilla strips and toast them in the oven or air fryer until crisp.",
          "s": 300
        },
        {
          "t": "Cube the cheese and avocado.",
          "s": null
        },
        {
          "t": "Serve the soup piping hot and place the chicken, cheese, avocado and crispy strips in the center.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Sopa Azteca (Sopa de Tortilla) receta paso a paso"
  },
  {
    "id": "mx_12",
    "country": "MEXICAN",
    "time": 35,
    "fav": false,
    "img": "images/mx_12.jpg",
    "title": {
      "es": "Cochinita Pibil Casera",
      "pt": "Cochinita Pibil (Porco Desfiado)",
      "en": "Yucatan Cochinita Pibil"
    },
    "brTip": {
      "es": "Naranja agria → mezcla jugo de laranja + limão tahiti; achiote → colorau + páprica; muy fácil de hacer en olla a presión.",
      "pt": "Laranja azeda → laranja + limão; achiote → colorau + páprica (fácil na pressão!).",
      "en": "Sour orange sub → orange + lime juice; annatto → Brazilian colorau."
    },
    "macrosTrad": {
      "kcal": 609,
      "p": 54,
      "c": 53,
      "f": 21
    },
    "macrosFit": {
      "kcal": 610,
      "p": 57,
      "c": 46,
      "f": 22
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 170,
        "fitGrams": 185,
        "sub": {
          "es": "En Brasil: Pernil suíno",
          "pt": "No Brasil: Pernil suíno",
          "en": "In Brazil: Pernil suíno"
        },
        "fitId": null
      },
      {
        "id": "achiote",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Colorau (urucum)",
          "pt": "No Brasil: Colorau (urucum)",
          "en": "In Brazil: Colorau (urucum)"
        },
        "fitId": null
      },
      {
        "id": "laranja",
        "grams": 60,
        "fitGrams": 60,
        "sub": {
          "es": "En Brasil: Laranja + limão (naranja agria)",
          "pt": "No Brasil: Laranja + limão (naranja agria)",
          "en": "In Brazil: Laranja + limão (naranja agria)"
        },
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": {
          "es": "En Brasil: Cebola roxa",
          "pt": "No Brasil: Cebola roxa",
          "en": "In Brazil: Cebola roxa"
        },
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 65,
        "fitGrams": 50,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 5,
        "fitGrams": 6,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa el jugo de naranja agria (o naranja con limón), 3 dientes de ajo, la pasta de achiote, orégano, comino y sal hasta tener una pasta roja.",
          "s": null
        },
        {
          "t": "Corta el cerdo en trozos grandes y úntalo bien con la pasta.",
          "s": null
        },
        {
          "t": "Deja marinar en la nevera (si puedes, desde la noche anterior).",
          "s": 1200
        },
        {
          "t": "Cocina en olla a presión con un chorrito de agua (o en olla tapada a fuego bajo unos 45 min) hasta que la carne se deshebre sola.",
          "s": 1500
        },
        {
          "t": "Mientras, encurte la cebolla morada en plumas finas con jugo de limón y sal.",
          "s": null
        },
        {
          "t": "Deshebra la carne con dos tenedores y mézclala con su jugo de cocción.",
          "s": null
        },
        {
          "t": "Sirve en tortillas calientes con la cebolla encurtida.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Bata o suco de laranja-azeda (ou laranja com limão), 3 dentes de alho, a pasta de achiote, orégano, cominho e sal até virar uma pasta vermelha.",
          "s": null
        },
        {
          "t": "Corte o porco em pedaços grandes e passe bem a pasta.",
          "s": null
        },
        {
          "t": "Deixe marinar na geladeira (se puder, desde a noite anterior).",
          "s": 1200
        },
        {
          "t": "Cozinhe na pressão com um pouco de água (ou panela tampada em fogo baixo uns 45 min) até a carne desfiar sozinha.",
          "s": 1500
        },
        {
          "t": "Enquanto isso, faça a cebola roxa em conserva rápida: tiras finas com suco de limão e sal.",
          "s": null
        },
        {
          "t": "Desfie a carne com dois garfos e misture com o caldo do cozimento.",
          "s": null
        },
        {
          "t": "Sirva em tortillas quentes com a cebola em conserva.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Blend sour orange juice (or orange with lime), 3 garlic cloves, the achiote paste, oregano, cumin and salt into a red paste.",
          "s": null
        },
        {
          "t": "Cut the pork into large chunks and rub it well with the paste.",
          "s": null
        },
        {
          "t": "Marinate in the fridge (overnight if you can).",
          "s": 1200
        },
        {
          "t": "Cook in a pressure cooker with a splash of water (or covered on low about 45 min) until the meat falls apart.",
          "s": 1500
        },
        {
          "t": "Meanwhile, quick-pickle the thinly sliced red onion with lime juice and salt.",
          "s": null
        },
        {
          "t": "Shred the meat with two forks and mix it with its cooking juices.",
          "s": null
        },
        {
          "t": "Serve in warm tortillas with the pickled onion.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Cochinita Pibil Casera receta paso a paso"
  },
  {
    "id": "mx_13",
    "country": "MEXICAN",
    "time": 14,
    "fav": false,
    "img": "images/mx_13.jpg",
    "title": {
      "es": "Molletes Mexicanos",
      "pt": "Molletes Mexicanos (Pão com Feijão)",
      "en": "Mexican Bean & Cheese Molletes"
    },
    "brTip": {
      "es": "El bolillo mexicano es casi idéntico al pão francês brasileño; úsalo con feijão amassado, muçarela y vinagrete.",
      "pt": "O bolillo mexicano é idêntico ao pão francês! Passe feijão amassado, queijo e vinagrete.",
      "en": "Brazilian pão francês is the exact match for Mexican bolillo rolls!"
    },
    "macrosTrad": {
      "kcal": 457,
      "p": 22,
      "c": 66,
      "f": 12
    },
    "macrosFit": {
      "kcal": 322,
      "p": 16,
      "c": 55,
      "f": 5
    },
    "ingredients": [
      {
        "id": "pao",
        "grams": 80,
        "fitGrams": 65,
        "sub": {
          "es": "En Brasil: Pão francês (bolillo)",
          "pt": "No Brasil: Pão francês (bolillo)",
          "en": "In Brazil: Pão francês (bolillo)"
        },
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 50,
        "fitGrams": 35,
        "sub": {
          "es": "En Brasil: Muçarela",
          "pt": "No Brasil: Muçarela",
          "en": "In Brazil: Muçarela"
        },
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Precalienta el horno o airfryer a 200 °C. Corta el pan a lo largo por la mitad.",
          "s": null
        },
        {
          "t": "Tuesta ligeramente las mitades para que no se humedezcan con el frijol.",
          "s": 120
        },
        {
          "t": "Machaca el frijol caliente con ajo, sal y un poco de caldo hasta formar una pasta untable.",
          "s": 240
        },
        {
          "t": "Unta una capa generosa de frijol en cada mitad y cubre con el queso.",
          "s": null
        },
        {
          "t": "Hornea hasta que el queso se derrita y dore.",
          "s": 300
        },
        {
          "t": "Mientras, prepara pico de gallo con tomate, cebolla, cilantro, limón y sal.",
          "s": null
        },
        {
          "t": "Sirve los molletes calientes con el pico de gallo encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Preaqueça o forno ou airfryer a 200 °C. Corte o pão ao meio no comprimento.",
          "s": null
        },
        {
          "t": "Toste levemente as metades para não umedecerem com o feijão.",
          "s": 120
        },
        {
          "t": "Amasse o feijão quente com alho, sal e um pouco de caldo até virar uma pasta.",
          "s": 240
        },
        {
          "t": "Passe uma camada generosa de feijão em cada metade e cubra com o queijo.",
          "s": null
        },
        {
          "t": "Asse até o queijo derreter e dourar.",
          "s": 300
        },
        {
          "t": "Enquanto isso, prepare o pico de gallo com tomate, cebola, coentro, limão e sal.",
          "s": null
        },
        {
          "t": "Sirva os molletes quentes com o pico de gallo por cima.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Preheat the oven or air fryer to 200 °C. Split the roll lengthwise.",
          "s": null
        },
        {
          "t": "Toast the halves lightly so the beans do not make them soggy.",
          "s": 120
        },
        {
          "t": "Mash the hot beans with garlic, salt and a little stock into a spreadable paste.",
          "s": 240
        },
        {
          "t": "Spread a generous layer of beans on each half and cover with cheese.",
          "s": null
        },
        {
          "t": "Bake until the cheese melts and browns.",
          "s": 300
        },
        {
          "t": "Meanwhile, make pico de gallo with tomato, onion, cilantro, lime and salt.",
          "s": null
        },
        {
          "t": "Serve the molletes hot with the pico de gallo on top.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Molletes Mexicanos receta paso a paso"
  },
  {
    "id": "mx_14",
    "country": "MEXICAN",
    "time": 20,
    "fav": false,
    "img": "images/mx_14.jpg",
    "title": {
      "es": "Enfrijoladas de Pollo y Queso",
      "pt": "Enfrijoladas de Frango",
      "en": "Bean-Sauced Enfrijoladas"
    },
    "brTip": {
      "es": "La salsa se hace licuando feijão preto o carioca brasileño con ajo y cebolla sofrita.",
      "pt": "O molho é feito batendo feijão preto ou carioca com alho e cebola refogados.",
      "en": "Velvety sauce made by blending Brazilian beans with sautéed garlic and onion."
    },
    "macrosTrad": {
      "kcal": 668,
      "p": 63,
      "c": 56,
      "f": 21
    },
    "macrosFit": {
      "kcal": 520,
      "p": 63,
      "c": 46,
      "f": 9
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "feijao_preto",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 70,
        "fitGrams": 55,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 40,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "creme_leite",
        "grams": 20,
        "fitGrams": 15,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile_seco",
        "grams": 3,
        "fitGrams": 3.5,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta calabresa",
          "pt": "No Brasil: Páprica defumada + pimenta calabresa",
          "en": "In Brazil: Páprica defumada + pimenta calabresa"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga en agua con sal y desmenúzala.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla y el ajo con unas gotas de aceite.",
          "s": 180
        },
        {
          "t": "Licúa el sofrito con los frijoles cocidos y su caldo hasta tener una crema espesa y lisa; sala.",
          "s": null
        },
        {
          "t": "Regresa la crema a la olla a fuego muy bajo para mantenerla caliente; si está muy espesa, añade agua.",
          "s": 300
        },
        {
          "t": "Calienta las tortillas en sartén seca.",
          "s": 60
        },
        {
          "t": "Rellena cada tortilla con pollo y dóblala en cuatro o enróllala.",
          "s": null
        },
        {
          "t": "Báñalas por completo con la crema de frijol caliente y decora con queso desmoronado y aros de cebolla.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito em água com sal e desfie.",
          "s": null
        },
        {
          "t": "Refogue a cebola e o alho com gotas de óleo.",
          "s": 180
        },
        {
          "t": "Bata o refogado com o feijão cozido e o caldo até virar um creme grosso e liso; salgue.",
          "s": null
        },
        {
          "t": "Volte o creme à panela em fogo bem baixo para manter quente; se estiver grosso demais, junte água.",
          "s": 300
        },
        {
          "t": "Aqueça as tortillas em frigideira seca.",
          "s": 60
        },
        {
          "t": "Recheie cada tortilla com frango e dobre em quatro ou enrole.",
          "s": null
        },
        {
          "t": "Cubra totalmente com o creme de feijão quente e decore com queijo esfarelado e rodelas de cebola.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Poach the chicken breast in salted water and shred it.",
          "s": null
        },
        {
          "t": "Sauté the onion and garlic with a few drops of oil.",
          "s": 180
        },
        {
          "t": "Blend the sauté with the cooked beans and their broth into a thick, smooth cream; salt it.",
          "s": null
        },
        {
          "t": "Return the cream to the pot over very low heat to keep warm; add water if too thick.",
          "s": 300
        },
        {
          "t": "Warm the tortillas in a dry pan.",
          "s": 60
        },
        {
          "t": "Fill each tortilla with chicken and fold into quarters or roll up.",
          "s": null
        },
        {
          "t": "Cover completely with the hot bean cream and garnish with crumbled cheese and onion rings.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Enfrijoladas de Pollo y Queso receta paso a paso"
  },
  {
    "id": "mx_15",
    "country": "MEXICAN",
    "time": 20,
    "fav": false,
    "img": "images/mx_15.jpg",
    "title": {
      "es": "Alambre Mexicano de Res",
      "pt": "Alambre de Carne com Queijo",
      "en": "Mexican Beef & Pepper Alambre"
    },
    "brTip": {
      "es": "Original con res en cubos, tocino, pimiento, cebolla y queso fundido para comer en tacos. En Brasil: alcatra o patinho y muçarela.",
      "pt": "Original com carne em cubos, bacon, pimentão, cebola e queijo derretido para comer em tacos. No Brasil: alcatra ou patinho e muçarela.",
      "en": "Diced beef, bacon, peppers, onion and melted cheese eaten in tacos. In Brazil: alcatra or patinho and mozzarella."
    },
    "macrosTrad": {
      "kcal": 820,
      "p": 74,
      "c": 40,
      "f": 40
    },
    "macrosFit": {
      "kcal": 692,
      "p": 74,
      "c": 35,
      "f": 28
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "panceta",
        "grams": 30,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 50,
        "fitGrams": 35,
        "sub": {
          "es": "En Brasil: Muçarela (queijo Oaxaca)",
          "pt": "No Brasil: Muçarela (queijo Oaxaca)",
          "en": "In Brazil: Muçarela (queijo Oaxaca)"
        },
        "fitId": "ricota"
      },
      {
        "id": "tortilla_maiz",
        "grams": 65,
        "fitGrams": 50,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en cubos pequeños y el pimentón y la cebolla en cuadros.",
          "s": null
        },
        {
          "t": "Sazona la carne con sal, pimienta y ajo picado.",
          "s": null
        },
        {
          "t": "Dora primero la panceta (tocino) picada y luego la carne en la misma sartén bien caliente.",
          "s": 240
        },
        {
          "t": "Agrega la cebolla y el pimentón y saltea hasta que ablanden ligeramente.",
          "s": 240
        },
        {
          "t": "Ajusta la sal y esparce el queso rallado cubriendo toda la sartén.",
          "s": null
        },
        {
          "t": "Tapa a fuego bajo hasta que el queso se derrita.",
          "s": 120
        },
        {
          "t": "Sirve directo de la sartén con tortillas calientes y salsa al gusto.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em cubinhos e o pimentão e a cebola em quadrados.",
          "s": null
        },
        {
          "t": "Tempere a carne com sal, pimenta e alho picado.",
          "s": null
        },
        {
          "t": "Doure primeiro o bacon picado e depois a carne na mesma frigideira bem quente.",
          "s": 240
        },
        {
          "t": "Junte a cebola e o pimentão e salteie até amolecerem levemente.",
          "s": 240
        },
        {
          "t": "Acerte o sal e espalhe o queijo ralado cobrindo toda a frigideira.",
          "s": null
        },
        {
          "t": "Tampe em fogo baixo até o queijo derreter.",
          "s": 120
        },
        {
          "t": "Sirva direto da frigideira com tortillas quentes e molho a gosto.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the beef into small cubes and the bell pepper and onion into squares.",
          "s": null
        },
        {
          "t": "Season the beef with salt, pepper and chopped garlic.",
          "s": null
        },
        {
          "t": "First brown the chopped bacon, then the beef in the same very hot pan.",
          "s": 240
        },
        {
          "t": "Add the onion and pepper and sauté until slightly softened.",
          "s": 240
        },
        {
          "t": "Adjust the salt and scatter the grated cheese over the whole pan.",
          "s": null
        },
        {
          "t": "Cover over low heat until the cheese melts.",
          "s": 120
        },
        {
          "t": "Serve straight from the pan with warm tortillas and salsa to taste.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Alambre Mexicano de Res receta paso a paso"
  },
  {
    "id": "mx_16",
    "country": "MEXICAN",
    "time": 12,
    "fav": false,
    "img": "images/mx_16.jpg",
    "title": {
      "es": "Tostadas de Atún a la Mexicana",
      "pt": "Tostadas de Atum à Mexicana",
      "en": "Mexican Tuna Tostadas"
    },
    "brTip": {
      "es": "Tostadas de maíz crocantes con atún, tomate, limón y aguacate. En Brasil, si no hay tortillas de maíz: Rap10 tostado en airfryer.",
      "pt": "Tostadas de milho crocantes com atum, tomate, limão e abacate. No Brasil, sem tortilhas de milho: Rap10 tostado na airfryer.",
      "en": "Crisp corn tostadas with tuna, tomato, lime and avocado. In Brazil, without corn tortillas: Rap10 toasted in the air fryer."
    },
    "macrosTrad": {
      "kcal": 475,
      "p": 39,
      "c": 36,
      "f": 21
    },
    "macrosFit": {
      "kcal": 383,
      "p": 42,
      "c": 33,
      "f": 10
    },
    "ingredients": [
      {
        "id": "atum",
        "grams": 130,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 50,
        "fitGrams": 40,
        "sub": {
          "es": "En Brasil: Rap10 assado (tostada)",
          "pt": "No Brasil: Rap10 assado (tostada)",
          "en": "In Brazil: Rap10 assado (tostada)"
        },
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 45,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "maionesa",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": "iogurte"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Precalienta el horno o airfryer a 180 °C.",
          "s": null
        },
        {
          "t": "Tuesta las tortillas hasta que queden rígidas y crocantes.",
          "s": 300
        },
        {
          "t": "Escurre muy bien el atún.",
          "s": null
        },
        {
          "t": "Pica fino el tomate, la cebolla morada y el cilantro.",
          "s": null
        },
        {
          "t": "Mezcla el atún con las verduras, el jugo de 1 limón, sal y la mayonesa.",
          "s": null
        },
        {
          "t": "Corta el aguacate en láminas.",
          "s": null
        },
        {
          "t": "Pon la mezcla sobre las tostadas justo al momento de comer (para que no se ablanden) y corona con el aguacate.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Preaqueça o forno ou airfryer a 180 °C.",
          "s": null
        },
        {
          "t": "Toste as tortillas até ficarem firmes e crocantes.",
          "s": 300
        },
        {
          "t": "Escorra muito bem o atum.",
          "s": null
        },
        {
          "t": "Pique fino o tomate, a cebola roxa e o coentro.",
          "s": null
        },
        {
          "t": "Misture o atum com os legumes, o suco de 1 limão, sal e a maionese.",
          "s": null
        },
        {
          "t": "Corte o abacate em lâminas.",
          "s": null
        },
        {
          "t": "Coloque a mistura sobre as tostadas só na hora de comer (para não amolecerem) e finalize com o abacate.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Preheat the oven or air fryer to 180 °C.",
          "s": null
        },
        {
          "t": "Toast the tortillas until stiff and crisp.",
          "s": 300
        },
        {
          "t": "Drain the tuna very well.",
          "s": null
        },
        {
          "t": "Finely chop the tomato, red onion and cilantro.",
          "s": null
        },
        {
          "t": "Mix the tuna with the vegetables, juice of 1 lime, salt and the mayonnaise.",
          "s": null
        },
        {
          "t": "Slice the avocado.",
          "s": null
        },
        {
          "t": "Spoon the mixture onto the tostadas right before eating (so they stay crisp) and top with avocado.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Tostadas de Atún a la Mexicana receta paso a paso"
  },
  {
    "id": "mx_17",
    "country": "MEXICAN",
    "time": 25,
    "fav": false,
    "img": "images/mx_17.jpg",
    "title": {
      "es": "Sopa de Lima Yucateca",
      "pt": "Sopa de Lima Mexicana",
      "en": "Yucatan Chicken Lime Soup"
    },
    "brTip": {
      "es": "Caldo ligero aromático con pollo, tomate, pimentón y mucho jugo de limão tahiti al servir.",
      "pt": "Caldo leve e aromático de frango com tomate, pimentão e bastante suco de limão.",
      "en": "Fragrant Yucatan chicken broth brightened with fresh lime juice."
    },
    "macrosTrad": {
      "kcal": 378,
      "p": 52,
      "c": 31,
      "f": 5
    },
    "macrosFit": {
      "kcal": 386,
      "p": 57,
      "c": 28,
      "f": 5
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 35,
        "fitGrams": 35,
        "sub": {
          "es": "En Brasil: Limão-taiti (lima yucateca)",
          "pt": "No Brasil: Limão-taiti (lima yucateca)",
          "en": "In Brazil: Limão-taiti (lima yucateca)"
        },
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 45,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 5,
        "fitGrams": 6,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 40,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pon la pechuga en una olla con 800 ml de agua, un trozo de cebolla, 2 dientes de ajo, orégano y sal.",
          "s": null
        },
        {
          "t": "Hierve hasta que el pollo esté cocido; retíralo y desmenúzalo.",
          "s": 900
        },
        {
          "t": "Sofríe aparte el tomate picado y las tiras de pimentón con unas gotas de aceite.",
          "s": 180
        },
        {
          "t": "Agrégalos al caldo con la ralladura de medio limón y el pollo; cocina unos minutos más.",
          "s": 240
        },
        {
          "t": "Mientras, tuesta las tiras de tortilla en horno o airfryer hasta que estén crocantes.",
          "s": 300
        },
        {
          "t": "Apaga el fuego (importante para que el limón no amargue) y exprime el jugo de limón fresco. Ajusta la sal.",
          "s": null
        },
        {
          "t": "Sirve con las tiras de tortilla crocante, aguacate y una rodaja de limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Coloque o peito numa panela com 800 ml de água, um pedaço de cebola, 2 dentes de alho, orégano e sal.",
          "s": null
        },
        {
          "t": "Ferva até o frango cozinhar; retire e desfie.",
          "s": 900
        },
        {
          "t": "À parte, refogue o tomate picado e as tiras de pimentão com gotas de óleo.",
          "s": 180
        },
        {
          "t": "Junte ao caldo com as raspas de meio limão e o frango; cozinhe mais alguns minutos.",
          "s": 240
        },
        {
          "t": "Enquanto isso, toste as tiras de tortilla no forno ou airfryer até ficarem crocantes.",
          "s": 300
        },
        {
          "t": "Desligue o fogo (importante para o limão não amargar) e esprema o suco de limão fresco. Acerte o sal.",
          "s": null
        },
        {
          "t": "Sirva com as tiras crocantes, abacate e uma rodela de limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Put the chicken breast in a pot with 800 ml water, a piece of onion, 2 garlic cloves, oregano and salt.",
          "s": null
        },
        {
          "t": "Simmer until the chicken is cooked; remove and shred it.",
          "s": 900
        },
        {
          "t": "Separately, sauté the chopped tomato and pepper strips with a few drops of oil.",
          "s": 180
        },
        {
          "t": "Add them to the broth with the zest of half a lime and the chicken; cook a few more minutes.",
          "s": 240
        },
        {
          "t": "Meanwhile, toast the tortilla strips in the oven or air fryer until crisp.",
          "s": 300
        },
        {
          "t": "Turn off the heat (important so the lime does not turn bitter) and squeeze in fresh lime juice. Adjust the salt.",
          "s": null
        },
        {
          "t": "Serve with the crispy strips, avocado and a lime slice.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Sopa de Lima Yucateca receta paso a paso"
  },
  {
    "id": "mx_18",
    "country": "MEXICAN",
    "time": 22,
    "fav": false,
    "img": "images/mx_18.jpg",
    "title": {
      "es": "Picadillo Mexicano de Res",
      "pt": "Picadinho Mexicano de Carne",
      "en": "Mexican Beef Picadillo"
    },
    "brTip": {
      "es": "Carne molida guisada con tomate, papa y zanahoria en cubitos diminutos + comino; genial con arroz o tacos.",
      "pt": "Carne moída refogada com tomate, batata e cenoura em cubinhos + cominho.",
      "en": "Savory ground beef simmered with tiny diced potato, carrot, tomato, and cumin."
    },
    "macrosTrad": {
      "kcal": 619,
      "p": 64,
      "c": 61,
      "f": 12
    },
    "macrosFit": {
      "kcal": 622,
      "p": 69,
      "c": 53,
      "f": 14
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 155,
        "fitGrams": 170,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 80,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 45,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica la papa y la zanahoria en cubitos muy pequeños (5 mm) para que se cuezan rápido. Pica la cebolla y el ajo.",
          "s": null
        },
        {
          "t": "Cocina el arroz si no lo tienes listo.",
          "s": 1080
        },
        {
          "t": "Dora la carne molida en una sartén con unas gotas de aceite, la cebolla, el ajo, el comino y sal.",
          "s": 300
        },
        {
          "t": "Licúa los tomates con un poquito de agua.",
          "s": null
        },
        {
          "t": "Vierte el tomate sobre la carne y agrega la papa y la zanahoria.",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego medio, removiendo de vez en cuando, hasta que las verduras estén suaves y el guiso jugoso; añade agua si se seca.",
          "s": 720
        },
        {
          "t": "Ajusta la sal y sirve con arroz o en tortillas.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Pique a batata e a cenoura em cubinhos bem pequenos (5 mm) para cozinharem rápido. Pique a cebola e o alho.",
          "s": null
        },
        {
          "t": "Cozinhe o arroz se não tiver pronto.",
          "s": 1080
        },
        {
          "t": "Doure a carne moída numa frigideira com gotas de óleo, a cebola, o alho, o cominho e sal.",
          "s": 300
        },
        {
          "t": "Bata os tomates com um pouquinho de água.",
          "s": null
        },
        {
          "t": "Despeje o tomate sobre a carne e junte a batata e a cenoura.",
          "s": null
        },
        {
          "t": "Tampe e cozinhe em fogo médio, mexendo às vezes, até os legumes ficarem macios e o ensopado suculento; junte água se secar.",
          "s": 720
        },
        {
          "t": "Acerte o sal e sirva com arroz ou em tortillas.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Dice the potato and carrot very small (5 mm) so they cook quickly. Chop the onion and garlic.",
          "s": null
        },
        {
          "t": "Cook the rice if not ready.",
          "s": 1080
        },
        {
          "t": "Brown the ground beef in a pan with a few drops of oil, the onion, garlic, cumin and salt.",
          "s": 300
        },
        {
          "t": "Blend the tomatoes with a little water.",
          "s": null
        },
        {
          "t": "Pour the tomato over the beef and add the potato and carrot.",
          "s": null
        },
        {
          "t": "Cover and cook over medium heat, stirring occasionally, until the vegetables are tender and the stew juicy; add water if it dries out.",
          "s": 720
        },
        {
          "t": "Adjust the salt and serve with rice or in tortillas.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Picadillo Mexicano de Res receta paso a paso"
  },
  {
    "id": "mx_19",
    "country": "MEXICAN",
    "time": 18,
    "fav": false,
    "img": "images/mx_19.jpg",
    "title": {
      "es": "Tacos Gobernador de Camarón",
      "pt": "Tacos Gobernador de Camarão",
      "en": "Shrimp Tacos Gobernador"
    },
    "brTip": {
      "es": "Clásico de Sinaloa: camarón salteado con tomate, cebolla y queso fundido dentro de una tortilla dorada. En Brasil: camarão cinza y muçarela.",
      "pt": "Clássico de Sinaloa: camarão salteado com tomate, cebola e queijo derretido dentro de uma tortilha dourada. No Brasil: camarão cinza e muçarela.",
      "en": "Sinaloa classic: shrimp sautéed with tomato, onion and melted cheese in a golden tortilla. In Brazil: gray shrimp and mozzarella."
    },
    "macrosTrad": {
      "kcal": 420,
      "p": 39,
      "c": 39,
      "f": 13
    },
    "macrosFit": {
      "kcal": 328,
      "p": 37,
      "c": 34,
      "f": 6
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 145,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 65,
        "fitGrams": 50,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 45,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Muçarela",
          "pt": "No Brasil: Muçarela",
          "en": "In Brazil: Muçarela"
        },
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica los camarones limpios en trozos pequeños.",
          "s": null
        },
        {
          "t": "Pica fino la cebolla, el pimentón, el tomate y el ajo; ralla el queso.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el pimentón y el tomate en una sartén con unas gotas de aceite.",
          "s": 240
        },
        {
          "t": "Añade el marisco con el ajo, orégano y sal, y saltea solo hasta que cambie de color.",
          "s": 180
        },
        {
          "t": "Coloca una tortilla en otra sartén caliente, cubre con queso y pon el relleno en una mitad.",
          "s": null
        },
        {
          "t": "Dobla como quesadilla y dora por ambos lados hasta que esté crocante.",
          "s": 180
        },
        {
          "t": "Sirve con limón y salsa al gusto.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Pique os camarões limpos em pedaços pequenos.",
          "s": null
        },
        {
          "t": "Pique fino a cebola, o pimentão, o tomate e o alho; rale o queijo.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o pimentão e o tomate numa frigideira com gotas de óleo.",
          "s": 240
        },
        {
          "t": "Junte o fruto do mar com o alho, orégano e sal, e salteie só até mudar de cor.",
          "s": 180
        },
        {
          "t": "Coloque uma tortilla em outra frigideira quente, cubra com queijo e ponha o recheio numa metade.",
          "s": null
        },
        {
          "t": "Dobre como quesadilla e doure dos dois lados até ficar crocante.",
          "s": 180
        },
        {
          "t": "Sirva com limão e molho a gosto.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Chop the cleaned shrimp into small pieces.",
          "s": null
        },
        {
          "t": "Finely chop the onion, bell pepper, tomato and garlic; grate the cheese.",
          "s": null
        },
        {
          "t": "Sauté the onion, pepper and tomato in a pan with a few drops of oil.",
          "s": 240
        },
        {
          "t": "Add the seafood with the garlic, oregano and salt, and sauté just until it changes color.",
          "s": 180
        },
        {
          "t": "Place a tortilla in another hot pan, cover with cheese and put the filling on one half.",
          "s": null
        },
        {
          "t": "Fold like a quesadilla and brown both sides until crisp.",
          "s": 180
        },
        {
          "t": "Serve with lime and salsa to taste.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Tacos Gobernador de Camarón receta paso a paso"
  },
  {
    "id": "mx_20",
    "country": "MEXICAN",
    "time": 20,
    "fav": false,
    "img": "images/mx_20.jpg",
    "title": {
      "es": "Tacos de Carne Asada",
      "pt": "Tacos de Carne Assada na Chapa",
      "en": "Mexican Carne Asada Tacos"
    },
    "brTip": {
      "es": "Original con arrachera (falda de res) marinada en limón, naranja y ajo. En Brasil: fraldinha.",
      "pt": "Original com arrachera (fraldinha) marinada em limão, laranja e alho. No Brasil: fraldinha.",
      "en": "Made with arrachera (skirt steak) marinated in lime, orange and garlic. In Brazil: fraldinha."
    },
    "macrosTrad": {
      "kcal": 623,
      "p": 38,
      "c": 43,
      "f": 35
    },
    "macrosFit": {
      "kcal": 458,
      "p": 25,
      "c": 38,
      "f": 25
    },
    "ingredients": [
      {
        "id": "falda_res",
        "grams": 165,
        "fitGrams": 100,
        "sub": {
          "es": "En Brasil: Fraldinha",
          "pt": "No Brasil: Fraldinha",
          "en": "In Brazil: Fraldinha"
        },
        "fitId": null
      },
      {
        "id": "tortilla_maiz",
        "grams": 70,
        "fitGrams": 55,
        "sub": {
          "es": "En Brasil: Rap10 / tortilha de trigo",
          "pt": "No Brasil: Rap10 / tortilha de trigo",
          "en": "In Brazil: Rap10 / tortilha de trigo"
        },
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça",
          "pt": "No Brasil: Pimenta dedo-de-moça",
          "en": "In Brazil: Pimenta dedo-de-moça"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 45,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Mezcla el jugo de limón, 2 cdas de jugo de naranja, ajo machacado, 1 cdta de shoyu, comino y sal.",
          "s": null
        },
        {
          "t": "Marina el filete de res en esa mezcla.",
          "s": 900
        },
        {
          "t": "Mientras, pica la cebolla y el cilantro y machaca el aguacate con limón y sal.",
          "s": null
        },
        {
          "t": "Calienta la sartén o plancha al máximo con unas gotas de aceite y sella la carne entera por ambos lados hasta tener buen dorado y centro jugoso.",
          "s": 360
        },
        {
          "t": "Pásala a una tabla y déjala reposar para que no pierda sus jugos.",
          "s": 240
        },
        {
          "t": "Pica la carne en cubitos y calienta las tortillas en sartén seca.",
          "s": 60
        },
        {
          "t": "Sirve en tortillas con cebolla, cilantro, salsa roja y el aguacate.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture o suco de limão, 2 colheres de suco de laranja, alho amassado, 1 colher (chá) de shoyu, cominho e sal.",
          "s": null
        },
        {
          "t": "Marine o bife nessa mistura.",
          "s": 900
        },
        {
          "t": "Enquanto isso, pique a cebola e o coentro e amasse o abacate com limão e sal.",
          "s": null
        },
        {
          "t": "Aqueça a frigideira ou chapa no máximo com gotas de óleo e sele a carne inteira dos dois lados até dourar bem e ficar suculenta por dentro.",
          "s": 360
        },
        {
          "t": "Passe para uma tábua e deixe descansar para não perder o suco.",
          "s": 240
        },
        {
          "t": "Pique a carne em cubinhos e aqueça as tortillas em frigideira seca.",
          "s": 60
        },
        {
          "t": "Sirva nas tortillas com cebola, coentro, molho vermelho e o abacate.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Mix the lime juice, 2 tbsp orange juice, crushed garlic, 1 tsp soy sauce, cumin and salt.",
          "s": null
        },
        {
          "t": "Marinate the beef steak in the mixture.",
          "s": 900
        },
        {
          "t": "Meanwhile, chop the onion and cilantro and mash the avocado with lime and salt.",
          "s": null
        },
        {
          "t": "Heat the pan or griddle to maximum with a few drops of oil and sear the whole steak on both sides until well browned and juicy inside.",
          "s": 360
        },
        {
          "t": "Move it to a board and let it rest so it keeps its juices.",
          "s": 240
        },
        {
          "t": "Dice the meat and warm the tortillas in a dry pan.",
          "s": 60
        },
        {
          "t": "Serve in tortillas with onion, cilantro, red salsa and the avocado.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Tacos de Carne Asada receta paso a paso"
  },
  {
    "id": "pe_1",
    "country": "PERUVIAN",
    "time": 15,
    "fav": true,
    "img": "images/pe_1.jpg",
    "title": {
      "es": "Ceviche Clásico Peruano",
      "pt": "Ceviche Clássico Peruano",
      "en": "Classic Peruvian Ceviche"
    },
    "brTip": {
      "es": "Original con corvina o lenguado, limón, ají limo y camote. En Brasil: tilápia o robalo, limão tahiti y pimenta dedo-de-moça.",
      "pt": "Original com corvina ou linguado, limão, ají limo e batata-doce. No Brasil: tilápia ou robalo, limão tahiti e pimenta dedo-de-moça.",
      "en": "Made with corvina or sole, lime, ají limo and sweet potato. In Brazil: tilapia or snook, Tahiti lime and red chili."
    },
    "macrosTrad": {
      "kcal": 350,
      "p": 40,
      "c": 42,
      "f": 4
    },
    "macrosFit": {
      "kcal": 349,
      "p": 44,
      "c": 38,
      "f": 4
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 200,
        "sub": {
          "es": "En Brasil: Tilápia ou pescada (corvina)",
          "pt": "No Brasil: Tilápia ou pescada (corvina)",
          "en": "In Brazil: Tilápia ou pescada (corvina)"
        },
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 70,
        "sub": {
          "es": "En Brasil: Cebola roxa",
          "pt": "No Brasil: Cebola roxa",
          "en": "In Brazil: Cebola roxa"
        },
        "fitId": null
      },
      {
        "id": "chile",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimenta dedo-de-moça (ají limo)",
          "pt": "No Brasil: Pimenta dedo-de-moça (ají limo)",
          "en": "In Brazil: Pimenta dedo-de-moça (ají limo)"
        },
        "fitId": null
      },
      {
        "id": "batata_doce",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece el camote en rodajas gruesas y el choclo en agua con sal; deja enfriar.",
          "s": 900
        },
        {
          "t": "Corta la cebolla morada en plumas finas y remójala en agua fría con sal para quitarle lo picante; escúrrela.",
          "s": 300
        },
        {
          "t": "Corta el pescado bien frío en cubos de 2 cm, descartando partes oscuras y espinas. Mantenlo en la nevera hasta el último momento.",
          "s": null
        },
        {
          "t": "Exprime los limones a mano, sin apretar demasiado la cáscara para que el jugo no amargue.",
          "s": null
        },
        {
          "t": "En un bol frío sala bien el pescado (la sal va antes del limón), añade ajo rallado, ají limo picado sin venas y culantro picado.",
          "s": null
        },
        {
          "t": "Vierte el jugo de limón y mezcla suavemente; el pescado debe tornarse blanco por fuera. ¡El ceviche peruano no se deja horas!",
          "s": 120
        },
        {
          "t": "Sirve al instante con la cebolla encima, el camote y el choclo al lado; bebe la “leche de tigre” del fondo.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a batata-doce em rodelas grossas e o milho em água com sal; deixe esfriar.",
          "s": 900
        },
        {
          "t": "Corte a cebola roxa em tiras finas e deixe de molho em água gelada com sal para tirar o ardor; escorra.",
          "s": 300
        },
        {
          "t": "Corte o peixe bem gelado em cubos de 2 cm, descartando partes escuras e espinhas. Mantenha na geladeira até o último momento.",
          "s": null
        },
        {
          "t": "Esprema os limões à mão, sem apertar demais a casca para o suco não amargar.",
          "s": null
        },
        {
          "t": "Numa tigela fria salgue bem o peixe (o sal vai antes do limão), junte alho ralado, ají limo picado sem veias e coentro picado.",
          "s": null
        },
        {
          "t": "Despeje o suco de limão e misture delicadamente; o peixe deve ficar branco por fora. Ceviche peruano não descansa horas!",
          "s": 120
        },
        {
          "t": "Sirva na hora com a cebola por cima, a batata-doce e o milho ao lado; beba o “leite de tigre” do fundo.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil thick sweet-potato slices and the corn in salted water; let cool.",
          "s": 900
        },
        {
          "t": "Slice the red onion thinly and soak it in cold salted water to tame the bite; drain.",
          "s": 300
        },
        {
          "t": "Cut the well-chilled fish into 2 cm cubes, discarding dark parts and bones. Keep it in the fridge until the last moment.",
          "s": null
        },
        {
          "t": "Squeeze the limes by hand without pressing the peel too hard so the juice does not turn bitter.",
          "s": null
        },
        {
          "t": "In a cold bowl salt the fish well (salt before lime), add grated garlic, chopped seeded ají limo and chopped cilantro.",
          "s": null
        },
        {
          "t": "Pour in the lime juice and toss gently; the fish should turn white outside. Peruvian ceviche is never left for hours!",
          "s": 120
        },
        {
          "t": "Serve at once with the onion on top and the sweet potato and corn alongside; drink the “tiger’s milk” left in the bowl.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Ceviche Clásico Peruano receta paso a paso"
  },
  {
    "id": "pe_2",
    "country": "PERUVIAN",
    "time": 20,
    "fav": false,
    "img": "images/pe_2.jpg",
    "title": {
      "es": "Lomo Saltado Peruano",
      "pt": "Lomo Saltado Peruano",
      "en": "Peruvian Lomo Saltado"
    },
    "brTip": {
      "es": "Sillao → shoyu; ají amarillo → pimenta dedo-de-moça; se sirve tradicionalmente con arroz y papas fritas/airfryer.",
      "pt": "Sillao → shoyu; servido tradicionalmente com arroz branco e batata.",
      "en": "Peruvian wok-seared beef with tomato, red onion, soy sauce, rice, and fries."
    },
    "macrosTrad": {
      "kcal": 770,
      "p": 67,
      "c": 65,
      "f": 25
    },
    "macrosFit": {
      "kcal": 706,
      "p": 72,
      "c": 55,
      "f": 21
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 165,
        "fitGrams": 180,
        "sub": {
          "es": "En Brasil: Alcatra ou filé mignon (lomo)",
          "pt": "No Brasil: Alcatra ou filé mignon (lomo)",
          "en": "In Brazil: Alcatra ou filé mignon (lomo)"
        },
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 80,
        "fitGrams": 90,
        "sub": {
          "es": "En Brasil: Cebola roxa",
          "pt": "No Brasil: Cebola roxa",
          "en": "In Brazil: Cebola roxa"
        },
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "shoyu",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "vinagre",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las papas en bastones y dóralas en airfryer u horno a 200 °C hasta que estén crocantes.",
          "s": 900
        },
        {
          "t": "Cocina el arroz si no lo tienes listo.",
          "s": 1080
        },
        {
          "t": "Corta la carne en tiras gruesas de 2 cm y sazónala con sal, pimienta y comino. Corta la cebolla morada y el tomate (sin semillas) en gajos gruesos.",
          "s": null
        },
        {
          "t": "Calienta un wok o sartén grande al máximo hasta que humee; sella la carne en tandas sin moverla mucho para que dore y quede jugosa; retírala.",
          "s": 120
        },
        {
          "t": "En la sartén ardiente saltea la cebolla, añade el ajo y el ají amarillo en tiras, y luego el tomate: deben quedar firmes, no deshechos.",
          "s": 60
        },
        {
          "t": "Vierte 2 cdas de sillao/shoyu y 1 cda de vinagre tinto o de manzana por el borde para que flamee y caramelice.",
          "s": 30
        },
        {
          "t": "Devuelve la carne, mezcla con cilantro picado (y las papas si te gustan integradas) y sirve al instante con el arroz.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte as batatas em palitos e doure na airfryer ou forno a 200 °C até ficarem crocantes.",
          "s": 900
        },
        {
          "t": "Cozinhe o arroz se não tiver pronto.",
          "s": 1080
        },
        {
          "t": "Corte a carne em tiras grossas de 2 cm e tempere com sal, pimenta e cominho. Corte a cebola roxa e o tomate (sem sementes) em gomos grossos.",
          "s": null
        },
        {
          "t": "Aqueça um wok ou frigideira grande no máximo até soltar fumaça; sele a carne aos poucos sem mexer muito para dourar e ficar suculenta; retire.",
          "s": 120
        },
        {
          "t": "Na frigideira bem quente salteie a cebola, junte o alho e o ají amarillo em tiras e depois o tomate: devem ficar firmes, não desmanchados.",
          "s": 60
        },
        {
          "t": "Despeje 2 colheres de shoyu e 1 de vinagre de vinho ou maçã pela borda para flambar e caramelizar.",
          "s": 30
        },
        {
          "t": "Volte a carne, misture com coentro picado (e as batatas, se gostar tudo junto) e sirva na hora com o arroz.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the potatoes into sticks and crisp them in the air fryer or oven at 200 °C.",
          "s": 900
        },
        {
          "t": "Cook the rice if not ready.",
          "s": 1080
        },
        {
          "t": "Cut the beef into thick 2 cm strips and season with salt, pepper and cumin. Cut the red onion and tomato (seeded) into thick wedges.",
          "s": null
        },
        {
          "t": "Heat a wok or large pan to maximum until smoking; sear the beef in batches without moving it much so it browns and stays juicy; remove.",
          "s": 120
        },
        {
          "t": "In the smoking pan sauté the onion, add the garlic and ají amarillo strips, then the tomato: keep them firm, not mushy.",
          "s": 60
        },
        {
          "t": "Pour 2 tbsp soy sauce and 1 tbsp red-wine or cider vinegar around the edge so it sizzles and caramelizes.",
          "s": 30
        },
        {
          "t": "Return the beef, toss with chopped cilantro (and the fries if you like them mixed in) and serve at once with the rice.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Lomo Saltado Peruano receta paso a paso"
  },
  {
    "id": "pe_3",
    "country": "PERUVIAN",
    "time": 30,
    "fav": false,
    "img": "images/pe_3.jpg",
    "title": {
      "es": "Ají de Gallina",
      "pt": "Ají de Gallina (Frango Cremoso)",
      "en": "Peruvian Creamy Chicken"
    },
    "brTip": {
      "es": "Original con ají amarillo, pan remojado en leche evaporada, pecanas y parmesano. En Brasil, si no hay ají amarillo: pimentão amarelo salteado con pimenta dedo-de-moça.",
      "pt": "Original com ají amarillo, pão molhado em leite evaporado, pecãs e parmesão. No Brasil, sem ají amarillo: pimentão amarelo refogado com pimenta dedo-de-moça.",
      "en": "Made with ají amarillo, bread soaked in evaporated milk, pecans and parmesan. In Brazil, without ají amarillo: sautéed yellow bell pepper with red chili."
    },
    "macrosTrad": {
      "kcal": 876,
      "p": 71,
      "c": 87,
      "f": 26
    },
    "macrosFit": {
      "kcal": 708,
      "p": 72,
      "c": 67,
      "f": 16
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 40,
        "fitGrams": 45,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 40,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Pão de forma",
          "pt": "No Brasil: Pão de forma",
          "en": "In Brazil: Pão de forma"
        },
        "fitId": null
      },
      {
        "id": "leite_evaporado",
        "grams": 80,
        "fitGrams": 80,
        "sub": {
          "es": "En Brasil: Leite integral + creme de leite",
          "pt": "No Brasil: Leite integral + creme de leite",
          "en": "In Brazil: Leite integral + creme de leite"
        },
        "fitId": "leite_desnatado"
      },
      {
        "id": "nuez",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": {
          "es": "En Brasil: Castanha-do-pará ou amendoim",
          "pt": "No Brasil: Castanha-do-pará ou amendoim",
          "en": "In Brazil: Castanha-do-pará ou amendoim"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "ovo",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Hierve la pechuga en agua con sal; guarda 1 taza del caldo y desmenuza el pollo en hebras finas.",
          "s": 900
        },
        {
          "t": "Cuece las papas y el huevo (10 min el huevo) y cocina el arroz.",
          "s": 1080
        },
        {
          "t": "Remoja el pan sin corteza en la leche evaporada y licúalo hasta formar una pasta suave.",
          "s": null
        },
        {
          "t": "Licúa la pasta de ají amarillo con las nueces (o pecanas) hasta que quede lisa; es la base amarilla del ají.",
          "s": null
        },
        {
          "t": "En una olla sofríe cebolla picada fina con unas gotas de aceite y agrega la pasta amarilla.",
          "s": 180
        },
        {
          "t": "Incorpora el pan licuado y el caldo poco a poco, removiendo, hasta que espese como una crema.",
          "s": 300
        },
        {
          "t": "Añade el pollo y queso parmesano rallado; cocina unos minutos más. Sirve sobre las papas, con arroz, huevo duro y aceituna.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Ferva o peito em água com sal; guarde 1 xícara do caldo e desfie o frango bem fininho.",
          "s": 900
        },
        {
          "t": "Cozinhe as batatas e o ovo (10 min o ovo) e prepare o arroz.",
          "s": 1080
        },
        {
          "t": "Molhe o pão sem casca no leite evaporado e bata até formar uma pasta lisa.",
          "s": null
        },
        {
          "t": "Bata a pasta de ají amarillo com as nozes (ou pecãs) até ficar lisa; é a base amarela do ají.",
          "s": null
        },
        {
          "t": "Numa panela refogue cebola picadinha com gotas de óleo e junte a pasta amarela.",
          "s": 180
        },
        {
          "t": "Junte o pão batido e o caldo aos poucos, mexendo, até engrossar como um creme.",
          "s": 300
        },
        {
          "t": "Junte o frango e queijo parmesão ralado; cozinhe mais alguns minutos. Sirva sobre as batatas, com arroz, ovo cozido e azeitona.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Poach the chicken breast in salted water; keep 1 cup of broth and shred the chicken finely.",
          "s": 900
        },
        {
          "t": "Boil the potatoes and the egg (10 min for the egg) and cook the rice.",
          "s": 1080
        },
        {
          "t": "Soak the crustless bread in the evaporated milk and blend into a smooth paste.",
          "s": null
        },
        {
          "t": "Blend the ají amarillo paste with the walnuts (or pecans) until smooth; this is the yellow base.",
          "s": null
        },
        {
          "t": "In a pot sauté finely chopped onion with a few drops of oil and add the yellow paste.",
          "s": 180
        },
        {
          "t": "Stir in the blended bread and the broth little by little until it thickens like a cream.",
          "s": 300
        },
        {
          "t": "Add the chicken and grated parmesan; cook a few minutes more. Serve over the potatoes with rice, hard-boiled egg and olive.",
          "s": 180
        }
      ]
    },
    "videoQuery": "como hacer Ají de Gallina receta paso a paso"
  },
  {
    "id": "pe_4",
    "country": "PERUVIAN",
    "time": 18,
    "fav": false,
    "img": "images/pe_4.jpg",
    "title": {
      "es": "Arroz Chaufa Peruano",
      "pt": "Arroz Chaufa Peruano",
      "en": "Peruvian Chaufa Fried Rice"
    },
    "brTip": {
      "es": "Arroz del día anterior (bem soltinho) salteado con jengibre rallado, shoyu, huevo en tortilla picada y cebollín.",
      "pt": "Arroz amanhecido salteado com gengibre, shoyu, ovo em tirinhas e cebolinha.",
      "en": "Day-old rice wok-tossed with ginger, soy sauce, egg ribbons, and scallions."
    },
    "macrosTrad": {
      "kcal": 630,
      "p": 61,
      "c": 44,
      "f": 21
    },
    "macrosFit": {
      "kcal": 580,
      "p": 66,
      "c": 34,
      "f": 18
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 140,
        "fitGrams": 110,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "ovo",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "shoyu",
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 20,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Cebolinha (cebolla china)",
          "pt": "No Brasil: Cebolinha (cebolla china)",
          "en": "In Brazil: Cebolinha (cebolla china)"
        },
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Usa arroz cocido del día anterior y frío: así los granos quedan sueltos. Pica el cebollín separando la parte blanca de la verde.",
          "s": null
        },
        {
          "t": "Bate los huevos con una pizca de sal y haz una tortilla fina en sartén con unas gotas de aceite; córtala en cuadritos y reserva.",
          "s": 120
        },
        {
          "t": "Corta el pollo en cubos pequeños y sazónalo con sal y un chorrito de sillao.",
          "s": null
        },
        {
          "t": "Calienta un wok o sartén al máximo con unas gotas de aceite y dora el pollo con jengibre rallado, ajo y la parte blanca del cebollín.",
          "s": 240
        },
        {
          "t": "Añade el pimentón rojo picado y saltea.",
          "s": 60
        },
        {
          "t": "Agrega el arroz frío presionándolo con la cuchara para separar los granos y saltea a fuego fuerte.",
          "s": 120
        },
        {
          "t": "Vierte el sillao alrededor del borde caliente para que se tueste, mezcla con el huevo y abundante cebollín verde; sirve de inmediato.",
          "s": 120
        }
      ],
      "pt": [
        {
          "t": "Use arroz cozido do dia anterior e frio: assim os grãos ficam soltinhos. Pique a cebolinha separando a parte branca da verde.",
          "s": null
        },
        {
          "t": "Bata os ovos com uma pitada de sal e faça uma omelete fina em frigideira com gotas de óleo; corte em quadradinhos e reserve.",
          "s": 120
        },
        {
          "t": "Corte o frango em cubinhos e tempere com sal e um fio de shoyu.",
          "s": null
        },
        {
          "t": "Aqueça um wok ou frigideira no máximo com gotas de óleo e doure o frango com gengibre ralado, alho e a parte branca da cebolinha.",
          "s": 240
        },
        {
          "t": "Junte o pimentão vermelho picado e salteie.",
          "s": 60
        },
        {
          "t": "Acrescente o arroz frio apertando com a colher para soltar os grãos e salteie em fogo alto.",
          "s": 120
        },
        {
          "t": "Despeje o shoyu pela borda quente para tostar, misture com o ovo e bastante cebolinha verde; sirva na hora.",
          "s": 120
        }
      ],
      "en": [
        {
          "t": "Use cold, day-old cooked rice so the grains stay separate. Chop the scallions, keeping white and green parts apart.",
          "s": null
        },
        {
          "t": "Beat the eggs with a pinch of salt and make a thin omelette in a pan with a few drops of oil; cut into squares and set aside.",
          "s": 120
        },
        {
          "t": "Dice the chicken small and season with salt and a splash of soy sauce.",
          "s": null
        },
        {
          "t": "Heat a wok or pan to maximum with a few drops of oil and brown the chicken with grated ginger, garlic and the white scallion.",
          "s": 240
        },
        {
          "t": "Add the chopped red pepper and stir-fry.",
          "s": 60
        },
        {
          "t": "Add the cold rice, pressing with the spoon to break up the grains, and stir-fry over high heat.",
          "s": 120
        },
        {
          "t": "Pour the soy sauce around the hot edge so it toasts, toss with the egg and plenty of green scallion; serve right away.",
          "s": 120
        }
      ]
    },
    "videoQuery": "como hacer Arroz Chaufa Peruano receta paso a paso"
  },
  {
    "id": "pe_5",
    "country": "PERUVIAN",
    "time": 25,
    "fav": false,
    "img": "images/pe_5.jpg",
    "title": {
      "es": "Causa Limeña Rellena",
      "pt": "Causa Limeña (Purê Frio Recheado)",
      "en": "Peruvian Layered Potato Causa"
    },
    "brTip": {
      "es": "Usa batata asterix (cáscara rosada, más seca y cremosa en Brasil!) o batata-doce en modo fit, con atún o pollo.",
      "pt": "Use batata asterix (casca rosa — perfeita para purê!) recheada com atum ou frango.",
      "en": "Use pink-skinned Brazilian Asterix potatoes layered with creamy tuna or chicken."
    },
    "macrosTrad": {
      "kcal": 649,
      "p": 40,
      "c": 40,
      "f": 37
    },
    "macrosFit": {
      "kcal": 475,
      "p": 43,
      "c": 35,
      "f": 19
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 180,
        "fitGrams": 145,
        "sub": {
          "es": "En Brasil: Batata asterix ou amarela",
          "pt": "No Brasil: Batata asterix ou amarela",
          "en": "In Brazil: Batata asterix ou amarela"
        },
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 20,
        "fitGrams": 25,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "atum",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "maionesa",
        "grams": 20,
        "fitGrams": 10,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "abacate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece las papas amarillas peladas en agua con sal hasta que estén tiernas; escúrrelas muy bien.",
          "s": 1080
        },
        {
          "t": "Aplástalas aún calientes con un prensapapas hasta que no queden grumos y deja entibiar.",
          "s": null
        },
        {
          "t": "Amasa el puré con el jugo de 1 limón, el aceite, la pasta de ají amarillo y sal hasta lograr una masa suave y moldeable.",
          "s": null
        },
        {
          "t": "Relleno: mezcla el atún bien escurrido con cebolla picada fina, la mayonesa y gotas de limón.",
          "s": null
        },
        {
          "t": "Corta el aguacate en láminas y rocíale limón.",
          "s": null
        },
        {
          "t": "En un aro o molde con film arma capas: puré, aguacate, relleno y termina con otra capa de puré; presiona suave.",
          "s": null
        },
        {
          "t": "Refrigera para que tome firmeza, desmolda y sirve fría decorada con huevo o aceituna si tienes.",
          "s": 900
        }
      ],
      "pt": [
        {
          "t": "Cozinhe as batatas amarelas descascadas em água com sal até ficarem macias; escorra muito bem.",
          "s": 1080
        },
        {
          "t": "Amasse ainda quentes com espremedor até não sobrar nenhum grumo e deixe amornar.",
          "s": null
        },
        {
          "t": "Amasse o purê com o suco de 1 limão, o azeite, a pasta de ají amarillo e sal até obter uma massa lisa e moldável.",
          "s": null
        },
        {
          "t": "Recheio: misture o atum bem escorrido com cebola picada fina, a maionese e gotas de limão.",
          "s": null
        },
        {
          "t": "Corte o abacate em lâminas e regue com limão.",
          "s": null
        },
        {
          "t": "Num aro ou forma forrada com filme monte camadas: purê, abacate, recheio e termine com outra camada de purê; aperte de leve.",
          "s": null
        },
        {
          "t": "Leve à geladeira para firmar, desenforme e sirva fria decorada com ovo ou azeitona se tiver.",
          "s": 900
        }
      ],
      "en": [
        {
          "t": "Boil the peeled yellow potatoes in salted water until tender; drain very well.",
          "s": 1080
        },
        {
          "t": "Mash them while hot with a ricer until no lumps remain and let cool slightly.",
          "s": null
        },
        {
          "t": "Knead the mash with the juice of 1 lime, the oil, the ají amarillo paste and salt into a smooth, moldable dough.",
          "s": null
        },
        {
          "t": "Filling: mix the well-drained tuna with finely chopped onion, the mayonnaise and a few drops of lime.",
          "s": null
        },
        {
          "t": "Slice the avocado and squeeze lime over it.",
          "s": null
        },
        {
          "t": "In a ring or film-lined mold layer: mash, avocado, filling and finish with more mash; press gently.",
          "s": null
        },
        {
          "t": "Chill until firm, unmold and serve cold garnished with egg or olive if you have them.",
          "s": 900
        }
      ]
    },
    "videoQuery": "como hacer Causa Limeña Rellena receta paso a paso"
  },
  {
    "id": "pe_6",
    "country": "PERUVIAN",
    "time": 35,
    "fav": false,
    "img": "images/pe_6.jpg",
    "title": {
      "es": "Pollo a la Brasa Peruano Casero",
      "pt": "Frango Assado Estilo Peruano",
      "en": "Peruvian Roast Chicken"
    },
    "brTip": {
      "es": "Marinada original: ají panca, sillao, vinagre, ajo, comino, romero y cerveza negra. Queda brutal en airfryer.",
      "pt": "Marinada original: ají panca, shoyu, vinagre, alho, cominho, alecrim e cerveja preta. Fica incrível na airfryer.",
      "en": "Original marinade: ají panca, soy sauce, vinegar, garlic, cumin, rosemary and dark beer. Great in the air fryer."
    },
    "macrosTrad": {
      "kcal": 631,
      "p": 50,
      "c": 32,
      "f": 34
    },
    "macrosFit": {
      "kcal": 493,
      "p": 70,
      "c": 27,
      "f": 11
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 185,
        "fitGrams": 205,
        "sub": null,
        "fitId": "frango"
      },
      {
        "id": "shoyu",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "aji_panca",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta",
          "pt": "No Brasil: Páprica defumada + pimenta",
          "en": "In Brazil: Páprica defumada + pimenta"
        },
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 140,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pepino",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa la pasta de ají panca, 2 cdas de sillao, 1 cda de vinagre, 3 dientes de ajo, 1 cdta de comino, romero, pimienta negra y sal (y un chorrito de cerveza negra si tienes).",
          "s": null
        },
        {
          "t": "Haz cortes superficiales en el pollo y unta bien la marinada, también bajo la piel si la tiene.",
          "s": null
        },
        {
          "t": "Deja reposar en la nevera (mejor si es más tiempo).",
          "s": 1200
        },
        {
          "t": "Precalienta el horno o airfryer a 200 °C. Corta las papas en gajos y sazónalas con sal y unas gotas de aceite.",
          "s": null
        },
        {
          "t": "Hornea el pollo y las papas juntos; gira el pollo a mitad de tiempo y píntalo con la marinada sobrante.",
          "s": 1680
        },
        {
          "t": "Comprueba que el centro esté bien cocido (los jugos deben salir claros) y deja reposar unos minutos.",
          "s": null
        },
        {
          "t": "Prepara una ensalada de tomate y lechuga con limón y sal, y sirve con el pollo y las papas doradas.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Bata a pasta de ají panca, 2 colheres de shoyu, 1 colher de vinagre, 3 dentes de alho, 1 colher de chá de cominho, alecrim, pimenta-do-reino e sal (e um pouco de cerveja preta se tiver).",
          "s": null
        },
        {
          "t": "Faça cortes superficiais no frango e passe bem a marinada, inclusive sob a pele se tiver.",
          "s": null
        },
        {
          "t": "Deixe descansar na geladeira (melhor se for mais tempo).",
          "s": 1200
        },
        {
          "t": "Preaqueça o forno ou airfryer a 200 °C. Corte as batatas em gomos e tempere com sal e gotas de óleo.",
          "s": null
        },
        {
          "t": "Asse o frango e as batatas juntos; vire o frango na metade do tempo e pincele com a marinada que sobrou.",
          "s": 1680
        },
        {
          "t": "Confira se o centro está bem cozido (o suco deve sair claro) e deixe descansar alguns minutos.",
          "s": null
        },
        {
          "t": "Prepare uma salada de tomate e alface com limão e sal, e sirva com o frango e as batatas douradas.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Blend the ají panca paste, 2 tbsp soy sauce, 1 tbsp vinegar, 3 garlic cloves, 1 tsp cumin, rosemary, black pepper and salt (and a splash of dark beer if you have it).",
          "s": null
        },
        {
          "t": "Score the chicken lightly and rub the marinade in well, under the skin too if it has any.",
          "s": null
        },
        {
          "t": "Let it rest in the fridge (longer is better).",
          "s": 1200
        },
        {
          "t": "Preheat the oven or air fryer to 200 °C. Cut the potatoes into wedges and season with salt and a few drops of oil.",
          "s": null
        },
        {
          "t": "Roast the chicken and potatoes together; turn the chicken halfway and brush with the leftover marinade.",
          "s": 1680
        },
        {
          "t": "Check the center is fully cooked (juices run clear) and let it rest a few minutes.",
          "s": null
        },
        {
          "t": "Make a tomato and lettuce salad with lime and salt, and serve with the chicken and golden potatoes.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Pollo a la Brasa Peruano Casero receta paso a paso"
  },
  {
    "id": "pe_7",
    "country": "PERUVIAN",
    "time": 22,
    "fav": false,
    "img": "images/pe_7.jpg",
    "title": {
      "es": "Tallarines Verdes con Bistec",
      "pt": "Macarrão Verde Peruano com Bife",
      "en": "Peruvian Green Pasta & Steak"
    },
    "brTip": {
      "es": "Salsa verde de espinaca, albahaca, queso fresco y leche evaporada. En Brasil: queijo minas frescal y manjericão.",
      "pt": "Molho verde de espinafre, manjericão, queijo fresco e leite evaporado. No Brasil: queijo minas frescal.",
      "en": "Green sauce of spinach, basil, queso fresco and evaporated milk. In Brazil: minas frescal cheese."
    },
    "macrosTrad": {
      "kcal": 808,
      "p": 74,
      "c": 47,
      "f": 35
    },
    "macrosFit": {
      "kcal": 652,
      "p": 74,
      "c": 39,
      "f": 21
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "macarrao",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "espinaca",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "albahaca",
        "grams": 25,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 40,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "leite_evaporado",
        "grams": 50,
        "fitGrams": 50,
        "sub": {
          "es": "En Brasil: Leite integral + creme de leite",
          "pt": "No Brasil: Leite integral + creme de leite",
          "en": "In Brazil: Leite integral + creme de leite"
        },
        "fitId": "leite_desnatado"
      },
      {
        "id": "cebola",
        "grams": 20,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pon a hervir abundante agua con sal para la pasta.",
          "s": 480
        },
        {
          "t": "Blanquea la espinaca y la albahaca en otra olla con agua hirviendo y pásalas a agua con hielo para fijar el verde.",
          "s": 30
        },
        {
          "t": "Licúa las hojas con el queso fresco, la leche evaporada, la cebolla y el ajo sofritos, sal y el aceite hasta lograr una crema verde lisa.",
          "s": null
        },
        {
          "t": "Cuece la pasta al dente según el paquete y escurre guardando un chorrito del agua.",
          "s": 600
        },
        {
          "t": "Sazona el bistec con sal y pimienta y séllalo en plancha muy caliente con unas gotas de aceite, por ambos lados.",
          "s": 360
        },
        {
          "t": "Mezcla la pasta con la salsa verde a fuego mínimo, sin dejar hervir, aflojando con el agua reservada.",
          "s": 60
        },
        {
          "t": "Sirve la pasta con el bistec encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Coloque bastante água com sal para ferver para a massa.",
          "s": 480
        },
        {
          "t": "Branqueie o espinafre e o manjericão em outra panela com água fervendo e passe para água com gelo para fixar o verde.",
          "s": 30
        },
        {
          "t": "Bata as folhas com o queijo fresco, o leite evaporado, a cebola e o alho refogados, sal e o azeite até virar um creme verde liso.",
          "s": null
        },
        {
          "t": "Cozinhe a massa al dente conforme a embalagem e escorra guardando um pouco da água.",
          "s": 600
        },
        {
          "t": "Tempere o bife com sal e pimenta e sele em chapa bem quente com gotas de óleo, dos dois lados.",
          "s": 360
        },
        {
          "t": "Misture a massa com o molho verde em fogo mínimo, sem ferver, soltando com a água reservada.",
          "s": 60
        },
        {
          "t": "Sirva a massa com o bife por cima.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Bring plenty of salted water to a boil for the pasta.",
          "s": 480
        },
        {
          "t": "Blanch the spinach and basil in another pot of boiling water and move to ice water to set the green.",
          "s": 30
        },
        {
          "t": "Blend the leaves with the queso fresco, evaporated milk, sautéed onion and garlic, salt and the oil into a smooth green cream.",
          "s": null
        },
        {
          "t": "Cook the pasta al dente per the package and drain, saving a splash of water.",
          "s": 600
        },
        {
          "t": "Season the steak with salt and pepper and sear on a very hot griddle with a few drops of oil, both sides.",
          "s": 360
        },
        {
          "t": "Toss the pasta with the green sauce over the lowest heat, without boiling, loosening with the reserved water.",
          "s": 60
        },
        {
          "t": "Serve the pasta with the steak on top.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Tallarines Verdes con Bistec receta paso a paso"
  },
  {
    "id": "pe_8",
    "country": "PERUVIAN",
    "time": 35,
    "fav": false,
    "img": "images/pe_8.jpg",
    "title": {
      "es": "Seco de Res con Frijoles",
      "pt": "Seco de Carne com Coentro",
      "en": "Peruvian Cilantro Beef Stew"
    },
    "brTip": {
      "es": "Guiso de res con culantro licuado, ají amarillo y chicha de jora o cerveza, servido con frijoles y arroz.",
      "pt": "Ensopado de carne com coentro batido, ají amarillo e chicha de jora ou cerveja, servido com feijão e arroz.",
      "en": "Beef stew with blended cilantro, ají amarillo and chicha de jora or beer, served with beans and rice."
    },
    "macrosTrad": {
      "kcal": 662,
      "p": 43,
      "c": 62,
      "f": 27
    },
    "macrosFit": {
      "kcal": 482,
      "p": 30,
      "c": 54,
      "f": 17
    },
    "ingredients": [
      {
        "id": "falda_res",
        "grams": 160,
        "fitGrams": 95,
        "sub": {
          "es": "En Brasil: Acém ou costela",
          "pt": "No Brasil: Acém ou costela",
          "en": "In Brazil: Acém ou costela"
        },
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 40,
        "fitGrams": 40,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa un manojo generoso de cilantro con ½ taza de agua o caldo hasta obtener un líquido verde.",
          "s": null
        },
        {
          "t": "Corta la carne en cubos grandes y sazónala con sal y pimienta; pica la cebolla y el ajo y corta la zanahoria en rodajas.",
          "s": null
        },
        {
          "t": "Sella la carne en una olla con unas gotas de aceite a fuego fuerte hasta dorar; retírala.",
          "s": 300
        },
        {
          "t": "En la misma olla sofríe la cebolla, el ajo, la pasta de ají amarillo y el comino.",
          "s": 240
        },
        {
          "t": "Agrega el cilantro licuado y sofríe para quitarle el sabor a crudo.",
          "s": 180
        },
        {
          "t": "Devuelve la carne con la zanahoria y 1 taza de chicha de jora o cerveza; tapa y cocina a fuego bajo hasta que esté tierna. Agrega las arvejas al final.",
          "s": 1500
        },
        {
          "t": "Mientras, calienta los frijoles y cocina el arroz; sirve el seco con ambos.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Bata um maço generoso de coentro com ½ xícara de água ou caldo até virar um líquido verde.",
          "s": null
        },
        {
          "t": "Corte a carne em cubos grandes e tempere com sal e pimenta; pique a cebola e o alho e corte a cenoura em rodelas.",
          "s": null
        },
        {
          "t": "Sele a carne numa panela com gotas de óleo em fogo alto até dourar; retire.",
          "s": 300
        },
        {
          "t": "Na mesma panela refogue a cebola, o alho, a pasta de ají amarillo e o cominho.",
          "s": 240
        },
        {
          "t": "Junte o coentro batido e refogue para tirar o gosto de cru.",
          "s": 180
        },
        {
          "t": "Devolva a carne com a cenoura e 1 xícara de chicha de jora ou cerveja; tampe e cozinhe em fogo baixo até ficar macia. Junte as ervilhas no final.",
          "s": 1500
        },
        {
          "t": "Enquanto isso, aqueça o feijão e prepare o arroz; sirva o seco com os dois.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Blend a generous bunch of cilantro with ½ cup water or stock into a green liquid.",
          "s": null
        },
        {
          "t": "Cut the beef into large cubes and season with salt and pepper; chop the onion and garlic and slice the carrot.",
          "s": null
        },
        {
          "t": "Sear the beef in a pot with a few drops of oil over high heat until browned; remove.",
          "s": 300
        },
        {
          "t": "In the same pot sauté the onion, garlic, ají amarillo paste and cumin.",
          "s": 240
        },
        {
          "t": "Add the blended cilantro and fry it to cook off the raw taste.",
          "s": 180
        },
        {
          "t": "Return the beef with the carrot and 1 cup of chicha de jora or beer; cover and simmer until tender. Add the peas at the end.",
          "s": 1500
        },
        {
          "t": "Meanwhile, heat the beans and cook the rice; serve the stew with both.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Seco de Res con Frijoles receta paso a paso"
  },
  {
    "id": "pe_9",
    "country": "PERUVIAN",
    "time": 20,
    "fav": false,
    "img": "images/pe_9.jpg",
    "title": {
      "es": "Papa a la Huancaína",
      "pt": "Batata à Huancaína",
      "en": "Peruvian Huancaína Potatoes"
    },
    "brTip": {
      "es": "Crema de ají amarillo, queso fresco, leche evaporada y galleta de soda, sin cocción final. En Brasil: queijo minas frescal y bolacha água e sal.",
      "pt": "Creme de ají amarillo, queijo fresco, leite evaporado e bolacha água e sal, sem cozimento final. No Brasil: queijo minas frescal.",
      "en": "Cream of ají amarillo, queso fresco, evaporated milk and soda crackers, uncooked. In Brazil: minas frescal cheese."
    },
    "macrosTrad": {
      "kcal": 576,
      "p": 25,
      "c": 43,
      "f": 34
    },
    "macrosFit": {
      "kcal": 343,
      "p": 18,
      "c": 35,
      "f": 15
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 180,
        "fitGrams": 145,
        "sub": {
          "es": "En Brasil: Batata amarela",
          "pt": "No Brasil: Batata amarela",
          "en": "In Brazil: Batata amarela"
        },
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 60,
        "fitGrams": 40,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "aji_amarillo",
        "grams": 30,
        "fitGrams": 35,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "leite_evaporado",
        "grams": 60,
        "fitGrams": 60,
        "sub": {
          "es": "En Brasil: Leite integral + creme de leite",
          "pt": "No Brasil: Leite integral + creme de leite",
          "en": "In Brazil: Leite integral + creme de leite"
        },
        "fitId": "leite_desnatado"
      },
      {
        "id": "ovo",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece las papas enteras y el huevo en agua con sal hasta que un cuchillo entre fácil en la papa (huevo 10 min).",
          "s": 1080
        },
        {
          "t": "Pela las papas y córtalas en rodajas gruesas; pela y corta el huevo en cuartos.",
          "s": null
        },
        {
          "t": "Sofríe en sartén la pasta de ají amarillo con cebolla y ajo hasta ablandar.",
          "s": 240
        },
        {
          "t": "Licúa el sofrito con el queso fresco, la leche evaporada, 2 galletas de soda y sal hasta lograr una crema lisa y espesa.",
          "s": null
        },
        {
          "t": "Ajusta la textura: si está espesa añade leche; si está líquida, otra galleta.",
          "s": null
        },
        {
          "t": "Acomoda hojas de lechuga en el plato y encima las papas tibias o frías.",
          "s": null
        },
        {
          "t": "Baña con la crema huancaína y decora con el huevo y la aceituna.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe as batatas inteiras e o ovo em água com sal até a faca entrar fácil na batata (ovo 10 min).",
          "s": 1080
        },
        {
          "t": "Descasque as batatas e corte em rodelas grossas; descasque o ovo e corte em quartos.",
          "s": null
        },
        {
          "t": "Refogue na frigideira a pasta de ají amarillo com cebola e alho até amaciar.",
          "s": 240
        },
        {
          "t": "Bata o refogado com o queijo fresco, o leite evaporado, 2 bolachas água e sal e sal até obter um creme liso e grosso.",
          "s": null
        },
        {
          "t": "Ajuste a textura: se estiver grosso, mais leite; se estiver ralo, outra bolacha.",
          "s": null
        },
        {
          "t": "Arrume folhas de alface no prato e por cima as batatas mornas ou frias.",
          "s": null
        },
        {
          "t": "Cubra com o creme huancaíno e decore com o ovo e a azeitona.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil the whole potatoes and the egg in salted water until a knife slides easily into the potato (egg 10 min).",
          "s": 1080
        },
        {
          "t": "Peel the potatoes and cut into thick slices; peel and quarter the egg.",
          "s": null
        },
        {
          "t": "Sauté the ají amarillo paste with onion and garlic until soft.",
          "s": 240
        },
        {
          "t": "Blend the sauté with the queso fresco, evaporated milk, 2 soda crackers and salt into a smooth, thick cream.",
          "s": null
        },
        {
          "t": "Adjust the texture: add milk if too thick, another cracker if too thin.",
          "s": null
        },
        {
          "t": "Arrange lettuce leaves on the plate and the warm or cold potatoes on top.",
          "s": null
        },
        {
          "t": "Coat with the huancaína sauce and garnish with the egg and olive.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Papa a la Huancaína receta paso a paso"
  },
  {
    "id": "pe_10",
    "country": "PERUVIAN",
    "time": 12,
    "fav": false,
    "img": "images/pe_10.jpg",
    "title": {
      "es": "Tiradito de Pescado",
      "pt": "Tiradito de Peixe",
      "en": "Peruvian Fish Tiradito"
    },
    "brTip": {
      "es": "De influencia nikkei: láminas finas de corvina o lenguado bañadas en crema de limón y ají amarillo. En Brasil: tilápia o linguado.",
      "pt": "De influência nikkei: lâminas finas de corvina ou linguado banhadas em creme de limão e ají amarillo. No Brasil: tilápia ou linguado.",
      "en": "Nikkei-style thin slices of corvina or sole in a lime and ají amarillo cream. In Brazil: tilapia or sole."
    },
    "macrosTrad": {
      "kcal": 287,
      "p": 37,
      "c": 30,
      "f": 4
    },
    "macrosFit": {
      "kcal": 282,
      "p": 39,
      "c": 25,
      "f": 4
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 170,
        "fitGrams": 185,
        "sub": {
          "es": "En Brasil: Tilápia ou pescada",
          "pt": "No Brasil: Tilápia ou pescada",
          "en": "In Brazil: Tilápia ou pescada"
        },
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 25,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "batata_doce",
        "grams": 80,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 5,
        "fitGrams": 5,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece el camote en rodajas en agua con sal y deja enfriar.",
          "s": 900
        },
        {
          "t": "Mantén el filete de pescado muy frío (puedes dejarlo 10 min en el congelador para cortarlo mejor).",
          "s": null
        },
        {
          "t": "Con un cuchillo bien afilado córtalo en ángulo en láminas largas y delgadas, tipo sashimi.",
          "s": null
        },
        {
          "t": "Licúa el jugo de 2 limones con la pasta de ají amarillo, ajo, una pizca de jengibre y sal hasta emulsionar.",
          "s": null
        },
        {
          "t": "Acomoda las láminas extendidas en un plato frío, sin encimarlas demasiado, y sálalas ligeramente.",
          "s": null
        },
        {
          "t": "Justo al servir, vierte la crema cítrica por encima para que el pescado no se cocine de más.",
          "s": null
        },
        {
          "t": "Decora con cilantro picado y acompaña con el camote.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a batata-doce em rodelas em água com sal e deixe esfriar.",
          "s": 900
        },
        {
          "t": "Mantenha o filé de peixe bem gelado (pode deixar 10 min no congelador para cortar melhor).",
          "s": null
        },
        {
          "t": "Com uma faca bem afiada corte na diagonal em lâminas longas e finas, tipo sashimi.",
          "s": null
        },
        {
          "t": "Bata o suco de 2 limões com a pasta de ají amarillo, alho, uma pitada de gengibre e sal até emulsionar.",
          "s": null
        },
        {
          "t": "Arrume as lâminas estendidas num prato gelado, sem sobrepor demais, e salgue levemente.",
          "s": null
        },
        {
          "t": "Só na hora de servir despeje o creme cítrico por cima para o peixe não “cozinhar” demais.",
          "s": null
        },
        {
          "t": "Decore com coentro picado e acompanhe com a batata-doce.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil the sweet potato slices in salted water and let cool.",
          "s": 900
        },
        {
          "t": "Keep the fish fillet very cold (10 min in the freezer makes it easier to slice).",
          "s": null
        },
        {
          "t": "With a very sharp knife slice it at an angle into long thin sashimi-style strips.",
          "s": null
        },
        {
          "t": "Blend the juice of 2 limes with the ají amarillo paste, garlic, a pinch of ginger and salt until emulsified.",
          "s": null
        },
        {
          "t": "Lay the slices flat on a cold plate without overlapping much and salt lightly.",
          "s": null
        },
        {
          "t": "Pour the citrus cream over right when serving so the fish does not over-cure.",
          "s": null
        },
        {
          "t": "Garnish with chopped cilantro and serve with the sweet potato.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Tiradito de Pescado receta paso a paso"
  },
  {
    "id": "pe_11",
    "country": "PERUVIAN",
    "time": 22,
    "fav": false,
    "img": "images/pe_11.jpg",
    "title": {
      "es": "Tacu Tacu con Bistec",
      "pt": "Tacu Tacu com Bife",
      "en": "Peruvian Crispy Bean-Rice Cake"
    },
    "brTip": {
      "es": "¡Genial en Brasil para aprovechar arroz e feijão carioca del día anterior formando una tortilla crocante!",
      "pt": "Perfeito para aproveitar arroz e feijão carioca de ontem em formato de omelete crocante!",
      "en": "Brilliant way to turn leftover Brazilian rice and beans into a crispy skillet cake."
    },
    "macrosTrad": {
      "kcal": 859,
      "p": 72,
      "c": 74,
      "f": 29
    },
    "macrosFit": {
      "kcal": 785,
      "p": 76,
      "c": 60,
      "f": 25
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "patinho",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 60,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Aplasta ligeramente los frijoles cocidos con un tenedor (deben quedar algunos enteros) y ten listo el arroz cocido.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el ajo, el comino y la pasta de ají amarillo en sartén con unas gotas de aceite.",
          "s": 180
        },
        {
          "t": "Agrega los frijoles y el arroz y mezcla bien hasta formar una masa compacta y húmeda; sala.",
          "s": null
        },
        {
          "t": "En sartén antiadherente con el resto del aceite coloca la mezcla y, moviendo la sartén, dale forma de tortilla gruesa, doblando los bordes como un pastelito.",
          "s": 240
        },
        {
          "t": "Voltéala con ayuda de un plato y dora el otro lado hasta formar costra crocante.",
          "s": 240
        },
        {
          "t": "Aparte sella el bistec sazonado en plancha caliente por ambos lados y fríe el huevo dejando la yema blanda.",
          "s": 360
        },
        {
          "t": "Sirve el tacu tacu con el bistec y el huevo encima, y salsa criolla si tienes.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Amasse levemente o feijão cozido com um garfo (alguns grãos devem ficar inteiros) e tenha o arroz cozido pronto.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o alho, o cominho e a pasta de ají amarillo na frigideira com gotas de óleo.",
          "s": 180
        },
        {
          "t": "Junte o feijão e o arroz e misture bem até formar uma massa compacta e úmida; salgue.",
          "s": null
        },
        {
          "t": "Em frigideira antiaderente com o resto do óleo coloque a mistura e, balançando a frigideira, dê forma de omelete grossa, dobrando as bordas como um pastel.",
          "s": 240
        },
        {
          "t": "Vire com ajuda de um prato e doure o outro lado até formar uma casquinha crocante.",
          "s": 240
        },
        {
          "t": "À parte sele o bife temperado na chapa quente dos dois lados e frite o ovo deixando a gema mole.",
          "s": 360
        },
        {
          "t": "Sirva o tacu tacu com o bife e o ovo por cima, e molho criollo se tiver.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Lightly mash the cooked beans with a fork (some should stay whole) and have the cooked rice ready.",
          "s": null
        },
        {
          "t": "Sauté the onion, garlic, cumin and ají amarillo paste in a pan with a few drops of oil.",
          "s": 180
        },
        {
          "t": "Add the beans and rice and mix well into a compact, moist mass; salt it.",
          "s": null
        },
        {
          "t": "In a nonstick pan with the rest of the oil, add the mixture and, shaking the pan, shape it into a thick omelette, folding the edges like a turnover.",
          "s": 240
        },
        {
          "t": "Flip it with a plate and brown the other side until a crisp crust forms.",
          "s": 240
        },
        {
          "t": "Separately sear the seasoned steak on a hot griddle on both sides and fry the egg with a runny yolk.",
          "s": 360
        },
        {
          "t": "Serve the tacu tacu with the steak and egg on top, and onion relish if you have it.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Tacu Tacu con Bistec receta paso a paso"
  },
  {
    "id": "pe_12",
    "country": "PERUVIAN",
    "time": 28,
    "fav": false,
    "img": "images/pe_12.jpg",
    "title": {
      "es": "Arroz con Pollo Peruano (Verde)",
      "pt": "Arroz com Frango Verde Peruano",
      "en": "Peruvian Cilantro Chicken Rice"
    },
    "brTip": {
      "es": "El arroz verde peruano usa coentro fresco licuado (en Brasil venden maços grandes en cualquier feira/súper).",
      "pt": "Arroz verde feito com coentro fresco batido, cenoura e pimentão.",
      "en": "Vibrant green rice cooked with blended fresh cilantro, carrot, and pepper."
    },
    "macrosTrad": {
      "kcal": 646,
      "p": 49,
      "c": 61,
      "f": 23
    },
    "macrosFit": {
      "kcal": 544,
      "p": 67,
      "c": 53,
      "f": 6
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 165,
        "fitGrams": 180,
        "sub": null,
        "fitId": "frango"
      },
      {
        "id": "arroz_branco",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "cheiro_verde",
        "grams": 40,
        "fitGrams": 40,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 30,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa un manojo de cilantro con ½ taza de agua o caldo. Pica la cebolla y el ajo, la zanahoria en cubitos y el pimentón en tiras.",
          "s": null
        },
        {
          "t": "Sazona el pollo con sal y pimienta y dóralo en olla con unas gotas de aceite; retíralo.",
          "s": 360
        },
        {
          "t": "En la misma olla sofríe la cebolla, el ajo, la pasta de ají amarillo y el comino.",
          "s": 180
        },
        {
          "t": "Añade el cilantro licuado y fríe hasta que cambie a verde oscuro.",
          "s": 180
        },
        {
          "t": "Incorpora el arroz crudo lavado, la zanahoria, las arvejas, el choclo, el pimiento, el pollo y el caldo (2 partes por 1 de arroz); ajusta la sal.",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego bajo hasta que el arroz absorba el líquido.",
          "s": 960
        },
        {
          "t": "Apaga y deja reposar tapado; sirve con salsa criolla (cebolla y limón).",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Bata um maço de coentro com ½ xícara de água ou caldo. Pique a cebola e o alho, a cenoura em cubinhos e o pimentão em tiras.",
          "s": null
        },
        {
          "t": "Tempere o frango com sal e pimenta e doure na panela com gotas de óleo; retire.",
          "s": 360
        },
        {
          "t": "Na mesma panela refogue a cebola, o alho, a pasta de ají amarillo e o cominho.",
          "s": 180
        },
        {
          "t": "Junte o coentro batido e frite até ficar verde-escuro.",
          "s": 180
        },
        {
          "t": "Junte o arroz cru lavado, a cenoura, as ervilhas, o milho, o pimentão, o frango e o caldo (2 partes para 1 de arroz); acerte o sal.",
          "s": null
        },
        {
          "t": "Tampe e cozinhe em fogo baixo até o arroz absorver o líquido.",
          "s": 960
        },
        {
          "t": "Desligue e deixe descansar tampado; sirva com salsa criolla (cebola e limão).",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Blend a bunch of cilantro with ½ cup water or stock. Chop the onion and garlic, dice the carrot and cut the pepper into strips.",
          "s": null
        },
        {
          "t": "Season the chicken with salt and pepper and brown it in a pot with a few drops of oil; remove.",
          "s": 360
        },
        {
          "t": "In the same pot sauté the onion, garlic, ají amarillo paste and cumin.",
          "s": 180
        },
        {
          "t": "Add the blended cilantro and fry until it turns dark green.",
          "s": 180
        },
        {
          "t": "Add the washed raw rice, carrot, peas, corn, bell pepper, chicken and broth (2 parts to 1 of rice); adjust salt.",
          "s": null
        },
        {
          "t": "Cover and cook on low until the rice absorbs the liquid.",
          "s": 960
        },
        {
          "t": "Turn off and let it rest covered; serve with onion-lime relish.",
          "s": 300
        }
      ]
    },
    "videoQuery": "como hacer Arroz con Pollo Peruano (Verde) receta paso a paso"
  },
  {
    "id": "pe_13",
    "country": "PERUVIAN",
    "time": 22,
    "fav": false,
    "img": "images/pe_13.jpg",
    "title": {
      "es": "Sudado de Pescado",
      "pt": "Sudado de Peixe Peruano",
      "en": "Peruvian Steamed Tomato Fish"
    },
    "brTip": {
      "es": "Pescado cocido en sus propios jugos sobre cebolla morada, tomate y mandioca cocida.",
      "pt": "Peixe cozido no próprio vapor sobre cebola roxa, tomate, coentro e mandioca.",
      "en": "Fish gently braised in its own juices with red onion, tomato, and cassava."
    },
    "macrosTrad": {
      "kcal": 382,
      "p": 39,
      "c": 49,
      "f": 4
    },
    "macrosFit": {
      "kcal": 376,
      "p": 43,
      "c": 43,
      "f": 4
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 200,
        "sub": {
          "es": "En Brasil: Tilápia ou pescada",
          "pt": "No Brasil: Tilápia ou pescada",
          "en": "In Brazil: Tilápia ou pescada"
        },
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 110,
        "fitGrams": 125,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 80,
        "fitGrams": 90,
        "sub": {
          "es": "En Brasil: Cebola roxa",
          "pt": "No Brasil: Cebola roxa",
          "en": "In Brazil: Cebola roxa"
        },
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela la yuca, córtala en trozos y cuécela en agua con sal hasta que esté tierna.",
          "s": 1200
        },
        {
          "t": "Sazona los filetes de pescado con ajo, sal, pimienta y comino.",
          "s": null
        },
        {
          "t": "Corta la cebolla y el tomate en gajos gruesos.",
          "s": null
        },
        {
          "t": "En una sartén honda con unas gotas de aceite sofríe ajo, la cebolla y el ají amarillo en tiras.",
          "s": 120
        },
        {
          "t": "Acomoda el pescado encima y cúbrelo con los gajos de tomate.",
          "s": null
        },
        {
          "t": "Agrega ⅓ de taza de caldo o agua y un chorrito de chicha de jora (o vinagre); tapa bien y cocina a fuego medio sin mover.",
          "s": 480
        },
        {
          "t": "Destapa, añade cilantro fresco y gotas de limón; sirve con la yuca y su jugo.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Descasque a mandioca, corte em pedaços e cozinhe em água com sal até ficar macia.",
          "s": 1200
        },
        {
          "t": "Tempere os filés de peixe com alho, sal, pimenta e cominho.",
          "s": null
        },
        {
          "t": "Corte a cebola e o tomate em gomos grossos.",
          "s": null
        },
        {
          "t": "Numa frigideira funda com gotas de óleo refogue alho, a cebola e o ají amarillo em tiras.",
          "s": 120
        },
        {
          "t": "Coloque o peixe por cima e cubra com os gomos de tomate.",
          "s": null
        },
        {
          "t": "Junte ⅓ de xícara de caldo ou água e um pouco de chicha de jora (ou vinagre); tampe bem e cozinhe em fogo médio sem mexer.",
          "s": 480
        },
        {
          "t": "Destampe, acrescente coentro fresco e gotas de limão; sirva com a mandioca e o caldinho.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Peel the cassava, cut into chunks and boil in salted water until tender.",
          "s": 1200
        },
        {
          "t": "Season the fish fillets with garlic, salt, pepper and cumin.",
          "s": null
        },
        {
          "t": "Cut the onion and tomato into thick wedges.",
          "s": null
        },
        {
          "t": "In a deep pan with a few drops of oil sauté garlic, the onion and the ají amarillo strips.",
          "s": 120
        },
        {
          "t": "Lay the fish on top and cover with the tomato wedges.",
          "s": null
        },
        {
          "t": "Add ⅓ cup of broth or water and a splash of chicha de jora (or vinegar); cover tightly and cook over medium heat without stirring.",
          "s": 480
        },
        {
          "t": "Uncover, add fresh cilantro and a few drops of lime; serve with the cassava and the broth.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Sudado de Pescado receta paso a paso"
  },
  {
    "id": "pe_14",
    "country": "PERUVIAN",
    "time": 20,
    "fav": false,
    "img": "images/pe_14.jpg",
    "title": {
      "es": "Anticuchos Peruanos a la Parrilla",
      "pt": "Espetinho Anticucho Peruano",
      "en": "Peruvian Spiced Grill Skewers"
    },
    "brTip": {
      "es": "Tradicional con corazón de res en cubos marinado en ají panca, vinagre, comino y ajo; servido con papa y choclo. En Brasil: coração bovino.",
      "pt": "Tradicional com coração bovino em cubos marinado em ají panca, vinagre, cominho e alho; servido com batata e milho.",
      "en": "Traditionally beef heart cubes marinated in ají panca, vinegar, cumin and garlic; served with potato and corn."
    },
    "macrosTrad": {
      "kcal": 452,
      "p": 35,
      "c": 38,
      "f": 18
    },
    "macrosFit": {
      "kcal": 399,
      "p": 37,
      "c": 32,
      "f": 13
    },
    "ingredients": [
      {
        "id": "corazon_res",
        "grams": 170,
        "fitGrams": 185,
        "sub": {
          "es": "En Brasil: Coração bovino",
          "pt": "No Brasil: Coração bovino",
          "en": "In Brazil: Coração bovino"
        },
        "fitId": null
      },
      {
        "id": "aji_panca",
        "grams": 20,
        "fitGrams": 25,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta",
          "pt": "No Brasil: Páprica defumada + pimenta",
          "en": "In Brazil: Páprica defumada + pimenta"
        },
        "fitId": null
      },
      {
        "id": "vinagre",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Mezcla el ají panca, 2 cdas de vinagre tinto, 3 dientes de ajo machacados, 1 cdta de comino, orégano, el aceite y sal.",
          "s": null
        },
        {
          "t": "Limpia el corazón de res (retira grasa y nervios), córtalo en cubos de 3 cm y báñalos con la marinada.",
          "s": null
        },
        {
          "t": "Deja marinar (si usas brochetas de madera, remójalas en agua mientras tanto).",
          "s": 1200
        },
        {
          "t": "Cuece las papas en rodajas gruesas y el choclo en agua con sal; luego dora las papas en sartén.",
          "s": 900
        },
        {
          "t": "Ensarta 3–4 cubos de carne en cada brocheta.",
          "s": null
        },
        {
          "t": "Asa en sartén grill muy caliente, pincelando con la marinada, por todos los lados.",
          "s": 360
        },
        {
          "t": "Sirve con las papas doradas, el choclo y salsa de ají.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture o ají panca, 2 colheres de vinagre tinto, 3 dentes de alho amassados, 1 colher de chá de cominho, orégano, o óleo e sal.",
          "s": null
        },
        {
          "t": "Limpe o coração bovino (tire gordura e nervos), corte em cubos de 3 cm e cubra com a marinada.",
          "s": null
        },
        {
          "t": "Deixe marinar (se usar espetos de madeira, deixe-os de molho na água enquanto isso).",
          "s": 1200
        },
        {
          "t": "Cozinhe as batatas em rodelas grossas e o milho em água com sal; depois doure as batatas na frigideira.",
          "s": 900
        },
        {
          "t": "Espete 3–4 cubos de carne em cada espeto.",
          "s": null
        },
        {
          "t": "Grelhe em frigideira grill bem quente, pincelando com a marinada, por todos os lados.",
          "s": 360
        },
        {
          "t": "Sirva com as batatas douradas, o milho e molho de ají.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Mix the ají panca, 2 tbsp red wine vinegar, 3 crushed garlic cloves, 1 tsp cumin, oregano, the oil and salt.",
          "s": null
        },
        {
          "t": "Trim the beef heart of fat and sinew, cut into 3 cm cubes and coat with the marinade.",
          "s": null
        },
        {
          "t": "Marinate (if using wooden skewers, soak them in water meanwhile).",
          "s": 1200
        },
        {
          "t": "Boil the thick potato slices and the corn in salted water; then brown the potatoes in a pan.",
          "s": 900
        },
        {
          "t": "Thread 3–4 beef cubes onto each skewer.",
          "s": null
        },
        {
          "t": "Grill in a very hot grill pan, brushing with marinade, on all sides.",
          "s": 360
        },
        {
          "t": "Serve with the golden potatoes, the corn and ají sauce.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Anticuchos Peruanos a la Parrilla receta paso a paso"
  },
  {
    "id": "pe_15",
    "country": "PERUVIAN",
    "time": 28,
    "fav": false,
    "img": "images/pe_15.jpg",
    "title": {
      "es": "Aguadito de Pollo",
      "pt": "Aguadito de Frango (Sopa Verde)",
      "en": "Peruvian Cilantro Chicken Soup"
    },
    "brTip": {
      "es": "Sopa espesa verde de pollo con arroz, zanahoria, milho verde y cilantro.",
      "pt": "Sopa verde encorpada de frango com arroz, cenoura, milho e coentro.",
      "en": "Hearty cilantro-broth soup with chicken, rice, carrot, and corn."
    },
    "macrosTrad": {
      "kcal": 466,
      "p": 56,
      "c": 49,
      "f": 5
    },
    "macrosFit": {
      "kcal": 467,
      "p": 61,
      "c": 43,
      "f": 6
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 70,
        "fitGrams": 55,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "cheiro_verde",
        "grams": 35,
        "fitGrams": 35,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 20,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa un manojo de cilantro con ½ taza de agua hasta quedar bien verde. Pica cebolla y ajo, corta el pollo y la zanahoria en cubos y lava el arroz.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el ajo y el pollo en olla con unas gotas de aceite.",
          "s": 240
        },
        {
          "t": "Añade el cilantro licuado y la pasta de ají amarillo y fríe.",
          "s": 120
        },
        {
          "t": "Agrega 900 ml de agua o caldo, el arroz, la zanahoria, las arvejas, el choclo y el pimiento; sala.",
          "s": null
        },
        {
          "t": "Cocina a fuego medio hasta que el arroz esté suave y el caldo espese ligeramente.",
          "s": 1080
        },
        {
          "t": "Ajusta la sal; si espesó demasiado, añade un poco de agua caliente.",
          "s": null
        },
        {
          "t": "Sirve bien caliente con limón exprimido al momento.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Bata um maço de coentro com ½ xícara de água até ficar bem verde. Pique cebola e alho, corte o frango e a cenoura em cubos e lave o arroz.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o alho e o frango na panela com gotas de óleo.",
          "s": 240
        },
        {
          "t": "Junte o coentro batido e a pasta de ají amarillo e frite.",
          "s": 120
        },
        {
          "t": "Junte 900 ml de água ou caldo, o arroz, a cenoura, as ervilhas, o milho e o pimentão; salgue.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo médio até o arroz ficar macio e o caldo engrossar levemente.",
          "s": 1080
        },
        {
          "t": "Acerte o sal; se engrossou demais, junte um pouco de água quente.",
          "s": null
        },
        {
          "t": "Sirva bem quente com limão espremido na hora.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Blend a bunch of cilantro with ½ cup water until bright green. Chop onion and garlic, cube the chicken and carrot and rinse the rice.",
          "s": null
        },
        {
          "t": "Sauté the onion, garlic and chicken in a pot with a few drops of oil.",
          "s": 240
        },
        {
          "t": "Add the blended cilantro and the ají amarillo paste and fry.",
          "s": 120
        },
        {
          "t": "Add 900 ml of water or broth, the rice, carrot, peas, corn and bell pepper; salt.",
          "s": null
        },
        {
          "t": "Cook over medium heat until the rice is soft and the broth slightly thickened.",
          "s": 1080
        },
        {
          "t": "Adjust the salt; add a little hot water if it got too thick.",
          "s": null
        },
        {
          "t": "Serve piping hot with freshly squeezed lime.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Aguadito de Pollo receta paso a paso"
  },
  {
    "id": "pe_16",
    "country": "PERUVIAN",
    "time": 22,
    "fav": false,
    "img": "images/pe_16.jpg",
    "title": {
      "es": "Quinotto Peruano Cremoso",
      "pt": "Quinoto Peruano Cremoso",
      "en": "Peruvian Creamy Quinoa Risotto"
    },
    "brTip": {
      "es": "Quinua cocida como risotto con ají amarillo, queso y leche evaporada. En Brasil la quinoa está en la sección natural del súper.",
      "pt": "Quinoa cozida como risoto com ají amarillo, queijo e leite evaporado. No Brasil a quinoa fica na seção natural do mercado.",
      "en": "Quinoa cooked like risotto with ají amarillo, cheese and evaporated milk. In Brazil quinoa is in the natural foods aisle."
    },
    "macrosTrad": {
      "kcal": 603,
      "p": 54,
      "c": 43,
      "f": 23
    },
    "macrosFit": {
      "kcal": 459,
      "p": 52,
      "c": 35,
      "f": 11
    },
    "ingredients": [
      {
        "id": "quinua",
        "grams": 150,
        "fitGrams": 120,
        "sub": {
          "es": "En Brasil: Quinoa (mercado natural)",
          "pt": "No Brasil: Quinoa (mercado natural)",
          "en": "In Brazil: Quinoa (mercado natural)"
        },
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 30,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Parmesão ou queijo minas",
          "pt": "No Brasil: Parmesão ou queijo minas",
          "en": "In Brazil: Parmesão ou queijo minas"
        },
        "fitId": "ricota"
      },
      {
        "id": "leite_evaporado",
        "grams": 40,
        "fitGrams": 40,
        "sub": {
          "es": "En Brasil: Leite integral + creme de leite",
          "pt": "No Brasil: Leite integral + creme de leite",
          "en": "In Brazil: Leite integral + creme de leite"
        },
        "fitId": "leite_desnatado"
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "manteiga",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Lava muy bien la quinua bajo el grifo en colador fino para quitarle el amargor de la saponina.",
          "s": null
        },
        {
          "t": "Calienta caldo en una ollita y mantenlo caliente. Pica cebolla, ajo y tomate.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el ajo y la pasta de ají amarillo en la mantequilla y agrega la quinua escurrida.",
          "s": 180
        },
        {
          "t": "Añade el caldo caliente poco a poco, como un risotto, removiendo hasta que el grano se abra y muestre su “colita”.",
          "s": 900
        },
        {
          "t": "Baja el fuego e incorpora el queso rallado y la leche evaporada hasta lograr textura cremosa; sala.",
          "s": 120
        },
        {
          "t": "Aparte sella el pollo en tiras sazonado con sal y pimienta hasta dorar.",
          "s": 360
        },
        {
          "t": "Sirve el quinotto con el pollo encima y el tomate picado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Lave muito bem a quinoa sob a torneira em peneira fina para tirar o amargor da saponina.",
          "s": null
        },
        {
          "t": "Aqueça caldo numa panelinha e mantenha quente. Pique cebola, alho e tomate.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o alho e a pasta de ají amarillo na manteiga e junte a quinoa escorrida.",
          "s": 180
        },
        {
          "t": "Acrescente o caldo quente aos poucos, como risoto, mexendo até o grão abrir e mostrar o “rabinho”.",
          "s": 900
        },
        {
          "t": "Abaixe o fogo e junte o queijo ralado e o leite evaporado até ficar cremoso; salgue.",
          "s": 120
        },
        {
          "t": "À parte sele o frango em tiras temperado com sal e pimenta até dourar.",
          "s": 360
        },
        {
          "t": "Sirva o quinotto com o frango por cima e o tomate picado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Rinse the quinoa very well in a fine sieve to remove the bitter saponin.",
          "s": null
        },
        {
          "t": "Heat stock in a small pot and keep it hot. Chop onion, garlic and tomato.",
          "s": null
        },
        {
          "t": "Sauté the onion, garlic and ají amarillo paste in the butter and add the drained quinoa.",
          "s": 180
        },
        {
          "t": "Add the hot stock little by little, risotto-style, stirring until the grain opens and shows its little “tail”.",
          "s": 900
        },
        {
          "t": "Lower the heat and stir in the grated cheese and evaporated milk until creamy; salt.",
          "s": 120
        },
        {
          "t": "Separately sear the chicken strips seasoned with salt and pepper until golden.",
          "s": 360
        },
        {
          "t": "Serve the quinotto with the chicken on top and the chopped tomato.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Quinotto Peruano Cremoso receta paso a paso"
  },
  {
    "id": "pe_17",
    "country": "PERUVIAN",
    "time": 20,
    "fav": false,
    "img": "images/pe_17.jpg",
    "title": {
      "es": "Salchipapa Peruana (Clásica o Fit)",
      "pt": "Salchipapa Peruana",
      "en": "Peruvian Crispy Fries & Sausage"
    },
    "brTip": {
      "es": "Original con salchicha tipo hot dog y papas fritas, con mayonesa, ketchup y crema de ají. En Brasil: salsicha. Modo fit: pechuga en tiras.",
      "pt": "Original com salsicha tipo hot dog e batata frita, com maionese, ketchup e creme de ají. Modo fit: peito de frango em tiras.",
      "en": "Made with hot dog sausage and fries, with mayo, ketchup and ají cream. Fit mode: chicken breast strips."
    },
    "macrosTrad": {
      "kcal": 775,
      "p": 19,
      "c": 36,
      "f": 63
    },
    "macrosFit": {
      "kcal": 424,
      "p": 53,
      "c": 25,
      "f": 12
    },
    "ingredients": [
      {
        "id": "salchicha",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": "frango"
      },
      {
        "id": "batata",
        "grams": 170,
        "fitGrams": 135,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "maionesa",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "tomate",
        "grams": 20,
        "fitGrams": 25,
        "sub": {
          "es": "En Brasil: Ketchup",
          "pt": "No Brasil: Ketchup",
          "en": "In Brazil: Ketchup"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela (o lava bien) las papas y córtalas en bastones parejos; sécalas con un paño.",
          "s": null
        },
        {
          "t": "Cocínalas en airfryer a 200 °C (o fríelas) agitando la canasta a mitad de tiempo, hasta que estén bien doradas y crocantes.",
          "s": 960
        },
        {
          "t": "Corta las salchichas en rodajas diagonales.",
          "s": null
        },
        {
          "t": "Dórala en sartén con unas gotas de aceite hasta caramelizar los bordes.",
          "s": 300
        },
        {
          "t": "Prepara una ensaladita de repollo y tomate con limón y sal.",
          "s": null
        },
        {
          "t": "Sala las papas calientes y mézclalas con la carne en un plato amplio.",
          "s": null
        },
        {
          "t": "Sirve con mayonesa, ketchup, mostaza y crema de ají, y la ensalada al lado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Descasque (ou lave bem) as batatas e corte em palitos iguais; seque com um pano.",
          "s": null
        },
        {
          "t": "Cozinhe na airfryer a 200 °C (ou frite) sacudindo o cesto na metade do tempo, até ficarem bem douradas e crocantes.",
          "s": 960
        },
        {
          "t": "Corte as salsichas em rodelas diagonais.",
          "s": null
        },
        {
          "t": "Doure na frigideira com gotas de óleo até caramelizar as bordas.",
          "s": 300
        },
        {
          "t": "Prepare uma saladinha de repolho e tomate com limão e sal.",
          "s": null
        },
        {
          "t": "Salgue as batatas quentes e misture com a carne num prato grande.",
          "s": null
        },
        {
          "t": "Sirva com maionese, ketchup, mostarda e creme de ají, e a salada ao lado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Peel (or scrub) the potatoes and cut into even sticks; pat dry with a towel.",
          "s": null
        },
        {
          "t": "Air-fry at 200 °C (or deep-fry), shaking the basket halfway, until deep golden and crisp.",
          "s": 960
        },
        {
          "t": "Slice the sausages diagonally.",
          "s": null
        },
        {
          "t": "Brown it in a pan with a few drops of oil until the edges caramelize.",
          "s": 300
        },
        {
          "t": "Make a little cabbage and tomato salad with lime and salt.",
          "s": null
        },
        {
          "t": "Salt the hot fries and toss with the meat on a large plate.",
          "s": null
        },
        {
          "t": "Serve with mayonnaise, ketchup, mustard and ají cream, with the salad on the side.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Salchipapa Peruana (Clásica o Fit) receta paso a paso"
  },
  {
    "id": "pe_18",
    "country": "PERUVIAN",
    "time": 22,
    "fav": false,
    "img": "images/pe_18.jpg",
    "title": {
      "es": "Escabeche de Pescado Peruano",
      "pt": "Escabeche de Peixe Peruano",
      "en": "Peruvian Pickled Onion Fish"
    },
    "brTip": {
      "es": "Pescado frito cubierto con cebolla encurtida tibia en vinagre y ají panca, con camote, huevo, aceituna y queso fresco.",
      "pt": "Peixe frito coberto com cebola em conserva morna no vinagre e ají panca, com batata-doce, ovo, azeitona e queijo fresco.",
      "en": "Fried fish topped with warm pickled onion in vinegar and ají panca, with sweet potato, egg, olive and queso fresco."
    },
    "macrosTrad": {
      "kcal": 548,
      "p": 47,
      "c": 32,
      "f": 26
    },
    "macrosFit": {
      "kcal": 476,
      "p": 50,
      "c": 29,
      "f": 17
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 175,
        "fitGrams": 195,
        "sub": {
          "es": "En Brasil: Tilápia ou pescada",
          "pt": "No Brasil: Tilápia ou pescada",
          "en": "In Brazil: Tilápia ou pescada"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 100,
        "fitGrams": 115,
        "sub": {
          "es": "En Brasil: Cebola roxa",
          "pt": "No Brasil: Cebola roxa",
          "en": "In Brazil: Cebola roxa"
        },
        "fitId": null
      },
      {
        "id": "aji_panca",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta",
          "pt": "No Brasil: Páprica defumada + pimenta",
          "en": "In Brazil: Páprica defumada + pimenta"
        },
        "fitId": null
      },
      {
        "id": "vinagre",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata_doce",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 20,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece el camote en rodajas y el huevo (10 min) en agua con sal.",
          "s": 900
        },
        {
          "t": "Sazona los filetes de pescado con sal, pimienta y ajo.",
          "s": null
        },
        {
          "t": "Dóralos en sartén con parte del aceite por ambos lados y colócalos en una fuente.",
          "s": 360
        },
        {
          "t": "En la misma sartén saltea la cebolla morada en gajos gruesos; debe quedar algo crocante.",
          "s": 180
        },
        {
          "t": "Añade la pasta de ají panca, 1 cdta de comino, el vinagre y 2 cdas de agua; hierve.",
          "s": 120
        },
        {
          "t": "Cubre el pescado con esta cebolla tibia y deja reposar para que se impregne.",
          "s": 300
        },
        {
          "t": "Sirve con el camote, el huevo duro en cuartos, las aceitunas y el queso fresco.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a batata-doce em rodelas e o ovo (10 min) em água com sal.",
          "s": 900
        },
        {
          "t": "Tempere os filés de peixe com sal, pimenta e alho.",
          "s": null
        },
        {
          "t": "Doure na frigideira com parte do azeite dos dois lados e coloque numa travessa.",
          "s": 360
        },
        {
          "t": "Na mesma frigideira salteie a cebola roxa em gomos grossos; deve ficar um pouco crocante.",
          "s": 180
        },
        {
          "t": "Junte a pasta de ají panca, 1 colher de chá de cominho, o vinagre e 2 colheres de água; ferva.",
          "s": 120
        },
        {
          "t": "Cubra o peixe com essa cebola morna e deixe descansar para pegar sabor.",
          "s": 300
        },
        {
          "t": "Sirva com a batata-doce, o ovo cozido em quartos, as azeitonas e o queijo fresco.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil the sweet potato slices and the egg (10 min) in salted water.",
          "s": 900
        },
        {
          "t": "Season the fish fillets with salt, pepper and garlic.",
          "s": null
        },
        {
          "t": "Brown them in a pan with some of the oil on both sides and place in a dish.",
          "s": 360
        },
        {
          "t": "In the same pan sauté the red onion in thick wedges; it should stay a bit crunchy.",
          "s": 180
        },
        {
          "t": "Add the ají panca paste, 1 tsp cumin, the vinegar and 2 tbsp water; boil.",
          "s": 120
        },
        {
          "t": "Cover the fish with the warm onion and let it rest to soak up the flavor.",
          "s": 300
        },
        {
          "t": "Serve with the sweet potato, quartered hard-boiled egg, olives and queso fresco.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Escabeche de Pescado Peruano receta paso a paso"
  },
  {
    "id": "pe_19",
    "country": "PERUVIAN",
    "time": 25,
    "fav": false,
    "img": "images/pe_19.jpg",
    "title": {
      "es": "Parihuela Peruana (Sopa Marinera)",
      "pt": "Parihuela (Caldo de Peixe e Camarão)",
      "en": "Peruvian Seafood Soup"
    },
    "brTip": {
      "es": "Sopa concentrada de pescado, camarón, mariscos y calamar con ají panca y ají amarillo. En Brasil: mexilhão y lula congelados.",
      "pt": "Sopa concentrada de peixe, camarão, mariscos e lula com ají panca e ají amarillo. No Brasil: mexilhão e lula congelados.",
      "en": "Rich soup of fish, shrimp, shellfish and squid with ají panca and ají amarillo. In Brazil: frozen mussels and squid."
    },
    "macrosTrad": {
      "kcal": 425,
      "p": 52,
      "c": 43,
      "f": 5
    },
    "macrosFit": {
      "kcal": 429,
      "p": 56,
      "c": 39,
      "f": 6
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 120,
        "fitGrams": 130,
        "sub": {
          "es": "En Brasil: Tilápia ou pescada",
          "pt": "No Brasil: Tilápia ou pescada",
          "en": "In Brazil: Tilápia ou pescada"
        },
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mariscos",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "calamar",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": {
          "es": "En Brasil: Cebola roxa",
          "pt": "No Brasil: Cebola roxa",
          "en": "In Brazil: Cebola roxa"
        },
        "fitId": null
      },
      {
        "id": "aji_panca",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta",
          "pt": "No Brasil: Páprica defumada + pimenta",
          "en": "In Brazil: Páprica defumada + pimenta"
        },
        "fitId": null
      },
      {
        "id": "aji_amarillo",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Pimentão amarelo + pimenta",
          "pt": "No Brasil: Pimentão amarelo + pimenta",
          "en": "In Brazil: Pimentão amarelo + pimenta"
        },
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela la yuca, córtala en trozos y cuécela en agua con sal.",
          "s": 1200
        },
        {
          "t": "Corta el pescado en trozos grandes y firmes; pica la cebolla morada, el ajo y el tomate.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el ajo, el tomate, el ají panca y el ají amarillo en olla con unas gotas de aceite hasta formar una pasta espesa.",
          "s": 300
        },
        {
          "t": "Agrega 700 ml de caldo de pescado o agua caliente y hierve para concentrar sabores; sala.",
          "s": 480
        },
        {
          "t": "Incorpora el pescado y cocina sin remover mucho para que no se deshaga.",
          "s": 240
        },
        {
          "t": "Añade los camarones, los mariscos y el calamar solo al final, hasta que los camarones se pongan rosados.",
          "s": 120
        },
        {
          "t": "Sirve bien caliente con cilantro fresco, limón y la yuca.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Descasque a mandioca, corte em pedaços e cozinhe em água com sal.",
          "s": 1200
        },
        {
          "t": "Corte o peixe em pedaços grandes e firmes; pique a cebola roxa, o alho e o tomate.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o alho, o tomate, o ají panca e o ají amarillo na panela com gotas de óleo até formar uma pasta grossa.",
          "s": 300
        },
        {
          "t": "Junte 700 ml de caldo de peixe ou água quente e ferva para concentrar os sabores; salgue.",
          "s": 480
        },
        {
          "t": "Acrescente o peixe e cozinhe sem mexer muito para não desmanchar.",
          "s": 240
        },
        {
          "t": "Junte os camarões, os mariscos e a lula só no final, até os camarões ficarem rosados.",
          "s": 120
        },
        {
          "t": "Sirva bem quente com coentro fresco, limão e a mandioca.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Peel the cassava, cut into chunks and boil in salted water.",
          "s": 1200
        },
        {
          "t": "Cut the fish into large firm pieces; chop the red onion, garlic and tomato.",
          "s": null
        },
        {
          "t": "Sauté the onion, garlic, tomato, ají panca and ají amarillo in a pot with a few drops of oil into a thick paste.",
          "s": 300
        },
        {
          "t": "Add 700 ml fish stock or hot water and simmer to concentrate the flavors; salt it.",
          "s": 480
        },
        {
          "t": "Add the fish and cook without stirring much so it does not break apart.",
          "s": 240
        },
        {
          "t": "Add the shrimp, shellfish and squid only at the end, until the shrimp turn pink.",
          "s": 120
        },
        {
          "t": "Serve piping hot with fresh cilantro, lime and the cassava.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Parihuela Peruana (Sopa Marinera) receta paso a paso"
  },
  {
    "id": "pe_20",
    "country": "PERUVIAN",
    "time": 28,
    "fav": false,
    "img": "images/pe_20.jpg",
    "title": {
      "es": "Chupe de Camarones",
      "pt": "Chupe de Camarões",
      "en": "Peruvian Shrimp Chowder (Chupe)"
    },
    "brTip": {
      "es": "Sopa cremosa de camarones con ají panca, leche evaporada, huevo, queso fresco, papa y choclo. En Brasil: queijo minas frescal.",
      "pt": "Sopa cremosa de camarão com ají panca, leite evaporado, ovo, queijo fresco, batata e milho. No Brasil: queijo minas frescal.",
      "en": "Creamy shrimp soup with ají panca, evaporated milk, egg, queso fresco, potato and corn. In Brazil: minas frescal cheese."
    },
    "macrosTrad": {
      "kcal": 578,
      "p": 47,
      "c": 59,
      "f": 18
    },
    "macrosFit": {
      "kcal": 453,
      "p": 45,
      "c": 49,
      "f": 9
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 130,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite_evaporado",
        "grams": 60,
        "fitGrams": 60,
        "sub": {
          "es": "En Brasil: Leite integral + creme de leite",
          "pt": "No Brasil: Leite integral + creme de leite",
          "en": "In Brazil: Leite integral + creme de leite"
        },
        "fitId": "leite_desnatado"
      },
      {
        "id": "ovo",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 30,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "milho",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 30,
        "fitGrams": 25,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "aji_panca",
        "grams": 8,
        "fitGrams": 9,
        "sub": {
          "es": "En Brasil: Páprica defumada + pimenta",
          "pt": "No Brasil: Páprica defumada + pimenta",
          "en": "In Brazil: Páprica defumada + pimenta"
        },
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela y corta las papas en cubos; pica la cebolla, el ajo y el tomate; corta el queso en cubitos.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el ajo, el tomate y la pasta de ají panca en olla con unas gotas de aceite.",
          "s": 240
        },
        {
          "t": "Agrega 700 ml de caldo o agua, las papas, 2 cdas de arroz crudo y el choclo; sala.",
          "s": null
        },
        {
          "t": "Cocina hasta que la papa esté suave.",
          "s": 840
        },
        {
          "t": "Baja el fuego y añade los camarones, la leche evaporada y el queso; cocina sin dejar que hierva fuerte para que la leche no se corte.",
          "s": 180
        },
        {
          "t": "Rompe el huevo dentro del caldo caliente sin revolver (o sirve un huevo pochado encima) y deja cuajar.",
          "s": 120
        },
        {
          "t": "Termina con orégano seco frotado entre las manos y sirve bien caliente.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Descasque e corte as batatas em cubos; pique a cebola, o alho e o tomate; corte o queijo em cubinhos.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o alho, o tomate e a pasta de ají panca na panela com gotas de óleo.",
          "s": 240
        },
        {
          "t": "Junte 700 ml de caldo ou água, as batatas, 2 colheres de arroz cru e o milho; salgue.",
          "s": null
        },
        {
          "t": "Cozinhe até a batata ficar macia.",
          "s": 840
        },
        {
          "t": "Abaixe o fogo e junte os camarões, o leite evaporado e o queijo; cozinhe sem ferver forte para o leite não talhar.",
          "s": 180
        },
        {
          "t": "Quebre o ovo dentro do caldo quente sem mexer (ou sirva um ovo pochê por cima) e deixe firmar.",
          "s": 120
        },
        {
          "t": "Finalize com orégano seco esfregado entre as mãos e sirva bem quente.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Peel and cube the potatoes; chop the onion, garlic and tomato; dice the cheese.",
          "s": null
        },
        {
          "t": "Sauté the onion, garlic, tomato and ají panca paste in a pot with a few drops of oil.",
          "s": 240
        },
        {
          "t": "Add 700 ml stock or water, the potatoes, 2 tbsp raw rice and the corn; salt it.",
          "s": null
        },
        {
          "t": "Cook until the potato is tender.",
          "s": 840
        },
        {
          "t": "Lower the heat and add the shrimp, evaporated milk and cheese; do not boil hard so the milk does not curdle.",
          "s": 180
        },
        {
          "t": "Crack the egg into the hot broth without stirring (or top with a poached egg) and let it set.",
          "s": 120
        },
        {
          "t": "Finish with dried oregano rubbed between your palms and serve piping hot.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Chupe de Camarones receta paso a paso"
  },
  {
    "id": "co_1",
    "country": "COLOMBIAN",
    "time": 35,
    "fav": true,
    "img": "images/co_1.jpg",
    "title": {
      "es": "Bandeja Paisa Colombiana",
      "pt": "Bandeja Paisa Colombiana",
      "en": "Colombian Bandeja Paisa"
    },
    "brTip": {
      "es": "En Brasil: frijoles cargamanto → feijão carioca o vermelho; harina PAN para arepa → flocão de milho hidratado; plátano → banana-da-terra; chicharrón → panceta/lombo crocante.",
      "pt": "No Brasil: feijão carioca/vermelho, flocão de milho para arepa, banana-da-terra e lombo/torresmo.",
      "en": "In Brazil: carioca/red beans, hydrated flocão cornmeal arepa, banana-da-terra, and pork."
    },
    "macrosTrad": {
      "kcal": 1452,
      "p": 74,
      "c": 114,
      "f": 77
    },
    "macrosFit": {
      "kcal": 1166,
      "p": 70,
      "c": 91,
      "f": 58
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 100,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "panceta",
        "grams": 80,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 50,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 140,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 80,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "harina_pan",
        "grams": 40,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Flocão de milho",
          "pt": "No Brasil: Flocão de milho",
          "en": "In Brazil: Flocão de milho"
        },
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 20,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece los frijoles con zanahoria rallada y cebolla hasta que el caldo quede espeso (si ya están cocidos, hiérvelos con hogao para espesar).",
          "s": 600
        },
        {
          "t": "Cocina el arroz si no lo tienes listo.",
          "s": 1080
        },
        {
          "t": "Arepa: hidrata la harina de maíz precocida con agua tibia y sal, forma un disco y ásalo en sartén por ambos lados.",
          "s": 480
        },
        {
          "t": "Chicharrón: corta la panceta en tiras, sálala y cocínala en airfryer a 200 °C (o fríela) hasta que quede crocante; dora también el chorizo.",
          "s": 720
        },
        {
          "t": "Saltea la carne molida con cebolla, ajo, comino y sal hasta que quede suelta y dorada.",
          "s": 300
        },
        {
          "t": "Dora las rodajas de plátano maduro por ambos lados y fríe el huevo con la yema blanda.",
          "s": 300
        },
        {
          "t": "Sirve todo en un plato amplio: arroz, frijoles, carne molida, cerdo crocante, huevo encima, arepa, plátano y gajos de aguacate.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o feijão com cenoura ralada e cebola até o caldo engrossar (se já estiver cozido, ferva com hogao para engrossar).",
          "s": 600
        },
        {
          "t": "Cozinhe o arroz se não tiver pronto.",
          "s": 1080
        },
        {
          "t": "Arepa: hidrate a farinha de milho pré-cozida com água morna e sal, forme um disco e asse na frigideira dos dois lados.",
          "s": 480
        },
        {
          "t": "Torresmo: corte a panceta em tiras, salgue e asse na airfryer a 200 °C (ou frite) até ficar crocante; doure também a linguiça.",
          "s": 720
        },
        {
          "t": "Salteie a carne moída com cebola, alho, cominho e sal até ficar soltinha e dourada.",
          "s": 300
        },
        {
          "t": "Doure as rodelas de banana-da-terra madura dos dois lados e frite o ovo com a gema mole.",
          "s": 300
        },
        {
          "t": "Sirva tudo num prato grande: arroz, feijão, carne moída, porco crocante, ovo por cima, arepa, banana e gomos de abacate.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Simmer the beans with grated carrot and onion until the broth thickens (if precooked, boil them with hogao to thicken).",
          "s": 600
        },
        {
          "t": "Cook the rice if not ready.",
          "s": 1080
        },
        {
          "t": "Arepa: mix the precooked corn flour with warm water and salt, shape a disc and cook it in a pan on both sides.",
          "s": 480
        },
        {
          "t": "Chicharrón: cut the pork belly into strips, salt and air-fry at 200 °C (or fry) until crisp; brown the chorizo too.",
          "s": 720
        },
        {
          "t": "Sauté the ground beef with onion, garlic, cumin and salt until crumbly and browned.",
          "s": 300
        },
        {
          "t": "Brown the ripe plantain slices on both sides and fry the egg with a runny yolk.",
          "s": 300
        },
        {
          "t": "Serve everything on a large plate: rice, beans, ground beef, crispy pork, egg on top, arepa, plantain and avocado wedges.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Bandeja Paisa Colombiana receta paso a paso"
  },
  {
    "id": "co_2",
    "country": "COLOMBIAN",
    "time": 35,
    "fav": false,
    "img": "images/co_2.jpg",
    "title": {
      "es": "Ajiaco Santafereño",
      "pt": "Ajiaco (Sopa Colombiana de Frango)",
      "en": "Colombian Ajiaco Soup"
    },
    "brTip": {
      "es": "Original con tres papas (criolla, pastusa y sabanera), guascas, mazorca, crema de leche, alcaparras y aguacate. En Brasil: batata comum + batata bolinha.",
      "pt": "Original com três batatas (criolla, pastusa e sabanera), guascas, milho, creme de leite, alcaparras e abacate. No Brasil: batata comum + batata bolinha.",
      "en": "Made with three potatoes (criolla, pastusa, sabanera), guascas, corn, cream, capers and avocado. In Brazil: regular + baby potatoes."
    },
    "macrosTrad": {
      "kcal": 679,
      "p": 61,
      "c": 62,
      "f": 22
    },
    "macrosFit": {
      "kcal": 582,
      "p": 64,
      "c": 52,
      "f": 14
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 200,
        "fitGrams": 160,
        "sub": {
          "es": "En Brasil: Batata inglesa + batata bolinha",
          "pt": "No Brasil: Batata inglesa + batata bolinha",
          "en": "In Brazil: Batata inglesa + batata bolinha"
        },
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "creme_leite",
        "grams": 30,
        "fitGrams": 20,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "abacate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Coentro (no Brasil não há guascas)",
          "pt": "No Brasil: Coentro (no Brasil não há guascas)",
          "en": "In Brazil: Coentro (no Brasil não há guascas)"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela y corta las papas en rodajas finas (al deshacerse espesarán la sopa). Corta el choclo en trozos.",
          "s": null
        },
        {
          "t": "Pon en una olla grande la pechuga entera con 1 litro de agua, cebollín o cebolla larga, ajo y sal; hierve.",
          "s": 1080
        },
        {
          "t": "Retira el pollo y desmenúzalo; mantén el caldo hirviendo.",
          "s": null
        },
        {
          "t": "Agrega al caldo las papas y el choclo y cocina a fuego medio, removiendo de vez en cuando.",
          "s": 1200
        },
        {
          "t": "Cuando parte de la papa se haya deshecho y el caldo esté cremoso, añade guascas si consigues (o orégano/cilantro) y ajusta la sal.",
          "s": null
        },
        {
          "t": "Corta el aguacate en láminas.",
          "s": null
        },
        {
          "t": "Sirve en tazón con el pollo desmenuzado encima, una cucharada de crema de leche, alcaparras y el aguacate al lado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Descasque e corte as batatas em rodelas finas (ao desmanchar vão engrossar a sopa). Corte o milho em pedaços.",
          "s": null
        },
        {
          "t": "Coloque numa panela grande o peito inteiro com 1 litro de água, cebolinha, alho e sal; ferva.",
          "s": 1080
        },
        {
          "t": "Retire o frango e desfie; mantenha o caldo fervendo.",
          "s": null
        },
        {
          "t": "Junte ao caldo as batatas e o milho e cozinhe em fogo médio, mexendo às vezes.",
          "s": 1200
        },
        {
          "t": "Quando parte da batata desmanchar e o caldo ficar cremoso, junte guascas se encontrar (ou orégano/coentro) e acerte o sal.",
          "s": null
        },
        {
          "t": "Corte o abacate em lâminas.",
          "s": null
        },
        {
          "t": "Sirva na tigela com o frango desfiado por cima, uma colher de creme de leite, alcaparras e o abacate ao lado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Peel and slice the potatoes thinly (as they break down they will thicken the soup). Cut the corn into chunks.",
          "s": null
        },
        {
          "t": "Put the whole chicken breast in a large pot with 1 liter of water, scallion, garlic and salt; simmer.",
          "s": 1080
        },
        {
          "t": "Remove the chicken and shred it; keep the broth boiling.",
          "s": null
        },
        {
          "t": "Add the potatoes and corn to the broth and cook over medium heat, stirring now and then.",
          "s": 1200
        },
        {
          "t": "When some potato has dissolved and the broth is creamy, add guascas if you find it (or oregano/cilantro) and adjust the salt.",
          "s": null
        },
        {
          "t": "Slice the avocado.",
          "s": null
        },
        {
          "t": "Serve in a bowl topped with the shredded chicken, a spoon of cream, capers and avocado on the side.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Ajiaco Santafereño receta paso a paso"
  },
  {
    "id": "co_3",
    "country": "COLOMBIAN",
    "time": 40,
    "fav": false,
    "img": "images/co_3.jpg",
    "title": {
      "es": "Sancocho Colombiano de Carne",
      "pt": "Sancocho Colombiano (Cozido)",
      "en": "Colombian Sancocho Stew"
    },
    "brTip": {
      "es": "Mandioca (yuca), banana-da-terra verde, milho verde, batata y carne en caldo aromático con cilantro.",
      "pt": "Mandioca, banana-da-terra, milho, batata e carne cozida com coentro.",
      "en": "Hearty broth with beef, cassava, plantain, corn, potato, and cilantro."
    },
    "macrosTrad": {
      "kcal": 783,
      "p": 38,
      "c": 100,
      "f": 28
    },
    "macrosFit": {
      "kcal": 567,
      "p": 25,
      "c": 83,
      "f": 17
    },
    "ingredients": [
      {
        "id": "falda_res",
        "grams": 165,
        "fitGrams": 100,
        "sub": {
          "es": "En Brasil: Costela bovina",
          "pt": "No Brasil: Costela bovina",
          "en": "In Brazil: Costela bovina"
        },
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 80,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 60,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en trozos grandes; pela la yuca y las papas y córtalas en trozos grandes; corta el plátano y el choclo en rodajas gruesas.",
          "s": null
        },
        {
          "t": "Hierve la carne en 1,2 litros de agua con cebolla, ajo, tomate picado, comino y sal hasta ablandar (o 15 min en olla a presión).",
          "s": 1500
        },
        {
          "t": "Agrega el choclo y el plátano.",
          "s": 480
        },
        {
          "t": "Añade la yuca y las papas y hierve hasta que estén suaves al pincharlas.",
          "s": 900
        },
        {
          "t": "Ajusta la sal; si el caldo se redujo mucho, agrega agua caliente.",
          "s": null
        },
        {
          "t": "Apaga el fuego y añade abundante cilantro picado.",
          "s": null
        },
        {
          "t": "Sirve caliente con arroz blanco y aguacate al lado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em pedaços grandes; descasque a mandioca e as batatas e corte em pedaços grandes; corte a banana-da-terra e o milho em rodelas grossas.",
          "s": null
        },
        {
          "t": "Ferva a carne em 1,2 litro de água com cebola, alho, tomate picado, cominho e sal até amaciar (ou 15 min na pressão).",
          "s": 1500
        },
        {
          "t": "Junte o milho e a banana-da-terra.",
          "s": 480
        },
        {
          "t": "Acrescente a mandioca e as batatas e ferva até ficarem macias ao espetar.",
          "s": 900
        },
        {
          "t": "Acerte o sal; se o caldo reduziu muito, junte água quente.",
          "s": null
        },
        {
          "t": "Desligue o fogo e acrescente bastante coentro picado.",
          "s": null
        },
        {
          "t": "Sirva quente com arroz branco e abacate ao lado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the beef into large chunks; peel the cassava and potatoes and cut into large pieces; slice the plantain and corn thickly.",
          "s": null
        },
        {
          "t": "Simmer the beef in 1.2 liters of water with onion, garlic, chopped tomato, cumin and salt until tender (or 15 min in a pressure cooker).",
          "s": 1500
        },
        {
          "t": "Add the corn and plantain.",
          "s": 480
        },
        {
          "t": "Add the cassava and potatoes and boil until tender when pierced.",
          "s": 900
        },
        {
          "t": "Adjust the salt; add hot water if the broth reduced too much.",
          "s": null
        },
        {
          "t": "Turn off the heat and add plenty of chopped cilantro.",
          "s": null
        },
        {
          "t": "Serve hot with white rice and avocado on the side.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Sancocho Colombiano de Carne receta paso a paso"
  },
  {
    "id": "co_4",
    "country": "COLOMBIAN",
    "time": 20,
    "fav": false,
    "img": "images/co_4.jpg",
    "title": {
      "es": "Arepa Rellena con Carne Desmechada",
      "pt": "Arepa Recheada com Carne Desfiada",
      "en": "Colombian Stuffed Beef Arepa"
    },
    "brTip": {
      "es": "Si no encuentras Harina PAN en tu ciudad de Brasil, licúa/hidrata flocão de milho (cuscuz) o usa milharina fina.",
      "pt": "Se não achar Harina PAN, use milharina fina ou flocão de milho bem hidratado.",
      "en": "If Harina PAN isn't nearby, use Brazilian milharina or well-hydrated flocão."
    },
    "macrosTrad": {
      "kcal": 797,
      "p": 41,
      "c": 62,
      "f": 42
    },
    "macrosFit": {
      "kcal": 509,
      "p": 26,
      "c": 51,
      "f": 22
    },
    "ingredients": [
      {
        "id": "falda_res",
        "grams": 150,
        "fitGrams": 90,
        "sub": {
          "es": "En Brasil: Fraldinha ou acém desfiado",
          "pt": "No Brasil: Fraldinha ou acém desfiado",
          "en": "In Brazil: Fraldinha ou acém desfiado"
        },
        "fitId": null
      },
      {
        "id": "harina_pan",
        "grams": 70,
        "fitGrams": 55,
        "sub": {
          "es": "En Brasil: Flocão de milho",
          "pt": "No Brasil: Flocão de milho",
          "en": "In Brazil: Flocão de milho"
        },
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 40,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Queijo coalho",
          "pt": "No Brasil: Queijo coalho",
          "en": "In Brazil: Queijo coalho"
        },
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 8,
        "fitGrams": 4,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Mezcla 1 taza de harina de maíz precocida con 1 taza de agua tibia, sal y 1 cdta de aceite.",
          "s": null
        },
        {
          "t": "Amasa hasta que no se agriete y deja reposar.",
          "s": 300
        },
        {
          "t": "Forma bolitas y aplástalas en discos de 1 cm de grosor, alisando los bordes con los dedos húmedos.",
          "s": null
        },
        {
          "t": "Ásalas en sartén antiadherente a fuego medio-bajo por ambos lados, hasta que suenen huecas al golpearlas.",
          "s": 600
        },
        {
          "t": "Hogao: sofríe cebolla, tomate picado y ajo con el resto del aceite hasta formar salsa.",
          "s": 240
        },
        {
          "t": "Agrega la carne desmechada o molida y cocina hasta que quede jugosa; sala.",
          "s": 240
        },
        {
          "t": "Abre las arepas calientes por el borde formando un bolsillo y rellénalas con queso y la carne caliente.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture 1 xícara de farinha de milho pré-cozida com 1 xícara de água morna, sal e 1 colher de chá de óleo.",
          "s": null
        },
        {
          "t": "Sove até não rachar e deixe descansar.",
          "s": 300
        },
        {
          "t": "Faça bolinhas e achate em discos de 1 cm de espessura, alisando as bordas com os dedos úmidos.",
          "s": null
        },
        {
          "t": "Asse em frigideira antiaderente em fogo médio-baixo dos dois lados, até soarem ocas ao bater.",
          "s": 600
        },
        {
          "t": "Hogao: refogue cebola, tomate picado e alho com o resto do óleo até virar molho.",
          "s": 240
        },
        {
          "t": "Junte a carne desfiada ou moída e cozinhe até ficar suculenta; salgue.",
          "s": 240
        },
        {
          "t": "Abra as arepas quentes pela borda formando um bolso e recheie com queijo e a carne quente.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Mix 1 cup of precooked corn flour with 1 cup of warm water, salt and 1 tsp oil.",
          "s": null
        },
        {
          "t": "Knead until it no longer cracks and let it rest.",
          "s": 300
        },
        {
          "t": "Shape balls and flatten into 1 cm discs, smoothing the edges with wet fingers.",
          "s": null
        },
        {
          "t": "Cook in a nonstick pan over medium-low on both sides until they sound hollow when tapped.",
          "s": 600
        },
        {
          "t": "Hogao: sauté onion, chopped tomato and garlic with the rest of the oil into a sauce.",
          "s": 240
        },
        {
          "t": "Add the shredded or ground beef and cook until juicy; salt it.",
          "s": 240
        },
        {
          "t": "Slit the hot arepas along the edge to form a pocket and fill with cheese and the hot meat.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Arepa Rellena con Carne Desmechada receta paso a paso"
  },
  {
    "id": "co_5",
    "country": "COLOMBIAN",
    "time": 18,
    "fav": false,
    "img": "images/co_5.jpg",
    "title": {
      "es": "Arepa de Huevo Costeña",
      "pt": "Arepa com Ovo (Estilo Costeño)",
      "en": "Colombian Egg-Stuffed Arepa"
    },
    "brTip": {
      "es": "Versión práctica y fit en sartén: arepa dorada rellena al instante con huevo cuajado dentro sin fritura profunda.",
      "pt": "Versão prática na frigideira sem fritura profunda: arepa recheada com ovo.",
      "en": "Practical skillet version without deep frying: crisp corn cake stuffed with egg."
    },
    "macrosTrad": {
      "kcal": 555,
      "p": 13,
      "c": 63,
      "f": 27
    },
    "macrosFit": {
      "kcal": 419,
      "p": 13,
      "c": 52,
      "f": 17
    },
    "ingredients": [
      {
        "id": "harina_pan",
        "grams": 80,
        "fitGrams": 65,
        "sub": {
          "es": "En Brasil: Flocão de milho",
          "pt": "No Brasil: Flocão de milho",
          "en": "In Brazil: Flocão de milho"
        },
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 20,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Mezcla la harina de maíz con agua tibia y sal y amasa hasta que esté suave y no se agriete.",
          "s": null
        },
        {
          "t": "Deja reposar la masa tapada.",
          "s": 300
        },
        {
          "t": "Forma discos delgados (unos 5 mm), parejos y sin grietas.",
          "s": null
        },
        {
          "t": "Ásalos en sartén con un poco de aceite por ambos lados hasta que inflen ligeramente y se forme piel.",
          "s": 480
        },
        {
          "t": "Con un cuchillo abre una abertura lateral en cada arepa tibia, cuidando de no romperla.",
          "s": null
        },
        {
          "t": "Bate ligeramente el huevo con sal (y queso o cebolla picada si quieres) y viértelo con cuidado dentro del bolsillo; sella el borde con un poco de masa húmeda.",
          "s": null
        },
        {
          "t": "Cocina en sartén tapada a fuego bajo, volteando una vez, hasta que el huevo esté cocido por dentro.",
          "s": 360
        }
      ],
      "pt": [
        {
          "t": "Misture a farinha de milho com água morna e sal e sove até ficar macia e sem rachar.",
          "s": null
        },
        {
          "t": "Deixe a massa descansar coberta.",
          "s": 300
        },
        {
          "t": "Faça discos finos (uns 5 mm), regulares e sem rachaduras.",
          "s": null
        },
        {
          "t": "Asse na frigideira com um pouco de óleo dos dois lados até inflarem levemente e formar uma película.",
          "s": 480
        },
        {
          "t": "Com uma faca abra uma fenda lateral em cada arepa morna, cuidando para não rasgar.",
          "s": null
        },
        {
          "t": "Bata levemente o ovo com sal (e queijo ou cebola picada se quiser) e despeje com cuidado dentro do bolso; feche a borda com um pouco de massa úmida.",
          "s": null
        },
        {
          "t": "Cozinhe em frigideira tampada em fogo baixo, virando uma vez, até o ovo cozinhar por dentro.",
          "s": 360
        }
      ],
      "en": [
        {
          "t": "Mix the corn flour with warm water and salt and knead until smooth and crack-free.",
          "s": null
        },
        {
          "t": "Let the dough rest, covered.",
          "s": 300
        },
        {
          "t": "Shape thin discs (about 5 mm), even and without cracks.",
          "s": null
        },
        {
          "t": "Cook in a pan with a little oil on both sides until they puff slightly and form a skin.",
          "s": 480
        },
        {
          "t": "With a knife cut a side opening in each warm arepa, taking care not to tear it.",
          "s": null
        },
        {
          "t": "Lightly beat the egg with salt (and cheese or chopped onion if you like) and carefully pour it into the pocket; seal the edge with a bit of wet dough.",
          "s": null
        },
        {
          "t": "Cook in a covered pan over low heat, turning once, until the egg is set inside.",
          "s": 360
        }
      ]
    },
    "videoQuery": "como hacer Arepa de Huevo Costeña receta paso a paso"
  },
  {
    "id": "co_6",
    "country": "COLOMBIAN",
    "time": 25,
    "fav": false,
    "img": "images/co_6.jpg",
    "title": {
      "es": "Empanadas Colombianas de Carne y Papa",
      "pt": "Empanadas Colombianas de Carne",
      "en": "Colombian Corn Empanadas"
    },
    "brTip": {
      "es": "Relleno clásico de carne molida + puré de papa + hogao dentro de masa de maíz (en modo fit van a la airfryer).",
      "pt": "Recheio de carne moída com purê de batata e hogao em massa de milho (ótimo na airfryer).",
      "en": "Beef, mashed potato, and hogao stuffed in cornmeal pastry (great air-fried)."
    },
    "macrosTrad": {
      "kcal": 825,
      "p": 45,
      "c": 93,
      "f": 29
    },
    "macrosFit": {
      "kcal": 673,
      "p": 47,
      "c": 75,
      "f": 19
    },
    "ingredients": [
      {
        "id": "harina_pan",
        "grams": 90,
        "fitGrams": 70,
        "sub": {
          "es": "En Brasil: Flocão de milho",
          "pt": "No Brasil: Flocão de milho",
          "en": "In Brazil: Flocão de milho"
        },
        "fitId": null
      },
      {
        "id": "patinho",
        "grams": 100,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 20,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la papa pelada en cubos en agua con sal y aplástala de forma rústica.",
          "s": 900
        },
        {
          "t": "Hogao: sofríe tomate, cebolla, ajo y comino; agrega la carne molida y dórala.",
          "s": 360
        },
        {
          "t": "Mezcla la carne con la papa hasta formar un relleno compacto; ajusta la sal y deja entibiar.",
          "s": null
        },
        {
          "t": "Masa: mezcla la harina de maíz amarilla con agua tibia, sal y 1 cdta de aceite hasta que esté suave.",
          "s": null
        },
        {
          "t": "Estira bolitas de masa entre dos plásticos hasta dejarlas finas, pon 1 cda de relleno, dobla en media luna y sella presionando el borde con una taza.",
          "s": null
        },
        {
          "t": "Pincélalas con aceite y cocínalas en airfryer a 200 °C (o fríelas) hasta que estén doradas y crocantes.",
          "s": 840
        },
        {
          "t": "Sirve con ají casero o gotas de limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a batata descascada em cubos em água com sal e amasse de forma rústica.",
          "s": 900
        },
        {
          "t": "Hogao: refogue tomate, cebola, alho e cominho; junte a carne moída e doure.",
          "s": 360
        },
        {
          "t": "Misture a carne com a batata até formar um recheio firme; acerte o sal e deixe amornar.",
          "s": null
        },
        {
          "t": "Massa: misture a farinha de milho amarela com água morna, sal e 1 colher (chá) de óleo até ficar macia.",
          "s": null
        },
        {
          "t": "Abra bolinhas de massa entre dois plásticos até ficarem finas, coloque 1 colher de recheio, dobre em meia-lua e feche apertando a borda com uma xícara.",
          "s": null
        },
        {
          "t": "Pincele com óleo e leve à airfryer a 200 °C (ou frite) até ficarem douradas e crocantes.",
          "s": 840
        },
        {
          "t": "Sirva com molho de pimenta caseiro ou gotas de limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil the peeled, cubed potato in salted water and mash it roughly.",
          "s": 900
        },
        {
          "t": "Hogao: sauté tomato, onion, garlic and cumin; add the ground beef and brown it.",
          "s": 360
        },
        {
          "t": "Mix the beef with the potato into a firm filling; adjust the salt and let it cool slightly.",
          "s": null
        },
        {
          "t": "Dough: mix the yellow corn flour with warm water, salt and 1 tsp oil until smooth.",
          "s": null
        },
        {
          "t": "Roll balls of dough thin between two sheets of plastic, add 1 tbsp filling, fold into a half-moon and seal by pressing the edge with a cup.",
          "s": null
        },
        {
          "t": "Brush with oil and air-fry at 200 °C (or deep-fry) until golden and crisp.",
          "s": 840
        },
        {
          "t": "Serve with homemade ají or a squeeze of lime.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Empanadas Colombianas de Carne y Papa receta paso a paso"
  },
  {
    "id": "co_7",
    "country": "COLOMBIAN",
    "time": 28,
    "fav": false,
    "img": "images/co_7.jpg",
    "title": {
      "es": "Arroz con Pollo Colombiano",
      "pt": "Arroz com Frango Colombiano",
      "en": "Colombian Chicken & Rice"
    },
    "brTip": {
      "es": "Con achiote, pimentón, zanahoria, arvejas y maíz. En Brasil el achiote es el colorau.",
      "pt": "Com achiote, pimentão, cenoura, ervilha e milho. No Brasil o achiote é o colorau.",
      "en": "With annatto, bell pepper, carrot, peas and corn. In Brazil annatto is sold as colorau."
    },
    "macrosTrad": {
      "kcal": 525,
      "p": 59,
      "c": 57,
      "f": 5
    },
    "macrosFit": {
      "kcal": 516,
      "p": 64,
      "c": 49,
      "f": 6
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "cenoura",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 30,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "achiote",
        "grams": 3,
        "fitGrams": 3,
        "sub": {
          "es": "En Brasil: Colorau (urucum)",
          "pt": "No Brasil: Colorau (urucum)",
          "en": "In Brazil: Colorau (urucum)"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga en agua con ajo, cebolla y sal; desmenúzala en tiras y guarda el caldo.",
          "s": 900
        },
        {
          "t": "Pica la cebolla, el pimentón y el tomate en cubitos; corta la zanahoria en cubos pequeños.",
          "s": null
        },
        {
          "t": "En una olla grande sofríe la cebolla, el pimentón y el tomate con unas gotas de aceite, comino y achiote.",
          "s": 240
        },
        {
          "t": "Agrega el arroz crudo lavado, la zanahoria, el maíz y las arvejas y mezcla para nacarar el grano.",
          "s": 120
        },
        {
          "t": "Vierte el caldo caliente (el doble del volumen del arroz) y ajusta la sal.",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego bajo; incorpora el pollo desmenuzado los últimos 3 minutos.",
          "s": 960
        },
        {
          "t": "Deja reposar tapado antes de servir con aguacate o ensalada.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito em água com alho, cebola e sal; desfie em tiras e guarde o caldo.",
          "s": 900
        },
        {
          "t": "Pique a cebola, o pimentão e o tomate em cubinhos; corte a cenoura em cubos pequenos.",
          "s": null
        },
        {
          "t": "Numa panela grande refogue a cebola, o pimentão e o tomate com gotas de óleo, cominho e achiote (colorau).",
          "s": 240
        },
        {
          "t": "Junte o arroz cru lavado, a cenoura, o milho e as ervilhas e misture para nacarar o grão.",
          "s": 120
        },
        {
          "t": "Despeje o caldo quente (o dobro do volume do arroz) e acerte o sal.",
          "s": null
        },
        {
          "t": "Tampe e cozinhe em fogo baixo; incorpore o frango desfiado nos últimos 3 minutos.",
          "s": 960
        },
        {
          "t": "Deixe descansar tampado antes de servir com abacate ou salada.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Poach the chicken breast in water with garlic, onion and salt; shred into strips and keep the broth.",
          "s": 900
        },
        {
          "t": "Dice the onion, bell pepper and tomato; cut the carrot into small cubes.",
          "s": null
        },
        {
          "t": "In a large pot sauté the onion, bell pepper and tomato with a few drops of oil, cumin and annatto.",
          "s": 240
        },
        {
          "t": "Add the washed raw rice, carrot, corn and peas and stir to coat the grains.",
          "s": 120
        },
        {
          "t": "Pour in the hot broth (twice the volume of rice) and adjust the salt.",
          "s": null
        },
        {
          "t": "Cover and cook on low; fold in the shredded chicken in the last 3 minutes.",
          "s": 960
        },
        {
          "t": "Let it rest covered before serving with avocado or salad.",
          "s": 300
        }
      ]
    },
    "videoQuery": "como hacer Arroz con Pollo Colombiano receta paso a paso"
  },
  {
    "id": "co_8",
    "country": "COLOMBIAN",
    "time": 28,
    "fav": false,
    "img": "images/co_8.jpg",
    "title": {
      "es": "Sobrebarriga / Carne en Salsa Criolla",
      "pt": "Carne ao Molho Crioulo (Hogao)",
      "en": "Colombian Criollo Beef"
    },
    "brTip": {
      "es": "La sobrebarriga en Brasil equivale a 'fraldinha' o 'costela sem osso' (usa patinho/fraldinha en modo fit).",
      "pt": "A sobrebarriga equivale à fraldinha no Brasil; cozida com molho hogao e batatas.",
      "en": "Use Brazilian fraldinha (flank steak) braised in rich tomato-scallion hogao."
    },
    "macrosTrad": {
      "kcal": 523,
      "p": 37,
      "c": 33,
      "f": 28
    },
    "macrosFit": {
      "kcal": 356,
      "p": 24,
      "c": 31,
      "f": 16
    },
    "ingredients": [
      {
        "id": "falda_res",
        "grams": 170,
        "fitGrams": 100,
        "sub": {
          "es": "En Brasil: Fraldinha",
          "pt": "No Brasil: Fraldinha",
          "en": "In Brazil: Fraldinha"
        },
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cocina la carne entera en olla a presión con agua, cebolla, ajo, laurel y sal hasta que esté muy blanda.",
          "s": 1500
        },
        {
          "t": "Mientras, cuece las papas en agua con sal.",
          "s": 1080
        },
        {
          "t": "Pica abundante tomate, cebollín y ajo para la salsa criolla.",
          "s": null
        },
        {
          "t": "Sofríe el tomate, el cebollín, el ajo y el comino con unas gotas de aceite a fuego bajo hasta formar una salsa espesa (hogao).",
          "s": 600
        },
        {
          "t": "Corta la carne tierna en porciones y añade a la salsa unas cucharadas del caldo de cocción.",
          "s": null
        },
        {
          "t": "Pasa la carne a la sartén con la salsa y cocina junta para que la absorba.",
          "s": 300
        },
        {
          "t": "Sirve con las papas (cocidas o doradas), arroz y cilantro picado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a carne inteira na pressão com água, cebola, alho, louro e sal até ficar bem macia.",
          "s": 1500
        },
        {
          "t": "Enquanto isso, cozinhe as batatas em água com sal.",
          "s": 1080
        },
        {
          "t": "Pique bastante tomate, cebolinha e alho para o molho crioulo.",
          "s": null
        },
        {
          "t": "Refogue o tomate, a cebolinha, o alho e o cominho com gotas de óleo em fogo baixo até virar um molho grosso (hogao).",
          "s": 600
        },
        {
          "t": "Corte a carne macia em porções e junte ao molho algumas colheres do caldo do cozimento.",
          "s": null
        },
        {
          "t": "Passe a carne para a frigideira com o molho e cozinhe junto para absorver.",
          "s": 300
        },
        {
          "t": "Sirva com as batatas (cozidas ou douradas), arroz e coentro picado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cook the whole piece of beef in a pressure cooker with water, onion, garlic, bay leaf and salt until very tender.",
          "s": 1500
        },
        {
          "t": "Meanwhile, boil the potatoes in salted water.",
          "s": 1080
        },
        {
          "t": "Chop plenty of tomato, scallion and garlic for the creole sauce.",
          "s": null
        },
        {
          "t": "Sauté the tomato, scallion, garlic and cumin with a few drops of oil over low heat into a thick sauce (hogao).",
          "s": 600
        },
        {
          "t": "Cut the tender beef into portions and add a few spoonfuls of cooking broth to the sauce.",
          "s": null
        },
        {
          "t": "Move the beef into the pan with the sauce and cook together so it soaks it up.",
          "s": 300
        },
        {
          "t": "Serve with the potatoes (boiled or browned), rice and chopped cilantro.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Sobrebarriga / Carne en Salsa Criolla receta paso a paso"
  },
  {
    "id": "co_9",
    "country": "COLOMBIAN",
    "time": 26,
    "fav": false,
    "img": "images/co_9.jpg",
    "title": {
      "es": "Pollo Sudado Colombiano",
      "pt": "Frango Ensopado Colombiano",
      "en": "Colombian Braised Chicken & Cassava"
    },
    "brTip": {
      "es": "Guiso casero diario en Colombia con sobrecoxa de pollo, papa, mandioca y salsa de tomate/cebollín.",
      "pt": "Cozido caseiro de sobrecoxa de frango, batata e mandioca no molho de tomate e cebolinha.",
      "en": "Everyday Colombian braised chicken with potato, cassava, and tomato-scallion broth."
    },
    "macrosTrad": {
      "kcal": 626,
      "p": 46,
      "c": 60,
      "f": 23
    },
    "macrosFit": {
      "kcal": 517,
      "p": 64,
      "c": 51,
      "f": 5
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 170,
        "fitGrams": 185,
        "sub": null,
        "fitId": "frango"
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "achiote",
        "grams": 2,
        "fitGrams": 2,
        "sub": {
          "es": "En Brasil: Colorau (urucum)",
          "pt": "No Brasil: Colorau (urucum)",
          "en": "In Brazil: Colorau (urucum)"
        },
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sazona el pollo con ajo, comino, achiote y sal.",
          "s": null
        },
        {
          "t": "Pela la yuca y las papas y córtalas en trozos medianos; pica la cebolla, el tomate y el cebollín.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el tomate y el cebollín en olla con unas gotas de aceite.",
          "s": 240
        },
        {
          "t": "Acomoda el pollo encima y séllalo por ambos lados.",
          "s": 360
        },
        {
          "t": "Agrega las papas, la yuca y 1 taza de agua o caldo; sala.",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego medio hasta que la yuca y la papa estén tiernas y el caldo se reduzca a una salsa ligera.",
          "s": 1200
        },
        {
          "t": "Termina con cilantro picado y sirve con arroz.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Tempere o frango com alho, cominho, achiote (colorau) e sal.",
          "s": null
        },
        {
          "t": "Descasque a mandioca e as batatas e corte em pedaços médios; pique a cebola, o tomate e a cebolinha.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o tomate e a cebolinha na panela com gotas de óleo.",
          "s": 240
        },
        {
          "t": "Coloque o frango por cima e sele dos dois lados.",
          "s": 360
        },
        {
          "t": "Junte as batatas, a mandioca e 1 xícara de água ou caldo; salgue.",
          "s": null
        },
        {
          "t": "Tampe e cozinhe em fogo médio até a mandioca e a batata ficarem macias e o caldo reduzir a um molho leve.",
          "s": 1200
        },
        {
          "t": "Finalize com coentro picado e sirva com arroz.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Season the chicken with garlic, cumin, annatto and salt.",
          "s": null
        },
        {
          "t": "Peel the cassava and potatoes and cut into medium chunks; chop the onion, tomato and scallion.",
          "s": null
        },
        {
          "t": "Sauté the onion, tomato and scallion in a pot with a few drops of oil.",
          "s": 240
        },
        {
          "t": "Lay the chicken on top and sear both sides.",
          "s": 360
        },
        {
          "t": "Add the potatoes, cassava and 1 cup water or stock; salt it.",
          "s": null
        },
        {
          "t": "Cover and cook over medium heat until the cassava and potato are tender and the broth reduces to a light sauce.",
          "s": 1200
        },
        {
          "t": "Finish with chopped cilantro and serve with rice.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Pollo Sudado Colombiano receta paso a paso"
  },
  {
    "id": "co_10",
    "country": "COLOMBIAN",
    "time": 24,
    "fav": false,
    "img": "images/co_10.jpg",
    "title": {
      "es": "Carne Desmechada con Hogao",
      "pt": "Carne Desfiada ao Hogao",
      "en": "Colombian Shredded Beef"
    },
    "brTip": {
      "es": "Original con falda o sobrebarriga cocida y desmechada en hogao. En Brasil: fraldinha, acém o músculo.",
      "pt": "Original com fraldinha cozida e desfiada no hogao. No Brasil: fraldinha, acém ou músculo.",
      "en": "Made with flank steak cooked and shredded in hogao. In Brazil: fraldinha, acém or músculo."
    },
    "macrosTrad": {
      "kcal": 644,
      "p": 38,
      "c": 63,
      "f": 28
    },
    "macrosFit": {
      "kcal": 447,
      "p": 24,
      "c": 52,
      "f": 17
    },
    "ingredients": [
      {
        "id": "falda_res",
        "grams": 170,
        "fitGrams": 100,
        "sub": {
          "es": "En Brasil: Fraldinha ou acém",
          "pt": "No Brasil: Fraldinha ou acém",
          "en": "In Brazil: Fraldinha ou acém"
        },
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 110,
        "fitGrams": 125,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "banana_terra",
        "grams": 70,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cocina la carne en olla a presión con agua, cebolla, ajo y laurel hasta que se deshebre fácil; guarda el caldo.",
          "s": 1500
        },
        {
          "t": "Cocina el arroz si no lo tienes listo.",
          "s": 1080
        },
        {
          "t": "Deja entibiar la carne y desméchala en hebras finas con dos tenedores.",
          "s": null
        },
        {
          "t": "Hogao: sofríe tomate picado, cebollín, pimentón, ajo y comino con unas gotas de aceite hasta formar salsa.",
          "s": 360
        },
        {
          "t": "Agrega la carne desmechada y 3 cdas del caldo; saltea hasta que quede jugosa y sala.",
          "s": 240
        },
        {
          "t": "Dora las tajadas de plátano maduro en sartén por ambos lados.",
          "s": 300
        },
        {
          "t": "Sirve la carne con el arroz y el plátano.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a carne na pressão com água, cebola, alho e louro até desfiar fácil; guarde o caldo.",
          "s": 1500
        },
        {
          "t": "Cozinhe o arroz se não tiver pronto.",
          "s": 1080
        },
        {
          "t": "Deixe a carne amornar e desfie em fios finos com dois garfos.",
          "s": null
        },
        {
          "t": "Hogao: refogue tomate picado, cebolinha, pimentão, alho e cominho com gotas de óleo até virar molho.",
          "s": 360
        },
        {
          "t": "Junte a carne desfiada e 3 colheres do caldo; salteie até ficar suculenta e salgue.",
          "s": 240
        },
        {
          "t": "Doure as fatias de banana-da-terra madura na frigideira dos dois lados.",
          "s": 300
        },
        {
          "t": "Sirva a carne com o arroz e a banana.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cook the beef in a pressure cooker with water, onion, garlic and bay leaf until it shreds easily; keep the broth.",
          "s": 1500
        },
        {
          "t": "Cook the rice if not ready.",
          "s": 1080
        },
        {
          "t": "Let the beef cool slightly and shred it finely with two forks.",
          "s": null
        },
        {
          "t": "Hogao: sauté chopped tomato, scallion, bell pepper, garlic and cumin with a few drops of oil into a sauce.",
          "s": 360
        },
        {
          "t": "Add the shredded beef and 3 tbsp broth; sauté until juicy and salt it.",
          "s": 240
        },
        {
          "t": "Brown the ripe plantain slices in a pan on both sides.",
          "s": 300
        },
        {
          "t": "Serve the beef with the rice and plantain.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Carne Desmechada con Hogao receta paso a paso"
  },
  {
    "id": "co_11",
    "country": "COLOMBIAN",
    "time": 25,
    "fav": false,
    "img": "images/co_11.jpg",
    "title": {
      "es": "Cazuela de Pescado y Camarón al Coco",
      "pt": "Cazuela Colombiana de Peixe e Coco",
      "en": "Colombian Coconut Seafood Stew"
    },
    "brTip": {
      "es": "Del Caribe colombiano: pescado, camarón, calamar y mariscos en leche de coco con tomate y pimentón.",
      "pt": "Do Caribe colombiano: peixe, camarão, lula e mariscos no leite de coco com tomate e pimentão.",
      "en": "From the Colombian Caribbean: fish, shrimp, squid and shellfish in coconut milk with tomato and bell pepper."
    },
    "macrosTrad": {
      "kcal": 538,
      "p": 51,
      "c": 37,
      "f": 21
    },
    "macrosFit": {
      "kcal": 466,
      "p": 55,
      "c": 31,
      "f": 13
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 100,
        "fitGrams": 110,
        "sub": {
          "es": "En Brasil: Tilápia ou pescada",
          "pt": "No Brasil: Tilápia ou pescada",
          "en": "In Brazil: Tilápia ou pescada"
        },
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "calamar",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mariscos",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite_coco",
        "grams": 90,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 80,
        "fitGrams": 65,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el pescado en trozos grandes y sazónalo junto con los camarones con limón, ajo y sal.",
          "s": null
        },
        {
          "t": "Cocina el arroz si no lo tienes listo.",
          "s": 1080
        },
        {
          "t": "Sofríe la cebolla, el pimentón, la zanahoria rallada y el tomate con unas gotas de aceite, páprica y comino.",
          "s": 300
        },
        {
          "t": "Vierte la leche de coco y ½ taza de caldo de pescado y cocina hasta espesar ligeramente.",
          "s": 300
        },
        {
          "t": "Añade el pescado sin remover demasiado.",
          "s": 240
        },
        {
          "t": "Agrega los camarones, el calamar y los mariscos solo al final, hasta que los camarones se pongan rosados; ajusta la sal.",
          "s": 120
        },
        {
          "t": "Sirve con el arroz, cilantro picado y patacones o yuca.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte o peixe em pedaços grandes e tempere junto com os camarões com limão, alho e sal.",
          "s": null
        },
        {
          "t": "Cozinhe o arroz se não tiver pronto.",
          "s": 1080
        },
        {
          "t": "Refogue a cebola, o pimentão, a cenoura ralada e o tomate com gotas de óleo, páprica e cominho.",
          "s": 300
        },
        {
          "t": "Despeje o leite de coco e ½ xícara de caldo de peixe e cozinhe até engrossar levemente.",
          "s": 300
        },
        {
          "t": "Junte o peixe sem mexer demais.",
          "s": 240
        },
        {
          "t": "Junte os camarões, a lula e os mariscos só no final, até os camarões ficarem rosados; acerte o sal.",
          "s": 120
        },
        {
          "t": "Sirva com o arroz, coentro picado e patacones ou mandioca.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the fish into large pieces and season it with the shrimp using lime, garlic and salt.",
          "s": null
        },
        {
          "t": "Cook the rice if not ready.",
          "s": 1080
        },
        {
          "t": "Sauté the onion, bell pepper, grated carrot and tomato with a few drops of oil, paprika and cumin.",
          "s": 300
        },
        {
          "t": "Pour in the coconut milk and ½ cup fish stock and cook until slightly thickened.",
          "s": 300
        },
        {
          "t": "Add the fish without stirring too much.",
          "s": 240
        },
        {
          "t": "Add the shrimp, squid and shellfish only at the end, until the shrimp turn pink; adjust salt.",
          "s": 120
        },
        {
          "t": "Serve with the rice, chopped cilantro and patacones or cassava.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Cazuela de Pescado y Camarón al Coco receta paso a paso"
  },
  {
    "id": "co_12",
    "country": "COLOMBIAN",
    "time": 25,
    "fav": false,
    "img": "images/co_12.jpg",
    "title": {
      "es": "Arroz con Coco y Pescado Costeño",
      "pt": "Arroz de Coco com Peixe",
      "en": "Colombian Coconut Rice & Fish"
    },
    "brTip": {
      "es": "Usa leite de coco reducido hasta caramelizar (titoté) para darle el color tostado clásico de Cartagena.",
      "pt": "Reduza o leite de coco até caramelizar (titoté) para dar a cor dourada típica.",
      "en": "Reduce coconut milk until caramelized before cooking rice, served with seared fish."
    },
    "macrosTrad": {
      "kcal": 593,
      "p": 41,
      "c": 60,
      "f": 22
    },
    "macrosFit": {
      "kcal": 472,
      "p": 44,
      "c": 46,
      "f": 13
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 175,
        "fitGrams": 195,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "leite_coco",
        "grams": 100,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 60,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Lava el arroz hasta que el agua salga clara y escúrrelo.",
          "s": null
        },
        {
          "t": "En una olla hierve la mitad de la leche de coco a fuego medio-alto hasta que se reduzca, suelte su aceite y quede doradito (titoté), sin dejar que se queme.",
          "s": 360
        },
        {
          "t": "Agrega el arroz, el resto de la leche de coco, 1 taza de agua y sal (y 1 cdta de azúcar o endulzante opcional).",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego bajo hasta que se seque.",
          "s": 960
        },
        {
          "t": "Sazona los filetes de pescado con limón, ajo y sal.",
          "s": null
        },
        {
          "t": "Dóralos en sartén con unas gotas de aceite por ambos lados.",
          "s": 360
        },
        {
          "t": "Sirve el arroz de coco con el pescado, gajos de limón y ensalada de tomate.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Lave o arroz até a água sair clara e escorra.",
          "s": null
        },
        {
          "t": "Numa panela ferva metade do leite de coco em fogo médio-alto até reduzir, soltar o óleo e ficar douradinho (titoté), sem queimar.",
          "s": 360
        },
        {
          "t": "Junte o arroz, o resto do leite de coco, 1 xícara de água e sal (e 1 colher (chá) de açúcar ou adoçante opcional).",
          "s": null
        },
        {
          "t": "Tampe e cozinhe em fogo baixo até secar.",
          "s": 960
        },
        {
          "t": "Tempere os filés de peixe com limão, alho e sal.",
          "s": null
        },
        {
          "t": "Doure na frigideira com gotas de óleo dos dois lados.",
          "s": 360
        },
        {
          "t": "Sirva o arroz de coco com o peixe, gomos de limão e salada de tomate.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Rinse the rice until the water runs clear and drain.",
          "s": null
        },
        {
          "t": "In a pot boil half the coconut milk over medium-high until it reduces, releases its oil and turns golden (titoté), without burning.",
          "s": 360
        },
        {
          "t": "Add the rice, the rest of the coconut milk, 1 cup water and salt (and 1 tsp sugar or sweetener, optional).",
          "s": null
        },
        {
          "t": "Cover and cook on low until dry.",
          "s": 960
        },
        {
          "t": "Season the fish fillets with lime, garlic and salt.",
          "s": null
        },
        {
          "t": "Brown them in a pan with a few drops of oil on both sides.",
          "s": 360
        },
        {
          "t": "Serve the coconut rice with the fish, lime wedges and tomato salad.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Arroz con Coco y Pescado Costeño receta paso a paso"
  },
  {
    "id": "co_13",
    "country": "COLOMBIAN",
    "time": 12,
    "fav": false,
    "img": "images/co_13.jpg",
    "title": {
      "es": "Changua Bogotana (Caldo de Leche y Huevo)",
      "pt": "Changua (Caldo Matinal de Leite e Ovo)",
      "en": "Bogotá Egg & Milk Breakfast Broth"
    },
    "brTip": {
      "es": "Desayuno tradicional andino listo en 10 min con leche, huevo pochado, cebollín, cilantro y pan/queso.",
      "pt": "Café da manhã típico de Bogotá em 10 min: leite quente, ovo pochê, cebolinha, coentro e pão.",
      "en": "10-minute Andean breakfast broth with poached eggs, scallions, cilantro, and bread."
    },
    "macrosTrad": {
      "kcal": 505,
      "p": 31,
      "c": 39,
      "f": 24
    },
    "macrosFit": {
      "kcal": 370,
      "p": 27,
      "c": 31,
      "f": 14
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 180,
        "fitGrams": 125,
        "sub": null,
        "fitId": "leite_desnatado"
      },
      {
        "id": "pao",
        "grams": 50,
        "fitGrams": 40,
        "sub": {
          "es": "En Brasil: Pão amanhecido",
          "pt": "No Brasil: Pão amanhecido",
          "en": "In Brazil: Pão amanhecido"
        },
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Cebolinha + coentro",
          "pt": "No Brasil: Cebolinha + coentro",
          "en": "In Brazil: Cebolinha + coentro"
        },
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 30,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica el cebollín (separa los tallos de las hojas) y el cilantro; corta el queso en cubitos y el pan en trozos.",
          "s": null
        },
        {
          "t": "En una olla pequeña calienta partes iguales de leche y agua con sal, pimienta y los tallos de cebollín.",
          "s": 240
        },
        {
          "t": "Cuando empiece a hervir suave, sin que se rebalse, baja el fuego al mínimo.",
          "s": null
        },
        {
          "t": "Rompe los huevos con cuidado directamente en el caldo y deja que se pochen sin mover hasta que la clara cuaje y la yema siga cremosa.",
          "s": 210
        },
        {
          "t": "Coloca el pan (calado) y los cubos de queso en el fondo de un tazón hondo.",
          "s": null
        },
        {
          "t": "Sirve el caldo con los huevos encima con un cucharón, sin romperlos.",
          "s": null
        },
        {
          "t": "Termina con abundante cilantro y las hojas de cebollín picadas.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Pique a cebolinha (separe os talos das folhas) e o coentro; corte o queijo em cubinhos e o pão em pedaços.",
          "s": null
        },
        {
          "t": "Numa panela pequena aqueça partes iguais de leite e água com sal, pimenta e os talos de cebolinha.",
          "s": 240
        },
        {
          "t": "Quando começar a ferver suave, sem derramar, abaixe o fogo ao mínimo.",
          "s": null
        },
        {
          "t": "Quebre os ovos com cuidado direto no caldo e deixe pochear sem mexer até a clara firmar e a gema continuar cremosa.",
          "s": 210
        },
        {
          "t": "Coloque o pão (calado) e os cubos de queijo no fundo de uma tigela funda.",
          "s": null
        },
        {
          "t": "Sirva o caldo com os ovos por cima usando uma concha, sem quebrá-los.",
          "s": null
        },
        {
          "t": "Finalize com bastante coentro e as folhas de cebolinha picadas.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Chop the scallion (keep stems and greens apart) and the cilantro; cube the cheese and tear the bread.",
          "s": null
        },
        {
          "t": "In a small pot heat equal parts milk and water with salt, pepper and the scallion stems.",
          "s": 240
        },
        {
          "t": "When it begins to simmer gently, without boiling over, lower the heat to minimum.",
          "s": null
        },
        {
          "t": "Crack the eggs carefully straight into the broth and poach without stirring until the whites set and the yolks stay creamy.",
          "s": 210
        },
        {
          "t": "Put the bread (calado) and cheese cubes in the bottom of a deep bowl.",
          "s": null
        },
        {
          "t": "Ladle the broth and eggs over them without breaking the eggs.",
          "s": null
        },
        {
          "t": "Finish with plenty of cilantro and the chopped scallion greens.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Changua Bogotana (Caldo de Leche y Huevo) receta paso a paso"
  },
  {
    "id": "co_14",
    "country": "COLOMBIAN",
    "time": 14,
    "fav": false,
    "img": "images/co_14.jpg",
    "title": {
      "es": "Huevos Pericos con Arepa",
      "pt": "Ovos Pericos Colombianos com Arepa",
      "en": "Colombian Scrambled Eggs & Arepa"
    },
    "brTip": {
      "es": "Huevos revueltos con tomate y cebolla larga, servidos con arepa de harina de maíz y queso. En Brasil: cebolinha.",
      "pt": "Ovos mexidos com tomate e cebolinha, servidos com arepa de farinha de milho e queijo.",
      "en": "Scrambled eggs with tomato and scallion, served with a corn arepa and cheese."
    },
    "macrosTrad": {
      "kcal": 574,
      "p": 30,
      "c": 54,
      "f": 25
    },
    "macrosFit": {
      "kcal": 487,
      "p": 29,
      "c": 47,
      "f": 19
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 20,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Cebolinha (cebolla larga)",
          "pt": "No Brasil: Cebolinha (cebolla larga)",
          "en": "In Brazil: Cebolinha (cebolla larga)"
        },
        "fitId": null
      },
      {
        "id": "harina_pan",
        "grams": 60,
        "fitGrams": 50,
        "sub": {
          "es": "En Brasil: Flocão de milho",
          "pt": "No Brasil: Flocão de milho",
          "en": "In Brazil: Flocão de milho"
        },
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 30,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "manteiga",
        "grams": 5,
        "fitGrams": 2.5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Prepara la arepa: hidrata la harina de maíz con agua tibia y sal, forma un disco y déjalo listo.",
          "s": null
        },
        {
          "t": "Ásala en sartén por ambos lados hasta que esté dorada.",
          "s": 480
        },
        {
          "t": "Pela el tomate, quítale las semillas y córtalo en cubitos; pica fino el cebollín.",
          "s": null
        },
        {
          "t": "Sofríe el cebollín con unas gotas de aceite y añade el tomate; cocina hasta ablandar.",
          "s": 240
        },
        {
          "t": "Bate los huevos con sal.",
          "s": null
        },
        {
          "t": "Viértelos sobre el tomate a fuego bajo y muévelos suavemente con espátula hasta que queden jugosos y cremosos.",
          "s": 120
        },
        {
          "t": "Sirve los pericos junto a la arepa con el queso encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Prepare a arepa: hidrate a farinha de milho com água morna e sal, forme um disco e deixe pronto.",
          "s": null
        },
        {
          "t": "Asse na frigideira dos dois lados até dourar.",
          "s": 480
        },
        {
          "t": "Descasque o tomate, tire as sementes e corte em cubinhos; pique fino a cebolinha.",
          "s": null
        },
        {
          "t": "Refogue a cebolinha com gotas de óleo e junte o tomate; cozinhe até amolecer.",
          "s": 240
        },
        {
          "t": "Bata os ovos com sal.",
          "s": null
        },
        {
          "t": "Despeje sobre o tomate em fogo baixo e mexa delicadamente com espátula até ficarem suculentos e cremosos.",
          "s": 120
        },
        {
          "t": "Sirva os pericos com a arepa e o queijo por cima.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Make the arepa: hydrate the corn flour with warm water and salt and shape a disc.",
          "s": null
        },
        {
          "t": "Cook it in a pan on both sides until golden.",
          "s": 480
        },
        {
          "t": "Peel and seed the tomato and dice it; finely chop the scallion.",
          "s": null
        },
        {
          "t": "Sauté the scallion with a few drops of oil and add the tomato; cook until soft.",
          "s": 240
        },
        {
          "t": "Beat the eggs with salt.",
          "s": null
        },
        {
          "t": "Pour them over the tomato on low heat and stir gently with a spatula until soft and creamy.",
          "s": 120
        },
        {
          "t": "Serve the pericos with the arepa and the cheese on top.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Huevos Pericos con Arepa receta paso a paso"
  },
  {
    "id": "co_15",
    "country": "COLOMBIAN",
    "time": 25,
    "fav": false,
    "img": "images/co_15.jpg",
    "title": {
      "es": "Frijoles Antioqueños",
      "pt": "Feijão Antioqueño com Banana",
      "en": "Antioquia Loaded Beans"
    },
    "brTip": {
      "es": "Usa feijão vermelho o carioca cocido con zanahoria rallada y cubitos de banana-da-terra verde/madura para espesar.",
      "pt": "Feijão carioca/vermelho cozido com cenoura ralada e cubinhos de banana-da-terra.",
      "en": "Colombian beans thickened with grated carrot and diced plantain."
    },
    "macrosTrad": {
      "kcal": 614,
      "p": 16,
      "c": 77,
      "f": 28
    },
    "macrosFit": {
      "kcal": 443,
      "p": 13,
      "c": 62,
      "f": 18
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 150,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "panceta",
        "grams": 50,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 70,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Si usas frijol seco, remójalo desde la noche anterior y cuécelo en olla a presión hasta que esté blando.",
          "s": null
        },
        {
          "t": "Cocina los frijoles con la zanahoria rallada y cubitos pequeños de plátano: así el caldo espesa naturalmente.",
          "s": 900
        },
        {
          "t": "Hogao: sofríe tomate picado, cebollín, ajo y comino con unas gotas de aceite.",
          "s": 300
        },
        {
          "t": "Mezcla el hogao con los frijoles y ajusta la sal.",
          "s": null
        },
        {
          "t": "Corta la panceta en cubos y dórala en sartén hasta que quede crocante (chicharrón).",
          "s": 360
        },
        {
          "t": "Cocina el arroz si no lo tienes listo.",
          "s": 1080
        },
        {
          "t": "Sirve los frijoles espesos con el cerdo encima, arroz blanco y aguacate si tienes.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Se usar feijão seco, deixe de molho desde a noite anterior e cozinhe na pressão até ficar macio.",
          "s": null
        },
        {
          "t": "Cozinhe o feijão com a cenoura ralada e cubinhos de banana-da-terra: assim o caldo engrossa naturalmente.",
          "s": 900
        },
        {
          "t": "Hogao: refogue tomate picado, cebolinha, alho e cominho com gotas de óleo.",
          "s": 300
        },
        {
          "t": "Misture o hogao ao feijão e acerte o sal.",
          "s": null
        },
        {
          "t": "Corte a panceta em cubos e doure na frigideira até ficar crocante (torresmo).",
          "s": 360
        },
        {
          "t": "Cozinhe o arroz se não tiver pronto.",
          "s": 1080
        },
        {
          "t": "Sirva o feijão grosso com o porco por cima, arroz branco e abacate se tiver.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "If using dried beans, soak them overnight and cook in a pressure cooker until soft.",
          "s": null
        },
        {
          "t": "Cook the beans with the grated carrot and small plantain cubes: this thickens the broth naturally.",
          "s": 900
        },
        {
          "t": "Hogao: sauté chopped tomato, scallion, garlic and cumin with a few drops of oil.",
          "s": 300
        },
        {
          "t": "Stir the hogao into the beans and adjust the salt.",
          "s": null
        },
        {
          "t": "Cut the pork belly into cubes and brown until crisp (chicharrón).",
          "s": 360
        },
        {
          "t": "Cook the rice if not ready.",
          "s": 1080
        },
        {
          "t": "Serve the thick beans with the pork on top, white rice and avocado if you have it.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Frijoles Antioqueños receta paso a paso"
  },
  {
    "id": "co_16",
    "country": "COLOMBIAN",
    "time": 28,
    "fav": false,
    "img": "images/co_16.jpg",
    "title": {
      "es": "Lomo de Cerdo en Salsa de Piña",
      "pt": "Lombo Suíno ao Molho de Abacaxi",
      "en": "Colombian Pineapple-Glazed Pork"
    },
    "brTip": {
      "es": "Muy típico en Colombia: lombo suíno dorado glaseado con abacaxi (piña) licuado, cebolla y toque de limón.",
      "pt": "Lombo suíno dourado com molho agridoce natural de abacaxi fresco.",
      "en": "Seared pork loin glazed in fresh blended pineapple reduction."
    },
    "macrosTrad": {
      "kcal": 586,
      "p": 54,
      "c": 49,
      "f": 18
    },
    "macrosFit": {
      "kcal": 601,
      "p": 60,
      "c": 42,
      "f": 21
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 175,
        "fitGrams": 195,
        "sub": null,
        "fitId": null
      },
      {
        "id": "abacaxi",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "brocolis",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el lomo en medallones de 2 cm y sazónalos con ajo, sal y pimienta.",
          "s": null
        },
        {
          "t": "Cocina el arroz y cuece el brócoli al vapor.",
          "s": 1080
        },
        {
          "t": "Dora los medallones en sartén caliente con unas gotas de aceite por ambos lados; retíralos.",
          "s": 480
        },
        {
          "t": "Licúa 1 taza de piña fresca con ⅓ de taza de agua.",
          "s": null
        },
        {
          "t": "Vierte la piña en la sartén con la cebolla rallada y hierve hasta que caramelice y espese.",
          "s": 240
        },
        {
          "t": "Devuelve el cerdo y cocina para que absorba el glaseado brillante; añade gotas de limón y sal.",
          "s": 180
        },
        {
          "t": "Sirve con el arroz y el brócoli, bañando con la salsa.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte o lombo em medalhões de 2 cm e tempere com alho, sal e pimenta.",
          "s": null
        },
        {
          "t": "Cozinhe o arroz e o brócolis no vapor.",
          "s": 1080
        },
        {
          "t": "Doure os medalhões em frigideira quente com gotas de óleo dos dois lados; retire.",
          "s": 480
        },
        {
          "t": "Bata 1 xícara de abacaxi fresco com ⅓ de xícara de água.",
          "s": null
        },
        {
          "t": "Despeje o abacaxi na frigideira com a cebola ralada e ferva até caramelizar e engrossar.",
          "s": 240
        },
        {
          "t": "Volte o porco e cozinhe para absorver o glaçado brilhante; junte gotas de limão e sal.",
          "s": 180
        },
        {
          "t": "Sirva com o arroz e o brócolis, regando com o molho.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the loin into 2 cm medallions and season with garlic, salt and pepper.",
          "s": null
        },
        {
          "t": "Cook the rice and steam the broccoli.",
          "s": 1080
        },
        {
          "t": "Brown the medallions in a hot pan with a few drops of oil on both sides; remove.",
          "s": 480
        },
        {
          "t": "Blend 1 cup fresh pineapple with ⅓ cup water.",
          "s": null
        },
        {
          "t": "Pour the pineapple into the pan with the grated onion and boil until it caramelizes and thickens.",
          "s": 240
        },
        {
          "t": "Return the pork and cook so it soaks up the glossy glaze; add a few drops of lime and salt.",
          "s": 180
        },
        {
          "t": "Serve with the rice and broccoli, spooning over the sauce.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Lomo de Cerdo en Salsa de Piña receta paso a paso"
  },
  {
    "id": "co_17",
    "country": "COLOMBIAN",
    "time": 22,
    "fav": false,
    "img": "images/co_17.jpg",
    "title": {
      "es": "Papas Chorreadas con Queso y Pollo",
      "pt": "Batatas Chorreadas com Queijo",
      "en": "Colombian Cheesy Hogao Potatoes"
    },
    "brTip": {
      "es": "Papas bañadas en salsa de hogao, crema y queso campesino o doble crema. En Brasil: queijo minas padrão.",
      "pt": "Batatas banhadas em molho de hogao, creme e queijo campesino ou doble crema. No Brasil: queijo minas padrão.",
      "en": "Potatoes covered in hogao sauce, cream and campesino or doble crema cheese. In Brazil: minas padrão cheese."
    },
    "macrosTrad": {
      "kcal": 612,
      "p": 56,
      "c": 42,
      "f": 24
    },
    "macrosFit": {
      "kcal": 436,
      "p": 56,
      "c": 36,
      "f": 7
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 200,
        "fitGrams": 160,
        "sub": {
          "es": "En Brasil: Batata bolinha",
          "pt": "No Brasil: Batata bolinha",
          "en": "In Brazil: Batata bolinha"
        },
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 130,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 20,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Cebolinha",
          "pt": "No Brasil: Cebolinha",
          "en": "In Brazil: Cebolinha"
        },
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 50,
        "fitGrams": 35,
        "sub": {
          "es": "En Brasil: Queijo minas padrão",
          "pt": "No Brasil: Queijo minas padrão",
          "en": "In Brazil: Queijo minas padrão"
        },
        "fitId": "ricota"
      },
      {
        "id": "creme_leite",
        "grams": 30,
        "fitGrams": 20,
        "sub": null,
        "fitId": "iogurte"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece las papas enteras o en mitades, con cáscara, en agua con sal hasta que estén suaves.",
          "s": 1080
        },
        {
          "t": "Pica el cebollín y el tomate en cubitos; ralla el queso.",
          "s": null
        },
        {
          "t": "Sazona la pechuga con sal y pimienta y séllala a la plancha con unas gotas de aceite por ambos lados.",
          "s": 480
        },
        {
          "t": "Hogao: sofríe el cebollín y el tomate con comino y sal hasta ablandar.",
          "s": 300
        },
        {
          "t": "Baja el fuego, agrega la crema de leche y el queso, y remueve hasta que funda en una salsa cremosa.",
          "s": 120
        },
        {
          "t": "Coloca las papas calientes en el plato (puedes abrirlas un poco).",
          "s": null
        },
        {
          "t": "Báñalas con la salsa de queso y acompaña con el pollo en tiras.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe as batatas inteiras ou em metades, com casca, em água com sal até ficarem macias.",
          "s": 1080
        },
        {
          "t": "Pique a cebolinha e o tomate em cubinhos; rale o queijo.",
          "s": null
        },
        {
          "t": "Tempere o peito com sal e pimenta e sele na chapa com gotas de óleo dos dois lados.",
          "s": 480
        },
        {
          "t": "Hogao: refogue a cebolinha e o tomate com cominho e sal até amolecer.",
          "s": 300
        },
        {
          "t": "Abaixe o fogo, junte o creme de leite e o queijo e mexa até derreter num molho cremoso.",
          "s": 120
        },
        {
          "t": "Coloque as batatas quentes no prato (pode abri-las um pouco).",
          "s": null
        },
        {
          "t": "Cubra com o molho de queijo e acompanhe com o frango em tiras.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil the potatoes whole or halved, skin on, in salted water until soft.",
          "s": 1080
        },
        {
          "t": "Dice the scallion and tomato; grate the cheese.",
          "s": null
        },
        {
          "t": "Season the chicken breast with salt and pepper and sear on a griddle with a few drops of oil on both sides.",
          "s": 480
        },
        {
          "t": "Hogao: sauté the scallion and tomato with cumin and salt until soft.",
          "s": 300
        },
        {
          "t": "Lower the heat, add the cream and cheese and stir until melted into a creamy sauce.",
          "s": 120
        },
        {
          "t": "Place the hot potatoes on the plate (you can split them slightly).",
          "s": null
        },
        {
          "t": "Pour the cheese sauce over and serve with the chicken in strips.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Papas Chorreadas con Queso y Pollo receta paso a paso"
  },
  {
    "id": "co_18",
    "country": "COLOMBIAN",
    "time": 22,
    "fav": false,
    "img": "images/co_18.jpg",
    "title": {
      "es": "Mojarra Frita Costeña con Arroz de Coco y Patacón",
      "pt": "Tilápia Frita Costeña com Arroz de Coco e Patacón",
      "en": "Coastal Fried Mojarra with Coconut Rice and Patacón"
    },
    "brTip": {
      "es": "En Colombia la mojarra es de la misma familia que la tilápia de Brasil; acompáñala con mandioca o banana-da-terra.",
      "pt": "A mojarra colombiana é prima direta da tilápia brasileira; sirva com limão e banana-da-terra.",
      "en": "Colombian coastal fish style adapted directly with Brazilian tilapia and plantain."
    },
    "macrosTrad": {
      "kcal": 619,
      "p": 42,
      "c": 62,
      "f": 24
    },
    "macrosFit": {
      "kcal": 492,
      "p": 45,
      "c": 49,
      "f": 15
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 185,
        "fitGrams": 205,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 90,
        "fitGrams": 70,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "leite_coco",
        "grams": 30,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 20,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sazona los filetes (o el pescado entero con cortes) con ajo machacado, limón y sal.",
          "s": null
        },
        {
          "t": "Deja marinar mientras preparas lo demás.",
          "s": 900
        },
        {
          "t": "Cocina el arroz si no lo tienes listo.",
          "s": 1080
        },
        {
          "t": "Pasa el pescado ligeramente por harina o maicena (opcional) y cocínalo en sartén caliente con un poco de aceite o en airfryer hasta que esté bien crocante.",
          "s": 720
        },
        {
          "t": "Patacón: corta el plátano verde en trozos gruesos y dóralos.",
          "s": 180
        },
        {
          "t": "Aplástalos con un vaso y vuelve a dorarlos por ambos lados; sálalos.",
          "s": 240
        },
        {
          "t": "Sirve el pescado crocante con limón, patacones, arroz y ensalada de tomate y cebolla.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Tempere os filés (ou o peixe inteiro com cortes) com alho amassado, limão e sal.",
          "s": null
        },
        {
          "t": "Deixe marinar enquanto prepara o resto.",
          "s": 900
        },
        {
          "t": "Cozinhe o arroz se não tiver pronto.",
          "s": 1080
        },
        {
          "t": "Passe o peixe levemente em farinha ou amido de milho (opcional) e frite em frigideira quente com um pouco de óleo ou na airfryer até ficar bem crocante.",
          "s": 720
        },
        {
          "t": "Patacón: corte a banana-da-terra verde em pedaços grossos e doure.",
          "s": 180
        },
        {
          "t": "Amasse com um copo e doure de novo dos dois lados; salgue.",
          "s": 240
        },
        {
          "t": "Sirva o peixe crocante com limão, patacones, arroz e salada de tomate e cebola.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Season the fillets (or the scored whole fish) with crushed garlic, lime and salt.",
          "s": null
        },
        {
          "t": "Let it marinate while you prepare the rest.",
          "s": 900
        },
        {
          "t": "Cook the rice if not ready.",
          "s": 1080
        },
        {
          "t": "Dust the fish lightly with flour or cornstarch (optional) and cook in a hot pan with a little oil or in the air fryer until very crisp.",
          "s": 720
        },
        {
          "t": "Patacón: cut the green plantain into thick pieces and brown them.",
          "s": 180
        },
        {
          "t": "Flatten them with a glass and brown again on both sides; salt them.",
          "s": 240
        },
        {
          "t": "Serve the crispy fish with lime, patacones, rice and tomato-onion salad.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Mojarra Frita Costeña con Arroz de Coco y Patacón receta paso a paso"
  },
  {
    "id": "co_19",
    "country": "COLOMBIAN",
    "time": 26,
    "fav": false,
    "img": "images/co_19.jpg",
    "title": {
      "es": "Arroz Atollado Valluno",
      "pt": "Arroz Atolado Colombiano",
      "en": "Cali Creamy Pork & Potato Rice"
    },
    "brTip": {
      "es": "Arroz bien caldoso y cremoso estilo risotto con cerdo, pollo, papa en cubitos y hogao.",
      "pt": "Arroz bem úmido e cremoso com lombo, frango, batata em cubos e hogao.",
      "en": "Rich, brothy Colombian rice cooked with pork, chicken, and diced potato."
    },
    "macrosTrad": {
      "kcal": 738,
      "p": 62,
      "c": 61,
      "f": 25
    },
    "macrosFit": {
      "kcal": 654,
      "p": 63,
      "c": 49,
      "f": 22
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 100,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 50,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 125,
        "fitGrams": 100,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "batata",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "achiote",
        "grams": 2,
        "fitGrams": 2,
        "sub": {
          "es": "En Brasil: Colorau (urucum)",
          "pt": "No Brasil: Colorau (urucum)",
          "en": "In Brazil: Colorau (urucum)"
        },
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Coentro",
          "pt": "No Brasil: Coentro",
          "en": "In Brazil: Coentro"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el cerdo en cubos; pica la cebolla, el tomate y el pimentón; pela y corta las papas en cubitos.",
          "s": null
        },
        {
          "t": "Dora el cerdo, el pollo y el chorizo en olla con unas gotas de aceite, ajo, comino y achiote.",
          "s": 300
        },
        {
          "t": "Agrega la cebolla, el tomate y el pimentón y sofríe.",
          "s": 240
        },
        {
          "t": "Añade el arroz crudo y las papas y vierte 3 partes de caldo por cada parte de arroz (lleva más líquido que un arroz normal); sala.",
          "s": null
        },
        {
          "t": "Cocina destapado a fuego medio-bajo, removiendo de vez en cuando, hasta que quede húmedo y cremoso, “atollado”.",
          "s": 1080
        },
        {
          "t": "Si se seca antes de tiempo, agrega un chorrito de caldo caliente: debe quedar meloso, no seco.",
          "s": null
        },
        {
          "t": "Termina con cilantro picado y sirve con aguacate o patacón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte o porco em cubos; pique a cebola, o tomate e o pimentão; descasque e corte as batatas em cubinhos.",
          "s": null
        },
        {
          "t": "Doure o porco, o frango e a linguiça na panela com gotas de óleo, alho, cominho e achiote (colorau).",
          "s": 300
        },
        {
          "t": "Junte a cebola, o tomate e o pimentão e refogue.",
          "s": 240
        },
        {
          "t": "Acrescente o arroz cru e as batatas e despeje 3 partes de caldo para cada parte de arroz (leva mais líquido que um arroz normal); salgue.",
          "s": null
        },
        {
          "t": "Cozinhe destampado em fogo médio-baixo, mexendo às vezes, até ficar úmido e cremoso, “atollado”.",
          "s": 1080
        },
        {
          "t": "Se secar antes da hora, junte um pouco de caldo quente: deve ficar meloso, não seco.",
          "s": null
        },
        {
          "t": "Finalize com coentro picado e sirva com abacate ou patacón.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cube the pork; chop the onion, tomato and bell pepper; peel and dice the potatoes.",
          "s": null
        },
        {
          "t": "Brown the pork, chicken and chorizo in a pot with a few drops of oil, garlic, cumin and annatto.",
          "s": 300
        },
        {
          "t": "Add the onion, tomato and pepper and sauté.",
          "s": 240
        },
        {
          "t": "Add the raw rice and potatoes and pour in 3 parts stock for each part rice (more liquid than regular rice); salt it.",
          "s": null
        },
        {
          "t": "Cook uncovered over medium-low, stirring occasionally, until moist and creamy, “atollado”.",
          "s": 1080
        },
        {
          "t": "If it dries out too soon, add a splash of hot stock: it should be soupy-soft, not dry.",
          "s": null
        },
        {
          "t": "Finish with chopped cilantro and serve with avocado or patacón.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Arroz Atollado Valluno receta paso a paso"
  },
  {
    "id": "co_20",
    "country": "COLOMBIAN",
    "time": 16,
    "fav": false,
    "img": "images/co_20.jpg",
    "title": {
      "es": "Arepa de Choclo con Queso",
      "pt": "Arepa Doce de Milho com Queijo",
      "en": "Colombian Sweet Corn & Cheese Arepa"
    },
    "brTip": {
      "es": "Arepa de maíz tierno (choclo) con mantequilla y queso fresco encima. En Brasil: milho verde y queijo minas frescal.",
      "pt": "Arepa de milho verde com manteiga e queijo fresco por cima. No Brasil: queijo minas frescal.",
      "en": "Fresh corn arepa with butter and queso fresco on top. In Brazil: minas frescal cheese."
    },
    "macrosTrad": {
      "kcal": 460,
      "p": 15,
      "c": 57,
      "f": 21
    },
    "macrosFit": {
      "kcal": 286,
      "p": 10,
      "c": 46,
      "f": 9
    },
    "ingredients": [
      {
        "id": "milho",
        "grams": 150,
        "fitGrams": 120,
        "sub": {
          "es": "En Brasil: Milho verde",
          "pt": "No Brasil: Milho verde",
          "en": "In Brazil: Milho verde"
        },
        "fitId": null
      },
      {
        "id": "queso_fresco",
        "grams": 50,
        "fitGrams": 35,
        "sub": {
          "es": "En Brasil: Queijo minas frescal",
          "pt": "No Brasil: Queijo minas frescal",
          "en": "In Brazil: Queijo minas frescal"
        },
        "fitId": "ricota"
      },
      {
        "id": "harina_pan",
        "grams": 20,
        "fitGrams": 15,
        "sub": {
          "es": "En Brasil: Flocão de milho",
          "pt": "No Brasil: Flocão de milho",
          "en": "In Brazil: Flocão de milho"
        },
        "fitId": null
      },
      {
        "id": "manteiga",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "acucar",
        "grams": 8,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Escurre muy bien los granos de choclo/maíz verde.",
          "s": null
        },
        {
          "t": "Licúalos con la mantequilla derretida, la harina de maíz precocida, una pizca de sal y el azúcar hasta obtener una mezcla espesa pero vertible.",
          "s": null
        },
        {
          "t": "Deja reposar para que la harina hidrate y espese.",
          "s": 300
        },
        {
          "t": "Calienta una sartén antiadherente a fuego bajo con unas gotas de aceite y vierte un cucharón formando una tortita redonda.",
          "s": null
        },
        {
          "t": "Cocina tapada hasta que aparezcan burbujitas y el borde dore; voltea con cuidado.",
          "s": 180
        },
        {
          "t": "Dora el otro lado.",
          "s": 120
        },
        {
          "t": "Coloca rebanadas de queso encima, dobla por la mitad y deja que se funda antes de servir.",
          "s": 60
        }
      ],
      "pt": [
        {
          "t": "Escorra muito bem os grãos de milho verde.",
          "s": null
        },
        {
          "t": "Bata com a manteiga derretida, a farinha de milho pré-cozida, uma pitada de sal e o açúcar até obter uma massa grossa mas que escorra.",
          "s": null
        },
        {
          "t": "Deixe descansar para a farinha hidratar e engrossar.",
          "s": 300
        },
        {
          "t": "Aqueça uma frigideira antiaderente em fogo baixo com gotas de óleo e despeje uma concha formando uma panqueca redonda.",
          "s": null
        },
        {
          "t": "Cozinhe tampada até aparecerem bolhinhas e a borda dourar; vire com cuidado.",
          "s": 180
        },
        {
          "t": "Doure o outro lado.",
          "s": 120
        },
        {
          "t": "Coloque fatias de queijo por cima, dobre ao meio e deixe derreter antes de servir.",
          "s": 60
        }
      ],
      "en": [
        {
          "t": "Drain the sweet-corn kernels very well.",
          "s": null
        },
        {
          "t": "Blend with the melted butter, the precooked corn flour, a pinch of salt and the sugar into a thick but pourable batter.",
          "s": null
        },
        {
          "t": "Let it rest so the flour hydrates and thickens.",
          "s": 300
        },
        {
          "t": "Heat a nonstick pan over low with a few drops of oil and pour in a ladleful to form a round cake.",
          "s": null
        },
        {
          "t": "Cook covered until bubbles appear and the edge browns; flip carefully.",
          "s": 180
        },
        {
          "t": "Brown the other side.",
          "s": 120
        },
        {
          "t": "Lay cheese slices on top, fold in half and let it melt before serving.",
          "s": 60
        }
      ]
    },
    "videoQuery": "como hacer Arepa de Choclo con Queso receta paso a paso"
  },
  {
    "id": "es_1",
    "country": "SPANISH",
    "time": 35,
    "fav": true,
    "img": "images/es_1.jpg",
    "title": {
      "es": "Paella Mixta",
      "pt": "Paella Mista",
      "en": "Mixed Paella"
    },
    "brTip": {
      "es": "En Brasil: azafrán → açafrão-da-terra (cúrcuma) + colorau/páprica; arroz bomba → arroz parboilizado o arroz arbóreo.",
      "pt": "No Brasil: açafrão-da-terra (cúrcuma) + páprica; arroz parboilizado ou arbóreo.",
      "en": "In Brazil: saffron sub → turmeric + paprika; use parboiled or arborio rice."
    },
    "macrosTrad": {
      "kcal": 636,
      "p": 61,
      "c": 49,
      "f": 21
    },
    "macrosFit": {
      "kcal": 568,
      "p": 67,
      "c": 42,
      "f": 14
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 100,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mariscos",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "calamar",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 95,
        "sub": {
          "es": "En Brasil: Arroz parboilizado (bomba)",
          "pt": "No Brasil: Arroz parboilizado (bomba)",
          "en": "In Brazil: Arroz parboilizado (bomba)"
        },
        "fitId": "arroz"
      },
      {
        "id": "pimentao",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azafran",
        "grams": 1,
        "fitGrams": 1,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "limao",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Calienta el caldo de pollo o pescado (2,5 partes por 1 de arroz) con unas hebras de azafrán y mantenlo caliente. Corta el pollo en trozos y sazónalo con sal.",
          "s": null
        },
        {
          "t": "En una sartén ancha y baja (paellera) calienta el aceite de oliva y dora el pollo por todos lados; apártalo hacia los bordes.",
          "s": 360
        },
        {
          "t": "En el centro sofríe el calamar en aros, el ajo picado, el pimiento en tiras y el tomate rallado con 1 cdta de pimentón dulce.",
          "s": 240
        },
        {
          "t": "Agrega el arroz crudo y remueve para nacararlo; luego vierte el caldo caliente y reparte el arroz parejo. Ajusta la sal.",
          "s": 120
        },
        {
          "t": "A partir de aquí no se revuelve: cocina a fuego medio-alto.",
          "s": 480
        },
        {
          "t": "Baja a fuego suave y, en los últimos minutos, acomoda los camarones y los mejillones encima hasta que los camarones se pongan rosados. Si quieres socarrat, sube el fuego 1 min al final.",
          "s": 600
        },
        {
          "t": "Apaga, cubre con un paño limpio y deja reposar; sirve con gajos de limón.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Aqueça o caldo de frango ou peixe (2,5 partes para 1 de arroz) com alguns fios de açafrão e mantenha quente. Corte o frango em pedaços e tempere com sal.",
          "s": null
        },
        {
          "t": "Numa frigideira larga e baixa (paellera) aqueça o azeite e doure o frango por todos os lados; afaste para as bordas.",
          "s": 360
        },
        {
          "t": "No centro refogue a lula em anéis, o alho picado, o pimentão em tiras e o tomate ralado com 1 colher de chá de páprica doce.",
          "s": 240
        },
        {
          "t": "Junte o arroz cru e mexa para envolver; depois despeje o caldo quente e espalhe o arroz por igual. Acerte o sal.",
          "s": 120
        },
        {
          "t": "A partir daqui não se mexe: cozinhe em fogo médio-alto.",
          "s": 480
        },
        {
          "t": "Abaixe para fogo baixo e, nos últimos minutos, arrume os camarões e os mexilhões por cima até os camarões ficarem rosados. Para o socarrat, aumente o fogo 1 min no final.",
          "s": 600
        },
        {
          "t": "Desligue, cubra com um pano limpo e deixe descansar; sirva com gomos de limão.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Heat the chicken or fish stock (2.5 parts to 1 of rice) with a few saffron threads and keep it hot. Cut the chicken into pieces and salt it.",
          "s": null
        },
        {
          "t": "In a wide, shallow pan (paella pan) heat the olive oil and brown the chicken on all sides; push it to the edges.",
          "s": 360
        },
        {
          "t": "In the center sauté the squid rings, chopped garlic, pepper strips and grated tomato with 1 tsp sweet paprika.",
          "s": 240
        },
        {
          "t": "Add the raw rice and stir to coat; then pour in the hot stock and spread the rice evenly. Adjust the salt.",
          "s": 120
        },
        {
          "t": "From now on do not stir: cook over medium-high heat.",
          "s": 480
        },
        {
          "t": "Lower the heat and, in the last minutes, place the shrimp and mussels on top until the shrimp turn pink. For socarrat, raise the heat for 1 min at the end.",
          "s": 600
        },
        {
          "t": "Turn off, cover with a clean towel and let it rest; serve with lemon wedges.",
          "s": 300
        }
      ]
    },
    "videoQuery": "como hacer Paella Mixta receta paso a paso"
  },
  {
    "id": "es_2",
    "country": "SPANISH",
    "time": 25,
    "fav": false,
    "img": "images/es_2.jpg",
    "title": {
      "es": "Tortilla Española de Patatas",
      "pt": "Tortilha Espanhola de Batata",
      "en": "Spanish Potato Omelette"
    },
    "brTip": {
      "es": "Usa batata inglesa común (asterix o monalisa en Brasil), huevos, cebolla y aceite de oliva (puedes hacer la papa en airfryer en modo fit).",
      "pt": "Batata inglesa fatiada fina, cebola, ovos e azeite (no modo fit, faça a batata na airfryer).",
      "en": "Thinly sliced potato, onion, eggs, and olive oil (air-fry potatoes in fit mode)."
    },
    "macrosTrad": {
      "kcal": 637,
      "p": 28,
      "c": 39,
      "f": 41
    },
    "macrosFit": {
      "kcal": 555,
      "p": 30,
      "c": 34,
      "f": 33
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 180,
        "fitGrams": 200,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 170,
        "fitGrams": 135,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 25,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela las papas y córtalas en láminas finas e irregulares (3 mm); corta la cebolla en juliana fina.",
          "s": null
        },
        {
          "t": "Cocina las papas y la cebolla con sal en sartén tapada con el aceite de oliva a fuego medio-bajo, moviendo suave, hasta que estén muy tiernas pero sin dorarse (en modo fit, en airfryer).",
          "s": 900
        },
        {
          "t": "Escúrrelas bien del aceite (guarda 1 cdta para cuajar).",
          "s": null
        },
        {
          "t": "Bate 3 huevos con sal en un bol grande, agrega las papas tibias, aplasta un poco con el tenedor y deja reposar para que se empapen.",
          "s": 300
        },
        {
          "t": "Calienta una sartén pequeña antiadherente con la cucharadita de aceite, vierte la mezcla y cuaja a fuego medio-bajo despegando los bordes.",
          "s": 180
        },
        {
          "t": "Cubre la sartén con un plato y voltea la tortilla de un golpe firme; deslízala de nuevo a la sartén.",
          "s": null
        },
        {
          "t": "Cuaja el otro lado dejando el centro jugoso y deja reposar un par de minutos antes de cortar.",
          "s": 120
        }
      ],
      "pt": [
        {
          "t": "Descasque as batatas e corte em lâminas finas e irregulares (3 mm); corte a cebola em tiras finas.",
          "s": null
        },
        {
          "t": "Cozinhe as batatas e a cebola com sal em frigideira tampada com o azeite em fogo médio-baixo, mexendo de leve, até ficarem bem macias mas sem dourar (no modo fit, na airfryer).",
          "s": 900
        },
        {
          "t": "Escorra bem do azeite (guarde 1 colher de chá para cozinhar).",
          "s": null
        },
        {
          "t": "Bata 3 ovos com sal numa tigela grande, junte as batatas mornas, amasse um pouco com o garfo e deixe descansar para absorverem.",
          "s": 300
        },
        {
          "t": "Aqueça uma frigideira pequena antiaderente com a colher de azeite, despeje a mistura e cozinhe em fogo médio-baixo soltando as bordas.",
          "s": 180
        },
        {
          "t": "Cubra a frigideira com um prato e vire a tortilla com um movimento firme; deslize de volta para a frigideira.",
          "s": null
        },
        {
          "t": "Cozinhe o outro lado deixando o centro suculento e descanse uns minutos antes de cortar.",
          "s": 120
        }
      ],
      "en": [
        {
          "t": "Peel the potatoes and slice them thin and irregular (3 mm); slice the onion thinly.",
          "s": null
        },
        {
          "t": "Cook the potatoes and onion with salt in a covered pan with the olive oil over medium-low, stirring gently, until very tender but not browned (fit version: air fryer).",
          "s": 900
        },
        {
          "t": "Drain them well from the oil (keep 1 tsp for cooking).",
          "s": null
        },
        {
          "t": "Beat 3 eggs with salt in a large bowl, add the warm potatoes, mash slightly with a fork and let them soak.",
          "s": 300
        },
        {
          "t": "Heat a small nonstick pan with the teaspoon of oil, pour in the mixture and set over medium-low, loosening the edges.",
          "s": 180
        },
        {
          "t": "Cover the pan with a plate and flip the tortilla in one firm move; slide it back into the pan.",
          "s": null
        },
        {
          "t": "Set the other side, keeping the center juicy, and let it rest a couple of minutes before cutting.",
          "s": 120
        }
      ]
    },
    "videoQuery": "como hacer Tortilla Española de Patatas receta paso a paso"
  },
  {
    "id": "es_3",
    "country": "SPANISH",
    "time": 12,
    "fav": false,
    "img": "images/es_3.jpg",
    "title": {
      "es": "Gazpacho Andaluz (Sopa Fría)",
      "pt": "Gaspacho Andaluz (Sopa Fria)",
      "en": "Andalusian Cold Gazpacho"
    },
    "brTip": {
      "es": "Sopa fría sin cocción: tomates muy maduros de feira + pepino + pimentón + ajo + pan + aceite de oliva.",
      "pt": "Sopa fria sem fogo: tomates bem maduros, pepino, pimentão, alho e azeite.",
      "en": "No-cook chilled tomato, cucumber, bell pepper, garlic, and olive oil soup."
    },
    "macrosTrad": {
      "kcal": 365,
      "p": 10,
      "c": 31,
      "f": 24
    },
    "macrosFit": {
      "kcal": 280,
      "p": 11,
      "c": 30,
      "f": 14
    },
    "ingredients": [
      {
        "id": "tomate",
        "grams": 220,
        "fitGrams": 255,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pepino",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 30,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 20,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "vinagre",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece el huevo 10 min, pásalo a agua fría, pélalo y pícalo.",
          "s": 600
        },
        {
          "t": "Lava y trocea tomates bien maduros, el pepino pelado (sin semillas si son grandes), el pimentón y medio diente de ajo sin el germen central.",
          "s": null
        },
        {
          "t": "Remoja un trozo de pan sin corteza en agua fría con 1 cda de vinagre (omite el pan en la versión low-carb).",
          "s": null
        },
        {
          "t": "Licúa todo a máxima potencia hasta que quede totalmente liso.",
          "s": 120
        },
        {
          "t": "Con la licuadora en marcha agrega el aceite de oliva en hilo y sal para emulsionar; prueba y ajusta vinagre y sal.",
          "s": null
        },
        {
          "t": "Pasa por un colador fino y refrigera: se toma bien frío.",
          "s": 1800
        },
        {
          "t": "Sirve en vaso o tazón con el huevo picado y cubitos de pepino y pimentón por encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o ovo 10 min, passe para água fria, descasque e pique.",
          "s": 600
        },
        {
          "t": "Lave e corte tomates bem maduros, o pepino descascado (sem sementes se forem grandes), o pimentão e meio dente de alho sem o miolo.",
          "s": null
        },
        {
          "t": "Deixe um pedaço de pão sem casca de molho em água fria com 1 colher de vinagre (dispense o pão na versão low-carb).",
          "s": null
        },
        {
          "t": "Bata tudo na potência máxima até ficar totalmente liso.",
          "s": 120
        },
        {
          "t": "Com o liquidificador ligado, adicione o azeite em fio e sal para emulsionar; prove e ajuste vinagre e sal.",
          "s": null
        },
        {
          "t": "Passe por peneira fina e leve à geladeira: toma-se bem gelado.",
          "s": 1800
        },
        {
          "t": "Sirva em copo ou tigela com o ovo picado e cubinhos de pepino e pimentão por cima.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil the egg 10 min, cool in cold water, peel and chop it.",
          "s": 600
        },
        {
          "t": "Wash and chop very ripe tomatoes, the peeled cucumber (seeded if large), the bell pepper and half a garlic clove with the germ removed.",
          "s": null
        },
        {
          "t": "Soak a piece of crustless bread in cold water with 1 tbsp vinegar (skip the bread for low-carb).",
          "s": null
        },
        {
          "t": "Blend everything at full power until completely smooth.",
          "s": 120
        },
        {
          "t": "With the blender running, drizzle in the olive oil and salt to emulsify; taste and adjust vinegar and salt.",
          "s": null
        },
        {
          "t": "Strain through a fine sieve and chill: it is served very cold.",
          "s": 1800
        },
        {
          "t": "Serve in a glass or bowl topped with the chopped egg and diced cucumber and pepper.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Gazpacho Andaluz (Sopa Fría) receta paso a paso"
  },
  {
    "id": "es_4",
    "country": "SPANISH",
    "time": 12,
    "fav": false,
    "img": "images/es_4.jpg",
    "title": {
      "es": "Gambas al Ajillo",
      "pt": "Camarão ao Alho (Gambas al Ajillo)",
      "en": "Garlic Shrimp (Gambas al Ajillo)"
    },
    "brTip": {
      "es": "Aceite de oliva con mucho ajo laminado y guindilla; listo en 10 minutos. En Brasil: pimenta calabresa o dedo-de-moça.",
      "pt": "Azeite com muito alho laminado e guindilla; pronto em 10 minutos. No Brasil: pimenta calabresa ou dedo-de-moça.",
      "en": "Olive oil with lots of sliced garlic and guindilla chili; ready in 10 minutes. In Brazil: red pepper flakes."
    },
    "macrosTrad": {
      "kcal": 531,
      "p": 37,
      "c": 34,
      "f": 28
    },
    "macrosFit": {
      "kcal": 435,
      "p": 39,
      "c": 30,
      "f": 18
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 170,
        "fitGrams": 185,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 20,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 25,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile_seco",
        "grams": 2,
        "fitGrams": 2.5,
        "sub": {
          "es": "En Brasil: Pimenta calabresa (guindilla)",
          "pt": "No Brasil: Pimenta calabresa (guindilla)",
          "en": "In Brazil: Pimenta calabresa (guindilla)"
        },
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 5,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Seca muy bien los langostinos o gambas pelados con papel toalla y sazónalos con sal.",
          "s": null
        },
        {
          "t": "Lamina los dientes de ajo en rodajas finas y pica el perejil.",
          "s": null
        },
        {
          "t": "Coloca el ajo en una cazuela de barro o sartén fría con el aceite de oliva y la guindilla.",
          "s": null
        },
        {
          "t": "Enciende a fuego medio-bajo y deja que el ajo perfume el aceite hasta que empiece a dorar por los bordes (¡si se quema, amarga!).",
          "s": 120
        },
        {
          "t": "Sube el fuego a alto, echa los camarones y saltea rápido hasta que se pongan rosados.",
          "s": 150
        },
        {
          "t": "Apaga, añade unas gotas de limón y espolvorea el perejil.",
          "s": null
        },
        {
          "t": "Sirve hirviendo con pan para mojar el aceite (o con papa cocida en el modo fit).",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Seque muito bem os camarões descascados com papel-toalha e tempere com sal.",
          "s": null
        },
        {
          "t": "Fatie os dentes de alho em lâminas finas e pique a salsinha.",
          "s": null
        },
        {
          "t": "Coloque o alho numa caçarola de barro ou frigideira fria com o azeite e a guindilla (pimenta seca).",
          "s": null
        },
        {
          "t": "Ligue em fogo médio-baixo e deixe o alho perfumar o azeite até começar a dourar nas bordas (se queimar, amarga!).",
          "s": 120
        },
        {
          "t": "Aumente para fogo alto, junte os camarões e salteie rápido até ficarem rosados.",
          "s": 150
        },
        {
          "t": "Desligue, acrescente gotas de limão e polvilhe a salsinha.",
          "s": null
        },
        {
          "t": "Sirva fervendo com pão para molhar no azeite (ou com batata cozida no modo fit).",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Pat the peeled prawns very dry with paper towel and salt them.",
          "s": null
        },
        {
          "t": "Slice the garlic cloves thinly and chop the parsley.",
          "s": null
        },
        {
          "t": "Put the garlic in a cold clay dish or pan with the olive oil and the guindilla chili.",
          "s": null
        },
        {
          "t": "Turn on medium-low heat and let the garlic perfume the oil until it starts to color at the edges (burnt garlic turns bitter!).",
          "s": 120
        },
        {
          "t": "Turn the heat to high, add the shrimp and sauté quickly until pink.",
          "s": 150
        },
        {
          "t": "Turn off, add a few drops of lemon and sprinkle the parsley.",
          "s": null
        },
        {
          "t": "Serve sizzling with bread to mop up the oil (or with boiled potato for the fit version).",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Gambas al Ajillo receta paso a paso"
  },
  {
    "id": "es_5",
    "country": "SPANISH",
    "time": 28,
    "fav": false,
    "img": "images/es_5.jpg",
    "title": {
      "es": "Pollo al Ajillo Español",
      "pt": "Frango ao Alho Espanhol",
      "en": "Spanish Garlic Herb Chicken"
    },
    "brTip": {
      "es": "Con cabeza entera de ajo dorado en aceite de oliva, laurel, vino blanco o vinagre y papas.",
      "pt": "Com muitos dentes de alho dourados no azeite, louro e batatas.",
      "en": "Chicken braised with whole golden garlic cloves, bay leaf, and potatoes."
    },
    "macrosTrad": {
      "kcal": 676,
      "p": 48,
      "c": 29,
      "f": 42
    },
    "macrosFit": {
      "kcal": 514,
      "p": 68,
      "c": 26,
      "f": 14
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 180,
        "fitGrams": 200,
        "sub": null,
        "fitId": "frango"
      },
      {
        "id": "alho",
        "grams": 25,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 18,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 5,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sazona los trozos de pollo con sal y pimienta negra. Pela y corta las papas en gajos.",
          "s": null
        },
        {
          "t": "Cocina las papas en airfryer u horno a 200 °C con una pizca de sal hasta dorar.",
          "s": 1080
        },
        {
          "t": "En una sartén amplia con el aceite de oliva dora 6 dientes de ajo enteros aplastados con el cuchillo hasta perfumar; retíralos.",
          "s": 180
        },
        {
          "t": "Sella el pollo a fuego medio-alto hasta que esté bien dorado por todos lados.",
          "s": 420
        },
        {
          "t": "Devuelve los ajos y agrega 1 hoja de laurel, tomillo y ½ taza de vino blanco (o caldo con 1 cdta de vinagre).",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego medio-bajo hasta que el pollo esté hecho y la salsa reducida.",
          "s": 720
        },
        {
          "t": "Termina con perejil picado y sirve con las papas doradas.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Tempere os pedaços de frango com sal e pimenta-do-reino. Descasque e corte as batatas em gomos.",
          "s": null
        },
        {
          "t": "Leve as batatas à airfryer ou forno a 200 °C com uma pitada de sal até dourar.",
          "s": 1080
        },
        {
          "t": "Numa frigideira grande com o azeite doure 6 dentes de alho inteiros amassados com a faca até perfumar; retire.",
          "s": 180
        },
        {
          "t": "Sele o frango em fogo médio-alto até ficar bem dourado por todos os lados.",
          "s": 420
        },
        {
          "t": "Volte os alhos e junte 1 folha de louro, tomilho e ½ xícara de vinho branco (ou caldo com 1 colher (chá) de vinagre).",
          "s": null
        },
        {
          "t": "Tampe e cozinhe em fogo médio-baixo até o frango cozinhar e o molho reduzir.",
          "s": 720
        },
        {
          "t": "Finalize com salsinha picada e sirva com as batatas douradas.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Season the chicken pieces with salt and black pepper. Peel and cut the potatoes into wedges.",
          "s": null
        },
        {
          "t": "Roast the potatoes in the air fryer or oven at 200 °C with a pinch of salt until golden.",
          "s": 1080
        },
        {
          "t": "In a wide pan with the olive oil brown 6 whole garlic cloves crushed with the knife until fragrant; remove them.",
          "s": 180
        },
        {
          "t": "Sear the chicken over medium-high until well browned on all sides.",
          "s": 420
        },
        {
          "t": "Return the garlic and add 1 bay leaf, thyme and ½ cup white wine (or stock with 1 tsp vinegar).",
          "s": null
        },
        {
          "t": "Cover and cook over medium-low until the chicken is done and the sauce reduced.",
          "s": 720
        },
        {
          "t": "Finish with chopped parsley and serve with the golden potatoes.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Pollo al Ajillo Español receta paso a paso"
  },
  {
    "id": "es_6",
    "country": "SPANISH",
    "time": 22,
    "fav": false,
    "img": "images/es_6.jpg",
    "title": {
      "es": "Patatas Bravas con Pollo a la Plancha",
      "pt": "Batatas Bravas Espanholas",
      "en": "Spanish Patatas Bravas & Chicken"
    },
    "brTip": {
      "es": "Papas crocantes en cubos (hechas en airfryer en versión fit) con salsa brava picante de tomate y páprica defumada.",
      "pt": "Cubos de batata crocantes com molho bravo picante de tomate e páprica defumada.",
      "en": "Crispy potato cubes in smoky-spicy tomato brava sauce with grilled chicken."
    },
    "macrosTrad": {
      "kcal": 641,
      "p": 50,
      "c": 39,
      "f": 32
    },
    "macrosFit": {
      "kcal": 488,
      "p": 55,
      "c": 34,
      "f": 15
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 180,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 140,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimenton",
        "grams": 3,
        "fitGrams": 3,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 20,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "maionesa",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": "iogurte"
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las papas en dados irregulares de 2,5 cm, sécalas y mézclalas con unas gotas de aceite y sal.",
          "s": null
        },
        {
          "t": "Cocínalas en airfryer a 200 °C, sacudiendo a mitad de tiempo, hasta que estén bien crocantes.",
          "s": 1080
        },
        {
          "t": "Salsa brava: sofríe la cebolla y el ajo picados con el resto del aceite.",
          "s": 180
        },
        {
          "t": "Añade 1 cdta de pimentón dulce, ½ cdta de pimentón picante y 1 cdta de harina; remueve sin que se queme.",
          "s": null
        },
        {
          "t": "Agrega el tomate triturado y cocina; luego licúa la salsa hasta que quede lisa y brillante. Sala.",
          "s": 480
        },
        {
          "t": "Sazona el pollo y séllalo a la plancha por ambos lados hasta que esté dorado y jugoso.",
          "s": 480
        },
        {
          "t": "Sirve las papas calientes bañadas con la salsa brava y un poco de alioli, junto al pollo.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte as batatas em cubos irregulares de 2,5 cm, seque e misture com gotas de azeite e sal.",
          "s": null
        },
        {
          "t": "Leve à airfryer a 200 °C, sacudindo na metade do tempo, até ficarem bem crocantes.",
          "s": 1080
        },
        {
          "t": "Molho bravo: refogue a cebola e o alho picados com o resto do azeite.",
          "s": 180
        },
        {
          "t": "Junte 1 colher de chá de páprica doce, ½ de páprica picante e 1 de farinha; mexa sem queimar.",
          "s": null
        },
        {
          "t": "Acrescente o tomate triturado e cozinhe; depois bata o molho até ficar liso e brilhante. Salgue.",
          "s": 480
        },
        {
          "t": "Tempere o frango e sele na chapa dos dois lados até ficar dourado e suculento.",
          "s": 480
        },
        {
          "t": "Sirva as batatas quentes cobertas com o molho bravo e um pouco de aioli, junto com o frango.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the potatoes into irregular 2.5 cm chunks, dry them and toss with a few drops of oil and salt.",
          "s": null
        },
        {
          "t": "Air-fry at 200 °C, shaking halfway, until very crisp.",
          "s": 1080
        },
        {
          "t": "Brava sauce: sauté the chopped onion and garlic with the rest of the oil.",
          "s": 180
        },
        {
          "t": "Add 1 tsp sweet paprika, ½ tsp hot paprika and 1 tsp flour; stir without burning.",
          "s": null
        },
        {
          "t": "Add the crushed tomato and cook; then blend the sauce until smooth and glossy. Salt it.",
          "s": 480
        },
        {
          "t": "Season the chicken and sear on the griddle on both sides until golden and juicy.",
          "s": 480
        },
        {
          "t": "Serve the hot potatoes topped with the brava sauce and a little aioli, alongside the chicken.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Patatas Bravas con Pollo a la Plancha receta paso a paso"
  },
  {
    "id": "es_7",
    "country": "SPANISH",
    "time": 20,
    "fav": false,
    "img": "images/es_7.jpg",
    "title": {
      "es": "Huevos Rotos Españoles",
      "pt": "Ovos Rotos Espanhóis",
      "en": "Spanish Broken Eggs & Potatoes"
    },
    "brTip": {
      "es": "Patatas fritas con jamón serrano y huevos de yema líquida que se rompen al servir.",
      "pt": "Batatas fritas com presunto serrano e ovos de gema mole que se rompem ao servir.",
      "en": "Fried potatoes with serrano ham and runny eggs broken at the table."
    },
    "macrosTrad": {
      "kcal": 592,
      "p": 34,
      "c": 30,
      "f": 37
    },
    "macrosFit": {
      "kcal": 447,
      "p": 29,
      "c": 25,
      "f": 26
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 160,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "jamon",
        "grams": 50,
        "fitGrams": 30,
        "sub": {
          "es": "En Brasil: Presunto cru",
          "pt": "No Brasil: Presunto cru",
          "en": "In Brazil: Presunto cru"
        },
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 20,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las papas en bastones gruesos o láminas y mézclalas con unas gotas de aceite y sal.",
          "s": null
        },
        {
          "t": "Hornéalas o cocínalas en airfryer a 200 °C hasta que estén tiernas por dentro y doradas por fuera.",
          "s": 960
        },
        {
          "t": "Corta el jamón serrano en tiras finas.",
          "s": null
        },
        {
          "t": "Saltea el jamón solo unos segundos en sartén para que suelte aroma, sin secarlo.",
          "s": 30
        },
        {
          "t": "En otra sartén fríe los huevos en el aceite de oliva, bañando la clara con el aceite y dejando la yema completamente líquida.",
          "s": 120
        },
        {
          "t": "Pon las papas calientes en el plato, sálalas y acomoda la carne y los huevos encima.",
          "s": null
        },
        {
          "t": "Al servir, rompe las yemas con tenedor y cuchillo para que bañen todas las papas.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte as batatas em palitos grossos ou lâminas e misture com gotas de azeite e sal.",
          "s": null
        },
        {
          "t": "Asse ou leve à airfryer a 200 °C até ficarem macias por dentro e douradas por fora.",
          "s": 960
        },
        {
          "t": "Corte o presunto cru em tiras finas.",
          "s": null
        },
        {
          "t": "Salteie o presunto só alguns segundos na frigideira para soltar o aroma, sem ressecar.",
          "s": 30
        },
        {
          "t": "Em outra frigideira frite os ovos no azeite, regando a clara com o azeite e deixando a gema totalmente mole.",
          "s": 120
        },
        {
          "t": "Coloque as batatas quentes no prato, salgue e arrume a carne e os ovos por cima.",
          "s": null
        },
        {
          "t": "Na hora de servir, rompa as gemas com garfo e faca para que banhem todas as batatas.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the potatoes into thick sticks or slices and toss with a few drops of oil and salt.",
          "s": null
        },
        {
          "t": "Bake or air-fry at 200 °C until tender inside and golden outside.",
          "s": 960
        },
        {
          "t": "Cut the serrano ham into thin strips.",
          "s": null
        },
        {
          "t": "Sauté the ham for just a few seconds to release its aroma without drying it.",
          "s": 30
        },
        {
          "t": "In another pan fry the eggs in the olive oil, basting the whites and keeping the yolks fully runny.",
          "s": 120
        },
        {
          "t": "Place the hot potatoes on the plate, salt them and arrange the meat and eggs on top.",
          "s": null
        },
        {
          "t": "At the table, break the yolks with knife and fork so they coat all the potatoes.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Huevos Rotos Españoles receta paso a paso"
  },
  {
    "id": "es_8",
    "country": "SPANISH",
    "time": 30,
    "fav": false,
    "img": "images/es_8.jpg",
    "title": {
      "es": "Fabada / Potaje Español de Alubias",
      "pt": "Ensopado Espanhol de Feijão Branco",
      "en": "Spanish White Bean Stew"
    },
    "brTip": {
      "es": "Original con fabes asturianas, chorizo, morcilla y panceta. En Brasil: feijão branco y linguiça paio.",
      "pt": "Original com fabes asturianas, chouriço, morcela e toucinho. No Brasil: feijão branco e linguiça paio.",
      "en": "Made with Asturian fabes, chorizo, morcilla and pork belly. In Brazil: white beans and paio sausage."
    },
    "macrosTrad": {
      "kcal": 547,
      "p": 27,
      "c": 45,
      "f": 30
    },
    "macrosFit": {
      "kcal": 395,
      "p": 20,
      "c": 37,
      "f": 19
    },
    "ingredients": [
      {
        "id": "alubia",
        "grams": 150,
        "fitGrams": 120,
        "sub": {
          "es": "En Brasil: Feijão branco",
          "pt": "No Brasil: Feijão branco",
          "en": "In Brazil: Feijão branco"
        },
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 50,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "panceta",
        "grams": 30,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimenton",
        "grams": 2,
        "fitGrams": 2,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azafran",
        "grams": 0.5,
        "fitGrams": 0.5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Remoja las alubias (fabes) toda la noche en agua fría; escúrrelas.",
          "s": null
        },
        {
          "t": "Cuécelo a fuego suave con agua fría, 1 cebolla entera, el ajo, laurel y unas hebras de azafrán (o en olla a presión 20 min).",
          "s": 1200
        },
        {
          "t": "Corta la panceta en trozos y el chorizo en rodajas gruesas.",
          "s": null
        },
        {
          "t": "Agrégalos a la olla con 1 cdta de pimentón y cocina a fuego bajo.",
          "s": 900
        },
        {
          "t": "No metas la cuchara: mueve la olla en círculos por las asas para no romper los granos. Si se seca, añade agua fría (“asustar” el frijol).",
          "s": null
        },
        {
          "t": "Saca la cebolla cocida, lícuala con un cucharón de caldo y devuélvela para dar cremosidad; ajusta la sal.",
          "s": null
        },
        {
          "t": "Deja reposar antes de servir para que espese.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Deixe o feijão branco (fabes) de molho a noite toda em água fria; escorra.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo baixo com água fria, 1 cebola inteira, o alho, louro e alguns fios de açafrão (ou na pressão por 20 min).",
          "s": 1200
        },
        {
          "t": "Corte o toucinho em pedaços e a linguiça (chouriço) em rodelas grossas.",
          "s": null
        },
        {
          "t": "Junte na panela com 1 colher de chá de páprica e cozinhe em fogo baixo.",
          "s": 900
        },
        {
          "t": "Não use colher: balance a panela em círculos pelas alças para não quebrar os grãos. Se secar, junte água fria (“assustar” o feijão).",
          "s": null
        },
        {
          "t": "Retire a cebola cozida, bata com uma concha de caldo e devolva para dar cremosidade; acerte o sal.",
          "s": null
        },
        {
          "t": "Deixe descansar antes de servir para engrossar.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Soak the white beans (fabes) overnight in cold water; drain.",
          "s": null
        },
        {
          "t": "Simmer gently in cold water with 1 whole onion, the garlic, bay leaf and a few saffron threads (or 20 min in a pressure cooker).",
          "s": 1200
        },
        {
          "t": "Cut the pork belly into pieces and the chorizo into thick rounds.",
          "s": null
        },
        {
          "t": "Add them to the pot with 1 tsp paprika and simmer.",
          "s": 900
        },
        {
          "t": "Do not stir with a spoon: swirl the pot by its handles so the beans stay whole. If it dries, add cold water (to “shock” the beans).",
          "s": null
        },
        {
          "t": "Remove the cooked onion, blend it with a ladle of broth and return it for creaminess; adjust salt.",
          "s": null
        },
        {
          "t": "Let it rest before serving so it thickens.",
          "s": 300
        }
      ]
    },
    "videoQuery": "como hacer Fabada / Potaje Español de Alubias receta paso a paso"
  },
  {
    "id": "es_9",
    "country": "SPANISH",
    "time": 24,
    "fav": false,
    "img": "images/es_9.jpg",
    "title": {
      "es": "Pisto Manchego con Huevo",
      "pt": "Pisto Espanhol de Legumes com Ovo",
      "en": "Spanish Pisto & Poached Egg"
    },
    "brTip": {
      "es": "Guiso saludable de calabacín (abobrinha), berenjena/pimentón y tomate cocinado lento en aceite de oliva.",
      "pt": "Refogado leve de abobrinha, pimentão e tomate com ovos cozidos direto no molho.",
      "en": "Slow-simmered zucchini, bell pepper, and tomato stew topped with eggs."
    },
    "macrosTrad": {
      "kcal": 382,
      "p": 20,
      "c": 19,
      "f": 26
    },
    "macrosFit": {
      "kcal": 341,
      "p": 22,
      "c": 21,
      "f": 20
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "abobrinha",
        "grams": 130,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 130,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la cebolla, el pimentón y el calabacín en dados del mismo tamaño (1 cm). Ralla o pica el tomate.",
          "s": null
        },
        {
          "t": "En una sartén amplia con el aceite de oliva sofríe primero la cebolla y el pimentón a fuego medio hasta que ablanden.",
          "s": 360
        },
        {
          "t": "Agrega el calabacín y cocina.",
          "s": 300
        },
        {
          "t": "Añade el tomate con sal y una pizca de azúcar o endulzante para quitar la acidez.",
          "s": null
        },
        {
          "t": "Cocina a fuego bajo hasta evaporar el exceso de agua y lograr una textura de guiso espeso.",
          "s": 600
        },
        {
          "t": "Haz 2 huecos en el pisto y rompe un huevo en cada uno; sálalos.",
          "s": null
        },
        {
          "t": "Tapa y cocina hasta que la clara cuaje y la yema siga blanda; sirve en la misma sartén con pan.",
          "s": 240
        }
      ],
      "pt": [
        {
          "t": "Corte a cebola, o pimentão e a abobrinha em cubos do mesmo tamanho (1 cm). Rale ou pique o tomate.",
          "s": null
        },
        {
          "t": "Numa frigideira grande com o azeite refogue primeiro a cebola e o pimentão em fogo médio até amolecer.",
          "s": 360
        },
        {
          "t": "Junte a abobrinha e cozinhe.",
          "s": 300
        },
        {
          "t": "Acrescente o tomate com sal e uma pitada de açúcar ou adoçante para tirar a acidez.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo baixo até evaporar o excesso de água e virar um refogado grosso.",
          "s": 600
        },
        {
          "t": "Faça 2 buracos no pisto e quebre um ovo em cada um; salgue.",
          "s": null
        },
        {
          "t": "Tampe e cozinhe até a clara firmar e a gema continuar mole; sirva na própria frigideira com pão.",
          "s": 240
        }
      ],
      "en": [
        {
          "t": "Cut the onion, bell pepper and zucchini into same-size dice (1 cm). Grate or chop the tomato.",
          "s": null
        },
        {
          "t": "In a wide pan with the olive oil sauté the onion and pepper first over medium heat until soft.",
          "s": 360
        },
        {
          "t": "Add the zucchini and cook.",
          "s": 300
        },
        {
          "t": "Add the tomato with salt and a pinch of sugar or sweetener to cut the acidity.",
          "s": null
        },
        {
          "t": "Cook on low until the excess water evaporates and it becomes a thick stew.",
          "s": 600
        },
        {
          "t": "Make 2 wells in the pisto and crack an egg into each; salt them.",
          "s": null
        },
        {
          "t": "Cover and cook until the whites set and the yolks stay soft; serve in the pan with bread.",
          "s": 240
        }
      ]
    },
    "videoQuery": "como hacer Pisto Manchego con Huevo receta paso a paso"
  },
  {
    "id": "es_10",
    "country": "SPANISH",
    "time": 26,
    "fav": false,
    "img": "images/es_10.jpg",
    "title": {
      "es": "Albóndigas en Salsa Española",
      "pt": "Almôndegas à Espanhola",
      "en": "Spanish Meatballs in Tomato-Almond Sauce"
    },
    "brTip": {
      "es": "Salsa espesada tradicionalmente con almendras tostadas (o amendoim/castanha de caju en Brasil) y tomate.",
      "pt": "Molho engrossado com tomate e castanha/amêndoa triturada.",
      "en": "Tender meatballs simmered in tomato and ground nut sauce."
    },
    "macrosTrad": {
      "kcal": 690,
      "p": 68,
      "c": 46,
      "f": 25
    },
    "macrosFit": {
      "kcal": 658,
      "p": 73,
      "c": 41,
      "f": 21
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 160,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pan_rallado",
        "grams": 15,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 25,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_trigo",
        "grams": 5,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Mezcla la carne molida con ajo picado, perejil, el huevo batido, el pan rallado, sal y pimienta.",
          "s": null
        },
        {
          "t": "Forma bolitas del tamaño de una nuez con las manos húmedas.",
          "s": null
        },
        {
          "t": "Dóralas en sartén con unas gotas de aceite (o en airfryer a 190 °C) y reserva.",
          "s": 480
        },
        {
          "t": "En una olla sofríe la cebolla, la zanahoria y el ajo picados.",
          "s": 300
        },
        {
          "t": "Añade 1 cdta de harina, el tomate triturado, el pimentón y ½ taza de caldo; cocina y licúa para obtener una salsa suave.",
          "s": 480
        },
        {
          "t": "Devuelve las albóndigas a la salsa y cocina a fuego bajo hasta que estén tiernas.",
          "s": 600
        },
        {
          "t": "Sirve con papas fritas o al horno y perejil picado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture a carne moída com alho picado, salsinha, o ovo batido, a farinha de rosca, sal e pimenta.",
          "s": null
        },
        {
          "t": "Faça bolinhas do tamanho de uma noz com as mãos úmidas.",
          "s": null
        },
        {
          "t": "Doure na frigideira com gotas de óleo (ou na airfryer a 190 °C) e reserve.",
          "s": 480
        },
        {
          "t": "Numa panela refogue a cebola, a cenoura e o alho picados.",
          "s": 300
        },
        {
          "t": "Junte 1 colher de chá de farinha, o tomate triturado, a páprica e ½ xícara de caldo; cozinhe e bata para obter um molho liso.",
          "s": 480
        },
        {
          "t": "Volte as almôndegas ao molho e cozinhe em fogo baixo até ficarem macias.",
          "s": 600
        },
        {
          "t": "Sirva com batatas fritas ou assadas e salsinha picada.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Mix the ground beef with chopped garlic, parsley, the beaten egg, the breadcrumbs, salt and pepper.",
          "s": null
        },
        {
          "t": "Shape walnut-sized balls with wet hands.",
          "s": null
        },
        {
          "t": "Brown them in a pan with a few drops of oil (or air-fry at 190 °C) and set aside.",
          "s": 480
        },
        {
          "t": "In a pot sauté the chopped onion, carrot and garlic.",
          "s": 300
        },
        {
          "t": "Add 1 tsp flour, the crushed tomato, paprika and ½ cup broth; cook and blend into a smooth sauce.",
          "s": 480
        },
        {
          "t": "Return the meatballs to the sauce and simmer on low until tender.",
          "s": 600
        },
        {
          "t": "Serve with fried or roasted potatoes and chopped parsley.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Albóndigas en Salsa Española receta paso a paso"
  },
  {
    "id": "es_11",
    "country": "SPANISH",
    "time": 20,
    "fav": false,
    "img": "images/es_11.jpg",
    "title": {
      "es": "Merluza en Salsa Verde Vasca",
      "pt": "Merluza ao Molho Verde Basco",
      "en": "Basque Hake in Green Sauce"
    },
    "brTip": {
      "es": "En Brasil usa merluza congelada o filé de tilápia cocido en caldo ligero de ajo, mucho perejil y papa.",
      "pt": "Filé de merluza ou tilápia cozido em caldo leve de alho, salsinha e batatas.",
      "en": "White fish gently poached in garlicky parsley emulsion with potatoes."
    },
    "macrosTrad": {
      "kcal": 484,
      "p": 46,
      "c": 33,
      "f": 19
    },
    "macrosFit": {
      "kcal": 426,
      "p": 51,
      "c": 29,
      "f": 12
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 200,
        "sub": {
          "es": "En Brasil: Pescada ou tilápia (merluza)",
          "pt": "No Brasil: Pescada ou tilápia (merluza)",
          "en": "In Brazil: Pescada ou tilápia (merluza)"
        },
        "fitId": null
      },
      {
        "id": "mariscos",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 20,
        "fitGrams": 20,
        "sub": {
          "es": "En Brasil: Salsinha",
          "pt": "No Brasil: Salsinha",
          "en": "In Brazil: Salsinha"
        },
        "fitId": null
      },
      {
        "id": "farinha_trigo",
        "grams": 5,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 95,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 20,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las papas en rodajas de 1 cm y cuécelas en agua con sal; reserva ½ taza del caldo.",
          "s": 600
        },
        {
          "t": "Sazona los filetes de pescado con sal y pica finamente el ajo y abundante perejil.",
          "s": null
        },
        {
          "t": "En una sartén amplia con el aceite de oliva dora suavemente el ajo, sin que tome color café.",
          "s": 60
        },
        {
          "t": "Agrega 1 cdta de harina o maicena y remueve.",
          "s": 30
        },
        {
          "t": "Vierte el caldo caliente de golpe moviendo la sartén en círculos para ligar la salsa.",
          "s": null
        },
        {
          "t": "Añade el perejil, las almejas y las arvejas, y coloca el pescado y las papas en la sartén.",
          "s": null
        },
        {
          "t": "Cocina tapado moviendo la sartén suavemente en vaivén, sin cuchara, hasta que el pescado esté hecho y la salsa verde quede ligada.",
          "s": 360
        }
      ],
      "pt": [
        {
          "t": "Corte as batatas em rodelas de 1 cm e cozinhe em água com sal; reserve ½ xícara do caldo.",
          "s": 600
        },
        {
          "t": "Tempere os filés de peixe com sal e pique bem o alho e bastante salsinha.",
          "s": null
        },
        {
          "t": "Numa frigideira larga com o azeite doure levemente o alho, sem deixar ficar marrom.",
          "s": 60
        },
        {
          "t": "Junte 1 colher (chá) de farinha ou amido e mexa.",
          "s": 30
        },
        {
          "t": "Despeje o caldo quente de uma vez balançando a frigideira em círculos para ligar o molho.",
          "s": null
        },
        {
          "t": "Junte a salsinha, os mariscos e as ervilhas e coloque o peixe e as batatas na frigideira.",
          "s": null
        },
        {
          "t": "Cozinhe tampado balançando a frigideira suavemente, sem colher, até o peixe cozinhar e o molho verde ficar ligado.",
          "s": 360
        }
      ],
      "en": [
        {
          "t": "Slice the potatoes 1 cm thick and boil in salted water; save ½ cup of the water.",
          "s": 600
        },
        {
          "t": "Salt the fish fillets and finely chop the garlic and plenty of parsley.",
          "s": null
        },
        {
          "t": "In a wide pan with the olive oil gently cook the garlic without letting it brown.",
          "s": 60
        },
        {
          "t": "Add 1 tsp flour or cornstarch and stir.",
          "s": 30
        },
        {
          "t": "Pour in the hot cooking water all at once, swirling the pan to bind the sauce.",
          "s": null
        },
        {
          "t": "Add the parsley, clams and peas, and place the fish and potatoes in the pan.",
          "s": null
        },
        {
          "t": "Cover and cook, gently rocking the pan back and forth without a spoon, until the fish is done and the green sauce is bound.",
          "s": 360
        }
      ]
    },
    "videoQuery": "como hacer Merluza en Salsa Verde Vasca receta paso a paso"
  },
  {
    "id": "es_12",
    "country": "SPANISH",
    "time": 28,
    "fav": false,
    "img": "images/es_12.jpg",
    "title": {
      "es": "Arroz Caldoso de Mariscos",
      "pt": "Arroz Caldoso de Frutos do Mar",
      "en": "Brothy Seafood Rice"
    },
    "brTip": {
      "es": "A mitad de camino entre risotto y sopa: arroz suelto con caldo sabroso de tomate, ajo y pescado/camarón.",
      "pt": "Arroz bem caldoso (entre risoto e sopa) com peixe, camarão, tomate e páprica.",
      "en": "Soupy Spanish saffron-tomato rice with fish and shrimp."
    },
    "macrosTrad": {
      "kcal": 476,
      "p": 42,
      "c": 40,
      "f": 16
    },
    "macrosFit": {
      "kcal": 419,
      "p": 46,
      "c": 34,
      "f": 11
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mariscos",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "calamar",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": null,
        "fitId": "arroz"
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azafran",
        "grams": 0.5,
        "fitGrams": 0.5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Calienta el caldo de pescado (4 partes por 1 de arroz). Corta el pescado en trozos y pica cebolla, ajo, pimentón y tomate.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el ajo y el pimentón en el aceite de oliva.",
          "s": 240
        },
        {
          "t": "Agrega el tomate rallado, el pimentón y unas hebras de azafrán y cocina hasta concentrar.",
          "s": 180
        },
        {
          "t": "Incorpora el arroz crudo y remueve para nacararlo.",
          "s": 60
        },
        {
          "t": "Vierte el caldo caliente; ajusta la sal.",
          "s": null
        },
        {
          "t": "Hierve a fuego medio removiendo solo al principio; debe quedar caldoso.",
          "s": 660
        },
        {
          "t": "Agrega el pescado, el calamar, los mariscos y los camarones los últimos minutos para que queden justo al punto; sirve de inmediato en plato hondo.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Aqueça o caldo de peixe (4 partes para 1 de arroz). Corte o peixe em pedaços e pique cebola, alho, pimentão e tomate.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o alho e o pimentão no azeite.",
          "s": 240
        },
        {
          "t": "Junte o tomate ralado, a páprica e alguns fios de açafrão e cozinhe até concentrar.",
          "s": 180
        },
        {
          "t": "Acrescente o arroz cru e mexa para envolver.",
          "s": 60
        },
        {
          "t": "Despeje o caldo quente; acerte o sal.",
          "s": null
        },
        {
          "t": "Ferva em fogo médio mexendo só no começo; deve ficar caldoso.",
          "s": 660
        },
        {
          "t": "Junte o peixe, a lula, os mariscos e os camarões nos últimos minutos para ficarem no ponto; sirva na hora em prato fundo.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Heat the fish stock (4 parts to 1 of rice). Cut the fish into pieces and chop onion, garlic, bell pepper and tomato.",
          "s": null
        },
        {
          "t": "Sauté the onion, garlic and pepper in the olive oil.",
          "s": 240
        },
        {
          "t": "Add the grated tomato, paprika and a few saffron threads and cook down.",
          "s": 180
        },
        {
          "t": "Add the raw rice and stir to coat.",
          "s": 60
        },
        {
          "t": "Pour in the hot stock; adjust the salt.",
          "s": null
        },
        {
          "t": "Boil over medium heat, stirring only at the start; it should stay brothy.",
          "s": 660
        },
        {
          "t": "Add the fish, squid, shellfish and shrimp in the last minutes so they are just cooked; serve at once in deep bowls.",
          "s": 180
        }
      ]
    },
    "videoQuery": "como hacer Arroz Caldoso de Mariscos receta paso a paso"
  },
  {
    "id": "es_13",
    "country": "SPANISH",
    "time": 26,
    "fav": false,
    "img": "images/es_13.jpg",
    "title": {
      "es": "Patatas a la Riojana con Chorizo",
      "pt": "Batatas à Riojana com Chouriço",
      "en": "Riojan Potatoes with Chorizo"
    },
    "brTip": {
      "es": "Truco español: 'chascar' las papas (cortar y quebrar el trozo al final) para que suelten almidón y espesen el caldo.",
      "pt": "Dica espanhola: quebre a ponta da batata ao cortar para soltar amido e engrossar o caldo.",
      "en": "Break potato edges when cutting so starch naturally thickens the paprika broth."
    },
    "macrosTrad": {
      "kcal": 442,
      "p": 19,
      "c": 45,
      "f": 22
    },
    "macrosFit": {
      "kcal": 322,
      "p": 14,
      "c": 39,
      "f": 14
    },
    "ingredients": [
      {
        "id": "linguica",
        "grams": 80,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 200,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimenton",
        "grams": 3,
        "fitGrams": 3,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela las papas y córtalas “cascando”: mete el cuchillo y quiebra el último tramo para que suelten almidón y espesen el caldo.",
          "s": null
        },
        {
          "t": "Pica la cebolla, el ajo y el pimiento; corta el chorizo en rodajas.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el ajo y el pimentón con unas gotas de aceite en una olla.",
          "s": 240
        },
        {
          "t": "Agrega el chorizo y dóralo para que suelte su grasa roja.",
          "s": 240
        },
        {
          "t": "Retira la olla del fuego y añade 1 cdta generosa de pimentón de la Vera (así no se quema); mezcla.",
          "s": null
        },
        {
          "t": "Incorpora las papas, cubre apenas con agua, agrega laurel y sal.",
          "s": null
        },
        {
          "t": "Cocina a fuego medio moviendo solo la olla, sin cuchara, hasta que la papa esté tierna y el caldo espeso.",
          "s": 1080
        }
      ],
      "pt": [
        {
          "t": "Descasque as batatas e corte “quebrando”: enfie a faca e quebre o último pedaço para soltarem amido e engrossarem o caldo.",
          "s": null
        },
        {
          "t": "Pique a cebola, o alho e o pimentão; corte o chouriço em rodelas.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o alho e o pimentão com gotas de óleo numa panela.",
          "s": 240
        },
        {
          "t": "Junte o chouriço e doure para soltar a gordura vermelha.",
          "s": 240
        },
        {
          "t": "Tire a panela do fogo e junte 1 colher de chá cheia de páprica defumada (assim não queima); misture.",
          "s": null
        },
        {
          "t": "Acrescente as batatas, cubra apenas com água, junte louro e sal.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo médio balançando só a panela, sem colher, até a batata ficar macia e o caldo grosso.",
          "s": 1080
        }
      ],
      "en": [
        {
          "t": "Peel the potatoes and “crack” them: insert the knife and snap off the last bit so they release starch and thicken the broth.",
          "s": null
        },
        {
          "t": "Chop the onion, garlic and pepper; slice the chorizo.",
          "s": null
        },
        {
          "t": "Sauté the onion, garlic and pepper with a few drops of oil in a pot.",
          "s": 240
        },
        {
          "t": "Add the chorizo and brown it so it releases its red fat.",
          "s": 240
        },
        {
          "t": "Take the pot off the heat and add 1 heaped tsp of smoked paprika (so it does not burn); stir.",
          "s": null
        },
        {
          "t": "Add the potatoes, barely cover with water, add bay leaf and salt.",
          "s": null
        },
        {
          "t": "Cook over medium heat, swirling the pot instead of stirring, until the potato is tender and the broth thick.",
          "s": 1080
        }
      ]
    },
    "videoQuery": "como hacer Patatas a la Riojana con Chorizo receta paso a paso"
  },
  {
    "id": "es_14",
    "country": "SPANISH",
    "time": 28,
    "fav": false,
    "img": "images/es_14.jpg",
    "title": {
      "es": "Lentejas Estofadas Españolas",
      "pt": "Lentilha Estofada Espanhola",
      "en": "Spanish Braised Lentils"
    },
    "brTip": {
      "es": "Las lentejas no necesitan remojo; con chorizo, zanahoria, papa y pimentón quedan en 25 min.",
      "pt": "Lentilhas não precisam de molho; com chouriço, cenoura, batata e páprica ficam prontas em 25 min.",
      "en": "Lentils need no soaking; with chorizo, carrot, potato and paprika they are ready in 25 min."
    },
    "macrosTrad": {
      "kcal": 411,
      "p": 24,
      "c": 56,
      "f": 12
    },
    "macrosFit": {
      "kcal": 327,
      "p": 19,
      "c": 49,
      "f": 8
    },
    "ingredients": [
      {
        "id": "lentilha",
        "grams": 150,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 40,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 70,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 20,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimenton",
        "grams": 2,
        "fitGrams": 2,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Lava las lentejas bajo el grifo y retira cualquier piedrita.",
          "s": null
        },
        {
          "t": "Pica la cebolla, el ajo y el pimiento, corta la zanahoria en rodajas, el tomate en cubos, la papa en dados y el chorizo en rodajas.",
          "s": null
        },
        {
          "t": "Sofríe la cebolla, el ajo, la zanahoria y el tomate en una olla con unas gotas de aceite.",
          "s": 300
        },
        {
          "t": "Retira del fuego un momento y añade 1 cdta de pimentón de la Vera.",
          "s": null
        },
        {
          "t": "Agrega las lentejas, la papa, el chorizo, laurel y 700 ml de agua fría; sala.",
          "s": null
        },
        {
          "t": "Cuando hierva, baja a fuego medio-bajo y cocina tapado hasta que las lentejas estén tiernas y el caldo espeso.",
          "s": 1320
        },
        {
          "t": "Ajusta la sal y deja reposar unos minutos antes de servir (si quieres, añade un chorrito de vinagre al final).",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Lave as lentilhas na torneira e retire alguma pedrinha.",
          "s": null
        },
        {
          "t": "Pique a cebola, o alho e o pimentão, corte a cenoura em rodelas, o tomate em cubos, a batata em dados e o chouriço em rodelas.",
          "s": null
        },
        {
          "t": "Refogue a cebola, o alho, a cenoura e o tomate numa panela com gotas de óleo.",
          "s": 300
        },
        {
          "t": "Tire do fogo um momento e junte 1 colher de chá de páprica defumada.",
          "s": null
        },
        {
          "t": "Junte as lentilhas, a batata, o chouriço, louro e 700 ml de água fria; tempere com sal.",
          "s": null
        },
        {
          "t": "Quando ferver, abaixe para fogo médio-baixo e cozinhe tampado até as lentilhas ficarem macias e o caldo grosso.",
          "s": 1320
        },
        {
          "t": "Acerte o sal e deixe descansar uns minutos antes de servir (se quiser, um fio de vinagre no final).",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Rinse the lentils under the tap and pick out any small stones.",
          "s": null
        },
        {
          "t": "Chop the onion, garlic and pepper; slice the carrot, dice the tomato and potato, and slice the chorizo.",
          "s": null
        },
        {
          "t": "Sauté the onion, garlic, carrot and tomato in a pot with a few drops of oil.",
          "s": 300
        },
        {
          "t": "Take off the heat for a moment and add 1 tsp smoked paprika.",
          "s": null
        },
        {
          "t": "Add the lentils, potato, chorizo, bay leaf and 700 ml cold water; salt.",
          "s": null
        },
        {
          "t": "When it boils, lower to medium-low and cook covered until the lentils are tender and the broth thick.",
          "s": 1320
        },
        {
          "t": "Adjust the salt and let it rest a few minutes before serving (a splash of vinegar at the end is optional).",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Lentejas Estofadas Españolas receta paso a paso"
  },
  {
    "id": "es_15",
    "country": "SPANISH",
    "time": 26,
    "fav": false,
    "img": "images/es_15.jpg",
    "title": {
      "es": "Pollo a la Chilindrón",
      "pt": "Frango à Chilindrón (Com Pimentões)",
      "en": "Spanish Pepper-Tomato Braised Chicken"
    },
    "brTip": {
      "es": "Guiso aragonés muy colorido con mucho pimentón rojo/verde, tomate y ajo.",
      "pt": "Ensopado bem colorido com pimentão vermelho/verde, tomate, alho e cebola.",
      "en": "Vibrant Aragonese braised chicken with sweet bell peppers and tomato."
    },
    "macrosTrad": {
      "kcal": 603,
      "p": 52,
      "c": 16,
      "f": 38
    },
    "macrosFit": {
      "kcal": 467,
      "p": 69,
      "c": 18,
      "f": 13
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 175,
        "fitGrams": 195,
        "sub": null,
        "fitId": "frango"
      },
      {
        "id": "pimentao",
        "grams": 100,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 110,
        "fitGrams": 125,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 10,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "jamon",
        "grams": 20,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Presunto cru",
          "pt": "No Brasil: Presunto cru",
          "en": "In Brazil: Presunto cru"
        },
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Salpimienta los trozos de pollo. Corta el pimentón (rojo y verde) en tiras gruesas, pica la cebolla y el ajo y ralla el tomate.",
          "s": null
        },
        {
          "t": "Dora el pollo en una cazuela con un chorrito de aceite de oliva por todos lados; retíralo.",
          "s": 360
        },
        {
          "t": "En la misma cazuela sofríe el jamón serrano en tiras, la cebolla, el ajo y el pimiento hasta que ablanden.",
          "s": 360
        },
        {
          "t": "Agrega el tomate y 1 cdta de pimentón dulce y cocina hasta concentrar.",
          "s": 300
        },
        {
          "t": "Devuelve el pollo y añade ⅓ de taza de caldo o agua (o vino blanco); ajusta la sal.",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego bajo hasta que el pollo esté tierno y la salsa espesa.",
          "s": 840
        },
        {
          "t": "Sirve con pan para mojar la salsa.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Tempere os pedaços de frango com sal e pimenta. Corte o pimentão (vermelho e verde) em tiras grossas, pique a cebola e o alho e rale o tomate.",
          "s": null
        },
        {
          "t": "Doure o frango numa caçarola com um fio de azeite por todos os lados; retire.",
          "s": 360
        },
        {
          "t": "Na mesma caçarola refogue o presunto em tiras, a cebola, o alho e o pimentão até amaciarem.",
          "s": 360
        },
        {
          "t": "Junte o tomate e 1 colher de chá de páprica doce e cozinhe até concentrar.",
          "s": 300
        },
        {
          "t": "Volte o frango e acrescente ⅓ de xícara de caldo ou água (ou vinho branco); acerte o sal.",
          "s": null
        },
        {
          "t": "Tampe e cozinhe em fogo baixo até o frango ficar macio e o molho grosso.",
          "s": 840
        },
        {
          "t": "Sirva com pão para molhar no molho.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Season the chicken pieces with salt and pepper. Cut the red and green peppers into thick strips, chop the onion and garlic and grate the tomato.",
          "s": null
        },
        {
          "t": "Brown the chicken in a casserole with a drizzle of olive oil on all sides; remove.",
          "s": 360
        },
        {
          "t": "In the same pot sauté the serrano ham strips, onion, garlic and pepper until soft.",
          "s": 360
        },
        {
          "t": "Add the tomato and 1 tsp sweet paprika and cook down.",
          "s": 300
        },
        {
          "t": "Return the chicken and add ⅓ cup stock or water (or white wine); adjust the salt.",
          "s": null
        },
        {
          "t": "Cover and cook on low until the chicken is tender and the sauce thick.",
          "s": 840
        },
        {
          "t": "Serve with bread to mop up the sauce.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Pollo a la Chilindrón receta paso a paso"
  },
  {
    "id": "es_16",
    "country": "SPANISH",
    "time": 18,
    "fav": false,
    "img": "images/es_16.jpg",
    "title": {
      "es": "Ensalada Campera Española",
      "pt": "Salada Campera Espanhola (Batata e Atum)",
      "en": "Spanish Summer Potato & Tuna Salad"
    },
    "brTip": {
      "es": "Perfecta para el calor en Brasil: papa cocida firme, atún, huevo duro, pimentón, tomate y vinagreta de oliva.",
      "pt": "Perfeita para o calor do Brasil: batata firme, atum, ovo cozido, tomate e azeite.",
      "en": "Ideal for Brazilian summer: firm potatoes, tuna, hard-boiled egg, tomato, and olive oil."
    },
    "macrosTrad": {
      "kcal": 517,
      "p": 38,
      "c": 38,
      "f": 24
    },
    "macrosFit": {
      "kcal": 451,
      "p": 41,
      "c": 34,
      "f": 17
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 160,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "atum",
        "grams": 100,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "vinagre",
        "grams": 8,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece las papas con piel en agua con sal hasta que estén firmes pero tiernas, sin deshacerse.",
          "s": 960
        },
        {
          "t": "Cuece el huevo, pásalo a agua fría y pélalo.",
          "s": 600
        },
        {
          "t": "Pela las papas cuando entibien y córtalas en cubos.",
          "s": null
        },
        {
          "t": "Pica el tomate, la cebolla morada y el pimentón verde en cubitos; escurre el atún.",
          "s": null
        },
        {
          "t": "Mezcla en una ensaladera la papa con el tomate, la cebolla, el pimentón, las aceitunas y el atún.",
          "s": null
        },
        {
          "t": "Aliña con el aceite de oliva, 1 cda de vinagre y sal; mezcla con suavidad.",
          "s": null
        },
        {
          "t": "Decora con el huevo en cuartos y refrigera antes de servir.",
          "s": 900
        }
      ],
      "pt": [
        {
          "t": "Cozinhe as batatas com casca em água com sal até ficarem firmes mas macias, sem desmanchar.",
          "s": 960
        },
        {
          "t": "Cozinhe o ovo, passe para água fria e descasque.",
          "s": 600
        },
        {
          "t": "Descasque as batatas quando amornarem e corte em cubos.",
          "s": null
        },
        {
          "t": "Pique o tomate, a cebola roxa e o pimentão verde em cubinhos; escorra o atum.",
          "s": null
        },
        {
          "t": "Misture numa saladeira a batata com o tomate, a cebola, o pimentão, as azeitonas e o atum.",
          "s": null
        },
        {
          "t": "Tempere com o azeite, 1 colher de vinagre e sal; misture delicadamente.",
          "s": null
        },
        {
          "t": "Decore com o ovo em quartos e leve à geladeira antes de servir.",
          "s": 900
        }
      ],
      "en": [
        {
          "t": "Boil the potatoes in their skins in salted water until firm but tender, without falling apart.",
          "s": 960
        },
        {
          "t": "Boil the egg, cool it in cold water and peel it.",
          "s": 600
        },
        {
          "t": "Peel the potatoes once warm and cut into cubes.",
          "s": null
        },
        {
          "t": "Dice the tomato, red onion and green pepper; drain the tuna.",
          "s": null
        },
        {
          "t": "In a salad bowl combine the potato with the tomato, onion, pepper, olives and tuna.",
          "s": null
        },
        {
          "t": "Dress with the olive oil, 1 tbsp vinegar and salt; toss gently.",
          "s": null
        },
        {
          "t": "Garnish with the quartered egg and chill before serving.",
          "s": 900
        }
      ]
    },
    "videoQuery": "como hacer Ensalada Campera Española receta paso a paso"
  },
  {
    "id": "es_17",
    "country": "SPANISH",
    "time": 24,
    "fav": false,
    "img": "images/es_17.jpg",
    "title": {
      "es": "Bacalao a la Vizcaína",
      "pt": "Bacalhau à Biscainha",
      "en": "Basque Cod (Bacalao a la Vizcaína)"
    },
    "brTip": {
      "es": "Salsa roja intensa de pimentón rojo asado y cebolla caramelizada (en Brasil usa bacalhau dessalgado o tilápia).",
      "pt": "Molho intenso de pimentão vermelho e cebola caramelizada sobre bacalhau ou tilápia.",
      "en": "Roasted red pepper and caramelized onion sauce spooned over fish."
    },
    "macrosTrad": {
      "kcal": 559,
      "p": 54,
      "c": 38,
      "f": 22
    },
    "macrosFit": {
      "kcal": 495,
      "p": 58,
      "c": 37,
      "f": 13
    },
    "ingredients": [
      {
        "id": "bacalhau",
        "grams": 165,
        "fitGrams": 180,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "chile_seco",
        "grams": 10,
        "fitGrams": 10,
        "sub": {
          "es": "En Brasil: Páprica (pimiento choricero)",
          "pt": "No Brasil: Páprica (pimiento choricero)",
          "en": "In Brazil: Páprica (pimiento choricero)"
        },
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 90,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 18,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 100,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Desala el bacalao de antemano (24–36 h en agua fría, cambiándola cada 8 h).",
          "s": null
        },
        {
          "t": "Cuece las papas en rodajas en agua con sal.",
          "s": 900
        },
        {
          "t": "Corta la cebolla en juliana y póchala a fuego lento en el aceite de oliva hasta que esté muy blanda y dulce.",
          "s": 600
        },
        {
          "t": "Agrega la carne de los pimientos choriceros hidratados, el pimiento rojo picado y el tomate, y cocina.",
          "s": 360
        },
        {
          "t": "Licúa todo hasta obtener una salsa roja espesa y aterciopelada; ajusta la sal.",
          "s": null
        },
        {
          "t": "Vierte la salsa en la sartén y acomoda los lomos de pescado encima.",
          "s": null
        },
        {
          "t": "Cocina a fuego bajo moviendo la sartén suavemente hasta que el pescado se separe en lascas jugosas; sirve con las papas.",
          "s": 420
        }
      ],
      "pt": [
        {
          "t": "Dessalgue o bacalhau com antecedência (24–36 h em água fria, trocando a cada 8 h).",
          "s": null
        },
        {
          "t": "Cozinhe as batatas em rodelas em água com sal.",
          "s": 900
        },
        {
          "t": "Corte a cebola em tiras e cozinhe em fogo baixo no azeite até ficar bem macia e adocicada.",
          "s": 600
        },
        {
          "t": "Junte a polpa dos pimentões choriceros hidratados, o pimentão vermelho picado e o tomate, e cozinhe.",
          "s": 360
        },
        {
          "t": "Bata tudo até virar um molho vermelho grosso e aveludado; acerte o sal.",
          "s": null
        },
        {
          "t": "Despeje o molho na frigideira e arrume as postas de peixe por cima.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo baixo balançando a frigideira até o peixe soltar em lascas suculentas; sirva com as batatas.",
          "s": 420
        }
      ],
      "en": [
        {
          "t": "Desalt the cod in advance (24–36 h in cold water, changing it every 8 h).",
          "s": null
        },
        {
          "t": "Boil the sliced potatoes in salted water.",
          "s": 900
        },
        {
          "t": "Slice the onion thinly and cook it slowly in the olive oil until very soft and sweet.",
          "s": 600
        },
        {
          "t": "Add the pulp of the soaked choricero peppers, the chopped red pepper and the tomato, and cook.",
          "s": 360
        },
        {
          "t": "Blend everything into a thick, velvety red sauce; adjust the salt.",
          "s": null
        },
        {
          "t": "Pour the sauce into the pan and lay the fish loins on top.",
          "s": null
        },
        {
          "t": "Cook on low, gently rocking the pan, until the fish flakes into juicy pieces; serve with the potatoes.",
          "s": 420
        }
      ]
    },
    "videoQuery": "como hacer Bacalao a la Vizcaína receta paso a paso"
  },
  {
    "id": "es_18",
    "country": "SPANISH",
    "time": 32,
    "fav": false,
    "img": "images/es_18.jpg",
    "title": {
      "es": "Estofado de Ternera Español",
      "pt": "Estofado Espanhol de Carne",
      "en": "Spanish Braised Beef & Potatoes"
    },
    "brTip": {
      "es": "Original con ternera (morcillo o aguja) guisada en vino tinto. En Brasil: músculo, acém o patinho.",
      "pt": "Original com vitela (músculo ou acém) cozida no vinho tinto. No Brasil: músculo, acém ou patinho.",
      "en": "Made with veal (shank or chuck) braised in red wine. In Brazil: músculo, acém or patinho."
    },
    "macrosTrad": {
      "kcal": 589,
      "p": 68,
      "c": 43,
      "f": 13
    },
    "macrosFit": {
      "kcal": 615,
      "p": 74,
      "c": 41,
      "f": 14
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 170,
        "fitGrams": 185,
        "sub": {
          "es": "En Brasil: Acém ou músculo",
          "pt": "No Brasil: Acém ou músculo",
          "en": "In Brazil: Acém ou músculo"
        },
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 105,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arveja",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 8,
        "fitGrams": 9,
        "sub": null,
        "fitId": null
      },
      {
        "id": "vinho_tinto",
        "grams": 30,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en dados de 3 cm y salpimiéntala. Pica la cebolla, el ajo y el tomate; corta la zanahoria en rodajas y las papas en trozos.",
          "s": null
        },
        {
          "t": "Sella la carne en olla caliente con unas gotas de aceite hasta dorar; retírala.",
          "s": 300
        },
        {
          "t": "Sofríe la cebolla, el ajo y la zanahoria en la misma olla.",
          "s": 240
        },
        {
          "t": "Añade el tomate y 1 cdta de pimentón dulce y remueve.",
          "s": null
        },
        {
          "t": "Devuelve la carne, vierte el vino tinto y deja que se evapore el alcohol; cubre con caldo o agua, agrega laurel y sal y cocina hasta ablandar (20 min en olla a presión o unos 40 min tapada).",
          "s": 1200
        },
        {
          "t": "Agrega las papas y cocina destapado hasta que estén suaves y el caldo se reduzca a una salsa espesa.",
          "s": 720
        },
        {
          "t": "Ajusta la sal y sirve caliente con perejil picado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em cubos de 3 cm e tempere com sal e pimenta. Pique a cebola, o alho e o tomate; corte a cenoura em rodelas e as batatas em pedaços.",
          "s": null
        },
        {
          "t": "Sele a carne em panela quente com gotas de óleo até dourar; retire.",
          "s": 300
        },
        {
          "t": "Refogue a cebola, o alho e a cenoura na mesma panela.",
          "s": 240
        },
        {
          "t": "Junte o tomate e 1 colher de chá de páprica doce e mexa.",
          "s": null
        },
        {
          "t": "Devolva a carne, junte o vinho tinto e deixe o álcool evaporar; cubra com caldo ou água, junte louro e sal e cozinhe até amaciar (20 min na pressão ou uns 40 min tampada).",
          "s": 1200
        },
        {
          "t": "Acrescente as batatas e cozinhe destampado até ficarem macias e o caldo reduzir a um molho grosso.",
          "s": 720
        },
        {
          "t": "Acerte o sal e sirva quente com salsinha picada.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut the beef into 3 cm cubes and season with salt and pepper. Chop the onion, garlic and tomato; slice the carrot and cut the potatoes into chunks.",
          "s": null
        },
        {
          "t": "Sear the beef in a hot pot with a few drops of oil until browned; remove.",
          "s": 300
        },
        {
          "t": "Sauté the onion, garlic and carrot in the same pot.",
          "s": 240
        },
        {
          "t": "Add the tomato and 1 tsp sweet paprika and stir.",
          "s": null
        },
        {
          "t": "Return the beef, pour in the red wine and let the alcohol cook off; cover with broth or water, add bay leaf and salt and cook until tender (20 min pressure cooker or about 40 min covered).",
          "s": 1200
        },
        {
          "t": "Add the potatoes and cook uncovered until soft and the broth reduces to a thick sauce.",
          "s": 720
        },
        {
          "t": "Adjust the salt and serve hot with chopped parsley.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Estofado de Ternera Español receta paso a paso"
  },
  {
    "id": "es_19",
    "country": "SPANISH",
    "time": 10,
    "fav": false,
    "img": "images/es_19.jpg",
    "title": {
      "es": "Pan Tumaca con Jamón Serrano",
      "pt": "Pan Tumaca com Presunto Cru",
      "en": "Pan Tumaca with Serrano Ham"
    },
    "brTip": {
      "es": "Pan rústico tostado frotado con ajo y tomate maduro, aceite de oliva y jamón serrano. En Brasil: presunto cru.",
      "pt": "Pão rústico tostado esfregado com alho e tomate maduro, azeite e presunto serrano. No Brasil: presunto cru.",
      "en": "Toasted rustic bread rubbed with garlic and ripe tomato, olive oil and serrano ham. In Brazil: presunto cru."
    },
    "macrosTrad": {
      "kcal": 490,
      "p": 27,
      "c": 49,
      "f": 22
    },
    "macrosFit": {
      "kcal": 340,
      "p": 18,
      "c": 41,
      "f": 12
    },
    "ingredients": [
      {
        "id": "pao",
        "grams": 80,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 115,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "jamon",
        "grams": 60,
        "fitGrams": 35,
        "sub": {
          "es": "En Brasil: Presunto cru",
          "pt": "No Brasil: Presunto cru",
          "en": "In Brazil: Presunto cru"
        },
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Ten listas lonchas finas de jamón serrano a temperatura ambiente.",
          "s": null
        },
        {
          "t": "Elige un pan rústico de miga abierta (pan de payés o chapata).",
          "s": null
        },
        {
          "t": "Corta rebanadas de pan rústico y tuéstalas hasta que estén crocantes.",
          "s": 180
        },
        {
          "t": "Pela medio diente de ajo y frótalo suavemente sobre la superficie áspera del pan, solo para perfumar.",
          "s": null
        },
        {
          "t": "Corta el tomate maduro por la mitad y rállalo por la parte gruesa del rallador, descartando la piel.",
          "s": null
        },
        {
          "t": "Esparce el tomate sobre el pan, rocía buen aceite de oliva y una pizca de sal.",
          "s": null
        },
        {
          "t": "Coloca el jamón encima y sirve al momento, antes de que el pan se ablande.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Deixe prontas fatias finas de presunto cru em temperatura ambiente.",
          "s": null
        },
        {
          "t": "Escolha um pão rústico de miolo aerado (tipo ciabatta).",
          "s": null
        },
        {
          "t": "Corte fatias de pão rústico e toste até ficarem crocantes.",
          "s": 180
        },
        {
          "t": "Descasque meio dente de alho e esfregue de leve na superfície áspera do pão, só para perfumar.",
          "s": null
        },
        {
          "t": "Corte o tomate maduro ao meio e rale na parte grossa do ralador, descartando a pele.",
          "s": null
        },
        {
          "t": "Espalhe o tomate sobre o pão, regue com bom azeite e uma pitada de sal.",
          "s": null
        },
        {
          "t": "Coloque o presunto por cima e sirva na hora, antes que o pão amoleça.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Have thin slices of serrano ham ready at room temperature.",
          "s": null
        },
        {
          "t": "Choose a rustic open-crumb bread (pa de pagès or ciabatta).",
          "s": null
        },
        {
          "t": "Slice the rustic bread and toast until crisp.",
          "s": 180
        },
        {
          "t": "Peel half a garlic clove and rub it lightly over the rough surface of the bread, just to perfume it.",
          "s": null
        },
        {
          "t": "Halve the ripe tomato and grate it on the coarse side of the grater, discarding the skin.",
          "s": null
        },
        {
          "t": "Spread the tomato over the bread, drizzle with good olive oil and a pinch of salt.",
          "s": null
        },
        {
          "t": "Top with the ham and serve right away, before the bread softens.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Pan Tumaca con Jamón Serrano receta paso a paso"
  },
  {
    "id": "es_20",
    "country": "SPANISH",
    "time": 24,
    "fav": false,
    "img": "images/es_20.jpg",
    "title": {
      "es": "Fideuá de Mariscos",
      "pt": "Fideuá de Frutos do Mar",
      "en": "Seafood Fideuà"
    },
    "brTip": {
      "es": "Como la paella pero con macarrão cabelo-de-anjo o espaguete partido en trocitos tostado primero en aceite.",
      "pt": "Estilo paella feito com macarrão cabelo-de-anjo ou espaguete quebrado tostado no azeite.",
      "en": "Paella-style dish made with short toasted pasta noodles instead of rice."
    },
    "macrosTrad": {
      "kcal": 589,
      "p": 45,
      "c": 42,
      "f": 27
    },
    "macrosFit": {
      "kcal": 452,
      "p": 48,
      "c": 37,
      "f": 12
    },
    "ingredients": [
      {
        "id": "macarrao",
        "grams": 110,
        "fitGrams": 90,
        "sub": {
          "es": "En Brasil: Macarrão cabelo de anjo",
          "pt": "No Brasil: Macarrão cabelo de anjo",
          "en": "In Brazil: Macarrão cabelo de anjo"
        },
        "fitId": null
      },
      {
        "id": "tilapia",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 60,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "calamar",
        "grams": 40,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mariscos",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 30,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 7.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azafran",
        "grams": 0.5,
        "fitGrams": 0.5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "maionesa",
        "grams": 10,
        "fitGrams": 5,
        "sub": null,
        "fitId": "iogurte"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Calienta el caldo de pescado (2 partes por 1 de fideos) con unas hebras de azafrán. Corta el pescado en trozos y sálalo junto con los camarones.",
          "s": null
        },
        {
          "t": "Parte el espagueti fino o cabello de ángel en trocitos de 3 cm.",
          "s": null
        },
        {
          "t": "Tuesta los fideos en una sartén ancha con 1 cdta de aceite hasta que doren ligeramente; retíralos.",
          "s": 180
        },
        {
          "t": "En la misma sartén sofríe el calamar, el ajo, el pimiento y el tomate rallado con pimentón y el resto del aceite.",
          "s": 240
        },
        {
          "t": "Agrega los fideos tostados y vierte el caldo caliente; cocina sin revolver.",
          "s": 420
        },
        {
          "t": "Coloca el pescado y los camarones encima los últimos minutos, hasta que el caldo se absorba y las puntas de los fideos se levanten.",
          "s": 180
        },
        {
          "t": "Deja reposar un par de minutos y sirve con gajos de limón y alioli.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Aqueça o caldo de peixe (2 partes para 1 de macarrão) com alguns fios de açafrão. Corte o peixe em pedaços e salgue junto com os camarões.",
          "s": null
        },
        {
          "t": "Quebre o espaguete fino ou cabelo de anjo em pedacinhos de 3 cm.",
          "s": null
        },
        {
          "t": "Toste o macarrão numa frigideira larga com 1 colher (chá) de azeite até dourar levemente; retire.",
          "s": 180
        },
        {
          "t": "Na mesma frigideira refogue a lula, o alho, o pimentão e o tomate ralado com páprica e o resto do azeite.",
          "s": 240
        },
        {
          "t": "Junte o macarrão tostado e despeje o caldo quente; cozinhe sem mexer.",
          "s": 420
        },
        {
          "t": "Arrume o peixe e os camarões por cima nos últimos minutos, até o caldo ser absorvido e as pontas do macarrão levantarem.",
          "s": 180
        },
        {
          "t": "Deixe descansar alguns minutos e sirva com gomos de limão e aioli.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Heat the fish stock (2 parts to 1 of noodles) with a few saffron threads. Cut the fish into pieces and salt it with the shrimp.",
          "s": null
        },
        {
          "t": "Break thin spaghetti or angel hair into 3 cm pieces.",
          "s": null
        },
        {
          "t": "Toast the noodles in a wide pan with 1 tsp oil until lightly golden; remove.",
          "s": 180
        },
        {
          "t": "In the same pan sauté the squid, garlic, pepper and grated tomato with paprika and the rest of the oil.",
          "s": 240
        },
        {
          "t": "Add the toasted noodles and pour in the hot stock; cook without stirring.",
          "s": 420
        },
        {
          "t": "Lay the fish and shrimp on top in the last minutes, until the stock is absorbed and the noodle tips curl up.",
          "s": 180
        },
        {
          "t": "Rest a couple of minutes and serve with lemon wedges and aioli.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Fideuá de Mariscos receta paso a paso"
  }
];
