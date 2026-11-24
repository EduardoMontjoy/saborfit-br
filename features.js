// SaborFit BR — funciones extra: modo cocina, temporizadores múltiples, plan de tiempo,
// sustitutos, planificador semanal, lista de compras agrupada, filtros por equipo,
// conservación / meal prep y "Mis platos" (fotos guardadas en el teléfono).
// Se carga ANTES del script principal; usa sus variables globales (lang, recipes, pantry…)
// solo dentro de funciones, que se ejecutan después.
const SF = (() => {
  const FX = {
    es: {
      subtitle: (n) => `${n} recetas • 5 países`,
      cook: 'Empezar a cocinar', stepOf: (a, b) => `Paso ${a} de ${b}`, prev: 'Anterior', next: 'Siguiente',
      finish: 'Terminar', read: 'Leer en voz alta', readOff: 'Voz apagada', ingredients: 'Ingredientes',
      startTimer: 'Iniciar', timerDone: '¡Tiempo!', timerToast: (l) => `${l}: ¡tiempo cumplido!`, step: 'Paso',
      allDone: '¡Plato listo!', allDoneSub: '¿Lo registras en tu día?', logIt: 'Registrar comida', close: 'Cerrar',
      swipeHint: 'Desliza o usa las flechas · la pantalla no se apagará',
      timeline: 'Plan de tiempo', tlSub: (par, seq) => `En paralelo: ~${par} min (en vez de ${seq} min uno tras otro)`,
      tlLegend: 'Barra rayada = espera: aprovecha para el siguiente paso', minShort: 'min',
      diff: { easy: 'Fácil', mid: 'Media', hard: 'Elaborada' },
      eq: { airfryer: 'Airfryer', pressure: 'Olla a presión', noOven: 'Sin horno', easy: 'Fácil' },
      cookedN: (n) => `Lo cocinaste ${n} ${n === 1 ? 'vez' : 'veces'}`,
      storage: 'Conservación y meal prep', fridge: 'Nevera', freezer: 'Congelador', reheat: 'Recalentar',
      mealPrep: 'Meal prep · 5 porciones', mealPrepToast: 'Cantidades para 5 porciones: reparte en 5 táperes',
      addWeek: 'A mi semana', cookedBtn: 'Lo cociné', photoBtn: 'Tomar o elegir foto', photoChange: 'Cambiar foto',
      notePh: '¿Cómo te salió? (opcional)', save: 'Guardar', cancel: 'Cancelar', saved: 'Guardado en Mis platos',
      myDishes: 'Mis platos', myDishesEmpty: 'Cuando cocines algo, toca “Lo cociné” dentro de la receta y guarda una foto: aparecerá aquí.',
      del: 'Borrar', openRecipe: 'Ver receta', rating: 'Tu nota',
      swapTitle: (n) => `No tengo: ${n}`, swapSub: 'Elige un reemplazo; las calorías y los macros se recalculan.',
      original: 'Usar el original', recipeHint: 'Sugerencia de la receta', inStock: 'en casa', swapped: 'reemplazo',
      swapToast: (n) => `Reemplazado por ${n}`,
      week: 'Semana', weekEyebrow: 'Planificador', weekTitle: 'Tu semana',
      weekSub: (n) => `<b>${n}</b> de 14 comidas planificadas`, autoPlan: 'Armar mi semana automáticamente',
      weekShop: 'Lista de compras de la semana', clearWeek: 'Vaciar', lunch: 'Almuerzo', dinner: 'Cena',
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      add: 'Elegir plato', avg: (k, p) => `Promedio por día: <b>${k}</b> kcal · <b>P ${p} g</b>`, people: 'Personas:',
      addedWeek: (d, s) => `Agregado al ${d} · ${s}`, pickSlot: '¿Para qué día?', weekShopToast: (n) => `${n} productos agregados a la lista`,
      weekEmptyShop: 'Planifica algunos platos primero', autoToast: 'Semana armada según tu despensa y tus macros',
      batchTip: (name, n, day) => `Batch cooking: cocina el ${name} de ${n} comidas de una vez el ${day} y guárdalo hasta 4 días en la nevera.`,
      shopTitle: 'Lista de compras', share: 'WhatsApp', copy: 'Copiar', clearDone: 'Quitar comprados', clearAll: 'Vaciar',
      shopEmpty: 'Tu lista está vacía. Agrega faltantes desde una receta o desde tu semana.', copied: '¡Lista copiada!',
      bought: (a, b) => `${a} de ${b} comprados`,
      store: {
        fresh: ['No se guarda: cómelo recién hecho', 'No congelar', 'Se sirve frío, al momento'],
        soup: ['3–4 días en envase cerrado', 'Hasta 3 meses (sin papa ni yuca)', 'Olla o microondas con un chorrito de agua'],
        fried: ['2–3 días', 'Hasta 2 meses', 'Airfryer a 180 °C 4–5 min para que vuelva a quedar crocante'],
        salad: ['1–2 días; guarda el aliño aparte', 'No congelar', 'Se sirve frío'],
        egg: ['1 día; mejor recién hecho', 'No congelar', 'Sartén a fuego bajo o microondas 30 s'],
        base: ['3 días en envase cerrado', 'Hasta 2 meses en porciones', 'Microondas tapado con 1 cda de agua'],
        drink: ['Hasta 24 h en jarra tapada; agita antes de servir', 'En cubitos, hasta 1 mes', 'Sírvela bien fría'],
        cocktail: ['Prepárala al momento', 'No congelar', 'Sírvela bien fría'],
        frozen: ['No aplica', 'Hasta 1 mes, bien tapado', 'Sácalo 5 min antes de servir'],
        chilled: ['3–4 días tapado', 'No recomendado', 'Sírvelo frío'],
        baked: ['2 días a temperatura ambiente o 5 en la nevera', 'Hasta 2 meses en porciones', 'Microondas 15–20 s']
      }
    },
    pt: {
      subtitle: (n) => `${n} receitas • 5 países`,
      cook: 'Começar a cozinhar', stepOf: (a, b) => `Passo ${a} de ${b}`, prev: 'Anterior', next: 'Próximo',
      finish: 'Concluir', read: 'Ler em voz alta', readOff: 'Voz desligada', ingredients: 'Ingredientes',
      startTimer: 'Iniciar', timerDone: 'Tempo!', timerToast: (l) => `${l}: tempo esgotado!`, step: 'Passo',
      allDone: 'Prato pronto!', allDoneSub: 'Quer registrar no seu dia?', logIt: 'Registrar refeição', close: 'Fechar',
      swipeHint: 'Deslize ou use as setas · a tela não vai apagar',
      timeline: 'Plano de tempo', tlSub: (par, seq) => `Em paralelo: ~${par} min (em vez de ${seq} min em sequência)`,
      tlLegend: 'Barra listrada = espera: aproveite para o próximo passo', minShort: 'min',
      diff: { easy: 'Fácil', mid: 'Média', hard: 'Elaborada' },
      eq: { airfryer: 'Airfryer', pressure: 'Panela de pressão', noOven: 'Sem forno', easy: 'Fácil' },
      cookedN: (n) => `Você fez ${n} ${n === 1 ? 'vez' : 'vezes'}`,
      storage: 'Conservação e marmitas', fridge: 'Geladeira', freezer: 'Freezer', reheat: 'Reaquecer',
      mealPrep: 'Marmitas · 5 porções', mealPrepToast: 'Quantidades para 5 porções: divida em 5 marmitas',
      addWeek: 'Na minha semana', cookedBtn: 'Eu fiz', photoBtn: 'Tirar ou escolher foto', photoChange: 'Trocar foto',
      notePh: 'Como ficou? (opcional)', save: 'Salvar', cancel: 'Cancelar', saved: 'Salvo em Meus pratos',
      myDishes: 'Meus pratos', myDishesEmpty: 'Quando cozinhar algo, toque em “Eu fiz” dentro da receita e salve uma foto: ela aparece aqui.',
      del: 'Apagar', openRecipe: 'Ver receita', rating: 'Sua nota',
      swapTitle: (n) => `Não tenho: ${n}`, swapSub: 'Escolha um substituto; calorias e macros são recalculados.',
      original: 'Usar o original', recipeHint: 'Sugestão da receita', inStock: 'em casa', swapped: 'substituto',
      swapToast: (n) => `Substituído por ${n}`,
      week: 'Semana', weekEyebrow: 'Planejador', weekTitle: 'Sua semana',
      weekSub: (n) => `<b>${n}</b> de 14 refeições planejadas`, autoPlan: 'Montar minha semana automaticamente',
      weekShop: 'Lista de compras da semana', clearWeek: 'Limpar', lunch: 'Almoço', dinner: 'Jantar',
      days: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
      add: 'Escolher prato', avg: (k, p) => `Média por dia: <b>${k}</b> kcal · <b>P ${p} g</b>`, people: 'Pessoas:',
      addedWeek: (d, s) => `Adicionado: ${d} · ${s}`, pickSlot: 'Para qual dia?', weekShopToast: (n) => `${n} itens adicionados à lista`,
      weekEmptyShop: 'Planeje alguns pratos primeiro', autoToast: 'Semana montada com sua despensa e seus macros',
      batchTip: (name, n, day) => `Batch cooking: cozinhe o ${name} de ${n} refeições de uma vez na ${day} e guarde até 4 dias na geladeira.`,
      shopTitle: 'Lista de compras', share: 'WhatsApp', copy: 'Copiar', clearDone: 'Tirar comprados', clearAll: 'Limpar',
      shopEmpty: 'Sua lista está vazia. Adicione faltantes de uma receita ou da sua semana.', copied: 'Lista copiada!',
      bought: (a, b) => `${a} de ${b} comprados`,
      store: {
        fresh: ['Não guarde: coma na hora', 'Não congelar', 'Servido frio, na hora'],
        soup: ['3–4 dias em pote fechado', 'Até 3 meses (sem batata nem mandioca)', 'Panela ou micro-ondas com um pouco de água'],
        fried: ['2–3 dias', 'Até 2 meses', 'Airfryer a 180 °C 4–5 min para voltar a ficar crocante'],
        salad: ['1–2 dias; guarde o molho à parte', 'Não congelar', 'Servido frio'],
        egg: ['1 dia; melhor feito na hora', 'Não congelar', 'Frigideira em fogo baixo ou micro-ondas 30 s'],
        base: ['3 dias em pote fechado', 'Até 2 meses em porções', 'Micro-ondas tampado com 1 colher de água'],
        drink: ['Até 24 h em jarra tampada; mexa antes de servir', 'Em cubos, até 1 mês', 'Sirva bem gelada'],
        cocktail: ['Prepare na hora', 'Não congelar', 'Sirva bem gelada'],
        frozen: ['Não se aplica', 'Até 1 mês, bem tampado', 'Tire 5 min antes de servir'],
        chilled: ['3–4 dias tampado', 'Não recomendado', 'Sirva gelado'],
        baked: ['2 dias em temperatura ambiente ou 5 na geladeira', 'Até 2 meses em porções', 'Micro-ondas 15–20 s']
      }
    },
    en: {
      subtitle: (n) => `${n} recipes • 5 countries`,
      cook: 'Start cooking', stepOf: (a, b) => `Step ${a} of ${b}`, prev: 'Back', next: 'Next',
      finish: 'Finish', read: 'Read aloud', readOff: 'Voice off', ingredients: 'Ingredients',
      startTimer: 'Start', timerDone: 'Time!', timerToast: (l) => `${l}: time is up!`, step: 'Step',
      allDone: 'Dish ready!', allDoneSub: 'Log it to your day?', logIt: 'Log meal', close: 'Close',
      swipeHint: 'Swipe or use the arrows · the screen stays on',
      timeline: 'Time plan', tlSub: (par, seq) => `In parallel: ~${par} min (instead of ${seq} min back to back)`,
      tlLegend: 'Striped bar = waiting: use it for the next step', minShort: 'min',
      diff: { easy: 'Easy', mid: 'Medium', hard: 'Involved' },
      eq: { airfryer: 'Air fryer', pressure: 'Pressure cooker', noOven: 'No oven', easy: 'Easy' },
      cookedN: (n) => `You cooked it ${n} ${n === 1 ? 'time' : 'times'}`,
      storage: 'Storage & meal prep', fridge: 'Fridge', freezer: 'Freezer', reheat: 'Reheat',
      mealPrep: 'Meal prep · 5 servings', mealPrepToast: 'Amounts for 5 servings: split into 5 containers',
      addWeek: 'Add to my week', cookedBtn: 'I cooked it', photoBtn: 'Take or choose photo', photoChange: 'Change photo',
      notePh: 'How did it turn out? (optional)', save: 'Save', cancel: 'Cancel', saved: 'Saved to My dishes',
      myDishes: 'My dishes', myDishesEmpty: 'When you cook something, tap “I cooked it” inside the recipe and save a photo: it will show up here.',
      del: 'Delete', openRecipe: 'Open recipe', rating: 'Your rating',
      swapTitle: (n) => `I don’t have: ${n}`, swapSub: 'Pick a replacement; calories and macros are recalculated.',
      original: 'Use the original', recipeHint: 'Recipe suggestion', inStock: 'at home', swapped: 'swap',
      swapToast: (n) => `Replaced with ${n}`,
      week: 'Week', weekEyebrow: 'Planner', weekTitle: 'Your week',
      weekSub: (n) => `<b>${n}</b> of 14 meals planned`, autoPlan: 'Plan my week automatically',
      weekShop: 'Weekly shopping list', clearWeek: 'Clear', lunch: 'Lunch', dinner: 'Dinner',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      add: 'Pick a dish', avg: (k, p) => `Daily average: <b>${k}</b> kcal · <b>P ${p} g</b>`, people: 'Servings:',
      addedWeek: (d, s) => `Added: ${d} · ${s}`, pickSlot: 'Which day?', weekShopToast: (n) => `${n} items added to the list`,
      weekEmptyShop: 'Plan a few dishes first', autoToast: 'Week planned from your pantry and macros',
      batchTip: (name, n, day) => `Batch cooking: cook the ${name} for ${n} meals at once on ${day} and keep it up to 4 days in the fridge.`,
      shopTitle: 'Shopping list', share: 'WhatsApp', copy: 'Copy', clearDone: 'Remove bought', clearAll: 'Clear',
      shopEmpty: 'Your list is empty. Add missing items from a recipe or from your week.', copied: 'List copied!',
      bought: (a, b) => `${a} of ${b} bought`,
      store: {
        fresh: ['Do not store: eat it right away', 'Do not freeze', 'Served cold, freshly made'],
        soup: ['3–4 days in a closed container', 'Up to 3 months (without potato or cassava)', 'Pot or microwave with a splash of water'],
        fried: ['2–3 days', 'Up to 2 months', 'Air fryer at 180 °C for 4–5 min to crisp it again'],
        salad: ['1–2 days; keep the dressing apart', 'Do not freeze', 'Served cold'],
        egg: ['1 day; best freshly made', 'Do not freeze', 'Pan over low heat or microwave 30 s'],
        base: ['3 days in a closed container', 'Up to 2 months in portions', 'Microwave covered with 1 tbsp water'],
        drink: ['Up to 24 h in a covered jug; stir before serving', 'As ice cubes, up to 1 month', 'Serve well chilled'],
        cocktail: ['Make it fresh', 'Do not freeze', 'Serve well chilled'],
        frozen: ['Not applicable', 'Up to 1 month, well covered', 'Take it out 5 min before serving'],
        chilled: ['3–4 days covered', 'Not recommended', 'Serve cold'],
        baked: ['2 days at room temperature or 5 in the fridge', 'Up to 2 months in portions', 'Microwave 15–20 s']
      }
    }
  };
  const f = () => FX[lang];
  const ACCENT = { BRAZILIAN: '#4FB477', MEXICAN: '#E07A3F', PERUVIAN: '#E05252', COLOMBIAN: '#EFC23A', SPANISH: '#C9577A' };
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pById = (id) => PANTRY_DB.find((p) => p.id === id);
  const pName = (id) => { const p = pantry.find((x) => x.id === id); return p ? p.name[lang] : id; };
  const fmtG = (g) => (g >= 1000 ? `${(g / 1000).toFixed(g % 1000 ? 1 : 0)} kg` : `${Math.round(g)} g`);
  const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.max(0, s) % 60).padStart(2, '0')}`;
  const bridge = () => window.AndroidBridge;

  // ---------- Estado propio (guardado en localStorage) ----------
  const KEY = 'saborfit_br_fx';
  const st = { plan: Array.from({ length: 7 }, () => ({ l: null, d: null })), planPeople: 1, swaps: {}, eq: null, cooked: [] };
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (Array.isArray(s.plan) && s.plan.length === 7) st.plan = s.plan;
    if (s.planPeople) st.planPeople = s.planPeople;
    if (s.swaps) st.swaps = s.swaps;
  } catch {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify({ plan: st.plan, planPeople: st.planPeople, swaps: st.swaps })); } catch {} }

  function haptic(ms = 12) {
    try { if (bridge() && bridge().vibrate) bridge().vibrate(ms); else if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) navigator.vibrate(ms); } catch {}
  }

  // ---------- Ingredientes, sustitutos y macros ----------
  const baseId = (i) => (isFitMode && i.fitId ? i.fitId : i.id);
  const gramsOf = (i) => (isFitMode && i.fitGrams !== undefined ? i.fitGrams : i.grams);
  const ingIdOf = (r, i, idx) => st.swaps[`${r.id}:${idx}`] || baseId(i);
  const isSwapped = (r, idx) => !!st.swaps[`${r.id}:${idx}`];

  function adjust(r, m) {
    if (!m || !r || !r.ingredients) return m;
    let dk = 0, dp = 0, dc = 0, df = 0, any = false;
    r.ingredients.forEach((i, idx) => {
      const sw = st.swaps[`${r.id}:${idx}`];
      if (!sw) return;
      const a = pById(baseId(i)), b = pById(sw), g = gramsOf(i) / 100;
      if (!a || !b) return;
      any = true; dk += (b.kcal - a.kcal) * g; dp += (b.p - a.p) * g; dc += (b.c - a.c) * g; df += (b.f - a.f) * g;
    });
    if (!any) return m;
    return { ...m, kcal: Math.max(0, Math.round(m.kcal + dk)), p: Math.max(0, Math.round(m.p + dp)), c: Math.max(0, Math.round(m.c + dc)), f: Math.max(0, Math.round(m.f + df)) };
  }

  function openSwap(idx) {
    const r = activeRecipe; if (!r) return;
    const i = r.ingredients[idx], orig = pById(baseId(i)); if (!orig) return;
    const used = new Set(r.ingredients.map((x, k) => ingIdOf(r, x, k)));
    const inStock = new Set(pantry.filter((p) => p.inStock).map((p) => p.id));
    const g = gramsOf(i);
    const cands = PANTRY_DB.filter((p) => p.cat === orig.cat && p.id !== orig.id && !used.has(p.id))
      .map((p) => ({ p, home: inStock.has(p.id), d: Math.abs(p.p - orig.p) + Math.abs(p.c - orig.c) / 2 + Math.abs(p.kcal - orig.kcal) / 20 }))
      .sort((a, b) => (b.home - a.home) || (a.d - b.d)).slice(0, 7);
    const x = f();
    const delta = (p) => { const dk = Math.round((p.kcal - orig.kcal) * g / 100), dp = Math.round((p.p - orig.p) * g / 100); return `${dk >= 0 ? '+' : ''}${dk} kcal · P ${dp >= 0 ? '+' : ''}${dp} g`; };
    sheet(`
      <div class="sf-sheet-head"><div><div class="eyebrow" style="margin:0 0 6px;">SaborFit</div><div class="modal-title" style="margin:0;font-size:22px;">${esc(x.swapTitle(pName(orig.id)))}</div></div><button class="log-del" onclick="SF.closeSheet()">✕</button></div>
      <div class="subtitle">${x.swapSub}</div>
      ${i.sub ? `<div class="br-tip-box" style="margin:0 0 10px;"><b>${x.recipeHint}:</b> ${esc(typeof i.sub === 'object' ? i.sub[lang] : i.sub)}</div>` : ''}
      ${cands.map((c) => `
        <button class="sf-opt" onclick="SF.applySwap(${idx},'${c.p.id}')">
          <span><b>${esc(c.p.name[lang])}</b><small>${delta(c.p)}</small></span>
          ${c.home ? `<span class="stock-tag ok">${x.inStock}</span>` : ''}
        </button>`).join('')}
      ${isSwapped(r, idx) ? `<button class="sf-opt ghost" onclick="SF.applySwap(${idx},null)"><span><b>${x.original}: ${esc(pName(orig.id))}</b></span></button>` : ''}
    `);
  }
  function applySwap(idx, id) {
    const k = `${activeRecipe.id}:${idx}`;
    if (id) st.swaps[k] = id; else delete st.swaps[k];
    save(); closeSheet(); haptic(); renderModal(); render();
    if (id) showToast(f().swapToast(pName(id)));
  }

  // ---------- Etiquetas: equipo, dificultad, conservación ----------
  function tags(r) {
    if (r._tags) return r._tags;
    const txt = ((r.title.es || '') + ' ' + (r.steps.es || []).map((s) => s.t).join(' ')).toLowerCase();
    const n = (r.steps.es || []).length;
    const airfryer = /airfryer|air fryer/.test(txt);
    const pressure = /presión/.test(txt);
    const oven = /horno|gratin|hornea/.test(txt);
    const noOven = !oven || airfryer;
    const tech = (txt.match(/amasa|masa|voltea|desmold|gratina|flamb|emulsion|poch|caramel|fermenta|estira|rellena|baño maría|merengue|almíbar/g) || []).length;
    let diff = 'mid';
    if (r.time <= 20 && tech <= 1 && n <= 7) diff = 'easy';
    else if (r.time >= 40 || tech >= 3) diff = 'hard';
    let store = 'base';
    const type = r.type || 'dish';
    if (type === 'drink') store = r.alcohol ? 'cocktail' : 'drink';
    else if (type === 'dessert') store = /helad|congel|paleta|sorbete/.test(txt) ? 'frozen' : /gelatina|mousse|pudín|pudim|flan|refriger|nevera|tres leches|cheesecake/.test(txt) ? 'chilled' : 'baked';
    else {
      const ti = (r.title.es || '').toLowerCase();
      if (/ceviche|tiradito|aguachile|tartar/.test(ti)) store = 'fresh';
      else if (/gazpacho/.test(ti)) store = 'chilled';
      else if (/sopa|caldo|ajiaco|sancocho|chupe|aguadito|pozole|parihuela|changua|guiso|estofad|feijoada|potaje|fabada|lentejas|moqueca|seco de|sudado|riojana|vaca atolada|carne de panela|bobó|frijoles|cazuela|sobrebarriga|baião|pisto|tinga|chilindrón|vizcaína/.test(ti)) store = 'soup';
      else if (/ensalada|salada|salpicão|campera/.test(ti)) store = 'salad';
      else if (/huevo|ovos?\b|tortilla española|pericos|crepioca/.test(ti)) store = 'egg';
      else if (/crocante|empanad|patacón|parmegiana|passarinho|salchipapa|bolinho|coxinha|tostada|quesadilla|pão de queijo|bauru|mollete|mojarra|bravas|anticucho|espetinho|churrasco/.test(ti)) store = 'fried';
    }
    r._tags = { airfryer, pressure, noOven, diff, store, mealPrep: type === 'dish' && ['soup', 'fried', 'base'].includes(store) };
    return r._tags;
  }
  function passEq(r) {
    if (!st.eq) return true;
    const t = tags(r);
    return st.eq === 'easy' ? t.diff === 'easy' : !!t[st.eq];
  }
  function toggleEq(k) { st.eq = st.eq === k ? null : k; haptic(); render(); }
  function eqFiltersHtml() {
    const x = f();
    return ['airfryer', 'pressure', 'noOven', 'easy'].map((k) => `<button class="qf-pill sf-eq ${st.eq === k ? 'active' : ''}" onclick="SF.toggleEq('${k}')">${x.eq[k]}</button>`).join('');
  }

  // ---------- Bloques del modal de receta ----------
  function modalTopHtml(r) {
    const x = f(), t = tags(r);
    const n = st.cooked.filter((c) => c.rid === r.id).length;
    const badges = [`<span class="sf-badge d-${t.diff}">${x.diff[t.diff]}</span>`];
    if (t.airfryer) badges.push(`<span class="sf-badge">${x.eq.airfryer}</span>`);
    if (t.pressure) badges.push(`<span class="sf-badge">${x.eq.pressure}</span>`);
    if (t.noOven) badges.push(`<span class="sf-badge">${x.eq.noOven}</span>`);
    if (n) badges.push(`<span class="sf-badge gold">${x.cookedN(n)}</span>`);
    return `<div class="sf-badges">${badges.join('')}</div>`;
  }
  function cookCtaHtml() {
    return `<button class="btn-cta sf-cook-cta" onclick="SF.openCook()">${ICONS.play.replace('<svg', '<svg')} ${f().cook}</button>`;
  }
  function ringsHtml(m, people) {
    const tr = t(), tgt = goalTargets[goal];
    const ring = (label, v, max, color, unit) => {
      const r = 21, c = 2 * Math.PI * r, off = c * (1 - Math.min(v / max, 1));
      return `<div class="sf-ring"><div class="ring-box"><svg viewBox="0 0 54 54"><circle class="ring-bg" cx="27" cy="27" r="${r}" style="stroke:${color}"/><circle class="ring-fg" cx="27" cy="27" r="${r}" style="stroke:${color}" stroke-dasharray="${c}" stroke-dashoffset="${off}"/></svg><div class="ring-val">${Math.round(v)}${unit}</div></div><div class="ring-label">${label}<small>${Math.round(v * 100 / max)}% ${{ es: 'del día', pt: 'do dia', en: 'of day' }[lang]}</small></div></div>`;
    };
    return `<div class="sf-rings">
      ${ring('kcal', m.kcal * people, tgt.kcal, 'var(--c-kcal)', '')}
      ${ring(tr.protein, m.p * people, tgt.p, 'var(--c-prot)', 'g')}
      ${ring(tr.carbs, m.c * people, tgt.c, 'var(--c-carb)', 'g')}
      ${ring(tr.fat, m.f * people, tgt.f, 'var(--c-fat)', 'g')}
    </div>`;
  }
  function storageHtml(r) {
    const x = f(), t = tags(r), s = x.store[t.store];
    return `<div class="section-title"><span>${x.storage}</span></div>
      <div class="sf-store">
        <div><b>${x.fridge}</b><span>${s[0]}</span></div>
        <div><b>${x.freezer}</b><span>${s[1]}</span></div>
        <div><b>${x.reheat}</b><span>${s[2]}</span></div>
      </div>
      ${t.mealPrep ? `<button class="shop-add-btn" onclick="SF.mealPrep()">${x.mealPrep}</button>` : ''}`;
  }
  function mealPrep() { servingsPeople = 5; haptic(); renderModal(); showToast(f().mealPrepToast); }
  function actionsHtml() {
    const x = f();
    return `<div class="modal-actions sf-actions">
      <button class="btn-sec" onclick="SF.pickDay()">${x.addWeek}</button>
      <button class="btn-sec" onclick="SF.cookedStart()">${x.cookedBtn}</button>
    </div>`;
  }

  // ---------- Plan de tiempo (pasos en paralelo) ----------
  const PASSIVE = /hierv|cuec|cuéc|cocina el arroz|hornea|horno|airfryer|marin|repos|refriger|nevera|remoj|presión|tapa y cocina|tapa bien|cocina tapad|a fuego bajo|deja|enfr/i;
  const NEEDS = /^(retira|desmenu|deshebr|desmech|escurr|aplast|pela |pela y|devuelve|sirve|corta la carne tierna|trocea|abre |desmold|incorpora el pollo|agrega el pollo|monta|arma|rellena)/i;
  function timeline(r) {
    const es = r.steps.es || [], loc = r.steps[lang] || es;
    if (!es.some((s) => s.s)) return null;
    let cursor = 0, pend = 0; const rows = [];
    es.forEach((s, i) => {
      const dur = s.s ? s.s / 60 : 2;
      const passive = !!s.s && s.s >= 300 && PASSIVE.test(s.t);
      if (NEEDS.test(s.t.trim()) || i === es.length - 1) cursor = Math.max(cursor, pend);
      const start = cursor, end = start + dur;
      rows.push({ i, start, dur, passive, label: (loc[i] || s).t });
      if (passive) { cursor += 1.5; pend = Math.max(pend, end); } else cursor = end;
    });
    const total = Math.round(Math.max(cursor, pend));
    const seq = Math.round(es.reduce((a, s) => a + (s.s ? s.s / 60 : 2), 0));
    return { rows, total, seq };
  }
  function timelineHtml(r) {
    const tl = timeline(r); if (!tl || tl.seq - tl.total < 3) return '';
    const x = f();
    return `<div class="section-title"><span>${x.timeline}</span><span>~${tl.total} ${x.minShort}</span></div>
      <div class="sf-tl">
        <div class="sf-tl-sub">${x.tlSub(tl.total, tl.seq)}</div>
        ${tl.rows.map((w) => `<div class="sf-tl-row" title="${esc(w.label)}"><span>${w.i + 1}</span><div class="sf-tl-track"><i class="${w.passive ? 'wait' : ''}" style="left:${(w.start * 100 / tl.total).toFixed(1)}%;width:${Math.max(2.5, w.dur * 100 / tl.total).toFixed(1)}%"></i></div><em>${Math.round(w.start)}′</em></div>`).join('')}
        <div class="sf-tl-legend">${x.tlLegend}</div>
      </div>`;
  }

  // ---------- Temporizadores múltiples ----------
  const timers = [];
  let tickId = null;
  function timerKey(r, idx) { return `${r.id}:${idx}`; }
  function startTimer(idx, sec, ev) {
    if (ev) ev.stopPropagation();
    const r = activeRecipe; if (!r) return;
    const key = timerKey(r, idx);
    const old = timers.findIndex((tm) => tm.key === key);
    if (old >= 0) timers.splice(old, 1);
    timers.push({ key, label: `${r.title[lang].split(/[(/]/)[0].trim().slice(0, 18)} · ${f().step} ${idx + 1}`, end: Date.now() + sec * 1000, done: false });
    haptic(20);
    unlockAudio();
    if (!tickId) tickId = setInterval(tick, 500);
    tick();
  }
  function stopTimer(key) { const i = timers.findIndex((tm) => tm.key === key); if (i >= 0) timers.splice(i, 1); tick(); }
  let audioCtx = null;
  function unlockAudio() { try { audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)(); if (audioCtx.state === 'suspended') audioCtx.resume(); } catch {} }
  function alarm() {
    try {
      unlockAudio();
      [0, 0.35, 0.7].forEach((d) => {
        const o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.connect(g); g.connect(audioCtx.destination); o.frequency.value = 880; g.gain.value = 0.15;
        o.start(audioCtx.currentTime + d); o.stop(audioCtx.currentTime + d + 0.22);
      });
    } catch { try { playBeep(); } catch {} }
    try { if (bridge() && bridge().vibrate) bridge().vibrate(600); else if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) navigator.vibrate([300, 150, 300]); } catch {}
  }
  function tick() {
    const now = Date.now();
    timers.forEach((tm) => {
      if (!tm.done && now >= tm.end) { tm.done = true; alarm(); showToast(f().timerToast(tm.label)); }
    });
    const tray = document.getElementById('sfTimers');
    if (tray) {
      tray.innerHTML = timers.map((tm) => {
        const left = Math.ceil((tm.end - now) / 1000);
        return `<button class="sf-timer ${tm.done ? 'done' : ''}" onclick="SF.stopTimer('${tm.key}')"><b>${tm.done ? f().timerDone : mmss(left)}</b><span>${esc(tm.label)}</span><i>✕</i></button>`;
      }).join('');
      tray.classList.toggle('show', timers.length > 0);
    }
    document.querySelectorAll('[data-tkey]').forEach((b) => {
      const tm = timers.find((x) => x.key === b.dataset.tkey);
      if (tm) { b.classList.add('running'); b.textContent = tm.done ? `✓ ${f().timerDone}` : `⏱ ${mmss(Math.ceil((tm.end - now) / 1000))}`; }
      else if (b.classList.contains('running')) { b.classList.remove('running'); b.textContent = b.dataset.label; }
    });
    if (!timers.length && tickId) { clearInterval(tickId); tickId = null; }
  }
  function timerBtnHtml(r, idx, s) {
    const label = `▶ ${Math.max(1, Math.round(s / 60))} min`;
    return `<button class="timer-btn" data-tkey="${timerKey(r, idx)}" data-label="${label}" onclick="SF.startTimer(${idx}, ${s}, event)">${label}</button>`;
  }

  // ---------- Modo cocina ----------
  const cook = { on: false, i: 0, voice: false, ings: false, wake: null };
  function openCook() {
    if (!activeRecipe) return;
    cook.on = true; cook.i = Math.min(checkedSteps.size, activeRecipe.steps[lang].length - 1); cook.ings = false;
    document.getElementById('sfCook').classList.add('open');
    keepAwake(true); unlockAudio(); haptic(20); renderCook();
  }
  function closeCook() {
    cook.on = false; speakStop(); keepAwake(false);
    document.getElementById('sfCook').classList.remove('open');
    renderModal();
  }
  async function keepAwake(on) {
    try { if (bridge() && bridge().keepAwake) bridge().keepAwake(on); } catch {}
    try {
      if (on && 'wakeLock' in navigator) cook.wake = await navigator.wakeLock.request('screen');
      else if (!on && cook.wake) { cook.wake.release(); cook.wake = null; }
    } catch {}
  }
  document.addEventListener('visibilitychange', () => { if (cook.on && document.visibilityState === 'visible') keepAwake(true); });
  function cookGo(d) {
    const steps = activeRecipe.steps[lang];
    if (d > 0) checkedSteps.add(cook.i);
    const ni = cook.i + d;
    if (ni >= steps.length) { cook.i = steps.length; renderCook(); launchConfetti(); haptic(40); return; }
    cook.i = Math.max(0, ni); haptic(); renderCook();
  }
  function toggleVoice() { cook.voice = !cook.voice; if (cook.voice) speakStep(); else speakStop(); renderCook(false); }
  function toggleIngs() { cook.ings = !cook.ings; renderCook(false); }
  const voiceLang = () => ({ es: 'es-ES', pt: 'pt-BR', en: 'en-US' }[lang]);
  function speak(text) {
    speakStop();
    try { if (bridge() && bridge().speak) { bridge().speak(text, voiceLang()); return; } } catch {}
    try {
      if (!('speechSynthesis' in window)) return;
      const u = new SpeechSynthesisUtterance(text); u.lang = voiceLang(); u.rate = 0.98;
      const v = speechSynthesis.getVoices().find((vv) => vv.lang && vv.lang.toLowerCase().startsWith(lang)); if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch {}
  }
  function speakStop() { try { if (bridge() && bridge().stopSpeak) bridge().stopSpeak(); } catch {} try { if ('speechSynthesis' in window) speechSynthesis.cancel(); } catch {} }
  function speakStep() {
    const s = activeRecipe.steps[lang][cook.i];
    if (s) speak(`${f().step} ${cook.i + 1}. ${s.t}`);
  }
  function renderCook(read = true) {
    const r = activeRecipe, x = f(), steps = r.steps[lang], n = steps.length;
    const box = document.getElementById('sfCook');
    const ingNames = Object.fromEntries(pantry.map((p) => [p.id, p.name[lang]]));
    const finished = cook.i >= n;
    const s = steps[Math.min(cook.i, n - 1)];
    box.innerHTML = `
      <div class="sf-cook-top">
        <button class="log-del" onclick="SF.closeCook()" aria-label="${x.close}">✕</button>
        <div class="sf-cook-title">${esc(r.title[lang])}</div>
        <button class="sf-round ${cook.voice ? 'on' : ''}" onclick="SF.toggleVoice()" title="${cook.voice ? x.read : x.readOff}">${cook.voice ? '🔊' : '🔈'}</button>
      </div>
      <div class="sf-dots">${steps.map((_, k) => `<i class="${k < cook.i ? 'past' : k === cook.i ? 'now' : ''}"></i>`).join('')}</div>
      <button class="sf-ing-toggle" onclick="SF.toggleIngs()">${x.ingredients} · ${servingsPeople} ${{ es: 'pers.', pt: 'pess.', en: 'serv.' }[lang]} ${cook.ings ? '▲' : '▼'}</button>
      ${cook.ings ? `<div class="sf-cook-ings">${r.ingredients.map((i, k) => { const g = gramsOf(i); return g > 0 ? `<div><b>${fmtG(g * servingsPeople)}</b> ${esc(ingNames[ingIdOf(r, i, k)] || ingIdOf(r, i, k))}</div>` : ''; }).join('')}${(r.extras || []).map((e) => `<div><b>${EXTRAS.extraQty(e, lang, servingsPeople)}</b> ${esc(EXTRAS.extraName(e.id, lang))}</div>`).join('')}</div>` : ''}
      <div class="sf-cook-body" id="sfCookBody">
        ${finished ? `
          <div class="sf-cook-step-n">✓</div>
          <div class="sf-cook-text">${x.allDone}</div>
          <div class="sf-cook-sub">${x.allDoneSub}</div>
          <button class="btn-cta" style="margin-top:22px;" onclick="SF.closeCook();logActiveMeal()">${x.logIt}</button>
        ` : `
          <div class="sf-cook-step-n">${x.stepOf(cook.i + 1, n)}</div>
          <div class="sf-cook-text">${esc(s.t)}</div>
          ${s.s ? `<button class="sf-cook-timer" data-tkey="${timerKey(r, cook.i)}" data-label="▶ ${x.startTimer} ${mmss(s.s)}" onclick="SF.startTimer(${cook.i}, ${s.s}, event)">▶ ${x.startTimer} ${mmss(s.s)}</button>` : ''}
        `}
      </div>
      <div class="sf-cook-hint">${x.swipeHint}</div>
      <div class="sf-cook-nav">
        <button class="btn-sec" onclick="SF.cookGo(-1)" ${cook.i === 0 ? 'disabled' : ''}>‹ ${x.prev}</button>
        ${finished ? `<button class="btn-cta" style="flex:2;margin:0;" onclick="SF.closeCook()">${x.close}</button>`
                   : `<button class="btn-cta" style="flex:2;margin:0;" onclick="SF.cookGo(1)">${cook.i === n - 1 ? x.finish : x.next} ›</button>`}
      </div>`;
    tick();
    if (read && cook.voice && !finished) speakStep();
  }
  (function bindSwipe() {
    let x0 = null, y0 = null;
    document.addEventListener('touchstart', (e) => { if (!cook.on) return; x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    document.addEventListener('touchend', (e) => {
      if (!cook.on || x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) cookGo(dx < 0 ? 1 : -1);
    }, { passive: true });
    document.addEventListener('keydown', (e) => {
      if (!cook.on) return;
      if (e.key === 'ArrowRight') cookGo(1); else if (e.key === 'ArrowLeft') cookGo(-1); else if (e.key === 'Escape') closeCook();
    });
  })();

  // ---------- Hoja genérica (sub-modales) ----------
  function sheet(html) {
    const el = document.getElementById('sfSheet');
    document.getElementById('sfSheetBody').innerHTML = html;
    el.classList.add('open');
  }
  function closeSheet() { document.getElementById('sfSheet').classList.remove('open'); }

  // ---------- Planificador semanal ----------
  const slotName = (s) => (s === 'l' ? f().lunch : f().dinner);
  const dishPool = () => recipes.filter((r) => (r.type || 'dish') === 'dish' && !String(r.id).startsWith('brain'));
  function planIds() { return st.plan.flatMap((d) => [d.l, d.d]).filter(Boolean); }
  function pickFor(day, exclude) {
    const tgt = goalTargets[goal];
    const dayC = [st.plan[day].l, st.plan[day].d].filter(Boolean).map((id) => (recipes.find((r) => r.id === id) || {}).country);
    const prevC = day > 0 ? [st.plan[day - 1].l, st.plan[day - 1].d].filter(Boolean).map((id) => (recipes.find((r) => r.id === id) || {}).country) : [];
    let best = null, bs = -1e9;
    dishPool().forEach((r) => {
      if (exclude.has(r.id)) return;
      const m = getMacros(r);
      let s = calcMatch(r) * 0.6 + Math.min(m.p, 50) * 1.1 - Math.abs(m.kcal - tgt.kcal * 0.33) / 14 + Math.random() * 22;
      if (dayC.includes(r.country)) s -= 18;
      if (prevC.includes(r.country)) s -= 6;
      if (s > bs) { bs = s; best = r; }
    });
    return best ? best.id : null;
  }
  function autoPlan() {
    st.plan.forEach((d) => { d.l = null; d.d = null; });
    const used = new Set();
    for (let day = 0; day < 7; day++) for (const s of ['l', 'd']) { const id = pickFor(day, used); st.plan[day][s] = id; if (id) used.add(id); }
    save(); haptic(30); launchConfetti(); render(); showToast(f().autoToast);
  }
  function reroll(day, s) { const ex = new Set(planIds()); st.plan[day][s] = pickFor(day, ex); save(); haptic(); render(); }
  function clearSlot(day, s) { st.plan[day][s] = null; save(); haptic(); render(); }
  function clearWeek() { st.plan.forEach((d) => { d.l = null; d.d = null; }); save(); render(); }
  function setPlanPeople(d) { st.planPeople = Math.min(10, Math.max(1, st.planPeople + d)); save(); render(); }
  function pickDay() {
    const r = activeRecipe, x = f(); if (!r) return;
    sheet(`
      <div class="sf-sheet-head"><div><div class="eyebrow" style="margin:0 0 6px;">${x.weekTitle}</div><div class="modal-title" style="margin:0;font-size:22px;">${x.pickSlot}</div></div><button class="log-del" onclick="SF.closeSheet()">✕</button></div>
      ${x.days.map((dn, k) => `<div class="sf-day-pick"><span>${dn}</span>${['l', 'd'].map((s) => {
        const cur = st.plan[k][s] && recipes.find((rr) => rr.id === st.plan[k][s]);
        return `<button class="${cur ? 'taken' : ''}" onclick="SF.setSlot(${k},'${s}')"><b>${slotName(s)}</b><small>${cur ? esc(cur.title[lang]) : '—'}</small></button>`;
      }).join('')}</div>`).join('')}
    `);
  }
  function setSlot(day, s) {
    st.plan[day][s] = activeRecipe.id; save(); closeSheet(); haptic(20);
    showToast(f().addedWeek(f().days[day], slotName(s)));
  }
  function slotHtml(day, s) {
    const id = st.plan[day][s], r = id && recipes.find((x) => x.id === id), x = f();
    if (!r) return `<button class="sf-slot empty" onclick="SF.reroll(${day},'${s}')"><small>${slotName(s)}</small><b>+ ${x.add}</b></button>`;
    const m = getMacros(r);
    return `<div class="sf-slot">
      <img src="${thumbSrc(r.img)}" decoding="async" alt="" loading="lazy" onclick="openRecipe('${r.id}')" onerror="this.style.visibility='hidden'"/>
      <div class="sf-slot-main" onclick="openRecipe('${r.id}')"><small>${slotName(s)} · <i class="c-dot" style="background:${ACCENT[r.country] || 'var(--gold)'}"></i></small><b>${esc(r.title[lang])}</b><span>${m.kcal} kcal · P ${m.p} g</span></div>
      <div class="sf-slot-btns"><button onclick="SF.reroll(${day},'${s}')" title="↻">↻</button><button onclick="SF.clearSlot(${day},'${s}')">✕</button></div>
    </div>`;
  }
  function batchTips() {
    const x = f(), out = [];
    const GROUPS = [
      { ids: ['arroz_branco', 'arroz'], name: { es: 'arroz', pt: 'arroz', en: 'rice' } },
      { ids: ['feijao', 'feijao_preto'], name: { es: 'frijol', pt: 'feijão', en: 'beans' } }
    ];
    GROUPS.forEach((gr) => {
      const meals = [];
      st.plan.forEach((d, k) => ['l', 'd'].forEach((s) => {
        const r = d[s] && recipes.find((rr) => rr.id === d[s]);
        if (r && r.ingredients.some((i, idx) => gramsOf(i) > 0 && gr.ids.includes(ingIdOf(r, i, idx)))) meals.push(k);
      }));
      if (meals.length >= 2) out.push(x.batchTip(gr.name[lang], meals.length, x.days[meals[0]].toLowerCase()));
    });
    return out;
  }
  function renderPlan() {
    const x = f(), ids = planIds();
    const days = st.plan.map((d) => [d.l, d.d].filter(Boolean).map((id) => recipes.find((r) => r.id === id)).filter(Boolean));
    const filled = days.filter((d) => d.length);
    const avgK = filled.length ? Math.round(filled.reduce((a, d) => a + d.reduce((b, r) => b + getMacros(r).kcal, 0), 0) / filled.length) : 0;
    const avgP = filled.length ? Math.round(filled.reduce((a, d) => a + d.reduce((b, r) => b + getMacros(r).p, 0), 0) / filled.length) : 0;
    const tips = batchTips();
    const today = (new Date().getDay() + 6) % 7;
    return `<div class="anim-in">
      <div class="eyebrow">SaborFit · ${x.weekEyebrow}</div>
      <div class="hero-title">${ids.length}<em>${x.weekTitle}</em></div>
      <div class="hero-sub">${x.weekSub(ids.length)}${filled.length ? ` · ${x.avg(avgK, avgP)}` : ''}</div>
      <button class="btn-cta" onclick="SF.autoPlan()">${ICONS.spark} ${x.autoPlan}</button>
      <div class="people-bar"><span style="font-size:13px;">${x.people} <b>${st.planPeople}</b></span><div class="stepper"><button class="step-btn" onclick="SF.setPlanPeople(-1)">−</button><button class="step-btn" onclick="SF.setPlanPeople(1)">+</button></div></div>
      <div class="modal-actions" style="margin:0 0 14px;">
        <button class="btn-sec" onclick="SF.clearWeek()">${x.clearWeek}</button>
        <button class="btn-sec" style="flex:2" onclick="SF.weekShop()">${ICONS.cart.replace('<svg', '<svg class="sf-ico"')} ${x.weekShop}</button>
      </div>
      ${tips.map((tp) => `<div class="br-tip-box">${esc(tp)}</div>`).join('')}
      ${x.days.map((dn, k) => `<div class="glass-card sf-day ${k === today ? 'today' : ''}">
        <div class="sf-day-name">${dn}</div>
        ${slotHtml(k, 'l')}${slotHtml(k, 'd')}
      </div>`).join('')}
    </div>`;
  }
  function weekShop() {
    const ids = planIds();
    if (!ids.length) { showToast(f().weekEmptyShop); return; }
    const stock = new Set(pantry.filter((p) => p.inStock).map((p) => p.id));
    let n = 0;
    ids.forEach((id) => {
      const r = recipes.find((x) => x.id === id); if (!r) return;
      r.ingredients.forEach((i, idx) => {
        const ingId = ingIdOf(r, i, idx), g = gramsOf(i) * st.planPeople;
        if (stock.has(ingId) || g <= 0) return;
        const ex = shoppingList.find((s) => s.id === ingId);
        if (ex) { ex.grams += g; ex.done = false; } else { shoppingList.push({ id: ingId, grams: g }); n++; }
      });
    });
    updateShopBadge(); saveState(); showToast(f().weekShopToast(n)); openShoppingModal();
  }

  // ---------- Lista de compras agrupada ----------
  function shopHtml() {
    const x = f(), tr = t();
    if (!shoppingList.length) return `${shopHead()}<div class="subtitle">${x.shopEmpty}</div>`;
    const order = ['PROTEIN', 'VEGGIE', 'CARB_BR', 'DAIRY', 'PANTRY', 'SWEET'];
    const groups = {};
    shoppingList.forEach((s, idx) => { const c = (pById(s.id) || {}).cat || 'PANTRY'; (groups[c] = groups[c] || []).push({ s, idx }); });
    const done = shoppingList.filter((s) => s.done).length;
    return `${shopHead()}
      <div class="sf-shop-progress"><span>${x.bought(done, shoppingList.length)}</span><div class="progress-line"><div style="width:${done * 100 / shoppingList.length}%"></div></div></div>
      ${Object.keys(groups).sort((a, b) => order.indexOf(a) - order.indexOf(b)).map((c) => `
        <div class="section-title" style="margin-top:14px;"><span>${clean((tr.cats && tr.cats[c]) || c)}</span><span>${groups[c].length}</span></div>
        ${groups[c].sort((a, b) => (a.s.done ? 1 : 0) - (b.s.done ? 1 : 0)).map(({ s, idx }) => `
          <div class="ing-item sf-shop-item ${s.done ? 'done' : ''}" onclick="SF.toggleBought(${idx})">
            <span style="display:flex;align-items:center;"><span class="tick">${s.done ? '✓' : ''}</span><span><b>${fmtG(s.grams)}</b> ${esc(pName(s.id))}</span></span>
            <button class="log-del" onclick="event.stopPropagation();removeShopItem(${idx})">✕</button>
          </div>`).join('')}`).join('')}
      <div class="modal-actions" style="margin-top:16px;">
        <button class="btn-sec" onclick="SF.clearBought()">${done ? x.clearDone : x.clearAll}</button>
        <button class="btn-sec" onclick="SF.copyShop()">${x.copy}</button>
        <button class="btn-cta" style="flex:1.4;margin:0;" onclick="SF.shareShop()">${x.share}</button>
      </div>`;
  }
  function shopHead() {
    return `<div class="sf-sheet-head"><div><div class="eyebrow" style="margin:0 0 6px;">SaborFit</div><div class="modal-title" style="margin:0;font-size:24px;">${f().shopTitle}</div></div><button class="log-del" onclick="closeShopModal()">✕</button></div>`;
  }
  function toggleBought(idx) { const s = shoppingList[idx]; if (!s) return; s.done = !s.done; haptic(); saveState(); openShoppingModal(); }
  function clearBought() {
    const any = shoppingList.some((s) => s.done);
    shoppingList = any ? shoppingList.filter((s) => !s.done) : [];
    updateShopBadge(); saveState(); openShoppingModal();
  }
  function shopText() {
    const tr = t();
    const groups = {};
    shoppingList.filter((s) => !s.done).forEach((s) => { const c = (pById(s.id) || {}).cat || 'PANTRY'; (groups[c] = groups[c] || []).push(s); });
    return `🛒 SaborFit — ${f().shopTitle}\n` + Object.entries(groups).map(([c, arr]) => `\n*${clean((tr.cats && tr.cats[c]) || c)}*\n` + arr.map((s) => `▫️ ${fmtG(s.grams)} ${pName(s.id)}`).join('\n')).join('\n');
  }
  function copyShop() { navigator.clipboard?.writeText(shopText()).catch(() => {}); showToast(f().copied); }
  function shareShop() { window.open(`https://wa.me/?text=${encodeURIComponent(shopText())}`, '_blank'); }

  // ---------- Mis platos (fotos en IndexedDB, con respaldo en localStorage) ----------
  const LSK = 'saborfit_cooked';
  const idb = {
    db: null,
    open() {
      if (this.db) return Promise.resolve(this.db);
      return new Promise((res, rej) => {
        try {
          const q = indexedDB.open('saborfit', 1);
          q.onupgradeneeded = () => q.result.createObjectStore('cooked', { keyPath: 'id' });
          q.onsuccess = () => { this.db = q.result; res(this.db); };
          q.onerror = () => rej(q.error);
        } catch (e) { rej(e); }
      });
    },
    async run(mode, fn) { const db = await this.open(); return new Promise((res, rej) => { const tx = db.transaction('cooked', mode); const out = fn(tx.objectStore('cooked')); tx.oncomplete = () => res(out && out.result); tx.onerror = () => rej(tx.error); }); },
    all() { return this.run('readonly', (s) => s.getAll()); },
    put(o) { return this.run('readwrite', (s) => s.put(o)); },
    del(id) { return this.run('readwrite', (s) => s.delete(id)); }
  };
  async function loadCooked() {
    try { st.cooked = (await idb.all()) || []; }
    catch { try { st.cooked = JSON.parse(localStorage.getItem(LSK) || '[]'); } catch { st.cooked = []; } }
    st.cooked.sort((a, b) => b.id - a.id);
    if (typeof currentTab !== 'undefined' && currentTab === 'receitas') render();
  }
  async function persistCooked(o, remove) {
    try { if (remove) await idb.del(o.id); else await idb.put(o); }
    catch { try { localStorage.setItem(LSK, JSON.stringify(st.cooked)); } catch {} }
  }
  const draft = { img: null, stars: 0 };
  function cookedStart() {
    if (!activeRecipe) return;
    draft.img = null; draft.stars = 0; drawCookedSheet();
  }
  function drawCookedSheet() {
    const x = f(), r = activeRecipe;
    sheet(`
      <div class="sf-sheet-head"><div><div class="eyebrow" style="margin:0 0 6px;">${x.myDishes}</div><div class="modal-title" style="margin:0;font-size:22px;">${esc(r.title[lang])}</div></div><button class="log-del" onclick="SF.closeSheet()">✕</button></div>
      <label class="sf-photo-drop ${draft.img ? 'has' : ''}">
        ${draft.img ? `<img src="${draft.img}" alt=""/>` : `<span>📸<br>${x.photoBtn}</span>`}
        <input type="file" accept="image/*" capture="environment" onchange="SF.photoPicked(this)" hidden />
      </label>
      ${draft.img ? `<div class="sf-photo-change">${x.photoChange}</div>` : ''}
      <div class="sf-stars"><span>${x.rating}</span>${[1, 2, 3, 4, 5].map((n) => `<button class="${n <= draft.stars ? 'on' : ''}" onclick="SF.setStars(${n})">★</button>`).join('')}</div>
      <textarea id="sfNote" class="search-box sf-note" rows="2" placeholder="${x.notePh}"></textarea>
      <div class="modal-actions"><button class="btn-sec" onclick="SF.closeSheet()">${x.cancel}</button><button class="btn-cta" style="flex:2;margin:0;" onclick="SF.saveCooked()">${x.save}</button></div>
    `);
  }
  function setStars(n) { const note = document.getElementById('sfNote')?.value || ''; draft.stars = n; haptic(); drawCookedSheet(); document.getElementById('sfNote').value = note; }
  function photoPicked(input) {
    const file = input.files && input.files[0]; if (!file) return;
    const note = document.getElementById('sfNote')?.value || '';
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = () => {
      const k = Math.min(1, 720 / Math.max(img.width, img.height));
      const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      draft.img = c.toDataURL('image/jpeg', 0.74);
      drawCookedSheet(); document.getElementById('sfNote').value = note;
    };
    img.src = url;
  }
  async function saveCooked() {
    const r = activeRecipe;
    const o = { id: Date.now(), rid: r.id, title: r.title, date: new Date().toISOString().slice(0, 10), img: draft.img, stars: draft.stars, note: (document.getElementById('sfNote')?.value || '').trim() };
    st.cooked.unshift(o); await persistCooked(o);
    closeSheet(); launchConfetti(); haptic(30); showToast(f().saved); renderModal(); render();
  }
  function myDishesHtml() {
    const x = f();
    return `<div class="section-label" style="margin-top:22px;"><span>${x.myDishes}</span><small>${st.cooked.length}</small></div>
      ${st.cooked.length ? `<div class="sf-gallery">${st.cooked.map((c) => {
        const r = recipes.find((rr) => rr.id === c.rid);
        const img = c.img || (r && thumbSrc(r.img));
        return `<button class="sf-shot" onclick="SF.viewCooked(${c.id})">${img ? `<img src="${img}" alt="" loading="lazy"/>` : ''}<span>${esc((c.title || {})[lang] || '')}</span><small>${c.date}${c.stars ? ' · ' + '★'.repeat(c.stars) : ''}</small></button>`;
      }).join('')}</div>` : `<div class="glass-card" style="font-size:13px;color:var(--muted);line-height:1.5;">${x.myDishesEmpty}</div>`}`;
  }
  function viewCooked(id) {
    const c = st.cooked.find((k) => k.id === id); if (!c) return;
    const x = f(), r = recipes.find((rr) => rr.id === c.rid);
    const img = c.img || (r && thumbSrc(r.img));
    sheet(`
      <div class="sf-sheet-head"><div><div class="eyebrow" style="margin:0 0 6px;">${c.date}${c.stars ? ' · ' + '★'.repeat(c.stars) : ''}</div><div class="modal-title" style="margin:0;font-size:22px;">${esc((c.title || {})[lang] || '')}</div></div><button class="log-del" onclick="SF.closeSheet()">✕</button></div>
      ${img ? `<img class="sf-shot-big" src="${img}" alt=""/>` : ''}
      ${c.note ? `<div class="br-tip-box">${esc(c.note)}</div>` : ''}
      <div class="modal-actions"><button class="btn-sec" onclick="SF.delCooked(${c.id})">${x.del}</button>${r ? `<button class="btn-cta" style="flex:2;margin:0;" onclick="SF.closeSheet();openRecipe('${r.id}')">${x.openRecipe}</button>` : ''}</div>
    `);
  }
  async function delCooked(id) {
    const i = st.cooked.findIndex((k) => k.id === id); if (i < 0) return;
    const [o] = st.cooked.splice(i, 1); await persistCooked(o, true);
    closeSheet(); render();
  }

  // ---------- Despensa: búsqueda, quitar todo y "¿qué puedo cocinar?" ----------
  const PX = {
    es: { search: 'Escribe para buscar (pollo, arroz, tomate…)', clearAll: 'Quitar todo', undo: 'Deshacer', onlyHave: 'Solo lo que tengo',
      cleared: (n) => `${n} ingredientes quitados`, noResults: 'Sin resultados para esa búsqueda',
      canCook: 'Con tu despensa puedes preparar', seeAll: 'Ver todos', exact: 'Tienes todo', approx: (n) => `Aproximado · ${n} ${n === 1 ? 'reemplazo' : 'reemplazos'}`,
      missing: (n) => `Faltan ${n}`, opt: 'sin', swapLine: (a, b) => `${a} → ${b}`, brainTitle: '¿Qué cocino con lo que tengo?',
      brainSub: (n) => `${n} ingredientes en casa. Platos iguales o aproximados, ordenados por lo que ya tienes.`,
      invent: 'Inventar un plato nuevo con lo que tengo', emptyPantry: 'Marca en la Despensa los ingredientes que tienes en casa.',
      openedApprox: (n) => `Receta adaptada a tu despensa (${n} ${n === 1 ? 'reemplazo' : 'reemplazos'})`, types: { dish: 'Platos', dessert: 'Postres', drink: 'Bebidas' } },
    pt: { search: 'Digite para buscar (frango, arroz, tomate…)', clearAll: 'Desmarcar tudo', undo: 'Desfazer', onlyHave: 'Só o que tenho',
      cleared: (n) => `${n} ingredientes desmarcados`, noResults: 'Nenhum resultado para essa busca',
      canCook: 'Com sua despensa você pode fazer', seeAll: 'Ver todos', exact: 'Você tem tudo', approx: (n) => `Aproximado · ${n} ${n === 1 ? 'substituição' : 'substituições'}`,
      missing: (n) => `Faltam ${n}`, opt: 'sem', swapLine: (a, b) => `${a} → ${b}`, brainTitle: 'O que cozinho com o que tenho?',
      brainSub: (n) => `${n} ingredientes em casa. Pratos iguais ou aproximados, ordenados pelo que você já tem.`,
      invent: 'Inventar um prato novo com o que tenho', emptyPantry: 'Marque na Despensa os ingredientes que você tem em casa.',
      openedApprox: (n) => `Receita adaptada à sua despensa (${n} ${n === 1 ? 'substituição' : 'substituições'})`, types: { dish: 'Pratos', dessert: 'Sobremesas', drink: 'Bebidas' } },
    en: { search: 'Type to search (chicken, rice, tomato…)', clearAll: 'Clear all', undo: 'Undo', onlyHave: 'Only what I have',
      cleared: (n) => `${n} ingredients cleared`, noResults: 'No results for that search',
      canCook: 'With your pantry you can make', seeAll: 'See all', exact: 'You have everything', approx: (n) => `Close match · ${n} ${n === 1 ? 'swap' : 'swaps'}`,
      missing: (n) => `${n} missing`, opt: 'no', swapLine: (a, b) => `${a} → ${b}`, brainTitle: 'What can I cook with what I have?',
      brainSub: (n) => `${n} ingredients at home. Same or close dishes, sorted by what you already have.`,
      invent: 'Invent a new dish with what I have', emptyPantry: 'Tick the ingredients you have at home in the Pantry.',
      openedApprox: (n) => `Recipe adapted to your pantry (${n} ${n === 1 ? 'swap' : 'swaps'})`, types: { dish: 'Dishes', dessert: 'Desserts', drink: 'Drinks' } }
  };
  const px = () => PX[lang];
  const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const pan = { q: '', only: false, undo: null, brainType: 'dish' };

  function pantryFilter(p) {
    if (pan.only && !p.inStock) return false;
    if (!pan.q) return true;
    const q = norm(pan.q).trim();
    return q.split(/\s+/).every((w) => norm(p.name.es + ' ' + p.name.pt + ' ' + p.name.en + ' ' + p.id).includes(w));
  }
  function setPantryQ(v) {
    pan.q = v; render();
    const i = document.getElementById('pantrySearch');
    if (i) { i.focus(); const n = i.value.length; i.setSelectionRange(n, n); }
  }
  function toggleOnly() { pan.only = !pan.only; haptic(); render(); }
  function clearPantry() {
    const had = pantry.filter((p) => p.inStock).map((p) => p.id);
    if (!had.length) return;
    pan.undo = had;
    pantry.forEach((p) => { p.inStock = false; });
    haptic(25); render(); showToast(px().cleared(had.length));
  }
  function undoPantry() {
    if (!pan.undo) return;
    const set = new Set(pan.undo); pantry.forEach((p) => { p.inStock = set.has(p.id); });
    pan.undo = null; haptic(); render();
  }
  function pantryToolsHtml() {
    const x = px(), have = pantry.filter((p) => p.inStock).length;
    return `
      <div class="sf-psearch">
        <input class="search-box" id="pantrySearch" type="search" autocomplete="off" placeholder="${x.search}" value="${esc(pan.q)}" oninput="SF.setPantryQ(this.value)" />
        ${pan.q ? `<button class="sf-pclear" onclick="SF.setPantryQ('')" aria-label="✕">✕</button>` : ''}
      </div>
      <div class="sf-ptools">
        <button class="qf-pill ${pan.only ? 'active' : ''}" onclick="SF.toggleOnly()">${x.onlyHave} · ${have}</button>
        ${pan.undo ? `<button class="qf-pill active" onclick="SF.undoPantry()">↶ ${x.undo}</button>`
                   : `<button class="qf-pill sf-danger" onclick="SF.clearPantry()" ${have ? '' : 'disabled'}>✕ ${x.clearAll}</button>`}
      </div>`;
  }
  function pantryEmptyHtml(n) { return n ? '' : `<div class="glass-card" style="font-size:13px;color:var(--muted);text-align:center;">${px().noResults}</div>`; }

  // Cerebro offline: compara la despensa con TODO el catálogo y encuentra platos
  // iguales (tienes todo) o aproximados (reemplazando por algo de la misma categoría que sí tienes).
  // Familias de reemplazo "de cocina real": solo se cambia algo por otro de su misma familia
  // (pollo↔muslo, carne↔cerdo, pescados, arroces, legumbres, tubérculos, quesos...).
  const FAMILIES = [
    ['frango', 'coxa_frango'],
    ['patinho', 'carne_seca', 'lombo', 'costelinha', 'linguica'],
    ['tilapia', 'bacalhau', 'atum', 'camarao'],
    ['arroz_branco', 'arroz'],
    ['feijao_preto', 'feijao', 'lentilha', 'grao_bico'],
    ['batata', 'batata_doce', 'mandioca', 'banana_terra', 'abobora'],
    ['rap10', 'pao', 'tapioca'],
    ['farinha_mandioca', 'cuscuz'],
    ['couve', 'brocolis', 'quiabo', 'abobrinha', 'pepino', 'pimentao', 'cenoura'],
    ['minas', 'coalho', 'ricota', 'queijo_creme', 'requeijao'],
    ['creme_leite', 'requeijao', 'iogurte', 'leite_evaporado'],
    ['leite', 'leite_desnatado', 'leite_coco'],
    ['azeite', 'dende', 'manteiga'],
    ['acucar', 'adocante', 'mel', 'panela'],
    ['cacau', 'chocolate_amargo'],
    ['farinha_trigo', 'aveia', 'maicena'],
    ['banana', 'maca', 'morango', 'abacaxi', 'laranja', 'maracuja', 'lulo'],
    ['amendoim', 'amendoa'],
    ['cachaca', 'pisco', 'tequila'],
    ['agua_gas', 'gaseosa']
  ];
  const FAM_OF = {};
  FAMILIES.forEach((f, n) => f.forEach((id) => { (FAM_OF[id] = FAM_OF[id] || []).push(n); }));
  // Condimentos y toques: si faltan, el plato sigue saliendo (no se "reemplazan").
  const OPTIONAL = new Set(['alho', 'cebola', 'limao', 'cheiro_verde', 'azeitona', 'shoyu', 'canela', 'coco_ralado', 'passas', 'linhaca']);
  const famAlts = (id) => [...new Set((FAM_OF[id] || []).flatMap((n) => FAMILIES[n]))].filter((q) => q !== id);
  const dist = (a, b) => Math.abs(a.p - b.p) + Math.abs(a.c - b.c) / 2 + Math.abs(a.kcal - b.kcal) / 20;

  // Cerebro offline: compara la despensa con TODO el catálogo y encuentra platos
  // iguales (tienes todo) o aproximados (cambiando un ingrediente por otro de su misma familia que sí tienes).
  function matchRecipe(r, stock) {
    let tot = 0, got = 0, mainLost = false;
    const swaps = [], miss = [], opt = [], used = new Set(), items = [];
    r.ingredients.forEach((i, idx) => {
      const g = gramsOf(i); if (g <= 0) return;
      const id = ingIdOf(r, i, idx);
      used.add(id);
      items.push({ idx, id, g, p: pById(id), optional: OPTIONAL.has(id) || g <= 10 });
    });
    // Ingrediente principal: la proteína más pesada (o lo más pesado si no hay proteína)
    const core = items.filter((it) => !it.optional);
    const main = (core.filter((it) => it.p && it.p.cat === 'PROTEIN').sort((a, b) => b.g - a.g)[0]) || core.sort((a, b) => b.g - a.g)[0];
    items.forEach((it) => {
      const isMain = it === main;
      const w = it.optional ? 0.25 : isMain ? 2.5 : it.g >= 80 ? 1.5 : 1;
      tot += w;
      if (stock.has(it.id)) { got += w; return; }
      if (it.optional) { opt.push(it.id); return; }
      const alt = it.p && famAlts(it.id).map(pById).filter((q) => q && stock.has(q.id) && !used.has(q.id))
        .sort((a, b) => dist(a, it.p) - dist(b, it.p))[0];
      if (alt) { got += w * (isMain ? 0.8 : 0.75); swaps.push({ idx: it.idx, from: it.id, to: alt.id }); used.add(alt.id); }
      else { miss.push(it.id); if (isMain) mainLost = true; }
    });
    let score = tot ? got / tot : 0;
    if (mainLost) score *= 0.5; // sin el ingrediente principal ya no es ese plato
    return { r, score, swaps, miss, opt };
  }
  function pantryMatches(type) {
    const stock = new Set(pantry.filter((p) => p.inStock).map((p) => p.id));
    if (!stock.size) return [];
    return recipes.filter((r) => !String(r.id).startsWith('brain') && (!type || (r.type || 'dish') === type))
      .map((r) => matchRecipe(r, stock))
      .filter((m) => m.score >= 0.55 && m.miss.length <= 3)
      .sort((a, b) => (b.score - a.score) || (a.miss.length - b.miss.length) || (a.swaps.length - b.swaps.length));
  }
  function matchRowHtml(m) {
    const x = px(), r = m.r, mm = getMacros(r);
    const label = !m.miss.length && !m.swaps.length ? `<span class="stock-tag ok">${x.exact}</span>`
      : !m.miss.length ? `<span class="sf-badge gold">${x.approx(m.swaps.length)}</span>`
      : `<span class="stock-tag miss">${x.missing(m.miss.length)}</span>`;
    const detail = [
      ...m.swaps.slice(0, 2).map((s) => x.swapLine(pName(s.from), pName(s.to))),
      ...(m.miss.length ? [m.miss.slice(0, 3).map(pName).join(', ')] : []),
      ...(m.opt.length && m.swaps.length + m.miss.length < 2 ? [`${x.opt} ${m.opt.slice(0, 2).map(pName).join(', ').toLowerCase()}`] : [])
    ].join(' · ');
    return `<button class="sf-match" onclick="SF.openMatch('${r.id}')">
      <img src="${thumbSrc(r.img)}" decoding="async" alt="" loading="lazy" onerror="this.style.visibility='hidden'"/>
      <span class="sf-match-main"><b>${esc(r.title[lang])}</b><small>${mm.kcal} kcal · P ${mm.p} g · ${r.time} min</small>${detail ? `<em>${esc(detail)}</em>` : ''}</span>
      <span class="sf-match-end"><i>${Math.round(m.score * 100)}%</i>${label}</span>
    </button>`;
  }
  function pantryCookHtml() {
    const list = pantryMatches('dish').slice(0, 3), x = px();
    if (!list.length) return '';
    return `<div class="section-label"><span>${x.canCook}</span><small onclick="SF.brainSheet()" style="cursor:pointer;color:var(--gold)">${x.seeAll} ›</small></div>
      <div class="sf-matches">${list.map(matchRowHtml).join('')}</div>`;
  }
  function brainSheet(type) {
    if (type) pan.brainType = type;
    const x = px(), n = pantry.filter((p) => p.inStock).length;
    const list = pantryMatches(pan.brainType).slice(0, 12);
    sheet(`
      <div class="sf-sheet-head"><div><div class="eyebrow" style="margin:0 0 6px;">${clean(t().inventBtn)}</div><div class="modal-title" style="margin:0;font-size:22px;">${x.brainTitle}</div></div><button class="log-del" onclick="SF.closeSheet()">✕</button></div>
      <div class="subtitle">${n ? x.brainSub(n) : x.emptyPantry}</div>
      <div class="mode-switch type-switch" style="margin-bottom:12px;">${['dish', 'dessert', 'drink'].map((k) => `<button class="mode-btn ${pan.brainType === k ? 'on' : ''}" onclick="SF.brainSheet('${k}')">${x.types[k]}</button>`).join('')}</div>
      ${list.length ? `<div class="sf-matches">${list.map(matchRowHtml).join('')}</div>` : (n ? `<div class="glass-card" style="font-size:13px;color:var(--muted);">${px().noResults}</div>` : '')}
      ${pan.brainType === 'dish' && n ? `<button class="btn-sec" style="width:100%;margin-top:6px;" onclick="SF.closeSheet();runOfflineBrainGen()">✨ ${x.invent}</button>` : ''}
    `);
  }
  function openMatch(id) {
    const r = recipes.find((rr) => rr.id === id); if (!r) return;
    const stock = new Set(pantry.filter((p) => p.inStock).map((p) => p.id));
    const m = matchRecipe(r, stock);
    m.swaps.forEach((s) => { st.swaps[`${r.id}:${s.idx}`] = s.to; });
    save(); closeSheet(); openRecipe(id);
    if (m.swaps.length) showToast(px().openedApprox(m.swaps.length));
  }

  // ---------- Lista de recetas por tandas (menos trabajo por toque en el celular) ----------
  const PAGE = 18;
  const pg = { list: null, make: null, shown: 0, key: '' };
  function pageCards(list, make) {
    const key = currentTab + '|' + list.length + '|' + list.slice(0, 4).map((r) => r.id).join(',');
    if (key !== pg.key) { pg.key = key; pg.shown = PAGE; }
    pg.list = list; pg.make = make; pg.shown = Math.min(Math.max(pg.shown, PAGE), list.length);
    return list.slice(0, pg.shown).map((r, i) => make(r, i)).join('');
  }
  function moreSentinel(total) { return total > pg.shown ? '<div id="sfMore" class="sf-more"></div>' : ''; }
  let moreObs = null;
  function loadMore() {
    const grid = document.querySelector('#appContent .recipe-grid'), sent = document.getElementById('sfMore');
    if (!grid || !pg.list) return;
    const next = pg.list.slice(pg.shown, pg.shown + PAGE);
    grid.insertAdjacentHTML('beforeend', next.map((r, i) => pg.make(r, pg.shown + i)).join(''));
    pg.shown += next.length;
    if (pg.shown >= pg.list.length && sent) sent.remove();
  }
  function watchMore() {
    if (moreObs) moreObs.disconnect();
    const sent = document.getElementById('sfMore'); if (!sent) return;
    if (!('IntersectionObserver' in window)) { while (document.getElementById('sfMore')) loadMore(); return; }
    moreObs = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) loadMore(); },
      { root: document.getElementById('appContent'), rootMargin: '700px 0px' });
    moreObs.observe(sent);
  }

  // ---------- Botón atrás (Android) ----------
  window.sfBack = function () {
    const open = (id) => document.getElementById(id)?.classList.contains('open');
    if (cook.on) { closeCook(); return true; }
    if (open('sfSheet')) { closeSheet(); return true; }
    if (open('imgViewer')) { closeImageViewer(); return true; }
    if (open('shopModal')) { closeShopModal(); return true; }
    if (open('recipeModal')) { closeModal(); return true; }
    if (currentTab !== 'criar') { setTab('criar'); return true; }
    return false;
  };

  setTimeout(loadCooked, 0);

  return {
    fx: f, accent: (c) => ACCENT[c] || 'var(--gold)', haptic, esc,
    ingIdOf, gramsOf, isSwapped, adjust, openSwap, applySwap,
    tags, passEq, toggleEq, eqFiltersHtml,
    modalTopHtml, cookCtaHtml, ringsHtml, storageHtml, mealPrep, actionsHtml, timelineHtml, timerBtnHtml,
    startTimer, stopTimer, tick, openCook, closeCook, cookGo, toggleVoice, toggleIngs,
    sheet, closeSheet,
    renderPlan, autoPlan, reroll, clearSlot, clearWeek, setPlanPeople, pickDay, setSlot, weekShop,
    shopHtml, toggleBought, clearBought, copyShop, shareShop,
    cookedStart, setStars, photoPicked, saveCooked, myDishesHtml, viewCooked, delCooked,
    pageCards, moreSentinel, watchMore,
    pantryFilter, setPantryQ, toggleOnly, clearPantry, undoPantry, pantryToolsHtml, pantryEmptyHtml,
    pantryMatches, pantryCookHtml, brainSheet, openMatch
  };
})();
