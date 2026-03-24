// src/components/Badge.jsx

export default function Badge({ icon, label, earned }) {
  return (
    <div
      className={`
        flex flex-col items-center gap-1 p-3 rounded-xl border-2
        transition-all duration-200
        ${earned
          ? "border-amber-300 bg-amber-50 shadow-sm"
          : "border-stone-200 bg-stone-50 opacity-40 grayscale"
        }
      `}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-medium text-stone-600 text-center leading-tight">
        {label}
      </span>
      {/* Point vert = badge débloqué */}
      {earned && (
        <span className="w-2 h-2 rounded-full bg-amber-400" />
      )}
    </div>
  );
}