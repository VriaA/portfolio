import { ProjectType } from "@/types/project";
export default function ProjectBadge({
    isFreelance,
    isOpenSource,
    isTeam,
}: ProjectType): JSX.Element {
    const COLOR = isFreelance
        ? "freelance-badge"
        : isOpenSource
        ? "open-source-badge"
        : isTeam
        ? "team-badge"
        : "personal-badge";

    return (
        <p
            className={`${COLOR} px-2 h-7 xl:h-8 grid place-content-center mt-0 border rounded-2xl font-satoshi font-normal text-sm xl:text-base tracking-[.01em] !leading-none`}>
            {isFreelance
                ? "Freelance"
                : isOpenSource
                ? "Open Source"
                : isTeam
                ? "Team"
                : "Personal"}
        </p>
    );
}
