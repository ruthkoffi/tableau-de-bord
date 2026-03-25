// src/App.jsx
import { useState } from "react";

import {
  userData,
  aiSuggestions,
  quickActions,
  weekActivity,
  weekDays,
  businessPlan,
} from "./data/userData";

import Avatar   from "./components/Avatar";
import Sidebar  from "./components/Sidebar";
import Home        from "./Home";
import Progression from "./Progression";
import TabCours from "./tabs/TabCours";
import TabIA    from "./tabs/TabIA";

export default function App() {
  const [activeTab, setActiveTab] = useState("accueil");
  const [planModal, setPlanModal] = useState(false);

  function openPlan() { setPlanModal(true); }

  function renderPage() {
    switch (activeTab) {
      case "accueil":
        return (
          <Home
            user={userData}
            actions={quickActions}
            aiSuggestions={aiSuggestions}
            onGeneratePlan={openPlan}
            onSwitchTab={setActiveTab}
          />
        );
      case "cours":
        return <TabCours courses={userData.courses} />;
      case "progression":
        return <Progression user={userData} weekActivity={weekActivity} weekDays={weekDays} />;
      case "ia":
        return <TabIA suggestions={aiSuggestions} onGeneratePlan={openPlan} />;
      default:
        return null;
    }
  }

  return (
    <div className="flex min-h-screen bg-stone-50" style={{ fontFamily: "Georgia, serif" }}>

      <Sidebar activeTab={activeTab} onSwitch={setActiveTab} />

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-stone-200 px-6 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-600" style={{ fontFamily: "Georgia, serif" }}>Wari</span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Pro</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl bg-stone-100 hover:bg-stone-200 transition-colors">
              <span className="text-lg">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <Avatar initials={userData.avatar} photo={userData.photo} size="sm" />
          </div>
        </header>

        <main className="flex-1 p-6 max-w-2xl">
          {renderPage()}
        </main>
      </div>

      {planModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg max-h-[80vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-stone-100 flex-shrink-0">
              <div>
                <h3 className="font-black text-stone-800">📄 Business Plan</h3>
                <p className="text-xs text-stone-400 mt-0.5">{userData.domain} · {userData.name}</p>
              </div>
              <button onClick={() => setPlanModal(false)} className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-stone-200">✕</button>
            </div>
            <div className="p-5 overflow-y-auto flex-1">
              <pre className="text-sm text-stone-700 whitespace-pre-wrap leading-relaxed font-sans">{businessPlan}</pre>
            </div>
            <div className="p-4 border-t border-stone-100 flex-shrink-0">
              <button onClick={() => setPlanModal(false)} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl text-sm transition-colors">Fermer</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}