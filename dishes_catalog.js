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
      "kcal": 725,
      "p": 52,
      "c": 61,
      "f": 30
    },
    "macrosFit": {
      "kcal": 554,
      "p": 51,
      "c": 51,
      "f": 16
    },
    "ingredients": [
      {
        "id": "feijao_preto",
        "grams": 140,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "lombo",
        "grams": 100,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 70,
        "fitGrams": 0,
        "sub": "Lombo defumado / Peito de peru",
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
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 60,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": "Arroz Integral",
        "fitId": "arroz"
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
          "t": "Mientras tanto, corta el lomo de cerdo en cubos de 3 cm y la lingüiça en rodajas. Dóralos en sartén aparte a fuego medio-alto 6 min hasta que suelten su grasa y tomen color.",
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
          "t": "Corte o lombo em cubos de 3 cm e a linguiça em rodelas. Doure em frigideira quente por 6 min.",
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
          "t": "Cube pork loin and slice sausage; sear in a hot skillet for 6 min until browned.",
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
      "kcal": 475,
      "p": 45,
      "c": 42,
      "f": 15
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 190,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite_coco",
        "grams": 80,
        "fitGrams": 60,
        "sub": "Leite de coco light",
        "fitId": null
      },
      {
        "id": "dende",
        "grams": 15,
        "fitGrams": 0,
        "sub": "Azeite de oliva",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
        "fitGrams": 70,
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
        "sub": "Arroz Integral",
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
      "kcal": 629,
      "p": 20,
      "c": 60,
      "f": 34
    },
    "macrosFit": {
      "kcal": 448,
      "p": 15,
      "c": 54,
      "f": 19
    },
    "ingredients": [
      {
        "id": "tapioca",
        "grams": 90,
        "fitGrams": 80,
        "sub": "Polvilho azedo/doce",
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 60,
        "fitGrams": 45,
        "sub": "Queijo minas light",
        "fitId": "ricota"
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 60,
        "fitGrams": 60,
        "sub": "Leite desnatado",
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 8,
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
      "kcal": 618,
      "p": 57,
      "c": 42,
      "f": 23
    },
    "macrosFit": {
      "kcal": 523,
      "p": 66,
      "c": 35,
      "f": 12
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
        "fitGrams": 0,
        "sub": "Requeijão light / Iogurte",
        "fitId": "requeijao"
      },
      {
        "id": "requeijao",
        "grams": 0,
        "fitGrams": 50,
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
        "grams": 40,
        "fitGrams": 40,
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
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": "Arroz Integral",
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
      "kcal": 696,
      "p": 56,
      "c": 54,
      "f": 27
    },
    "macrosFit": {
      "kcal": 651,
      "p": 58,
      "c": 47,
      "f": 25
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 110,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "carne_seca",
        "grams": 100,
        "fitGrams": 120,
        "sub": "Patinho desfiado",
        "fitId": null
      },
      {
        "id": "coalho",
        "grams": 60,
        "fitGrams": 40,
        "sub": "Queijo minas",
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
      "kcal": 752,
      "p": 58,
      "c": 67,
      "f": 27
    },
    "macrosFit": {
      "kcal": 711,
      "p": 61,
      "c": 61,
      "f": 24
    },
    "ingredients": [
      {
        "id": "mandioca",
        "grams": 180,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "carne_seca",
        "grams": 130,
        "fitGrams": 150,
        "sub": "Patinho moído",
        "fitId": null
      },
      {
        "id": "requeijao",
        "grams": 40,
        "fitGrams": 35,
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
        "fitGrams": 50,
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
          "t": "Pela y corta la mandioca en trozos. Cuécela en agua con sal 20 min hasta que al pinchar con tenedor se deshaga fácil; retira la fibra central dura.",
          "s": 1200
        },
        {
          "t": "Aplasta la mandioca caliente con tenedor o prensapapas junto con el requeijão y 3 cucharadas de leche hasta lograr un puré liso.",
          "s": null
        },
        {
          "t": "Aparte, sofríe cebolla, ajo y tomate picado 4 min; agrega la carne desmenuzada o molida y cocina 5 min hasta quedar jugosa.",
          "s": 300
        },
        {
          "t": "En un molde resistente al horno, coloca la carne al fondo, cubre con el puré de mandioca y espolvorea queso rallado.",
          "s": null
        },
        {
          "t": "Gratina en horno a 200°C (o airfryer) 10 min hasta que la superficie burbujee y dore.",
          "s": 600
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a mandioca em água e sal por 20 min até ficar bem macia e retire o fio central.",
          "s": 1200
        },
        {
          "t": "Amasse ainda quente com requeijão e um pouco de leite até formar purê liso.",
          "s": null
        },
        {
          "t": "Refogue cebola, alho, tomate e a carne desfiada ou moída por 5 min.",
          "s": 300
        },
        {
          "t": "Em um refratário, coloque a carne embaixo, cubra com o purê e polvilhe queijo.",
          "s": null
        },
        {
          "t": "Gratine no forno ou airfryer a 200°C por 10 min até dourar.",
          "s": 600
        }
      ],
      "en": [
        {
          "t": "Boil peeled cassava in salted water 20 min until fork-tender; remove tough center vein.",
          "s": 1200
        },
        {
          "t": "Mash while hot with requeijão and a splash of milk until smooth.",
          "s": null
        },
        {
          "t": "Sauté onion, garlic, tomato, and shredded or ground beef for 5 min.",
          "s": 300
        },
        {
          "t": "Layer beef in a baking dish, spread cassava mash on top, and sprinkle cheese.",
          "s": null
        },
        {
          "t": "Broil or air-fry at 200°C for 10 min until golden.",
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
      "kcal": 580,
      "p": 47,
      "c": 47,
      "f": 23
    },
    "macrosFit": {
      "kcal": 550,
      "p": 46,
      "c": 39,
      "f": 23
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 170,
        "fitGrams": 170,
        "sub": "Peito de frango",
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 100,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "pimentao",
        "grams": 50,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Sazona los trozos de pollo con ajo, sal, pimienta y 1 cdta de cúrcuma (açafrão-da-terra).",
          "s": null
        },
        {
          "t": "Calienta aceite en olla grande y dora el pollo 6 min por todos sus lados hasta que tome color dorado.",
          "s": 360
        },
        {
          "t": "Agrega cebolla, pimentón y tomate picados; sofríe 3 min raspando el fondo de la olla para levantar todo el sabor.",
          "s": 180
        },
        {
          "t": "Añade el arroz crudo y remueve 2 min para que absorba la grasa aromática. Vierte agua hirviendo (doble volumen del arroz).",
          "s": 120
        },
        {
          "t": "Tapa y cocina a fuego bajo 16 min hasta que el agua se consuma y el arroz quede suelto. Apaga, reposa 5 min y mezcla cheiro-verde.",
          "s": 960
        }
      ],
      "pt": [
        {
          "t": "Tempere os pedaços de frango com alho, sal, pimenta e açafrão-da-terra.",
          "s": null
        },
        {
          "t": "Doure bem o frango em panela larga por 6 min.",
          "s": 360
        },
        {
          "t": "Junte cebola, pimentão e tomate picados; refogue por 3 min.",
          "s": 180
        },
        {
          "t": "Adicione o arroz cru, mexa 2 min e cubra com água fervente (dobro da medida do arroz).",
          "s": 120
        },
        {
          "t": "Tampe e cozinhe em fogo baixo por 16 min. Desligue, aguarde 5 min e misture cheiro-verde.",
          "s": 960
        }
      ],
      "en": [
        {
          "t": "Season chicken pieces with garlic, salt, pepper, and turmeric.",
          "s": null
        },
        {
          "t": "Brown chicken well in a wide pot for 6 min.",
          "s": 360
        },
        {
          "t": "Add chopped onion, bell pepper, and tomato; sauté 3 min.",
          "s": 180
        },
        {
          "t": "Stir in raw rice 2 min, then pour double volume of boiling water.",
          "s": 120
        },
        {
          "t": "Cover and simmer on low 16 min until absorbed; rest 5 min and fluff with fresh herbs.",
          "s": 960
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
      "kcal": 896,
      "p": 65,
      "c": 107,
      "f": 23
    },
    "macrosFit": {
      "kcal": 804,
      "p": 64,
      "c": 84,
      "f": 23
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 160,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 130,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 35,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 60,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 80,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sazona las chuletas/lomo de cerdo con ajo, limón, sal y pimienta 10 min; luego asa en sartén 4 min por lado hasta dorar.",
          "s": 480
        },
        {
          "t": "Para el tutu: sofríe ajo y cebolla, agrega el feijão cocido con su caldo y aplasta la mitad. Añade la farinha de mandioca en forma de lluvia mientras revuelves hasta lograr crema espesa.",
          "s": 240
        },
        {
          "t": "Corta la couve en tiras muy finas y saltéala 2 min en sartén con ajo y sal.",
          "s": 120
        },
        {
          "t": "Fríe 1 huevo y dora rodajas de banana-da-terra en sartén. Sirve todo organizado en el plato con arroz.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Tempere a bisteca/lombo com alho, limão e sal; grelhe 4 min de cada lado.",
          "s": 480
        },
        {
          "t": "Para o tutu: refogue alho e cebola, junte o feijão com caldo e vá polvilhando farinha de mandioca mexendo até engrossar.",
          "s": 240
        },
        {
          "t": "Refogue a couve fatiada fina no alho por 2 min.",
          "s": 120
        },
        {
          "t": "Frite 1 ovo e doure a banana-da-terra. Sirva tudo no prato com arroz.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Season pork chop with garlic, lime, and salt; sear 4 min per side.",
          "s": 480
        },
        {
          "t": "Make tutu: sauté garlic and onion, add beans with broth, and whisk in cassava flour until thick.",
          "s": 240
        },
        {
          "t": "Flash-sauté shredded collard greens with garlic 2 min.",
          "s": 120
        },
        {
          "t": "Fry 1 egg and sear plantain slices; plate everything with rice.",
          "s": 180
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
      "es": "Bobó de Camarón / Tilapia",
      "pt": "Bobó de Camarão ou Peixe",
      "en": "Brazilian Cassava Coconut Seafood"
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
      "kcal": 554,
      "p": 36,
      "c": 75,
      "f": 12
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 160,
        "fitGrams": 170,
        "sub": "Tilápia em cubos",
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 160,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite_coco",
        "grams": 70,
        "fitGrams": 50,
        "sub": "Leite de coco light",
        "fitId": null
      },
      {
        "id": "dende",
        "grams": 10,
        "fitGrams": 0,
        "sub": "Azeite de oliva",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la mandioca hasta que quede muy blanda; licúala aún tibia con el leite de coco y un poco de agua de cocción hasta obtener una crema espesa.",
          "s": 900
        },
        {
          "t": "Sazona los camarones (o cubos de tilapia) con limón, sal y ajo; séllalos rápido 2 min en sartén caliente y retira para que no queden chiclosos.",
          "s": 120
        },
        {
          "t": "En la misma sartén, sofríe cebolla, pimentón y tomate picados 5 min hasta deshacerse.",
          "s": 300
        },
        {
          "t": "Vierte la crema de mandioca y el azeite de dendê; mezcla 3 min a fuego bajo.",
          "s": 180
        },
        {
          "t": "Devuelve los camarones a la olla solo 1 min para calentar, espolvorea cilantro y sirve con arroz.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a mandioca até ficar bem macia e bata no liquidificador com leite de coco até virar creme liso.",
          "s": 900
        },
        {
          "t": "Tempere o camarão (ou tilápia) com limão, alho e sal; sele rápido por 2 min e reserve.",
          "s": 120
        },
        {
          "t": "Na mesma panela, refogue cebola, pimentão e tomate por 5 min.",
          "s": 300
        },
        {
          "t": "Junte o creme de mandioca e o dendê; misture por 3 min em fogo baixo.",
          "s": 180
        },
        {
          "t": "Volte o camarão por 1 min só para aquecer, finalize com coentro e sirva com arroz.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil cassava until very soft and blend with coconut milk into a smooth cream.",
          "s": 900
        },
        {
          "t": "Season shrimp (or tilapia) with lime, garlic, and salt; flash-sear 2 min and set aside.",
          "s": 120
        },
        {
          "t": "In the same pan, sauté onion, bell pepper, and tomato 5 min.",
          "s": 300
        },
        {
          "t": "Stir in cassava cream and dendê oil; simmer 3 min.",
          "s": 180
        },
        {
          "t": "Return seafood for 1 min to warm through, garnish with cilantro, and serve with rice.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Bobó de Camarón / Tilapia receta paso a paso"
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
      "kcal": 797,
      "p": 51,
      "c": 71,
      "f": 34
    },
    "macrosFit": {
      "kcal": 647,
      "p": 58,
      "c": 57,
      "f": 21
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 140,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 80,
        "fitGrams": 0,
        "sub": "Lombo ou patinho em cubos",
        "fitId": null
      },
      {
        "id": "lombo",
        "grams": 70,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 45,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 60,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Cuece el feijão carioca al dente (que el grano quede entero, sin deshacerse) y escúrrelo completamente en colador.",
          "s": null
        },
        {
          "t": "Dora los cubos de cerdo y lingüiça en sartén grande 5 min con ajo y cebolla.",
          "s": 300
        },
        {
          "t": "Haz un hueco en la sartén, agrega los huevos batidos o revuélvelos ahí mismo hasta cuajar en trozos.",
          "s": 120
        },
        {
          "t": "Agrega la couve picada fina 1 min, luego incorpora el feijão bien escurrido.",
          "s": null
        },
        {
          "t": "Apaga el fuego y ve añadiendo la farinha de mandioca de a pocos mientras mezclas para que quede suelto y húmedo (no seco); termina con cheiro-verde.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o feijão carioca al dente (grãos firmes) e escorra toda a água.",
          "s": null
        },
        {
          "t": "Doure a linguiça e o lombo em cubinhos com alho e cebola por 5 min.",
          "s": 300
        },
        {
          "t": "Abra espaço na frigideira e mexa os ovos até cozinharem em pedaços.",
          "s": 120
        },
        {
          "t": "Junte a couve fatiada fina por 1 min e depois o feijão escorrido.",
          "s": null
        },
        {
          "t": "Desligue o fogo e misture a farinha de mandioca aos poucos até ficar soltinho; finalize com cheiro-verde.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cook carioca beans until just tender (firm grains) and drain thoroughly.",
          "s": null
        },
        {
          "t": "Brown sausage and pork cubes with garlic and onion 5 min.",
          "s": 300
        },
        {
          "t": "Push aside and scramble eggs in the same pan.",
          "s": 120
        },
        {
          "t": "Toss in shredded collards for 1 min, then fold in drained beans.",
          "s": null
        },
        {
          "t": "Turn off heat and gradually fold in cassava flour until coated but moist; top with fresh herbs.",
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
      "kcal": 573,
      "p": 49,
      "c": 42,
      "f": 24
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 175,
        "fitGrams": 175,
        "sub": "Peito de frango",
        "fitId": null
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
        "fitGrams": 50,
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
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Lava el quiabo entero y sécalo completamente con paño limpio antes de cortarlo en rodajas de 1.5 cm (si está mojado, suelta baba).",
          "s": null
        },
        {
          "t": "En sartén bien caliente con 1 cdta de aceite, saltea el quiabo con gotas de limón durante 5 min sin tapar hasta dorar los bordes; reserva.",
          "s": 300
        },
        {
          "t": "En olla, dora el pollo sazonado con ajo, sal y pimentón dulce 6 min hasta que suelte color.",
          "s": 360
        },
        {
          "t": "Agrega cebolla picada y 1 taza de agua caliente; cocina tapado a fuego medio 15 min hasta que el pollo esté tierno.",
          "s": 900
        },
        {
          "t": "Incorpora el quiabo dorado los últimos 3 minutos solo para integrar sabores y sirve con arroz o angu (polenta).",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Lave o quiabo inteiro e seque muito bem com pano antes de cortar em rodelas.",
          "s": null
        },
        {
          "t": "Em frigideira quente com fio de óleo e gotas de limão, frite o quiabo sem tampa por 5 min; reserve.",
          "s": 300
        },
        {
          "t": "Na panela, doure o frango temperado com alho, sal e colorau por 6 min.",
          "s": 360
        },
        {
          "t": "Junte a cebola e 1 xícara de água quente; cozinhe tampado por 15 min.",
          "s": 900
        },
        {
          "t": "Adicione o quiabo dourado nos últimos 3 min e sirva com arroz ou angu.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Wash whole okra and pat completely dry before slicing.",
          "s": null
        },
        {
          "t": "Sear okra uncovered in a hot pan with a splash of lime for 5 min until edges brown; set aside.",
          "s": 300
        },
        {
          "t": "Brown chicken seasoned with garlic and salt in a pot for 6 min.",
          "s": 360
        },
        {
          "t": "Add onion and 1 cup hot water; simmer covered 15 min.",
          "s": 900
        },
        {
          "t": "Fold in seared okra for the last 3 min and serve with rice.",
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
      "kcal": 517,
      "p": 28,
      "c": 32,
      "f": 31
    },
    "macrosFit": {
      "kcal": 450,
      "p": 26,
      "c": 30,
      "f": 25
    },
    "ingredients": [
      {
        "id": "cuscuz",
        "grams": 110,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "coalho",
        "grams": 45,
        "fitGrams": 35,
        "sub": "Queijo minas",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 8,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "En un bol, mezcla 1 taza de flocão de milho con 1 pizca de sal y 1/2 taza de agua. Deja hidratar 10 min hasta que absorba todo y quede húmedo pero suelto.",
          "s": 600
        },
        {
          "t": "Coloca en la cuscuzeira con agua abajo (sin presionar el maíz) y cocina al vapor 8–10 min hasta sentir aroma a maíz cocido. (Tip rápido: en bol tapado en microondas 3 min).",
          "s": 540
        },
        {
          "t": "Mientras tanto, asa el queijo coalho/minas en sartén y haz 2 huevos revueltos o estrellados.",
          "s": 180
        },
        {
          "t": "Sirve el cuscuz caliente con el queso fundiendo encima, los huevos y tomate picado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture o flocão de milho com sal e água (metade do volume do flocão) e deixe hidratar por 10 min.",
          "s": 600
        },
        {
          "t": "Coloque na cuscuzeira sem apertar e cozinhe no vapor por 8–10 min (ou 3 min no micro-ondas em tigela tampada).",
          "s": 540
        },
        {
          "t": "Enquanto isso, grelhe o queijo coalho/minas e prepare os ovos mexidos ou fritos.",
          "s": 180
        },
        {
          "t": "Sirva o cuscuz quentinho com o queijo derretendo por cima, ovos e tomate.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Mix cornmeal (flocão) with salt and half its volume in water; rest 10 min to hydrate.",
          "s": 600
        },
        {
          "t": "Steam in a cuscuzeira (without packing down) for 8–10 min until fragrant.",
          "s": 540
        },
        {
          "t": "Meanwhile sear cheese and fry or scramble eggs.",
          "s": 180
        },
        {
          "t": "Top steaming cornmeal with melted cheese, eggs, and diced tomato.",
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
      "kcal": 503,
      "p": 19,
      "c": 45,
      "f": 29
    },
    "macrosFit": {
      "kcal": 414,
      "p": 46,
      "c": 39,
      "f": 9
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 180,
        "fitGrams": 150,
        "sub": "Batata-doce / Chuchu",
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 70,
        "fitGrams": 0,
        "sub": "Frango desfiado / Peito de peru",
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 0,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 80,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Sofríe cebolla y ajo en olla 3 min. Agrega las papas peladas en cubos y cubre con agua o caldo; hierve 15 min hasta que estén muy blandas.",
          "s": 900
        },
        {
          "t": "Licúa o pasa por mixer las papas con su agua hasta obtener una crema espesa y lisa.",
          "s": null
        },
        {
          "t": "Aparte, dora las rodajas finas de lingüiça calabresa (o pollo desmenuzado en modo fit) 4 min.",
          "s": 240
        },
        {
          "t": "Lleva la crema nuevamente a hervor suave, añade la carne y la couve cortada en tiras finísimas. Cocina solo 2 min para que la couve siga verde brillante.",
          "s": 120
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola e alho por 3 min, junte as batatas em cubos e água; cozinhe por 15 min até amaciar.",
          "s": 900
        },
        {
          "t": "Bata no liquidificador com a água do cozimento até virar um creme aveludado.",
          "s": null
        },
        {
          "t": "Doure rodelas finas de calabresa (ou frango no modo fit) por 4 min.",
          "s": 240
        },
        {
          "t": "Volte o creme ao fogo, junte a calabresa e a couve fatiada bem fina; cozinhe apenas 2 min para manter a cor verde.",
          "s": 120
        }
      ],
      "en": [
        {
          "t": "Sauté onion and garlic 3 min, add diced potatoes and water; boil 15 min until very tender.",
          "s": 900
        },
        {
          "t": "Blend potatoes with cooking liquid into a smooth soup.",
          "s": null
        },
        {
          "t": "Crisp thin slices of smoked sausage (or chicken) for 4 min.",
          "s": 240
        },
        {
          "t": "Return soup to simmer, stir in meat and finely shredded collards for just 2 min.",
          "s": 120
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
      "kcal": 552,
      "p": 57,
      "c": 39,
      "f": 18
    },
    "ingredients": [
      {
        "id": "carne_seca",
        "grams": 130,
        "fitGrams": 150,
        "sub": "Patinho em cubos",
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 100,
        "sub": "Arroz Integral",
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
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Corta la carne seca desalada (o carne asada/patinho) en cubos pequeños de 1 cm.",
          "s": null
        },
        {
          "t": "Dora la carne en olla caliente 5 min con cebolla, ajo y pimentón.",
          "s": 300
        },
        {
          "t": "Agrega el tomate picado y el arroz crudo; mezcla 2 min para sellar los granos.",
          "s": 120
        },
        {
          "t": "Cubre con agua caliente (2 dedos arriba del arroz), tapa y cocina a fuego bajo 15 min hasta secar. Termina con cheiro-verde.",
          "s": 900
        }
      ],
      "pt": [
        {
          "t": "Corte a carne seca dessalgada (ou patinho/sobra de churrasco) em cubinhos.",
          "s": null
        },
        {
          "t": "Doure a carne em panela quente por 5 min com cebola, alho e pimentão.",
          "s": 300
        },
        {
          "t": "Junte o tomate picado e o arroz cru; refogue por 2 min.",
          "s": 120
        },
        {
          "t": "Cubra com água quente, tampe e cozinhe em fogo baixo por 15 min; finalize com cheiro-verde.",
          "s": 900
        }
      ],
      "en": [
        {
          "t": "Dice desalted cured beef (or lean beef) into small 1cm cubes.",
          "s": null
        },
        {
          "t": "Brown beef with onion, garlic, and bell pepper for 5 min.",
          "s": 300
        },
        {
          "t": "Add chopped tomato and raw rice; stir 2 min.",
          "s": 120
        },
        {
          "t": "Pour hot water to cover, simmer covered 15 min until tender, and garnish with herbs.",
          "s": 900
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
      "kcal": 634,
      "p": 65,
      "c": 62,
      "f": 13
    },
    "macrosFit": {
      "kcal": 609,
      "p": 65,
      "c": 56,
      "f": 13
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 170,
        "fitGrams": 170,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 160,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 60,
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
          "t": "Corta la carne en cubos medianos y sella en olla a presión (o normal) a fuego fuerte hasta dorar bien los bordes (6 min).",
          "s": 360
        },
        {
          "t": "Agrega cebolla, ajo y tomate picado; sofríe 3 min.",
          "s": 180
        },
        {
          "t": "Cubre con agua caliente y cocina 20 min en olla a presión (o 45 min en olla normal) hasta que la carne esté blanda.",
          "s": 1200
        },
        {
          "t": "Abre la olla, agrega la mandioca en trozos medianos y cocina 12 min más hasta que la mandioca esté suave y espese el caldo; termina con cheiro-verde.",
          "s": 720
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em cubos e sele em panela de pressão bem quente por 6 min até dourar.",
          "s": 360
        },
        {
          "t": "Junte cebola, alho e tomate picado e refogue por 3 min.",
          "s": 180
        },
        {
          "t": "Cubra com água quente e cozinhe na pressão por 20 min até a carne amaciar.",
          "s": 1200
        },
        {
          "t": "Adicione a mandioca em pedaços e cozinhe mais 12 min até ficar macia e engrossar o caldo; finalize com cheiro-verde.",
          "s": 720
        }
      ],
      "en": [
        {
          "t": "Sear cubed beef in a hot pressure cooker for 6 min until well browned.",
          "s": 360
        },
        {
          "t": "Add onion, garlic, and diced tomato; sauté 3 min.",
          "s": 180
        },
        {
          "t": "Cover with hot water and pressure-cook 20 min until beef is tender.",
          "s": 1200
        },
        {
          "t": "Add cassava chunks and simmer 12 more min until tender and broth thickens; garnish with herbs.",
          "s": 720
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
      "es": "Vatapá Baiano de Camarón/Pollo",
      "pt": "Vatapá Baiano",
      "en": "Bahian Peanut-Coconut Vatapá"
    },
    "brTip": {
      "es": "Crema bahiana de pan remojado (o avena), leite de coco, amendoim torrado, camarón/pollo y dendê.",
      "pt": "Creme de pão amanhecido (ou aveia), leite de coco, amendoim e camarão/frango.",
      "en": "Creamy bread-coconut-peanut sauce with shrimp or chicken."
    },
    "macrosTrad": {
      "kcal": 774,
      "p": 39,
      "c": 67,
      "f": 40
    },
    "macrosFit": {
      "kcal": 628,
      "p": 42,
      "c": 61,
      "f": 25
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 130,
        "fitGrams": 150,
        "sub": "Peito de frango desfiado",
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 60,
        "fitGrams": 0,
        "sub": "Aveia em flocos",
        "fitId": null
      },
      {
        "id": "aveia",
        "grams": 0,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite_coco",
        "grams": 80,
        "fitGrams": 60,
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
        "fitGrams": 0,
        "sub": "Azeite",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 90,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Remoja el pan francés del día anterior en el leite de coco y 1/2 taza de agua durante 5 min.",
          "s": 300
        },
        {
          "t": "Licúa ese pan remojado junto con el maní tostado (amendoim), cebolla, tomate y jengibre hasta obtener una pasta espesa.",
          "s": null
        },
        {
          "t": "Lleva la mezcla a olla a fuego medio-bajo y revuelve constantemente con cuchara de madera 8 min hasta despegar del fondo.",
          "s": 480
        },
        {
          "t": "Agrega los camarones sellados (o pollo desmenuzado) y el azeite de dendê; cocina 3 min y sirve con arroz.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Deixe o pão amanhecido de molho no leite de coco e água por 5 min.",
          "s": 300
        },
        {
          "t": "Bata no liquidificador com amendoim torrado, cebola, tomate e gengibre.",
          "s": null
        },
        {
          "t": "Leve ao fogo médio-baixo mexendo sempre por 8 min até engrossar e soltar do fundo.",
          "s": 480
        },
        {
          "t": "Junte o camarão (ou frango) e o azeite de dendê por 3 min; sirva com arroz.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Soak day-old bread in coconut milk and water for 5 min.",
          "s": 300
        },
        {
          "t": "Blend with roasted peanuts, onion, tomato, and ginger until smooth.",
          "s": null
        },
        {
          "t": "Cook over medium-low heat stirring constantly 8 min until thick.",
          "s": 480
        },
        {
          "t": "Fold in seared shrimp (or chicken) and dendê oil for 3 min; serve with rice.",
          "s": 180
        }
      ]
    },
    "videoQuery": "como hacer Vatapá Baiano de Camarón/Pollo receta paso a paso"
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
      "kcal": 772,
      "p": 77,
      "c": 47,
      "f": 29
    },
    "macrosFit": {
      "kcal": 708,
      "p": 78,
      "c": 40,
      "f": 24
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 170,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "feijao",
        "grams": 100,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Saca la carne de la nevera 10 min antes y sécala bien; sazona con sal y ajo solo al momento de ir a la sartén.",
          "s": null
        },
        {
          "t": "Calienta sartén hasta que casi humee, pon un hilo de aceite y sella el bife 2.5 min por lado sin aplastarlo.",
          "s": 300
        },
        {
          "t": "Retira el bife a un plato caliente. En la misma sartén, saltea cebolla en rodajas 2 min y fríe 1 huevo dejando la yema cremosa.",
          "s": 180
        },
        {
          "t": "Coloca el huevo encima del bife y sirve con arroz blanco y feijão carioca.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Seque o bife e tempere com sal e alho na hora de grelhar.",
          "s": null
        },
        {
          "t": "Em frigideira bem quente, sele o bife por 2.5 min de cada lado sem apertar.",
          "s": 300
        },
        {
          "t": "Reserve o bife no prato. Na mesma frigideira, doure cebola e frite 1 ovo deixando a gema mole.",
          "s": 180
        },
        {
          "t": "Coloque o ovo sobre o bife e sirva com arroz e feijão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Pat steak dry and season with salt and garlic right before searing.",
          "s": null
        },
        {
          "t": "Sear in a piping-hot skillet 2.5 min per side without pressing.",
          "s": 300
        },
        {
          "t": "Transfer steak to plate; fry onion rings and 1 sunny-side-up egg in the pan.",
          "s": 180
        },
        {
          "t": "Slide egg over steak and serve with rice and beans.",
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
      "kcal": 559,
      "p": 46,
      "c": 41,
      "f": 24
    },
    "macrosFit": {
      "kcal": 547,
      "p": 46,
      "c": 38,
      "f": 24
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 180,
        "fitGrams": 180,
        "sub": "Peito de frango em cubos",
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 20,
        "fitGrams": 20,
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
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 110,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el pollo en trozos pequeños tamaño bocado y marina 15 min con jugo de limón, ajo machacado, sal y pimienta.",
          "s": 900
        },
        {
          "t": "Escurre y seca ligeramente los trozos.",
          "s": null
        },
        {
          "t": "Cocina en airfryer a 200°C durante 18 min (o dora en sartén con aceite caliente) hasta que la piel/exterior quede súper crocante.",
          "s": 1080
        },
        {
          "t": "Dora láminas finas de ajo 30 seg (sin quemar), mezcla sobre el pollo caliente junto con perejil picado y más limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte o frango em pedaços pequenos e marine por 15 min com limão, alho, sal e pimenta.",
          "s": 900
        },
        {
          "t": "Escorra e seque bem os pedaços.",
          "s": null
        },
        {
          "t": "Asse na airfryer a 200°C por 18 min (ou frite até dourar bem) até ficar bem crocante.",
          "s": 1080
        },
        {
          "t": "Doure lâminas de alho por 30s, jogue sobre o frango quente com salsinha e limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut chicken into bite-sized pieces and marinate 15 min in lime, garlic, salt, and pepper.",
          "s": 900
        },
        {
          "t": "Drain and pat dry.",
          "s": null
        },
        {
          "t": "Air-fry at 200°C for 18 min (or pan-fry) until golden and crispy.",
          "s": 1080
        },
        {
          "t": "Toast garlic slices 30s and toss over hot chicken with parsley and fresh lime.",
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
      "kcal": 710,
      "p": 72,
      "c": 60,
      "f": 18
    },
    "macrosFit": {
      "kcal": 671,
      "p": 75,
      "c": 45,
      "f": 19
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 165,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
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
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 85,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "farinha_mandioca",
        "grams": 25,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne magra (patinho o filé mignon) en cubos pequeños uniformes de 1 cm; sazona con sal y pimienta.",
          "s": null
        },
        {
          "t": "Calienta sartén fuerte y sella la carne en 2 tandas (para que dore y no hierva) durante 4 min.",
          "s": 240
        },
        {
          "t": "En la misma sartén, sofríe cebolla, ajo y tomate picado 4 min; agrega 1 cda de shoyu y 1/2 taza de agua caliente.",
          "s": 240
        },
        {
          "t": "Devuelve la carne y cocina tapado a fuego bajo 10 min hasta que la salsa quede brillante y espesa. Sirve con arroz, huevo y farofa.",
          "s": 600
        }
      ],
      "pt": [
        {
          "t": "Corte o patinho em cubinhos de 1 cm e tempere com sal e pimenta.",
          "s": null
        },
        {
          "t": "Sele a carne em frigideira bem quente aos poucos por 4 min até dourar.",
          "s": 240
        },
        {
          "t": "Refogue cebola, alho e tomate por 4 min; junte 1 col. de shoyu e 1/2 xícara de água.",
          "s": 240
        },
        {
          "t": "Volte a carne e cozinhe 10 min até o molho encorpar; sirva com arroz, ovo e farofa.",
          "s": 600
        }
      ],
      "en": [
        {
          "t": "Dice lean beef into uniform 1cm cubes and season with salt and pepper.",
          "s": null
        },
        {
          "t": "Sear beef in batches in a hot skillet for 4 min.",
          "s": 240
        },
        {
          "t": "Sauté onion, garlic, and tomato 4 min; add soy sauce and 1/2 cup water.",
          "s": 240
        },
        {
          "t": "Return beef and simmer 10 min until glossy; serve with rice, egg, and farofa.",
          "s": 600
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
      "kcal": 460,
      "p": 54,
      "c": 49,
      "f": 4
    },
    "macrosFit": {
      "kcal": 446,
      "p": 57,
      "c": 42,
      "f": 5
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 150,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 80,
        "fitGrams": 70,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "cenoura",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 80,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
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
          "t": "Sofríe cebolla y ajo en olla; dora la pechuga de pollo entera 3 min por lado.",
          "s": 300
        },
        {
          "t": "Agrega zanahoria y papa en cubitos, 1 litro de agua y sal; hierve 15 min hasta cocer el pollo.",
          "s": 900
        },
        {
          "t": "Retira el pollo un momento, desmenúzalo con 2 tenedores y devuélvelo a la olla.",
          "s": null
        },
        {
          "t": "Añade el arroz crudo lavado y cocina 15 min más a fuego medio hasta que el arroz esté suave y el caldo ligeramente cremoso; termina con cheiro-verde.",
          "s": 900
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola e alho; sele o peito de frango inteiro por 3 min de cada lado.",
          "s": 300
        },
        {
          "t": "Junte cenoura e batata em cubinhos, 1 litro de água e sal; ferva 15 min.",
          "s": 900
        },
        {
          "t": "Retire o frango, desfie com dois garfos e volte para a panela.",
          "s": null
        },
        {
          "t": "Adicione o arroz lavado e cozinhe mais 15 min até ficar macio; finalize com cheiro-verde.",
          "s": 900
        }
      ],
      "en": [
        {
          "t": "Sauté onion and garlic; sear chicken breast 3 min per side.",
          "s": 300
        },
        {
          "t": "Add diced carrot, potato, water, and salt; boil 15 min.",
          "s": 900
        },
        {
          "t": "Remove chicken, shred with two forks, and return to pot.",
          "s": null
        },
        {
          "t": "Stir in rice and simmer 15 more min until tender; finish with fresh herbs.",
          "s": 900
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
      "es": "Filé à Parmegiana Brasileño",
      "pt": "Filé à Parmegiana",
      "en": "Brazilian Chicken/Beef Parmigiana"
    },
    "brTip": {
      "es": "Filete empanizado cubierto con salsa de tomate casera y queijo derretido, servido con arroz y papas.",
      "pt": "Filé empanado coberto com molho de tomate e queijo derretido, servido com arroz.",
      "en": "Breaded cutlet baked under tomato sauce and melted cheese."
    },
    "macrosTrad": {
      "kcal": 749,
      "p": 77,
      "c": 58,
      "f": 21
    },
    "macrosFit": {
      "kcal": 643,
      "p": 74,
      "c": 51,
      "f": 15
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 170,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 50,
        "fitGrams": 35,
        "sub": "Muçarela / Queijo minas",
        "fitId": "ricota"
      },
      {
        "id": "ovo",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "aveia",
        "grams": 35,
        "fitGrams": 35,
        "sub": "Farinha de rosca",
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la pechuga en filetes planos, sazona con ajo, sal y pimienta.",
          "s": null
        },
        {
          "t": "Pasa cada filete por huevo batido y luego por harina de avena o pan rallado (farinha de rosca) presionando bien.",
          "s": null
        },
        {
          "t": "Dora en sartén 3 min por lado (o cocina en airfryer 12 min a 190°C).",
          "s": 720
        },
        {
          "t": "Coloca salsa de tomate caliente encima y cubre con láminas de queso; lleva al horno/airfryer 4 min hasta derretir y sirve con arroz.",
          "s": 240
        }
      ],
      "pt": [
        {
          "t": "Corte o frango em filés finos e tempere com alho, sal e pimenta.",
          "s": null
        },
        {
          "t": "Passe no ovo batido e depois na farinha de rosca ou aveia.",
          "s": null
        },
        {
          "t": "Doure na frigideira por 3 min de cada lado (ou na airfryer a 190°C por 12 min).",
          "s": 720
        },
        {
          "t": "Cubra com molho de tomate e fatias de queijo; gratine 4 min até derreter e sirva com arroz.",
          "s": 240
        }
      ],
      "en": [
        {
          "t": "Slice chicken into thin cutlets and season with garlic, salt, and pepper.",
          "s": null
        },
        {
          "t": "Dip in beaten egg and coat in breadcrumbs or oat flour.",
          "s": null
        },
        {
          "t": "Pan-sear 3 min per side (or air-fry 12 min at 190°C).",
          "s": 720
        },
        {
          "t": "Spoon tomato sauce and cheese slices over cutlets; broil 4 min until bubbly.",
          "s": 240
        }
      ]
    },
    "videoQuery": "como hacer Filé à Parmegiana Brasileño receta paso a paso"
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
      "kcal": 436,
      "p": 60,
      "c": 25,
      "f": 10
    },
    "macrosFit": {
      "kcal": 417,
      "p": 62,
      "c": 24,
      "f": 8
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 170,
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
        "id": "milho",
        "grams": 60,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "requeijao",
        "grams": 40,
        "fitGrams": 20,
        "sub": "Iogurte natural + mostarda",
        "fitId": null
      },
      {
        "id": "iogurte",
        "grams": 30,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 30,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga de pollo en agua con sal y laurel 15 min, escúrrela y desmenúzala bien fina.",
          "s": 900
        },
        {
          "t": "Ralla la zanahoria cruda por el lado grueso del rallador y pica la cebolla bien finita.",
          "s": null
        },
        {
          "t": "En un bol grande, mezcla el pollo frío con zanahoria, maíz verde, manzana en cubitos (opcional) y aceitunas.",
          "s": null
        },
        {
          "t": "Adereza con requeijão/mayonesa y yogur natural; refrigera 15 min y agrega batata palha crocante justo al servir.",
          "s": 900
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito de frango com sal e louro por 15 min e desfie bem fino.",
          "s": 900
        },
        {
          "t": "Rale a cenoura crua no ralo grosso e pique a cebola bem pequena.",
          "s": null
        },
        {
          "t": "Misture o frango frio com cenoura, milho verde e azeitonas.",
          "s": null
        },
        {
          "t": "Tempere com requeijão/maionese e iogurte; gele 15 min e finalize com batata palha na hora de servir.",
          "s": 900
        }
      ],
      "en": [
        {
          "t": "Poach chicken breast 15 min, drain, and shred finely.",
          "s": 900
        },
        {
          "t": "Coarsely grate raw carrot and finely mince onion.",
          "s": null
        },
        {
          "t": "Toss chilled chicken with carrot, corn, and olives.",
          "s": null
        },
        {
          "t": "Bind with light creamy dressing, chill 15 min, and top with crispy potato sticks before serving.",
          "s": 900
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
      "kcal": 677,
      "p": 70,
      "c": 53,
      "f": 20
    },
    "macrosFit": {
      "kcal": 590,
      "p": 69,
      "c": 45,
      "f": 15
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 170,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "requeijao",
        "grams": 50,
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
        "id": "tomate",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Desmenuza pollo cocido y sofríelo 4 min con cebolla, ajo y tomate picado hasta que quede bien sabroso.",
          "s": 240
        },
        {
          "t": "En la licuadora, procesa 1 lata de maíz verde escurrido junto con requeijão y 1/2 taza de leche/caldo hasta formar crema lisa.",
          "s": null
        },
        {
          "t": "Vierte esa crema sobre el pollo en una olla y cocina 3 min removiendo hasta espesar.",
          "s": 180
        },
        {
          "t": "Pasa a un refractario, cubre con láminas de queso y hornea 12 min hasta dorar; sirve con arroz y batata palha.",
          "s": 720
        }
      ],
      "pt": [
        {
          "t": "Refogue frango desfiado com cebola, alho e tomate por 4 min.",
          "s": 240
        },
        {
          "t": "Bata no liquidificador o milho escorrido com requeijão e um pouco de leite até ficar cremoso.",
          "s": null
        },
        {
          "t": "Misture o creme ao frango em fogo baixo por 3 min para encorpar.",
          "s": 180
        },
        {
          "t": "Passe para um refratário, cubra com queijo e gratine 12 min; sirva com arroz e batata palha.",
          "s": 720
        }
      ],
      "en": [
        {
          "t": "Sauté shredded chicken with onion, garlic, and tomato for 4 min.",
          "s": 240
        },
        {
          "t": "Blend drained sweet corn with requeijão and milk into a smooth cream.",
          "s": null
        },
        {
          "t": "Fold corn cream into chicken over low heat for 3 min.",
          "s": 180
        },
        {
          "t": "Transfer to baking dish, top with cheese, and bake 12 min until golden.",
          "s": 720
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
      "kcal": 718,
      "p": 66,
      "c": 35,
      "f": 34
    },
    "macrosFit": {
      "kcal": 614,
      "p": 68,
      "c": 30,
      "f": 24
    },
    "ingredients": [
      {
        "id": "bacalhau",
        "grams": 160,
        "fitGrams": 170,
        "sub": "Tilápia desfiada",
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 25,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 18,
        "fitGrams": 8,
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
          "t": "Hierve el bacalao desalado 8 min, escurre y sepáralo en lascas quitando espinas.",
          "s": 480
        },
        {
          "t": "Corta las papas en tiras muy finas (tipo fósforo) y dóralas en horno/airfryer 12 min (o usa batata palha).",
          "s": 720
        },
        {
          "t": "Sofríe cebolla en julianas finas con ajo en aceite de oliva 6 min hasta que quede bien blanda y dulce; agrega el bacalao 2 min.",
          "s": 360
        },
        {
          "t": "Agrega las papas y vierte los huevos batidos con el fuego al mínimo; remueve suave 1 min para que el huevo quede jugoso (nunca seco). Decora con aceitunas y perejil.",
          "s": 60
        }
      ],
      "pt": [
        {
          "t": "Ferva o bacalhau dessalgado por 8 min, escorra e desfie em lascas.",
          "s": 480
        },
        {
          "t": "Asse tirinhas finas de batata na airfryer por 12 min (ou use batata palha).",
          "s": 720
        },
        {
          "t": "Refogue cebola fatiada e alho no azeite por 6 min até murchar bem; junte o bacalhau por 2 min.",
          "s": 360
        },
        {
          "t": "Adicione as batatas e os ovos batidos em fogo bem baixo; mexa 1 min mantendo cremoso e finalize com azeitonas e salsinha.",
          "s": 60
        }
      ],
      "en": [
        {
          "t": "Simmer desalted cod 8 min, drain, and flake into bite-sized pieces.",
          "s": 480
        },
        {
          "t": "Crisp matchstick potatoes in airfryer 12 min.",
          "s": 720
        },
        {
          "t": "Slow-sauté sliced onion and garlic in olive oil 6 min until sweet; toss in cod 2 min.",
          "s": 360
        },
        {
          "t": "Fold in potatoes and beaten eggs over lowest heat for 1 min until silky; garnish with olives and parsley.",
          "s": 60
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
      "es": "Espetinho / Churrasco con Vinagrete y Farofa",
      "pt": "Espetinho com Vinagrete e Farofa",
      "en": "Brazilian BBQ Skewers & Vinaigrette"
    },
    "brTip": {
      "es": "Alcatra o patinho sazonado solo con sal gruesa/parrillero, acompañado de vinagrete brasileño.",
      "pt": "Carne temperada só com sal grosso, servida com vinagrete e farofa.",
      "en": "Skewered beef with classic Brazilian tomato-onion vinaigrette and toasted cassava flour."
    },
    "macrosTrad": {
      "kcal": 671,
      "p": 67,
      "c": 41,
      "f": 26
    },
    "macrosFit": {
      "kcal": 594,
      "p": 69,
      "c": 28,
      "f": 22
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 180,
        "fitGrams": 185,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 35,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en cubos de 3 cm y ensarta en brochetas de madera (remojadas en agua antes para que no se quemen); sala justo antes de asar.",
          "s": null
        },
        {
          "t": "Prepara el vinagrete: pica tomate, cebolla y pimentón en cubitos diminutos; mezcla con aceite, vinagre (o limón), sal y perejil.",
          "s": null
        },
        {
          "t": "Asa las brochetas en sartén grill muy caliente o parrilla 3 min por cara dejando el centro jugoso.",
          "s": 360
        },
        {
          "t": "Tuesta farinha de mandioca 3 min en sartén con cebolla picada y sirve junto a la carne y el vinagrete.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em cubos de 3 cm, monte os espetinhos e salgue na hora de grelhar.",
          "s": null
        },
        {
          "t": "Para o vinagrete: pique tomate, cebola e pimentão bem miúdos e tempere com azeite, vinagre, sal e salsinha.",
          "s": null
        },
        {
          "t": "Grelhe os espetinhos em chapa bem quente por 3 min de cada lado.",
          "s": 360
        },
        {
          "t": "Doure a farinha de mandioca com cebola por 3 min e sirva tudo junto.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Cube beef into 3cm pieces, thread onto skewers, and salt right before searing.",
          "s": null
        },
        {
          "t": "Make vinaigrette: finely dice tomato, onion, and bell pepper; dress with olive oil, vinegar, salt, and parsley.",
          "s": null
        },
        {
          "t": "Grill skewers on high heat 3 min per side.",
          "s": 360
        },
        {
          "t": "Toast cassava flour with onion 3 min and serve alongside skewers and vinaigrette.",
          "s": 180
        }
      ]
    },
    "videoQuery": "como hacer Espetinho / Churrasco con Vinagrete y Farofa receta paso a paso"
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
      "kcal": 366,
      "p": 21,
      "c": 33,
      "f": 17
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 40,
        "fitGrams": 35,
        "sub": "Queijo minas frescal",
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 5,
        "fitGrams": 3,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "En un bol pequeño, bate 2 huevos con un tenedor junto con 3 cucharadas de goma de tapioca y 1 pizca de sal hasta disolver grumos.",
          "s": null
        },
        {
          "t": "Calienta sartén antiadherente a fuego bajo-medio con una gota de aceite y vierte la mezcla cubriendo el fondo.",
          "s": null
        },
        {
          "t": "Cocina 2 min hasta que la base cuaje y puedas voltear como panqueque; voltea con espátula.",
          "s": 120
        },
        {
          "t": "Pon queso minas, tomate picado y orégano en una mitad, dobla, cocina 1 min para fundir y sirve.",
          "s": 60
        }
      ],
      "pt": [
        {
          "t": "Bata 2 ovos com um garfo junto com 3 colheres de goma de tapioca e sal até ficar liso.",
          "s": null
        },
        {
          "t": "Despeje na frigideira antiaderente untada em fogo baixo-médio.",
          "s": null
        },
        {
          "t": "Doure por 2 min até firmar, vire com espátula.",
          "s": 120
        },
        {
          "t": "Recheie com queijo minas, tomate e orégano, dobre ao meio e aqueça 1 min.",
          "s": 60
        }
      ],
      "en": [
        {
          "t": "Whisk 2 eggs with 3 tbsp tapioca starch and a pinch of salt until smooth.",
          "s": null
        },
        {
          "t": "Pour into a lightly oiled non-stick skillet over medium-low heat.",
          "s": null
        },
        {
          "t": "Cook 2 min until set, then flip carefully.",
          "s": 120
        },
        {
          "t": "Fill half with Minas cheese, diced tomato, and oregano; fold and heat 1 min.",
          "s": 60
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
      "kcal": 538,
      "p": 68,
      "c": 35,
      "f": 13
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 175,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 90,
        "sub": "Batata-doce",
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
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 60,
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
          "t": "Corta la carne en trozos grandes (4–5 cm) y sazona con sal, pimienta y ajo.",
          "s": null
        },
        {
          "t": "Calienta la olla a presión destapada y dora bien la carne 6 min por todos lados (esto da el color oscuro al caldo sin colorantes).",
          "s": 360
        },
        {
          "t": "Agrega cebolla, tomate picado y 1 taza de agua caliente raspando el fondo. Tapa y cocina 25 min desde que toma presión.",
          "s": 1500
        },
        {
          "t": "Libera la presión con cuidado, añade las papas y zanahorias en trozos grandes y cocina 8 min más sin presión (destapada o semitapada) hasta que las verduras estén suaves.",
          "s": 480
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em pedaços grandes e tempere com alho, sal e pimenta.",
          "s": null
        },
        {
          "t": "Sele bem a carne na panela de pressão aberta por 6 min até dourar todos os lados.",
          "s": 360
        },
        {
          "t": "Junte cebola, tomate e 1 xícara de água quente; tampe e cozinhe por 25 min na pressão.",
          "s": 1500
        },
        {
          "t": "Tire a pressão, adicione batata e cenoura em pedaços e cozinhe mais 8 min até amaciarem.",
          "s": 480
        }
      ],
      "en": [
        {
          "t": "Cut beef into large 5cm chunks and season with garlic, salt, and pepper.",
          "s": null
        },
        {
          "t": "Sear well in open pressure cooker for 6 min to develop deep browning.",
          "s": 360
        },
        {
          "t": "Add onion, tomato, and 1 cup hot water; pressure-cook 25 min.",
          "s": 1500
        },
        {
          "t": "Release pressure, add potato and carrot chunks, and simmer 8 min until tender.",
          "s": 480
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
      "kcal": 538,
      "p": 51,
      "c": 41,
      "f": 18
    },
    "ingredients": [
      {
        "id": "costelinha",
        "grams": 190,
        "fitGrams": 0,
        "sub": "Lombo suíno magro",
        "fitId": null
      },
      {
        "id": "lombo",
        "grams": 0,
        "fitGrams": 175,
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
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Mezcla jugo de 1 limón, 4 dientes de ajo machacados, sal, pimienta negra y orégano/romero; unta bien la carne y deja marinar 20 min.",
          "s": 1200
        },
        {
          "t": "Coloca en bandeja cubierta con papel aluminio y hornea a 200°C durante 25 min para que quede jugosa.",
          "s": 1500
        },
        {
          "t": "Retira el papel aluminio, sube a 220°C (o pasa a airfryer) 10 min más para dorar y caramelizar la superficie.",
          "s": 600
        },
        {
          "t": "Sirve con mandioca cocida y dorada y rodajas de limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture suco de 1 limão, alho amassado, sal, pimenta e alecrim; deixe marinando 20 min.",
          "s": 1200
        },
        {
          "t": "Asse coberta com papel alumínio a 200°C por 25 min.",
          "s": 1500
        },
        {
          "t": "Retire o alumínio e asse mais 10 min em fogo alto para dourar bem.",
          "s": 600
        },
        {
          "t": "Sirva com mandioca cozida e limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Marinate pork with lime juice, crushed garlic, salt, pepper, and rosemary for 20 min.",
          "s": 1200
        },
        {
          "t": "Roast covered in foil at 200°C for 25 min.",
          "s": 1500
        },
        {
          "t": "Uncover and roast 10 more min at high heat until browned.",
          "s": 600
        },
        {
          "t": "Serve with boiled cassava and lime wedges.",
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
      "kcal": 568,
      "p": 53,
      "c": 58,
      "f": 13
    },
    "macrosFit": {
      "kcal": 576,
      "p": 58,
      "c": 52,
      "f": 14
    },
    "ingredients": [
      {
        "id": "mandioca",
        "grams": 170,
        "fitGrams": 150,
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
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 30,
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
          "t": "Cuece la mandioca hasta ablandar, escúrrela muy bien (cuanto más seca, mejor se moldea) y aplástala con sal y yema de huevo hasta formar una masa firme.",
          "s": 900
        },
        {
          "t": "Sofríe la carne molida con cebolla, ajo, tomate y cheiro-verde hasta que el relleno quede seco y sabroso; deja entibiar.",
          "s": 300
        },
        {
          "t": "Toma una porción de masa en la palma, aplana, pon 1 cucharada de relleno al centro y cierra dando forma ovalada.",
          "s": null
        },
        {
          "t": "Pincela con un poco de aceite y cocina en airfryer a 200°C por 15 min girando a mitad de tiempo hasta dorar.",
          "s": 900
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a mandioca, escorra muito bem e amasse ainda quente com sal até formar massa lisa.",
          "s": 900
        },
        {
          "t": "Refogue a carne moída com cebola, alho e tomate até ficar bem sequinha; deixe amornar.",
          "s": 300
        },
        {
          "t": "Abra porções da massa na mão, recheie com a carne e modele os bolinhos.",
          "s": null
        },
        {
          "t": "Pincele um fio de azeite e leve à airfryer a 200°C por 15 min até dourar.",
          "s": 900
        }
      ],
      "en": [
        {
          "t": "Boil cassava until tender, drain thoroughly, and mash into a firm dough.",
          "s": 900
        },
        {
          "t": "Cook ground beef with onion, garlic, and tomato until dry; cool slightly.",
          "s": 300
        },
        {
          "t": "Flatten cassava dough in palm, spoon beef inside, and seal into oval patties.",
          "s": null
        },
        {
          "t": "Brush lightly with oil and air-fry at 200°C for 15 min until crisp and golden.",
          "s": 900
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
      "kcal": 642,
      "p": 64,
      "c": 52,
      "f": 19
    },
    "macrosFit": {
      "kcal": 555,
      "p": 64,
      "c": 43,
      "f": 13
    },
    "ingredients": [
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 100,
        "sub": "Arroz Integral",
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
        "id": "requeijao",
        "grams": 45,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": "ricota"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Precalienta el horno a 200°C.",
          "s": null
        },
        {
          "t": "En un bol grande, mezcla el arroz ya cocido con el pollo desmenuzado sazonado, zanahoria rallada, maíz verde y tomate picado.",
          "s": null
        },
        {
          "t": "Añade el requeijão y 3 cucharadas de leche o salsa de tomate para darle humedad y cremosidad.",
          "s": null
        },
        {
          "t": "Pasa a una fuente, cubre con queso rallado y hornea 15 min hasta burbujear y dorar la superficie.",
          "s": 900
        }
      ],
      "pt": [
        {
          "t": "Preaqueça o forno a 200°C.",
          "s": null
        },
        {
          "t": "Misture o arroz cozido com frango desfiado temperado, cenoura ralada, milho e tomate.",
          "s": null
        },
        {
          "t": "Incorpore o requeijão e um pouco de leite ou molho de tomate para ficar bem úmido.",
          "s": null
        },
        {
          "t": "Transfira para um refratário, cubra com queijo e asse por 15 min até gratinar.",
          "s": 900
        }
      ],
      "en": [
        {
          "t": "Preheat oven to 200°C.",
          "s": null
        },
        {
          "t": "Combine cooked rice with shredded chicken, grated carrot, corn, and diced tomato.",
          "s": null
        },
        {
          "t": "Stir in requeijão and a splash of milk or tomato sauce until creamy.",
          "s": null
        },
        {
          "t": "Transfer to baking dish, top with cheese, and bake 15 min until golden.",
          "s": 900
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
      "kcal": 544,
      "p": 58,
      "c": 29,
      "f": 22
    },
    "ingredients": [
      {
        "id": "carne_seca",
        "grams": 130,
        "fitGrams": 150,
        "sub": "Patinho desfiado",
        "fitId": null
      },
      {
        "id": "abobora",
        "grams": 180,
        "fitGrams": 180,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
        "fitGrams": 30,
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
          "t": "Corta la abóbora cabotiá en cubos medianos (su cáscara es comestible al cocinarse bien) y cuécela al vapor o en agua 12 min hasta que esté tierna.",
          "s": 720
        },
        {
          "t": "Sofríe cebolla y ajo 3 min, agrega la carne seca desalada y desmenuzada y saltea 4 min.",
          "s": 240
        },
        {
          "t": "Incorpora los cubos de abóbora suavemente (aplastando solo unos pocos para dar cremosidad) y añade cucharadas de requeijão.",
          "s": 120
        },
        {
          "t": "Termina con cheiro-verde picado y sirve caliente.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte a abóbora cabotiá em cubos e cozinhe no vapor ou água por 12 min até ficar macia.",
          "s": 720
        },
        {
          "t": "Refogue cebola e alho, adicione a carne seca dessalgada e desfiada por 4 min.",
          "s": 240
        },
        {
          "t": "Misture a abóbora delicadamente e adicione colheradas de requeijão.",
          "s": 120
        },
        {
          "t": "Finalize com cheiro-verde fresco e sirva quente.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cube kabocha squash and steam or boil 12 min until fork-tender.",
          "s": 720
        },
        {
          "t": "Sauté onion, garlic, and shredded cured beef for 4 min.",
          "s": 240
        },
        {
          "t": "Gently fold in squash and dollops of requeijão.",
          "s": 120
        },
        {
          "t": "Garnish with fresh herbs and serve hot.",
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
      "kcal": 442,
      "p": 44,
      "c": 54,
      "f": 7
    },
    "macrosFit": {
      "kcal": 449,
      "p": 47,
      "c": 53,
      "f": 7
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 190,
        "sub": null,
        "fitId": null
      },
      {
        "id": "aveia",
        "grams": 35,
        "fitGrams": 35,
        "sub": "Fubá / Farinha de rosca",
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
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "brocolis",
        "grams": 80,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Seca los filetes de tilapia y sazona con jugo de limón, ajo en polvo/machacado, sal y pimienta 10 min.",
          "s": 600
        },
        {
          "t": "Mezcla harina de avena (o fubá de maíz) con orégano y pasa cada filete presionando para que adhiera.",
          "s": null
        },
        {
          "t": "Rocía un hilo de aceite y cocina en airfryer a 200°C durante 12–14 min hasta quedar dorado y crocante (o 3 min por lado en sartén).",
          "s": 780
        },
        {
          "t": "Sirve con brócoli al vapor y puré de batata-doce.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Seque os filés de tilápia e tempere com limão, alho, sal e pimenta por 10 min.",
          "s": 600
        },
        {
          "t": "Passe na farinha de aveia ou fubá temperado com orégano.",
          "s": null
        },
        {
          "t": "Pincele um fio de azeite e leve à airfryer a 200°C por 12–14 min até dourar.",
          "s": 780
        },
        {
          "t": "Sirva com brócolis no vapor e batata-doce.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Pat tilapia fillets dry and season with lime, garlic, salt, and pepper 10 min.",
          "s": 600
        },
        {
          "t": "Press fillets into oat flour or cornmeal mixed with oregano.",
          "s": null
        },
        {
          "t": "Lightly mist with oil and air-fry at 200°C for 12–14 min until crisp.",
          "s": 780
        },
        {
          "t": "Serve with steamed broccoli and sweet potato.",
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
      "kcal": 711,
      "p": 66,
      "c": 42,
      "f": 30
    },
    "macrosFit": {
      "kcal": 580,
      "p": 59,
      "c": 40,
      "f": 19
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 140,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 70,
        "fitGrams": 0,
        "sub": "Tapioca / Rap10 integral",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 50,
        "fitGrams": 35,
        "sub": "Muçarela / Queijo prato",
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
        "id": "azeite",
        "grams": 8,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el bife de carne magra en tiras finas y séllalas en sartén caliente 2 min por lado con sal y pimienta.",
          "s": 240
        },
        {
          "t": "Funde las láminas de queso en una sartén antiadherente con 1 cucharada de agua tapado 1 min para lograr el punto elástico clásico.",
          "s": 60
        },
        {
          "t": "Abre el pão francês (o base de tapioca/Rap10 en modo fit), acomoda la carne, rodajas de tomate con orégano y el queso derretido encima.",
          "s": null
        },
        {
          "t": "Prensa en tostadora o sartén 1 min hasta quedar crocante por fuera y sirve caliente.",
          "s": 60
        }
      ],
      "pt": [
        {
          "t": "Sele fatias finas de patinho/rosbife na frigideira quente por 2 min com sal e pimenta.",
          "s": 240
        },
        {
          "t": "Derreta o queijo na frigideira com 1 colher de água tampado por 1 min.",
          "s": 60
        },
        {
          "t": "Abra o pão francês (ou tapioca no modo fit), coloque a carne, rodelas de tomate com orégano e o queijo derretido.",
          "s": null
        },
        {
          "t": "Toste na frigideira por 1 min para ficar crocante e sirva quente.",
          "s": 60
        }
      ],
      "en": [
        {
          "t": "Sear thin beef strips in a hot skillet 2 min per side with salt and pepper.",
          "s": 240
        },
        {
          "t": "Melt cheese slices in a covered skillet with a drop of water for 1 min.",
          "s": 60
        },
        {
          "t": "Fill crusty bread (or tapioca wrap) with beef, sliced tomato, oregano, and melted cheese.",
          "s": null
        },
        {
          "t": "Toast 1 min until crisp outside and serve hot.",
          "s": 60
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
      "kcal": 764,
      "p": 76,
      "c": 45,
      "f": 30
    },
    "macrosFit": {
      "kcal": 729,
      "p": 76,
      "c": 45,
      "f": 26
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 140,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "aveia",
        "grams": 50,
        "fitGrams": 50,
        "sub": "Farinha de trigo ou aveia",
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 100,
        "fitGrams": 100,
        "sub": "Leite desnatado",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 120,
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
          "t": "Licúa 1 huevo, 1/2 taza de leche, 3 cucharadas de harina/avena y pizca de sal hasta obtener masa líquida.",
          "s": null
        },
        {
          "t": "En sartén antiadherente a fuego medio, haz discos finos cocinando 1 min por lado; apila en un plato.",
          "s": 240
        },
        {
          "t": "Sofríe la carne molida con cebolla, ajo y mitad del tomate picado hasta que quede jugosa.",
          "s": 300
        },
        {
          "t": "Rellena cada disco, enrolla, cubre con el resto de salsa de tomate y queso; gratina 6 min.",
          "s": 360
        }
      ],
      "pt": [
        {
          "t": "Bata no liquidificador ovo, leite, farinha de aveia/trigo e sal até ficar homogêneo.",
          "s": null
        },
        {
          "t": "Faça discos finos na frigideira antiaderente por 1 min de cada lado.",
          "s": 240
        },
        {
          "t": "Refogue a carne moída com cebola, alho e metade do tomate.",
          "s": 300
        },
        {
          "t": "Recheie os discos, enrole, cubra com molho de tomate e queijo; gratine por 6 min.",
          "s": 360
        }
      ],
      "en": [
        {
          "t": "Blend egg, milk, flour/oats, and salt into a thin batter.",
          "s": null
        },
        {
          "t": "Cook thin crepes in a non-stick skillet 1 min per side.",
          "s": 240
        },
        {
          "t": "Sauté ground beef with onion, garlic, and half the tomato.",
          "s": 300
        },
        {
          "t": "Roll beef inside crepes, top with tomato sauce and cheese, and bake 6 min.",
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
      "kcal": 692,
      "p": 60,
      "c": 63,
      "f": 22
    },
    "macrosFit": {
      "kcal": 657,
      "p": 63,
      "c": 49,
      "f": 23
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 150,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 40,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "lombo",
        "grams": 150,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "couve",
        "grams": 60,
        "fitGrams": 80,
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
          "t": "Licúa el feijão carioca cocido con su caldo hasta obtener un puré líquido.",
          "s": null
        },
        {
          "t": "Sofríe ajo machacado y cebolla en olla; vierte el frijol licuado y lleva a hervor.",
          "s": 180
        },
        {
          "t": "Agrega farinha de mandioca poco a poco batiendo con cuchara para que no haga grumos, cocina 3 min hasta consistencia de puré suave.",
          "s": 180
        },
        {
          "t": "Sirve caliente con lomo a la plancha, couve salteada y huevo duro picado encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Bata o feijão cozido com o caldo no liquidificador até ficar liso.",
          "s": null
        },
        {
          "t": "Refogue alho e cebola na panela e despeje o feijão batido até ferver.",
          "s": 180
        },
        {
          "t": "Vá jogando farinha de mandioca aos poucos mexendo sempre por 3 min até engrossar.",
          "s": 180
        },
        {
          "t": "Sirva com lombo grelhado, couve refogada e ovo cozido por cima.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Blend cooked beans with broth until smooth.",
          "s": null
        },
        {
          "t": "Sauté garlic and onion, pour in blended beans, and bring to a simmer.",
          "s": 180
        },
        {
          "t": "Whisk in cassava flour gradually for 3 min until thick and creamy.",
          "s": 180
        },
        {
          "t": "Serve with seared pork loin, sautéed collards, and sliced boiled egg.",
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
      "kcal": 460,
      "p": 49,
      "c": 44,
      "f": 10
    },
    "macrosFit": {
      "kcal": 445,
      "p": 51,
      "c": 39,
      "f": 10
    },
    "ingredients": [
      {
        "id": "atum",
        "grams": 140,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cuscuz",
        "grams": 100,
        "fitGrams": 90,
        "sub": "Farinha de milho amarela",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 100,
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
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 20,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sofríe cebolla, ajo y tomate picado con salsa de tomate 4 min; agrega 1 taza de agua/caldo, maíz verde y atún desmenuzado.",
          "s": 240
        },
        {
          "t": "Cuando hierva, baja el fuego y agrega la harina de maíz (flocão/farinha de milho) en lluvia mientras mezclas 4 min hasta despegar de la olla.",
          "s": 240
        },
        {
          "t": "Decora el fondo de un molde o taza con rodajas de huevo duro, tomate y aceitunas; rellena presionando suavemente.",
          "s": null
        },
        {
          "t": "Deja reposar 5 min para que tome forma y desmolda tibio.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola, alho e tomate por 4 min; junte água, milho e atum.",
          "s": 240
        },
        {
          "t": "Quando ferver, abaixe o fogo e adicione a farinha de milho aos poucos mexendo 4 min até soltar da panela.",
          "s": 240
        },
        {
          "t": "Forre uma tigela com rodelas de ovo cozido, tomate e azeitona e aperte a massa dentro.",
          "s": null
        },
        {
          "t": "Aguarde 5 min e desenforme morno.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Sauté onion, garlic, and tomato 4 min; add water, corn, and tuna.",
          "s": 240
        },
        {
          "t": "At a boil, reduce heat and stir in cornmeal 4 min until it pulls from the pot.",
          "s": 240
        },
        {
          "t": "Line a bowl with boiled egg slices, tomato, and olives; pack mixture inside.",
          "s": null
        },
        {
          "t": "Rest 5 min and unmold warm.",
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
      "kcal": 579,
      "p": 66,
      "c": 34,
      "f": 19
    },
    "macrosFit": {
      "kcal": 527,
      "p": 66,
      "c": 30,
      "f": 15
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 155,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cuscuz",
        "grams": 85,
        "fitGrams": 70,
        "sub": "Fubá mimoso",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 110,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Para la salsa: dora la carne molida con ajo y cebolla 5 min, agrega tomate triturado y cocina 12 min hasta espesar.",
          "s": 720
        },
        {
          "t": "Para el angu/polenta: disuelve el fubá en agua fría primero (¡truco para que nunca haga grumos!).",
          "s": null
        },
        {
          "t": "Lleva a fuego medio-bajo removiendo constantemente 12 min hasta que quede cremosa y sin sabor a maíz crudo; mezcla un poco de queso.",
          "s": 720
        },
        {
          "t": "Sirve la polenta caliente en plato hondo con la salsa de carne encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Doure o patinho moído com alho e cebola por 5 min; junte tomate e cozinhe 12 min.",
          "s": 720
        },
        {
          "t": "Dissolva o fubá em água fria antes de ir ao fogo (para não empelotar!).",
          "s": null
        },
        {
          "t": "Cozinhe em fogo baixo mexendo sempre por 12 min até ficar cremoso; misture queijo.",
          "s": 720
        },
        {
          "t": "Sirva a polenta mole no prato fundo com o molho de carne por cima.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Brown ground beef with garlic and onion 5 min; simmer with crushed tomato 12 min.",
          "s": 720
        },
        {
          "t": "Whisk cornmeal (fubá) into cold water first to prevent lumps.",
          "s": null
        },
        {
          "t": "Cook over low heat stirring 12 min until silky; fold in cheese.",
          "s": 720
        },
        {
          "t": "Ladle creamy polenta into bowls and top with beef sauce.",
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
      "kcal": 389,
      "p": 43,
      "c": 32,
      "f": 12
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 190,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 100,
        "sub": "Batata-doce",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 100,
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
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 8,
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
          "t": "Corta las papas en rodajas finas (3 mm) y precuécelas 5 min en agua para que se terminen de hacer junto con el pescado.",
          "s": 300
        },
        {
          "t": "Sazona la tilapia con limón, ajo, sal y pimienta.",
          "s": null
        },
        {
          "t": "En una fuente aceitada, coloca capas de papa, cebolla, pimentón y tomate; pon el pescado encima y rocía aceite de oliva.",
          "s": null
        },
        {
          "t": "Hornea a 200°C durante 18 min hasta que el pescado esté blanco y las verduras tiernas.",
          "s": 1080
        }
      ],
      "pt": [
        {
          "t": "Corte as batatas em rodelas finas e pré-cozinhe por 5 min.",
          "s": 300
        },
        {
          "t": "Tempere o peixe com limão, alho, sal e pimenta.",
          "s": null
        },
        {
          "t": "Monte camadas de batata, cebola, pimentão e tomate na assadeira, coloque o peixe por cima e regue com azeite.",
          "s": null
        },
        {
          "t": "Asse a 200°C por 18 min.",
          "s": 1080
        }
      ],
      "en": [
        {
          "t": "Thinly slice potatoes and parboil 5 min.",
          "s": 300
        },
        {
          "t": "Season fish fillets with lime, garlic, salt, and pepper.",
          "s": null
        },
        {
          "t": "Layer potato, onion, pepper, and tomato in oiled dish; lay fish on top and drizzle olive oil.",
          "s": null
        },
        {
          "t": "Bake at 200°C for 18 min until fish flakes easily.",
          "s": 1080
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
      "kcal": 645,
      "p": 23,
      "c": 83,
      "f": 26
    },
    "macrosFit": {
      "kcal": 544,
      "p": 23,
      "c": 63,
      "f": 23
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 150,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "farinha_mandioca",
        "grams": 50,
        "fitGrams": 35,
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
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 8,
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
          "t": "Pela la banana-da-terra, córtala en cubos y dórala en sartén con aceite 4 min hasta caramelizar; reserva.",
          "s": 240
        },
        {
          "t": "En la misma sartén, sofríe cebolla picada y ajo 4 min hasta que doren.",
          "s": 240
        },
        {
          "t": "Baja el fuego, rompe los huevos y revuélvelos suavemente hasta formar trozos tiernos.",
          "s": 120
        },
        {
          "t": "Agrega la farinha de mandioca y tuesta 3 min sin dejar de mover hasta quedar crocante; mezcla la banana y cheiro-verde.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Doure a banana-da-terra em cubos na frigideira por 4 min e reserve.",
          "s": 240
        },
        {
          "t": "Refogue cebola e alho por 4 min até ficarem dourados.",
          "s": 240
        },
        {
          "t": "Junte os ovos e mexa em fogo baixo até cozinhar.",
          "s": 120
        },
        {
          "t": "Adicione a farinha de mandioca e torre por 3 min mexendo sempre; misture a banana e cheiro-verde.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Dice plantain and pan-sear 4 min until golden; set aside.",
          "s": 240
        },
        {
          "t": "Sauté onion and garlic 4 min until golden brown.",
          "s": 240
        },
        {
          "t": "Scramble eggs gently in the pan.",
          "s": 120
        },
        {
          "t": "Stir in cassava flour and toast 3 min until crisp; fold in plantain and fresh herbs.",
          "s": 180
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
      "kcal": 418,
      "p": 44,
      "c": 30,
      "f": 14
    },
    "macrosFit": {
      "kcal": 396,
      "p": 47,
      "c": 30,
      "f": 10
    },
    "ingredients": [
      {
        "id": "atum",
        "grams": 140,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 130,
        "fitGrams": 130,
        "sub": "Feijão fradinho",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 8,
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
          "t": "Cuece el feijão fradinho (o carioca) al dente 15 min sin que se rompan los granos; escurre y enfría bajo agua fría.",
          "s": 900
        },
        {
          "t": "Pica tomate, cebolla morada y pimentón en cubitos pequeños.",
          "s": null
        },
        {
          "t": "Escurre bien el atún y mézclalo con el frijol frío y las verduras picadas.",
          "s": null
        },
        {
          "t": "Aliña con aceite de oliva, jugo de limón, sal y cilantro/perejil abundante. Ideal servir frío.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o feijão fradinho al dente (grãos inteiros), escorra e esfrie em água corrente.",
          "s": 900
        },
        {
          "t": "Pique tomate, cebola roxa e pimentão em cubinhos.",
          "s": null
        },
        {
          "t": "Escorra o atum e misture com o feijão frio e os legumes.",
          "s": null
        },
        {
          "t": "Tempere com azeite, limão, sal e cheiro-verde. Sirva gelado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil beans until tender yet firm, drain, and rinse under cold water.",
          "s": 900
        },
        {
          "t": "Finely dice tomato, red onion, and bell pepper.",
          "s": null
        },
        {
          "t": "Fold drained tuna into cooled beans and veggies.",
          "s": null
        },
        {
          "t": "Dress with olive oil, lime juice, salt, and fresh herbs; serve chilled.",
          "s": null
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
      "kcal": 559,
      "p": 49,
      "c": 45,
      "f": 20
    },
    "macrosFit": {
      "kcal": 533,
      "p": 47,
      "c": 49,
      "f": 16
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 150,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 70,
        "fitGrams": 0,
        "sub": "Goma de tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
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
          "t": "Corta el lomo de cerdo en láminas muy finas. Licúa 2 cucharadas de pasta de tomate, ajo, páprica defumada (y colorau si tienes), orégano, comino y jugo de naranja o piña.",
          "s": null
        },
        {
          "t": "Unta la carne con esa marinada roja y deja reposar 15 min para que tome color y sabor.",
          "s": 900
        },
        {
          "t": "Calienta sartén sin mucho aceite y sella el cerdo a fuego alto 5 min hasta que los bordes queden tostaditos; agrega cubitos de piña el último minuto.",
          "s": 300
        },
        {
          "t": "Calienta las tortillas (o discos de tapioca) 30 seg por lado, rellena con la carne y corona con cebolla cruda picada, cilantro y limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Fatie o lombo bem fino. Bata extrato de tomate, alho, páprica defumada, colorau, cominho e suco de laranja/abacaxi.",
          "s": null
        },
        {
          "t": "Marine a carne nessa pasta vermelha por 15 min.",
          "s": 900
        },
        {
          "t": "Sele em frigideira bem quente por 5 min até dourar as bordas; junte cubinhos de abacaxi no último minuto.",
          "s": 300
        },
        {
          "t": "Aqueça as tortilhas/Rap10, recheie com a carne e finalize com cebola crua, coentro e limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Slice pork thinly. Blend tomato paste, garlic, smoked paprika, cumin, oregano, and orange/pineapple juice.",
          "s": null
        },
        {
          "t": "Marinate pork in red paste for 15 min.",
          "s": 900
        },
        {
          "t": "Sear in a hot skillet 5 min until charred at edges; toss in diced pineapple for the last minute.",
          "s": 300
        },
        {
          "t": "Warm tortillas, fill with pork, and top with diced raw onion, cilantro, and lime.",
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
      "kcal": 628,
      "p": 62,
      "c": 48,
      "f": 20
    },
    "macrosFit": {
      "kcal": 523,
      "p": 59,
      "c": 47,
      "f": 10
    },
    "ingredients": [
      {
        "id": "rap10",
        "grams": 75,
        "fitGrams": 0,
        "sub": "Rap10 integral assado",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 140,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
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
        "id": "requeijao",
        "grams": 25,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las tortillas o Rap10 en triángulos y hornéalos (o pon en airfryer 6 min a 180°C) hasta que queden bien crocantes como nachos.",
          "s": 360
        },
        {
          "t": "Hierve tomates, cebolla, ajo y chile al gusto 8 min; licúalos con cilantro y sal para formar la salsa.",
          "s": 480
        },
        {
          "t": "Vierte la salsa en sartén y hierve 4 min hasta espesar ligeramente.",
          "s": 240
        },
        {
          "t": "Apaga el fuego, mete los triángulos crocantes y revuelve rápido 20 seg (para que se impregnen sin ablandarse del todo). Sirve con pollo desmenuzado, queijo minas y requeijão.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte tortilhas/Rap10 em triângulos e asse ou leve à airfryer 6 min a 180°C até ficarem crocantes.",
          "s": 360
        },
        {
          "t": "Ferva tomates, cebola, alho e pimenta por 8 min; bata no liquidificador com coentro e sal.",
          "s": 480
        },
        {
          "t": "Aqueça o molho na frigideira por 4 min até encorpar.",
          "s": 240
        },
        {
          "t": "Desligue o fogo, envolva os triângulos crocantes no molho rápido e sirva com frango desfiado, queijo minas e requeijão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut tortillas into triangles and bake/air-fry 6 min until crisp.",
          "s": 360
        },
        {
          "t": "Boil tomatoes, onion, garlic, and chili 8 min; blend with cilantro and salt.",
          "s": 480
        },
        {
          "t": "Simmer sauce in skillet 4 min until slightly thickened.",
          "s": 240
        },
        {
          "t": "Turn off heat, toss chips quickly to coat while keeping crunch, and top with chicken, Minas cheese, and cream.",
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
      "kcal": 661,
      "p": 66,
      "c": 49,
      "f": 21
    },
    "macrosFit": {
      "kcal": 547,
      "p": 61,
      "c": 51,
      "f": 10
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
        "id": "rap10",
        "grams": 75,
        "fitGrams": 0,
        "sub": "Rap10 / Tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 65,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 130,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 45,
        "fitGrams": 30,
        "sub": null,
        "fitId": "ricota"
      },
      {
        "id": "requeijao",
        "grams": 25,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga en agua con sal 15 min y desmenúzala con dos tenedores.",
          "s": 900
        },
        {
          "t": "Licúa tomate cocido con ajo, cebolla, páprica defumada, comino y pizca de chile; cocina la salsa en sartén 6 min.",
          "s": 360
        },
        {
          "t": "Pasa ligeramente las tortillas tibias por la salsa, rellena con pollo desmenuzado y enróllalas como taquitos en una fuente.",
          "s": null
        },
        {
          "t": "Baña los rollitos con el resto de la salsa roja, cubre con queso rallado y gratina 8 min en horno; termina con crema/requeijão y cebolla.",
          "s": 480
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito de frango por 15 min e desfie.",
          "s": 900
        },
        {
          "t": "Bata tomate cozido com alho, cebola, páprica defumada e cominho; apure o molho por 6 min.",
          "s": 360
        },
        {
          "t": "Passe tortilhas mornas rapidamente no molho, recheie com frango e enrole numa travessa.",
          "s": null
        },
        {
          "t": "Cubra com o restante do molho e queijo; gratine 8 min e finalize com requeijão e cebola.",
          "s": 480
        }
      ],
      "en": [
        {
          "t": "Poach chicken breast 15 min and shred.",
          "s": 900
        },
        {
          "t": "Blend boiled tomato, garlic, onion, smoked paprika, and cumin; simmer sauce 6 min.",
          "s": 360
        },
        {
          "t": "Dip warm tortillas lightly in sauce, fill with chicken, and roll seam-side down in a baking dish.",
          "s": null
        },
        {
          "t": "Ladle remaining sauce and cheese on top; bake 8 min until bubbly.",
          "s": 480
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
      "kcal": 499,
      "p": 49,
      "c": 41,
      "f": 17
    },
    "macrosFit": {
      "kcal": 511,
      "p": 53,
      "c": 37,
      "f": 18
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 150,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 130,
        "fitGrams": 110,
        "sub": "Canjica branca cozida",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
        "grams": 20,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Remoja el maíz para canjica branca 4 horas y cuécelo en olla a presión 35 min hasta que los granos revienten como flor.",
          "s": 1800
        },
        {
          "t": "Cuece el lomo de cerdo en trozos en agua con media cebolla, ajo y laurel 25 min hasta que esté tierno; deshebra en trozos grandes y guarda el caldo.",
          "s": 1500
        },
        {
          "t": "Licúa tomate con ajo, páprica defumada y chile suave; sofríe esa salsa 5 min y agrégala al caldo con el maíz y la carne.",
          "s": 300
        },
        {
          "t": "Hierve todo junto 15 min con orégano seco molido entre las manos. Sirve en plato hondo con repollo/lechuga picada fina, cebolla, rábano y limón.",
          "s": 900
        }
      ],
      "pt": [
        {
          "t": "Deixe o milho de canjica branca de molho e cozinhe na pressão por 35 min até os grãos abrirem.",
          "s": 1800
        },
        {
          "t": "Cozinhe o lombo com cebola, alho e louro por 25 min, desfie grosso e reserve o caldo.",
          "s": 1500
        },
        {
          "t": "Bata tomate com alho e páprica defumada; refogue 5 min e junte ao caldo com milho e carne.",
          "s": 300
        },
        {
          "t": "Ferva tudo por 15 min com orégano. Sirva com repolho/alface fatiada, cebola e limão.",
          "s": 900
        }
      ],
      "en": [
        {
          "t": "Soak white hominy (canjica) and pressure-cook 35 min until kernels bloom.",
          "s": 1800
        },
        {
          "t": "Simmer pork with onion, garlic, and bay leaf 25 min; shred coarsely and save broth.",
          "s": 1500
        },
        {
          "t": "Blend tomato, garlic, and smoked paprika; fry 5 min and stir into broth with hominy and pork.",
          "s": 300
        },
        {
          "t": "Simmer 15 min with oregano. Top bowls with shredded cabbage/lettuce, onion, and lime.",
          "s": 900
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
      "es": "En Brasil usa Rap10 (o tapioca) con muçarela rallada o queijo coalho rallado en lugar de queso Oaxaca.",
      "pt": "Use Rap10 ou tapioca com muçarela/queijo coalho no lugar do queijo Oaxaca.",
      "en": "Use Rap10 or tapioca with shredded mozzarella or queijo coalho."
    },
    "macrosTrad": {
      "kcal": 671,
      "p": 64,
      "c": 43,
      "f": 26
    },
    "macrosFit": {
      "kcal": 548,
      "p": 59,
      "c": 43,
      "f": 14
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
        "id": "rap10",
        "grams": 70,
        "fitGrams": 0,
        "sub": "Rap10 / Tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 55,
        "fitGrams": 35,
        "sub": "Muçarela / Queijo minas",
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sofríe la carne molida con cebolla, ajo, comino y pizca de sal 5 min hasta que dore y quede suelta.",
          "s": 300
        },
        {
          "t": "Coloca una tortilla o Rap10 en sartén caliente sin aceite a fuego medio-bajo.",
          "s": null
        },
        {
          "t": "Reparte queso rallado en toda la tortilla y pon la carne caliente solo en una mitad.",
          "s": null
        },
        {
          "t": "Dobla por la mitad, presiona con espátula 1.5 min por lado hasta que quede crocante por fuera y el queso bien derretido. Sirve con pico de gallo (tomate, cebolla, limón).",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Refogue a carne moída com cebola, alho e cominho por 5 min até dourar.",
          "s": 300
        },
        {
          "t": "Coloque o Rap10 ou tortilha em frigideira média sem óleo.",
          "s": null
        },
        {
          "t": "Espalhe queijo ralado por cima e a carne em apenas uma metade.",
          "s": null
        },
        {
          "t": "Dobre ao meio e doure 1.5 min de cada lado até derreter e ficar crocante; sirva com vinagrete.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Brown ground beef with onion, garlic, and cumin for 5 min.",
          "s": 300
        },
        {
          "t": "Warm tortilla in a dry skillet over medium-low heat.",
          "s": null
        },
        {
          "t": "Sprinkle cheese all over and spoon beef onto one half.",
          "s": null
        },
        {
          "t": "Fold over and toast 1.5 min per side until crisp and melty; serve with fresh salsa.",
          "s": 180
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
      "kcal": 554,
      "p": 61,
      "c": 49,
      "f": 12
    },
    "macrosFit": {
      "kcal": 521,
      "p": 61,
      "c": 50,
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
        "id": "pimentao",
        "grams": 90,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 70,
        "fitGrams": 0,
        "sub": "Goma de tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "requeijao",
        "grams": 25,
        "fitGrams": 25,
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
          "t": "Corta la pechuga de pollo, el pimentón y la cebolla en tiras largas y finas (del mismo grosor para que se cocinen igual).",
          "s": null
        },
        {
          "t": "Mezcla el pollo con 1 cdta de comino, 1 cdta de páprica, ajo en polvo, sal y jugo de medio limón.",
          "s": null
        },
        {
          "t": "Calienta sartén bien fuerte; sella primero las tiras de pollo 4 min hasta dorar y retira a un plato.",
          "s": 240
        },
        {
          "t": "En la misma sartén, saltea cebolla y pimentón 3 min para que queden tiernos pero aún crocantes; devuelve el pollo, mezcla 1 min y sirve en tortillas tibias.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Corte o frango, o pimentão e a cebola em tiras finas e compridas.",
          "s": null
        },
        {
          "t": "Tempere o frango com cominho, páprica, alho, sal e suco de meio limão.",
          "s": null
        },
        {
          "t": "Em frigideira bem quente, sele as tiras de frango por 4 min e reserve.",
          "s": 240
        },
        {
          "t": "Salteie cebola e pimentão por 3 min mantendo crocantes; volte o frango por 1 min e sirva nas tortilhas.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Slice chicken, bell pepper, and onion into uniform thin strips.",
          "s": null
        },
        {
          "t": "Toss chicken with cumin, paprika, garlic, salt, and lime juice.",
          "s": null
        },
        {
          "t": "Sear chicken in a hot skillet 4 min until browned; remove.",
          "s": 240
        },
        {
          "t": "Stir-fry onion and peppers 3 min until crisp-tender; return chicken 1 min and serve in warm wraps.",
          "s": 180
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
      "es": "Sin chipotle en lata: usa páprica defumada + extrato de tomate + pimenta dedo-de-moça (da el mismo sabor ahumado!).",
      "pt": "Sem chipotle: páprica defumada + tomate + pimenta dedo-de-moça dá o mesmo sabor defumado!",
      "en": "No canned chipotle needed: smoked paprika + tomato + Brazilian chili nails the smoky flavor."
    },
    "macrosTrad": {
      "kcal": 492,
      "p": 59,
      "c": 43,
      "f": 8
    },
    "macrosFit": {
      "kcal": 485,
      "p": 64,
      "c": 36,
      "f": 9
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
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
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
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "requeijao",
        "grams": 25,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga de pollo en agua con laurel y sal 15 min; desmenúzala con tenedores.",
          "s": 900
        },
        {
          "t": "Licúa los tomates maduros con 1 diente de ajo, 1 cdta generosa de páprica defumada, chile al gusto y un chorrito de caldo.",
          "s": null
        },
        {
          "t": "Corta la cebolla en plumas finas y sofríela en sartén 4 min hasta que empiece a transparentar.",
          "s": 240
        },
        {
          "t": "Vierte la salsa roja licuada, hierve 3 min, agrega el pollo desmenuzado y cocina 5 min hasta que quede jugoso y concentrado.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito de frango com louro e sal por 15 min e desfie.",
          "s": 900
        },
        {
          "t": "Bata tomates maduros com alho, páprica defumada, pimenta e um pouco do caldo.",
          "s": null
        },
        {
          "t": "Refogue cebola fatiada fina por 4 min até murchar.",
          "s": 240
        },
        {
          "t": "Despeje o molho batido, ferva 3 min, junte o frango desfiado e apure por 5 min.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Poach chicken breast 15 min and shred finely.",
          "s": 900
        },
        {
          "t": "Blend ripe tomatoes with garlic, smoked paprika, chili, and a splash of broth.",
          "s": null
        },
        {
          "t": "Sauté thinly sliced onion 4 min until softened.",
          "s": 240
        },
        {
          "t": "Pour in red sauce, simmer 3 min, add shredded chicken and cook 5 min until rich.",
          "s": 300
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
      "es": "Con feijão carioca amassado como frijoles refritos, tortilha/Rap10 y queijo minas.",
      "pt": "Use feijão carioca amassado com alho, Rap10/tortilha e queijo minas.",
      "en": "Served with mashed Brazilian carioca beans, tortilla, and Minas cheese."
    },
    "macrosTrad": {
      "kcal": 549,
      "p": 32,
      "c": 57,
      "f": 22
    },
    "macrosFit": {
      "kcal": 449,
      "p": 25,
      "c": 57,
      "f": 13
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 100,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 65,
        "fitGrams": 0,
        "sub": "Tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 30,
        "fitGrams": 25,
        "sub": null,
        "fitId": "ricota"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sofríe cebolla y ajo 2 min; añade tomate picado y cocina 5 min machacando hasta formar una salsa rústica con chile al gusto.",
          "s": 300
        },
        {
          "t": "Aparte, calienta el feijão carioca en ollita y aplástalo con tenedor hasta obtener pasta cremosa.",
          "s": 180
        },
        {
          "t": "Tuesta las tortillas ligeramente en sartén y úntales una capa de frijol.",
          "s": null
        },
        {
          "t": "Fríe los huevos (con yema blanda), colócalos sobre las tortillas, baña con la salsa ranchera caliente y espolvorea queso y cilantro.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola, alho e tomate picado por 5 min amassando até virar molho rústico.",
          "s": 300
        },
        {
          "t": "Aqueça o feijão carioca e amasse com garfo até formar pasta.",
          "s": 180
        },
        {
          "t": "Aqueça as tortilhas na frigideira e espalhe o feijão.",
          "s": null
        },
        {
          "t": "Frite os ovos com gema mole, coloque por cima, regue com o molho quente e salpique queijo.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Sauté onion, garlic, and tomato 5 min, mashing into a chunky salsa.",
          "s": 300
        },
        {
          "t": "Warm carioca beans and mash into a spreadable paste.",
          "s": 180
        },
        {
          "t": "Toast tortillas lightly and spread with beans.",
          "s": null
        },
        {
          "t": "Top with sunny-side-up eggs, warm ranchera sauce, cheese, and cilantro.",
          "s": 180
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
      "kcal": 627,
      "p": 61,
      "c": 52,
      "f": 19
    },
    "macrosFit": {
      "kcal": 614,
      "p": 66,
      "c": 44,
      "f": 19
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
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "feijao_preto",
        "grams": 90,
        "fitGrams": 90,
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
        "fitGrams": 40,
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
          "t": "Saltea la carne molida (o pollo en cubos) con comino, páprica, ajo y sal durante 5 min hasta dorar.",
          "s": 300
        },
        {
          "t": "Mezcla el arroz cocido tibio con jugo de medio limón y cilantro picado.",
          "s": null
        },
        {
          "t": "Prepara pico de gallo fresco mezclando tomate, cebolla morada, cilantro y limón.",
          "s": null
        },
        {
          "t": "Arma el bowl por secciones: arroz al limón, frijoles negros calientes, carne, pico de gallo y láminas de aguacate (abacate).",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Doure o patinho moído com cominho, páprica, alho e sal por 5 min.",
          "s": 300
        },
        {
          "t": "Misture o arroz cozido morno com limão e coentro picado.",
          "s": null
        },
        {
          "t": "Faça vinagrete fresco com tomate, cebola roxa, coentro e limão.",
          "s": null
        },
        {
          "t": "Monte o bowl em seções: arroz, feijão preto, carne, vinagrete e fatias de abacate.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Brown beef with cumin, paprika, garlic, and salt for 5 min.",
          "s": 300
        },
        {
          "t": "Toss warm cooked rice with lime juice and chopped cilantro.",
          "s": null
        },
        {
          "t": "Mix fresh pico de gallo from tomato, red onion, cilantro, and lime.",
          "s": null
        },
        {
          "t": "Assemble bowl with lime rice, black beans, beef, salsa, and sliced avocado.",
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
      "es": "Aguachile Verde de Pescado/Camarón",
      "pt": "Aguachile Verde de Peixe/Camarão",
      "en": "Mexican Green Aguachile"
    },
    "brTip": {
      "es": "Plato frío refrescante: tilápia o camarão crudo/blanqueado marinado al momento en limón, pepino y pimenta verde.",
      "pt": "Prato frio refrescante: peixe ou camarão em molho gelado de limão, pepino e coentro.",
      "en": "Zesty cold seafood dish cured in blended lime, cucumber, cilantro, and chili."
    },
    "macrosTrad": {
      "kcal": 266,
      "p": 35,
      "c": 16,
      "f": 9
    },
    "macrosFit": {
      "kcal": 266,
      "p": 38,
      "c": 15,
      "f": 8
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 160,
        "fitGrams": 175,
        "sub": "Camarão ou tilápia fresca",
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
        "id": "cebola",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 15,
        "fitGrams": 15,
        "sub": "Coentro fresco",
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el pescado fresco en láminas delgadas (si usas camarón, límpialo y ábrelo en mariposa; puedes blanquearlo 30 seg si prefieres no comerlo crudo).",
          "s": null
        },
        {
          "t": "En la licuadora, procesa el jugo de 3 limones con 1 puñado de cilantro, 1/3 de pepino, chile verde sin semillas y sal hasta obtener un líquido verde intenso.",
          "s": null
        },
        {
          "t": "Acomoda el pescado en plato frío junto con medias lunas de pepino y cebolla morada finita.",
          "s": null
        },
        {
          "t": "Vierte la salsa verde helada justo antes de servir (deja reposar solo 5 min) y acompaña con aguacate y tostadas crocantes.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Fatie o peixe bem fino (ou abra o camarão limpo; se preferir, dê um susto de 30s na água fervente).",
          "s": null
        },
        {
          "t": "Bata no liquidificador suco de 3 limões, coentro, pedaço de pepino, pimenta verde e sal.",
          "s": null
        },
        {
          "t": "Disponha o peixe em prato gelado com rodelas finas de pepino e cebola roxa.",
          "s": null
        },
        {
          "t": "Despeje o molho verde gelado na hora de servir (aguarde 5 min) e finalize com abacate.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Thinly slice fresh fish (or butterfly shrimp).",
          "s": null
        },
        {
          "t": "Blend fresh lime juice, cilantro, cucumber piece, green chili, and salt into a bright green liquid.",
          "s": null
        },
        {
          "t": "Arrange fish on a chilled plate with thin cucumber and red onion.",
          "s": null
        },
        {
          "t": "Pour cold green sauce over, wait 5 min, and top with avocado.",
          "s": 300
        }
      ]
    },
    "videoQuery": "como hacer Aguachile Verde de Pescado/Camarón receta paso a paso"
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
      "es": "Caldo especiado de tomate asado servido con pollo, queijo minas, aguacate y tiras crocantes.",
      "pt": "Caldo de tomate assado servido com frango, queijo minas, abacate e tiras crocantes.",
      "en": "Roasted tomato broth topped with chicken, Minas cheese, avocado, and crisp strips."
    },
    "macrosTrad": {
      "kcal": 535,
      "p": 51,
      "c": 39,
      "f": 20
    },
    "macrosFit": {
      "kcal": 465,
      "p": 52,
      "c": 40,
      "f": 10
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 120,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 150,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 50,
        "fitGrams": 0,
        "sub": "Rap10 em tiras assado",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 45,
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
        "id": "abacate",
        "grams": 40,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Asa o dora los tomates cortados a la mitad junto con cebolla y ajo en sartén caliente 6 min hasta que tomen puntos tostados.",
          "s": 360
        },
        {
          "t": "Licúa lo asado con 2 tazas de caldo de pollo, comino y páprica; cuela y hierve en olla 10 min.",
          "s": 600
        },
        {
          "t": "Mientras hierve, corta tiras finas de tortilla y tuéstalas en horno/airfryer 5 min hasta quedar crocantes.",
          "s": 300
        },
        {
          "t": "Sirve el caldo bien caliente en tazón y añade en el centro pollo desmenuzado, cubos de queijo minas, aguacate y las tiras crocantes.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Asse ou toste tomates cortados ao meio com cebola e alho na frigideira por 6 min.",
          "s": 360
        },
        {
          "t": "Bata no liquidificador com caldo de frango, cominho e páprica; ferva na panela por 10 min.",
          "s": 600
        },
        {
          "t": "Corte tiras finas de tortilha/Rap10 e torre na airfryer por 5 min.",
          "s": 300
        },
        {
          "t": "Sirva o caldo bem quente com frango desfiado, queijo minas em cubos, abacate e tiras crocantes.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Char halved tomatoes, onion, and garlic in a hot skillet 6 min.",
          "s": 360
        },
        {
          "t": "Blend with chicken broth, cumin, and paprika; simmer 10 min.",
          "s": 600
        },
        {
          "t": "Bake or air-fry thin tortilla strips 5 min until crisp.",
          "s": 300
        },
        {
          "t": "Ladle hot soup into bowls and top with shredded chicken, Minas cheese, avocado, and crisp strips.",
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
      "kcal": 598,
      "p": 54,
      "c": 45,
      "f": 21
    },
    "macrosFit": {
      "kcal": 552,
      "p": 51,
      "c": 46,
      "f": 18
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 170,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
        "fitGrams": 70,
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
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 65,
        "fitGrams": 0,
        "sub": "Tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa jugo de 1 naranja + jugo de 1 limón, 3 dientes de ajo, 1 cda de colorau/páprica, orégano, comino y sal.",
          "s": null
        },
        {
          "t": "Unta los trozos de lomo o paleta de cerdo con esa pasta naranja-roja y deja marinar 20 min.",
          "s": 1200
        },
        {
          "t": "Cocina en olla a presión 25 min (o olla tapada a fuego bajo 45 min) hasta que la carne se deshebre sola con tenedor.",
          "s": 1500
        },
        {
          "t": "Mientras tanto, encurte cebolla morada en plumas finas con jugo de limón y sal. Sirve la carne deshebrada jugosa en tacos con la cebolla morada.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Bata suco de 1 laranja + 1 limão, alho, colorau/páprica, orégano, cominho e sal.",
          "s": null
        },
        {
          "t": "Marine o lombo ou pernil nessa pasta por 20 min.",
          "s": 1200
        },
        {
          "t": "Cozinhe na pressão por 25 min até desfiar com facilidade.",
          "s": 1500
        },
        {
          "t": "Misture cebola roxa fatiada com limão e sal e sirva sobre a carne desfiada em tacos.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Blend orange juice, lime juice, garlic, colorau/paprika, oregano, cumin, and salt.",
          "s": null
        },
        {
          "t": "Marinate pork chunks in the citrus-annatto paste for 20 min.",
          "s": 1200
        },
        {
          "t": "Pressure-cook 25 min until shreddable with a fork.",
          "s": 1500
        },
        {
          "t": "Pickle sliced red onion in lime and salt; serve over shredded pork in warm tortillas.",
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
      "kcal": 458,
      "p": 22,
      "c": 66,
      "f": 12
    },
    "macrosFit": {
      "kcal": 305,
      "p": 11,
      "c": 59,
      "f": 4
    },
    "ingredients": [
      {
        "id": "pao",
        "grams": 80,
        "fitGrams": 0,
        "sub": "Pão integral",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 110,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 50,
        "fitGrams": 35,
        "sub": "Muçarela / Queijo minas",
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
        "grams": 35,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el pão francês por la mitad a lo largo y tuéstalo ligeramente 2 min en sartén o airfryer para que no se aguade.",
          "s": 120
        },
        {
          "t": "Machaca el feijão carioca/negro caliente con ajo y un poquito de caldo hasta formar pasta untable.",
          "s": null
        },
        {
          "t": "Unta una capa generosa de frijol sobre cada mitad de pan y cubre con láminas de queso.",
          "s": null
        },
        {
          "t": "Lleva al horno/airfryer 5 min a 200°C hasta derretir y dorar; sirve con pico de gallo fresco encima.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Corte o pão francês ao meio e toste por 2 min para ficar firme.",
          "s": 120
        },
        {
          "t": "Amasse feijão carioca ou preto quente com alho até virar pasta.",
          "s": null
        },
        {
          "t": "Espalhe o feijão sobre o pão e cubra com fatias de queijo.",
          "s": null
        },
        {
          "t": "Leve à airfryer ou forno por 5 min até derreter e sirva com vinagrete fresco.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Halve crusty bread rolls lengthwise and toast 2 min.",
          "s": 120
        },
        {
          "t": "Mash warm beans with garlic into a smooth spread.",
          "s": null
        },
        {
          "t": "Spread beans over bread halves and top with cheese slices.",
          "s": null
        },
        {
          "t": "Broil or air-fry 5 min until melted; finish with fresh tomato salsa.",
          "s": 300
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
      "kcal": 647,
      "p": 63,
      "c": 58,
      "f": 17
    },
    "macrosFit": {
      "kcal": 549,
      "p": 60,
      "c": 59,
      "f": 7
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
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 70,
        "fitGrams": 0,
        "sub": "Tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 60,
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
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sofríe cebolla y ajo 3 min; agrega el frijol cocido con su caldo y licúa todo hasta obtener una crema espesa y lisa.",
          "s": 180
        },
        {
          "t": "Regresa la crema de frijol a la olla a fuego muy bajo para que se mantenga caliente (si está muy espesa, añade chorrito de agua).",
          "s": null
        },
        {
          "t": "Rellena tortillas tibias con pollo desmenuzado (o huevo revuelto) y dóblalas en cuatro o en rollos.",
          "s": null
        },
        {
          "t": "Baña completamente con la crema de frijol caliente y decora con queijo minas desmoronado y aros de cebolla.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola e alho por 3 min, junte o feijão com caldo e bata no liquidificador até ficar liso.",
          "s": 180
        },
        {
          "t": "Mantenha o creme de feijão aquecido em fogo bem baixo.",
          "s": null
        },
        {
          "t": "Recheie tortilhas mornas com frango desfiado e dobre.",
          "s": null
        },
        {
          "t": "Cubra com o creme de feijão quente e finalize com queijo minas esfarelado e cebola.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Sauté onion and garlic 3 min; blend with cooked beans and broth until velvety.",
          "s": 180
        },
        {
          "t": "Keep bean sauce warm over very low heat.",
          "s": null
        },
        {
          "t": "Fill warm tortillas with shredded chicken and fold.",
          "s": null
        },
        {
          "t": "Coat generously with hot bean sauce and garnish with crumbled Minas cheese and onion.",
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
      "es": "Salteado de patinho en cubos con pimentão, cebolla y mucho queso fundido encima para comer en tacos.",
      "pt": "Cubinhos de carne salteados com pimentão, cebola e queijo derretido por cima.",
      "en": "Seared beef, bell peppers, and onions blanketed in melted cheese."
    },
    "macrosTrad": {
      "kcal": 716,
      "p": 73,
      "c": 45,
      "f": 26
    },
    "macrosFit": {
      "kcal": 611,
      "p": 69,
      "c": 45,
      "f": 16
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
        "id": "pimentao",
        "grams": 80,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 50,
        "fitGrams": 35,
        "sub": "Muçarela",
        "fitId": "ricota"
      },
      {
        "id": "rap10",
        "grams": 65,
        "fitGrams": 0,
        "sub": "Tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta la carne en cubos pequeños, el pimentón y la cebolla en cuadros.",
          "s": null
        },
        {
          "t": "Dora la carne en sartén bien caliente 4 min con sal, pimienta y pizca de ajo (si quieres toque tradicional, agrega 1 tira de tocino picado).",
          "s": 240
        },
        {
          "t": "Añade cebolla y pimentón y saltea 4 min hasta que ablanden ligeramente.",
          "s": 240
        },
        {
          "t": "Extiende queso rallado cubriendo toda la sartén, tapa 2 min a fuego bajo hasta derretir y sirve directo con tortillas.",
          "s": 120
        }
      ],
      "pt": [
        {
          "t": "Corte a carne em cubinhos e o pimentão e cebola em quadrados.",
          "s": null
        },
        {
          "t": "Sele a carne em frigideira quente por 4 min com sal, pimenta e alho.",
          "s": 240
        },
        {
          "t": "Junte cebola e pimentão e salteie por 4 min.",
          "s": 240
        },
        {
          "t": "Cubra tudo com queijo ralado, tampe 2 min para derreter e sirva com tortilhas.",
          "s": 120
        }
      ],
      "en": [
        {
          "t": "Dice beef, bell pepper, and onion into bite-sized squares.",
          "s": null
        },
        {
          "t": "Sear beef in a hot skillet 4 min with garlic, salt, and pepper.",
          "s": 240
        },
        {
          "t": "Toss in onion and peppers for 4 min.",
          "s": 240
        },
        {
          "t": "Blanket with shredded cheese, cover 2 min to melt, and scoop into warm tortillas.",
          "s": 120
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
      "es": "Tostadas crocantes hechas con Rap10 o tapioca dorada sin aceite, atún, tomate, limón y aguacate.",
      "pt": "Base crocante de Rap10 ou tapioca assada com atum, vinagrete, limão e abacate.",
      "en": "Crisp baked Rap10 bases topped with lime-dressed tuna, tomato, and avocado."
    },
    "macrosTrad": {
      "kcal": 433,
      "p": 40,
      "c": 43,
      "f": 12
    },
    "macrosFit": {
      "kcal": 394,
      "p": 39,
      "c": 45,
      "f": 7
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
        "id": "rap10",
        "grams": 60,
        "fitGrams": 0,
        "sub": "Rap10 assado",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 55,
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
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 45,
        "fitGrams": 35,
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
          "t": "Lleva tortillas o Rap10 a la airfryer/horno 5 min a 180°C hasta que queden rígidas y crocantes.",
          "s": 300
        },
        {
          "t": "Escurre muy bien el atún y mézclalo con tomate, cebolla morada picada fina, cilantro y jugo de 1 limón.",
          "s": null
        },
        {
          "t": "Si deseas cremosidad, añade 1 cucharada de requeijão light o mayonesa.",
          "s": null
        },
        {
          "t": "Sirve la mezcla sobre las tostadas justo al momento de comer (para que no se ablanden) y corona con láminas de aguacate.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Asse tortilhas ou Rap10 na airfryer a 180°C por 5 min até ficarem bem crocantes.",
          "s": 300
        },
        {
          "t": "Escorra bem o atum e misture com tomate, cebola roxa, coentro e suco de 1 limão.",
          "s": null
        },
        {
          "t": "Adicione 1 colher de requeijão light ou maionese se desejar.",
          "s": null
        },
        {
          "t": "Monte sobre as tostadas na hora de comer e finalize com abacate.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Bake or air-fry tortillas 5 min at 180°C until crisp and flat.",
          "s": 300
        },
        {
          "t": "Mix well-drained tuna with diced tomato, red onion, cilantro, and lime juice.",
          "s": null
        },
        {
          "t": "Fold in 1 tbsp light requeijão or mayo if desired.",
          "s": null
        },
        {
          "t": "Spoon onto crisp bases right before eating and top with sliced avocado.",
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
      "kcal": 408,
      "p": 53,
      "c": 33,
      "f": 7
    },
    "macrosFit": {
      "kcal": 404,
      "p": 55,
      "c": 35,
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
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 40,
        "fitGrams": 0,
        "sub": "Tiras crocantes",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 35,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Hierve la pechuga de pollo en 800 ml de agua con cebolla, 2 dientes de ajo y orégano durante 15 min; retira el pollo y desmenúzalo.",
          "s": 900
        },
        {
          "t": "Sofríe aparte tomate picado y tiras de pimentón 3 min; agrégalos al caldo junto con la ralladura de medio limón.",
          "s": 180
        },
        {
          "t": "Devuelve el pollo desmenuzado y cocina 4 min más.",
          "s": 240
        },
        {
          "t": "Apaga el fuego (muy importante para que el limón no amargue!), exprime el jugo de limón fresco, sirve con tiras de tortilla crocante y aguacate.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o frango em 800 ml de água com cebola, alho e orégano por 15 min; retire e desfie.",
          "s": 900
        },
        {
          "t": "Refogue tomate e pimentão por 3 min e junte ao caldo com raspas de limão.",
          "s": 180
        },
        {
          "t": "Volte o frango desfiado e ferva mais 4 min.",
          "s": 240
        },
        {
          "t": "Desligue o fogo (para o limão não amargar), esprema o suco fresco e sirva com tiras crocantes.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Simmer chicken in 800ml water with onion, garlic, and oregano 15 min; shred.",
          "s": 900
        },
        {
          "t": "Sauté tomato and bell pepper 3 min; add to broth with lime zest.",
          "s": 180
        },
        {
          "t": "Return shredded chicken and simmer 4 min.",
          "s": 240
        },
        {
          "t": "Turn off heat (prevents bitterness!), squeeze in fresh lime juice, and top with crisp strips.",
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
      "kcal": 594,
      "p": 62,
      "c": 56,
      "f": 12
    },
    "macrosFit": {
      "kcal": 574,
      "p": 65,
      "c": 46,
      "f": 13
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 155,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 80,
        "fitGrams": 60,
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
        "id": "cebola",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica la papa y la zanahoria en cubitos muy pequeños (5 mm) para que se cuezan rápido.",
          "s": null
        },
        {
          "t": "Dora la carne molida en sartén 5 min con cebolla picada, ajo, comino y sal.",
          "s": 300
        },
        {
          "t": "Licúa los tomates con un poquito de agua y viértelos sobre la carne junto con la papa y zanahoria.",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego medio 12 min removiendo ocasionalmente hasta que las verduras estén suaves y el guiso jugoso.",
          "s": 720
        }
      ],
      "pt": [
        {
          "t": "Pique batata e cenoura em cubinhos bem pequenos (5 mm).",
          "s": null
        },
        {
          "t": "Doure a carne moída com cebola, alho e cominho por 5 min.",
          "s": 300
        },
        {
          "t": "Bata os tomates no liquidificador e despeje sobre a carne com a batata e cenoura.",
          "s": null
        },
        {
          "t": "Tampe e cozinhe por 12 min até os legumes ficarem macios; sirva com arroz.",
          "s": 720
        }
      ],
      "en": [
        {
          "t": "Finely dice potato and carrot into 5mm cubes.",
          "s": null
        },
        {
          "t": "Brown ground beef with onion, garlic, and cumin 5 min.",
          "s": 300
        },
        {
          "t": "Blend tomatoes with a splash of water and pour over beef with diced veggies.",
          "s": null
        },
        {
          "t": "Simmer covered 12 min until tender and saucy.",
          "s": 720
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
      "es": "Tacos Gobernador de Camarón/Tilapia",
      "pt": "Tacos Gobernador de Peixe/Camarão",
      "en": "Seared Seafood Melt Tacos"
    },
    "brTip": {
      "es": "Clásico de Sinaloa: camarón o tilápia picada salteada con tomate, cebolla y queijo fundido dentro de tortilla dorada.",
      "pt": "Camarão ou tilápia picada refogada com tomate e queijo derretido na tortilha crocante.",
      "en": "Chopped shrimp or tilapia sautéed with tomato and melted cheese in crisp tortillas."
    },
    "macrosTrad": {
      "kcal": 470,
      "p": 40,
      "c": 44,
      "f": 15
    },
    "macrosFit": {
      "kcal": 349,
      "p": 34,
      "c": 44,
      "f": 4
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 145,
        "fitGrams": 160,
        "sub": "Tilápia picada",
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 65,
        "fitGrams": 0,
        "sub": "Tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 45,
        "fitGrams": 30,
        "sub": "Muçarela",
        "fitId": "ricota"
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pica los camarones limpios (o filete de tilapia) en trozos pequeños.",
          "s": null
        },
        {
          "t": "Sofríe cebolla, pimentón y tomate picado fino en sartén 4 min; añade el marisco/pescado con ajo y orégano y saltea 3 min.",
          "s": 420
        },
        {
          "t": "Coloca tortillas en otra sartén caliente, cubre con queso rallado y el relleno de pescado en una mitad.",
          "s": null
        },
        {
          "t": "Dobla como quesadilla y dora 1.5 min por lado hasta quedar crocante; sirve con limón.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Pique os camarões limpos (ou tilápia) em pedaços pequenos.",
          "s": null
        },
        {
          "t": "Refogue cebola, pimentão e tomate por 4 min; junte o camarão/peixe com alho e orégano por 3 min.",
          "s": 420
        },
        {
          "t": "Aqueça tortilhas na frigideira, espalhe queijo e o recheio em metade.",
          "s": null
        },
        {
          "t": "Dobre e doure 1.5 min de cada lado até ficar crocante; sirva com limão.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Roughly chop peeled shrimp or tilapia fillet.",
          "s": null
        },
        {
          "t": "Sauté onion, bell pepper, and tomato 4 min; toss in seafood with garlic and oregano 3 min.",
          "s": 420
        },
        {
          "t": "Warm tortillas in a skillet with shredded cheese and seafood filling on half.",
          "s": null
        },
        {
          "t": "Fold and crisp 1.5 min per side; serve with lime.",
          "s": 180
        }
      ]
    },
    "videoQuery": "como hacer Tacos Gobernador de Camarón/Tilapia receta paso a paso"
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
      "es": "Usa contrafilé o patinho marinado en limón, naranja, ajo y shoyu; acompaña con aguacate y tortillas.",
      "pt": "Use contrafilé ou patinho marinado no limão, laranja, alho e shoyu.",
      "en": "Use sirloin or patinho marinated in lime, orange, garlic, and soy sauce."
    },
    "macrosTrad": {
      "kcal": 673,
      "p": 67,
      "c": 48,
      "f": 23
    },
    "macrosFit": {
      "kcal": 622,
      "p": 65,
      "c": 48,
      "f": 18
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 165,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "rap10",
        "grams": 70,
        "fitGrams": 0,
        "sub": "Tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 60,
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
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 45,
        "fitGrams": 35,
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
          "t": "Marina el filete de res 15 min con jugo de limón, 2 cucharadas de jugo de naranja, ajo machacado, 1 cdta de shoyu y comino.",
          "s": 900
        },
        {
          "t": "Calienta sartén o plancha al máximo; sella la carne entera 3 min por lado hasta lograr buen dorado exterior y centro jugoso.",
          "s": 360
        },
        {
          "t": "Saca la carne a una tabla y déjala reposar 4 min antes de picar en cubitos (así no pierde sus jugos).",
          "s": 240
        },
        {
          "t": "Sirve sobre tortillas calientes con cebolla, cilantro, salsa roja y aguacate machacado con limón.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Marine o bife por 15 min com limão, suco de laranja, alho, shoyu e cominho.",
          "s": 900
        },
        {
          "t": "Grelhe em chapa bem quente por 3 min de cada lado.",
          "s": 360
        },
        {
          "t": "Deixe a carne descansar na tábua por 4 min antes de picar em cubinhos.",
          "s": 240
        },
        {
          "t": "Sirva em tortilhas quentes com cebola, coentro e abacate amassado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Marinate steak 15 min in lime, orange juice, garlic, soy sauce, and cumin.",
          "s": 900
        },
        {
          "t": "Sear over smoking-hot skillet 3 min per side.",
          "s": 360
        },
        {
          "t": "Rest steak on cutting board 4 min before dicing finely.",
          "s": 240
        },
        {
          "t": "Serve in warm tortillas with onion, cilantro, and mashed avocado.",
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
      "es": "Pescado blanco fresco (tilápia, robalo o linguado) + limão tahiti + pimenta dedo-de-moça + batata-doce cocida.",
      "pt": "Peixe branco fresco (tilápia ou robalo) + limão tahiti + dedo-de-moça + batata-doce.",
      "en": "Fresh white fish cured in lime with Brazilian dedo-de-moça chili and sweet potato."
    },
    "macrosTrad": {
      "kcal": 348,
      "p": 40,
      "c": 42,
      "f": 4
    },
    "macrosFit": {
      "kcal": 340,
      "p": 41,
      "c": 38,
      "f": 4
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 190,
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
        "id": "cebola",
        "grams": 60,
        "fitGrams": 60,
        "sub": "Cebola roxa",
        "fitId": null
      },
      {
        "id": "batata_doce",
        "grams": 110,
        "fitGrams": 100,
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
        "sub": "Coentro fresco",
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la batata-doce en rodajas gruesas en agua 15 min y déjala enfriar; corta la cebolla morada en plumas finas y remójala 5 min en agua fría con sal para quitarle lo picante.",
          "s": 900
        },
        {
          "t": "Corta los filetes de pescado bien fríos en cubos de 2 cm (descarta partes oscuras o espinas).",
          "s": null
        },
        {
          "t": "En un bol frío, mezcla el pescado con sal (necesita buena sal antes del limón), ajo rallado, cilantro picado y chile/dedo-de-moça sin venas.",
          "s": null
        },
        {
          "t": "Exprime el jugo de limón fresco sin apretar demasiado la cáscara (para no amargar), mezcla suave 2 minutos (¡no lo dejes horas, el ceviche peruano se come al instante!) y sirve con cebolla morada, batata-doce y maíz.",
          "s": 120
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a batata-doce por 15 min e deixe esfriar; fatie a cebola roxa bem fina e lave em água gelada.",
          "s": 900
        },
        {
          "t": "Corte o peixe bem gelado em cubos de 2 cm.",
          "s": null
        },
        {
          "t": "Misture o peixe em tigela fria com sal, alho ralado, coentro e pimenta dedo-de-moça picadinha.",
          "s": null
        },
        {
          "t": "Esprema o suco de limão fresco (sem espremer a casca para não amargar), misture por 2 min e sirva na hora com cebola roxa, batata-doce e milho.",
          "s": 120
        }
      ],
      "en": [
        {
          "t": "Boil sweet potato 15 min and cool; thinly slice red onion and soak in cold water.",
          "s": 900
        },
        {
          "t": "Cut well-chilled white fish into 2cm cubes.",
          "s": null
        },
        {
          "t": "Toss fish in a chilled bowl with salt, grated garlic, cilantro, and minced chili.",
          "s": null
        },
        {
          "t": "Squeeze fresh lime juice over (avoiding bitter pith), toss 2 min, and serve immediately with onion, sweet potato, and corn.",
          "s": 120
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
      "kcal": 663,
      "p": 68,
      "c": 65,
      "f": 13
    },
    "macrosFit": {
      "kcal": 627,
      "p": 70,
      "c": 52,
      "f": 14
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 165,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 90,
        "sub": "Batata na airfryer",
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 80,
        "fitGrams": 80,
        "sub": "Cebola roxa",
        "fitId": null
      },
      {
        "id": "shoyu",
        "grams": 25,
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
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las papas en bastones y dóralas en airfryer 15 min a 200°C (o al horno) hasta quedar crocantes.",
          "s": 900
        },
        {
          "t": "Corta la carne en tiras gruesas de 2 cm, sazona con sal, pimienta y comino. Corta cebolla morada y tomate en gajos gruesos (retira las semillas al tomate).",
          "s": null
        },
        {
          "t": "Calienta un wok o sartén grande al MÁXIMO hasta que humee. Sella la carne 2 min sin moverla mucho para que quede dorada y jugosa; retira un segundo.",
          "s": 120
        },
        {
          "t": "En esa sartén ardiente, saltea la cebolla 1 min, añade ajo, tomate en gajos, 2 cdas de shoyu y 1 cda de vinagre tinto/manzana.",
          "s": null
        },
        {
          "t": "Devuelve la carne, mezcla 30 seg con cilantro fresco picado (y las papas si te gusta todo junto) y sirve al instante con arroz blanco.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte as batatas em palitos e asse na airfryer a 200°C por 15 min até ficarem crocantes.",
          "s": 900
        },
        {
          "t": "Corte a carne em tiras grossas e tempere com sal, pimenta e cominho; corte cebola roxa e tomate em gomos.",
          "s": null
        },
        {
          "t": "Aqueça a frigideira no máximo até fumegar; sele a carne por 2 min e reserve.",
          "s": 120
        },
        {
          "t": "Salteie a cebola roxa 1 min, junte alho, tomate, shoyu e 1 colher de vinagre.",
          "s": null
        },
        {
          "t": "Volte a carne com coentro picado por 30s e sirva imediatamente com arroz e batatas.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut potatoes into fries and air-fry at 200°C for 15 min until crisp.",
          "s": 900
        },
        {
          "t": "Slice beef into thick strips; cut red onion and tomato into thick wedges.",
          "s": null
        },
        {
          "t": "Heat a wok/skillet until smoking; sear beef 2 min and remove briefly.",
          "s": 120
        },
        {
          "t": "Toss red onion 1 min, add garlic, tomato wedges, soy sauce, and 1 tbsp vinegar.",
          "s": null
        },
        {
          "t": "Return beef and cilantro for 30s; serve immediately with rice and fries.",
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
      "es": "En Brasil logra el color y sabor del ají amarillo licuando pimentão amarelo salteado con pimenta dedo-de-moça y cúrcuma.",
      "pt": "Substitua o ají amarillo batendo pimentão amarelo refogado com dedo-de-moça e cúrcuma.",
      "en": "Replicate ají amarillo in Brazil using yellow bell pepper, chili, and turmeric."
    },
    "macrosTrad": {
      "kcal": 760,
      "p": 72,
      "c": 82,
      "f": 14
    },
    "macrosFit": {
      "kcal": 760,
      "p": 77,
      "c": 71,
      "f": 17
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
        "grams": 80,
        "fitGrams": 80,
        "sub": "Pimentão amarelo",
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 50,
        "fitGrams": 0,
        "sub": "Aveia em flocos",
        "fitId": null
      },
      {
        "id": "aveia",
        "grams": 0,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 100,
        "fitGrams": 100,
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
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Hierve la pechuga de pollo en agua con sal 15 min, guarda 1 taza del caldo y desmenuza el pollo fino.",
          "s": 900
        },
        {
          "t": "Remoja 2 rebanadas de pan sin corteza (o avena) en la leche; licúalos hasta formar pasta suave.",
          "s": null
        },
        {
          "t": "Saltea pimentón amarillo picado con ajo, cebolla y pizca de cúrcuma 5 min; licúa esa mezcla para hacer la pasta amarilla.",
          "s": 300
        },
        {
          "t": "Sofríe cebolla picada fina, añade la pasta amarilla 3 min, luego agrega el pan/avena licuado y caldo de pollo removiendo 5 min hasta espesar.",
          "s": 300
        },
        {
          "t": "Incorpora el pollo desmenuzado y queso parmesano/minas rallado 3 min. Sirve sobre papas cocidas con arroz, huevo duro y aceituna.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o frango por 15 min, guarde 1 xícara do caldo e desfie bem fino.",
          "s": 900
        },
        {
          "t": "Deixe o pão (ou aveia) de molho no leite e bata até formar pasta.",
          "s": null
        },
        {
          "t": "Refogue pimentão amarelo, alho e cúrcuma por 5 min e bata no liquidificador para criar o creme amarelo.",
          "s": 300
        },
        {
          "t": "Refogue cebola, junte o creme amarelo, o pão batido e caldo mexendo por 5 min até engrossar.",
          "s": 300
        },
        {
          "t": "Misture o frango desfiado e queijo ralado por 3 min; sirva com batata cozida, arroz e ovo cozido.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Poach chicken 15 min, reserve 1 cup broth, and shred finely.",
          "s": 900
        },
        {
          "t": "Soak bread (or oats) in milk and blend smooth.",
          "s": null
        },
        {
          "t": "Sauté yellow bell pepper, garlic, and turmeric 5 min; blend into golden paste.",
          "s": 300
        },
        {
          "t": "Cook onion with golden paste, blended bread, and broth 5 min until thick.",
          "s": 300
        },
        {
          "t": "Fold in chicken and grated cheese 3 min; serve over boiled potato with rice and hard egg.",
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
      "kcal": 547,
      "p": 61,
      "c": 45,
      "f": 11
    },
    "macrosFit": {
      "kcal": 545,
      "p": 67,
      "c": 37,
      "f": 12
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 140,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 140,
        "fitGrams": 120,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "ovo",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "shoyu",
        "grams": 25,
        "fitGrams": 20,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 20,
        "fitGrams": 20,
        "sub": "Cebolinha",
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Haz una tortilla fina con los huevos batidos en sartén, retírala y córtala en cuadritos; reserva.",
          "s": 120
        },
        {
          "t": "Corta el pollo en cubos pequeños y dóralos a fuego alto 4 min con jengibre rallado y ajo.",
          "s": 240
        },
        {
          "t": "Añade pimentón rojo picado y el arroz frío del día anterior; presiona con cuchara para separar todos los granos.",
          "s": null
        },
        {
          "t": "Vierte el shoyu alrededor del arroz caliente, saltea 3 min a fuego fuerte hasta que huela a tostado, mezcla el huevo y abundante cebollín picado.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Faça uma omelete fina com os ovos, corte em quadradinhos e reserve.",
          "s": 120
        },
        {
          "t": "Doure cubinhos de frango em fogo alto por 4 min com gengibre ralado e alho.",
          "s": 240
        },
        {
          "t": "Junte pimentão picado e o arroz frio soltinho.",
          "s": null
        },
        {
          "t": "Regue shoyu pelas bordas da panela quente, salteie 3 min e misture o ovo e cebolinha.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Cook a thin omelette, dice into squares, and set aside.",
          "s": 120
        },
        {
          "t": "Sear diced chicken 4 min with grated ginger and garlic.",
          "s": 240
        },
        {
          "t": "Toss in diced pepper and cold leftover rice, breaking up clumps.",
          "s": null
        },
        {
          "t": "Splash soy sauce around hot pan edges, stir-fry 3 min, and fold in egg and scallions.",
          "s": 180
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
      "kcal": 528,
      "p": 41,
      "c": 40,
      "f": 24
    },
    "macrosFit": {
      "kcal": 461,
      "p": 42,
      "c": 37,
      "f": 16
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 180,
        "fitGrams": 0,
        "sub": "Batata-doce",
        "fitId": null
      },
      {
        "id": "batata_doce",
        "grams": 0,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "atum",
        "grams": 130,
        "fitGrams": 145,
        "sub": "Frango desfiado",
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 50,
        "fitGrams": 40,
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
        "id": "requeijao",
        "grams": 25,
        "fitGrams": 25,
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
          "t": "Cuece las papas peladas en agua con sal 18 min; escúrrelas muy bien y aplástalas aún calientes (pásalas por prensapapas para que no queden grumos).",
          "s": 1080
        },
        {
          "t": "Deja entibiar el puré, luego amasa con jugo de 1 limón, aceite, pasta de pimentón amarillo/chile y sal hasta obtener una masa suave y moldeable.",
          "s": null
        },
        {
          "t": "Aparte, mezcla el atún bien escurrido (o pollo desmenuzado) con cebolla picada fina, requeijão/mayonesa y gotas de limón.",
          "s": null
        },
        {
          "t": "En un aro o molde: pon una capa de puré frío, otra de láminas de aguacate, el relleno de atún y otra capa de puré arriba; refrigera 15 min y sirve fría.",
          "s": 900
        }
      ],
      "pt": [
        {
          "t": "Cozinhe as batatas por 18 min, escorra bem e amasse ainda quentes até ficar bem liso.",
          "s": 1080
        },
        {
          "t": "Quando amornar, tempere o purê com limão, azeite, sal e pasta de pimentão amarelo.",
          "s": null
        },
        {
          "t": "Misture atum escorrido (ou frango) com cebola picadinha e requeijão/maionese.",
          "s": null
        },
        {
          "t": "Monte em camadas (purê, fatias de abacate, recheio de atum e purê), gele 15 min e sirva frio.",
          "s": 900
        }
      ],
      "en": [
        {
          "t": "Boil potatoes 18 min, drain well, and mash while hot until silky.",
          "s": 1080
        },
        {
          "t": "Cool slightly, then knead in lime juice, olive oil, salt, and yellow pepper paste.",
          "s": null
        },
        {
          "t": "Mix drained tuna (or chicken) with minced onion and creamy dressing.",
          "s": null
        },
        {
          "t": "Layer potato, sliced avocado, tuna salad, and potato; chill 15 min and serve cold.",
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
      "es": "El secreto de la marinada: shoyu + vinagre + alho + cominho + orégano + pimenta preta (queda brutal en airfryer).",
      "pt": "Segredo da marinada: shoyu + vinagre + alho + cominho + orégano (perfeito na airfryer).",
      "en": "Classic marinade of soy sauce, vinegar, garlic, cumin, and oregano."
    },
    "macrosTrad": {
      "kcal": 544,
      "p": 50,
      "c": 32,
      "f": 24
    },
    "macrosFit": {
      "kcal": 523,
      "p": 50,
      "c": 27,
      "f": 24
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 185,
        "fitGrams": 185,
        "sub": "Peito de frango",
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 140,
        "fitGrams": 110,
        "sub": "Batata-doce",
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
        "id": "alho",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa o mezcla 2 cdas de shoyu, 1 cda de vinagre, 3 dientes de ajo, 1 cdta de comino, 1 cdta de orégano, pimienta negra y sal.",
          "s": null
        },
        {
          "t": "Haz cortes superficiales en los muslos/pechuga, unta bien la marinada (incluso debajo de la piel si tiene) y reposa 20 min.",
          "s": 1200
        },
        {
          "t": "Precalienta el horno o airfryer a 200°C; cocina el pollo 25–30 min (girando a mitad de tiempo) hasta piel crocante y centro cocido.",
          "s": 1620
        },
        {
          "t": "Sirve con papas doradas y ensalada fresca con vinagreta.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture shoyu, vinagre, alho amassado, cominho, orégano, pimenta e sal.",
          "s": null
        },
        {
          "t": "Faça cortes no frango, esfregue bem o tempero e deixe marinar por 20 min.",
          "s": 1200
        },
        {
          "t": "Asse no forno ou airfryer a 200°C por 25–30 min até dourar bem.",
          "s": 1620
        },
        {
          "t": "Sirva com batatas assadas e salada fresca.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Whisk soy sauce, vinegar, crushed garlic, cumin, oregano, pepper, and salt.",
          "s": null
        },
        {
          "t": "Score chicken, rub thoroughly with marinade, and rest 20 min.",
          "s": 1200
        },
        {
          "t": "Roast or air-fry at 200°C for 25–30 min until skin is crisp and golden.",
          "s": 1620
        },
        {
          "t": "Serve with roasted potatoes and fresh salad.",
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
      "es": "Salsa verde de espinaca + manjericão (albahaca) + queijo minas frescal + leche; sin piñones.",
      "pt": "Molho verde de espinafre + manjericão + queijo minas frescal + leite.",
      "en": "Spinach, basil, and Minas cheese sauce over pasta with seared steak."
    },
    "macrosTrad": {
      "kcal": 782,
      "p": 73,
      "c": 42,
      "f": 34
    },
    "macrosFit": {
      "kcal": 659,
      "p": 73,
      "c": 35,
      "f": 24
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
        "fitGrams": 85,
        "sub": "Macarrão integral",
        "fitId": null
      },
      {
        "id": "brocolis",
        "grams": 90,
        "fitGrams": 100,
        "sub": "Espinafre + Manjericão",
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
        "id": "leite",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 10,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Blanquea las hojas de espinaca (y albahaca fresca) en agua hirviendo 30 seg y pasa a agua fría para fijar el color verde intenso.",
          "s": null
        },
        {
          "t": "Licúa las hojas con queso fresco/minas, leche, ajo, sal y nueces/maní opcional hasta lograr crema verde suave.",
          "s": null
        },
        {
          "t": "Cuece la pasta al dente según el paquete y escurre guardando un chorrito del agua.",
          "s": 540
        },
        {
          "t": "Mezcla la pasta caliente con la salsa verde a fuego mínimo 1 min (sin hervir). Aparte sella un bife a la plancha 3 min por lado y sírvelo encima.",
          "s": 360
        }
      ],
      "pt": [
        {
          "t": "Dê um susto nas folhas de espinafre e manjericão em água fervente por 30s e esfrie.",
          "s": null
        },
        {
          "t": "Bata no liquidificador com queijo minas, leite, alho e sal até ficar bem verde.",
          "s": null
        },
        {
          "t": "Cozinhe o macarrão al dente e escorra.",
          "s": 540
        },
        {
          "t": "Misture a massa quente no molho verde em fogo baixo por 1 min e sirva com bife grelhado por cima.",
          "s": 360
        }
      ],
      "en": [
        {
          "t": "Blanch spinach and basil leaves 30s and shock in cold water.",
          "s": null
        },
        {
          "t": "Blend greens with Minas cheese, milk, garlic, and salt until vibrant green.",
          "s": null
        },
        {
          "t": "Boil pasta al dente and drain.",
          "s": 540
        },
        {
          "t": "Toss hot pasta with green sauce 1 min over low heat and top with seared steak.",
          "s": 360
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
      "es": "Guiso verde aromático con mucho coentro fresco batido, cerveza o vinagre, servido con feijão y arroz.",
      "pt": "Ensopado aromático com bastante coentro fresco batido, servido com arroz e feijão.",
      "en": "Beef braised in vibrant cilantro-garlic sauce with rice and beans."
    },
    "macrosTrad": {
      "kcal": 631,
      "p": 69,
      "c": 55,
      "f": 13
    },
    "macrosFit": {
      "kcal": 625,
      "p": 73,
      "c": 48,
      "f": 14
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 165,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 40,
        "fitGrams": 40,
        "sub": "Coentro fresco",
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 110,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "cenoura",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa 1 manojo generoso de cilantro fresco con 1/2 taza de agua/caldo hasta formar un líquido verde.",
          "s": null
        },
        {
          "t": "Sella cubos de carne en olla a fuego fuerte 5 min con sal y pimienta; retira.",
          "s": 300
        },
        {
          "t": "Sofríe cebolla, ajo y comino 4 min; agrega el cilantro licuado y sofríe 3 min para quitar el sabor crudo.",
          "s": 420
        },
        {
          "t": "Devuelve la carne con zanahoria en rodajas y 1 taza de caldo/cerveza; cocina tapado 25 min hasta que la carne esté tierna. Sirve con arroz y frijoles.",
          "s": 1500
        }
      ],
      "pt": [
        {
          "t": "Bata 1 maço de coentro fresco com 1/2 xícara de água no liquidificador.",
          "s": null
        },
        {
          "t": "Sele os cubos de carne na panela quente por 5 min e reserve.",
          "s": 300
        },
        {
          "t": "Refogue cebola, alho e cominho 4 min; junte o coentro batido e refogue mais 3 min.",
          "s": 420
        },
        {
          "t": "Volte a carne com cenoura em rodelas e caldo; cozinhe tampado por 25 min e sirva com arroz e feijão.",
          "s": 1500
        }
      ],
      "en": [
        {
          "t": "Blend 1 large bunch of fresh cilantro with 1/2 cup water.",
          "s": null
        },
        {
          "t": "Sear beef cubes 5 min until browned; set aside.",
          "s": 300
        },
        {
          "t": "Sauté onion, garlic, and cumin 4 min; fry blended cilantro 3 min.",
          "s": 420
        },
        {
          "t": "Return beef with sliced carrots and broth; simmer covered 25 min and serve with rice and beans.",
          "s": 1500
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
      "es": "Salsa cremosa sin cocción final hecha con pimentão amarelo salteado, queijo minas frescal, leite y bolacha água e sal.",
      "pt": "Molho cremoso feito com pimentão amarelo refogado, queijo minas, leite e bolacha água e sal.",
      "en": "Creamy yellow pepper & Minas cheese sauce poured over boiled potatoes and egg."
    },
    "macrosTrad": {
      "kcal": 471,
      "p": 26,
      "c": 42,
      "f": 23
    },
    "macrosFit": {
      "kcal": 339,
      "p": 20,
      "c": 37,
      "f": 13
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 180,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 65,
        "fitGrams": 45,
        "sub": "Queijo minas frescal",
        "fitId": "ricota"
      },
      {
        "id": "pimentao",
        "grams": 70,
        "fitGrams": 70,
        "sub": "Pimentão amarelo",
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 15,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece las papas enteras o en mitades en agua con sal 18 min hasta que entren fácil con cuchillo; pela y rebana en rodajas gruesas.",
          "s": 1080
        },
        {
          "t": "Sofríe en sartén tiras de pimentón amarillo con cebolla y ajo 4 min hasta ablandar (con chile si te gusta picante).",
          "s": 240
        },
        {
          "t": "Licúa lo sofrito junto con queijo minas frescal, leche, 2 galletas saladas (bolacha água e sal) y pizca de cúrcuma hasta lograr crema lisa.",
          "s": null
        },
        {
          "t": "Acomoda las papas tibias o frías sobre hojas de lechuga, baña con la crema huancaína y decora con huevo duro y aceituna.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe as batatas por 18 min até ficarem macias e corte em rodelas grossas.",
          "s": 1080
        },
        {
          "t": "Refogue pimentão amarelo, cebola e alho por 4 min.",
          "s": 240
        },
        {
          "t": "Bata no liquidificador com queijo minas, leite, 2 bolachas água e sal e pitada de cúrcuma.",
          "s": null
        },
        {
          "t": "Disponha as batatas sobre alface, cubra com o creme e decore com ovo cozido e azeitona.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil potatoes 18 min until tender; peel and slice thickly.",
          "s": 1080
        },
        {
          "t": "Sauté yellow bell pepper, onion, and garlic 4 min.",
          "s": 240
        },
        {
          "t": "Blend with Minas cheese, milk, 2 plain crackers, and a pinch of turmeric until silky.",
          "s": null
        },
        {
          "t": "Pour over sliced potatoes and garnish with hard-boiled egg and olives.",
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
      "es": "Similar al sashimi con influencia nikkei: láminas finas de tilápia/linguado bañadas en crema de limón y ají.",
      "pt": "Fatias finas tipo sashimi banhadas em creme de limão e pimentão amarelo.",
      "en": "Sashimi-style thin fish slices dressed in zesty lime-pepper cream."
    },
    "macrosTrad": {
      "kcal": 257,
      "p": 36,
      "c": 23,
      "f": 3
    },
    "macrosFit": {
      "kcal": 259,
      "p": 38,
      "c": 22,
      "f": 3
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 170,
        "fitGrams": 180,
        "sub": null,
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
        "id": "pimentao",
        "grams": 45,
        "fitGrams": 45,
        "sub": "Pimentão amarelo",
        "fitId": null
      },
      {
        "id": "batata_doce",
        "grams": 90,
        "fitGrams": 80,
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
          "t": "Con un cuchillo bien afilado, corta el filete de pescado bien frío en láminas largas y delgadas tipo sashimi (en ángulo).",
          "s": null
        },
        {
          "t": "Licúa jugo de 2 limones con 1 trocito de pimentón amarillo, ajo, pizca de jengibre y sal hasta emulsionar.",
          "s": null
        },
        {
          "t": "Acomoda las láminas de pescado extendidas en un plato frío sin encimarlas demasiado.",
          "s": null
        },
        {
          "t": "Vierte la crema cítrica encima al momento de servir y acompaña con batata-doce cocida.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Com faca bem afiada, fatie o peixe gelado em lâminas finas tipo sashimi.",
          "s": null
        },
        {
          "t": "Bata suco de 2 limões com pimentão amarelo, alho, gengibre e sal até emulsionar.",
          "s": null
        },
        {
          "t": "Disponha as fatias lado a lado em prato frio.",
          "s": null
        },
        {
          "t": "Regue com o creme cítrico na hora de servir junto com batata-doce.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Slice chilled white fish thinly at an angle like sashimi.",
          "s": null
        },
        {
          "t": "Blend fresh lime juice, yellow bell pepper, garlic, ginger, and salt until emulsified.",
          "s": null
        },
        {
          "t": "Fan fish slices neatly across a cold plate.",
          "s": null
        },
        {
          "t": "Drizzle citrus cream over right before serving alongside boiled sweet potato.",
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
      "kcal": 782,
      "p": 71,
      "c": 54,
      "f": 29
    },
    "macrosFit": {
      "kcal": 731,
      "p": 76,
      "c": 47,
      "f": 25
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 130,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": "Arroz Integral",
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
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
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
          "t": "Sofríe cebolla, ajo, comino y pasta amarilla/páprica en sartén 3 min.",
          "s": 180
        },
        {
          "t": "Agrega el frijol cocido aplastado ligeramente y el arroz cocido; mezcla bien hasta formar una masa compacta y húmeda.",
          "s": null
        },
        {
          "t": "En sartén antiadherente aceitada, coloca la mezcla y dale forma de tortilla gruesa doblando los bordes como un pastelito; dora 4 min por lado hasta formar costra crocante.",
          "s": 480
        },
        {
          "t": "Aparte sella un bife a la plancha y fríe 1 huevo; sirve sobre el tacu tacu caliente.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola, alho, cominho e páprica por 3 min.",
          "s": 180
        },
        {
          "t": "Misture feijão cozido levemente amassado e arroz cozido até formar massa úmida.",
          "s": null
        },
        {
          "t": "Doure na frigideira antiaderente moldando como um bolo achatado por 4 min de cada lado até criar casquinha.",
          "s": 480
        },
        {
          "t": "Sirva com bife grelhado e ovo frito por cima.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Sauté onion, garlic, cumin, and paprika 3 min.",
          "s": 180
        },
        {
          "t": "Fold in lightly mashed beans and cooked rice until cohesive.",
          "s": null
        },
        {
          "t": "Pan-fry in oiled non-stick skillet shaped like a thick oval cake, 4 min per side until crisp.",
          "s": 480
        },
        {
          "t": "Top with seared steak and a fried egg.",
          "s": 180
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
      "kcal": 585,
      "p": 46,
      "c": 50,
      "f": 22
    },
    "macrosFit": {
      "kcal": 549,
      "p": 45,
      "c": 41,
      "f": 23
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 165,
        "fitGrams": 165,
        "sub": "Peito de frango",
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 130,
        "fitGrams": 105,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "cheiro_verde",
        "grams": 40,
        "fitGrams": 40,
        "sub": "Coentro fresco",
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
        "id": "pimentao",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Dora los muslos o pechuga de pollo sazonados con sal y pimienta 6 min en olla; retira.",
          "s": 360
        },
        {
          "t": "Licúa 1 manojo de cilantro con 1/2 taza de agua/caldo.",
          "s": null
        },
        {
          "t": "En la misma olla sofríe cebolla, ajo y comino; añade el cilantro licuado y fríe 3 min.",
          "s": 180
        },
        {
          "t": "Incorpora el arroz crudo, zanahoria en cubitos, tiras de pimentón, el pollo y caldo; cocina tapado 16 min hasta secar.",
          "s": 960
        }
      ],
      "pt": [
        {
          "t": "Doure o frango temperado com sal e pimenta por 6 min; reserve.",
          "s": 360
        },
        {
          "t": "Bata 1 maço de coentro fresco com 1/2 xícara de água.",
          "s": null
        },
        {
          "t": "Refogue cebola, alho e cominho; junte o coentro batido por 3 min.",
          "s": 180
        },
        {
          "t": "Adicione arroz cru, cenoura, pimentão, o frango e caldo; cozinhe tampado por 16 min.",
          "s": 960
        }
      ],
      "en": [
        {
          "t": "Brown seasoned chicken pieces 6 min in a pot; set aside.",
          "s": 360
        },
        {
          "t": "Blend 1 bunch cilantro with 1/2 cup water.",
          "s": null
        },
        {
          "t": "Sauté onion, garlic, and cumin; cook blended cilantro 3 min.",
          "s": 180
        },
        {
          "t": "Add raw rice, diced carrot, pepper, chicken, and broth; simmer covered 16 min.",
          "s": 960
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
      "kcal": 384,
      "p": 39,
      "c": 50,
      "f": 4
    },
    "macrosFit": {
      "kcal": 368,
      "p": 41,
      "c": 44,
      "f": 4
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 190,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 110,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 80,
        "fitGrams": 80,
        "sub": "Cebola roxa",
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 120,
        "fitGrams": 100,
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
          "t": "Sazona los filetes de pescado con ajo, sal, pimienta y comino.",
          "s": null
        },
        {
          "t": "En una sartén honda sofríe ajo y cebolla en gajos gruesos 2 min; acomoda el pescado encima y cubre con gajos de tomate.",
          "s": 120
        },
        {
          "t": "Agrega 1/3 taza de caldo/agua y 1 cda de vinagre o cerveza blanca; tapa herméticamente y cocina a fuego medio 8 min sin mover.",
          "s": 480
        },
        {
          "t": "Destapa, añade cilantro fresco y gotas de limón; sirve con mandioca cocida.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Tempere os filés de peixe com alho, sal, pimenta e cominho.",
          "s": null
        },
        {
          "t": "Refogue alho e cebola em gomos 2 min; acomode o peixe e cubra com gomos de tomate.",
          "s": 120
        },
        {
          "t": "Junte 1/3 xícara de água/caldo e 1 col. de vinagre; tampe e cozinhe por 8 min.",
          "s": 480
        },
        {
          "t": "Finalize com coentro e limão; sirva com mandioca cozida.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Season fish fillets with garlic, salt, pepper, and cumin.",
          "s": null
        },
        {
          "t": "Sauté garlic and thick red onion wedges 2 min; lay fish on top with tomato wedges.",
          "s": 120
        },
        {
          "t": "Add 1/3 cup water and 1 tbsp vinegar; cover tightly and steam 8 min.",
          "s": 480
        },
        {
          "t": "Finish with cilantro and lime; serve with boiled cassava.",
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
      "es": "Tradicional con corazón de res o patinho en cubos marinado en vinagre, comino, ajo y páprica; servido con papa o mandioca.",
      "pt": "Cubos marinados no vinagre, cominho, alho e páprica defumada; servido com batata ou mandioca.",
      "en": "Vinegar-cumin-garlic skewers served with golden potatoes or cassava."
    },
    "macrosTrad": {
      "kcal": 600,
      "p": 65,
      "c": 28,
      "f": 25
    },
    "macrosFit": {
      "kcal": 571,
      "p": 68,
      "c": 24,
      "f": 21
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 170,
        "fitGrams": 180,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 110,
        "sub": "Mandioca / Batata-doce",
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
        "id": "azeite",
        "grams": 12,
        "fitGrams": 8,
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
          "t": "Mezcla 2 cdas de vinagre tinto/manzana, 3 dientes de ajo machacados, 1 cdta de comino, 1 cda de páprica, orégano, aceite y sal.",
          "s": null
        },
        {
          "t": "Corta la carne en cubos de 3 cm y déjala marinando 20 min en esa mezcla.",
          "s": 1200
        },
        {
          "t": "Ensarta los cubos en brochetas y asa en sartén grill muy caliente 3 min por lado pincelando con la marinada.",
          "s": 360
        },
        {
          "t": "Sirve con rodajas de papa dorada y salsa picante o chimichurri.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture vinagre, alho amassado, cominho, páprica, orégano, azeite e sal.",
          "s": null
        },
        {
          "t": "Marine os cubos de carne por 20 min nessa mistura.",
          "s": 1200
        },
        {
          "t": "Monte os espetos e grelhe em chapa quente por 3 min de cada lado.",
          "s": 360
        },
        {
          "t": "Sirva com rodelas de batata dourada.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Whisk vinegar, crushed garlic, cumin, paprika, oregano, oil, and salt.",
          "s": null
        },
        {
          "t": "Marinate beef cubes for 20 min.",
          "s": 1200
        },
        {
          "t": "Thread onto skewers and grill 3 min per side, basting with marinade.",
          "s": 360
        },
        {
          "t": "Serve with pan-seared potato rounds.",
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
      "kcal": 439,
      "p": 54,
      "c": 44,
      "f": 5
    },
    "macrosFit": {
      "kcal": 433,
      "p": 58,
      "c": 37,
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
        "grams": 80,
        "fitGrams": 65,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "cheiro_verde",
        "grams": 35,
        "fitGrams": 35,
        "sub": "Coentro fresco",
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
        "id": "milho",
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
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa 1 manojo de cilantro con 1/2 taza de agua hasta quedar verde.",
          "s": null
        },
        {
          "t": "Sofríe cebolla, ajo y cubos de pollo 4 min en olla; añade el cilantro licuado y fríe 2 min.",
          "s": 360
        },
        {
          "t": "Agrega 900 ml de agua/caldo, arroz lavado, zanahoria en cubos y maíz verde.",
          "s": null
        },
        {
          "t": "Cocina a fuego medio 18 min hasta que el arroz esté suave y espese ligeramente el caldo; sirve con limón.",
          "s": 1080
        }
      ],
      "pt": [
        {
          "t": "Bata 1 maço de coentro com 1/2 xícara de água.",
          "s": null
        },
        {
          "t": "Refogue cebola, alho e cubos de frango 4 min; junte o coentro batido por 2 min.",
          "s": 360
        },
        {
          "t": "Adicione 900 ml de água, arroz lavado, cenoura e milho.",
          "s": null
        },
        {
          "t": "Cozinhe 18 min até o arroz amaciar e engrossar o caldo; sirva com limão.",
          "s": 1080
        }
      ],
      "en": [
        {
          "t": "Blend 1 bunch cilantro with 1/2 cup water.",
          "s": null
        },
        {
          "t": "Sauté onion, garlic, and diced chicken 4 min; stir in blended cilantro 2 min.",
          "s": 360
        },
        {
          "t": "Add 900ml water, rice, diced carrot, and corn.",
          "s": null
        },
        {
          "t": "Simmer 18 min until rice is tender and broth thickens slightly; serve with lime.",
          "s": 1080
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
      "es": "La quinoa se encuentra fácil en la sección natural de supermercados en Brasil (o usa avena gruesa en emergencia).",
      "pt": "Quinoa (fácil nos mercados BR) cozida estilo risoto com queijo minas e frango.",
      "en": "Quinoa cooked risotto-style with Minas cheese and seared chicken."
    },
    "macrosTrad": {
      "kcal": 751,
      "p": 70,
      "c": 67,
      "f": 22
    },
    "macrosFit": {
      "kcal": 700,
      "p": 71,
      "c": 67,
      "f": 16
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
        "id": "aveia",
        "grams": 85,
        "fitGrams": 85,
        "sub": "Quinoa em grãos",
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 45,
        "fitGrams": 30,
        "sub": null,
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
        "grams": 45,
        "fitGrams": 45,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Lava muy bien la quinua bajo el grifo en colador fino (quita el sabor amargo de la saponina).",
          "s": null
        },
        {
          "t": "Sofríe cebolla y ajo 3 min; agrega la quinua y cubre poco a poco con caldo caliente como un risotto durante 15 min hasta que abra el grano.",
          "s": 900
        },
        {
          "t": "Baja el fuego, añade queso rallado y chorrito de leche hasta lograr textura cremosa.",
          "s": null
        },
        {
          "t": "Aparte sella pechuga de pollo en tiras y sírvela encima con tomate picado.",
          "s": 240
        }
      ],
      "pt": [
        {
          "t": "Lave muito bem a quinoa em peneira fina sob água corrente.",
          "s": null
        },
        {
          "t": "Refogue cebola e alho 3 min; cozinhe a quinoa com caldo aos poucos por 15 min até abrir.",
          "s": 900
        },
        {
          "t": "Misture queijo ralado e um fio de leite até ficar cremoso.",
          "s": null
        },
        {
          "t": "Sirva com tiras de frango grelhado por cima.",
          "s": 240
        }
      ],
      "en": [
        {
          "t": "Rinse quinoa thoroughly in a fine sieve to remove bitterness.",
          "s": null
        },
        {
          "t": "Sauté onion and garlic 3 min; simmer quinoa with hot broth 15 min until tender.",
          "s": 900
        },
        {
          "t": "Fold in grated cheese and splash of milk until creamy.",
          "s": null
        },
        {
          "t": "Top with seared chicken strips.",
          "s": 240
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
      "es": "Versión tradicional con lingüiça/salchicha y papas crocantes; en modo fit usa peito de frango en tiras y papas en airfryer.",
      "pt": "Batatas crocantes com linguiça/salsicha fatiada (ou frango em tiras no modo fit).",
      "en": "Crispy fries topped with seared sausage (or chicken in fit mode) and sauces."
    },
    "macrosTrad": {
      "kcal": 621,
      "p": 31,
      "c": 36,
      "f": 40
    },
    "macrosFit": {
      "kcal": 412,
      "p": 57,
      "c": 27,
      "f": 8
    },
    "ingredients": [
      {
        "id": "linguica",
        "grams": 140,
        "fitGrams": 0,
        "sub": "Peito de frango em tiras",
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 0,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 170,
        "fitGrams": 130,
        "sub": "Batata na airfryer",
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
        "id": "requeijao",
        "grams": 25,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las papas en bastones y cocínalas en airfryer 16 min a 200°C (o fríe en sartén) hasta que estén bien doradas y crocantes.",
          "s": 960
        },
        {
          "t": "Corta la lingüiça (o pechuga de pollo en modo fit) en rodajas diagonales y dóralas en sartén 5 min hasta caramelizar.",
          "s": 300
        },
        {
          "t": "Mezcla las papas calientes con la carne en plato amplio y añade ensaladita de repollo/tomate al lado.",
          "s": null
        },
        {
          "t": "Sirve con mostaza, salsa roja y crema de ají/requeijão.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte as batatas em palitos e asse na airfryer a 200°C por 16 min até ficarem crocantes.",
          "s": 960
        },
        {
          "t": "Fatie a linguiça (ou frango no modo fit) na diagonal e doure por 5 min.",
          "s": 300
        },
        {
          "t": "Misture tudo quente no prato com tomate/salada ao lado.",
          "s": null
        },
        {
          "t": "Sirva com mostarda, ketchup e molho cremoso.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut potatoes into fries and air-fry at 200°C for 16 min until crisp.",
          "s": 960
        },
        {
          "t": "Slice sausage (or chicken in fit mode) diagonally and sear 5 min.",
          "s": 300
        },
        {
          "t": "Toss hot fries and meat together on a plate with fresh tomato.",
          "s": null
        },
        {
          "t": "Serve with mustard and creamy sauce.",
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
      "es": "Filete de pescado sellado cubierto con mucha cebolla morada encurtida tibia en vinagre, páprica y batata-doce.",
      "pt": "Peixe grelhado coberto com cebola roxa refogada no vinagre e páprica + batata-doce.",
      "en": "Seared fish blanketed in tangy vinegar-paprika onions and sweet potato."
    },
    "macrosTrad": {
      "kcal": 508,
      "p": 45,
      "c": 32,
      "f": 23
    },
    "macrosFit": {
      "kcal": 451,
      "p": 47,
      "c": 30,
      "f": 16
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 175,
        "fitGrams": 185,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 100,
        "fitGrams": 100,
        "sub": "Cebola roxa",
        "fitId": null
      },
      {
        "id": "batata_doce",
        "grams": 110,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 20,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
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
          "t": "Sazona los filetes de pescado con sal, pimienta y ajo; dóralos 3 min por lado en sartén y colócalos en una fuente.",
          "s": 360
        },
        {
          "t": "En la misma sartén, saltea cebolla morada en gajos gruesos 3 min (debe quedar algo crocante).",
          "s": 180
        },
        {
          "t": "Añade 1 cdta de páprica, 1 cdta de comino, 3 cdas de vinagre tinto/manzana y 2 cdas de agua; hierve 2 min.",
          "s": 120
        },
        {
          "t": "Cubre el pescado con esta cebolla tibia, deja reposar 5 min y sirve con batata-doce cocida, huevo duro y aceituna.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Tempere os filés de peixe e grelhe por 3 min de cada lado; transfira para uma travessa.",
          "s": 360
        },
        {
          "t": "Na mesma frigideira, salteie cebola roxa em gomos grossos por 3 min mantendo firme.",
          "s": 180
        },
        {
          "t": "Junte páprica, cominho, 3 col. de vinagre e 2 col. de água; ferva 2 min.",
          "s": 120
        },
        {
          "t": "Cubra o peixe com a cebola morna e sirva com batata-doce, ovo cozido e azeitona.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Season and sear fish fillets 3 min per side; transfer to platter.",
          "s": 360
        },
        {
          "t": "In the same skillet, toss thick red onion wedges 3 min keeping some crunch.",
          "s": 180
        },
        {
          "t": "Add paprika, cumin, 3 tbsp vinegar, and 2 tbsp water; simmer 2 min.",
          "s": 120
        },
        {
          "t": "Spoon warm onions over fish and serve with sweet potato, boiled egg, and olives.",
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
      "es": "Caldo concentrado de pescado y camarón con tomate, cebolla y mandioca cocida.",
      "pt": "Caldo intenso de peixe e camarão com tomate, cebola roxa e mandioca.",
      "en": "Rich Peruvian fish and shrimp soup with tomato and cassava."
    },
    "macrosTrad": {
      "kcal": 352,
      "p": 43,
      "c": 38,
      "f": 4
    },
    "macrosFit": {
      "kcal": 349,
      "p": 45,
      "c": 35,
      "f": 4
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 130,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 60,
        "sub": "Cebola roxa",
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 90,
        "fitGrams": 80,
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
          "t": "Sofríe cebolla morada, ajo, tomate picado y páprica en olla 5 min hasta formar una pasta espesa.",
          "s": 300
        },
        {
          "t": "Agrega 700 ml de caldo de pescado o agua caliente y hierve 8 min para concentrar sabores.",
          "s": 480
        },
        {
          "t": "Incorpora los trozos de pescado firme y cocina 4 min; luego agrega los camarones limpios solo los últimos 2 min.",
          "s": 360
        },
        {
          "t": "Sirve bien caliente con cilantro fresco, limón y mandioca cocida.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola roxa, alho, tomate e páprica por 5 min.",
          "s": 300
        },
        {
          "t": "Junte 700 ml de caldo ou água quente e ferva por 8 min.",
          "s": 480
        },
        {
          "t": "Adicione o peixe em pedaços por 4 min e os camarões apenas nos últimos 2 min.",
          "s": 360
        },
        {
          "t": "Sirva bem quente com coentro, limão e mandioca.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Sauté red onion, garlic, tomato, and paprika 5 min.",
          "s": 300
        },
        {
          "t": "Pour in 700ml broth/water and simmer 8 min.",
          "s": 480
        },
        {
          "t": "Add fish chunks for 4 min, then shrimp for the last 2 min.",
          "s": 360
        },
        {
          "t": "Serve piping hot with cilantro, lime, and cassava.",
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
      "es": "Chupe de Camarones / Pescado",
      "pt": "Chupe Cremoso de Camarão/Peixe",
      "en": "Peruvian Shrimp Chowder"
    },
    "brTip": {
      "es": "Sopa cremosa con leche, huevo pochado, queso fresco/minas, papa y maíz.",
      "pt": "Sopa cremosa com leite, ovo, queijo minas, batata e milho.",
      "en": "Creamy Peruvian chowder with milk, egg, Minas cheese, potato, and corn."
    },
    "macrosTrad": {
      "kcal": 514,
      "p": 46,
      "c": 42,
      "f": 19
    },
    "macrosFit": {
      "kcal": 434,
      "p": 44,
      "c": 36,
      "f": 13
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 130,
        "fitGrams": 140,
        "sub": "Tilápia em cubos",
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 100,
        "fitGrams": 100,
        "sub": "Leite desnatado",
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
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
        "id": "milho",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sofríe cebolla, ajo, tomate picado y páprica en olla 4 min.",
          "s": 240
        },
        {
          "t": "Agrega 700 ml de caldo/agua, papas en cubos, 2 cdas de arroz crudo y maíz; cocina 14 min hasta ablandar la papa.",
          "s": 840
        },
        {
          "t": "Añade los camarones/pescado, la leche y el queso en cubos; cocina 3 min sin dejar hervir fuerte.",
          "s": 180
        },
        {
          "t": "Rompe 1 huevo dentro del caldo caliente (o sirve huevo pochado encima) y cocina 2 min; termina con orégano.",
          "s": 120
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola, alho, tomate e páprica por 4 min.",
          "s": 240
        },
        {
          "t": "Junte 700 ml de água, batata em cubos, 2 col. de arroz e milho; cozinhe 14 min.",
          "s": 840
        },
        {
          "t": "Adicione camarão/peixe, leite e queijo minas em cubos por 3 min sem ferver forte.",
          "s": 180
        },
        {
          "t": "Quebre 1 ovo direto no caldo quente, cozinhe 2 min e finalize com orégano.",
          "s": 120
        }
      ],
      "en": [
        {
          "t": "Sauté onion, garlic, tomato, and paprika 4 min.",
          "s": 240
        },
        {
          "t": "Add 700ml water, diced potato, 2 tbsp rice, and corn; boil 14 min.",
          "s": 840
        },
        {
          "t": "Stir in shrimp/fish, milk, and cubed Minas cheese for 3 min without hard boiling.",
          "s": 180
        },
        {
          "t": "Poach 1 egg right in the hot broth for 2 min and garnish with oregano.",
          "s": 120
        }
      ]
    },
    "videoQuery": "como hacer Chupe de Camarones / Pescado receta paso a paso"
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
      "kcal": 992,
      "p": 86,
      "c": 92,
      "f": 31
    },
    "macrosFit": {
      "kcal": 929,
      "p": 89,
      "c": 74,
      "f": 30
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 120,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "lombo",
        "grams": 80,
        "fitGrams": 70,
        "sub": "Chicharrón / Lombo crocante",
        "fitId": null
      },
      {
        "id": "feijao",
        "grams": 140,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 80,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cuscuz",
        "grams": 50,
        "fitGrams": 45,
        "sub": "Arepa de milho",
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece los frijoles con zanahoria rallada y cebolla hasta que el caldo quede espeso (si son ya cocidos, hiérvelos 10 min con hogao para espesar).",
          "s": 600
        },
        {
          "t": "Prepara la arepa pequeña: hidrata flocão de milho (o harina PAN) con agua tibia y sal 5 min, forma un disco y asa 4 min por lado en sartén.",
          "s": 480
        },
        {
          "t": "Asa la carne de cerdo (en airfryer 12 min para que quede crocante) y saltea aparte carne molida con cebolla, ajo y comino.",
          "s": 720
        },
        {
          "t": "Dora rodajas de banana-da-terra madura en sartén 2 min por lado y fríe 1 huevo con yema blanda.",
          "s": 240
        },
        {
          "t": "Sirve todo en plato amplio: arroz, frijoles, carne molida, cerdo crocante, huevo encima, arepa, plátano y gajos de aguacate.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o feijão com cenoura ralada e cebola até formar caldo grosso (ou apure o feijão pronto por 10 min).",
          "s": 600
        },
        {
          "t": "Faça a arepa: hidrate o flocão de milho com água morna e sal, molde um disco fino e doure 4 min de cada lado.",
          "s": 480
        },
        {
          "t": "Asse o lombo/panceta na airfryer por 12 min até ficar crocante e refogue a carne moída com cominho.",
          "s": 720
        },
        {
          "t": "Doure rodelas de banana-da-terra por 2 min de cada lado e frite 1 ovo.",
          "s": 240
        },
        {
          "t": "Monte tudo no prato grande com arroz, feijão, carnes, ovo, arepa, banana e abacate.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Simmer beans with grated carrot and onion 10 min until thick.",
          "s": 600
        },
        {
          "t": "Make arepa: hydrate cornmeal with warm salted water, shape a flat disc, and griddle 4 min per side.",
          "s": 480
        },
        {
          "t": "Air-fry pork 12 min until crisp and brown ground beef with cumin.",
          "s": 720
        },
        {
          "t": "Pan-sear plantain slices 2 min per side and fry 1 egg.",
          "s": 240
        },
        {
          "t": "Plate everything together with rice, beans, beef, crisp pork, egg, arepa, plantain, and avocado.",
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
      "es": "Usa mezcla de batata comum (se deshace y espesa) + batata asterix/baroa, mazorca (milho verde), creme de leite/requeijão y aguacate.",
      "pt": "Use batata comum (que derrete e engrossa) + milho verde + creme de leite/requeijão + abacate.",
      "en": "Combine boiling potatoes with sweet corn, chicken, cream, and avocado."
    },
    "macrosTrad": {
      "kcal": 643,
      "p": 64,
      "c": 61,
      "f": 17
    },
    "macrosFit": {
      "kcal": 601,
      "p": 66,
      "c": 51,
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
        "id": "batata",
        "grams": 180,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 90,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "requeijao",
        "grams": 35,
        "fitGrams": 30,
        "sub": "Creme de leite / Requeijão",
        "fitId": null
      },
      {
        "id": "abacate",
        "grams": 50,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
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
          "t": "Pon en olla grande la pechuga de pollo entera con 1 litro de agua, cebolla larga/cebollín, ajo y sal; hierve 18 min y retira el pollo para desmenuzarlo.",
          "s": 1080
        },
        {
          "t": "Al caldo hirviendo agrega las papas peladas en rodajas finas (al deshacerse espesarán la sopa) y trozos de mazorca o maíz verde.",
          "s": null
        },
        {
          "t": "Cocina a fuego medio 20 min removiendo de vez en cuando hasta que parte de la papa se deshaga y el caldo quede cremoso y espeso (si tienes orégano o cilantro, agrégalo).",
          "s": 1200
        },
        {
          "t": "Sirve en tazón con el pollo desmenuzado encima, una cucharada de crema de leche/requeijão, alcaparras opcionales y aguacate al lado.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o peito de frango inteiro em 1 litro de água com cebolinha, alho e sal por 18 min; retire e desfie.",
          "s": 1080
        },
        {
          "t": "No mesmo caldo, coloque batatas em rodelas finas (elas vão desmanchar e engrossar) e milho verde.",
          "s": null
        },
        {
          "t": "Cozinhe por 20 min mexendo às vezes até ficar um caldo cremoso e encorpado.",
          "s": 1200
        },
        {
          "t": "Sirva com frango desfiado por cima, creme de leite ou requeijão e abacate ao lado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Simmer whole chicken breast in 1L water with scallions, garlic, and salt 18 min; shred.",
          "s": 1080
        },
        {
          "t": "Add thinly sliced potatoes and corn to the boiling broth.",
          "s": null
        },
        {
          "t": "Simmer 20 min stirring occasionally as potatoes break down and thicken the soup.",
          "s": 1200
        },
        {
          "t": "Top bowls with shredded chicken, cream/requeijão, and sliced avocado.",
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
      "kcal": 768,
      "p": 66,
      "c": 98,
      "f": 14
    },
    "macrosFit": {
      "kcal": 715,
      "p": 68,
      "c": 79,
      "f": 14
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 165,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 130,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 80,
        "fitGrams": 60,
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
        "grams": 60,
        "fitGrams": 60,
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
          "t": "Hierve los trozos de carne en 1.2 litros de agua con cebolla, ajo, tomate picado, comino y sal durante 25 min (o 15 min en olla a presión) hasta ablandar.",
          "s": 1500
        },
        {
          "t": "Agrega los trozos de mazorca y banana-da-terra en rodajas gruesas; cocina 8 min.",
          "s": 480
        },
        {
          "t": "Añade la mandioca pelada y las papas en trozos grandes; hierve 15 min más hasta que la mandioca y papa estén suaves al pinchar.",
          "s": 900
        },
        {
          "t": "Apaga el fuego, agrega abundante cilantro picado y sirve caliente acompañado de arroz blanco y aguacate.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a carne em 1.2L de água com cebola, alho, tomate e cominho por 25 min até amaciar.",
          "s": 1500
        },
        {
          "t": "Junte o milho e rodelas grossas de banana-da-terra; cozinhe 8 min.",
          "s": 480
        },
        {
          "t": "Adicione mandioca e batata em pedaços grandes e ferva mais 15 min até ficarem macios.",
          "s": 900
        },
        {
          "t": "Finalize com bastante coentro picado e sirva com arroz e abacate.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Simmer beef chunks in 1.2L water with onion, garlic, tomato, and cumin 25 min until tender.",
          "s": 1500
        },
        {
          "t": "Add corn and thick plantain slices; cook 8 min.",
          "s": 480
        },
        {
          "t": "Add peeled cassava and potato chunks; boil 15 min until fork-tender.",
          "s": 900
        },
        {
          "t": "Stir in plenty of fresh cilantro and serve with rice and avocado.",
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
      "kcal": 646,
      "p": 64,
      "c": 33,
      "f": 28
    },
    "macrosFit": {
      "kcal": 578,
      "p": 66,
      "c": 30,
      "f": 20
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
        "id": "cuscuz",
        "grams": 100,
        "fitGrams": 90,
        "sub": "Farinha de milho pré-cozida / Flocão",
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
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 8,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Mezcla 1 taza de harina de maíz precocida (o flocão hidratado molido) con 1 taza de agua tibia, sal y 1 cdta de aceite; amasa 3 min hasta que no se agriete y reposa 5 min.",
          "s": 300
        },
        {
          "t": "Forma bolitas y aplástalas en discos de 1 cm de grosor. Asa en sartén antiadherente a fuego medio-bajo 5 min por lado hasta que suenen huecas al golpearlas.",
          "s": 600
        },
        {
          "t": "Sofríe cebolla, tomate picado y ajo (hogao) 4 min, mezcla la carne desmenuzada/molida y cocina 4 min hasta quedar jugosa.",
          "s": 240
        },
        {
          "t": "Abre las arepas calientes por el borde formando un bolsillo, rellena con queso y la carne caliente.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Misture farinha de milho pré-cozida (ou milharina) com água morna, sal e fio de óleo; sove 3 min e descanse 5 min.",
          "s": 300
        },
        {
          "t": "Modele discos de 1 cm e asse na frigideira em fogo médio-baixo por 5 min de cada lado até criar casquinha.",
          "s": 600
        },
        {
          "t": "Refogue cebola, tomate e alho (hogao) por 4 min e junte a carne desfiada.",
          "s": 240
        },
        {
          "t": "Abra a arepa quente pela lateral e recheie com queijo e a carne.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Mix precooked cornmeal with warm salted water and a drop of oil; knead 3 min and rest 5 min.",
          "s": 300
        },
        {
          "t": "Pat into 1cm discs and griddle over medium-low heat 5 min per side until crisp.",
          "s": 600
        },
        {
          "t": "Sauté onion, tomato, and garlic 4 min; stir in shredded beef.",
          "s": 240
        },
        {
          "t": "Split warm arepas along the edge and stuff with cheese and beef.",
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
      "kcal": 483,
      "p": 24,
      "c": 32,
      "f": 29
    },
    "macrosFit": {
      "kcal": 370,
      "p": 21,
      "c": 30,
      "f": 18
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cuscuz",
        "grams": 105,
        "fitGrams": 95,
        "sub": "Milharina / Flocão",
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
        "id": "cebola",
        "grams": 30,
        "fitGrams": 30,
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
          "t": "Prepara la masa hidratando la harina de maíz con agua tibia y sal hasta que esté suave.",
          "s": null
        },
        {
          "t": "Arma una arepa delgada y ásala en sartén 4 min por lado hasta que infle ligeramente y se forme piel.",
          "s": 480
        },
        {
          "t": "Con un cuchillo, haz una abertura lateral en la arepa tibia, vierte con cuidado 1 huevo crudo con pizca de sal (y queso si gustas) dentro del bolsillo.",
          "s": null
        },
        {
          "t": "Sella el borde apretando con masa húmeda y cocina en sartén tapada a fuego bajo 3 min por lado hasta que el huevo quede cocido.",
          "s": 360
        }
      ],
      "pt": [
        {
          "t": "Hidrate a farinha de milho com água morna e sal até ficar macia.",
          "s": null
        },
        {
          "t": "Modele uma arepa fina e doure na frigideira 4 min de cada lado.",
          "s": 480
        },
        {
          "t": "Abra uma fenda lateral, coloque 1 ovo cru com pitada de sal dentro.",
          "s": null
        },
        {
          "t": "Feche a borda e cozinhe na frigideira tampada em fogo baixo 3 min de cada lado até o ovo firmar.",
          "s": 360
        }
      ],
      "en": [
        {
          "t": "Hydrate cornmeal with warm salted water into soft dough.",
          "s": null
        },
        {
          "t": "Shape thin arepa and griddle 4 min per side.",
          "s": 480
        },
        {
          "t": "Slit side pocket open and slip 1 raw egg with salt inside.",
          "s": null
        },
        {
          "t": "Pinch edge shut and cook covered over low heat 3 min per side until egg sets.",
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
      "kcal": 500,
      "p": 52,
      "c": 49,
      "f": 10
    },
    "macrosFit": {
      "kcal": 507,
      "p": 57,
      "c": 43,
      "f": 11
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 130,
        "fitGrams": 145,
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
        "id": "cuscuz",
        "grams": 95,
        "fitGrams": 85,
        "sub": "Milharina / Farinha de milho",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
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
          "t": "Cuece la papa 15 min y aplástala de forma rústica; mézclala con carne molida dorada y hogao (sofrito de tomate, cebollín, ajo y comino) hasta formar un relleno compacto.",
          "s": 900
        },
        {
          "t": "Prepara la masa mezclando harina de maíz amarilla con agua tibia, sal y 1 cdta de aceite.",
          "s": null
        },
        {
          "t": "Estira bolitas de masa entre dos plásticos hasta dejarlas finas, pon 1 cda de relleno, dobla en media luna y sella los bordes presionando con una taza.",
          "s": null
        },
        {
          "t": "Pincela con aceite y cocina en airfryer a 200°C por 14 min hasta quedar doradas y crocantes; sirve con ají o limón.",
          "s": 840
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a batata 15 min, amasse e misture com carne moída refogada e hogao (tomate e cebolinha).",
          "s": 900
        },
        {
          "t": "Faça a massa misturando farinha de milho amarela, água morna e sal.",
          "s": null
        },
        {
          "t": "Abra discos finos entre plásticos, recheie e feche em meia-lua apertando as bordas.",
          "s": null
        },
        {
          "t": "Pincele azeite e leve à airfryer a 200°C por 14 min até dourar; sirva com limão.",
          "s": 840
        }
      ],
      "en": [
        {
          "t": "Boil potato 15 min, mash roughly, and mix with browned beef and hogao sauce.",
          "s": 900
        },
        {
          "t": "Mix yellow cornmeal with warm salted water into pliable dough.",
          "s": null
        },
        {
          "t": "Press into thin rounds between plastic wrap, fill, fold, and crimp edges.",
          "s": null
        },
        {
          "t": "Brush with oil and air-fry at 200°C for 14 min until crisp; serve with lime.",
          "s": 840
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
      "es": "Con mucho pimentón rojo, zanahoria, arvejas/milho verde y un toque de salsa de tomate o colorau.",
      "pt": "Com pimentão, cenoura, milho/ervilha e toque de extrato de tomate.",
      "en": "Colorful one-pot rice with shredded chicken, bell pepper, carrot, and peas/corn."
    },
    "macrosTrad": {
      "kcal": 506,
      "p": 58,
      "c": 55,
      "f": 5
    },
    "macrosFit": {
      "kcal": 493,
      "p": 61,
      "c": 48,
      "f": 6
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 160,
        "fitGrams": 170,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 100,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "cenoura",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "milho",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la pechuga de pollo en agua con ajo, cebolla y sal 15 min; desmenúzala en tiras y guarda el caldo.",
          "s": 900
        },
        {
          "t": "En olla grande, sofríe cebolla, pimentón en cubitos y tomate 4 min con comino y colorau.",
          "s": 240
        },
        {
          "t": "Agrega el arroz crudo, zanahoria en cubitos y maíz/arvejas; mezcla 2 min.",
          "s": 120
        },
        {
          "t": "Vierte el caldo de pollo caliente (doble volumen del arroz), tapa y cocina a fuego bajo 16 min. Mezcla el pollo desmenuzado los últimos 3 min.",
          "s": 960
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o frango com alho e sal por 15 min; desfie e guarde o caldo.",
          "s": 900
        },
        {
          "t": "Refogue cebola, pimentão e tomate por 4 min com cominho e colorau.",
          "s": 240
        },
        {
          "t": "Adicione arroz cru, cenoura em cubinhos e milho; mexa 2 min.",
          "s": 120
        },
        {
          "t": "Cubra com o caldo quente, tampe e cozinhe 16 min; misture o frango desfiado no final.",
          "s": 960
        }
      ],
      "en": [
        {
          "t": "Poach chicken breast 15 min, shred, and reserve broth.",
          "s": 900
        },
        {
          "t": "Sauté onion, diced bell pepper, and tomato 4 min with cumin and paprika.",
          "s": 240
        },
        {
          "t": "Stir in raw rice, diced carrot, and corn 2 min.",
          "s": 120
        },
        {
          "t": "Pour hot broth, simmer covered 16 min, and fold in shredded chicken for the final 3 min.",
          "s": 960
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
      "kcal": 526,
      "p": 66,
      "c": 34,
      "f": 13
    },
    "macrosFit": {
      "kcal": 522,
      "p": 68,
      "c": 31,
      "f": 13
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 170,
        "fitGrams": 175,
        "sub": "Fraldinha / Patinho",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 100,
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
          "t": "Hierve la carne en olla a presión con cebolla, ajo, laurel y sal 25 min hasta que esté muy blanda (puedes usar fraldinha o patinho).",
          "s": 1500
        },
        {
          "t": "Mientras tanto, prepara la salsa criolla (hogao): sofríe abundante tomate picado, cebollín, ajo y comino a fuego bajo 10 min hasta formar salsa espesa.",
          "s": 600
        },
        {
          "t": "Corta la carne tierna en porciones y pásala a una sartén con la salsa criolla.",
          "s": null
        },
        {
          "t": "Cocina todo junto 5 min para que absorba la salsa y sirve con papas cocidas o doradas y arroz.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a fraldinha/patinho na pressão com cebola, alho e louro por 25 min até ficar bem macia.",
          "s": 1500
        },
        {
          "t": "Enquanto isso, faça o molho hogao refogando tomate bem picado, cebolinha, alho e cominho por 10 min.",
          "s": 600
        },
        {
          "t": "Fatie a carne macia e transfira para a frigideira com o molho.",
          "s": null
        },
        {
          "t": "Apure por 5 min e sirva com batatas cozidas e arroz.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Pressure-cook flank steak with onion, garlic, and bay leaf 25 min until tender.",
          "s": 1500
        },
        {
          "t": "Meanwhile simmer hogao sauce: diced tomato, scallions, garlic, and cumin for 10 min.",
          "s": 600
        },
        {
          "t": "Slice tender beef and nestle into sauce.",
          "s": null
        },
        {
          "t": "Simmer 5 min to coat and serve with boiled potatoes and rice.",
          "s": 300
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
      "kcal": 622,
      "p": 45,
      "c": 60,
      "f": 23
    },
    "macrosFit": {
      "kcal": 582,
      "p": 45,
      "c": 50,
      "f": 23
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 170,
        "fitGrams": 170,
        "sub": "Peito de frango",
        "fitId": null
      },
      {
        "id": "mandioca",
        "grams": 110,
        "fitGrams": 90,
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
        "id": "tomate",
        "grams": 100,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Sazona el pollo con ajo, comino, colorau/páprica y sal.",
          "s": null
        },
        {
          "t": "Sofríe cebolla, tomate picado y cebollín en olla 4 min; acomoda el pollo encima y sella 3 min por lado.",
          "s": 420
        },
        {
          "t": "Agrega papas y mandioca en trozos medianos con 1 taza de agua/caldo.",
          "s": null
        },
        {
          "t": "Tapa y cocina a fuego medio 20 min hasta que la mandioca y papa estén tiernas y el caldo se reduzca a salsa ligera.",
          "s": 1200
        }
      ],
      "pt": [
        {
          "t": "Tempere o frango com alho, cominho, colorau e sal.",
          "s": null
        },
        {
          "t": "Refogue cebola, tomate e cebolinha por 4 min; sele o frango por 3 min de cada lado.",
          "s": 420
        },
        {
          "t": "Junte batata e mandioca em pedaços com 1 xícara de água.",
          "s": null
        },
        {
          "t": "Tampe e cozinhe por 20 min até amaciar tudo e encorpar o molho.",
          "s": 1200
        }
      ],
      "en": [
        {
          "t": "Season chicken with garlic, cumin, paprika, and salt.",
          "s": null
        },
        {
          "t": "Sauté onion, tomato, and scallions 4 min; sear chicken 3 min per side.",
          "s": 420
        },
        {
          "t": "Add potato and cassava chunks with 1 cup water.",
          "s": null
        },
        {
          "t": "Simmer covered 20 min until roots are tender and broth reduces.",
          "s": 1200
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
      "es": "En Brasil usa acém, músculo o patinho cocido en olla a presión y salteado en hogao colombiano.",
      "pt": "Use acém, músculo ou patinho cozido na pressão, desfiado e refogado no hogao.",
      "en": "Pressure-cooked Brazilian beef shredded and tossed in tomato-scallion hogao."
    },
    "macrosTrad": {
      "kcal": 644,
      "p": 67,
      "c": 63,
      "f": 13
    },
    "macrosFit": {
      "kcal": 601,
      "p": 68,
      "c": 50,
      "f": 14
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 170,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 110,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 40,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "banana_terra",
        "grams": 70,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece la carne en olla a presión con agua, cebolla, ajo y laurel 25 min hasta poder deshebrar fácil.",
          "s": 1500
        },
        {
          "t": "Deja entibiar y desmecha en hebras finas con dos tenedores.",
          "s": null
        },
        {
          "t": "Prepara el hogao sofriendo tomate picado, cebollín, pimentón, ajo y comino 6 min hasta hacer salsa.",
          "s": 360
        },
        {
          "t": "Agrega la carne desmechada y 3 cdas del caldo de cocción; saltea 4 min y sirve con arroz y plátano maduro.",
          "s": 240
        }
      ],
      "pt": [
        {
          "t": "Cozinhe a carne na pressão com cebola, alho e louro por 25 min.",
          "s": 1500
        },
        {
          "t": "Deixe amornar e desfie em tiras finas.",
          "s": null
        },
        {
          "t": "Faça o hogao refogando tomate, cebolinha, pimentão, alho e cominho por 6 min.",
          "s": 360
        },
        {
          "t": "Misture a carne desfiada com um pouco do caldo por 4 min; sirva com arroz e banana.",
          "s": 240
        }
      ],
      "en": [
        {
          "t": "Pressure-cook beef 25 min until easily shreddable.",
          "s": 1500
        },
        {
          "t": "Cool slightly and shred finely with two forks.",
          "s": null
        },
        {
          "t": "Sauté tomato, scallions, bell pepper, garlic, and cumin 6 min into hogao sauce.",
          "s": 360
        },
        {
          "t": "Toss shredded beef with sauce and splash of broth 4 min; serve with rice and plantain.",
          "s": 240
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
      "es": "Del Caribe colombiano: leite de coco + tomate + pimentão + peixe e camarão.",
      "pt": "Do Caribe colombiano: leite de coco, tomate, pimentão, tilápia e camarão.",
      "en": "Colombian Caribbean coconut milk stew with white fish and shrimp."
    },
    "macrosTrad": {
      "kcal": 500,
      "p": 44,
      "c": 37,
      "f": 20
    },
    "macrosFit": {
      "kcal": 443,
      "p": 45,
      "c": 29,
      "f": 17
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 120,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite_coco",
        "grams": 90,
        "fitGrams": 70,
        "sub": "Leite de coco light",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sazona el pescado y camarones con limón, ajo y sal.",
          "s": null
        },
        {
          "t": "Sofríe cebolla, pimentón, zanahoria rallada y tomate 5 min con páprica y comino.",
          "s": 300
        },
        {
          "t": "Vierte el leite de coco y 1/2 taza de caldo de pescado; cocina 5 min hasta espesar ligeramente.",
          "s": 300
        },
        {
          "t": "Añade los trozos de pescado 4 min y los camarones los últimos 2 min. Sirve con arroz y patacones/mandioca.",
          "s": 360
        }
      ],
      "pt": [
        {
          "t": "Tempere o peixe e o camarão com limão, alho e sal.",
          "s": null
        },
        {
          "t": "Refogue cebola, pimentão, cenoura ralada e tomate por 5 min com páprica.",
          "s": 300
        },
        {
          "t": "Junte o leite de coco e caldo; ferva 5 min até encorpar.",
          "s": 300
        },
        {
          "t": "Cozinhe o peixe 4 min e o camarão nos últimos 2 min; sirva com arroz.",
          "s": 360
        }
      ],
      "en": [
        {
          "t": "Season fish and shrimp with lime, garlic, and salt.",
          "s": null
        },
        {
          "t": "Sauté onion, bell pepper, grated carrot, and tomato 5 min with paprika.",
          "s": 300
        },
        {
          "t": "Add coconut milk and broth; simmer 5 min.",
          "s": 300
        },
        {
          "t": "Poach fish 4 min and shrimp for the final 2 min; serve with rice.",
          "s": 360
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
      "kcal": 521,
      "p": 41,
      "c": 41,
      "f": 21
    },
    "macrosFit": {
      "kcal": 446,
      "p": 42,
      "c": 33,
      "f": 17
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 175,
        "fitGrams": 185,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 120,
        "fitGrams": 100,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "leite_coco",
        "grams": 100,
        "fitGrams": 70,
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
        "id": "tomate",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "En olla mediana, hierve la mitad del leite de coco a fuego medio-alto hasta que reduzca y quede aceitoso y doradito (titoté) — unos 6 min.",
          "s": 360
        },
        {
          "t": "Agrega el arroz lavado, el resto del leite de coco, 1 taza de agua y pizca de sal (y 1 cdta de azúcar/edulcorante opcional); cocina tapado 16 min.",
          "s": 960
        },
        {
          "t": "Mientras tanto, sazona los filetes de pescado con limón, ajo y sal; dóralos en sartén 3 min por lado.",
          "s": 360
        },
        {
          "t": "Sirve el arroz de coco aromático junto al pescado y ensalada fresca.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Ferva metade do leite de coco até reduzir e dourar os pedacinhos (titoté) — cerca de 6 min.",
          "s": 360
        },
        {
          "t": "Junte o arroz, o restante do leite de coco, água e sal; cozinhe tampado por 16 min.",
          "s": 960
        },
        {
          "t": "Tempere os filés de peixe com limão e alho e grelhe 3 min de cada lado.",
          "s": 360
        },
        {
          "t": "Sirva o arroz de coco aromático com o peixe e salada.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil half the coconut milk 6 min until reduced and golden brown.",
          "s": 360
        },
        {
          "t": "Stir in rice, remaining coconut milk, water, and salt; simmer covered 16 min.",
          "s": 960
        },
        {
          "t": "Season fish fillets with lime and garlic; sear 3 min per side.",
          "s": 360
        },
        {
          "t": "Serve fragrant coconut rice alongside fish and salad.",
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
      "kcal": 540,
      "p": 33,
      "c": 45,
      "f": 25
    },
    "macrosFit": {
      "kcal": 424,
      "p": 26,
      "c": 36,
      "f": 19
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 180,
        "fitGrams": 180,
        "sub": "Leite desnatado",
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 60,
        "fitGrams": 0,
        "sub": "Pão integral / Tapioca",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 35,
        "fitGrams": 30,
        "sub": null,
        "fitId": "ricota"
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
          "t": "En una olla pequeña, calienta partes iguales de leche y agua con sal, pimienta y tallos de cebollín picados.",
          "s": null
        },
        {
          "t": "Cuando empiece a hervir suave (sin rebalsar), baja el fuego al mínimo.",
          "s": null
        },
        {
          "t": "Rompe los huevos con cuidado directo en el caldo y deja pochar 3–4 min hasta que la clara cuaje y la yema siga cremosa.",
          "s": 210
        },
        {
          "t": "Sirve en tazón hondo sobre trozos de pan (calado) y cubos de queijo minas con abundante cilantro fresco encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Aqueça partes iguais de leite e água com sal, pimenta e cebolinha picada.",
          "s": null
        },
        {
          "t": "Assim que iniciar fervura leve, abaixe o fogo ao mínimo.",
          "s": null
        },
        {
          "t": "Quebre os ovos com cuidado direto no caldo e cozinhe por 3–4 min até a clara firmar.",
          "s": 210
        },
        {
          "t": "Sirva no prato fundo sobre pedaços de pão e cubos de queijo minas com coentro fresco.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Heat equal parts milk and water with salt, pepper, and chopped scallions.",
          "s": null
        },
        {
          "t": "At a gentle simmer, lower heat to minimum.",
          "s": null
        },
        {
          "t": "Carefully crack eggs directly into broth and poach 3–4 min until whites set.",
          "s": 210
        },
        {
          "t": "Ladle into bowls over torn bread and Minas cheese cubes with fresh cilantro.",
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
      "es": "Huevos revueltos jugosos sobre sofrito de tomate y cebollín, servidos con arepa de flocão y queso.",
      "pt": "Ovos mexidos cremosos com refogado de tomate e cebolinha servidos com arepa.",
      "en": "Soft scrambled eggs cooked into tomato-scallion sofrito with corn arepa."
    },
    "macrosTrad": {
      "kcal": 420,
      "p": 29,
      "c": 28,
      "f": 21
    },
    "macrosFit": {
      "kcal": 358,
      "p": 26,
      "c": 26,
      "f": 17
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 150,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 20,
        "fitGrams": 20,
        "sub": "Cebolinha",
        "fitId": null
      },
      {
        "id": "cuscuz",
        "grams": 80,
        "fitGrams": 70,
        "sub": "Arepa de flocão",
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 35,
        "fitGrams": 30,
        "sub": null,
        "fitId": "ricota"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Asa la arepa en sartén 4 min por lado hasta quedar dorada.",
          "s": 480
        },
        {
          "t": "Mientras tanto, sofríe cebollín picado fino 1 min y añade tomate pelado y picado en cubitos sin semillas; cocina 3 min hasta ablandar.",
          "s": 240
        },
        {
          "t": "Bate los huevos con sal y viértelos sobre el tomate a fuego bajo.",
          "s": null
        },
        {
          "t": "Mueve suavemente con espátula 2 min hasta que queden jugosos y cremosos; sirve junto a la arepa con queso encima.",
          "s": 120
        }
      ],
      "pt": [
        {
          "t": "Doure a arepa na frigideira por 4 min de cada lado.",
          "s": 480
        },
        {
          "t": "Refogue cebolinha e tomate picadinho sem sementes por 3 min até murchar.",
          "s": 240
        },
        {
          "t": "Junte os ovos batidos com sal em fogo baixo.",
          "s": null
        },
        {
          "t": "Mexa devagar por 2 min mantendo bem cremoso e sirva com a arepa e queijo.",
          "s": 120
        }
      ],
      "en": [
        {
          "t": "Griddle arepa 4 min per side until golden.",
          "s": 480
        },
        {
          "t": "Sauté finely chopped scallions and diced seeded tomato 3 min.",
          "s": 240
        },
        {
          "t": "Pour in beaten salted eggs over low heat.",
          "s": null
        },
        {
          "t": "Stir gently 2 min until soft and curdy; serve with warm arepa and cheese.",
          "s": 120
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
      "kcal": 639,
      "p": 49,
      "c": 80,
      "f": 14
    },
    "macrosFit": {
      "kcal": 631,
      "p": 53,
      "c": 67,
      "f": 17
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 150,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "lombo",
        "grams": 130,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 80,
        "fitGrams": 60,
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
        "id": "tomate",
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 90,
        "fitGrams": 75,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cocina los frijoles junto con zanahoria rallada y cubitos pequeños de plátano/banana-da-terra durante 15 min (eso espesa el caldo naturalmente).",
          "s": 900
        },
        {
          "t": "Prepara hogao sofriendo tomate picado, cebollín, ajo y comino 5 min y mézclalo a los frijoles.",
          "s": 300
        },
        {
          "t": "Aparte dora cubos de lomo de cerdo (o carne magra) 5 min hasta quedar crocantes.",
          "s": 300
        },
        {
          "t": "Sirve los frijoles espesos con la carne encima y arroz blanco.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe o feijão com cenoura ralada e cubinhos de banana-da-terra por 15 min para engrossar.",
          "s": 900
        },
        {
          "t": "Faça um hogao de tomate, cebolinha e alho por 5 min e misture ao feijão.",
          "s": 300
        },
        {
          "t": "Doure cubos de lombo suíno à parte por 5 min.",
          "s": 300
        },
        {
          "t": "Sirva o feijão bem cremoso com o lombo por cima e arroz.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Simmer beans with grated carrot and diced plantain 15 min to thicken broth naturally.",
          "s": 900
        },
        {
          "t": "Sauté tomato, scallions, and garlic 5 min; stir into beans.",
          "s": 300
        },
        {
          "t": "Brown pork cubes separately for 5 min.",
          "s": 300
        },
        {
          "t": "Serve thick beans topped with seared pork and rice.",
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
      "kcal": 555,
      "p": 54,
      "c": 41,
      "f": 18
    },
    "macrosFit": {
      "kcal": 539,
      "p": 55,
      "c": 34,
      "f": 19
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 175,
        "fitGrams": 180,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "cebola",
        "grams": 50,
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
        "id": "brocolis",
        "grams": 80,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta el lomo de cerdo en medallones de 2 cm y sazona con ajo, sal y pimienta.",
          "s": null
        },
        {
          "t": "Dora los medallones en sartén caliente 4 min por lado hasta sellar; retira un momento.",
          "s": 480
        },
        {
          "t": "Licúa 1 taza de piña (abacaxi) fresca con 1/3 taza de agua; vierte en la sartén con cebolla rallada y hierve 4 min hasta caramelizar.",
          "s": 240
        },
        {
          "t": "Devuelve el cerdo 3 min más para que absorba el glaseado brillante y sirve con arroz y brócoli.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Corte o lombo em medalhões de 2 cm e tempere com alho, sal e pimenta.",
          "s": null
        },
        {
          "t": "Doure na frigideira quente por 4 min de cada lado e reserve.",
          "s": 480
        },
        {
          "t": "Bata 1 xícara de abacaxi fresco com pouca água; despeje na frigideira com cebola e reduza por 4 min.",
          "s": 240
        },
        {
          "t": "Volte o lombo por 3 min para glacear e sirva com arroz e brócolis.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Slice pork loin into 2cm medallions and season with garlic, salt, and pepper.",
          "s": null
        },
        {
          "t": "Sear 4 min per side until golden; remove briefly.",
          "s": 480
        },
        {
          "t": "Blend fresh pineapple with a splash of water; simmer in pan with grated onion 4 min.",
          "s": 240
        },
        {
          "t": "Return pork 3 min to glaze and serve with rice and broccoli.",
          "s": 180
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
      "es": "Papas cocidas bañadas en salsa cremosa de hogao (tomate + cebollín) con queijo minas derretido.",
      "pt": "Batatas cozidas cobertas com molho hogao cremoso e queijo minas derretido.",
      "en": "Boiled potatoes smothered in creamy tomato-scallion cheese sauce."
    },
    "macrosTrad": {
      "kcal": 548,
      "p": 59,
      "c": 38,
      "f": 18
    },
    "macrosFit": {
      "kcal": 464,
      "p": 60,
      "c": 32,
      "f": 10
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 170,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 130,
        "fitGrams": 150,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cheiro_verde",
        "grams": 20,
        "fitGrams": 20,
        "sub": "Cebolinha",
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
        "id": "requeijao",
        "grams": 30,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece las papas enteras o en mitades con cáscara en agua con sal 18 min hasta que estén suaves.",
          "s": 1080
        },
        {
          "t": "Sofríe cebollín picado y tomate en cubitos 5 min con comino y sal; baja el fuego y agrega crema/requeijão y queso rallado hasta fundir.",
          "s": 300
        },
        {
          "t": "Aparte sella filetes de pechuga de pollo a la plancha 4 min por lado.",
          "s": 480
        },
        {
          "t": "Coloca las papas calientes en el plato, báñalas con la salsa cremosa de queso y acompaña con el pollo.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe as batatas com casca em água e sal por 18 min até amaciarem.",
          "s": 1080
        },
        {
          "t": "Refogue cebolinha e tomate por 5 min; abaixe o fogo e misture requeijão e queijo até derreter.",
          "s": 300
        },
        {
          "t": "Grelhe o frango à parte por 4 min de cada lado.",
          "s": 480
        },
        {
          "t": "Cubra as batatas quentes com o molho cremoso de queijo e sirva com o frango.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil potatoes in salted water 18 min until fork-tender.",
          "s": 1080
        },
        {
          "t": "Sauté scallions and tomato 5 min; lower heat and melt in requeijão and cheese.",
          "s": 300
        },
        {
          "t": "Sear chicken breast separately 4 min per side.",
          "s": 480
        },
        {
          "t": "Spoon warm cheese-hogao sauce over potatoes and serve with chicken.",
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
      "es": "Mojarra / Tilapia Costeña con Arroz y Patacón",
      "pt": "Tilápia Costeña Crocante",
      "en": "Colombian Coastal Crisp Tilapia"
    },
    "brTip": {
      "es": "En Colombia la mojarra es de la misma familia que la tilápia de Brasil; acompáñala con mandioca o banana-da-terra.",
      "pt": "A mojarra colombiana é prima direta da tilápia brasileira; sirva com limão e banana-da-terra.",
      "en": "Colombian coastal fish style adapted directly with Brazilian tilapia and plantain."
    },
    "macrosTrad": {
      "kcal": 430,
      "p": 42,
      "c": 61,
      "f": 4
    },
    "macrosFit": {
      "kcal": 392,
      "p": 43,
      "c": 49,
      "f": 4
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 185,
        "fitGrams": 195,
        "sub": null,
        "fitId": null
      },
      {
        "id": "banana_terra",
        "grams": 90,
        "fitGrams": 70,
        "sub": "Banana-da-terra ou mandioca",
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 90,
        "fitGrams": 75,
        "sub": "Arroz Integral",
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
        "id": "limao",
        "grams": 25,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sazona los filetes (o pescado entero con cortes) con ajo machacado, limón y sal durante 15 min.",
          "s": 900
        },
        {
          "t": "Pasa ligeramente por harina/maicena (opcional) y cocina en sartén caliente o airfryer 12 min hasta quedar bien crocante.",
          "s": 720
        },
        {
          "t": "Corta banana-da-terra verde en trozos gruesos, dora 3 min, aplasta con un vaso y vuelve a dorar 2 min por lado (patacón).",
          "s": 300
        },
        {
          "t": "Sirve el pescado crocante con limón, patacones, arroz y ensalada de tomate y cebolla.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Tempere a tilápia com alho, limão e sal por 15 min.",
          "s": 900
        },
        {
          "t": "Grelhe ou leve à airfryer por 12 min até ficar bem dourada e crocante.",
          "s": 720
        },
        {
          "t": "Corte banana-da-terra em rodelas grossas, doure 3 min, amasse e doure mais 2 min.",
          "s": 300
        },
        {
          "t": "Sirva com arroz, salada fresca e limão.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Marinate tilapia with garlic, lime, and salt 15 min.",
          "s": 900
        },
        {
          "t": "Pan-sear or air-fry 12 min until crisp and golden.",
          "s": 720
        },
        {
          "t": "Cook thick plantain rounds 3 min, smash flat, and crisp 2 min per side.",
          "s": 300
        },
        {
          "t": "Serve fish with crisp plantains, rice, and tomato salad.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Mojarra / Tilapia Costeña con Arroz y Patacón receta paso a paso"
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
      "kcal": 551,
      "p": 43,
      "c": 61,
      "f": 14
    },
    "macrosFit": {
      "kcal": 529,
      "p": 47,
      "c": 48,
      "f": 16
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 130,
        "fitGrams": 145,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 125,
        "fitGrams": 100,
        "sub": "Arroz Integral",
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
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Corta el cerdo (y pollo si mezclas carnes) en cubos y dóralos en olla 5 min con ajo y comino.",
          "s": 300
        },
        {
          "t": "Agrega cebolla, tomate y pimentón picados; sofríe 4 min.",
          "s": 240
        },
        {
          "t": "Añade el arroz crudo y papas en cubitos; vierte 3 partes de caldo por cada 1 de arroz (lleva más agua que el arroz normal).",
          "s": null
        },
        {
          "t": "Cocina destapado a fuego medio-bajo 18 min removiendo ocasionalmente hasta que quede húmedo y cremoso ('atollado'); termina con cilantro.",
          "s": 1080
        }
      ],
      "pt": [
        {
          "t": "Doure cubos de lombo suíno na panela por 5 min com alho e cominho.",
          "s": 300
        },
        {
          "t": "Junte cebola, tomate e pimentão e refogue por 4 min.",
          "s": 240
        },
        {
          "t": "Adicione arroz cru, batata em cubinhos e o triplo de caldo (fica bem úmido).",
          "s": null
        },
        {
          "t": "Cozinhe em fogo médio-baixo por 18 min mexendo às vezes até ficar cremoso; finalize com coentro.",
          "s": 1080
        }
      ],
      "en": [
        {
          "t": "Brown pork cubes in a pot 5 min with garlic and cumin.",
          "s": 300
        },
        {
          "t": "Add onion, tomato, and pepper; sauté 4 min.",
          "s": 240
        },
        {
          "t": "Stir in raw rice, diced potato, and 3x volume of broth.",
          "s": null
        },
        {
          "t": "Simmer 18 min stirring occasionally until creamy and brothy; garnish with cilantro.",
          "s": 1080
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
      "es": "Con milho verde fresco o en lata de Brasil licuado con huevo y avena/flocão + mucho queijo minas frescal.",
      "pt": "Feita com milho verde batido no liquidificador com ovo e flocão + queijo minas.",
      "en": "Blended Brazilian sweet corn griddle cake filled with melted Minas cheese."
    },
    "macrosTrad": {
      "kcal": 564,
      "p": 30,
      "c": 60,
      "f": 25
    },
    "macrosFit": {
      "kcal": 445,
      "p": 24,
      "c": 57,
      "f": 15
    },
    "ingredients": [
      {
        "id": "milho",
        "grams": 150,
        "fitGrams": 140,
        "sub": "Milho verde",
        "fitId": null
      },
      {
        "id": "minas",
        "grams": 65,
        "fitGrams": 45,
        "sub": "Queijo minas frescal",
        "fitId": "ricota"
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "aveia",
        "grams": 35,
        "fitGrams": 35,
        "sub": "Flocão / Aveia",
        "fitId": null
      },
      {
        "id": "leite",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Licúa los granos de maíz verde escurridos con 1 huevo, leche, avena/harina de maíz y pizca de sal (y 1 cdta de azúcar/edulcorante) hasta obtener una mezcla espesa.",
          "s": null
        },
        {
          "t": "Calienta sartén antiadherente a fuego bajo y vierte un cucharón formando una tortita redonda.",
          "s": null
        },
        {
          "t": "Cocina tapada 3 min hasta que aparezcan burbujitas y el borde dore; voltea con cuidado y dora 2 min más.",
          "s": 300
        },
        {
          "t": "Coloca rebanadas generosas de queijo minas frescal encima, dobla por la mitad y deja fundir 1 min.",
          "s": 60
        }
      ],
      "pt": [
        {
          "t": "Bata no liquidificador milho verde escorrido, ovo, leite, aveia/flocão e pitada de sal até ficar cremoso.",
          "s": null
        },
        {
          "t": "Despeje uma concha em frigideira antiaderente em fogo baixo.",
          "s": null
        },
        {
          "t": "Cozinhe tampado por 3 min até formar furinhos; vire e doure mais 2 min.",
          "s": 300
        },
        {
          "t": "Coloque fatias de queijo minas por cima, dobre ao meio e derreta por 1 min.",
          "s": 60
        }
      ],
      "en": [
        {
          "t": "Blend drained sweet corn, egg, milk, oats/cornmeal, and salt into a thick batter.",
          "s": null
        },
        {
          "t": "Ladle onto a low-heat non-stick skillet.",
          "s": null
        },
        {
          "t": "Cook covered 3 min until bubbles appear; flip and cook 2 more min.",
          "s": 300
        },
        {
          "t": "Top with thick Minas cheese slices, fold over, and melt 1 min.",
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
      "es": "Paella Valenciana / Mixta",
      "pt": "Paella Espanhola Tradicional",
      "en": "Spanish Paella"
    },
    "brTip": {
      "es": "En Brasil: azafrán → açafrão-da-terra (cúrcuma) + colorau/páprica; arroz bomba → arroz parboilizado o arroz arbóreo.",
      "pt": "No Brasil: açafrão-da-terra (cúrcuma) + páprica; arroz parboilizado ou arbóreo.",
      "en": "In Brazil: saffron sub → turmeric + paprika; use parboiled or arborio rice."
    },
    "macrosTrad": {
      "kcal": 600,
      "p": 59,
      "c": 44,
      "f": 20
    },
    "macrosFit": {
      "kcal": 534,
      "p": 65,
      "c": 36,
      "f": 14
    },
    "ingredients": [
      {
        "id": "frango",
        "grams": 120,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 130,
        "fitGrams": 105,
        "sub": "Arroz parboilizado/integral",
        "fitId": "arroz"
      },
      {
        "id": "pimentao",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 8,
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
          "t": "En sartén bien ancha y baja (paellera), calienta aceite de oliva y dora los trozos de pollo sazonados 6 min; aparta hacia los bordes.",
          "s": 360
        },
        {
          "t": "En el centro, sofríe ajo picado, pimentón en tiras y tomate rallado 4 min con 1 cdta de páprica dulce y cúrcuma.",
          "s": 240
        },
        {
          "t": "Agrega el arroz crudo y remueve 2 min para nacarar; luego vierte caldo caliente (2.5 partes por 1 de arroz) y reparte parejo.",
          "s": 120
        },
        {
          "t": "Cocina sin revolver el arroz: 8 min a fuego medio-alto y luego 10 min a fuego bajo. Los últimos 4 min acomoda los camarones encima hasta que se pongan rosados.",
          "s": 1080
        },
        {
          "t": "Apaga, cubre con un paño limpio 5 min para que repose y sirve con gajos de limón.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Em frigideira bem larga, doure o frango temperado no azeite por 6 min.",
          "s": 360
        },
        {
          "t": "No centro, refogue alho, pimentão e tomate ralado por 4 min com páprica e cúrcuma.",
          "s": 240
        },
        {
          "t": "Junte o arroz cru, mexa 2 min e adicione caldo quente (2.5 partes para 1 de arroz).",
          "s": 120
        },
        {
          "t": "Cozinhe sem mexer o arroz por 18 min (os últimos 4 min com o camarão por cima).",
          "s": 1080
        },
        {
          "t": "Desligue, cubra com pano limpo por 5 min para assentar e sirva com limão.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Brown seasoned chicken pieces in olive oil in a wide shallow pan 6 min.",
          "s": 360
        },
        {
          "t": "Sauté garlic, bell pepper, and grated tomato 4 min with paprika and turmeric.",
          "s": 240
        },
        {
          "t": "Stir in raw rice 2 min, then pour in hot broth (2.5x rice volume).",
          "s": 120
        },
        {
          "t": "Simmer without stirring 18 min, placing shrimp on top for the last 4 min.",
          "s": 1080
        },
        {
          "t": "Rest covered with a clean cloth 5 min and serve with lemon wedges.",
          "s": 300
        }
      ]
    },
    "videoQuery": "como hacer Paella Valenciana / Mixta receta paso a paso"
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
      "kcal": 593,
      "p": 28,
      "c": 39,
      "f": 36
    },
    "macrosFit": {
      "kcal": 464,
      "p": 27,
      "c": 34,
      "f": 24
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 180,
        "fitGrams": 180,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 170,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 20,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Pela las papas y córtalas en láminas finas e irregulares (3 mm); corta la cebolla en julianas finas.",
          "s": null
        },
        {
          "t": "Cocina las papas y cebolla en sartén tapada con aceite de oliva a fuego medio-bajo 15 min moviendo suave hasta que estén muy tiernas sin dorarse crujientes (en modo fit: 12 min en airfryer).",
          "s": 900
        },
        {
          "t": "Bate 3 huevos en un bol grande con sal; agrega las papas tibias escurridas aplastando un poco con el tenedor y deja reposar 5 min para que se empapen.",
          "s": 300
        },
        {
          "t": "En sartén pequeña antiadherente caliente, vierte la mezcla, cocina 3 min a fuego medio-bajo moviendo los bordes; voltea con ayuda de un plato y cuaja 2 min más dejando el centro jugoso.",
          "s": 300
        }
      ],
      "pt": [
        {
          "t": "Descasque as batatas e corte em lâminas bem finas (3 mm); fatie a cebola.",
          "s": null
        },
        {
          "t": "Cozinhe batata e cebola em fogo baixo no azeite com tampa por 15 min até amaciar (ou 12 min na airfryer).",
          "s": 900
        },
        {
          "t": "Bata 3 ovos com sal, misture as batatas mornas e deixe descansar 5 min.",
          "s": 300
        },
        {
          "t": "Despeje em frigideira pequena quente por 3 min, vire usando um prato e doure mais 2 min mantendo o centro cremoso.",
          "s": 300
        }
      ],
      "en": [
        {
          "t": "Peel and thinly slice potatoes (3mm) and onion.",
          "s": null
        },
        {
          "t": "Slow-cook potato and onion in olive oil covered 15 min until tender (or air-fry 12 min).",
          "s": 900
        },
        {
          "t": "Beat 3 eggs with salt, fold in warm potatoes, and soak 5 min.",
          "s": 300
        },
        {
          "t": "Pour into small hot skillet 3 min, flip using a plate, and cook 2 more min keeping center tender.",
          "s": 300
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
      "kcal": 366,
      "p": 14,
      "c": 32,
      "f": 22
    },
    "macrosFit": {
      "kcal": 333,
      "p": 20,
      "c": 18,
      "f": 21
    },
    "ingredients": [
      {
        "id": "tomate",
        "grams": 220,
        "fitGrams": 240,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pepino",
        "grams": 70,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 50,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 30,
        "fitGrams": 0,
        "sub": "Sem pão no modo fit",
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 10,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 60,
        "fitGrams": 120,
        "sub": "Ovo cozido para proteína",
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Lava y trocea tomates bien maduros, pepino pelado (sin semillas si son grandes), pimentón verde/rojo y medio diente de ajo (sin el germen central para que no repita).",
          "s": null
        },
        {
          "t": "Remoja 1 trozo de pan sin corteza en agua fría y vinagre de manzana/vino (omite el pan en versión low-carb).",
          "s": null
        },
        {
          "t": "Licúa todo a máxima potencia 2 minutos hasta quedar totalmente liso; luego agrega el aceite de oliva en hilo y sal para emulsionar.",
          "s": 120
        },
        {
          "t": "Pasa por colador fino, refrigera mínimo 30 min (se toma bien frío!) y sirve con huevo duro picado y cubitos de pepino encima.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Lave e pique tomates bem maduros, pepino descascado, pimentão e meio dente de alho (sem o miolo).",
          "s": null
        },
        {
          "t": "Umedeça um pedaço de pão sem casca com água fria e vinagre (omita no modo fit).",
          "s": null
        },
        {
          "t": "Bata tudo no liquidificador por 2 min em potência máxima; junte o azeite aos poucos com sal.",
          "s": 120
        },
        {
          "t": "Coe, leve à geladeira para servir bem gelado com ovo cozido picado e pepino por cima.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Chop ripe tomatoes, peeled cucumber, bell pepper, and half a garlic clove.",
          "s": null
        },
        {
          "t": "Soak crustless bread in cold water and vinegar (omit in fit mode).",
          "s": null
        },
        {
          "t": "Blend at high speed 2 min until smooth, streaming in olive oil and salt.",
          "s": 120
        },
        {
          "t": "Strain, chill thoroughly, and serve cold topped with chopped boiled egg and cucumber.",
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
      "es": "Gambas / Tilapia al Ajillo",
      "pt": "Camarão ou Peixe ao Alho Espanhol",
      "en": "Spanish Garlic Chili Shrimp/Fish"
    },
    "brTip": {
      "es": "Aceite de oliva aromático con mucho ajo laminado y pimenta calabresa/dedo-de-moça; listo en 10 minutos.",
      "pt": "Azeite aromatizado com bastante alho em lâminas e pimenta calabresa.",
      "en": "Olive oil infused with sliced garlic and chili flakes, ready in 10 minutes."
    },
    "macrosTrad": {
      "kcal": 532,
      "p": 38,
      "c": 40,
      "f": 25
    },
    "macrosFit": {
      "kcal": 367,
      "p": 36,
      "c": 25,
      "f": 14
    },
    "ingredients": [
      {
        "id": "camarao",
        "grams": 170,
        "fitGrams": 180,
        "sub": "Tilápia em cubos",
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 25,
        "fitGrams": 25,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 22,
        "fitGrams": 12,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pao",
        "grams": 60,
        "fitGrams": 0,
        "sub": "Arroz ou mandioca",
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 0,
        "fitGrams": 100,
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
          "t": "Seca muy bien los camarones pelados (o cubos de tilapia) con papel toalla y sazónalos con sal.",
          "s": null
        },
        {
          "t": "Lamina los dientes de ajo en rodajas finas y colócalos en sartén fría con el aceite de oliva y guindilla/pimenta calabresa.",
          "s": null
        },
        {
          "t": "Enciende el fuego medio-bajo y deja que el ajo perfume el aceite 2 min apenas empiece a dorar por los bordes (¡nunca lo quemes o amarga!).",
          "s": 120
        },
        {
          "t": "Sube el fuego a alto, echa los camarones y saltea rápido 2–3 min hasta que cambien a color rosado. Espolvorea perejil y sirve caliente.",
          "s": 150
        }
      ],
      "pt": [
        {
          "t": "Seque bem os camarões limpos (ou cubos de tilápia) e tempere com sal.",
          "s": null
        },
        {
          "t": "Fatie o alho em lâminas finas e coloque na frigideira ainda fria com azeite e pimenta calabresa.",
          "s": null
        },
        {
          "t": "Ligue em fogo médio-baixo por 2 min até o alho perfumar e começar a dourar levemente (sem queimar!).",
          "s": 120
        },
        {
          "t": "Aumente o fogo, junte os camarões e salteie por 2–3 min até ficarem rosados; finalize com salsinha.",
          "s": 150
        }
      ],
      "en": [
        {
          "t": "Pat peeled shrimp (or tilapia cubes) very dry and season with salt.",
          "s": null
        },
        {
          "t": "Thinly slice garlic and place in a cold skillet with olive oil and chili flakes.",
          "s": null
        },
        {
          "t": "Heat over medium-low 2 min until garlic just begins to turn golden at edges.",
          "s": 120
        },
        {
          "t": "Turn heat to high, toss in shrimp 2–3 min until pink; finish with parsley.",
          "s": 150
        }
      ]
    },
    "videoQuery": "como hacer Gambas / Tilapia al Ajillo receta paso a paso"
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
      "kcal": 685,
      "p": 48,
      "c": 31,
      "f": 42
    },
    "macrosFit": {
      "kcal": 573,
      "p": 47,
      "c": 26,
      "f": 32
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 180,
        "fitGrams": 180,
        "sub": "Peito de frango",
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 30,
        "fitGrams": 30,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 18,
        "fitGrams": 8,
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
          "t": "Sazona los trozos de pollo con sal y pimienta negra.",
          "s": null
        },
        {
          "t": "En sartén amplia con aceite de oliva, dora 6 dientes de ajo enteros sin pelar (aplastados con el cuchillo) 3 min hasta perfumar; retira los ajos un momento.",
          "s": 180
        },
        {
          "t": "Sella el pollo a fuego medio-alto 7 min hasta que quede bien dorado por fuera.",
          "s": 420
        },
        {
          "t": "Devuelve los ajos, agrega 1 hoja de laurel, tomillo y 1/2 taza de vino blanco (o caldo con 1 cdta de vinagre); tapa y cocina 12 min. Sirve con papas doradas.",
          "s": 720
        }
      ],
      "pt": [
        {
          "t": "Tempere o frango com sal e pimenta-do-reino.",
          "s": null
        },
        {
          "t": "Doure 6 dentes de alho inteiros com casca (amassados) no azeite por 3 min e reserve.",
          "s": 180
        },
        {
          "t": "Sele o frango na mesma frigideira em fogo médio-alto por 7 min até dourar bem.",
          "s": 420
        },
        {
          "t": "Volte os alhos, junte louro, tomilho e 1/2 xícara de vinho ou caldo; tampe e cozinhe 12 min.",
          "s": 720
        }
      ],
      "en": [
        {
          "t": "Season chicken pieces with salt and black pepper.",
          "s": null
        },
        {
          "t": "Gently brown 6 smashed unpeeled garlic cloves in olive oil 3 min; set aside.",
          "s": 180
        },
        {
          "t": "Sear chicken over medium-high heat 7 min until golden.",
          "s": 420
        },
        {
          "t": "Return garlic with bay leaf, thyme, and 1/2 cup white wine/broth; simmer covered 12 min.",
          "s": 720
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
      "kcal": 539,
      "p": 51,
      "c": 42,
      "f": 19
    },
    "macrosFit": {
      "kcal": 468,
      "p": 58,
      "c": 35,
      "f": 11
    },
    "ingredients": [
      {
        "id": "batata",
        "grams": 180,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 140,
        "fitGrams": 165,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 100,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
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
        "grams": 15,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las papas en dados irregulares de 2.5 cm, rocía con aceite y sal; cocina en airfryer 18 min a 200°C (sacudiendo a mitad) hasta quedar bien crocantes.",
          "s": 1080
        },
        {
          "t": "Para la salsa brava: sofríe cebolla y ajo 3 min; añade 1 cdta de páprica dulce, 1/2 cdta de pimenta calabresa/picante, 1 cdta de harina/maicena y tomate triturado.",
          "s": 180
        },
        {
          "t": "Cocina la salsa 8 min y licúala para que quede lisa y brillante.",
          "s": 480
        },
        {
          "t": "Sella filetes de pollo a la plancha 4 min por lado y sirve junto a las papas calientes bañadas con salsa brava.",
          "s": 480
        }
      ],
      "pt": [
        {
          "t": "Corte as batatas em cubos de 2.5 cm, misture azeite e sal e leve à airfryer a 200°C por 18 min até ficarem crocantes.",
          "s": 1080
        },
        {
          "t": "Para o molho bravo: refogue cebola e alho, junte páprica defumada, pimenta calabresa e tomate batido.",
          "s": 180
        },
        {
          "t": "Cozinhe o molho por 8 min e bata no liquidificador para ficar bem liso.",
          "s": 480
        },
        {
          "t": "Grelhe o frango à parte e sirva com as batatas cobertas pelo molho picante.",
          "s": 480
        }
      ],
      "en": [
        {
          "t": "Cube potatoes into 2.5cm chunks, toss with oil and salt, and air-fry at 200°C 18 min until crisp.",
          "s": 1080
        },
        {
          "t": "Sauté onion and garlic, add smoked paprika, chili flakes, and crushed tomato.",
          "s": 180
        },
        {
          "t": "Simmer sauce 8 min and blend smooth.",
          "s": 480
        },
        {
          "t": "Sear chicken breast alongside and spoon spicy brava sauce over hot potatoes.",
          "s": 480
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
      "es": "Papas crocantes cubiertas con jamón/lombo sellado y huevos de yema líquida que se rompen al servir.",
      "pt": "Batatas crocantes cobertas com ovos de gema mole e carne/presunto.",
      "en": "Crispy potatoes topped with runny-yolk eggs and seared meat."
    },
    "macrosTrad": {
      "kcal": 632,
      "p": 44,
      "c": 34,
      "f": 35
    },
    "macrosFit": {
      "kcal": 572,
      "p": 49,
      "c": 28,
      "f": 28
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 120,
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
        "id": "lombo",
        "grams": 90,
        "fitGrams": 110,
        "sub": "Presunto / Lombo em tiras",
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 6,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las papas en bastones gruesos o láminas; hornea o cocina en airfryer 16 min a 200°C hasta que estén tiernas por dentro y doradas por fuera.",
          "s": 960
        },
        {
          "t": "Saltea cebolla en tiras y tiras finas de lomo/jamón en sartén 3 min.",
          "s": 180
        },
        {
          "t": "En sartén aparte, fríe 2 huevos en aceite de oliva manteniendo la yema completamente líquida.",
          "s": 150
        },
        {
          "t": "Pon las papas calientes en plato, acomoda las tiras de carne y los huevos encima; al servir, rompe las yemas con tenedor y cuchillo para que bañen todas las papas.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Corte batatas em palitos e asse ou leve à airfryer a 200°C por 16 min até dourar.",
          "s": 960
        },
        {
          "t": "Salteie cebola e tiras de lombo ou presunto por 3 min.",
          "s": 180
        },
        {
          "t": "Frite 2 ovos deixando as gemas bem moles.",
          "s": 150
        },
        {
          "t": "Coloque sobre as batatas quentes e rompa as gemas na hora de servir para envolver tudo.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Cut potatoes and air-fry at 200°C for 16 min until golden outside and fluffy inside.",
          "s": 960
        },
        {
          "t": "Sauté sliced onion and pork/ham strips 3 min.",
          "s": 180
        },
        {
          "t": "Fry 2 eggs keeping yolks completely runny.",
          "s": 150
        },
        {
          "t": "Layer meat and eggs over hot potatoes and break yolks right at the table.",
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
      "es": "En Brasil consigue fácil 'feijão branco' en el súper, cocido lento con páprica defumada y lingüiça paio.",
      "pt": "Use feijão branco brasileiro cozido com páprica defumada e linguiça paio/lombo.",
      "en": "Brazilian white beans simmered with smoked paprika and sausage/pork."
    },
    "macrosTrad": {
      "kcal": 561,
      "p": 42,
      "c": 34,
      "f": 29
    },
    "macrosFit": {
      "kcal": 456,
      "p": 48,
      "c": 31,
      "f": 15
    },
    "ingredients": [
      {
        "id": "feijao",
        "grams": 150,
        "fitGrams": 140,
        "sub": "Feijão branco",
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 80,
        "fitGrams": 0,
        "sub": "Lombo suíno magro",
        "fitId": null
      },
      {
        "id": "lombo",
        "grams": 70,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
        "id": "cenoura",
        "grams": 60,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Remoja el frijol blanco toda la noche y cuécelo a fuego suave (o 20 min en olla a presión) con agua fría, 1 cebolla entera, zanahoria y laurel.",
          "s": 1200
        },
        {
          "t": "Agrega los trozos de lomo y lingüiça (sin picar mucho la piel para que no se deshagan) y 1 cdta de páprica defumada.",
          "s": null
        },
        {
          "t": "Cocina a fuego bajo 15 min moviendo la olla en círculos por las asas (sin meter cuchara para no romper los granos).",
          "s": 900
        },
        {
          "t": "Saca la cebolla y zanahoria cocida, licúalas con un cucharón de caldo y devuélvelas a la olla para dar cremosidad; reposa 5 min antes de servir.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Deixe o feijão branco de molho e cozinhe na pressão por 20 min com cebola inteira, cenoura e louro.",
          "s": 1200
        },
        {
          "t": "Junte lombo, linguiça paio e 1 colher de páprica defumada.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo baixo por 15 min balançando a panela sem mexer com colher para não quebrar os grãos.",
          "s": 900
        },
        {
          "t": "Bata a cebola e cenoura cozidas com um pouco do caldo e devolva para engrossar.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Soak white beans overnight and pressure-cook 20 min with whole onion, carrot, and bay leaf.",
          "s": 1200
        },
        {
          "t": "Add pork, smoked sausage, and smoked paprika.",
          "s": null
        },
        {
          "t": "Simmer gently 15 min swirling the pot without stirring to keep beans intact.",
          "s": 900
        },
        {
          "t": "Blend cooked onion and carrot with broth and stir back in to thicken.",
          "s": null
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
      "kcal": 383,
      "p": 20,
      "c": 19,
      "f": 26
    },
    "macrosFit": {
      "kcal": 324,
      "p": 20,
      "c": 20,
      "f": 19
    },
    "ingredients": [
      {
        "id": "ovo",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "abobrinha",
        "grams": 140,
        "fitGrams": 160,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 130,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta cebolla, pimentón y calabacín en dados del mismo tamaño (1 cm).",
          "s": null
        },
        {
          "t": "En sartén amplia con aceite de oliva, sofríe primero cebolla y pimentón 6 min a fuego medio hasta que ablanden.",
          "s": 360
        },
        {
          "t": "Agrega el calabacín y cocina 5 min más; luego añade tomate rallado/picado con pizca de sal y azúcar/edulcorante para quitar acidez.",
          "s": 300
        },
        {
          "t": "Cocina a fuego bajo 10 min hasta evaporar el exceso de agua. Haz 2 huecos, rompe los huevos encima y tapa 4 min hasta cuajar.",
          "s": 600
        }
      ],
      "pt": [
        {
          "t": "Corte cebola, pimentão e abobrinha em cubos de 1 cm.",
          "s": null
        },
        {
          "t": "Refogue primeiro cebola e pimentão no azeite por 6 min em fogo médio.",
          "s": 360
        },
        {
          "t": "Junte a abobrinha por 5 min e depois o tomate ralado com sal.",
          "s": 300
        },
        {
          "t": "Apure por 10 min até secar o excesso de água; quebre 2 ovos por cima e tampe por 4 min.",
          "s": 600
        }
      ],
      "en": [
        {
          "t": "Dice onion, bell pepper, and zucchini into uniform 1cm cubes.",
          "s": null
        },
        {
          "t": "Sauté onion and pepper in olive oil 6 min until softened.",
          "s": 360
        },
        {
          "t": "Add zucchini 5 min, then grated tomato and salt.",
          "s": 300
        },
        {
          "t": "Simmer 10 min until thick; crack 2 eggs into wells and cover 4 min until set.",
          "s": 600
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
      "kcal": 600,
      "p": 68,
      "c": 43,
      "f": 16
    },
    "macrosFit": {
      "kcal": 591,
      "p": 71,
      "c": 35,
      "f": 17
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 160,
        "fitGrams": 170,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 120,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cenoura",
        "grams": 60,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "ovo",
        "grams": 40,
        "fitGrams": 40,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Mezcla la carne molida con ajo picado, perejil, huevo batido, 2 cdas de avena/pan rallado, sal y pimienta; forma bolitas.",
          "s": null
        },
        {
          "t": "Dora las albóndigas en sartén (o en airfryer 8 min a 190°C) y reserva.",
          "s": 480
        },
        {
          "t": "En olla, sofríe cebolla, zanahoria y ajo 5 min; añade tomate triturado, páprica y 1/2 taza de caldo; cocina 8 min y licúa para hacer salsa suave.",
          "s": 480
        },
        {
          "t": "Devuelve las albóndigas a la salsa y cocina a fuego bajo 10 min para que queden súper tiernas.",
          "s": 600
        }
      ],
      "pt": [
        {
          "t": "Misture patinho moído com alho, salsinha, ovo, aveia/farinha de rosca e sal; modele bolinhas.",
          "s": null
        },
        {
          "t": "Doure as almôndegas na frigideira ou airfryer por 8 min.",
          "s": 480
        },
        {
          "t": "Refogue cebola, cenoura e alho; junte tomate e caldo, ferva 8 min e bata para fazer molho liso.",
          "s": 480
        },
        {
          "t": "Cozinhe as almôndegas dentro do molho em fogo baixo por 10 min.",
          "s": 600
        }
      ],
      "en": [
        {
          "t": "Mix ground beef, garlic, parsley, egg, oats/breadcrumbs, and salt; roll into balls.",
          "s": null
        },
        {
          "t": "Brown meatballs in skillet or airfryer 8 min.",
          "s": 480
        },
        {
          "t": "Sauté onion, carrot, and garlic; simmer with tomato and broth 8 min and blend smooth.",
          "s": 480
        },
        {
          "t": "Simmer meatballs in sauce over low heat for 10 min.",
          "s": 600
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
      "es": "Merluza / Tilapia en Salsa Verde Vasca",
      "pt": "Peixe ao Molho Verde Basco",
      "en": "Basque Green-Sauce Fish"
    },
    "brTip": {
      "es": "En Brasil usa merluza congelada o filé de tilápia cocido en caldo ligero de ajo, mucho perejil y papa.",
      "pt": "Filé de merluza ou tilápia cozido em caldo leve de alho, salsinha e batatas.",
      "en": "White fish gently poached in garlicky parsley emulsion with potatoes."
    },
    "macrosTrad": {
      "kcal": 424,
      "p": 40,
      "c": 26,
      "f": 18
    },
    "macrosFit": {
      "kcal": 356,
      "p": 42,
      "c": 23,
      "f": 11
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 180,
        "fitGrams": 190,
        "sub": "Merluza ou Tilápia",
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 120,
        "fitGrams": 100,
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
        "grams": 30,
        "fitGrams": 30,
        "sub": "Salsinha fresca",
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta las papas en rodajas de 1 cm y cuécelas en agua con sal 10 min; reserva 1/2 taza del caldo.",
          "s": 600
        },
        {
          "t": "En sartén amplia con aceite de oliva, dora suavemente ajo picado 1 min sin dejar que tome color café.",
          "s": 60
        },
        {
          "t": "Agrega 1 cdta de harina/maicena, mezcla 30 seg y vierte el caldo caliente de golpe moviendo la sartén en círculos para ligar la salsa.",
          "s": null
        },
        {
          "t": "Añade abundante perejil picado y coloca los filetes de pescado sazonados junto a las papas; cocina tapado 6 min moviendo la sartén suavemente sin usar cuchara.",
          "s": 360
        }
      ],
      "pt": [
        {
          "t": "Cozinhe batatas em rodelas por 10 min e guarde 1/2 xícara da água.",
          "s": 600
        },
        {
          "t": "Doure alho picado suavemente no azeite por 1 min sem escurecer.",
          "s": 60
        },
        {
          "t": "Misture 1 col. de chá de amido/farinha e despeje o caldo quente mexendo a panela até engrossar.",
          "s": null
        },
        {
          "t": "Junte muita salsinha, os filés de peixe e as batatas; cozinhe tampado por 6 min.",
          "s": 360
        }
      ],
      "en": [
        {
          "t": "Boil sliced potatoes 10 min; reserve 1/2 cup cooking water.",
          "s": 600
        },
        {
          "t": "Gently warm minced garlic in olive oil 1 min without browning.",
          "s": 60
        },
        {
          "t": "Stir in 1 tsp flour/cornstarch, then whisk in hot water until lightly thickened.",
          "s": null
        },
        {
          "t": "Add generous chopped parsley, fish fillets, and potatoes; simmer covered 6 min.",
          "s": 360
        }
      ]
    },
    "videoQuery": "como hacer Merluza / Tilapia en Salsa Verde Vasca receta paso a paso"
  },
  {
    "id": "es_12",
    "country": "SPANISH",
    "time": 28,
    "fav": false,
    "img": "images/es_12.jpg",
    "title": {
      "es": "Arroz Caldoso de Mariscos / Pescado",
      "pt": "Arroz Caldoso Espanhol de Peixe",
      "en": "Spanish Brothy Seafood Rice"
    },
    "brTip": {
      "es": "A mitad de camino entre risotto y sopa: arroz suelto con caldo sabroso de tomate, ajo y pescado/camarón.",
      "pt": "Arroz bem caldoso (entre risoto e sopa) com peixe, camarão, tomate e páprica.",
      "en": "Soupy Spanish saffron-tomato rice with fish and shrimp."
    },
    "macrosTrad": {
      "kcal": 449,
      "p": 41,
      "c": 37,
      "f": 15
    },
    "macrosFit": {
      "kcal": 375,
      "p": 42,
      "c": 30,
      "f": 10
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 110,
        "fitGrams": 120,
        "sub": null,
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "arroz_branco",
        "grams": 110,
        "fitGrams": 90,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      },
      {
        "id": "tomate",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 50,
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
          "t": "Sofríe cebolla, ajo y pimentón picados en aceite de oliva 4 min; agrega tomate rallado y páprica y cocina 3 min.",
          "s": 420
        },
        {
          "t": "Agrega el arroz crudo y remueve 1 min; vierte 4 partes de caldo de pescado caliente por 1 de arroz (lleva bastante caldo).",
          "s": null
        },
        {
          "t": "Hierve a fuego medio 14 min removiendo solo al principio.",
          "s": 840
        },
        {
          "t": "Los últimos 3 min agrega trozos de pescado y camarones para que se cuezan justo al punto; sirve de inmediato en plato hondo.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola, alho e pimentão por 4 min; junte tomate ralado e páprica por 3 min.",
          "s": 420
        },
        {
          "t": "Adicione arroz cru e 4 medidas de caldo quente para cada 1 de arroz.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo médio por 14 min.",
          "s": 840
        },
        {
          "t": "Nos últimos 3 min junte peixe e camarão; sirva imediatamente bem caldoso.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Sauté onion, garlic, and pepper 4 min; add grated tomato and paprika 3 min.",
          "s": 420
        },
        {
          "t": "Stir in rice and 4x volume of hot broth.",
          "s": null
        },
        {
          "t": "Simmer over medium heat 14 min.",
          "s": 840
        },
        {
          "t": "Fold in fish and shrimp for the final 3 min; serve immediately in deep bowls.",
          "s": 180
        }
      ]
    },
    "videoQuery": "como hacer Arroz Caldoso de Mariscos / Pescado receta paso a paso"
  },
  {
    "id": "es_13",
    "country": "SPANISH",
    "time": 26,
    "fav": false,
    "img": "images/es_13.jpg",
    "title": {
      "es": "Patatas a la Riojana con Lomo/Chorizo",
      "pt": "Batatas à Riojana (Ensopado Espanhol)",
      "en": "Rioja Potato & Pork Stew"
    },
    "brTip": {
      "es": "Truco español: 'chascar' las papas (cortar y quebrar el trozo al final) para que suelten almidón y espesen el caldo.",
      "pt": "Dica espanhola: quebre a ponta da batata ao cortar para soltar amido e engrossar o caldo.",
      "en": "Break potato edges when cutting so starch naturally thickens the paprika broth."
    },
    "macrosTrad": {
      "kcal": 608,
      "p": 50,
      "c": 42,
      "f": 26
    },
    "macrosFit": {
      "kcal": 477,
      "p": 48,
      "c": 34,
      "f": 16
    },
    "ingredients": [
      {
        "id": "lombo",
        "grams": 130,
        "fitGrams": 155,
        "sub": null,
        "fitId": null
      },
      {
        "id": "linguica",
        "grams": 50,
        "fitGrams": 0,
        "sub": "Páprica defumada extra no modo fit",
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 180,
        "fitGrams": 140,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 50,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Sofríe cebolla, ajo y pimentón verde 4 min en olla; agrega lomo en cubos y lingüiça/chorizo en rodajas y dora 4 min.",
          "s": 480
        },
        {
          "t": "Añade 1 cdta generosa de páprica defumada fuera del fuego (para que no se queme) y mezcla.",
          "s": null
        },
        {
          "t": "Incorpora las papas cortadas quebrando el último tramo con el cuchillo, cubre apenas con agua y agrega laurel.",
          "s": null
        },
        {
          "t": "Cocina a fuego medio 18 min sin revolver con cuchara (mueve solo la olla) hasta que la papa esté tierna y el caldo espeso.",
          "s": 1080
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola, alho e pimentão por 4 min; doure lombo e linguiça por 4 min.",
          "s": 480
        },
        {
          "t": "Tire do fogo um segundo para misturar páprica defumada sem queimar.",
          "s": null
        },
        {
          "t": "Junte batatas cortadas quebrando a ponta, louro e água até cobrir.",
          "s": null
        },
        {
          "t": "Cozinhe 18 min até a batata amaciar e o caldo engrossar naturalmente.",
          "s": 1080
        }
      ],
      "en": [
        {
          "t": "Sauté onion, garlic, and pepper 4 min; brown pork and sausage 4 min.",
          "s": 480
        },
        {
          "t": "Off heat briefly, stir in smoked paprika so it doesn't scorch.",
          "s": null
        },
        {
          "t": "Add potatoes broken into chunks, bay leaf, and water just to cover.",
          "s": null
        },
        {
          "t": "Simmer 18 min until potatoes are tender and broth is thick.",
          "s": 1080
        }
      ]
    },
    "videoQuery": "como hacer Patatas a la Riojana con Lomo/Chorizo receta paso a paso"
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
      "es": "Las lentejas (lentilha) NO necesitan remojo previo; con zanahoria, papa, páprica defumada y lombo/chorizo quedan en 25 min.",
      "pt": "Lentilha não precisa de molho! Cozinhe com cenoura, batata, páprica defumada e lombo.",
      "en": "No soaking needed: lentils simmer in 25 min with carrot, potato, and smoked paprika."
    },
    "macrosTrad": {
      "kcal": 503,
      "p": 46,
      "c": 54,
      "f": 12
    },
    "macrosFit": {
      "kcal": 554,
      "p": 55,
      "c": 51,
      "f": 15
    },
    "ingredients": [
      {
        "id": "lentilha",
        "grams": 130,
        "fitGrams": 130,
        "sub": null,
        "fitId": null
      },
      {
        "id": "lombo",
        "grams": 110,
        "fitGrams": 140,
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
        "id": "batata",
        "grams": 80,
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 70,
        "fitGrams": 70,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Lava las lentejas bajo el grifo.",
          "s": null
        },
        {
          "t": "Sofríe cebolla, ajo, zanahoria en rodajas y tomate picado 5 min en olla con 1 cdta de páprica defumada.",
          "s": 300
        },
        {
          "t": "Agrega las lentejas lavadas, la papa en cubos, laurel, el lomo/chorizo y 700 ml de agua fría.",
          "s": null
        },
        {
          "t": "Cuando hierva, baja a fuego medio-bajo y cocina tapado 22 min hasta que las lentejas estén tiernas y el caldo espeso.",
          "s": 1320
        }
      ],
      "pt": [
        {
          "t": "Lave a lentilha em água corrente.",
          "s": null
        },
        {
          "t": "Refogue cebola, alho, cenoura e tomate por 5 min com páprica defumada.",
          "s": 300
        },
        {
          "t": "Junte a lentilha, batata em cubos, louro, carne e 700 ml de água fria.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo médio-baixo tampado por 22 min até engrossar.",
          "s": 1320
        }
      ],
      "en": [
        {
          "t": "Rinse lentils under cold water.",
          "s": null
        },
        {
          "t": "Sauté onion, garlic, sliced carrot, and tomato 5 min with smoked paprika.",
          "s": 300
        },
        {
          "t": "Add lentils, diced potato, bay leaf, pork, and 700ml cold water.",
          "s": null
        },
        {
          "t": "Simmer covered 22 min until lentils are tender and stew is rich.",
          "s": 1320
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
      "kcal": 584,
      "p": 48,
      "c": 45,
      "f": 24
    },
    "macrosFit": {
      "kcal": 555,
      "p": 48,
      "c": 39,
      "f": 24
    },
    "ingredients": [
      {
        "id": "coxa_frango",
        "grams": 175,
        "fitGrams": 175,
        "sub": "Peito de frango",
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 100,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 110,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
        "id": "arroz_branco",
        "grams": 100,
        "fitGrams": 80,
        "sub": "Arroz Integral",
        "fitId": "arroz"
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Dora los trozos de pollo salpimentados en aceite de oliva 6 min por todos lados; retira.",
          "s": 360
        },
        {
          "t": "En la misma sartén, sofríe cebolla, ajo y tiras gruesas de pimentón rojo y verde 6 min hasta que ablanden.",
          "s": 360
        },
        {
          "t": "Agrega tomate rallado/picado y cocina 5 min hasta concentrar.",
          "s": 300
        },
        {
          "t": "Devuelve el pollo, añade 1/3 taza de caldo/agua, tapa y cocina a fuego bajo 14 min; sirve con arroz o papas.",
          "s": 840
        }
      ],
      "pt": [
        {
          "t": "Doure o frango temperado no azeite por 6 min e reserve.",
          "s": 360
        },
        {
          "t": "Refogue cebola, alho e tiras de pimentão por 6 min até murcharem.",
          "s": 360
        },
        {
          "t": "Junte tomate picado e apure por 5 min.",
          "s": 300
        },
        {
          "t": "Volte o frango, adicione um pouco de caldo, tampe e cozinhe 14 min.",
          "s": 840
        }
      ],
      "en": [
        {
          "t": "Brown seasoned chicken in olive oil 6 min; set aside.",
          "s": 360
        },
        {
          "t": "Sauté onion, garlic, and bell pepper strips 6 min until soft.",
          "s": 360
        },
        {
          "t": "Add crushed tomato and simmer 5 min.",
          "s": 300
        },
        {
          "t": "Return chicken with splash of broth, cover, and braise 14 min.",
          "s": 840
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
      "kcal": 536,
      "p": 48,
      "c": 32,
      "f": 24
    },
    "macrosFit": {
      "kcal": 461,
      "p": 50,
      "c": 28,
      "f": 17
    },
    "ingredients": [
      {
        "id": "atum",
        "grams": 140,
        "fitGrams": 150,
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
        "id": "ovo",
        "grams": 60,
        "fitGrams": 60,
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
        "fitGrams": 60,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeitona",
        "grams": 20,
        "fitGrams": 15,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Cuece las papas con piel 16 min hasta que queden firmes (que no se deshagan), pela y corta en cubos cuando entibien; cuece el huevo duro 10 min.",
          "s": 960
        },
        {
          "t": "Pica tomate, cebolla morada y pimentón verde en cubitos.",
          "s": null
        },
        {
          "t": "Mezcla en ensaladera la papa tibia/fría con tomate, pimentón, aceitunas y atún escurrido.",
          "s": null
        },
        {
          "t": "Aliña con aceite de oliva, vinagre y sal; decora con huevo duro en cuartos y refrigera antes de servir.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Cozinhe as batatas firmes por 16 min e corte em cubos; cozinhe o ovo por 10 min.",
          "s": 960
        },
        {
          "t": "Pique tomate, cebola roxa e pimentão em cubinhos.",
          "s": null
        },
        {
          "t": "Misture a batata fria com tomate, pimentão, azeitonas e atum escorrido.",
          "s": null
        },
        {
          "t": "Tempere com azeite, vinagre e sal; decore com ovo cozido e sirva gelado.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Boil potatoes 16 min until tender yet firm, peel and cube; boil egg 10 min.",
          "s": 960
        },
        {
          "t": "Dice tomato, red onion, and bell pepper.",
          "s": null
        },
        {
          "t": "Toss cooled potatoes with tomato, pepper, olives, and drained tuna.",
          "s": null
        },
        {
          "t": "Dress with olive oil, vinegar, and salt; top with quartered egg and chill.",
          "s": null
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
      "es": "Bacalao / Tilapia a la Vizcaína",
      "pt": "Bacalhau ou Peixe à Vizcaína",
      "en": "Basque Vizcaína Tomato-Pepper Fish"
    },
    "brTip": {
      "es": "Salsa roja intensa de pimentón rojo asado y cebolla caramelizada (en Brasil usa bacalhau dessalgado o tilápia).",
      "pt": "Molho intenso de pimentão vermelho e cebola caramelizada sobre bacalhau ou tilápia.",
      "en": "Roasted red pepper and caramelized onion sauce spooned over fish."
    },
    "macrosTrad": {
      "kcal": 505,
      "p": 53,
      "c": 34,
      "f": 18
    },
    "macrosFit": {
      "kcal": 442,
      "p": 55,
      "c": 30,
      "f": 11
    },
    "ingredients": [
      {
        "id": "bacalhau",
        "grams": 165,
        "fitGrams": 175,
        "sub": "Tilápia no dia a dia",
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 100,
        "fitGrams": 100,
        "sub": "Pimentão vermelho",
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 90,
        "fitGrams": 90,
        "sub": null,
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 80,
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
        "grams": 15,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Sofríe cebolla en julianas a fuego lento en aceite de oliva 10 min hasta que esté muy blanda y dulce.",
          "s": 600
        },
        {
          "t": "Agrega pimentón rojo picado y tomate, cocina 6 min y licúa todo hasta formar una salsa roja espesa y aterciopelada.",
          "s": 360
        },
        {
          "t": "Vierte la salsa de nuevo a la sartén y acomoda los lomos de bacalao desalado (o tilapia) encima.",
          "s": null
        },
        {
          "t": "Cocina a fuego bajo 6–8 min moviendo la sartén suavemente hasta que el pescado quede en lascas jugosas; sirve con papas cocidas.",
          "s": 420
        }
      ],
      "pt": [
        {
          "t": "Refogue cebola fatiada em fogo bem baixo no azeite por 10 min até caramelizar.",
          "s": 600
        },
        {
          "t": "Junte pimentão vermelho e tomate por 6 min e bata no liquidificador até ficar aveludado.",
          "s": 360
        },
        {
          "t": "Volte o molho à frigideira e acomode os filés de bacalhau ou tilápia.",
          "s": null
        },
        {
          "t": "Cozinhe em fogo baixo por 6–8 min até lascar fácil; sirva com batatas.",
          "s": 420
        }
      ],
      "en": [
        {
          "t": "Slow-cook sliced onion in olive oil 10 min until sweet and soft.",
          "s": 600
        },
        {
          "t": "Add red bell pepper and tomato 6 min; blend into a velvety red sauce.",
          "s": 360
        },
        {
          "t": "Return sauce to skillet and nestle cod or tilapia fillets inside.",
          "s": null
        },
        {
          "t": "Simmer gently 6–8 min until fish flakes easily; serve with boiled potatoes.",
          "s": 420
        }
      ]
    },
    "videoQuery": "como hacer Bacalao / Tilapia a la Vizcaína receta paso a paso"
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
      "es": "Guiso tierno de patinho o acém con zanahoria, papa, tomate, ajo y laurel.",
      "pt": "Carne macia cozida com cenoura, batata, tomate, páprica e louro.",
      "en": "Slow-simmered beef with carrot, potato, tomato, paprika, and bay leaf."
    },
    "macrosTrad": {
      "kcal": 545,
      "p": 67,
      "c": 39,
      "f": 13
    },
    "macrosFit": {
      "kcal": 537,
      "p": 68,
      "c": 35,
      "f": 13
    },
    "ingredients": [
      {
        "id": "patinho",
        "grams": 170,
        "fitGrams": 175,
        "sub": null,
        "fitId": null
      },
      {
        "id": "batata",
        "grams": 130,
        "fitGrams": 100,
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
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "cebola",
        "grams": 50,
        "fitGrams": 50,
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
          "t": "Corta la carne en dados de 3 cm, salpimienta y séllala en olla caliente 5 min hasta dorar; retira.",
          "s": 300
        },
        {
          "t": "Sofríe cebolla, ajo y zanahoria en rodajas 4 min; añade tomate picado y 1 cdta de páprica dulce.",
          "s": 240
        },
        {
          "t": "Devuelve la carne, cubre con caldo/agua y laurel; cocina 20 min en olla a presión (o 40 min tapada) hasta ablandar.",
          "s": 1200
        },
        {
          "t": "Agrega las papas en trozos los últimos 12 min hasta que estén suaves y el caldo reduzca a salsa espesa.",
          "s": 720
        }
      ],
      "pt": [
        {
          "t": "Sele cubos de patinho ou acém na panela quente por 5 min; reserve.",
          "s": 300
        },
        {
          "t": "Refogue cebola, alho e cenoura por 4 min; junte tomate e páprica.",
          "s": 240
        },
        {
          "t": "Volte a carne com louro e caldo; cozinhe 20 min na pressão até amaciar.",
          "s": 1200
        },
        {
          "t": "Adicione batatas em cubos nos últimos 12 min até ficarem macias.",
          "s": 720
        }
      ],
      "en": [
        {
          "t": "Sear 3cm beef cubes 5 min until browned; set aside.",
          "s": 300
        },
        {
          "t": "Sauté onion, garlic, and sliced carrot 4 min; add tomato and paprika.",
          "s": 240
        },
        {
          "t": "Return beef with bay leaf and broth; pressure-cook 20 min until tender.",
          "s": 1200
        },
        {
          "t": "Simmer with potato chunks for the last 12 min until thickened.",
          "s": 720
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
      "es": "Pan Tumaca Catalán con Pollo/Jamón",
      "pt": "Pão com Tomate (Pan Tumaca) Proteico",
      "en": "Catalan Tomato Bread & Protein"
    },
    "brTip": {
      "es": "Pan tostado frotado con ajo crudo, tomate maduro rallado, aceite de oliva y lonchas de peito de peru/pollo.",
      "pt": "Pão tostado esfregado com alho cru, tomate maduro ralado, azeite e frango/queijo.",
      "en": "Crisp toasted bread rubbed with garlic, grated ripe tomato, olive oil, and lean protein."
    },
    "macrosTrad": {
      "kcal": 523,
      "p": 46,
      "c": 46,
      "f": 17
    },
    "macrosFit": {
      "kcal": 459,
      "p": 48,
      "c": 38,
      "f": 12
    },
    "ingredients": [
      {
        "id": "pao",
        "grams": 75,
        "fitGrams": 0,
        "sub": "Pão integral ou tapioca crocante",
        "fitId": null
      },
      {
        "id": "tapioca",
        "grams": 0,
        "fitGrams": 55,
        "sub": null,
        "fitId": null
      },
      {
        "id": "frango",
        "grams": 120,
        "fitGrams": 145,
        "sub": "Peito de peru / Frango",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 100,
        "fitGrams": 110,
        "sub": null,
        "fitId": null
      },
      {
        "id": "alho",
        "grams": 5,
        "fitGrams": 5,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 12,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Corta rebanadas de pan rústico (o pão francês abierto) y tuéstalas hasta quedar crocantes.",
          "s": 180
        },
        {
          "t": "Pela medio diente de ajo y frótalo suave por la superficie áspera del pan tostado (solo para perfumar).",
          "s": null
        },
        {
          "t": "Ralla un tomate maduro por la parte gruesa del rallador (descartando la piel) y espárcelo sobre el pan.",
          "s": null
        },
        {
          "t": "Rocía buen aceite de oliva, pizca de sal y acompaña con filetes de pollo a la plancha o jamón/peito de peru.",
          "s": null
        }
      ],
      "pt": [
        {
          "t": "Toste fatias de pão rústico ou pão francês até ficarem crocantes.",
          "s": 180
        },
        {
          "t": "Esfregue meio dente de alho cru levemente sobre o pão quente.",
          "s": null
        },
        {
          "t": "Rale tomate maduro no ralo grosso (descartando a pele) e espalhe sobre o pão.",
          "s": null
        },
        {
          "t": "Regue com azeite e sal e sirva com frango grelhado ou presunto.",
          "s": null
        }
      ],
      "en": [
        {
          "t": "Toast crusty bread slices until crisp.",
          "s": 180
        },
        {
          "t": "Gently rub warm toast surface with half a raw garlic clove.",
          "s": null
        },
        {
          "t": "Coarsely grate ripe tomato (discarding skin) and spoon onto bread.",
          "s": null
        },
        {
          "t": "Drizzle with olive oil and flaky salt; pair with seared chicken or cured ham.",
          "s": null
        }
      ]
    },
    "videoQuery": "como hacer Pan Tumaca Catalán con Pollo/Jamón receta paso a paso"
  },
  {
    "id": "es_20",
    "country": "SPANISH",
    "time": 24,
    "fav": false,
    "img": "images/es_20.jpg",
    "title": {
      "es": "Fideuá Española de Pescado",
      "pt": "Fideuá Espanhola (Paella de Macarrão)",
      "en": "Spanish Seafood Noodle Paella"
    },
    "brTip": {
      "es": "Como la paella pero con macarrão cabelo-de-anjo o espaguete partido en trocitos tostado primero en aceite.",
      "pt": "Estilo paella feito com macarrão cabelo-de-anjo ou espaguete quebrado tostado no azeite.",
      "en": "Paella-style dish made with short toasted pasta noodles instead of rice."
    },
    "macrosTrad": {
      "kcal": 513,
      "p": 45,
      "c": 42,
      "f": 19
    },
    "macrosFit": {
      "kcal": 426,
      "p": 46,
      "c": 34,
      "f": 12
    },
    "ingredients": [
      {
        "id": "tilapia",
        "grams": 110,
        "fitGrams": 125,
        "sub": null,
        "fitId": null
      },
      {
        "id": "camarao",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "macarrao",
        "grams": 115,
        "fitGrams": 90,
        "sub": "Macarrão cabelo de anjo / integral",
        "fitId": null
      },
      {
        "id": "tomate",
        "grams": 80,
        "fitGrams": 80,
        "sub": null,
        "fitId": null
      },
      {
        "id": "pimentao",
        "grams": 50,
        "fitGrams": 50,
        "sub": null,
        "fitId": null
      },
      {
        "id": "azeite",
        "grams": 15,
        "fitGrams": 8,
        "sub": null,
        "fitId": null
      }
    ],
    "steps": {
      "es": [
        {
          "t": "Parte espagueti fino o cabelo de anjo en trocitos de 3 cm y tuéstalos en sartén ancha con 1 cdta de aceite 3 min hasta que doren ligeramente; retira.",
          "s": 180
        },
        {
          "t": "En la misma sartén, sofríe ajo, pimentón y tomate rallado 4 min con páprica.",
          "s": 240
        },
        {
          "t": "Agrega los fideos tostados, vierte 2 partes de caldo de pescado caliente y cocina 7 min sin revolver.",
          "s": 420
        },
        {
          "t": "Los últimos 3 min coloca los trozos de pescado y camarones encima hasta que absorban todo el caldo.",
          "s": 180
        }
      ],
      "pt": [
        {
          "t": "Quebre macarrão fino em pedaços de 3 cm e torre na frigideira com azeite por 3 min; reserve.",
          "s": 180
        },
        {
          "t": "Refogue alho, pimentão e tomate ralado por 4 min com páprica.",
          "s": 240
        },
        {
          "t": "Volte o macarrão tostado, junte o dobro de caldo quente e cozinhe 7 min sem mexer.",
          "s": 420
        },
        {
          "t": "Nos últimos 3 min coloque peixe e camarão por cima até secar o caldo.",
          "s": 180
        }
      ],
      "en": [
        {
          "t": "Break thin pasta into 3cm pieces and toast in olive oil 3 min until golden; set aside.",
          "s": 180
        },
        {
          "t": "Sauté garlic, bell pepper, and grated tomato 4 min with paprika.",
          "s": 240
        },
        {
          "t": "Return toasted noodles with double volume hot fish broth; simmer 7 min.",
          "s": 420
        },
        {
          "t": "Arrange fish and shrimp on top for final 3 min until broth is absorbed.",
          "s": 180
        }
      ]
    },
    "videoQuery": "como hacer Fideuá Española de Pescado receta paso a paso"
  }
];
