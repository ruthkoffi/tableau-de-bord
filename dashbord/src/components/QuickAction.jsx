// src/components/QuickAction.jsx

export default function QuickAction({ actions, onGeneratePlan }) {
  return (
    <div>
      <h2 className="text-xs md:text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">
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