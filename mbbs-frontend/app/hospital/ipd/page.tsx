// app/hospital/ipd/page.tsx

import { IPD_TABLES } from "@/lib/hospital";
import { StatisticsTable } from "@/components/hospital/StatisticsTable";
import { HospitalSectionHeader } from "@/components/hospital/HospitalSectionHeader";

export default function InPatientStatisticsPage() {
  return (
    <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <HospitalSectionHeader
          eyebrow="Hospital Services"
          title="Alva’s Health Centre – Teaching Hospital"
          description="Department-wise in-patient admissions and discharges recorded at the teaching hospital, covering the full year 2025 and January 2026 to 18 February 2026."
        />

        <div className="mt-12 space-y-8">
          {IPD_TABLES.map((table) => (
            <StatisticsTable key={table.id} table={table} />
          ))}
        </div>
      </div>
    </div>
  );
}
