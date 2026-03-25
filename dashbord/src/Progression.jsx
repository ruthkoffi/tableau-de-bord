// src/Progression.jsx
import Badge from "./components/Badge";

export default function Progression({ user, weekActivity, weekDays }) {
  return (
    <div className="space-y-4 md:space-y-5">

      <h2 className="text-lg md:text-xl font-black text-stone-800">Ma Progression</h2>

      {/* Stats — 3 colonnes sur tous les écrans */}
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {[
          { val: "72%",              label: "Complétion" },
          { val: `${user.streak}🔥`, label: "Streak"     },
          { val: user.points,        label: "Points"      },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-2 md:p-3 text-center shadow-sm border border-stone-100">
            <p className="text-base md:text-xl font-black text-stone-800">{stat.val}</p>
            <p className="text-xs text-stone-400 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Certificats */}
      <div>
        <h3 className="text-xs md:text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">
          Certificats obtenus
        </h3>
        <div className="space-y-3">
          {user.certificates.map((cert, i) => (
            <div key={i} className="bg-white rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 shadow-sm border border-stone-100">
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl flex-shrink-0"
                style={{ backgroundColor: cert.color + "20", border: `2px solid ${cert.color}` }}
              >
                🎓
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-stone-800 text-xs md:text-sm truncate">{cert.title}</p>
                <p className="text-xs text-stone-400">{cert.date}</p>
              </div>
              <button
                className="text-xs font-bold px-2 md:px-3 py-1.5 rounded-lg text-white flex-shrink-0"
                style={{ backgroundColor: cert.color }}
              >
                Voir
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Badges — 5 colonnes fixes */}
      <div>
        <h3 className="text-xs md:text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">
          Badges
        </h3>
        <div className="grid grid-cols-5 gap-1 md:gap-2">
          {user.badges.map((badge, i) => (
            <Badge key={i} {...badge} />
          ))}
        </div>
      </div>

      {/* Graphique activité */}
      <div className="bg-white rounded-2xl p-3 md:p-4 shadow-sm border border-stone-100">
        <h3 className="font-bold text-stone-700 mb-3 text-xs md:text-sm">
          Activité cette semaine
        </h3>
        <div className="flex items-end gap-1 md:gap-2 h-14 md:h-16">
          {weekActivity.map((value, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md transition-all duration-700"
                style={{
                  height: `${value}%`,
                  backgroundColor: i === weekActivity.length - 1 ? "#C97D4E" : "#E5D5C5",
                }}
              />
              <span className="text-xs text-stone-400">{weekDays[i]}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}