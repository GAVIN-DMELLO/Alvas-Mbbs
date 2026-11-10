// components/departments/DepartmentMarquee.tsx
import { DepartmentCard } from "./DepartmentCard";

export type MarqueeDepartment = {
  name: string;
  slug: string;
};

type DepartmentMarqueeProps = {
  departments: MarqueeDepartment[];
  startIndex: number;
  direction?: "left" | "right";
};

export const DepartmentMarquee = ({
  departments,
  startIndex,
  direction = "left",
}: DepartmentMarqueeProps) => {
  // Duplicate the list so the track loops seamlessly at -50%.
  const track = [...departments, ...departments];

  return (
    <div className="marquee-group w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {track.map((department, i) => (
          <DepartmentCard
            key={`${department.slug}-${i}`}
            index={startIndex + (i % departments.length)}
            name={department.name}
            slug={department.slug}
          />
        ))}
      </div>
    </div>
  );
};
