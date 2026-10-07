// // components/story/StoryImage.jsx

// export const StoryImage = () => {
//   return (
//     <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
//       {/* Floating animation container with golden glow border and shadow */}
//       {/* <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden border-2 border-[#ffddb6] bg-slate-50 shadow-[0_0_20px_rgba(255,221,182,0.6)] animate-float">
//         <img 
//           src="/logo_black.jpeg" 
//           alt="Alva's Institute Campus Aerial View" 
//           className="w-full h-auto object-cover aspect-[4/5] transform hover:scale-105 transition-transform duration-500"
//           onError={(e) => { e.target.src = "https://placehold.co/600x750?text=Campus+View"; }}
//         />
//       </div> */}

//       {/* Inline style for the smooth floating keyframe animation */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//             box-shadow: 0 0 15px rgba(255, 221, 182, 0.5);
//           }
//           50% {
//             transform: translateY(-8px);
//             box-shadow: 0 0 25px rgba(255, 221, 182, 0.8);
//           }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };