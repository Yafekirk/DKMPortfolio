export type SocialLink = {
  id: "github" | "linkedin" | "email";
  label: string;
  href: string;
  external: boolean;
};

export const socialProfile = {
  githubUsername: "Yafekirk",
  github: "https://github.com/Yafekirk",
  linkedin:
    "https://www.linkedin.com/in/dustin-kirk-manalastas-9600a53a0/",
  email: "kirkmanalastas24@gmail.com",
  mailto: "mailto:kirkmanalastas24@gmail.com",
} as const;

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: socialProfile.github,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: socialProfile.linkedin,
    external: true,
  },
  {
    id: "email",
    label: "Email",
    href: socialProfile.mailto,
    external: false,
  },
];
