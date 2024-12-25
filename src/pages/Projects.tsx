import ProjectsComponent from "@/components/Projects";
import { projects } from "@/data/projects";
import Contact from "@/components/Contact";

export default function Projects(): JSX.Element {
    return (
        <div className="mt-10 md:mt-20 flex flex-col">
            <ProjectsComponent projects={projects} />
            <Contact />
        </div>
    );
}
