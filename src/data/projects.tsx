import platinumred from "@/assets/platinumRed.svg"
import colorinspo from "@/assets/color_inpso.svg"
import watchlist from "@/assets/watchlist.svg"
import daragram from "@/assets/daragram.svg"
import quizzly from "@/assets/quizzly.svg"
import yfl from "@/assets/yfl.svg"
import logos from "./logos"

export default [
  {
    name: "PlatinumRED",
    description:
      "A multi-page website designed and developed for PlatinumRed, a company that exports packaged African food products internationally.",
    technologiesUsed: [
      { name: "HTML", logo: logos.html },
      { name: "tailwindcss", logo: logos.tailwindcss },
      { name: "TypeScript", logo: logos.typescript },
      { name: "React", logo: logos.react },
      { name: "React Router", logo: logos.reactRouter },
      { name: "GSAP", logo: logos.gsap },
      { name: "Figma", logo: logos.figma },
    ],
    imageSrc: platinumred,
    links: {
      github: "https://github.com/VriaA/PlatinumRed",
      website: "https://platinumred.ca/",
    },
    isCompleted: true,
  },
  {
    name: "Color Inspo",
    description:
      "A personal AI consultant tool that assists users in finding harmonious color combinations for various applications. Built with a team of three other developers and a Scrum Master during a Chingu voyage.",
    technologiesUsed: [
      { name: "HTML", logo: logos.html },
      { name: "tailwindcss", logo: logos.tailwindcss },
      { name: "TypeScript", logo: logos.typescript },
      { name: "React", logo: logos.react },
      { name: "React Router", logo: logos.reactRouter },
      { name: "OpenAi", logo: logos.openai },
      { name: "shadcn/ui", logo: logos.shadcn },
      { name: "GitHub Projects", logo: logos.github },
      { name: "Figma", logo: logos.figma },
      { name: "Miro", logo: logos.miro },
    ],
    imageSrc: colorinspo,
    links: {
      github: "https://github.com/chingu-voyages/v49-tier2-team-15",
      website: "https://color-inspo-chingu-v49-tier-2-team-15.netlify.app/",
    },
    isCompleted: true,
  },
  {
    name: "Film Watchlist",
    description:
      "A web application for finding film details, including associated videos, cast, and similar films. Users can add desired films to a personal, password-protected watchlist, which can be filtered based on watched state.",
    technologiesUsed: [
      { name: "HTML", logo: logos.html },
      { name: "tailwindcss", logo: logos.tailwindcss },
      { name: "TypeScript", logo: logos.typescript },
      { name: "React", logo: logos.react },
      { name: "React Router", logo: logos.reactRouter },
      { name: "TMDB API", logo: null },
      { name: "Firebase", logo: logos.firebase },
      { name: "GSAP", logo: logos.gsap },
    ],
    imageSrc: watchlist,
    links: {
      github: "https://github.com/VriaA/watchlist",
      website: "https://myfilmwatchlist.netlify.app/",
    },
    isCompleted: true,
  },
  {
    name: "Daragram",
    description:
      "A landing page designed and developed for Daragram, a social media marketing agency.",
    technologiesUsed: [
      { name: "HTML", logo: logos.html },
      { name: "tailwindcss", logo: logos.tailwindcss },
      { name: "React", logo: logos.react },
      { name: "Figma", logo: logos.figma },
      { name: "Netlify forms", logo: logos.netlify },
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
      { name: "HTML", logo: logos.html },
      { name: "CSS", logo: logos.css },
      { name: "TypeScript", logo: logos.typescript },
      { name: "React", logo: logos.react },
      { name: "Opentdb API", logo: null },
      { name: "html-entities", logo: null },
      { name: "react-confetti", logo: null },
    ],
    imageSrc: quizzly,
    links: {
      github: "https://github.com/VriaA/Quizzly",
      website: "https://quizzlytrivia.netlify.app/",
    },
    isCompleted: true,
  },
  {
    name: "Young Finance Leaders",
    description:
      "A multi-page website designed and developed for a company that runs a training program aimed at preparing fresh graduates in Africa for successful careers in finance.",
    technologiesUsed: [
      { name: "HTML", logo: logos.html },
      { name: "tailwindcss", logo: logos.tailwindcss },
      { name: "PostCSS", logo: logos.postcss },
      { name: "TypeScript", logo: logos.typescript },
      { name: "React", logo: logos.react },
      { name: "React Router", logo: logos.reactRouter },
      { name: "shadcn/ui", logo: logos.shadcn },
      { name: "GSAP", logo: logos.gsap },
    ],
    imageSrc: yfl,
    links: {
      github: "",
      website: "",
    },
    isCompleted: false,
  },
]
