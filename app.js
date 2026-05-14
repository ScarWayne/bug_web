/* =========================================================
   BREW LAB — app.js
   i18n · products · cart · calculator · checkout · validation
   NB: содержит намеренные баги для тренировки QA. См. BUGS.md
   ========================================================= */

(() => {
  'use strict';

  /* ---------------- i18n dictionaries ---------------- */
  const i18n = {
    ru: {
      'nav.features': 'Особенности', 'nav.shop': 'Магазин', 'nav.pricing': 'Подписка',
      'nav.calc': 'Калькулятор', 'nav.faq': 'FAQ', 'nav.contact': 'Контакты', 'nav.cart': 'Корзина',

      'hero.eyebrow': 'Обжарка нового сезона · 2026',
      'hero.h1a': 'Кофе как ', 'hero.h1b': 'ритуал', 'hero.h1c': ', не как привычка.',
      'hero.lead': 'Маленькая обжарка в Тбилиси, 12 стран происхождения, отправка в течение 48 часов после ростинга.',
      'hero.cta1': 'Попробовть бесплатно',
      'hero.s1': 'стран происхождения', 'hero.s2': 'от обжарки до двери', 'hero.s3': '2 100+ отзывов',

      'feat.eyebrow': 'Что внутри', 'feat.h': 'Просто, прозрачно, по делу',
      'feat.sub': 'Никаких подписочных ловушек: ставите паузу одной кнопкой и всегда знаете, что в чашке.',
      'feat.1.h': 'Trace-сертификация', 'feat.1.p': 'Каждая партия — с QR-кодом до фермы и точной даты обжарки.',
      'feat.2.h': '48 часов до двери', 'feat.2.p': 'Отправляем в день обжарки. По Москве и Тбилиси — за сутки.',
      'feat.3.h': 'Гибкая подписка', 'feat.3.p': 'Меняйте частоту, объём и помол в любой момент. Пауза — на любой срок.',
      'feat.4.h': 'Честная цена', 'feat.4.p': '52% уходит фермерам. Это в 3× выше средней по индустрии.',
      'feat.5.h': 'Сабскрайб-API', 'feat.5.p': 'Подключайте корп-аккаунт: офисы получают зерно по расписанию.',
      'feat.6.h': 'Compostable bag', 'feat.6.p': 'Упаковка разлагается за 12 недель в домашнем компосте.',

      'shop.eyebrow': 'Свежий ростинг', 'shop.h': 'Шесть лотов в наличии',
      'shop.sub': 'Каждый лот — отдельный профиль обжарки. Ниже — то, что мы рекомендуем сейчас.',
      'shop.add': 'В корзину',

      'price.eyebrow': 'Подписка', 'price.h': 'Три формата вместо тысячи опций',
      'price.sub': 'Платите за месяц или год. Меняйте, ставьте на паузу, отменяйте — без штрафов.',
      'price.mo': 'мес', 'price.choose': 'Выбрать', 'price.contact': 'Связаться',
      'price.t1.n': 'Tasting', 'price.t1.d': '2 пакета по 100 г, раз в две недели.', 'price.t1.s': '~$0.40 за чашку',
      'price.t1.l1': '2 × 100 г', 'price.t1.l2': 'Доставка раз в 2 недели', 'price.t1.l3': 'Помол на выбор',
      'price.t2.n': 'Daily', 'price.t2.d': 'Зерно для тех, кто пьёт каждый день.',
      'price.t2.s': 'Save 20% billed annually',
      'price.t2.l1': '2 × 250 г каждые 2 недели', 'price.t2.l2': 'Приоритетная доставка',
      'price.t2.l3': 'Доступ к лимитированным лотам', 'price.t2.l4': 'Можно ставить на паузу',
      'price.t3.n': 'Office', 'price.t3.d': 'Для команд от 10 человек, по расписанию.',
      'price.t3.s': 'от 8 кг в месяц',
      'price.t3.l1': 'До 16 кг зерна / месяц', 'price.t3.l2': 'Кастомный профиль обжарки',
      'price.t3.l3': 'Менеджер аккаунта', 'price.t3.l4': 'SLA 24/7',

      'calc.eyebrow': 'Калькулятор', 'calc.h': 'Сколько вам реально нужно',
      'calc.sub': 'Сдвиньте ползунки — мы посчитаем расход зерна и стоимость в месяц.',
      'calc.cups': 'Чашек в день', 'calc.grams': 'Грамм на чашку',
      'calc.method': 'Способ заваривания', 'calc.tier': 'Тариф',
      'calc.m.espresso': 'эспрессо', 'calc.m.filter': 'фильтр',
      'calc.beans': 'Расход зерна', 'calc.bags': 'Пакетов 250 г',
      'calc.delivery': 'Доставок в месяц', 'calc.percup': 'Цена за чашку',
      'calc.subscribe': 'Оформить подписку',

      'faq.h': 'Частые вопросы',
      'faq.q1': 'Как часто приходит зерно?',
      'faq.a1': 'По умолчанию раз в 2 недели. Это можно изменить в личном кабинете в любой момент: от еженедельной доставки до ежемесячной.',
      'faq.q2': 'Можно поставить подписку на паузу?',
      'faq.a2': 'Да, на любой срок и без штрафов. Возобновить — в один клик.',
      'faq.q3': 'Сколько хранится зерно?',
      'faq.a3': 'Оптимально — 6 недель после обжарки. Мы отправляем не позже чем через 48 часов после ростинга.',
      'faq.q4': 'Куда вы доставляете?',
      'faq.a4': 'По всем странам Европы и СНГ. Сроки и стоимость считаются на чекауте.',
      'faq.q5': 'Что с упаковкой?',
      'faq.a5': 'Бумажные пакеты с биоразлагаемым клапаном. Полностью компостируются за 12 недель.',

      'forms.eyebrow': 'Связаться', 'forms.h': 'Подписаться или написать',
      'forms.sub': 'Раз в месяц — письмо о новых лотах, без спама. И открытая форма для любых вопросов.',

      'news.h': 'Дайджест BREW LAB', 'news.sub': 'Раз в месяц. Только новые лоты и редкие микро-партии.',
      'news.email': 'Email', 'news.ok': 'Готово! Проверьте почту.',
      'contact.h': 'Написать команде', 'contact.sub': 'Отвечаем в рабочее время в течение нескольких часов.',
      'contact.name': 'Имя', 'contact.phone': 'Телефон', 'contact.msg': 'Сообщение', 'contact.send': 'Отправить',
      'contact.thanks': 'Спасибо, ',

      'reg.h': 'Создать аккаунт', 'reg.sub': 'Сохраняйте адреса, отслеживайте доставки и редактируйте подписку.',
      'reg.email': 'Email', 'reg.pass': 'Пароль', 'reg.pass2': 'Повторите пароль',
      'reg.submit': 'Создать аккаунт', 'reg.ok': 'Аккаунт создан.',
      'reg.weak': 'слабый', 'reg.medium': 'средний', 'reg.strong': 'сильный',
      'reg.benefits.h': 'Что вы получаете',
      'reg.b1': 'Сохранение адресов и карт', 'reg.b2': 'История заказов и накладные',
      'reg.b3': 'Гибкое управление подпиской', 'reg.b4': 'Ранний доступ к микро-лотам',
      'reg.b5': 'Промокоды и реферальная программа',

      'cart.h': 'Корзина', 'cart.total': 'Итого', 'cart.apply': 'Применить', 'cart.checkout': 'Оформить заказ',
      'cart.empty': 'Корзина пуста — добавьте что-нибудь из магазина выше.',

      'co.h': 'Оформление',
      'co.fullname': 'ФИО', 'co.email': 'Email', 'co.phone': 'Телефон',
      'co.addr': 'Адрес', 'co.city': 'Город', 'co.zip': 'Индекс',
      'co.card': 'Номер карты', 'co.exp': 'MM/YY', 'co.cvv': 'CVV',
      'co.pay': 'Оплатить', 'co.ok': 'Заказ оформлен. Письмо ушло на почту.',

      'foot.about': 'Маленькая обжарка в Тбилиси. Зерно из 12 стран. Подписка без ловушек.',
      'foot.shop': 'Магазин', 'foot.lots': 'Лоты', 'foot.subs': 'Подписки',
      'foot.gift': 'Подарочные карты', 'foot.merch': 'Мерч',
      'foot.help': 'Помощь', 'foot.contactus': 'Контакты', 'foot.shipping': 'Доставка', 'foot.returns': 'Возврат',
      'foot.legal': 'Документы', 'foot.terms': 'Условия', 'foot.privacy': 'Конфиденциальность',
      'foot.cookies': 'Cookies', 'foot.imprint': 'Impressum',
      'foot.made': 'Сделано с заботой и тёмной обжаркой.',

      'err.required': 'Это поле обязательно',
      'err.email': 'Введите корректный email',
      'err.phone': 'Введите корректный телефон',
      'err.short': 'Слишком короткое значение',
      'err.passmatch': 'Пароли не совпадают',
      'err.zip': 'Некорректный индекс',
      'err.card': 'Некорректный номер карты',
      'err.cvv': 'CVV из 3 цифр',
      'err.exp': 'Формат MM/YY',

      'toast.added': 'Добавлено в корзину',
      'toast.coupon.ok': 'Промокод применён',
      'toast.coupon.bad': 'Неизвестный промокод',
    },
    en: {
      'nav.features': 'Features', 'nav.shop': 'Shop', 'nav.pricing': 'Subscription',
      'nav.calc': 'Calculator', 'nav.faq': 'FAQ', 'nav.contact': 'Contact', 'nav.cart': 'Cart',

      'hero.eyebrow': 'New season roast · 2026',
      'hero.h1a': 'Coffee as a ', 'hero.h1b': 'ritual', 'hero.h1c': ', not a habit.',
      'hero.lead': 'Small-batch roastery in Tbilisi, 12 origin countries, shipped within 48 hours of roasting.',
      'hero.cta1': 'Try for free',
      'hero.s1': 'origin countries', 'hero.s2': 'from roast to door', 'hero.s3': '2,100+ reviews',

      'feat.eyebrow': "What's inside", 'feat.h': 'Simple, transparent, to the point',
      'feat.sub': 'No subscription traps: pause with a single click and always know what is in your cup.',
      'feat.1.h': 'Trace-certified', 'feat.1.p': 'Every batch ships with a QR code linking to farm and exact roast date.',
      'feat.2.h': '48 hours to your door', 'feat.2.p': 'We ship the day we roast. Same-day in Tbilisi and Moscow.',
      'feat.3.h': 'Flexible subscription', 'feat.3.p': 'Change frequency, weight, grind any time. Pause as long as you want.',
      'feat.4.h': 'Fair pricing', 'feat.4.p': '52% goes to farmers — 3× the industry average.',
      'feat.5.h': 'Subscribe API', 'feat.5.p': 'Plug your office in: scheduled deliveries on autopilot.',
      'feat.6.h': 'Compostable bag', 'feat.6.p': 'Packaging breaks down in 12 weeks at home compost.',

      'shop.eyebrow': 'Fresh roasts', 'shop.h': 'Six lots on the shelf',
      'shop.sub': 'Each lot has its own roast profile. These are the ones we are recommending right now.',
      'shop.add': 'Add to cart',

      'price.eyebrow': 'Subscription', 'price.h': 'Three formats instead of a thousand options',
      'price.sub': 'Pay monthly or yearly. Change, pause, cancel — no fees.',
      'price.mo': 'mo', 'price.choose': 'Choose', 'price.contact': 'Contact us',
      'price.t1.n': 'Tasting', 'price.t1.d': '2 bags x 100 g, every two weeks.', 'price.t1.s': '~$0.40 per cup',
      'price.t1.l1': '2 x 100 g', 'price.t1.l2': 'Delivered every 2 weeks', 'price.t1.l3': 'Grind on demand',
      'price.t2.n': 'Daily', 'price.t2.d': 'Beans for everyday drinkers.',
      'price.t2.s': 'Save 20% billed annually',
      'price.t2.l1': '2 x 250 g every 2 weeks', 'price.t2.l2': 'Priority shipping',
      'price.t2.l3': 'Access to limited lots', 'price.t2.l4': 'Pause any time',
      'price.t3.n': 'Office', 'price.t3.d': 'For teams of 10+, scheduled.',
      'price.t3.s': 'from 8 kg/mo',
      'price.t3.l1': 'Up to 16 kg of beans / mo', 'price.t3.l2': 'Custom roast profile',
      'price.t3.l3': 'Account manager', 'price.t3.l4': '24/7 SLA',

      'calc.eyebrow': 'Calculator', 'calc.h': 'How much you actually need',
      'calc.sub': 'Move the sliders — we will compute beans and monthly cost.',
      'calc.cups': 'Cups per day', 'calc.grams': 'Grams per cup',
      'calc.method': 'Brew method', 'calc.tier': 'Tier',
      'calc.m.espresso': 'espresso', 'calc.m.filter': 'filter',
      'calc.beans': 'Beans / month', 'calc.bags': '250 g bags',
      'calc.delivery': 'Deliveries / month', 'calc.percup': 'Per cup',
      'calc.subscribe': 'Subscribe',

      'faq.h': 'Frequently asked',
      'faq.q1': 'How often does the coffee arrive?',
      'faq.a1': 'Default cadence is every 2 weeks. You can switch any time — from weekly to monthly — in your account.',
      'faq.q2': 'Can I pause the subscription?',
      'faq.a2': 'Yes, for any length, no fees. Resume in one click.',
      'faq.q3': 'How long do beans last?',
      'faq.a3': 'Optimal is 6 weeks after roast. We ship within 48 hours of roasting.',
      'faq.q4': 'Where do you ship?',
      'faq.a4': 'All of Europe and CIS. Rates and ETA are calculated at checkout.',
      'faq.q5': 'What about packaging?',
      'faq.a5': 'Paper bags with a biodegradable valve. Fully compost in 12 weeks.',

      'forms.eyebrow': 'Get in touch', 'forms.h': 'Subscribe or write to us',
      'forms.sub': 'Once a month — new lots, no spam. And an open form for anything else.',

      'news.h': 'BREW LAB digest', 'news.sub': 'Once a month. New lots and rare micro-batches only.',
      'news.email': 'Email', 'news.ok': 'Done! Check your inbox.',
      'contact.h': 'Write to the team', 'contact.sub': 'We respond within hours during working time.',
      'contact.name': 'Name', 'contact.phone': 'Phone', 'contact.msg': 'Message', 'contact.send': 'Send',
      'contact.thanks': 'Thank you, ',

      'reg.h': 'Create an account', 'reg.sub': 'Save addresses, track deliveries, edit your subscription.',
      'reg.email': 'Email', 'reg.pass': 'Password', 'reg.pass2': 'Repeat password',
      'reg.submit': 'Create account', 'reg.ok': 'Account created.',
      'reg.weak': 'weak', 'reg.medium': 'medium', 'reg.strong': 'strong',
      'reg.benefits.h': 'What you get',
      'reg.b1': 'Saved addresses and cards', 'reg.b2': 'Order history and invoices',
      'reg.b3': 'Flexible subscription control', 'reg.b4': 'Early access to micro-lots',
      'reg.b5': 'Promo codes and referrals',

      'cart.h': 'Cart', 'cart.total': 'Total', 'cart.apply': 'Apply', 'cart.checkout': 'Checkout',
      'cart.empty': 'Your cart is empty — add something from the shop above.',

      'co.h': 'Checkout',
      'co.fullname': 'Full name', 'co.email': 'Email', 'co.phone': 'Phone',
      'co.addr': 'Address', 'co.city': 'City', 'co.zip': 'Zip',
      'co.card': 'Card number', 'co.exp': 'MM/YY', 'co.cvv': 'CVV',
      'co.pay': 'Pay', 'co.ok': 'Order placed. Confirmation sent to your email.',

      'foot.about': 'A small-batch roastery in Tbilisi. Beans from 12 countries. Subscription without traps.',
      'foot.shop': 'Shop', 'foot.lots': 'Lots', 'foot.subs': 'Subscriptions',
      'foot.gift': 'Gift cards', 'foot.merch': 'Merch',
      'foot.help': 'Help', 'foot.contactus': 'Contact', 'foot.shipping': 'Shipping', 'foot.returns': 'Returns',
      'foot.legal': 'Legal', 'foot.terms': 'Terms', 'foot.privacy': 'Privacy',
      'foot.cookies': 'Cookies', 'foot.imprint': 'Imprint',
      'foot.made': 'Made with care and dark roast.',

      'err.required': 'This field is required',
      'err.email': 'Enter a valid email',
      'err.phone': 'Enter a valid phone',
      'err.short': 'Value is too short',
      'err.passmatch': 'Passwords do not match',
      'err.zip': 'Invalid zip',
      'err.card': 'Invalid card number',
      'err.cvv': 'CVV must be 3 digits',
      'err.exp': 'Format is MM/YY',

      'toast.added': 'Added to cart',
      'toast.coupon.ok': 'Coupon applied',
      'toast.coupon.bad': 'Unknown coupon',
    },
  };

  let lang = localStorage.getItem('brewlab_lang') || 'ru';
  const t = (k) => (i18n[lang] && i18n[lang][k]) ?? k;

  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      const v = i18n[lang][k];
      if (v != null) el.textContent = v;
    });
    document.getElementById('lang-ru').setAttribute('aria-pressed', String(lang === 'ru'));
    document.getElementById('lang-en').setAttribute('aria-pressed', String(lang === 'en'));
    renderProducts();
    renderCart();
    runCalc();
  }

  document.getElementById('lang-ru').addEventListener('click', () => { lang = 'ru'; localStorage.setItem('brewlab_lang', lang); applyI18n(); });
  document.getElementById('lang-en').addEventListener('click', () => { lang = 'en'; localStorage.setItem('brewlab_lang', lang); applyI18n(); });

  /* ---------------- Currency ----------------
     BUG-34: символы валют перепутаны: при RU должен быть "₽", при EN — "$".
     Здесь сделано ровно наоборот — и сумма не пересчитывается по курсу. */
  const currencySymbol = () => (lang === 'ru' ? '$' : '₽');
  const fmtMoney = (n) => `${currencySymbol()}${(Math.round(n * 100) / 100).toFixed(2)}`;

  /* ---------------- Products ---------------- */
  const PRODUCTS = [
    { id: 'eth-yir',  name_ru: 'Yirgacheffe',          name_en: 'Yirgacheffe',           origin_ru: 'Эфиопия · натуральная',     origin_en: 'Ethiopia · natural',     price: 14, badge: 'NEW' },
    { id: 'pan-ges',  name_ru: 'Geisha Lot 4',         name_en: 'Geisha Lot 4',          origin_ru: 'Панама · вошед',            origin_en: 'Panama · washed',         price: 28, badge: 'RARE' },
    { id: 'idn-mand', name_ru: 'Sumatra Mandheling',   name_en: 'Sumatra Mandheling',    origin_ru: 'Индонезия · giling basah',  origin_en: 'Indonesia · giling basah', price: 13, badge: '' },
    { id: 'bra-cer',  name_ru: 'Brazil Cerrado',       name_en: 'Brazil Cerrado',        origin_ru: 'Бразилия · pulped natural', origin_en: 'Brazil · pulped natural', price: 11, badge: '' },
    { id: 'hnd-cap',  name_ru: 'Honduras Las Capucas', name_en: 'Honduras Las Capucas',  origin_ru: 'Гондурас · вошед',           origin_en: 'Honduras · washed',       price: 12, badge: '' },
    { id: 'ken-aa',   name_ru: 'Kenya AA',             name_en: 'Kenya AA',              origin_ru: 'Кения · вошед',              origin_en: 'Kenya · washed',          price: 16, badge: 'TOP' },
  ];

  function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    PRODUCTS.forEach((p) => {
      const node = document.createElement('article');
      node.className = 'product';
      node.innerHTML = `
        <div class="product-thumb">
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
          <div class="bean-mini" aria-hidden="true"></div>
        </div>
        <div class="product-body">
          <h4>${p['name_' + lang]}</h4>
          <p class="origin">${p['origin_' + lang]}</p>
        </div>
        <div class="product-foot">
          <span class="price">${fmtMoney(p.price)}</span>
          <button class="add" data-add="${p.id}">${t('shop.add')}</button>
        </div>`;
      grid.appendChild(node);
    });
    grid.querySelectorAll('[data-add]').forEach((btn) => {
      btn.addEventListener('click', () => addToCart(btn.dataset.add));
    });
  }

  /* ---------------- Cart ---------------- */
  const cart = JSON.parse(localStorage.getItem('brewlab_cart') || '[]');
  let coupon = null;

  /* BUG-20: FREE100 даёт 100% скидку — итог легко уходит в минус с купоном. */
  const COUPONS = {
    'WELCOME10': { kind: 'pct', value: 10 },
    'BREW20':    { kind: 'pct', value: 20 },
    'FREE100':   { kind: 'pct', value: 100 },
  };

  function persistCart() { localStorage.setItem('brewlab_cart', JSON.stringify(cart)); }

  function addToCart(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const line = cart.find((l) => l.id === id);
    if (line) line.qty += 1;
    else cart.push({ id, qty: 1 });
    persistCart();
    renderCart();
    toast(t('toast.added'));
  }

  function setQty(id, qty) {
    const line = cart.find((l) => l.id === id);
    if (!line) return;
    /* BUG-18: нет clamp по нижней границе — отрицательный qty проходит, итог уходит в минус. */
    line.qty = qty === '' ? 0 : parseInt(qty, 10);
    if (Number.isNaN(line.qty)) line.qty = 0;
    persistCart();
    renderCart();
  }

  function cartSubtotal() {
    let s = 0;
    cart.forEach((l) => {
      const p = PRODUCTS.find((x) => x.id === l.id);
      if (p) s += p.price * l.qty;
    });
    return s;
  }

  function cartTotalWithCoupon() {
    /* BUG-16 (часть 1/2): скидка применяется к subtotal целиком, но при qty>1
       визуально UI этого не отражает — расхождение между ожиданием и реальностью. */
    const sub = cartSubtotal();
    if (!coupon) return sub;
    const c = COUPONS[coupon];
    if (!c) return sub;
    if (c.kind === 'pct') return sub - (sub * c.value / 100);
    return sub;
  }

  function renderCart() {
    const linesEl = document.getElementById('cart-lines');
    const sumEl = document.getElementById('cart-sum');
    const countEl = document.getElementById('cart-count');

    const totalQty = cart.reduce((s, l) => s + Math.max(0, l.qty), 0);
    countEl.textContent = String(totalQty);
    /* BUG-06: бейдж количества не скрывается при 0 — всегда виден. */
    countEl.style.visibility = 'visible';

    /* BUG-35: пустая корзина — не показываем empty state, оставляем всё пустым,
       но кнопка «Оформить заказ» остаётся активной → можно отправить заказ за $0. */
    linesEl.innerHTML = '';

    cart.forEach((l) => {
      const p = PRODUCTS.find((x) => x.id === l.id);
      if (!p) return;
      const row = document.createElement('div');
      row.className = 'cart-line';
      /* BUG-30: «−» и «+» — это <span onclick> без role/tabindex,
         к ним нельзя добраться клавиатурой. */
      row.innerHTML = `
        <div class="thumb" aria-hidden="true"></div>
        <div>
          <p class="name">${p['name_' + lang]}</p>
          <p class="meta">${fmtMoney(p.price)} · <span>${p['origin_' + lang]}</span></p>
        </div>
        <div class="qty" data-line="${p.id}">
          <span onclick="window.__brewQty('${p.id}', -1)">−</span>
          <input type="number" value="${l.qty}" data-qty />
          <span onclick="window.__brewQty('${p.id}', 1)">+</span>
        </div>`;
      linesEl.appendChild(row);
      row.querySelector('[data-qty]').addEventListener('change', (e) => setQty(p.id, e.target.value));
    });

    sumEl.textContent = fmtMoney(cartTotalWithCoupon());
  }
  window.__brewQty = (id, delta) => {
    const l = cart.find((x) => x.id === id);
    if (!l) return;
    setQty(id, l.qty + delta);
  };

  document.getElementById('apply-coupon').addEventListener('click', () => {
    const v = document.getElementById('coupon').value.trim().toUpperCase();
    if (COUPONS[v]) { coupon = v; toast(t('toast.coupon.ok')); }
    else { coupon = null; toast(t('toast.coupon.bad')); }
    renderCart();
  });

  /* ---------------- Modals ---------------- */
  const cartModal = document.getElementById('cart-modal');
  const checkoutModal = document.getElementById('checkout-modal');
  const openCart = () => { cartModal.classList.add('open'); cartModal.setAttribute('aria-hidden', 'false'); };
  const closeAll = () => {
    cartModal.classList.remove('open'); cartModal.setAttribute('aria-hidden', 'true');
    checkoutModal.classList.remove('open'); checkoutModal.setAttribute('aria-hidden', 'true');
  };
  document.getElementById('open-cart').addEventListener('click', openCart);
  document.getElementById('open-checkout').addEventListener('click', () => {
    cartModal.classList.remove('open');
    checkoutModal.classList.add('open');
    checkoutModal.setAttribute('aria-hidden', 'false');
  });
  document.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', closeAll));
  document.addEventListener('click', (e) => {
    if (e.target === cartModal || e.target === checkoutModal) closeAll();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });

  /* ---------------- Calculator ---------------- */
  const TIER = { tasting: 12, daily: 20, office: 9999 };

  function setSegment(group, value) {
    document.querySelectorAll(`.calc-segments [data-${group}]`).forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset[group] === value));
    });
  }

  document.querySelectorAll('.calc-segments [data-method]').forEach((b) => {
    b.addEventListener('click', () => { setSegment('method', b.dataset.method); document.getElementById('calc-method-v').textContent = b.textContent; runCalc(); });
  });
  document.querySelectorAll('.calc-segments [data-tier]').forEach((b) => {
    if (!b.closest('.calc-segments')) return;
    b.addEventListener('click', () => { setSegment('tier', b.dataset.tier); document.getElementById('calc-tier-v').textContent = b.textContent; runCalc(); });
  });

  ['calc-cups', 'calc-grams'].forEach((id) => {
    document.getElementById(id).addEventListener('input', runCalc);
  });

  function runCalc() {
    /* BUG-32: тяжёлый синхронный цикл на каждое изменение — заметная просадка. */
    let _waste = 0;
    for (let i = 0; i < 600000; i++) _waste += Math.sqrt(i);

    const cups = +document.getElementById('calc-cups').value;
    const grams = +document.getElementById('calc-grams').value;
    document.getElementById('calc-cups-v').textContent = cups;
    document.getElementById('calc-grams-v').textContent = grams;

    const activeTier = document.querySelector('.calc-segments [data-tier][aria-pressed="true"]');
    const tierKey = activeTier ? activeTier.dataset.tier : 'daily';

    /* BUG-15: «месячный» расход берёт 4 недели = 28 дней вместо 30. */
    const beansPerMonth = cups * grams * 7 * 4;
    document.getElementById('calc-beans').textContent = `${beansPerMonth} g / mo`;
    document.getElementById('calc-bags').textContent = (beansPerMonth / 250).toFixed(1);

    const deliveries = tierKey === 'tasting' ? 2 : tierKey === 'daily' ? 2 : 4;
    document.getElementById('calc-deliv').textContent = deliveries;

    /* BUG-19: при cups=0 деление на ноль → "$Infinity" в строке «Цена за чашку». */
    const perCup = (TIER[tierKey] || 0) / (cups * 30);
    document.getElementById('calc-percup').textContent = fmtMoney(perCup);

    document.getElementById('calc-total').textContent = fmtMoney(TIER[tierKey] || 0);
  }
  runCalc();

  function pushSubscription(tier) {
    const id = `sub-${tier}`;
    if (!PRODUCTS.find((p) => p.id === id)) {
      PRODUCTS.push({
        id, price: TIER[tier],
        name_ru: `Подписка ${tier}`, name_en: `${tier} subscription`,
        origin_ru: 'ежемесячно', origin_en: 'monthly', badge: 'SUB',
      });
    }
    const line = cart.find((l) => l.id === id);
    if (line) line.qty += 1; else cart.push({ id, qty: 1 });
    persistCart(); renderCart(); openCart();
  }

  document.getElementById('calc-subscribe').addEventListener('click', () => {
    const tier = document.querySelector('.calc-segments [data-tier][aria-pressed="true"]').dataset.tier;
    pushSubscription(tier);
  });

  document.querySelectorAll('.pricing [data-tier]').forEach((b) => {
    b.addEventListener('click', () => {
      const tier = b.dataset.tier;
      if (tier === 'office') { document.getElementById('contact').scrollIntoView({behavior:'smooth'}); return; }
      pushSubscription(tier);
    });
  });

  /* ---------------- Validation helpers ---------------- */
  function setError(input, msgKey) {
    const wrap = input.closest('.field');
    if (!wrap) return;
    wrap.classList.toggle('invalid', !!msgKey);
    const err = wrap.querySelector('[data-err]');
    if (err) err.textContent = msgKey ? t(msgKey) : '';
  }

  /* BUG-07: слишком слабая регулярка — пропускает «test@test», «a@a». */
  const looseEmail = /.+@.+/;
  const strictEmail = /^[\w.!#$%&'*+/=?^`{|}~-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

  /* ---------------- Newsletter ---------------- */
  document.getElementById('form-newsletter').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const email = f.elements.email;
    if (!email.value) { setError(email, 'err.required'); return; }
    if (!looseEmail.test(email.value)) { setError(email, 'err.email'); return; }
    setError(email, null);
    if (f.elements.website && f.elements.website.value) return; // honeypot
    f.querySelector('.form-success').classList.add('show');
    setTimeout(() => f.querySelector('.form-success').classList.remove('show'), 4000);
    f.reset();
  });

  /* ---------------- Contact ---------------- */
  document.getElementById('form-contact').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const name = f.elements.name;
    const phone = f.elements.phone;
    const msg = f.elements.message;

    let ok = true;
    /* BUG-09: имя проверяется только на пустоту — без regex. */
    if (!name.value.trim()) { setError(name, 'err.required'); ok = false; } else setError(name, null);
    /* BUG-08: телефон проверяется только на пустоту — без regex/inputmode. */
    if (!phone.value.trim()) { setError(phone, 'err.required'); ok = false; } else setError(phone, null);
    /* BUG-10: у textarea нет ни min, ни max длины. */
    if (!msg.value.trim()) { setError(msg, 'err.required'); ok = false; } else setError(msg, null);
    if (!ok) return;

    /* BUG-21: XSS — имя вставляется через innerHTML без экранирования. */
    const ok_el = document.getElementById('contact-ok');
    ok_el.innerHTML = `${t('contact.thanks')}${name.value}!`;
    ok_el.classList.add('show');
    f.reset();
  });

  /* ---------------- Register ---------------- */
  const passInput = document.getElementById('r-pass');
  const meter = document.getElementById('pw-meter');
  const meterBar = meter.querySelector('i');
  const meterLabel = meter.querySelector('span');
  passInput.addEventListener('input', () => {
    const v = passInput.value;
    /* BUG-14: «strong» определяется только длиной ≥ 8 — без проверки цифр/символов. */
    let level = 1;
    if (v.length >= 6) level = 2;
    if (v.length >= 8) level = 3;
    meter.classList.remove('s2', 's3');
    if (level === 2) meter.classList.add('s2');
    if (level === 3) meter.classList.add('s3');
    meterBar.style.width = (level * 33) + '%';
    meterLabel.textContent = level === 1 ? t('reg.weak') : level === 2 ? t('reg.medium') : t('reg.strong');
  });

  document.getElementById('form-register').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const email = f.elements.email;
    const p1 = f.elements.password;
    const p2 = f.elements.password2;
    let ok = true;
    if (!strictEmail.test(email.value)) { setError(email, 'err.email'); ok = false; } else setError(email, null);
    if (p1.value.length < 6) { setError(p1, 'err.short'); ok = false; } else setError(p1, null);
    if (p1.value !== p2.value) { setError(p2, 'err.passmatch'); ok = false; } else setError(p2, null);
    if (!ok) return;

    /* BUG-23: пароль сохраняется в localStorage в открытом виде. */
    localStorage.setItem('brewlab_user', JSON.stringify({ email: email.value, password: p1.value }));
    f.querySelector('.form-success').classList.add('show');
    f.reset();
  });

  /* ---------------- Checkout ---------------- */
  document.getElementById('form-checkout').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const fields = ['fullname', 'email', 'phone', 'address', 'city', 'zip', 'card', 'exp', 'cvv'];
    let ok = true;
    fields.forEach((name) => {
      const el = f.elements[name];
      if (!el.value.trim()) { setError(el, 'err.required'); ok = false; return; }
      setError(el, null);

      if (name === 'email' && !strictEmail.test(el.value)) { setError(el, 'err.email'); ok = false; }
      /* BUG-11: zip — никакой проверки формата. */
      /* BUG-12: card — нет Luhn-проверки и regex-проверки длины. */
      /* BUG-13: cvv — type=text, нет regex /^\d{3}$/. */
      if (name === 'exp' && !/^\d{2}\/\d{2}$/.test(el.value)) { setError(el, 'err.exp'); ok = false; }
    });
    if (!ok) return;

    const order = {
      items: cart.map((l) => ({ ...l })),
      total: cartTotalWithCoupon(),
      payment: {
        /* BUG-22: полный номер карты и CVV сливаются в консоль. */
        card: f.elements.card.value,
        cvv: f.elements.cvv.value,
        exp: f.elements.exp.value,
      },
      customer: {
        name: f.elements.fullname.value,
        email: f.elements.email.value,
        phone: f.elements.phone.value,
      },
    };
    console.log('[BREW LAB] Order placed:', order);

    document.getElementById('co-ok').classList.add('show');
    setTimeout(() => closeAll(), 1800);
  });

  /* ---------------- Misc ---------------- */
  /* BUG-31: scroll listener без throttle — лог на каждый event. */
  window.addEventListener('scroll', () => {
    if (window.SHOP_CONFIG && window.SHOP_CONFIG.debug) {
      console.log('[scroll]', window.scrollY);
    }
  });

  /* ---------------- Toast ---------------- */
  let toastT;
  function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => el.classList.remove('show'), 1800);
  }

  /* ---------------- Init ---------------- */
  applyI18n();
})();
