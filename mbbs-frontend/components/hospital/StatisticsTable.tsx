// components/hospital/StatisticsTable.tsx

import type { StatTable } from "@/lib/hospital";

export function StatisticsTable({ table }: { table: StatTable }) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
      <div className="text-center">
        <h2 className="font-serif text-2xl text-[#142d44] md:text-[28px]">
          {table.title}
        </h2>
        {table.caption && (
          <p className="mt-2 text-sm tracking-[0.02em] text-slate-500 md:text-[15px]">
            {table.caption}
          </p>
        )}
        <div className="mx-auto mt-4 h-[3px] w-14 bg-gradient-to-r from-[#b98b52] to-transparent" />
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="bg-[#0b1e36]">
                <th className="sticky left-0 z-10 w-[220px] whitespace-nowrap bg-[#0b1e36] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#b98b52]">
                  Department
                </th>
                {table.columns.map((column) => (
                  <th
                    key={column}
                    className="whitespace-nowrap px-4 py-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#b98b52]"
                  >
                    {column}
                  </th>
                ))}
                <th className="whitespace-nowrap px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#d3ae74]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, index) => {
                const isTotal = row.variant === "total";
                const isFootnote = row.variant === "footnote";
                const zebra = index % 2 === 1 ? "bg-[#f7f9fb]" : "bg-white";

                return (
                  <tr
                    key={row.label}
                    className={`group border-t border-slate-100 transition-colors duration-150 hover:bg-[#fbf7f1] ${
                      isTotal
                        ? "bg-[#f7f2ea] hover:bg-[#f3ebdf]"
                        : isFootnote
                          ? "bg-[#eef3f8] hover:bg-[#e8eef6]"
                          : zebra
                    }`}
                  >
                    <td
                      className={`sticky left-0 z-10 whitespace-nowrap px-5 py-3.5 text-sm ${
                        isTotal
                          ? "font-bold text-[#142d44] bg-[#f7f2ea] group-hover:bg-[#f3ebdf]"
                          : isFootnote
                            ? "font-semibold text-[#142d44] bg-[#eef3f8] group-hover:bg-[#e8eef6]"
                            : `font-medium text-[#142d44] ${zebra} group-hover:bg-[#fbf7f1]`
                      }`}
                    >
                      {row.label}
                    </td>

                    {row.values.map((value, cellIndex) => (
                      <td
                        key={`${row.label}-${table.columns[cellIndex]}`}
                        className={`px-4 py-3.5 text-center text-sm tabular-nums ${
                          isTotal
                            ? "font-bold text-[#142d44]"
                            : isFootnote
                              ? "font-semibold text-[#234767]"
                              : "text-slate-600"
                        }`}
                      >
                        {value === null ? "" : value.toLocaleString("en-IN")}
                      </td>
                    ))}

                    <td
                      className={`whitespace-nowrap px-5 py-3.5 text-center text-sm tabular-nums ${
                        isTotal
                          ? "font-bold text-[#a7773f]"
                          : isFootnote
                            ? "font-semibold text-[#234767]"
                            : "font-semibold text-[#142d44]"
                      }`}
                    >
                      {row.total.toLocaleString("en-IN")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-3 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 xl:hidden">
        Scroll horizontally to view all months
      </p>
    </section>
  );
}
