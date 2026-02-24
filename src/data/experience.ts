interface exp {
  title: string;
  description?: string;
  year: string;
  current: boolean;
}

export const experienceList: exp[] = [
  {
    title: "BS Information Technology - 3rd Year",
    description: "Cebu Roosevelt Memorial Colleges",
    year: "2025",
    current: true, // This marks the "filled" black dot
  },
  {
    title: "OJT / Internship — Actively Seeking",
    description: "Available for IT Placement",
    year: "2025",
    current: false,
  },
  {
    title: "Capstone Project Developer",
    description: "Sipacareer Job Portal", // Updated to your project
    year: "2025",
    current: false,
  },
  {
    title: "Tech Stack & Programming Experience",
    description: "React, Laravel, MERN, Flutter",
    year: "2024 - 2025",
    current: false,
  },
];
