// src/components/QuickActions.jsx

export default function QuickActions({ actions, onGeneratePlan }) {
  return (
    <div>
      <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">
        Actions rapides
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.isAI ? onGeneratePlan : undefined}
            className={`
              ${action.color} ${action.hover}
              text-white rounded-2xl p-4 text-left
              transition-all duration-200
              active:scale-95 shadow-md hover:shadow-lg
            `}
          >
            {/* Icône */}
            <span className="text-2xl">{action.icon}</span>

            {/* Titre */}
            <p className="font-bold text-sm mt-2 leading-tight">
              {action.label}
            </p>

            {/* Sous-titre */}
            <p className="text-xs opacity-80 mt-0.5">
              {action.sub}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}