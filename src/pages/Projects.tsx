import ProjectsComponent from "@/components/Projects"
import { projects } from "@/data/projects"
import Contact from "@/components/Contact"

export default function Projects(): JSX.Element {
    return (
        <>
            <ProjectsComponent projects={projects} />
            <Contact />
        </>
    )
}