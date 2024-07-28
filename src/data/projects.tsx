import platinumred from "@/assets/platinum.png"
import colorinspo from "@/assets/colorinspo.png"
import watchlist from "@/assets/watchlist.png"
import daragram from "@/assets/daragram.png"
import quizzly from "@/assets/quizzly.png"
import yfl from "@/assets/yfl.png"
import logos from "./logos"

export default [
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
    name: "Color Inspo",
    description:
      "A personal AI consultant tool that assists users in finding harmonious color combinations for various applications. Built with a team of three other developers and a Scrum Master during a Chingu voyage.",
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
  {
    name: "Young Finance Leaders",
    description:
      "A multi-page website designed and developed for a company that runs a training program aimed at preparing fresh graduates in Africa for successful careers in finance.",
    technologiesUsed: [
      { techName: "HTML", logo: logos.html },
      { techName: "tailwindcss", logo: logos.tailwindcss },
      { techName: "PostCSS", logo: logos.postcss },
      { techName: "TypeScript", logo: logos.typescript },
      { techName: "React", logo: logos.react },
      { techName: "React Router", logo: logos.reactRouter },
      { techName: "shadcn/ui", logo: logos.shadcn },
      { techName: "", logo: logos.gsap },
    ],
    imageSrc: yfl,
    links: {
      github: "",
      website: "",
    },
    isCompleted: false,
  },
]
