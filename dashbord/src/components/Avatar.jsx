// src/components/Avatar.jsx

export default function Avatar({ initials, photo, size = "lg" }) {
  const taille = {
    sm: "w-10 h-10 text-sm rounded-xl",
    lg: "w-16 h-16 text-xl rounded-2xl",
  };

  if (photo) {
    return (
      <img
        src={photo}
        alt="avatar"
        className={`${taille[size]} object-cover shadow-lg flex-shrink-0`}
      />
    );
  }

  return (
    <div
      className={`
        ${taille[size]}
        bg-gradient-to-br from-amber-400 to-orange-500
        flex items-center justify-center
        font-bold text-white shadow-lg flex-shrink-0
      `}
    >
      {initials}
    </div>
  );
}