// app/departments/[slug]/page.tsx
import { DepartmentDetail } from "@/components/departments/DepartmentDetail";
import { DEPARTMENTS } from "@/lib/departments";

// Pre-render every department so the site can be hosted statically as well as
// on a Node server. Unknown slugs still render on demand (not-found state).
export function generateStaticParams() {
  return DEPARTMENTS.map((department) => ({ slug: department.slug }));
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <DepartmentDetail slug={slug} />;
}
