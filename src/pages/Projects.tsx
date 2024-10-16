import ProjectsComponent from "@/components/Projects"
import { projects } from "@/data/projects"
import Contact from "@/components/Contact"

export default function Projects(): JSX.Element {
    return (
        <div className="pt-16">
            <ProjectsComponent projects={projects} />
            <Contact />
        </div>
    )
}