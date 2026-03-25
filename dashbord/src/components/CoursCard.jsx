
import BarrePro from "./BarrePro"; // ✅ un seul import

export default function CoursCard({ course, showButton = true }) {
  const isCompleted = course.done === course.modules;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">

      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 pr-3">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-2 inline-block"
            style={{ backgroundColor: course.color }}
          >
            {isCompleted ? "✅ Terminé" : "En cours"}
          </span>
          <p className="font-bold text-stone-800 mt-1">{course.title}</p>
          <p className="text-xs text-stone-500">
            {course.done} / {course.modules} modules complétés
          </p>
        </div>

        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-sm shadow-md flex-shrink-0"
          style={{ backgroundColor: course.color }}
        >
          {course.progress}%
        </div>
      </div>

      <BarrePro value={course.progress} color={course.color} />

      {showButton && (
        <button
          className="w-full mt-3 py-2.5 rounded-xl text-sm font-bold border-2 transition-all active:scale-95 hover:opacity-80"
          style={{ borderColor: course.color, color: course.color }}
        >
          {isCompleted ? "Revoir le cours" : "Continuer →"}
        </button>
      )}
    </div>
  );
}