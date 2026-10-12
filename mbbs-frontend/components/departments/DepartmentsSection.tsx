// components/departments/DepartmentsSection.jsx
import { DepartmentLeftVisual } from './DepartmentLeftVisual';
import { DepartmentCard } from './DepartmentCard';

export const DepartmentsSection = () => {
  return (
    <section className="relative w-full bg-white text-slate-900 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: College Logo & Section Info */}
          <DepartmentLeftVisual />

          {/* RIGHT SIDE: Stacked Reusable Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-6 w-full">
            
            <DepartmentCard 
              badge="Clinical Speciality"
              title="DERMATOLOGY"
              description="Providing advanced surgical interventions with cutting-edge laparoscopic equipment, round-the-clock emergency surgical care, and specialized post-operative recovery units."
              imageSrc="/comm_med.jpeg"
            />

            <DepartmentCard 
              badge="Diagnostics & Research"
              title="Radiology"
              description="Equipped with next-generation MRI, high-resolution CT scanners, and real-time ultrasound imaging systems to deliver precise diagnostic insights."
              imageSrc="/comm_med.jpeg"
            />

            <DepartmentCard 
              badge="Specialized Care"
              title="Pediatrics"
              description="Comprehensive child health services featuring advanced NICU infrastructure, immunizations, and specialized developmental pediatric support."
              imageSrc="/comm_med.jpeg"
            />

          </div>

        </div>

      </div>
    </section>
  );
};