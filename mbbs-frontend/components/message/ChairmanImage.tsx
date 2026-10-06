
export const ChairmanImage = ({ imageSrc = "/chairman.jpg", altText = "Dr. Mohan Alva" }) => {
  return (
    <div className="w-full lg:w-5/12 flex justify-center">
      <div className="p-3 bg-white border border-slate-200 shadow-md rounded-sm">
        <img 
          src='/Chairman.jpeg' 
          alt={altText}
          className="w-full h-auto object-cover max-h-[450px]"
        />
      </div>
    </div>
  );
};