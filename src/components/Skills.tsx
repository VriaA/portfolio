import SectionHeader from "./SectionHeader";
import skills from "@/data/skills";
import { AppContext, TAppContext } from "@/contexts/AppContext";
import { useContext } from "react";

export default function Skills(): JSX.Element {
    const { viewport } = useContext(AppContext) as TAppContext;

    return (
        <section className="relative z-[2] flex flex-col items-center pt-10 pb-10 md:pb-20">
            <SectionHeader text="Skills" />
            <h3 className="heading">My Expertise</h3>
            <div className="w-full mt-5 md:mt-10 bg-metallic-gradient p-[1px] rounded-2xl overflow-hidden">
                <div className="flex flex-col items-center justify-center bg-black rounded-2xl py-5 md:py-10 px-5 md:px-10">
                    <div className="flex justify-center flex-wrap max-w-[335px] md:max-w-none">
                        {skills.map((skill, i) => {
                            const RIGHT_BORDER =
                                (i + 1) % 6 !== 0 && "xl:border-r";
                            const LEFT_BORDER = i === 12 && "xl:border-l";
                            const BOTTOM_BORDER =
                                i < skills.length - 4 && "xl:border-b";
                            return (
                                <p
                                    key={`skill-${i}`}
                                    className={`skill flex justify-center items-center gap-2 w-16 h-16 md:w-[200px] md:h-24 text-base xl:text-lg font-satoshi font-medium !leading-none tracking-[.01em] bg-metallic-text text-transparent bg-clip-text metallic-border ${LEFT_BORDER} ${RIGHT_BORDER} ${BOTTOM_BORDER}`}>
                                    {skill.logo}
                                    {!viewport.isMobile && skill.skill}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
