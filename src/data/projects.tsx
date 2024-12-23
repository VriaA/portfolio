import platinumred from "@/assets/platinumred_mockup.webp";
import colorinspo from "@/assets/color_inspo_mockup.webp";
import watchlist from "@/assets/watchlist_mockup.webp";
import daragram from "@/assets/daragram_mockup.webp";
import quizzly from "@/assets/quizzly_mockup.webp";
import yfl from "@/assets/yfl_mockup.webp";
import supportly from "@/assets/supportly_mockup.webp";
import companyCritique from "@/assets/company_critique_mockup.webp";
import kibana from "@/assets/kibana.webp";
import pantryScout from "@/assets/pantry_scout_mockup.webp";
import linguaFlash from "@/assets/lingua_flash_mockup.webp";
import parentFest from "@/assets/parentalPal_mockup.webp";
import cfo from "@/assets/cfo_africa_mockup.webp";
import logos from "./logos";
import { ProjectData } from "@/types/project";

export const projects: Array<ProjectData> = [
    {
        name: "CFO Africa",
        description:
            "A multi-page website designed and developed for CFO Africa, a company dedicated to facilitating investments in innovative African businesses",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "SCSS", logo: logos.sass },
            { techName: "Mui", logo: logos.mui },
            { techName: "Next.js", logo: logos.nextjs },
            { techName: "MailerSend", logo: logos.mailerSend },
            { techName: "Figma", logo: logos.figma },
        ],
        imageSrc: cfo,
        links: {
            website: "https://cfoafrica.co",
        },
        isCompleted: true,
        isFreelance: true,
    },
    {
        name: "Kibana",
        description:
            "Contributed to Kibana, a powerful data visualization and exploration tool used by over 2,000 companies. Fixed bugs and wrote unit tests, which helped deepen my understanding of scalable frontend architecture and develop proficiency in navigating and contributing to complex, large-scale projects.",
        technologiesUsed: [
            { techName: "eui", logo: logos.eui },
            { techName: "TypeScript", logo: logos.typescript },
            { techName: "React", logo: logos.react },
            { techName: "Jest", logo: logos.jest },
        ],
        imageSrc: kibana,
        links: {
            github: "https://github.com/elastic/kibana/pulls?q=is%3Apr+author%3AVriaA+",
        },
        isCompleted: true,
        isOpenSource: true,
    },
    {
        name: "Supportly",
        description:
            "An empathetic AI companion designed to offer mental health support using Retrieval-Augmented Generation (RAG) with Hugging Face embeddings and OpenAI’s chat completion API.",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
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
            website: "https://supportly.vercel.app",
        },
        isCompleted: true,
        isTeam: true,
    },
    {
        name: "Young Finance Leaders",
        description:
            "A multi-page website designed and developed for CFO Africa's training program aimed at preparing new graduates in Africa for successful careers in finance.",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
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
            website: "https://youngfinanceleaders.org",
        },
        isCompleted: true,
        isFreelance: true,
    },
    {
        name: "PlatinumRED",
        description:
            "A multi-page website designed and developed for PlatinumRed, a company that exports packaged African food products internationally.",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
            { techName: "TypeScript", logo: logos.typescript },
            { techName: "React", logo: logos.react },
            { techName: "React Router", logo: logos.reactRouter },
            { techName: "", logo: logos.gsap },
            { techName: "Figma", logo: logos.figma },
        ],
        imageSrc: platinumred,
        links: {
            website: "https://platinumred.ca",
        },
        isCompleted: true,
        isFreelance: true,
    },
    {
        name: "LinguaFlash AI",
        description:
            "A web app for mastering languages faster with AI-generated flashcards tailored for various learning needs.",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
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
            website: "https://linguaflashai.vercel.app",
        },
        isCompleted: true,
        isTeam: true,
    },
    {
        name: "Pantry Scout",
        description:
            "An intelligent pantry management system that lets you add items using image recognition and generates personalized recipes from your pantry ingredients with AI.",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
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
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
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
            website: "https://companycritique.vercel.app",
        },
        isCompleted: true,
        isTeam: true,
    },
    {
        name: "Film Watchlist",
        description:
            "A web application for finding film details, including associated videos, cast, and similar films. Users can add desired films to a personal, password-protected watchlist, which can be filtered based on watched state.",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
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
            website: "https://myfilmwatchlist.netlify.app",
        },
        isCompleted: true,
    },
    {
        name: "Color Inspo",
        description:
            "A personal AI consultant tool that assists users in finding harmonious color combinations for various applications.",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
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
            website:
                "https://color-inspo-chingu-v49-tier-2-team-15.netlify.app",
        },
        isCompleted: true,
        isTeam: true,
    },
    {
        name: "Daragram",
        description:
            "A landing page designed and developed for Daragram, a social media marketing agency.",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
            { techName: "React", logo: logos.react },
            { techName: "Figma", logo: logos.figma },
            { techName: "Netlify forms", logo: logos.netlify },
        ],
        imageSrc: daragram,
        links: {
            website: "http://daragram.com",
        },
        isCompleted: true,
        isFreelance: true,
    },
    {
        name: "ParentFest",
        description:
            "A landing page designed and developed for ParentalPal's event, ParentFest.",
        technologiesUsed: [
            { techName: "HTML", logo: logos.html },
            { techName: "Tailwind CSS", logo: logos.tailwindcss },
            { techName: "Next.js", logo: logos.nextjs },
            { techName: "Zoho Forms", logo: logos.zohoForms },
            { techName: "Figma", logo: logos.figma },
        ],
        imageSrc: parentFest,
        links: {
            website: "https://parentfest.parentalpal.org",
        },
        isCompleted: true,
        isFreelance: true,
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
        ],
        imageSrc: quizzly,
        links: {
            github: "https://github.com/VriaA/Quizzly",
            website: "https://quizzlytrivia.netlify.app/",
        },
        isCompleted: true,
    },
];
