// src/tabs/TabIA.jsx

export default function TabIA({ suggestions, onGeneratePlan }) {
  return (
    <div className="space-y-5">

      {/* En-tête */}
      <div>
        <h2 className="text-xl font-black text-stone-800">Suggestions IA</h2>
        <p className="text-xs text-stone-400 mt-1">
          Personnalisées pour votre secteur
        </p>
      </div>

      {/* Cartes suggestions */}
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className={`bg-gradient-to-br ${suggestion.bg} rounded-2xl p-5 border border-stone-100 shadow-sm`}
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl">{suggestion.icon}</span>
            <div className="flex-1">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: suggestion.color }}
              >
                {suggestion.tag}
              </span>
              <h3 className="font-bold text-stone-800 mt-1">{suggestion.title}</h3>
              <p className="text-sm text-stone-600 mt-1 leading-relaxed">{suggestion.desc}</p>
            </div>
          </div>
          <button
            className="w-full py-2.5 rounded-xl font-bold text-sm text-white transition-all active:scale-95"
            style={{ backgroundColor: suggestion.color }}
          >
            {suggestion.action} →
          </button>
        </div>
      ))}

      {/* Bloc Business Plan */}
      <div className="bg-stone-800 rounded-2xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">✨</span>
          <div>
            <p className="font-bold text-white">Générer un Business Plan</p>
            <p className="text-xs text-stone-400">Modèle statique inclus</p>
          </div>
        </div>
        <button
          onClick={onGeneratePlan}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl text-sm transition-colors active:scale-95"
        >
          🚀 Voir le Business Plan
        </button>
      </div>

    </div>
  );
}