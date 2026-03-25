// src/tabs/TabCours.jsx
import CoursCard from "../components/CoursCard";

export default function TabCours({ courses }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-black text-stone-800">Mes Cours</h2>

      {courses.map((course) => (
        <CoursCard key={course.id} course={course} />
      ))}

      <div className="bg-stone-800 rounded-2xl p-5 text-center">
        <p className="text-3xl mb-2">🔍</p>
        <p className="font-bold text-white">Explorer de nouveaux cours</p>
        <p className="text-xs text-stone-400 mt-1">+50 formations disponibles</p>
        <button className="mt-3 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors">
          Parcourir le catalogue
        </button>
      </div>
    </div>
  );
}