const translations = {
  ar: {
    welcome: "مرحبًا بك في DOCTECH FLEXCY",
    balance: "رصيدي: 0 د.ج",
    debt: "ديني: 0 د.ج",
    alert: "⚠️ الخدمات متاحة يوميًا من الساعة 08:00 إلى 23:00",
    cards: "بطاقات",
    recharge: "تعبئة الإنترنت",
    flexy: "فليكسي",
    home: "الصفحة الرئيسية",
    orders: "طلبات البطاقات",
    sales: "المبيعات",
    history: "سجل العمليات",
    support: "الدعم الفني",
    settings: "الإعدادات"
  },
  fr: {
    welcome: "Bienvenue sur DOCTECH FLEXCY",
    balance: "Mon solde : 0 DZD",
    debt: "Ma dette : 0 DZD",
    alert: "⚠️ Les services sont disponibles tous les jours de 08h00 à 23h00",
    cards: "Cartes",
    recharge: "Recharge Internet",
    flexy: "Flexy",
    home: "Accueil",
    orders: "Commandes de cartes",
    sales: "Ventes",
    history: "Historique",
    support: "Support technique",
    settings: "Paramètres"
  },
  en: {
    welcome: "Welcome to DOCTECH FLEXCY",
    balance: "My balance: 0 DZD",
    debt: "My debt: 0 DZD",
    alert: "⚠️ Services available daily from 08:00 to 23:00",
    cards: "Cards",
    recharge: "Internet Top-Up",
    flexy: "Flexy",
    home: "Home",
    orders: "Card Orders",
    sales: "Sales",
    history: "History",
    support: "Support",
    settings: "Settings"
  }
};

const select = document.getElementById('language-select');
select.addEventListener('change', () => changeLanguage(select.value));

function changeLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = translations[lang][key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}