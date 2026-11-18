export const siteConfig = {
  name: "Dustin Kirk Manalastas",
  brand: "DKM",
  title: "Aspiring Web Developer",
  degree: "Bachelor of Science in Information Technology",
  email: "kirkmanalastas24@gmail.com",
  github: "https://github.com/Yafekirk",
  githubUsername: "Yafekirk",
  linkedin:
    "https://www.linkedin.com/in/dustin-kirk-manalastas-9600a53a0/",
  /**
   * Deployed homepage URL for the DKM portfolio.
   * Used by Project 3 "Live Demo". Update this after deploying.
   */
  siteUrl: "https://dkm-portfolio.vercel.app",

  description:
    "Explore the portfolio of Dustin Kirk Manalastas, an aspiring web developer passionate about full-stack development, modern web technologies, and building innovative digital experiences.",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ],
  personalInfo: [
    { label: "Name", value: "Dustin Kirk Manalastas" },
    { label: "Role", value: "Aspiring Web Developer" },
    { label: "Degree", value: "Bachelor of Science in Information Technology" },
    { label: "Specialization", value: "Web Development" },
    {
      label: "Interests",
      value:
        "UI/UX Design, Full-Stack Development, Software Development, AI-Assisted Development",
    },
  ],
  about: {
    shortIntro:
      "I'm an Information Technology student passionate about building modern, responsive, and user-friendly web applications.",
    introduction: [
      "I'm Dustin Kirk Manalastas, an aspiring web developer and Information Technology student with a passion for building modern and functional web applications.",
      "I enjoy exploring web technologies, designing user interfaces, and developing full-stack applications that solve real-world problems.",
      "I'm continuously improving my technical skills through hands-on projects, academic activities, and AI-assisted development. My goal is to become a well-rounded developer who can create efficient, scalable, and user-centered digital solutions.",
    ],
    background:
      "My journey into technology started with curiosity about how websites and applications work. Through my Information Technology studies, I've been building a foundation in programming, web development, databases, and software engineering — applying those concepts through academic projects and personal builds.",
    careerGoals: [
      "Grow into a capable full-stack web developer who can deliver polished, production-ready applications",
      "Strengthen practical experience through academic projects, internships, and real-world collaborations",
      "Build digital products that are useful, accessible, and thoughtfully designed",
      "Keep learning modern tools, frameworks, and AI-assisted development workflows",
    ],
    interests: [
      "UI/UX Design",
      "Full-Stack Development",
      "Software Development",
      "AI-Assisted Development",
      "Responsive Web Design",
      "Modern Frontend Architecture",
    ],
    philosophy:
      "I believe good software should feel clear and intentional. Clean code, thoughtful interfaces, and continuous learning matter more than chasing trends. I aim to build experiences that solve real problems, respect users, and improve with every iteration.",
  },
  careerObjective:
    "Seeking opportunities to apply and expand my web development skills through internships, collaborations, and project-based work while building a strong foundation as an aspiring full-stack developer.",
} as const;
