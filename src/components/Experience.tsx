import SectionHeader from "./SectionHeader"

export default function Experience(): JSX.Element {
    return (
        <section className="relative z-[2] bg-metallic-gradient p-[1px] rounded-2xl overflow-hidden">    
            <div className="flex flex-col items-center justify-center bg-black rounded-2xl py-10 md:py-20 px-0 ">
                <SectionHeader text='Experience' />
                <div>
                    <div className="flex">
                        <div className="w-1/2 text-right border-r metallic-border">
                            <h3 className="text-[32px] lg:text-5xl font-satoshi font-bold !leading-none -tracking-[.02em] text-off-white">Software engineering fellow</h3>
                            <p className="text-sm lg:text-lg font-satoshi font-medium !leading-[150%] tracking-[.01em] bg-metallic-text text-transparent bg-clip-text">Headstarter</p>
                            <p className="text-sm lg:text-lg font-satoshi font-regular !leading-[150%] tracking-[.01em] bg-metallic-text text-transparent bg-clip-text">July 2024 - Present</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-sm lg:text-lg font-satoshi font-medium !leading-[150%] tracking-[.01em] text-transparent bg-cta-primary bg-clip-text">I am building 5+ AI applications, managing projects from design to deployment, and getting coached by engineers at Amazon, Bloomberg, and Capital One.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}