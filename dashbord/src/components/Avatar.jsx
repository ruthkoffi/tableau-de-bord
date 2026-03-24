// src/components/Avatar.jsx

export default function Avatar({ initials, photo, size = "lg" }) {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm rounded-xl",
    lg: "w-16 h-16 text-xl rounded-2xl",
  };

  // Si une photo est fournie → on affiche l'image
  if (photo) {
    return (
      <img
        src="./src/assets/avatar.png"
        alt="Avatar"
        className={`
          ${sizeClasses[size]}
          object-cover shadow-lg flex-shrink-0
        `}
      />
    );
  }

  // Sinon → fallback sur les initiales
  return (
    <div
      className={`
        ${sizeClasses[size]}
        bg-gradient-to-br from-amber-400 to-orange-500
        flex items-center justify-center
        font-bold text-white shadow-lg flex-shrink-0
      `}
    >
      {initials}
    </div>
  );
}