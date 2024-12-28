import SectionHeader from "./SectionHeader";
import skills from "@/data/skills";
import { AppContext, TAppContext } from "@/contexts/AppContext";
import { useContext } from "react";
import useAnimateSkills from "@/hooks/gsap_animations/useAnimateSkill";

export default function Skills(): JSX.Element {
    const {
        viewport: { isXl, isMobile },
    } = useContext(AppContext) as TAppContext;
    useAnimateSkills();

    return (
        <section className="relative z-[2] flex flex-col items-center pt-10 pb-10 md:pb-20">
            <SectionHeader text="Skills" />
            <h3 className="heading">My Expertise</h3>
            <div className="w-full mt-5 md:mt-10 bg-metallic-gradient p-[1px] rounded-2xl overflow-hidden">
                <div className="flex flex-col items-center justify-center bg-black rounded-2xl py-5 md:py-10 px-5 md:px-10">
                    <div className="flex justify-center flex-wrap lg:max-w-[1019px] 2xl:max-w-none">
                        {skills.map((skill, i) => {
                            const RIGHT_BORDER =
                                (i + 1) % (isXl ? 6 : 5) !== 0 && "xl:border-r";
                            const BOTTOM_BORDER =
                                i < skills.length - (isXl ? 4 : 1) &&
                                "xl:border-b";
                            const LEFT_BORDER =
                                i === (isXl ? 12 : skills.length - 1) &&
                                "xl:border-l";
                            return (
                                <p
                                    key={`skill-${i}`}
                                    className={`grid place-content-center w-16 h-16 md:w-[200px] md:h-24 metallic-border gap-2 ${LEFT_BORDER} ${RIGHT_BORDER} ${BOTTOM_BORDER}`}>
                                    <span className="skill w-16 h-16 md:w-[200px] md:h-24 flex justify-center items-center gap-2 text-base xl:text-lg font-satoshi font-medium !leading-none tracking-[.01em] bg-metallic-text text-transparent bg-clip-text opacity-0 -translate-y-3">
                                        {skill.logo}
                                        {!isMobile && skill.skill}
                                    </span>
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
