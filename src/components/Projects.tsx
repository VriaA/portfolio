import SectionHeader from "./SectionHeader";
import { ProjectData } from "@/types/project";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ShinyText from "./animations/ShinyText";
import Project from "./Project/Project";
import { useFilterProjects } from "@/hooks/useFilterProjects";
import ProjectsFilter from "./Project/ProjectsFilter";
import SmileyFace from "@/assets/smiley_face.svg?react";

export default function Projects({
    projects,
}: {
    projects: Array<ProjectData>;
}): JSX.Element {
    const location = useLocation();
    const isProjectsPage = location.pathname === "/projects";
    const { projectsToRender, filter } = useFilterProjects(projects);
    const SECTION_PADDING = isProjectsPage
        ? "py-10 pt-0 md:py-20 md:pt-0"
        : "py-10 md:py-20";

    return (
        <section
            id="projects"
            className={`relative flex flex-col items-center z-[2] text-white ${SECTION_PADDING}`}>
            <SectionHeader text="Projects" />

            {!isProjectsPage && <h3 className="heading">Selected works</h3>}

            {isProjectsPage && <ProjectsFilter filter={filter} />}

            <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-row gap-5 lg:gap-10 w-full mt-5 md:mt-10">
                {projectsToRender.map((project, i) => {
                    return (
                        <Project
                            project={project}
                            index={i}
                            key={`project-${i + 1}`}
                        />
                    );
                })}
            </div>

            {!isProjectsPage && (
                <Link
                    to="/projects"
                    className="flex items-center gap-2 mt-10 border-b border-b-white pb-1 font-satoshi font-medium text-lg xl:text-xl text-transparent bg-clip-text bg-cta-primary tracking-[0.01em]">
                    <ShinyText text="See all projects" speed={1} />
                    <SmileyFace className="w-5" />
                </Link>
            )}
        </section>
    );
}
