// components/departments/DepartmentMarquee.tsx
import { DepartmentCard } from "./DepartmentCard";

type DepartmentMarqueeProps = {
  departments: string[];
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
        {track.map((name, i) => (
          <DepartmentCard
            key={`${name}-${i}`}
            index={startIndex + (i % departments.length)}
            name={name}
          />
        ))}
      </div>
    </div>
  );
};
