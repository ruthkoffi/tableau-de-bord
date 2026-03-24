// src/components/ProgressBar.jsx
import { useState, useEffect } from "react";

export default function ProgressBar({ value, color }) {
  // On démarre à 0 puis on anime vers la vraie valeur
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Petit délai pour déclencher l'animation CSS
    const timer = setTimeout(() => setWidth(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
      <div
        className="h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${width}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}