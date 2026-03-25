// src/components/BottomNav.jsx

const tabs = [
  { id: "accueil",     icon: "🏠", label: "Accueil"  },
  { id: "cours",       icon: "📚", label: "Cours"    },
  { id: "progression", icon: "📈", label: "Progrès"  },
  { id: "ia",          icon: "🤖", label: "IA"       },
];

export default function BottomNav({ activeTab, onSwitch }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-2 py-2 z-20 shadow-lg">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSwitch(tab.id)}
            className={`
              flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl
              transition-all duration-200
              ${activeTab === tab.id
                ? "bg-amber-50 text-amber-600"
                : "text-stone-400 hover:text-stone-600"
              }
            `}
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="text-xs font-semibold">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}