// src/data/userData.js

export const userData = {
  name: "Ruth KOFFI",
  domain: "Agro-industrie",
  avatar: "AK",
  photo: null, // Remplacez par le chemin de votre photo ex: "/photo.jpg"
  level: "Intermédiaire",
  points: 1240,
  streak: 7,
  courses: [
    { id: 1, title: "Gestion Financière PME",    progress: 72, color: "#C97D4E", modules: 12, done: 9 },
    { id: 2, title: "Marketing Digital Afrique", progress: 45, color: "#4E8C6E", modules: 8,  done: 4 },
    { id: 3, title: "Leadership & Management",   progress: 20, color: "#7B6FAB", modules: 10, done: 2 },
  ],
  badges: [
    { icon: "🏆", label: "Top Apprenant", earned: true  },
    { icon: "🌱", label: "Entrepreneur",  earned: true  },
    { icon: "💡", label: "Innovateur",    earned: true  },
    { icon: "🤝", label: "Mentor",        earned: false },
    { icon: "🎯", label: "Expert",        earned: false },
  ],
  certificates: [
    { title: "Fondamentaux du Business", date: "Jan 2026", color: "#C97D4E" },
    { title: "Pitch & Levée de fonds",   date: "Fév 2026", color: "#4E8C6E" },
  ],
};

export const aiSuggestions = [
  {
    id: 1,
    icon: "🧠",
    tag: "Recommandé",
    title: "Stratégie de prix pour l'agro-industrie",
    desc: "Explorez les modèles de tarification adaptés aux marchés locaux d'Afrique de l'Ouest.",
    action: "Explorer",
    color: "#C97D4E",
    bg: "from-amber-50 to-orange-50",
  },
  {
    id: 2,
    icon: "📊",
    tag: "Tendance",
    title: "Digitaliser votre chaîne d'approvisionnement",
    desc: "Les entreprises agro qui digitalisent augmentent leur efficacité de 35% en moyenne.",
    action: "Découvrir",
    color: "#4E8C6E",
    bg: "from-emerald-50 to-teal-50",
  },
  {
    id: 3,
    icon: "🌍",
    tag: "Nouveau",
    title: "Accès aux marchés sous-régionaux",
    desc: "Guide pratique pour exporter dans l'espace CEDEAO avec vos produits transformés.",
    action: "Lire",
    color: "#7B6FAB",
    bg: "from-violet-50 to-purple-50",
  },
];

export const quickActions = [
  {
    icon: "▶️",
    label: "Reprendre l'apprentissage",
    sub: "Gestion Financière PME",
    color: "bg-amber-500",
    hover: "hover:bg-amber-600",
    isPlan: false,
  },
  {
    icon: "📄",
    label: "Générer un Business Plan",
    sub: "Voir le modèle",
    color: "bg-emerald-600",
    hover: "hover:bg-emerald-700",
    isPlan: true,  // ce bouton ouvre le modal
  },
  {
    icon: "🤝",
    label: "Trouver un Mentor",
    sub: "12 mentors disponibles",
    color: "bg-violet-600",
    hover: "hover:bg-violet-700",
    isPlan: false,
  },
  {
    icon: "🛠️",
    label: "Mes Outils",
    sub: "Canvas, Pitch, Finances",
    color: "bg-stone-700",
    hover: "hover:bg-stone-800",
    isPlan: false,
  },
];

export const weekActivity = [30, 60, 45, 80, 55, 70, 90];
export const weekDays     = ["L", "M", "M", "J", "V", "S", "D"];

// Business plan statique — affiché dans le modal sans API
export const businessPlan = `
🎯 RÉSUMÉ EXÉCUTIF
Transformation et commercialisation de produits agricoles locaux (manioc, maïs, soja) destinés aux marchés urbains d'Abidjan et de la sous-région CEDEAO.

📊 ANALYSE DE MARCHÉ
• Marché cible : ménages urbains et restaurants (2,5M de personnes à Abidjan)
• Croissance du secteur agro-alimentaire : +8% par an en Côte d'Ivoire
• Concurrents directs : 3 PME locales, pas de leader dominant
• Avantage concurrentiel : circuits courts, traçabilité, emballage moderne

💰 MODÈLE DE REVENUS
• Vente directe B2C : marchés, supermarchés (60% du CA)
• Vente B2B : restaurants, cantines d'entreprises (30% du CA)
• Abonnements paniers hebdomadaires (10% du CA)
• Objectif CA année 1 : 18 000 000 FCFA

🗓️ PLAN D'ACTION 90 JOURS
Mois 1 — Structuration
  → Enregistrement officiel de l'entreprise
  → Sécurisation de 2 fournisseurs agricoles
  → Mise en place de l'atelier de transformation

Mois 2 — Lancement
  → Premiers clients B2B (5 restaurants)
  → Lancement réseaux sociaux
  → Participation au marché hebdomadaire

Mois 3 — Croissance
  → Référencement dans 2 supermarchés
  → Recrutement d'un commercial
  → Bilan et ajustement de la stratégie
`;