export type SkillCategory =
  | "Frontend Development"
  | "Backend Development"
  | "Database Management"
  | "Tools & Platforms"
  | "IDE"
  | "AI-Assisted Development";

export type Skill = {
  name: string;
  category: SkillCategory;
  description: string;
};

export const skills: Skill[] = [
  {
    name: "HTML5",
    category: "Frontend Development",
    description: "Semantic markup foundations for accessible web pages.",
  },
  {
    name: "CSS3",
    category: "Frontend Development",
    description: "Layout, styling, and responsive visual design.",
  },
  {
    name: "JavaScript",
    category: "Frontend Development",
    description: "Interactive browser behavior and application logic.",
  },
  {
    name: "TypeScript",
    category: "Frontend Development",
    description: "Typed JavaScript for safer, more maintainable code.",
  },
  {
    name: "React.js",
    category: "Frontend Development",
    description: "Component-driven interfaces and reusable UI patterns.",
  },
  {
    name: "Next.js",
    category: "Frontend Development",
    description: "Full-stack React framework for modern web apps.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend Development",
    description: "Utility-first styling for fast, consistent UI systems.",
  },
  {
    name: "Node.js",
    category: "Backend Development",
    description: "Server-side JavaScript for APIs and application logic.",
  },
  {
    name: "Express.js",
    category: "Backend Development",
    description: "Lightweight Node.js framework for building REST APIs.",
  },
  {
    name: "REST API Development",
    category: "Backend Development",
    description: "Designing and connecting structured HTTP endpoints.",
  },
  {
    name: "MySQL",
    category: "Database Management",
    description: "Relational data modeling and query-driven storage.",
  },
  {
    name: "PostgreSQL",
    category: "Database Management",
    description: "Advanced relational database for robust applications.",
  },
  {
    name: "Supabase",
    category: "Database Management",
    description: "Backend platform for databases, auth, and APIs.",
  },
  {
    name: "Git",
    category: "Tools & Platforms",
    description: "Version control for tracking and collaborating on code.",
  },
  {
    name: "GitHub",
    category: "Tools & Platforms",
    description: "Remote repositories, collaboration, and project hosting.",
  },
  {
    name: "VS Code",
    category: "Tools & Platforms",
    description: "Primary editor for day-to-day development workflows.",
  },
  {
    name: "Canva",
    category: "Tools & Platforms",
    description:
      "Visual design, presentations, content creation, and creative assets.",
  },
  {
    name: "Vercel",
    category: "Tools & Platforms",
    description: "Deployment and hosting for modern frontend applications.",
  },
  {
    name: "Cursor",
    category: "IDE",
    description:
      "AI-powered code editor for development, debugging, and AI-assisted coding workflows.",
  },
  {
    name: "AI Coding Assistants",
    category: "AI-Assisted Development",
    description: "Using AI tools to accelerate coding and problem-solving.",
  },
  {
    name: "Prompt Engineering",
    category: "AI-Assisted Development",
    description: "Crafting clear prompts for more useful AI assistance.",
  },
  {
    name: "AI-Assisted Debugging",
    category: "AI-Assisted Development",
    description: "Diagnosing issues faster with AI-supported workflows.",
  },
  {
    name: "Agentic Development Workflows",
    category: "AI-Assisted Development",
    description: "Coordinating AI agents across multi-step development tasks.",
  },
];

export const skillCategories: SkillCategory[] = [
  "Frontend Development",
  "Backend Development",
  "Database Management",
  "Tools & Platforms",
  "AI-Assisted Development",
];

export const featuredSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
] as const;
