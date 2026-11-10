// lib/hospital.ts

export type StatRow = {
  label: string;
  /** Values per month; `null` means no figure recorded for that month. */
  values: (number | null)[];
  total: number;
  /** Highlights the row as a summary row. */
  variant?: "total" | "footnote";
};

export type StatTable = {
  id: string;
  title: string;
  caption?: string;
  columns: string[];
  rows: StatRow[];
};

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const row = (
  label: string,
  values: (number | null)[],
  total: number,
  variant?: StatRow["variant"],
): StatRow => ({ label, values, total, variant });

export const OPD_TABLES: StatTable[] = [
  {
    id: "op-new",
    title: "OP – New",
    caption: "Jan 2026 – 18 Feb 2026",
    columns: MONTHS,
    rows: [
      row(
        "General Medicine",
        [5453, 3370, null, null, null, null, null, null, null, null, null, null],
        8823,
      ),
      row(
        "General Surgery",
        [2263, 1360, null, null, null, null, null, null, null, null, null, null],
        3623,
      ),
      row(
        "Orthopaedics",
        [1488, 1118, null, null, null, null, null, null, null, null, null, null],
        2606,
      ),
      row(
        "Ophthalmology",
        [352, 271, null, null, null, null, null, null, null, null, null, null],
        623,
      ),
      row(
        "Obstetrics & Gynaecology",
        [1938, 1211, null, null, null, null, null, null, null, null, null, null],
        3149,
      ),
      row(
        "Paediatrics",
        [2351, 1539, null, null, null, null, null, null, null, null, null, null],
        3890,
      ),
      row(
        "Psychiatry",
        [234, 145, null, null, null, null, null, null, null, null, null, null],
        379,
      ),
      row(
        "Dermatology",
        [604, 588, null, null, null, null, null, null, null, null, null, null],
        1192,
      ),
      row(
        "ENT",
        [1206, 881, null, null, null, null, null, null, null, null, null, null],
        2087,
      ),
      row(
        "Total",
        [15889, 10483, null, null, null, null, null, null, null, null, null, null],
        26372,
        "total",
      ),
    ],
  },
  {
    id: "op-revisit",
    title: "OP – Revisit",
    caption: "Jan 2026 – 18 Feb 2026",
    columns: MONTHS,
    rows: [
      row(
        "General Medicine",
        [2326, 1475, null, null, null, null, null, null, null, null, null, null],
        3801,
      ),
      row(
        "General Surgery",
        [1754, 1020, null, null, null, null, null, null, null, null, null, null],
        2774,
      ),
      row(
        "Orthopaedics",
        [1383, 972, null, null, null, null, null, null, null, null, null, null],
        2355,
      ),
      row(
        "Ophthalmology",
        [765, 480, null, null, null, null, null, null, null, null, null, null],
        1245,
      ),
      row(
        "Obstetrics & Gynaecology",
        [1271, 786, null, null, null, null, null, null, null, null, null, null],
        2057,
      ),
      row(
        "Paediatrics",
        [1193, 839, null, null, null, null, null, null, null, null, null, null],
        2032,
      ),
      row(
        "Psychiatry",
        [201, 160, null, null, null, null, null, null, null, null, null, null],
        361,
      ),
      row(
        "Dermatology",
        [486, 222, null, null, null, null, null, null, null, null, null, null],
        708,
      ),
      row(
        "ENT",
        [623, 428, null, null, null, null, null, null, null, null, null, null],
        1051,
      ),
      row(
        "Total",
        [10002, 6382, null, null, null, null, null, null, null, null, null, null],
        16384,
        "total",
      ),
    ],
  },
  {
    id: "op-new-revisit",
    title: "OP – New + Revisit",
    caption: "Jan 2026 – 18 Feb 2026",
    columns: MONTHS,
    rows: [
      row(
        "General Medicine",
        [7779, 4845, null, null, null, null, null, null, null, null, null, null],
        12624,
      ),
      row(
        "General Surgery",
        [4017, 2380, null, null, null, null, null, null, null, null, null, null],
        6397,
      ),
      row(
        "Orthopaedics",
        [2871, 2090, null, null, null, null, null, null, null, null, null, null],
        4961,
      ),
      row(
        "Ophthalmology",
        [1117, 751, null, null, null, null, null, null, null, null, null, null],
        1868,
      ),
      row(
        "Obstetrics & Gynaecology",
        [3209, 1997, null, null, null, null, null, null, null, null, null, null],
        5206,
      ),
      row(
        "Paediatrics",
        [3544, 2378, null, null, null, null, null, null, null, null, null, null],
        5922,
      ),
      row(
        "Psychiatry",
        [435, 305, null, null, null, null, null, null, null, null, null, null],
        740,
      ),
      row(
        "Dermatology",
        [1090, 810, null, null, null, null, null, null, null, null, null, null],
        1900,
      ),
      row(
        "ENT",
        [1829, 1309, null, null, null, null, null, null, null, null, null, null],
        3138,
      ),
      row(
        "Total",
        [25891, 16865, null, null, null, null, null, null, null, null, null, null],
        42756,
        "total",
      ),
      row(
        "Emergency Footfall",
        [1966, 1274, null, null, null, null, null, null, null, null, null, null],
        3240,
        "footnote",
      ),
    ],
  },
];

export const IPD_TABLES: StatTable[] = [
  {
    id: "ipd-2025",
    title: "Department wise In-Patient Statistics",
    caption: "Jan 2025 – Dec 2025",
    columns: MONTHS,
    rows: [
      row(
        "General Medicine",
        [685, 477, 659, 587, 612, 593, 695, 708, 680, 607, 550, 814],
        7667,
      ),
      row(
        "General Surgery",
        [600, 411, 597, 548, 552, 535, 651, 641, 639, 437, 472, 740],
        6823,
      ),
      row(
        "Orthopaedics",
        [433, 376, 517, 475, 499, 461, 534, 546, 328, 237, 301, 423],
        5130,
      ),
      row(
        "Ophthalmology",
        [97, 122, 157, 108, 151, 134, 148, 154, 111, 110, 110, 119],
        1521,
      ),
      row(
        "Obstetrics & Gynaecology",
        [410, 365, 537, 456, 441, 428, 528, 511, 386, 157, 280, 473],
        4972,
      ),
      row(
        "Paediatrics",
        [325, 231, 330, 296, 307, 289, 346, 360, 363, 321, 317, 446],
        3931,
      ),
      row(
        "Psychiatry",
        [66, 63, 58, 55, 57, 47, 60, 62, 47, 71, 21, 3],
        610,
      ),
      row(
        "Dermatology",
        [66, 78, 87, 60, 78, 73, 87, 96, 45, 39, 28, 30],
        767,
      ),
      row(
        "ENT",
        [153, 111, 128, 109, 108, 110, 126, 133, 128, 93, 66, 112],
        1377,
      ),
      row(
        "Emergency",
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 10],
        18,
      ),
      row(
        "Total",
        [2835, 2234, 3070, 2694, 2805, 2670, 3175, 3211, 2727, 2074, 2151, 3170],
        32816,
        "total",
      ),
    ],
  },
  {
    id: "ipd-2026",
    title: "Department wise In-Patient Statistics",
    caption: "Jan 2026 – 18 Feb 2026",
    columns: MONTHS,
    rows: [
      row(
        "General Medicine",
        [779, 456, null, null, null, null, null, null, null, null, null, null],
        1235,
      ),
      row(
        "General Surgery",
        [633, 510, null, null, null, null, null, null, null, null, null, null],
        1143,
      ),
      row(
        "Orthopaedics",
        [372, 276, null, null, null, null, null, null, null, null, null, null],
        648,
      ),
      row(
        "Ophthalmology",
        [110, 126, null, null, null, null, null, null, null, null, null, null],
        236,
      ),
      row(
        "Obstetrics & Gynaecology",
        [341, 214, null, null, null, null, null, null, null, null, null, null],
        555,
      ),
      row(
        "Paediatrics",
        [414, 262, null, null, null, null, null, null, null, null, null, null],
        676,
      ),
      row(
        "Psychiatry",
        [20, 13, null, null, null, null, null, null, null, null, null, null],
        33,
      ),
      row(
        "Dermatology",
        [28, 27, null, null, null, null, null, null, null, null, null, null],
        55,
      ),
      row(
        "ENT",
        [87, 72, null, null, null, null, null, null, null, null, null, null],
        159,
      ),
      row("Emergency", [9, 5, null, null, null, null, null, null, null, null, null, null], 14),
      row(
        "Total",
        [2793, 1961, null, null, null, null, null, null, null, null, null, null],
        4754,
        "total",
      ),
    ],
  },
];

export const HOSPITAL_SERVICES = [
  {
    slug: "opd",
    title: "OPD",
    subtitle: "Out-Patient Department Statistics",
    href: "/hospital/opd",
    image: "/images/hospital/opd.jpg",
    external: false,
  },
  {
    slug: "ipd",
    title: "IPD",
    subtitle: "In-Patient Department Statistics",
    href: "/hospital/ipd",
    image: "/images/hospital/ipd.jpg",
    external: false,
  },
  {
    slug: "hospital",
    title: "Hospital",
    subtitle: "Visit Official Hospital Website",
    href: "https://alvashealthcentre.com/",
    image: "/images/hospital/hospital.jpg",
    external: true,
  },
];
