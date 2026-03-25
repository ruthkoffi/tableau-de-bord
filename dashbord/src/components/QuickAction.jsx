import { Play, FileText, Users, Wrench } from "lucide-react";

// Dans userData.js, remplacez les icônes emoji par des noms
// puis dans QuickAction.jsx on les mappe

export const quickActions = [
  { id: "play",  label: "Reprendre l'apprentissage", sub: "Gestion Financière PME", color: "bg-amber-500",  hover: "hover:bg-amber-600",  isPlan: false },
  { id: "plan",  label: "Générer un Business Plan",  sub: "Voir le modèle",          color: "bg-emerald-600", hover: "hover:bg-emerald-700", isPlan: true  },
  { id: "users", label: "Trouver un Mentor",          sub: "12 mentors disponibles", color: "bg-violet-600",  hover: "hover:bg-violet-700",  isPlan: false },
  { id: "tools", label: "Mes Outils",                 sub: "Canvas, Pitch, Finances", color: "bg-stone-700",  hover: "hover:bg-stone-800",   isPlan: false },
];

export default function QuickAction({ actions, onGeneratePlan }) {
  return (
    <div>
      <h2 className="text-xs md:text-sm font-bold text-black uppercase tracking-widest mb-3">
        Actions rapides
      </h2>

      {/* 2 colonnes sur mobile, 4 colonnes sur desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.isPlan ? onGeneratePlan : undefined}
            className={`
              ${action.color} ${action.hover}
              text-white rounded-2xl p-3 md:p-4 text-left
              transition-all duration-200
              active:scale-95 shadow-md hover:shadow-lg
            `}
          >
            <span className="text-xl md:text-2xl">{action.icon}</span>
            <p className="font-bold text-xs md:text-sm mt-2 leading-tight">{action.label}</p>
            <p className="text-xs opacity-80 mt-0.5 hidden sm:block">{action.sub}</p>
          </button>
        ))}
      </div>
    </div>
  );
}