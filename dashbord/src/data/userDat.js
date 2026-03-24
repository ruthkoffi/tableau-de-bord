

export const userData = {
  name: "Amara Konaté",
  domain: "Agro-industrie",
  avatar: "AK",
  level: "Intermédiaire",
  points: 1240,
  streak: 7,
  courses: [
    {
      id: 1,
      title: "Gestion Financière PME",
      progress: 72,
      color: "#C97D4E",
      modules: 12,
      done: 9,
    },
    {
      id: 2,
      title: "Marketing Digital Afrique",
      progress: 45,
      color: "#4E8C6E",
      modules: 8,
      done: 4,
    },
    {
      id: 3,
      title: "Leadership & Management",
      progress: 20,
      color: "#7B6FAB",
      modules: 10,
      done: 2,
    },
  ],
  badges: [
    { icon: "🏆", label: "Top Apprenant", earned: true },
    { icon: "🌱", label: "Entrepreneur",  earned: true },
    { icon: "💡", label: "Innovateur",    earned: true },
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
    desc: "Basé sur votre secteur, explorez les modèles de tarification adaptés aux marchés locaux.",
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
  },
  {
    icon: "📄",
    label: "Générer un Business Plan",
    sub: "Powered by IA",
    color: "bg-emerald-600",
    hover: "hover:bg-emerald-700",
    isAI: true,
  },
  {
    icon: "🤝",
    label: "Trouver un Mentor",
    sub: "12 mentors disponibles",
    color: "bg-violet-600",
    hover: "hover:bg-violet-700",
  },
  {
    icon: "🛠️",
    label: "Mes Outils",
    sub: "Canvas, Pitch, Finances",
    color: "bg-stone-700",
    hover: "hover:bg-stone-800",
  },
];

export const weekActivity = [30, 60, 45, 80, 55, 70, 90];
export const weekDays    = ["L", "M", "M", "J", "V", "S", "D"];