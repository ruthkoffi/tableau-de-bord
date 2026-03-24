// src/components/WelcomeCard.jsx
import { useState, useEffect } from "react";
import Avatar from "./Avatar";

export default function Card({ user }) {
  const [greeting, setGreeting] = useState("");

  // Salutation dynamique selon l'heure de la journée
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12)      setGreeting("Bonjour");
    else if (hour < 18) setGreeting("Bon après-midi");
    else                setGreeting("Bonsoir");
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-2xl p-5 text-white shadow-xl"
      style={{
        background:
          "linear-gradient(135deg, #C97D4E 0%, #8B4513 50%, #4E3728 100%)",
      }}
    >
      {/* Cercles décoratifs en arrière-plan */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
        <div className="w-full h-full rounded-full border-8 border-white translate-x-8 -translate-y-8" />
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20 opacity-10 pointer-events-none">
        <div className="w-full h-full rounded-full border-4 border-white -translate-x-6 translate-y-6" />
      </div>

      {/* Ligne 1 : avatar + nom + domaine */}
      <div className="flex items-start gap-4 relative z-10">
        <Avatar initials={user.avatar} size="lg" />
        <div className="flex-1">
          <p className="text-amber-200 text-sm font-medium">
            {greeting} 👋
          </p>
          <h1 className="text-xl font-bold leading-tight mt-0.5">
            {user.name}
          </h1>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
              🌾 {user.domain}
            </span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
              ⭐ {user.level}
            </span>
          </div>
        </div>
      </div>

      {/* Ligne 2 : stats (points, streak, certificats) */}
      <div className="flex items-center gap-4 mt-4 relative z-10 pt-3 border-t border-white/20">
        <div className="text-center">
          <p className="text-xl font-black">{user.points}</p>
          <p className="text-xs text-amber-200">Points</p>
        </div>

        <div className="w-px h-8 bg-white/20" />

        <div className="text-center">
          <p className="text-xl font-black">{user.streak}🔥</p>
          <p className="text-xs text-amber-200">Jours consécutifs</p>
        </div>

        <div className="w-px h-8 bg-white/20" />

        <div className="text-center">
          <p className="text-xl font-black">{user.certificates.length}</p>
          <p className="text-xs text-amber-200">Certificats</p>
        </div>
      </div>
    </div>
  );
}