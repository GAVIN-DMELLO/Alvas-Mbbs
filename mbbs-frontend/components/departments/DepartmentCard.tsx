// components/departments/DepartmentCard.jsx

export const DepartmentCard = ({ 
  badge = "Clinical Speciality", 
  title, 
  description, 
  imageSrc 
}) => {
  return (
    <div className="group relative bg-white border border-slate-200 hover:border-amber-500/60 rounded-xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        
        {/* Card Text Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Monospace Badge Token */}
            <span className="inline-block text-amber-700 bg-amber-50 font-mono text-xs tracking-wider uppercase px-3 py-1 rounded-md mb-4 border border-amber-200/50">
              {badge}
            </span>

            {/* Department Title */}
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-amber-700 transition-colors">
              {title}
            </h3>

            {/* Description Paragraph */}
            <p className="mt-3 text-slate-600 font-mono text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Action Link */}
          <div className="mt-6">
            <a 
              href="#explore" 
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wide uppercase text-amber-700 hover:underline font-semibold"
            >
              <span>Explore Department</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Thumbnail Image */}
        {imageSrc && (
          <div className="w-full sm:w-48 h-36 rounded-lg overflow-hidden border border-slate-200 shrink-0">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = "https://placehold.co/400x300?text=Department"; }}
            />
          </div>
        )}

      </div>
    </div>
  );
};