import { ProjectType } from "@/types/project";
export default function ProjectBadge({
    isFreelance,
    isOpenSource,
    isTeam,
}: ProjectType): JSX.Element {
    const COLOR = isFreelance
        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500"
        : isOpenSource
        ? "bg-yellow-400/10 text-yellow-400 border-yellow-400"
        : isTeam
        ? "bg-sky-500/10 text-sky-500 border-sky-500"
        : "bg-off-white/10 text-off-white border-off-white";

    return (
        <p
            className={`${COLOR} px-2 h-7 xl:h-8 grid place-content-center mt-0 border rounded-2xl font-satoshi font-normal text-sm lg:text-base tracking-[.01em] !leading-none`}>
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
