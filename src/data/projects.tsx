import platinumred from "@/assets/platinum.png"
import colorinspo from "@/assets/colorinspo.png"
import watchlist from "@/assets/watchlist.png"
import daragram from "@/assets/daragram.png"
import quizzly from "@/assets/quizzly.png"
import yfl from "@/assets/yfl_project.webp"
import supportly from "@/assets/supportly.webp"
import companyCritique from "@/assets/company_critique.webp"
import kibana from "@/assets/kibana.webp"
import pantryScout from "@/assets/pantry_scout.webp"
import linguaFlash from "@/assets/lingua_flash.webp"
import logos from "./logos"

export type Project = {
  name: string;
  description: string;
  technologiesUsed: {
    techName: string;
    logo: JSX.Element | null;
  }[];
  imageSrc: string;
  links: {
    github: string;
    website?: string;
  };
  isCompleted: boolean;
  isOpenSource?: boolean;
}

export const projects: Array<Project> = [
  {
    name: "Supportly",
    description:
      "An empathetic AI companion designed to offer mental health support using Retrieval Augmented Generation, Hugging Face embeddings, and OpenAI's chat completion API.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "Mui", logo: logos.mui },
      { techName: "Next.js", logo: logos.nextjs },
      { techName: "OpenAi", logo: logos.openai },
      { techName: "Firebase", logo: logos.firebase },
      { techName: "Hugging Face", logo: logos.huggingFace },
      { techName: "MongoDB", logo: logos.mongodb },
      { techName: "Figma", logo: logos.figma },
    ],
    imageSrc: supportly,
    links: {
      github: "https://github.com/VriaA/Supportly",
      website: "https://supportly.vercel.app/",
    },
    isCompleted: true,
  },
  {
    name: "Kibana (Open source)",
    description:
      "Contributed to Kibana, a powerful data visualization and exploration tool. Fixed bugs and wrote unit tests, which helped deepen my understanding of scalable front-end architecture and develop proficiency in navigating and contributing to complex, large-scale projects.",
    technologiesUsed: [
      { techName: "eui", logo: logos.eui },
      { techName: "TypeScript", logo: logos.typescript },
      { techName: "React", logo: logos.react },
      { techName: "Jest", logo: logos.jest },
    ],
    imageSrc: kibana,
    links: {
      github: "https://github.com/elastic/kibana/commits?author=VriaA",
    },
    isCompleted: true,
    isOpenSource: true
  },
  {
    name: "Young Finance Leaders",
    description:
      "A multi-page website designed and developed for CFO Africa's training program aimed at preparing new graduates in Africa for successful careers in finance.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "TypeScript", logo: logos.typescript },
      { techName: "React", logo: logos.react },
      { techName: "React Router", logo: logos.reactRouter },
      { techName: "shadcn/ui", logo: logos.shadcn },
      { techName: "", logo: logos.gsap },
      { techName: "vidstack", logo: logos.vidstack },
      { techName: "Figma", logo: logos.figma },
    ],
    imageSrc: yfl,
    links: {
      github: "https://github.com/VriaA/young-finance-leaders",
      website: "https://youngfinanceleaders.org",
    },
    isCompleted: true,
  }, {
    name: "Pantry Scout",
    description:
      "An intelligent pantry management system that lets you add items using image recognition and generates personalized recipes from your pantry ingredients with AI.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "MUI", logo: logos.mui },
      { techName: "TypeScript", logo: logos.typescript },
      { techName: "React", logo: logos.react },
      { techName: "React Router", logo: logos.reactRouter },
      { techName: "react-camera-pro", logo: null },
      { techName: "Open AI", logo: logos.openai },
      { techName: "Firebase", logo: logos.firebase },
    ],
    imageSrc: pantryScout,
    links: {
      github: "https://github.com/VriaA/pantry-scout",
      website: "https://hs-pantry-scout.vercel.app",
    },
    isCompleted: true,
  },
  {
    name: "Company Critique",
    description:
      "An advanced data extraction tool that provides detailed ratings and insights on employers with information from popular platforms like Indeed and Trustpilot.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "Next.js", logo: logos.nextjs },
      { techName: "OpenAi", logo: logos.openai },
      { techName: "Express", logo: logos.express },
      { techName: "Puppeteer", logo: null },
      { techName: "Cheerio", logo: null },
      { techName: "react-markdown", logo: null },
      { techName: "Figma", logo: logos.figma },
    ],
    imageSrc: companyCritique,
    links: {
      github: "https://github.com/VriaA/PlatinumRed",
      website: "https://companycritique.vercel.app/",
    },
    isCompleted: true,
  },
  {
    name: "LinguFlash AI",
    description:
      "A web app for mastering languages faster with AI-generated flashcards tailored for various learning needs.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "mui", logo: logos.mui },
      { techName: "Next.js", logo: logos.nextjs },
      { techName: "OpenAi", logo: logos.openai },
      { techName: "Firebase", logo: logos.firebase },
      { techName: "Clerk", logo: null },
      { techName: "Figma", logo: logos.figma },
    ],
    imageSrc: linguaFlash,
    links: {
      github: "https://github.com/tobilobasalawu/LinguaFlash-AI-Flashcard",
      website: "https://linguaflashai.vercel.app/",
    },
    isCompleted: true,
  },
  {
    name: "PlatinumRED",
    description:
      "A multi-page website designed and developed for PlatinumRed, a company that exports packaged African food products internationally.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "TypeScript", logo: logos.typescript },
      { techName: "React", logo: logos.react },
      { techName: "React Router", logo: logos.reactRouter },
      { techName: "", logo: logos.gsap },
      { techName: "Figma", logo: logos.figma },
    ],
    imageSrc: platinumred,
    links: {
      github: "https://github.com/VriaA/PlatinumRed",
      website: "https://platinumred.ca/",
    },
    isCompleted: true,
  },
  {
    name: "Film Watchlist",
    description:
      "A web application for finding film details, including associated videos, cast, and similar films. Users can add desired films to a personal, password-protected watchlist, which can be filtered based on watched state.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "TypeScript", logo: logos.typescript },
      { techName: "React", logo: logos.react },
      { techName: "React Router", logo: logos.reactRouter },
      { techName: "TMDB API", logo: null },
      { techName: "Firebase", logo: logos.firebase },
      { techName: "", logo: logos.gsap },
    ],
    imageSrc: watchlist,
    links: {
      github: "https://github.com/VriaA/watchlist",
      website: "https://myfilmwatchlist.netlify.app/",
    },
    isCompleted: true,
  },
  {
    name: "Color Inspo",
    description:
      "A personal AI consultant tool that assists users in finding harmonious color combinations for various applications.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "TypeScript", logo: logos.typescript },
      { techName: "React", logo: logos.react },
      { techName: "React Router", logo: logos.reactRouter },
      { techName: "OpenAi", logo: logos.openai },
      { techName: "shadcn/ui", logo: logos.shadcn },
      { techName: "GitHub Projects", logo: logos.github },
      { techName: "Figma", logo: logos.figma },
      { techName: "Miro", logo: logos.miro },
    ],
    imageSrc: colorinspo,
    links: {
      github: "https://github.com/chingu-voyages/v49-tier2-team-15",
      website: "https://color-inspo-chingu-v49-tier-2-team-15.netlify.app/",
    },
    isCompleted: true,
  },
  {
    name: "Daragram",
    description:
      "A landing page designed and developed for Daragram, a social media marketing agency.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "React", logo: logos.react },
      { techName: "Figma", logo: logos.figma },
      { techName: "Netlify forms", logo: logos.netlify },
    ],
    imageSrc: daragram,
    links: {
      github: "https://github.com/VriaA/Daragram",
      website: "http://daragram.com/",
    },
    isCompleted: true,
  },
  {
    name: "Quizzly",
    description:
      "Quizzly is a trivia app that features, over 4,000 trivia questions spanning 24 categories, ensuring a diverse range of topics to explore.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "CSS", logo: logos.css },
      { techName: "TypeScript", logo: logos.typescript },
      { techName: "React", logo: logos.react },
      { techName: "Opentdb API", logo: null },
      { techName: "html-entities", logo: null },
      { techName: "react-confetti", logo: null },
    ],
    imageSrc: quizzly,
    links: {
      github: "https://github.com/VriaA/Quizzly",
      website: "https://quizzlytrivia.netlify.app/",
    },
    isCompleted: true,
  },
]
