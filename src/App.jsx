// src/App.jsx
import { useState } from "react";
import { userData, aiSuggestions, quickActions, weekActivity, weekDays, businessPlan } from "./data/userData";
import Avatar    from "./components/Avatar";
import Sidebar   from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import Home        from "./Home";
import Progression from "./Progression";
import TabCours from "./tabs/TabCours";
import TabIA    from "./tabs/TabIA";

export default function App() {
  const [activeTab, setActiveTab] = useState("accueil");
  const [planModal, setPlanModal] = useState(false);

  function renderPage() {
    switch (activeTab) {
      case "accueil":
        return <Home user={userData} actions={quickActions} aiSuggestions={aiSuggestions} onGeneratePlan={() => setPlanModal(true)} onSwitchTab={setActiveTab} />;
      case "cours":
        return <TabCours courses={userData.courses} />;
      case "progression":
        return <Progression user={userData} weekActivity={weekActivity} weekDays={weekDays} />;
      case "ia":
        return <TabIA suggestions={aiSuggestions} onGeneratePlan={() => setPlanModal(true)} />;
      default:
        return null;
    }
  }

  return (
    <div className="flex min-h-screen " style={{ fontFamily: "Georgia, serif" }}>

      {/* Sidebar — cachée sur mobile */}
      <Sidebar activeTab={activeTab} onSwitch={setActiveTab} />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <header className="bg-white border-b border-stone-200 px-4 md:px-6 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black text-amber-600" style={{ fontFamily: "Georgia, serif" }}>
              Entrepeneur
            </span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Pro</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            {/* <button className="relative p-2 rounded-xl bg-stone-100 hover:bg-stone-200 transition-colors">
              <span className="text-base md:text-lg">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button> */}
            <Avatar initials={userData.avatar} photo={userData.photo} size="sm" />
          </div>
        </header>

        {/* Page — padding bottom sur mobile pour la BottomNav */}
        <main className="flex-1 p-4 md:p-6 pb-24 md:pb-6 w-full">
          {renderPage()}
        </main>

      </div>

      {/* BottomNav — visible sur mobile seulement */}
      <BottomNav activeTab={activeTab} onSwitch={setActiveTab} />

      {/* Modal Business Plan */}
      {planModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg max-h-[90vh] sm:max-h-[80vh] overflow-hidden shadow-2xl flex flex-col">

            <div className="flex items-center justify-between p-4 md:p-5 border-b border-stone-100 flex-shrink-0">
              <div>
                <h3 className="font-black text-stone-800 text-sm md:text-base">📄 Business Plan</h3>
                <p className="text-xs text-stone-400 mt-0.5">{userData.domain} · {userData.name}</p>
              </div>
              <button
                onClick={() => setPlanModal(false)}
                className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-stone-200"
              >✕</button>
            </div>

            <div className="p-4 md:p-5 overflow-y-auto flex-1">
              <pre className="text-xs md:text-sm text-stone-700 whitespace-pre-wrap leading-relaxed font-sans">
                {businessPlan}
              </pre>
            </div>

            <div className="p-4 border-t border-stone-100 flex-shrink-0">
              <button
                onClick={() => setPlanModal(false)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
              >Fermer</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}