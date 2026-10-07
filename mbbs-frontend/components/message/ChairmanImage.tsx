// components/chairman/ChairmanImage.jsx

export const ChairmanImage = ({ imageSrc = "/chairman.jpg", altText = "Dr. Mohan Alva" }) => {
  return (
    <div className="w-full lg:w-5/12 flex justify-center">
      {/* Floating animation container with golden glow */}
      <div className="p-3 bg-white border border-[#ffddb6] shadow-[0_0_20px_rgba(255,221,182,0.6)] rounded-sm animate-float">
        <img 
          src='/Chairman.jpeg' 
          alt={altText}
          className="w-full h-auto object-cover max-h-[450px]"
        />
      </div>

      {/* Inline style for the smooth floating keyframe animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            box-shadow: 0 0 15px rgba(255, 221, 182, 0.5);
          }
          50% {
            transform: translateY(-8px);
            box-shadow: 0 0 25px rgba(255, 221, 182, 0.8);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};