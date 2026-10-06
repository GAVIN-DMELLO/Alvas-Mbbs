// components/story/StoryImage.jsx

export const StoryImage = () => {
  return (
    <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
      <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
        <img 
          src="/banner-4.jpg" 
          alt="Alva's Institute Campus Aerial View" 
          className="w-full h-auto object-cover aspect-[4/5] transform hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = "https://placehold.co/600x750?text=Campus+View"; }}
        />
      </div>
    </div>
  );
};