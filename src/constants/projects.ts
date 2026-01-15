export type ProjectCategory = "Programming" | "Art" | "Video Editing" | "Extra";

export interface Project {
  title: string;
  description: string;
  image?: string;
  video?: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "UrLink",
    description: "A linktree-style web app.",
    video: "/urlink_demo.mp4",
    technologies: ["Next.js", "TypeScript", "Vercel", "PostgreSQL", "Prisma", "Supabase"],
    category: "Programming",
    liveUrl: "https://urlink.fyi/",
    githubUrl: "https://github.com/rgeful/urlink"
  },
  {
    title: "Dino Atlas",
    description: "An interactive geospatial dashboard that visualizes the prehistoric world.",
    video: "/dinoatlas-demo.mp4",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    category: "Programming",
    githubUrl: "https://github.com/rgeful/dino-atlas"
  },
  {
    title: "FlowSync",
    description: "A serverless automation platform that converts plain-English instructions into structured, executable tasks.",
    video: "/flowsync_demo.mp4",
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "OpenAI API", "Upstash Redis", "Vercel Cron"],
    category: "Programming",
    githubUrl: "https://github.com/rgeful/flowsync"
  },
{
    title: "Pixel Art Generator",
    description: "AI generates pixel art from user sketches.",
    image: "/pixel-art-generator-image2.png",
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "OpenAI API", "Upstash Redis", "Vercel Cron"],
    category: "Programming",
    githubUrl: "https://github.com/rgeful/pixel-art-generator"
  },
  {
    title: "TopSecretTint",
    description: "Freelance website for a window tinting business.",
    image: "/topsecrettintpic.png",
    technologies: ["React", "Vite", "Express", "JavaScript", "Tailwind"],
    category: "Programming",
    liveUrl: "https://topsecrettint.com/"
  },
];

export const WIP_PROJECTS: Project[] = [];
