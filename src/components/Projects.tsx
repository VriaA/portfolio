import SectionHeader from "./SectionHeader";
import { ProjectData } from "@/types/project";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ShinyText from "./animations/ShinyText";
import Project from "./Project/Project";
import { useFilterProjects } from "@/hooks/useFilterProjects";
import ProjectsFilter from "./Project/ProjectsFilter";

export default function Projects({
    projects,
}: {
    projects: Array<ProjectData>;
}): JSX.Element {
    const location = useLocation();
    const isProjectsPage = location.pathname === "/projects";
    const { projectsToRender, filter } = useFilterProjects(projects);

    return (
        <section
            id="projects"
            className="relative flex flex-col items-center py-10 md:py-20 z-[2] text-white">
            <SectionHeader text="Projects" />

            {!isProjectsPage && (
                <h3 className="mt-4 md:mt-6 text-center font-brown-sugar text-[32px] md:text-[52px] text-off-white -tracking-[.02em] !leading-none">
                    Selected works
                </h3>
            )}

            {isProjectsPage && <ProjectsFilter filter={filter} />}

            <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-row gap-5 lg:gap-10 w-full mt-5 md:mt-10">
                {projectsToRender.map((project, i) => {
                    return <Project project={project} index={i} />;
                })}
            </div>

            {!isProjectsPage && (
                <Link
                    to="/projects"
                    className="group flex items-center gap-2 mt-10 border-b border-b-white pb-1 font-satoshi font-medium text-lg lg:text-xl text-transparent bg-clip-text bg-cta-primary tracking-[0.01em]">
                    <ShinyText text="See all projects" speed={1} />
                    <svg
                        className="w-5 animate-right group-hover:animate-none"
                        fill="#AEB2FA"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        aria-label="Right arrow icon">
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                </Link>
            )}
        </section>
    );
}
