// src/Home.jsx
import Bienvenue   from "./components/Bienvenue";   // ✅ nom correct
import QuickAction from "./components/QuickAction"; // ✅ nom correct
import CoursCard   from "./components/CoursCard";   // ✅ nom correct

export default function Home({ user, actions, aiSuggestions, onGeneratePlan, onSwitchTab }) {
  return (
    <div className="space-y-5">

      {/* 1. Carte de bienvenue */}
      <Bienvenue user={user} />

      {/* 2. Actions rapides */}
      <QuickAction actions={actions} onGeneratePlan={onGeneratePlan} />

      {/* 3. Cours en cours */}
      <div>
        <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">
          En cours
        </h2>
        {/* ✅ vérification que courses existe avant d'accéder à [0] */}
        {user.courses && user.courses.length > 0 && (
          <CoursCard course={user.courses[0]} />
        )}
      </div>

      {/* 4. Aperçu suggestion IA */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
            IA pour vous
          </h2>
          <button
            onClick={() => onSwitchTab("ia")}
            className="text-xs text-amber-600 font-semibold hover:underline"
          >
            Voir tout →
          </button>
        </div>

        {/* ✅ vérification que aiSuggestions existe */}
        {aiSuggestions && aiSuggestions.length > 0 && (
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
        )}
      </div>

    </div>
  );
}