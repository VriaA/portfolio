import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectData } from "@/types/project";
import ScrollTrigger from "gsap/ScrollTrigger";

export type FilterProjects = {
    projectsToRender: Array<ProjectData>;
    filter: string | null;
};

export function useFilterProjects(
    projects: Array<ProjectData>
): FilterProjects {
    const [searchParams] = useSearchParams();
    const [projectsToRender, setProjectsToRender] =
        useState<Array<ProjectData>>(projects);
    const filter = searchParams.get("filter");

    useEffect(() => {
        let filteredProjects;
        switch (filter) {
            case "open-source":
                filteredProjects = projects.filter(
                    (project) => project.isOpenSource
                );
                break;
            case "freelance":
                filteredProjects = projects.filter(
                    (project) => project.isFreelance
                );
                break;
            case "team":
                filteredProjects = projects.filter((project) => project.isTeam);
                break;
            case "personal":
                filteredProjects = projects.filter(
                    (project) =>
                        !project.isTeam &&
                        !project.isFreelance &&
                        !project.isOpenSource
                );
                break;
            default:
                filteredProjects = projects;
        }

        setProjectsToRender(filteredProjects);
    }, [projects, filter]);

    useEffect(()=> {
        ScrollTrigger.refresh()
    }, [projectsToRender])

    return { projectsToRender, filter };
}
