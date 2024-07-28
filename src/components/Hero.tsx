import GlowingDot from "./GlowingDot"

export default function Hero(): JSX.Element {
    return (
        <section className="relative z-[2] flex flex-col items-center justify-center h-[100svh] text-off-white pt-28 -mb-20 lg:mb-0">
            <p className="flex items-center gap-4 px-4 py-2 h-fit font-satoshi font-medium text-sm lg:text-base tracking-[.01em] bg-metallic-text text-transparent bg-clip-text !leading-none rounded-2xl border bg-dark-gray/20 border-white/30 shadow-container">
                <GlowingDot style="bg-[#10AC58]" />
                Open to work</p>

            <h1 className="mt-6 md:mt-12 text-center font-brown-sugar text-[64px] md:text-[120px] text-off-white -tracking-[.02em] !leading-none xl:!leading-[70%]">Oyelola Victoria</h1>
            <p className="max-w-[360px] sm:max-w-full mt-4 md:mt-8 text-center font-satoshi font-normal text-base lg:text-[22px] !leading-[150%] tracking-[.01em] text-transparent bg-metallic-text bg-clip-text">Front-end developer with a flair for UI design.
                <br />I turn ideas into pixel-perfect, accessible, and interactive experiences.</p>

            <div className="flex gap-4 md:gap-8 items-center mt-8 md:mt-12 ">
                <a href="#contact" className="py-3 px-6 md:py-3 md:px-8 font-semibold font-satoshi text-base lg:text-[22px] -tracking-[.02em] !leading-none text-black bg-cta-primary rounded-lg">Contact</a>
                <a href="/" className="bold px-0 pb-[2px] font-satoshi text-base lg:text-xl font-regular tracking-[.01em] !leading-none border-b metallic-border">Resume</a>
            </div>
        </section>
    )
}

