// components/story/StoryImage.jsx

export const StoryImage = () => {
  return (
    <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
      <div className="w-full max-w-md lg:max-w-none overflow-hidden rounded-2xl">
        <img
          src="/logo_black.jpeg"
          alt="Alva's Institute Campus"
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/600x750?text=Campus+View";
          }}
        />
      </div>
    </div>
  );
};