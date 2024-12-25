import GlowingDot from "./GlowingDot";
import { AppContext, TAppContext } from "@/contexts/AppContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShinyText from "./animations/ShinyText";
import useAnimateHomeHero from "@/hooks/gsap_animations/useAnimateHomeHero";

export default function Hero(): JSX.Element {
    const { viewport } = useContext(AppContext) as TAppContext;
    useAnimateHomeHero();

    return (
        <section
            className={`${
                !viewport.isScreenTall ? "mt-40 mb-28" : ""
            } relative z-[2] flex flex-col items-center justify-center h-[calc(100svh-80px)] 2xl:max-h-[920px] text-off-white`}>
            <p
                id="work-status"
                className="flex items-center gap-4 px-4 py-2 h-fit font-satoshi font-medium text-sm xl:text-base tracking-[.01em] bg-metallic-text text-transparent bg-clip-text !leading-none rounded-2xl border bg-dark-gray/20 border-white/30 shadow-container opacity-0">
                <GlowingDot style="bg-[#10AC58]" />
                Open to work
            </p>
            <h1 className="flex flex-wrap min-[580px]:gap-x-2 min-[800px]:gap-x-4 justify-center mt-12 text-center font-brown-sugar text-[64px] md:text-8xl xl:text-[120px] text-off-white -tracking-[.02em] !leading-none xl:!leading-[70%]">
                <span className="name opacity-0 blur-[8px] translate-y-12 lg:translate-y-28">
                    Oyelola{" "}
                </span>
                <span className="name blur-[8px] opacity-0 translate-y-12 lg:translate-y-28">
                    Victoria
                </span>
            </h1>
            <p className="hero-element w-full sm:max-w-[950px] mt-2 md:mt-4 text-center font-satoshi font-normal text-base md:text-lg xl:text-xl !leading-[150%] tracking-[.01em] text-transparent bg-metallic-text bg-clip-text opacity-0 translate-y-12 lg:translate-y-28">
                <ShinyText
                    text="Frontend Engineer with a flair for UI design."
                    speed={5}
                />
                <br />
                My journey into coding began with my love for an interactive
                storytelling mobile game. I was inspired to write my own stories
                on the platform, little did I know that this would lead me to
                discover coding.
                <br />
                Now, I love turning ideas into pixel-perfect, accessible, and
                interactive web experiences.
            </p>

            <div className="flex gap-4 md:gap-8 items-center mt-10">
                <Link
                    to="#contact"
                    className="hero-element py-3 px-6 md:py-3 md:px-8 font-semibold font-satoshi text-base md:text-lg xl:text-xl -tracking-[.02em] !leading-none text-black bg-cta-primary rounded-lg hover:bg-none hover:bg-[#AEB2FA] opacity-0 translate-y-12 lg:translate-y-28">
                    Contact
                </Link>
                <a
                    href="https://drive.google.com/file/d/1KEAivFrgfG6GThUM7FIDySS0_Fzqng_Q/view?usp=sharing"
                    target="_blank"
                    className="hero-element px-0 pb-[2px] font-satoshi text-base md:text-lg xl:text-xl font-regular tracking-[.01em] !leading-none border-b metallic-border hover:bg-cta-primary hover:bg-clip-text hover:text-transparent opacity-0 translate-y-12 lg:translate-y-28">
                    Resume
                </a>
            </div>
        </section>
    );
}
