import { ProjectType, ProjectLinkData } from "@/types/project";
import ProjectBadge from "./ProjectBadge";
import GitHubLogo from "@/assets/logos/github_logo.svg?react";
import LinkIcon from "@/assets/link_icon.svg?react";

interface ProjectLinksProps extends ProjectType {
    links: ProjectLinkData;
}

export default function ProjectLinks({
    isFreelance,
    isOpenSource,
    isTeam,
    links,
}: ProjectLinksProps) {
    return (
        <div className="flex items-center gap-4 w-fit">
            {!isOpenSource && (
                <a
                    className="w-fit"
                    href={links.website}
                    target="_blank"
                    aria-label={`Link to ${name} website.`}>
                    <LinkIcon className="w-7 h-7 xl:w-8 xl:h-8" />
                </a>
            )}
            {!isFreelance && (
                <a
                    className="w-fit"
                    href={links.github}
                    target="_blank"
                    aria-label={`Link to ${name} GItHub repositoty.`}>
                    <GitHubLogo className="w-7 h-7 xl:w-8 xl:h-8" />
                </a>
            )}
            <ProjectBadge
                isFreelance={isFreelance}
                isOpenSource={isOpenSource}
                isTeam={isTeam}
            />
        </div>
    );
}
