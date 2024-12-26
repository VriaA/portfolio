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
    const SECTION_PADDING = isProjectsPage
        ? "py-10 pt-0 md:py-20 md:pt-0"
        : "py-10 md:py-20";

    return (
        <section
            id="projects"
            className={`relative flex flex-col items-center z-[2] text-white ${SECTION_PADDING}`}>
            <SectionHeader text="Projects" />

            {!isProjectsPage && (
                <h3 className="mt-4 md:mt-6 text-center font-brown-sugar text-[32px] md:text-[52px] text-off-white -tracking-[.02em] !leading-none">
                    Selected works
                </h3>
            )}

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

                    <svg
                        className="w-5"
                        fill="#AEB2FA"
                        viewBox="0 0 98 73"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.7334 5.46692C26.7334 14.6669 28.0667 27.6003 35 26.2669C40.3334 25.3336 45.6667 10.2669 43 3.46692C41.1334 -1.73308 37 -0.933079 32.7334 5.46692Z" />
                        <path d="M70.2002 7.73324C65.5335 10.7999 64.0669 24.9332 67.6669 31.9999C70.4669 37.3332 74.3335 37.1999 77.8002 31.5999C81.5336 25.7332 80.7336 14.6666 76.3335 9.9999C73.0002 6.3999 72.4669 6.26657 70.2002 7.73324Z" />
                        <path d="M0.866719 21.9998C-0.999948 29.3332 6.46672 47.7332 15.6667 58.2665C18.4667 61.5998 24.0667 65.5998 29.4001 68.2665C37.8001 72.3998 39.1334 72.6665 52.3334 72.6665C65.0001 72.6665 67.1334 72.2665 74.7334 68.7998C84.4667 64.2665 97.6667 51.0665 97.6667 45.7332C97.6667 41.0665 94.3334 41.8665 85.1334 49.1998C75.0001 57.1998 70.2001 59.7332 61.8001 61.3332C53.8001 62.7998 40.8667 60.9332 33.8001 57.3332C25.4001 53.0665 13.0001 37.3332 8.06672 24.6665C5.53339 18.2665 2.20005 16.9332 0.866719 21.9998Z" />
                    </svg>
                </Link>
            )}
        </section>
    );
}
