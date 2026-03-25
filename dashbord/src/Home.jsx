// src/Home.jsx
import Bienvenue   from "./components/Bienvenue";
import QuickAction from "./components/QuickAction";
import CoursCard   from "./components/CoursCard";

export default function Home({ user, actions, aiSuggestions, onGeneratePlan, onSwitchTab }) {
  //                                  ^^^^^^^ reçu depuis App.jsx
  return (
    <div className="space-y-4 md:space-y-5">

      {/* 1. Bienvenue */}
      <Bienvenue user={user} />

      {/* 2. Actions rapides — on passe "actions" tel quel */}
      <QuickAction actions={actions} onGeneratePlan={onGeneratePlan} />
      {/*                   ^^^^^^^ même nom que la prop reçue */}

      {/* 3. Cours en cours */}
      <div>
        <h2 className="text-xs md:text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">
          En cours
        </h2>
        {user?.courses && user.courses.length > 0 && (
          <CoursCard course={user.courses[0]} />
        )}
      </div>

      {/* 4. Suggestion IA */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs md:text-sm font-bold text-stone-400 uppercase tracking-widest">
            IA pour vous
          </h2>
          <button
            onClick={() => onSwitchTab("ia")}
            className="text-xs text-amber-600 font-semibold hover:underline"
          >
            Voir tout →
          </button>
        </div>

        {aiSuggestions && aiSuggestions.length > 0 && (
          <div className={`bg-gradient-to-br ${aiSuggestions[0].bg} rounded-2xl p-4 border border-amber-100`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl md:text-3xl flex-shrink-0">{aiSuggestions[0].icon}</span>
              <div className="min-w-0">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: aiSuggestions[0].color }}
                >
                  {aiSuggestions[0].tag}
                </span>
                <p className="font-bold text-stone-800 mt-1 text-sm">{aiSuggestions[0].title}</p>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">{aiSuggestions[0].desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}