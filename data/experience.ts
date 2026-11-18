export type TimelineItem = {
  id: string;
  type: "education" | "project" | "experience";
  title: string;
  organization: string;
  duration: string;
  description: string;
  status?: "current" | "completed" | "planned" | "placeholder";
};

export const timeline: TimelineItem[] = [
  {
    id: "education-bsit",
    type: "education",
    title: "Bachelor of Science in Information Technology",
    organization: "Adamson University",
    duration: "Ongoing",
    description:
      "Currently pursuing a Bachelor of Science in Information Technology at Adamson University, developing foundational and practical knowledge in programming, web development, database management, and software engineering.",
    status: "current",
  },
  {
    id: "project-contrack",
    type: "project",
    title: "ConTrack AI",
    organization: "Capstone / Academic Project",
    duration: "2026",
    description:
      "Built a vendor portal for contract submission, AI-assisted PDF extraction, performance tracking, and centralized contract monitoring.",
    status: "completed",
  },
  {
    id: "project-tindalytics",
    type: "project",
    title: "TINDALYTICS",
    organization: "Academic Project",
    duration: "In Progress",
    description:
      "Building a web-based POS and inventory management system to help sari-sari store owners manage sales, stock levels, and day-to-day operations.",
    status: "current",
  },
  {
    id: "project-dkm",
    type: "project",
    title: "DKM — Personal Developer Portfolio",
    organization: "Personal Project",
    duration: "2026",
    description:
      "Designing and developing a modern personal developer portfolio to showcase technical skills, projects, and professional aspirations.",
    status: "completed",
  },
  {
    id: "experience-internship",
    type: "experience",
    title: "Internship Experience",
    organization: "To be added",
    duration: "Upcoming",
    description:
      "Internship experience will be listed here once available. Currently focusing on academic projects and building practical development skills.",
    status: "placeholder",
  },
  {
    id: "experience-academic",
    type: "experience",
    title: "Academic Experience",
    organization: "Information Technology Coursework",
    duration: "Ongoing",
    description:
      "Applying classroom concepts through hands-on coursework, collaborative activities, and project-based learning in web and software development.",
    status: "current",
  },
];
