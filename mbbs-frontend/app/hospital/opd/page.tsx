// app/hospital/opd/page.tsx

import { OPD_TABLES } from "@/lib/hospital";
import { StatisticsTable } from "@/components/hospital/StatisticsTable";
import { HospitalSectionHeader } from "@/components/hospital/HospitalSectionHeader";

export default function OutPatientStatisticsPage() {
  return (
    <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <HospitalSectionHeader
          eyebrow="Hospital Services"
          title="Out-Patient Department Statistics"
          description="Department-wise outpatient registrations recorded at Alva’s Health Centre, split by new and revisit patients for January 2026 to 18 February 2026."
        />

        <div className="mt-12 space-y-8">
          {OPD_TABLES.map((table) => (
            <StatisticsTable key={table.id} table={table} />
          ))}
        </div>
      </div>
    </div>
  );
}
