import { siteConfig } from "@/data/site";

export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  label: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  objectives: string[];
  features: string[];
  techStack: string[];
  developmentProcess: string[];
  challenges: { challenge: string; solution: string }[];
  role: string;
  status: ProjectStatus;
  githubUrl: string | null;
  liveDemoUrl: string | null;
  image: string;
  imageAlt: string;
  imagePosition?: "center" | "top";
  screenshots: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    id: "contrack-ai",
    name: "ConTrack AI",
    category: "AI-Powered Contract Management System",
    shortDescription:
      "An AI-powered Contract Management System designed to streamline contract submission, processing, approval, tracking, and document storage.",
    overview:
      "ConTrack AI is an AI-powered vendor contract management system. Vendors can upload contract PDFs, review AI-extracted details, track submissions, and monitor performance scores from a centralized vendor dashboard.",
    problemStatement:
      "Vendor contract workflows are often fragmented across files, email, and manual tracking. That makes it harder for suppliers to submit documents consistently, follow status updates, and understand performance at a glance.",
    objectives: [
      "Centralize vendor contract submission and tracking in one portal",
      "Use AI extraction to reduce manual data entry from contract PDFs",
      "Surface performance scores and contract overview metrics for vendors",
      "Support review and approval workflows across vendor and management roles",
    ],
    features: [
      "Vendor Dashboard",
      "Contract PDF Upload",
      "AI Contract Extraction",
      "Extracted Brief Review",
      "Contract Tracking",
      "Performance Score Monitoring",
      "Vendor Portal Navigation",
    ],
    techStack: ["PHP", "HTML/CSS/JavaScript", "Supabase", "Python", "scikit-learn", "pypdf"],
    developmentProcess: [
      "Designed a vendor portal for contract submission, tracking, and performance monitoring",
      "Implemented PDF upload and AI-assisted extraction of contract information",
      "Connected portal workflows with Supabase-backed data handling",
      "Built dashboard views for active contracts, contract value, and performance breakdown",
    ],
    challenges: [
      {
        challenge:
          "Turning unstructured contract PDFs into usable structured fields for vendors.",
        solution:
          "Integrated AI extraction into the submit-contract flow so vendors can review and correct extracted details before submission.",
      },
      {
        challenge:
          "Keeping contract status, performance, and document context visible in one place.",
        solution:
          "Organized the vendor experience around a dashboard, submission flow, and tracking views.",
      },
    ],
    role: "Developer — Capstone / Academic Project",
    status: "Completed",
    githubUrl: "https://github.com/Yafekirk/ConTrackAI",
    liveDemoUrl: "https://contrack-ai.com/",
    image: "/images/projects/contrack/cover.jpg",
    imageAlt: "ConTrack AI official cover — contract management system branding",
    screenshots: [
      {
        src: "/images/projects/contrack/cover.jpg",
        alt: "ConTrack AI official cover image",
        label: "Cover",
      },
      {
        src: "/images/projects/contrack/dashboard.png",
        alt: "ConTrack AI vendor dashboard showing performance score, active contracts, and contract value",
        label: "Vendor Dashboard",
      },
      {
        src: "/images/projects/contrack/submit-contract.png",
        alt: "ConTrack AI submit contract page with PDF upload and AI extraction panels",
        label: "Submit Contract",
      },
      {
        src: "/images/projects/contrack/login.png",
        alt: "ConTrack AI sign-in page",
        label: "Sign In",
      },
    ],
  },
  {
    id: "tindalytics",
    name: "TINDALYTICS",
    category: "POS & Inventory Management System",
    shortDescription:
      "A web-based Point of Sale and Inventory Management System designed to help Filipino sari-sari store owners manage sales transactions, inventory levels, product information, and business operations efficiently.",
    overview:
      "Tindalytics is a full-stack POS and inventory system for Filipino sari-sari stores. It supports store operations such as sales processing, stock monitoring, product management, analytics, reporting, and AI-assisted business insights.",
    problemStatement:
      "Many sari-sari store owners still rely on notebooks or fragmented tools to track sales and inventory. This makes it harder to monitor stock levels, review transaction history, and make informed decisions about restocking and daily operations.",
    objectives: [
      "Provide a simple POS flow for recording sales transactions",
      "Track inventory levels and product information in one place",
      "Surface useful dashboard insights for store operations",
      "Support AI-assisted guidance for store owners through Tinda Assistant",
    ],
    features: [
      "Sales Management",
      "Inventory Tracking",
      "Product Management",
      "Dashboard Analytics",
      "Purchase Orders",
      "Utang / Credit Tracking",
      "Tinda Assistant AI Insights",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "OpenAI",
    ],
    developmentProcess: [
      "Defined store-owner needs around sales, inventory, and reporting workflows",
      "Built the application with Next.js App Router, TypeScript, and Tailwind CSS",
      "Connected Supabase for authentication, Postgres data, and row-level security",
      "Added AI insights support for store guidance and operational questions",
    ],
    challenges: [
      {
        challenge:
          "Balancing feature depth with a simple interface for non-technical store owners.",
        solution:
          "Prioritized clear POS, inventory, and dashboard flows first, then layered AI assistance and reporting without overcrowding the UI.",
      },
      {
        challenge:
          "Keeping inventory and sales records consistent across store operations.",
        solution:
          "Structured core money, inventory, and credit workflows with tested logic and database-backed store data.",
      },
    ],
    role: "Developer — Academic / Portfolio Project",
    status: "In Progress",
    githubUrl: "https://github.com/Yafekirk/TINDALYTICS",
    liveDemoUrl: "https://tindalytics.vercel.app/",
    image: "/images/projects/tindalytics/cover.jpg",
    imageAlt: "TINDALYTICS official cover — smarter sari-sari business branding",
    screenshots: [
      {
        src: "/images/projects/tindalytics/cover.jpg",
        alt: "TINDALYTICS official cover image",
        label: "Cover",
      },
      {
        src: "/images/projects/tindalytics/landing.png",
        alt: "Tindalytics landing page with branding and sales preview cards",
        label: "Landing Page",
      },
      {
        src: "/images/projects/tindalytics/dashboard.png",
        alt: "Tindalytics dashboard with sidebar navigation and Tinda Assistant",
        label: "Dashboard",
      },
    ],
  },
  {
    id: "dkm-portfolio",
    name: "DKM – Personal Developer Portfolio",
    category: "Personal Portfolio Website",
    shortDescription:
      "A modern and responsive personal developer portfolio website designed to showcase my technical skills, full-stack projects, professional background, resume, and career aspirations.",
    overview:
      "DKM is my personal brand portfolio. It presents who I am as an aspiring web developer through a multi-page experience that highlights skills, projects, education, resume, and contact details with an emerald green visual identity.",
    problemStatement:
      "I needed a professional online presence that could communicate my skills, projects, and career goals clearly — with a distinctive visual identity instead of a generic template.",
    objectives: [
      "Present a memorable personal brand with an emerald green identity",
      "Showcase skills, projects, education, and contact details across dedicated pages",
      "Deliver a responsive, accessible, and performant Next.js experience",
      "Support dark and light modes with persistent user preference",
    ],
    features: [
      "Responsive Multi-Page Design",
      "Homepage Hero Overview",
      "Project Showcase with Details Modal",
      "Skills & Experience Sections",
      "Resume Page",
      "Contact Form",
      "DKM AI Assistant Chatbot",
      "Dark Mode & Light Mode",
      "Smooth Animations",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Gemini AI"],
    developmentProcess: [
      "Defined brand direction around a dark emerald green visual system",
      "Structured reusable UI, layout, and page content components",
      "Integrated personal photography into hero and about layouts",
      "Implemented theme switching, animations, project modals, contact form validation, and a Gemini-powered portfolio assistant",
    ],
    challenges: [
      {
        challenge:
          "Making personal photography feel premium within a dark developer aesthetic.",
        solution:
          "Used carefully framed portrait containers, emerald glow accents, and theme-aware borders instead of plain profile cutouts.",
      },
    ],
    role: "Designer & Developer — Personal Project",
    status: "Completed",
    githubUrl: "https://github.com/Yafekirk",
    // Homepage Live Demo — update siteConfig.siteUrl after deployment
    liveDemoUrl: siteConfig.siteUrl,
    image: "/images/projects/dkm/cover.png",
    imageAlt:
      "DKM personal developer portfolio homepage hero with name, introduction, and portrait",
    imagePosition: "top",
    screenshots: [
      {
        src: "/images/projects/dkm/cover.png",
        alt: "DKM portfolio homepage preview showing the hero section",
        label: "Homepage Preview",
      },
      {
        src: "/images/projects/dkm/hero-portrait.png",
        alt: "Casual portrait used in the DKM portfolio hero",
        label: "Hero Portrait",
      },
      {
        src: "/images/projects/dkm/formal-portrait.png",
        alt: "Formal portrait used in the DKM About section",
        label: "Formal Portrait",
      },
    ],
  },
];

