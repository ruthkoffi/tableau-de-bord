
import { Home, BookOpen, TrendingUp, Bot } from "lucide-react";

const tabs = [
  { id: "accueil",     icon: <Home size={18} />,       label: "Accueil"       },
  { id: "cours",       icon: <BookOpen size={18} />,   label: "Cours"         },
  { id: "progression", icon: <TrendingUp size={18} />, label: "Progression"   },
  { id: "ia",          icon: <Bot size={18} />,        label: "Suggestion IA" },
];

export default function Sidebar({ activeTab, onSwitch }) {
  return (
    // hidden sur mobile, visible à partir de md (768px)
    <div className="hidden md:flex flex-col w-52 min-h-screen bg-amber-800 px-3 py-6 flex-shrink-0">
      <div
        className="text-white text-2xl font-black mb-8 px-2"
    
      style={{ background: "linear-gradient(135deg, #C97D4E 0%, #8B4513 50%, #4E3728 100%)" }}
    >
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-28 h-28 md:w-32 md:h-32 opacity-10 pointer-events-none">
        <div className="w-full h-full rounded-full border-8 border-white translate-x-8 -translate-y-8" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 md:w-20 md:h-20 opacity-10 pointer-events-none">
        <div className="w-full h-full rounded-full border-4 border-white -translate-x-6 translate-y-6" />
      </div>
        PRO
        {/* <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-normal ml-2">Pro</span> */}
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