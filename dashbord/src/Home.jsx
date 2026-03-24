// src/tabs/TabAccueil.jsx
import WelcomeCard  from "./components/WelcomeCard";
import QuickActions from "./components/QuickActions";
import CourseCard   from "./components/CourseCard";

export default function TabAccueil({ user, actions, aiSuggestions, onGeneratePlan, onSwitchTab }) {
  return (
    <div className="space-y-5">

      {/* 1. Carte de bienvenue */}
      <WelcomeCard user={user} />

      {/* 2. Actions rapides */}
      <QuickActions actions={actions} onGeneratePlan={onGeneratePlan} />

      {/* 3. Cours en cours (premier cours uniquement) */}
      <div>
        <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">
          En cours
        </h2>
        <CourseCard course={user.courses[0]} />
      </div>

      {/* 4. Aperçu suggestion IA */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
            IA pour vous
          </h2>
          {/* Bouton "Voir tout" → switch vers onglet IA */}
          <button
            onClick={() => onSwitchTab("ia")}
            className="text-xs text-amber-600 font-semibold hover:underline"
          >
            Voir tout →
          </button>
        </div>

        {/* On affiche uniquement la première suggestion */}
        <div className={`bg-gradient-to-br ${aiSuggestions[0].bg} rounded-2xl p-4 border border-amber-100`}>
          <div className="flex items-start gap-3">
            <span className="text-3xl">{aiSuggestions[0].icon}</span>
            <div>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: aiSuggestions[0].color }}
              >
                {aiSuggestions[0].tag}
              </span>
              <p className="font-bold text-stone-800 mt-1 text-sm">
                {aiSuggestions[0].title}
              </p>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                {aiSuggestions[0].desc}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
