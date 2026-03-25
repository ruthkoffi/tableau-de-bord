// src/components/Sidebar.jsx

const tabs = [
  { id: "accueil",     icon: "🏠", label: "Accueil"       },
  { id: "cours",       icon: "📚", label: "Cours"         },
  { id: "progression", icon: "📈", label: "Progression"   },
  { id: "ia",          icon: "🤖", label: "Suggestion IA" },
];

export default function Sidebar({ activeTab, onSwitch }) {
  return (
    // hidden sur mobile, visible à partir de md (768px)
    <div className="hidden md:flex flex-col w-52 min-h-screen bg-amber-800 px-3 py-6 flex-shrink-0">
      <div
        className="text-white text-2xl font-black mb-8 px-2"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Wari
        <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-normal ml-2">Pro</span>
      </div>

      <nav className="flex flex-col gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSwitch(tab.id)}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl
              text-sm font-semibold transition-all duration-200 text-left w-full
              ${activeTab === tab.id
                ? "bg-white text-amber-800 shadow-md"
                : "text-white/80 hover:bg-white/20"
              }
            `}
          >
            <span className="text-lg">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}