import { timeline } from "@/data/experience";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { skills } from "@/data/skills";

/**
 * Authoritative knowledge base for DKM AI Assistant.
 * Built from portfolio data so answers stay aligned with the site.
 */
export function buildKnowledgeBase(): string {
  const education = timeline.find((item) => item.type === "education");
  const skillLines = skills
    .map((skill) => `- ${skill.name} (${skill.category}): ${skill.description}`)
    .join("\n");

  const projectBlocks = projects
    .map((project) => {
      const links = [
        project.liveDemoUrl ? `Website: ${project.liveDemoUrl}` : null,
        project.githubUrl ? `GitHub: ${project.githubUrl}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      return [
        `### ${project.name}`,
        `Category: ${project.category}`,
        `Status: ${project.status}`,
        `Role: ${project.role}`,
        `Summary: ${project.shortDescription}`,
        `Overview: ${project.overview}`,
        `Problem: ${project.problemStatement}`,
        `Objectives: ${project.objectives.join("; ")}`,
        `Features: ${project.features.join("; ")}`,
        `Tech stack: ${project.techStack.join(", ")}`,
        links,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");

  return `
# Dustin Kirk Manalastas — Portfolio Knowledge Base

## Personal Information
- Full Name: ${siteConfig.name}
- Preferred Name: Dustin Kirk or DKM
- Professional Title: ${siteConfig.title}
- Field: Information Technology
- Specialization: Web Development
- Brand: ${siteConfig.brand}
- Career Goal: To become a skilled full-stack web developer and agentic developer who builds modern websites and applications with the assistance of AI.
- Career Objective: ${siteConfig.careerObjective}

## About
${siteConfig.about.introduction.map((p) => `- ${p}`).join("\n")}
- Background: ${siteConfig.about.background}
- Philosophy: ${siteConfig.about.philosophy}
- Interests: ${siteConfig.about.interests.join(", ")}
- Career Goals:
${siteConfig.about.careerGoals.map((goal) => `  - ${goal}`).join("\n")}

## Educational Background
- Degree: ${education?.title ?? siteConfig.degree} (BSIT)
- University: ${education?.organization ?? "Adamson University"}
- Status: ${education?.duration ?? "Ongoing"}
- Specialization: Web Development
- Summary: ${education?.description ?? ""}
- Relevant areas of study: Web development, frontend development, backend development, database management, software development, and application development.
- Note: Academic years / graduation date are not listed publicly yet.

## Technical Skills
${skillLines}

### Additional technologies referenced in the portfolio / assistant context
- HTML / CSS / JavaScript / TypeScript
- React.js / Next.js / Tailwind CSS
- Node.js / Express.js
- SQL / MySQL / PostgreSQL / Supabase
- Framer Motion (Motion)
- Gemini AI integration (this portfolio assistant)

Only describe technologies as skills when they appear above. Do not invent proficiency levels or certifications.

## Projects
${projectBlocks}

## Professional Links
- GitHub: ${siteConfig.github}
- LinkedIn: ${siteConfig.linkedin}
- Email: ${siteConfig.email}
- Portfolio site: ${siteConfig.siteUrl}

## Employment / Experience Notes
- Dustin is an aspiring web developer focused on academic and portfolio projects.
- Internship or professional employment history is not documented yet.
- Do not claim professional employment or internship experience.
- Do not invent age, birthday, address, phone number, or other private details.
`.trim();
}
