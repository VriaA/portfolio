import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";

export default function Home(): JSX.Element {
    const selectedProjects = projects.slice(0, 4);
    return (
        <>
            <Hero />
            <Skills />
            <Projects projects={selectedProjects} />
            <Experience />
            <Contact />
        </>
    );
}
