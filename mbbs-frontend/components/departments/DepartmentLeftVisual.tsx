// components/departments/DepartmentLeftVisual.jsx

export const DepartmentLeftVisual = () => {
  return (
    <div className="lg:col-span-5 lg:sticky lg:top-32 flex items-start">
      <img
        src="/logo_black.jpeg"
        alt="AIMSRC Logo"
        className="w-60 sm:w-64 lg:w-80 h-auto object-contain rounded-2xl"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/400x200?text=AIMSRC+Logo";
        }}
      />
    </div>
  );
};