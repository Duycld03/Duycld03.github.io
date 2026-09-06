export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const profile = {
  name: "Duy Nguyễn",
  fullName: "Nguyễn Trường Duy",
  handle: "Duycld03",
  role: "Software Engineer",
  tagline: "Crafting reliable backend services, type-safe fullstack systems, and developer-first web experiences.",
  status: "Available for new opportunities",
  location: "Vietnam",
  avatarUrl: "https://github.com/Duycld03.png",
  socials: {
    github: "https://github.com/Duycld03",
    email: "mailto:truongduy2003@gmail.com",
  },
  skills: [
    {
      category: "Backend & Systems",
      skills: [".NET 10 / C# 13", "ASP.NET Core", "Clean Architecture", "REST & RPC APIs", "PostgreSQL / pgvector", "Redis"],
    },
    {
      category: "Frontend & UI",
      skills: ["Vue 3 / Nuxt 4", "Astro 5", "TypeScript", "Tailwind CSS", "Pinia", "HTML5 & Web APIs"],
    },
    {
      category: "DevOps & Tooling",
      skills: ["Docker", "Nginx", "Linux", "Git & GitHub Actions", "OpenSpec", "AI Agentic Workflows"],
    },
  ] as SkillGroup[],
  experiences: [
    {
      period: "2024 — Present",
      role: "Fullstack Software Engineer",
      company: "Independent & Open Source",
      description: "Architected micro-learning platform TechDaily (.NET 10 + Nuxt 4) and lease management systems with strict spec-driven engineering practices.",
      technologies: ["C#", "ASP.NET Core", "Nuxt 4", "PostgreSQL", "Docker"],
    },
    {
      period: "2022 — 2024",
      role: "Software Developer",
      company: "Technology Solutions",
      description: "Engineered scalable REST endpoints, database schemas, and modern responsive web frontends with high test coverage.",
      technologies: ["TypeScript", "Vue.js", "C#", "SQL", "Git"],
    },
  ] as ExperienceItem[],
};
