import GlowingDot from "./GlowingDot"
import { AppContext, TAppContext } from "@/contexts/AppContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
import BlurText from "./animations/BlurText"
import ShinyText from "./animations/ShinyText"

export default function Hero(): JSX.Element {
    const { viewport } = useContext(AppContext) as TAppContext

    return (
        <section className={`${(!viewport.isPc && !viewport.isScreenTall) ? 'pt-40' : ''} relative z-[2] flex flex-col items-center justify-center min-h-[100svh] 2xl:min-h-fit 2xl:h-[920px] text-off-white pb-20 md:pb-10`}>
            <p className="flex items-center gap-4 px-4 py-2 h-fit font-satoshi font-medium text-sm lg:text-base tracking-[.01em] bg-metallic-text text-transparent bg-clip-text !leading-none rounded-2xl border bg-dark-gray/20 border-white/30 shadow-container">
                <GlowingDot style="bg-[#10AC58]" />
                Open to work</p>
            <h1 className="mt-12 text-center font-brown-sugar text-[64px] md:text-8xl xl:text-[120px] text-off-white -tracking-[.02em] !leading-none xl:!leading-[70%]">
                <BlurText text="Oyelola Victoria" delay={50} />
            </h1>
            <p className="w-full sm:max-w-[950px] mt-2 md:mt-4 text-center font-satoshi font-normal text-base md:text-lg xl:text-xl !leading-[150%] tracking-[.01em] text-transparent bg-metallic-text bg-clip-text">
                <ShinyText
                    text="Frontend Engineer with a flair for UI design."
                    speed={5} />
                <br />My journey into coding began with my love for an interactive storytelling mobile game. I was inspired to write my own stories on the platform, little did I know that this would lead me to discover coding.
                <br />Now, I love turning ideas into pixel-perfect, accessible, and interactive web experiences.</p>

            <div className="flex gap-4 md:gap-8 items-center mt-10">
                <Link to="#contact" className="py-3 px-6 md:py-3 md:px-8 font-semibold font-satoshi text-base md:text-lg xl:text-xl -tracking-[.02em] !leading-none text-black bg-cta-primary rounded-lg hover:bg-none hover:bg-[#AEB2FA]">Contact</Link>
                <a href="https://drive.google.com/file/d/1xl5xTilwH9EUdFXkCZgqR82F2o89HZxk/view?usp=sharing" target="_blank" className="bold px-0 pb-[2px] font-satoshi text-base md:text-lg lg:text-xl font-regular tracking-[.01em] !leading-none border-b metallic-border hover:bg-cta-primary hover:bg-clip-text hover:text-transparent">Resume</a>
            </div>
        </section>
    )
}

