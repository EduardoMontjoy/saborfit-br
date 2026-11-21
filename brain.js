// SaborFit BR — Offline Culinary & Fitness Brain + i18n (ES / PT / EN)

const I18N = {
  es: {
    appSub: "Tu Chef Fitness en Brasil",
    today: "Hoy",
    pantry: "Despensa",
    create: "Crear",
    recipes: "Recetas",
    todaySub: "Resumen nutricional y sugerencia inteligente",
    kcal: "Calorías",
    protein: "Proteína",
    carbs: "Carbos",
    fat: "Grasas",
    goalLabel: "Meta:",
    goals: { deficit: "Definición", maintain: "Mantener", bulk: "Volumen" },
    ctaCook: "⚡ ¿Qué cocino ahora según mis macros?",
    bestMatch: "Mejor match con tu despensa hoy",
    pantryTitle: "En tu Cocina (Brasil)",
    pantrySub: "Activa lo que tienes en casa; el cerebro recalcula todo al instante",
    createTitle: "Cocina del Mundo Fit",
    createSub: "100% offline • Adaptado a supermercados de Brasil",
    inventBtn: "🧠 Combinar Despensa (Cerebro Offline)",
    inventHint: "Crea un plato único con tus insumos + macros restantes",
    favTitle: "Mis Recetas Guardadas",
    favSub: "Disponibles offline en tu celular",
    favEmpty: "Toca ☆ Guardar dentro de cualquier receta para tenerla aquí.",
    inHome: "en casa",
    portions: "Porciones",
    ingredients: "Ingredientes (Adaptación Brasil)",
    steps: "Preparación paso a paso",
    subst: "Subst. BR",
    logMeal: "Registrar comida hoy",
    save: "☆ Guardar",
    saved: "★ Guardada",
    close: "Cerrar",
    loggedToast: "¡Comida registrada en tus macros!",
    brainReason: "Cerebro Fit:",
    cats: { ALL: "Todos", PROTEIN: "Proteínas", CARB_BR: "Carbos BR", DAIRY: "Lácteos", VEGGIE: "Vegetales", PANTRY: "Condimentos" },
    countries: { ALL: "🌍 Todos", BRAZILIAN: "🇧🇷 Brasil", MEXICAN: "🇲🇽 Mexicana", PERUVIAN: "🇵🇪 Peruana", COLOMBIAN: "🇨🇴 Colombiana", SPANISH: "🇪🇸 Española" }
  },
  pt: {
    appSub: "Seu Chef Fitness no Brasil",
    today: "Hoje",
    pantry: "Despensa",
    create: "Criar",
    recipes: "Receitas",
    todaySub: "Resumo nutricional e sugestão inteligente",
    kcal: "Calorias",
    protein: "Proteína",
    carbs: "Carbos",
    fat: "Gorduras",
    goalLabel: "Meta:",
    goals: { deficit: "Secar", maintain: "Manter", bulk: "Ganhar Massa" },
    ctaCook: "⚡ O que cozinho agora para bater meus macros?",
    bestMatch: "Melhor match com sua despensa hoje",
    pantryTitle: "Na sua Cozinha (Brasil)",
    pantrySub: "Ative o que tem em casa; o cérebro recalcula tudo na hora",
    createTitle: "Cozinha do Mundo Fit",
    createSub: "100% offline • Adaptado aos mercados do Brasil",
    inventBtn: "🧠 Combinar Despensa (Cérebro Offline)",
    inventHint: "Cria um prato único com seus insumos + macros restantes",
    favTitle: "Minhas Receitas Salvas",
    favSub: "Disponíveis offline no seu celular",
    favEmpty: "Toque em ☆ Salvar dentro de qualquer receita para vê-la aqui.",
    inHome: "em casa",
    portions: "Porções",
    ingredients: "Ingredientes (Adaptação Brasil)",
    steps: "Modo de Preparo",
    subst: "Subst. BR",
    logMeal: "Registrar refeição hoje",
    save: "☆ Salvar",
    saved: "★ Salva",
    close: "Fechar",
    loggedToast: "Refeição registrada nos seus macros!",
    brainReason: "Cérebro Fit:",
    cats: { ALL: "Todos", PROTEIN: "Proteínas", CARB_BR: "Carbos BR", DAIRY: "Laticínios", VEGGIE: "Vegetais", PANTRY: "Temperos" },
    countries: { ALL: "🌍 Todos", BRAZILIAN: "🇧🇷 Brasil", MEXICAN: "🇲🇽 Mexicana", PERUVIAN: "🇵🇪 Peruana", COLOMBIAN: "🇨🇴 Colombiana", SPANISH: "🇪🇸 Espanhola" }
  },
  en: {
    appSub: "Your Fitness Chef in Brazil",
    today: "Today",
    pantry: "Pantry",
    create: "Create",
    recipes: "Recipes",
    todaySub: "Daily nutrition summary & smart suggestion",
    kcal: "Calories",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fats",
    goalLabel: "Goal:",
    goals: { deficit: "Cut", maintain: "Maintain", bulk: "Bulk" },
    ctaCook: "⚡ What should I cook now for my macros?",
    bestMatch: "Best match with your pantry today",
    pantryTitle: "In Your Kitchen (Brazil)",
    pantrySub: "Toggle what you have at home; the offline brain recalculates live",
    createTitle: "World Fit Cuisine",
    createSub: "100% offline • Adapted to Brazilian supermarkets",
    inventBtn: "🧠 Combine Pantry (Offline Brain)",
    inventHint: "Builds a custom dish from your stock + remaining macros",
    favTitle: "Saved Recipes",
    favSub: "Available offline on your phone",
    favEmpty: "Tap ☆ Save inside any recipe to keep it here.",
    inHome: "at home",
    portions: "Servings",
    ingredients: "Ingredients (Brazil Adapted)",
    steps: "Step-by-step",
    subst: "BR Sub",
    logMeal: "Log meal today",
    save: "☆ Save",
    saved: "★ Saved",
    close: "Close",
    loggedToast: "Meal logged to your daily macros!",
    brainReason: "Fit Brain:",
    cats: { ALL: "All", PROTEIN: "Proteins", CARB_BR: "BR Carbs", DAIRY: "Dairy", VEGGIE: "Veggies", PANTRY: "Seasoning" },
    countries: { ALL: "🌍 All", BRAZILIAN: "🇧🇷 Brazil", MEXICAN: "🇲🇽 Mexican", PERUVIAN: "🇵🇪 Peruvian", COLOMBIAN: "🇨🇴 Colombian", SPANISH: "🇪🇸 Spanish" }
  }
};

// TACO-based Brazilian supermarket staples (macros per 100g)
const PANTRY_DB = [
  // PROTEÍNAS
  { id: 'frango', name: { es: 'Pechuga de Pollo', pt: 'Peito de Frango', en: 'Chicken Breast' }, cat: 'PROTEIN', kcal: 159, p: 32.0, c: 0.0, f: 2.5, inStock: true },
  { id: 'coxa_frango', name: { es: 'Muslo / Sobrecoxa de Pollo', pt: 'Sobrecoxa de Frango', en: 'Chicken Thighs' }, cat: 'PROTEIN', kcal: 215, p: 24.0, c: 0.0, f: 13.0, inStock: false },
  { id: 'patinho', name: { es: 'Carne Magra (Patinho)', pt: 'Patinho (Moído ou Bife)', en: 'Lean Beef (Patinho)' }, cat: 'PROTEIN', kcal: 219, p: 35.9, c: 0.0, f: 7.3, inStock: true },
  { id: 'carne_seca', name: { es: 'Carne Seca / Charque', pt: 'Carne Seca Desfiada', en: 'Brazilian Cured Beef' }, cat: 'PROTEIN', kcal: 245, p: 34.0, c: 0.0, f: 11.0, inStock: false },
  { id: 'lombo', name: { es: 'Lomo de Cerdo', pt: 'Lombo Suíno', en: 'Pork Loin' }, cat: 'PROTEIN', kcal: 210, p: 28.0, c: 0.0, f: 10.0, inStock: false },
  { id: 'costelinha', name: { es: 'Costilla de Cerdo', pt: 'Costelinha Suína', en: 'Pork Ribs' }, cat: 'PROTEIN', kcal: 290, p: 22.0, c: 0.0, f: 22.0, inStock: false },
  { id: 'linguica', name: { es: 'Chorizo / Lingüiça Paio/Calabresa', pt: 'Linguiça Calabresa / Paio', en: 'Smoked Sausage (Linguiça)' }, cat: 'PROTEIN', kcal: 310, p: 17.0, c: 2.0, f: 26.0, inStock: false },
  { id: 'ovo', name: { es: 'Huevo de Gallina', pt: 'Ovo de Galinha', en: 'Chicken Egg' }, cat: 'PROTEIN', kcal: 143, p: 13.0, c: 1.6, f: 8.9, inStock: true },
  { id: 'tilapia', name: { es: 'Filete de Tilapia / Pescado Blanco', pt: 'Filé de Tilápia / Peixe Branco', en: 'Tilapia / White Fish' }, cat: 'PROTEIN', kcal: 96, p: 20.1, c: 0.0, f: 1.7, inStock: true },
  { id: 'camarao', name: { es: 'Camarón Limpio', pt: 'Camarão Limpo', en: 'Peeled Shrimp' }, cat: 'PROTEIN', kcal: 85, p: 18.0, c: 0.5, f: 1.0, inStock: false },
  { id: 'bacalhau', name: { es: 'Bacalao Desalado', pt: 'Bacalhau Dessalgado', en: 'Desalted Cod' }, cat: 'PROTEIN', kcal: 136, p: 29.0, c: 0.0, f: 1.5, inStock: false },
  { id: 'atum', name: { es: 'Atún en Agua', pt: 'Atum em Água', en: 'Tuna in Water' }, cat: 'PROTEIN', kcal: 116, p: 25.5, c: 0.0, f: 0.8, inStock: false },

  // CARBOS & GRANOS BR
  { id: 'arroz_branco', name: { es: 'Arroz Blanco', pt: 'Arroz Branco', en: 'White Rice' }, cat: 'CARB_BR', kcal: 130, p: 2.5, c: 28.0, f: 0.3, inStock: true },
  { id: 'arroz', name: { es: 'Arroz Integral', pt: 'Arroz Integral', en: 'Brown Rice' }, cat: 'CARB_BR', kcal: 124, p: 2.6, c: 25.8, f: 1.0, inStock: true },
  { id: 'feijao_preto', name: { es: 'Frijol Negro', pt: 'Feijão Preto', en: 'Black Beans' }, cat: 'CARB_BR', kcal: 77, p: 4.5, c: 14.0, f: 0.5, inStock: true },
  { id: 'feijao', name: { es: 'Frijol Carioca / Rojo', pt: 'Feijão Carioca / Mulatinho', en: 'Carioca / Red Beans' }, cat: 'CARB_BR', kcal: 76, p: 4.8, c: 13.6, f: 0.5, inStock: true },
  { id: 'lentilha', name: { es: 'Lentejas', pt: 'Lentilha', en: 'Lentils' }, cat: 'CARB_BR', kcal: 116, p: 9.0, c: 20.0, f: 0.4, inStock: false },
  { id: 'grao_bico', name: { es: 'Garbanzos', pt: 'Grão-de-Bico', en: 'Chickpeas' }, cat: 'CARB_BR', kcal: 164, p: 8.9, c: 27.4, f: 2.6, inStock: false },
  { id: 'batata', name: { es: 'Papa Común (Batata)', pt: 'Batata Inglesa / Asterix', en: 'Potato' }, cat: 'CARB_BR', kcal: 77, p: 2.0, c: 17.5, f: 0.1, inStock: true },
  { id: 'batata_doce', name: { es: 'Camote / Batata-Doce', pt: 'Batata-Doce', en: 'Sweet Potato' }, cat: 'CARB_BR', kcal: 77, p: 0.6, c: 18.4, f: 0.1, inStock: true },
  { id: 'mandioca', name: { es: 'Yuca / Mandioca (Aipim)', pt: 'Mandioca / Aipim', en: 'Cassava (Mandioca)' }, cat: 'CARB_BR', kcal: 125, p: 0.6, c: 30.1, f: 0.3, inStock: true },
  { id: 'farinha_mandioca', name: { es: 'Harina de Yuca (Farofa)', pt: 'Farinha de Mandioca', en: 'Cassava Flour (Farofa)' }, cat: 'CARB_BR', kcal: 361, p: 1.6, c: 87.9, f: 0.3, inStock: true },
  { id: 'tapioca', name: { es: 'Goma de Tapioca / Polvilho', pt: 'Goma de Tapioca / Polvilho', en: 'Tapioca Starch' }, cat: 'CARB_BR', kcal: 240, p: 0.0, c: 60.0, f: 0.0, inStock: true },
  { id: 'rap10', name: { es: 'Tortilla / Rap10', pt: 'Tortilha / Rap10', en: 'Wrap / Tortilla (Rap10)' }, cat: 'CARB_BR', kcal: 290, p: 7.5, c: 50.0, f: 6.5, inStock: false },
  { id: 'cuscuz', name: { es: 'Flocão de Maíz (Cuscuz / Arepa)', pt: 'Flocão de Milho (Cuscuz)', en: 'Cornmeal (Flocão)' }, cat: 'CARB_BR', kcal: 113, p: 2.2, c: 25.3, f: 0.7, inStock: true },
  { id: 'milho', name: { es: 'Maíz / Choclo', pt: 'Milho Verde / Canjica', en: 'Corn / Hominy' }, cat: 'CARB_BR', kcal: 96, p: 3.4, c: 21.0, f: 1.2, inStock: false },
  { id: 'macarrao', name: { es: 'Pasta / Espagueti', pt: 'Macarrão / Espaguete', en: 'Pasta / Spaghetti' }, cat: 'CARB_BR', kcal: 158, p: 5.8, c: 30.9, f: 0.9, inStock: true },
  { id: 'pao', name: { es: 'Pan Francés / Baguette', pt: 'Pão Francês / Baguete', en: 'Crusty Bread' }, cat: 'CARB_BR', kcal: 270, p: 8.5, c: 54.0, f: 2.0, inStock: true },
  { id: 'aveia', name: { es: 'Avena en Hojuelas', pt: 'Aveia em Flocos', en: 'Rolled Oats' }, cat: 'CARB_BR', kcal: 394, p: 13.9, c: 66.6, f: 8.5, inStock: true },
  { id: 'banana_terra', name: { es: 'Plátano Maduro (Banana-da-terra)', pt: 'Banana-da-Terra', en: 'Plantain (Banana-da-terra)' }, cat: 'CARB_BR', kcal: 128, p: 1.4, c: 33.7, f: 0.2, inStock: false },

  // LÁCTEOS & QUESOS
  { id: 'requeijao', name: { es: 'Requeijão Light', pt: 'Requeijão Light', en: 'Light Requeijão' }, cat: 'DAIRY', kcal: 180, p: 11.0, c: 4.5, f: 13.0, inStock: true },
  { id: 'creme_leite', name: { es: 'Crema de Leche', pt: 'Creme de Leite', en: 'Heavy Cream' }, cat: 'DAIRY', kcal: 298, p: 2.2, c: 3.5, f: 30.0, inStock: false },
  { id: 'leite', name: { es: 'Leche', pt: 'Leite Integral / Desnatado', en: 'Milk' }, cat: 'DAIRY', kcal: 61, p: 3.2, c: 4.8, f: 3.2, inStock: true },
  { id: 'minas', name: { es: 'Queso Minas / Mozzarella', pt: 'Queijo Minas / Muçarela', en: 'Minas / Mozzarella Cheese' }, cat: 'DAIRY', kcal: 264, p: 17.4, c: 3.2, f: 20.2, inStock: true },
  { id: 'coalho', name: { es: 'Queso Coalho', pt: 'Queijo Coalho', en: 'Coalho Cheese' }, cat: 'DAIRY', kcal: 315, p: 21.0, c: 1.5, f: 25.0, inStock: false },
  { id: 'ricota', name: { es: 'Ricota Fresca', pt: 'Ricota Fresca', en: 'Fresh Ricotta' }, cat: 'DAIRY', kcal: 140, p: 12.6, c: 3.8, f: 8.1, inStock: true },
  { id: 'iogurte', name: { es: 'Yogur Natural', pt: 'Iogurte Natural', en: 'Plain Yogurt' }, cat: 'DAIRY', kcal: 41, p: 3.8, c: 5.8, f: 0.3, inStock: true },

  // VEGETALES & FRUTAS
  { id: 'tomate', name: { es: 'Tomate', pt: 'Tomate', en: 'Tomato' }, cat: 'VEGGIE', kcal: 18, p: 1.1, c: 3.9, f: 0.2, inStock: true },
  { id: 'cebola', name: { es: 'Cebolla', pt: 'Cebola (Branca / Roxa)', en: 'Onion' }, cat: 'VEGGIE', kcal: 40, p: 1.1, c: 9.3, f: 0.1, inStock: true },
  { id: 'alho', name: { es: 'Ajo', pt: 'Alho', en: 'Garlic' }, cat: 'VEGGIE', kcal: 113, p: 7.0, c: 23.9, f: 0.2, inStock: true },
  { id: 'pimentao', name: { es: 'Pimentón / Morrón', pt: 'Pimentão (Verde / Amarelo)', en: 'Bell Pepper' }, cat: 'VEGGIE', kcal: 21, p: 1.0, c: 4.9, f: 0.2, inStock: true },
  { id: 'couve', name: { es: 'Col Rizada (Couve)', pt: 'Couve-Manteiga', en: 'Collard Greens (Couve)' }, cat: 'VEGGIE', kcal: 27, p: 2.9, c: 4.3, f: 0.5, inStock: false },
  { id: 'quiabo', name: { es: 'Quimbombó (Quiabo)', pt: 'Quiabo', en: 'Okra (Quiabo)' }, cat: 'VEGGIE', kcal: 30, p: 1.9, c: 6.4, f: 0.3, inStock: false },
  { id: 'pepino', name: { es: 'Pepino', pt: 'Pepino', en: 'Cucumber' }, cat: 'VEGGIE', kcal: 15, p: 0.7, c: 3.6, f: 0.1, inStock: false },
  { id: 'abobrinha', name: { es: 'Calabacín (Abobrinha)', pt: 'Abobrinha', en: 'Zucchini' }, cat: 'VEGGIE', kcal: 15, p: 1.1, c: 3.0, f: 0.1, inStock: true },
  { id: 'abobora', name: { es: 'Calabaza (Abóbora Cabotiá)', pt: 'Abóbora Cabotiá', en: 'Kabocha Pumpkin' }, cat: 'VEGGIE', kcal: 48, p: 1.4, c: 10.8, f: 0.7, inStock: false },
  { id: 'cenoura', name: { es: 'Zanahoria', pt: 'Cenoura', en: 'Carrot' }, cat: 'VEGGIE', kcal: 34, p: 1.3, c: 7.7, f: 0.2, inStock: true },
  { id: 'brocolis', name: { es: 'Brócoli', pt: 'Brócolis', en: 'Broccoli' }, cat: 'VEGGIE', kcal: 25, p: 2.1, c: 4.4, f: 0.5, inStock: true },
  { id: 'abacate', name: { es: 'Aguacate / Palta', pt: 'Abacate / Avocado', en: 'Avocado' }, cat: 'VEGGIE', kcal: 160, p: 2.0, c: 8.5, f: 14.7, inStock: false },

  // CONDIMENTOS & ACEITES
  { id: 'azeite', name: { es: 'Aceite de Oliva', pt: 'Azeite de Oliva', en: 'Olive Oil' }, cat: 'PANTRY', kcal: 884, p: 0.0, c: 0.0, f: 100.0, inStock: true },
  { id: 'dende', name: { es: 'Aceite de Dendê', pt: 'Azeite de Dendê', en: 'Dendê Palm Oil' }, cat: 'PANTRY', kcal: 884, p: 0.0, c: 0.0, f: 100.0, inStock: false },
  { id: 'leite_coco', name: { es: 'Leche de Coco', pt: 'Leite de Coco', en: 'Coconut Milk' }, cat: 'PANTRY', kcal: 180, p: 1.6, c: 3.0, f: 18.0, inStock: false },
  { id: 'shoyu', name: { es: 'Salsa de Soya (Shoyu)', pt: 'Shoyu', en: 'Soy Sauce' }, cat: 'PANTRY', kcal: 53, p: 5.5, c: 6.0, f: 0.0, inStock: true },
  { id: 'limao', name: { es: 'Limón (Tahití)', pt: 'Limão Tahiti', en: 'Lime' }, cat: 'PANTRY', kcal: 30, p: 0.7, c: 10.5, f: 0.2, inStock: true },
  { id: 'cheiro_verde', name: { es: 'Cilantro / Perejil y Cebollín', pt: 'Cheiro-Verde / Coentro', en: 'Cilantro / Parsley & Scallion' }, cat: 'PANTRY', kcal: 30, p: 2.5, c: 5.0, f: 0.4, inStock: true },
  { id: 'azeitona', name: { es: 'Aceitunas', pt: 'Azeitonas', en: 'Olives' }, cat: 'PANTRY', kcal: 115, p: 0.8, c: 6.3, f: 10.7, inStock: false },
  { id: 'amendoim', name: { es: 'Maní Tostado (Amendoim)', pt: 'Amendoim Torrado', en: 'Roasted Peanuts' }, cat: 'PANTRY', kcal: 567, p: 25.8, c: 16.1, f: 49.2, inStock: false }
];

const RECIPES_DB = [
  {
    id: 'taco', country: 'MEXICAN', time: 15, fav: true,
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80',
    tag: 'High Protein',
    title: { es: 'Tacos Fit de Tapioca con Patinho', pt: 'Tacos Fit de Tapioca com Patinho', en: 'Fit Tapioca Beef Tacos' },
    macros: { kcal: 410, p: 38, c: 36, f: 11 },
    ingredients: [
      { id: 'tapioca', grams: 60, sub: 'Rap10 Fit' },
      { id: 'patinho', grams: 130, sub: 'Peito de Frango' },
      { id: 'tomate', grams: 50, sub: null },
      { id: 'cebola', grams: 30, sub: null },
      { id: 'requeijao', grams: 25, sub: 'Iogurte Natural' }
    ],
    steps: {
      es: [{ t: 'Saltea la carne molida con cebolla morada, comino y paprika.', s: 360 }, { t: 'Haz 2 discos finos de tapioca en sartén sin aceite.', s: 120 }, { t: 'Rellena con carne, tomate y requeijão light en lugar de sour cream.', s: null }],
      pt: [{ t: 'Refogue o patinho moído com cebola roxa, cominho e páprica.', s: 360 }, { t: 'Prepare 2 discos finos de tapioca na frigideira sem óleo.', s: 120 }, { t: 'Recheie com a carne, tomate e requeijão light no lugar do sour cream.', s: null }],
      en: [{ t: 'Sauté lean ground beef with red onion, cumin, and paprika.', s: 360 }, { t: 'Make 2 thin tapioca crepes in a dry skillet.', s: 120 }, { t: 'Fill with beef, tomato, and light requeijão instead of sour cream.', s: null }]
    }
  },
  {
    id: 'teriyaki', country: 'JAPANESE', time: 20, fav: false,
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80',
    tag: 'Post-Entreno',
    title: { es: 'Bowl Teriyaki Brasileño', pt: 'Bowl Teriyaki Brasileiro', en: 'Brazilian Teriyaki Fit Bowl' },
    macros: { kcal: 445, p: 40, c: 45, f: 9 },
    ingredients: [
      { id: 'frango', grams: 150, sub: 'Filé de Tilápia' },
      { id: 'arroz', grams: 120, sub: 'Mandioca Cozida' },
      { id: 'brocolis', grams: 80, sub: 'Abobrinha' },
      { id: 'shoyu', grams: 20, sub: null },
      { id: 'limao', grams: 10, sub: null }
    ],
    steps: {
      es: [{ t: 'Corta el pollo en cubos y séllalo a fuego alto.', s: 300 }, { t: 'Agrega shoyu light, limón y pizca de edulcorante (sustituto del mirin).', s: 120 }, { t: 'Sirve sobre arroz integral y brócoli al vapor.', s: null }],
      pt: [{ t: 'Corte o frango em cubos e sele em fogo alto.', s: 300 }, { t: 'Adicione shoyu light, limão e pitada de adoçante (subst. do mirin).', s: 120 }, { t: 'Monte o bowl com arroz integral e brócolis no vapor.', s: null }],
      en: [{ t: 'Dice chicken breast and sear over high heat.', s: 300 }, { t: 'Add light soy sauce, lime, and a pinch of sweetener (mirin sub).', s: 120 }, { t: 'Serve over brown rice and steamed broccoli.', s: null }]
    }
  },
  {
    id: 'ceviche', country: 'PERUVIAN', time: 12, fav: true,
    img: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=700&q=80',
    tag: 'Low Carb',
    title: { es: 'Ceviche Fit de Tilapia y Camote', pt: 'Ceviche Fit de Tilápia e Batata-Doce', en: 'Tilapia & Sweet Potato Ceviche' },
    macros: { kcal: 310, p: 32, c: 28, f: 5 },
    ingredients: [
      { id: 'tilapia', grams: 160, sub: 'Atum em Água' },
      { id: 'limao', grams: 40, sub: null },
      { id: 'cebola', grams: 40, sub: null },
      { id: 'batata_doce', grams: 100, sub: 'Mandioca Cozida' }
    ],
    steps: {
      es: [{ t: 'Corta la tilapia en cubos y marina en jugo de limón, sal y pimienta.', s: 480 }, { t: 'Mezcla con cebolla morada en pluma y sirve con batata-doce cocida.', s: null }],
      pt: [{ t: 'Corte a tilápia em cubos e marine no suco de limão, sal e pimenta.', s: 480 }, { t: 'Misture com cebola roxa fatiada e sirva com batata-doce cozida.', s: null }],
      en: [{ t: 'Cube tilapia and marinate in fresh lime juice, salt, and chili.', s: 480 }, { t: 'Toss with sliced red onion and serve with boiled sweet potato.', s: null }]
    }
  },
  {
    id: 'grega', country: 'MEDITERRANEAN', time: 10, fav: false,
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    tag: 'Rápido 10m',
    title: { es: 'Ensalada Griega con Queso Minas', pt: 'Salada Grega com Queijo Minas', en: 'Greek Salad with Minas Cheese' },
    macros: { kcal: 340, p: 29, c: 14, f: 18 },
    ingredients: [
      { id: 'atum', grams: 120, sub: 'Ovo Cozido' },
      { id: 'minas', grams: 50, sub: 'Ricota Fresca' },
      { id: 'tomate', grams: 80, sub: null },
      { id: 'cebola', grams: 30, sub: null },
      { id: 'azeite', grams: 10, sub: null }
    ],
    steps: {
      es: [{ t: 'Corta tomate, cebolla morada y queso minas en cubos (sustituto del feta).', s: null }, { t: 'Mezcla con atún, orégano, limón y aceite de oliva.', s: null }],
      pt: [{ t: 'Corte tomate, cebola roxa e queijo minas em cubos (subst. do feta).', s: null }, { t: 'Misture com atum, orégano, limão e azeite.', s: null }],
      en: [{ t: 'Dice tomato, red onion, and Minas cheese (feta substitute).', s: null }, { t: 'Toss with tuna, oregano, lime, and olive oil.', s: null }]
    }
  },
  {
    id: 'thai', country: 'THAI', time: 18, fav: false,
    img: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=700&q=80',
    tag: 'Sabor Intenso',
    title: { es: 'Curry Fit Tailandés de Pollo y Coco', pt: 'Curry Fit Tailandês de Frango e Coco', en: 'Fit Thai Coconut Chicken Curry' },
    macros: { kcal: 420, p: 39, c: 22, f: 17 },
    ingredients: [
      { id: 'frango', grams: 150, sub: 'Filé de Tilápia' },
      { id: 'leite_coco', grams: 80, sub: 'Requeijão Light + Água' },
      { id: 'abobrinha', grams: 100, sub: 'Brócolis' },
      { id: 'amendoim', grams: 15, sub: null },
      { id: 'limao', grams: 10, sub: null }
    ],
    steps: {
      es: [{ t: 'Dora el pollo con cúrcuma/curry y ajo.', s: 240 }, { t: 'Agrega leite de coco light y calabacín; cocina 5 min.', s: 300 }, { t: 'Termina con limón y maní triturado.', s: null }],
      pt: [{ t: 'Doure o frango com curry/açafrão e alho.', s: 240 }, { t: 'Adicione leite de coco light e abobrinha; cozinhe 5 min.', s: 300 }, { t: 'Finalize com limão e amendoim triturado.', s: null }],
      en: [{ t: 'Brown chicken with curry powder and garlic.', s: 240 }, { t: 'Add light coconut milk and zucchini; simmer 5 min.', s: 300 }, { t: 'Finish with lime juice and crushed peanuts.', s: null }]
    }
  },
  {
    id: 'arab', country: 'ARAB', time: 20, fav: false,
    img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80',
    tag: 'High Protein',
    title: { es: 'Kafta Fit con Cuscuz y Yogur', pt: 'Kafta Fit com Cuscuz e Iogurte', en: 'Fit Beef Kafta with Couscous' },
    macros: { kcal: 430, p: 42, c: 34, f: 13 },
    ingredients: [
      { id: 'patinho', grams: 150, sub: 'Peito de Frango moído' },
      { id: 'cuscuz', grams: 100, sub: 'Arroz Integral' },
      { id: 'iogurte', grams: 60, sub: 'Ricota batida' },
      { id: 'cebola', grams: 30, sub: null }
    ],
    steps: {
      es: [{ t: 'Mezcla carne con cebolla rallada, menta/orégano, arma brochetas y asa.', s: 420 }, { t: 'Sirve con cuscuz hidratado y salsa de yogur descremado con limón.', s: null }],
      pt: [{ t: 'Misture o patinho com cebola ralada, hortelã/orégano, modele e grelhe.', s: 420 }, { t: 'Sirva com cuscuz cozido e molho de iogurte desnatado com limão.', s: null }],
      en: [{ t: 'Mix beef with grated onion and herbs, shape and grill.', s: 420 }, { t: 'Serve with steamed corn couscous and lemon yogurt dip.', s: null }]
    }
  },
  {
    id: 'italian', country: 'ITALIAN', time: 16, fav: false,
    img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
    tag: 'Low Carb',
    title: { es: 'Espagueti de Calabacín Boloñesa Ricota', pt: 'Espaguete de Abobrinha à Bolonhesa', en: 'Zucchini Noodles Bolognese' },
    macros: { kcal: 365, p: 41, c: 12, f: 15 },
    ingredients: [
      { id: 'abobrinha', grams: 180, sub: 'Brócolis' },
      { id: 'patinho', grams: 140, sub: 'Peito de Frango' },
      { id: 'tomate', grams: 100, sub: null },
      { id: 'ricota', grams: 40, sub: 'Requeijão Light' }
    ],
    steps: {
      es: [{ t: 'Cocina la carne con tomate triturado y albahaca/orégano.', s: 360 }, { t: 'Saltea tiras de abobrinha 2 min y corona con ricota fresca.', s: 120 }],
      pt: [{ t: 'Cozinhe o patinho com tomate picado e manjericão/orégano.', s: 360 }, { t: 'Salteie a abobrinha em tiras por 2 min e finalize com ricota fresca.', s: 120 }],
      en: [{ t: 'Simmer ground beef with chopped tomato and basil/oregano.', s: 360 }, { t: 'Sauté zucchini ribbons for 2 min and top with fresh ricotta.', s: 120 }]
    }
  }
];

// Procedural Offline Chef Brain (Zero API!)
function generateOfflineBrainDish(pantry, countryFilter, remainingMacros, lang) {
  const inStock = pantry.filter(p => p.inStock);
  const pick = (cat, fallbackId) => inStock.find(p => p.cat === cat) || pantry.find(p => p.id === fallbackId);

  const prot = pick('PROTEIN', 'frango');
  const needsLowCarb = remainingMacros.c < 35;
  const carb = needsLowCarb ? null : pick('CARB_BR', 'mandioca');
  const veg = pick('VEGGIE', 'tomate');
  const dairy = pick('DAIRY', 'requeijao');
  const season = inStock.find(p => p.cat === 'PANTRY') || pantry.find(p => p.id === 'limao');

  const targetCountry = countryFilter === 'ALL'
    ? (prot.id === 'tilapia' ? 'PERUVIAN' : prot.id === 'patinho' ? 'MEXICAN' : 'BRAZILIAN')
    : countryFilter;

  const profiles = {
    BRAZILIAN: { flag: '🇧🇷', style: { es: 'Plato Casero Brasileño', pt: 'Prato Caseiro Brasileiro', en: 'Brazilian Home Plate' }, img: 'images/br_17.jpg', spice: 'alho + cebola + cheiro-verde' },
    MEXICAN: { flag: '🇲🇽', style: { es: 'Bowl Tex-Mex', pt: 'Bowl Tex-Mex', en: 'Tex-Mex Power Bowl' }, img: 'images/mx_9.jpg', spice: 'cominho + páprica + limão' },
    PERUVIAN: { flag: '🇵🇪', style: { es: 'Saltado Peruano', pt: 'Saltado Peruano', en: 'Peruvian Saltado' }, img: 'images/pe_2.jpg', spice: 'cebola roxa + shoyu + limão' },
    COLOMBIAN: { flag: '🇨🇴', style: { es: 'Plato Criollo Colombiano', pt: 'Prato Crioulo Colombiano', en: 'Colombian Criollo Plate' }, img: 'images/co_4.jpg', spice: 'hogao (tomate + cebolinha + cominho)' },
    SPANISH: { flag: '🇪🇸', style: { es: 'Salteado Ibérico', pt: 'Salteado Espanhol', en: 'Spanish Skillet' }, img: 'images/es_1.jpg', spice: 'azeite + páprica defumada + alho' }
  };

  const prof = profiles[targetCountry] || profiles.BRAZILIAN;
  const protGrams = Math.min(200, Math.max(120, Math.round((remainingMacros.p / Math.max(prot.p, 15)) * 100 / 10) * 10));
  const usedItems = [
    { item: prot, grams: protGrams, sub: null },
    ...(carb ? [{ item: carb, grams: 110, sub: 'Mandioca / Tapioca' }] : []),
    { item: veg, grams: 90, sub: null },
    ...(dairy ? [{ item: dairy, grams: 25, sub: null }] : []),
    { item: season, grams: 12, sub: null }
  ];

  // Exact TACO calculation from selected grams
  const macros = usedItems.reduce((acc, u) => {
    const f = u.grams / 100;
    acc.kcal += Math.round(u.item.kcal * f);
    acc.p += Math.round(u.item.p * f);
    acc.c += Math.round(u.item.c * f);
    acc.f += Math.round(u.item.f * f);
    return acc;
  }, { kcal: 0, p: 0, c: 0, f: 0 });

  const reasons = {
    es: `Elegí ${prot.name.es} (${protGrams}g) para cubrir tu proteína${needsLowCarb ? ' en modo Low-Carb' : ''} con toque ${prof.spice}.`,
    pt: `Escolhi ${prot.name.pt} (${protGrams}g) para bater sua proteína${needsLowCarb ? ' em modo Low-Carb' : ''} com toque ${prof.spice}.`,
    en: `Picked ${prot.name.en} (${protGrams}g) to hit your protein${needsLowCarb ? ' in Low-Carb mode' : ''} with ${prof.spice}.`
  };

  return {
    id: 'brain_' + Date.now(),
    country: targetCountry,
    time: 16,
    fav: false,
    img: prof.img,
    tag: needsLowCarb ? 'Brain Low-Carb' : 'Brain Match 100%',
    brainReason: reasons[lang],
    title: {
      es: `${prof.style.es} de ${prot.name.es}`,
      pt: `${prof.style.pt} de ${prot.name.pt}`,
      en: `${prof.style.en} with ${prot.name.en}`
    },
    macros,
    ingredients: usedItems.map(u => ({ id: u.item.id, grams: u.grams, sub: u.sub })),
    steps: {
      es: [
        { t: `Sazona ${prot.name.es} (${protGrams}g) con ${prof.spice} y sella a fuego fuerte.`, s: 300 },
        { t: `Saltea ${veg.name.es}${carb ? ` y acompaña con ${carb.name.es}` : ''}.`, s: 180 },
        { t: dairy ? `Corona con ${dairy.name.es} para cremosidad fit.` : 'Sirve caliente con gotas de limón.', s: null }
      ],
      pt: [
        { t: `Tempere ${prot.name.pt} (${protGrams}g) com ${prof.spice} e sele em fogo alto.`, s: 300 },
        { t: `Refogue ${veg.name.pt}${carb ? ` e acompanhe com ${carb.name.pt}` : ''}.`, s: 180 },
        { t: dairy ? `Finalize com ${dairy.name.pt} para cremosidade fit.` : 'Sirva quente com gotas de limão.', s: null }
      ],
      en: [
        { t: `Season ${prot.name.en} (${protGrams}g) with ${prof.spice} and sear on high heat.`, s: 300 },
        { t: `Sauté ${veg.name.en}${carb ? ` and pair with ${carb.name.en}` : ''}.`, s: 180 },
        { t: dairy ? `Top with ${dairy.name.en} for extra creaminess.` : 'Serve hot with fresh lime.', s: null }
      ]
    }
  };
}
