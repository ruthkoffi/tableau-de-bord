// src/components/CoursCard.jsx
import BarrePro from "./BarrePro";

export default function CoursCard({ course, showButton = true }) {
  const isCompleted = course.done === course.modules;

  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-stone-100 ">

      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 pr-3 min-w-0">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-2 inline-block"
            style={{ backgroundColor: course.color }}
          >
            {isCompleted ? "✅ Terminé" : "En cours"}
          </span>
          {/* truncate évite le débordement sur mobile */}
          <p className="font-bold text-stone-800 mt-1 text-sm md:text-base truncate">
            {course.title}
          </p>
          <p className="text-xs text-stone-500 mt-0.5">
            {course.done} / {course.modules} modules
          </p>
        </div>

        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-white text-xs md:text-sm shadow-md flex-shrink-0"
          style={{ backgroundColor: course.color }}
        >
          {course.progress}%
        </div>
      </div>

      <BarrePro value={course.progress} color={course.color} />

      {showButton && (
        <button
          className="w-full mt-3 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold border-2 transition-all active:scale-95 hover:opacity-80"
          style={{ borderColor: course.color, color: course.color }}
        >
          {isCompleted ? "Revoir le cours" : "Continuer →"}
        </button>
      )}
    </div>
  );
}