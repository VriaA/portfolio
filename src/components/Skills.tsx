import SectionHeader from "./SectionHeader"
import skills from "@/data/skills"
import { AppContext, TAppContext } from "@/contexts/AppContext"
import { useContext } from "react"

export default function Skills(): JSX.Element{
    const { viewport } = useContext(AppContext) as TAppContext

    return ( 
        <section className="relative z-[2] bg-metallic-gradient p-[1px] rounded-2xl overflow-hidden">    
            <div className="flex flex-col items-center justify-center bg-black rounded-2xl py-10 md:py-20 px-0 ">

                <SectionHeader text='Skills' />
                <h3 className="mt-4 md:mt-6 text-center font-brown-sugar text-[32px] md:text-[52px] text-off-white -tracking-[.02em] !leading-none">My Expertise</h3>
                    <div className="flex justify-center mt-10 flex-wrap max-w-[335px] md:max-w-[1019px]">
                        {skills.map((skill, i)=> {
                            return <p key={`skill-${i}`}
                            className="skill flex justify-center items-center gap-2 w-16 h-16 md:w-[200px] md:h-24 text-base lg:text-lg font-satoshi font-medium !leading-none tracking-[.01em] bg-metallic-text text-transparent bg-clip-text">
                                {skill.logo}{!viewport.isMobile && skill.skill}
                            </p>
                            })}
                    </div>
            </div>  
        </section>
    )
}