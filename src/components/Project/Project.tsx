import { ProjectData } from "@/types/project";
import GlowingDot from "../GlowingDot";
import ProjectLinks from "./ProjectLinks";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext, TAppContext } from "@/contexts/AppContext";

export default function Project({
    project,
    index,
}: {
    project: ProjectData;
    index: number;
}) {
    const {
        name,
        description,
        technologiesUsed,
        imageSrc,
        links,
        isCompleted,
        isOpenSource,
        isFreelance,
        isTeam,
    } = project;
    const { viewport } = useContext(AppContext) as TAppContext;
    const location = useLocation();
    const isProjectsPage = location.pathname === "/projects";
    const top = viewport.isMobile ? 116 : isProjectsPage ? 170 : 126;

    return (
        <div
            key={`project-${index + 1}`}
            className={`sticky flex-none flex flex-col items-center lg:w-[calc(50%-20px)] xl:w-full bg-metallic-gradient p-[1px] rounded-2xl overflow-hidden`}
            style={{ top: top }}>
            <div className="flex flex-col xl:flex-row gap-10 items-center xl:items-end xl:justify-between w-full h-full bg-black rounded-2xl px-5 md:px-10 py-10">
                <img
                    className={`${
                        !isCompleted ? "blur-md" : ""
                    } order-0 xl:order-2 w-[300px] lg:w-[540px] h-fit`}
                    src={imageSrc}
                    alt={`Oyelola Victoria's ${name} Project`}
                />

                <div className="order-1 xl:order-0 flex flex-col gap-10 xl:gap-20 justify-between min-h-full w-full xl:w-[50%]">
                    {isCompleted ? (
                        <ProjectLinks
                            links={links}
                            isOpenSource={isOpenSource}
                            isFreelance={isFreelance}
                            isTeam={isTeam}
                        />
                    ) : (
                        <p className="flex items-center gap-4 h-fit font-satoshi font-medium text-sm lg:text-base tracking-[.01em] bg-metallic-text text-transparent bg-clip-text leading-[100%]">
                            <GlowingDot style="bg-[#FF0000]" />
                            In progress
                        </p>
                    )}
                    <div>
                        <h4 className="font-satoshi font-bold text-[28px] lg:text-5xl leading-none -tracking-[.02em]">
                            {name}
                        </h4>
                        <p className="bg-metallic-text text-transparent bg-clip-text mt-3 font-satoshi font-medium text-sm lg:text-lg leading-[150%] tracking-[.01em]">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-1 lg:gap-2 w-full mt-5">
                            {technologiesUsed.map((tech) => {
                                const { techName, logo } = tech;
                                return (
                                    <p
                                        key={`${name}-${techName}`}
                                        className="project-stack flex items-center gap-1 w-fit px-2 py-1 xl:px-4 xl:py-2 h-8 xl:h-9 font-satoshi font-medium text-sm lg:text-base tracking-[.01em] bg-metallic-text text-transparent bg-clip-text !leading-none rounded-2xl border bg-dark-gray/20 border-white/30 shadow-container">
                                        {logo}
                                        {techName}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
