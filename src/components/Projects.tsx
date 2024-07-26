import SectionHeader from "./SectionHeader"
import projects from "@/data/projects"
import GlowingDot from "./GlowingDot"

export default function Projects(): JSX.Element {
    return (
        <section className="relative flex flex-col items-center z-[2] text-white mt-20 mb-10 md:mb-20">
            <SectionHeader text="Projects" />
            <h3 className="mt-4 md:mt-6 text-center font-brown-sugar text-[32px] md:text-[52px] text-off-white -tracking-[.02em] !leading-none">
                Selected works
            </h3>

            <div className="flex flex-col gap-5 md:gap-10 mt-10 w-full">

                {projects.map((project, i) => {
                    const { name, description, technologiesUsed, imageSrc, links, isCompleted } = project
                    return (
                        <div className="flex flex-col items-center bg-metallic-gradient p-[1px] rounded-2xl overflow-hidden">
                            <div key={`project-${i + 1}`} className="flex flex-col lg:flex-row gap-10 items-center lg:items-end justify-between w-full h-fit bg-black rounded-2xl px-5 md:px-10 py-10">
                                <img className="order-0 lg:order-2 w-[300px] md:w-[540px] h-fit" src={imageSrc} alt={`Oyelola Victoria's ${name} Project`} />

                                <div className="order-1 lg:order-0 flex flex-col gap-10 lg:gap-20 justify-between h-fit w-full lg:w-[50%]">
                                    {isCompleted ?
                                        <div className="flex items-start gap-4 w-fit">
                                            <a className="w-fit" href={links.website} target="_blank">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0056 3.25284L12 2.36896C13.3199 1.19855 15.1081 0.54126 16.9725 0.54126C18.8368 0.54126 20.6251 1.19855 21.945 2.36896C23.261 3.54252 24 5.13196 24 6.78897C24 8.44598 23.261 10.0354 21.945 11.209L18.9605 13.8606C17.6342 15.0408 15.8677 15.6921 13.9887 15.6921C12.1097 15.6921 10.3432 15.0408 9.0169 13.8606L8.02254 12.9767L10.0113 11.209L11.0056 12.0928C12.5991 13.5093 15.3783 13.5093 16.9718 12.0928L19.9563 9.44122C20.746 8.73703 21.1894 7.78328 21.1894 6.78897C21.1894 5.79466 20.746 4.8409 19.9563 4.13671C19.1637 3.43535 18.0909 3.04159 16.9725 3.04159C15.8541 3.04159 14.7813 3.43535 13.9887 4.13671L12.9943 5.02059L11.0056 3.25284ZM12.9944 10.3251C11.4009 8.90864 8.62172 8.90864 7.02821 10.3251L4.04373 12.9767C3.25401 13.6809 2.81056 14.6347 2.81056 15.629C2.81056 16.6233 3.25401 17.577 4.04373 18.2812C4.8363 18.9826 5.90914 19.3763 7.02751 19.3763C8.14588 19.3763 9.21872 18.9826 10.0113 18.2812L11.0057 17.3974L12.9944 19.1651L12 20.049C11.3475 20.6299 10.5722 21.0905 9.71869 21.4042C8.8652 21.7179 7.95037 21.8785 7.02681 21.8767C6.10349 21.8782 5.18895 21.7175 4.33573 21.4038C3.48251 21.0902 2.70742 20.6297 2.055 20.049C0.73898 18.8754 0 17.286 0 15.629C0 13.972 0.73898 12.3825 2.055 11.209L5.03949 8.55734C6.36578 7.37717 8.13228 6.72583 10.0113 6.72583C11.8903 6.72583 13.6568 7.37717 14.9831 8.55734L15.9775 9.44122L13.9887 11.209L12.9944 10.3251Z" fill="url(#paint0_linear_104_1128)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_104_1128" x1="0" y1="11.2091" x2="24" y2="11.2091" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#AEB2FA" />
                                                            <stop offset="1" stop-color="#BBB999" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </a>

                                            <a className="w-fit" href={links.github} target="_blank">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_910_44)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_910_44">
                                                            <rect width="48" height="48" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                        : <p className="flex items-center gap-4 h-fit font-satoshi font-medium text-sm lg:text-base tracking-[.01em] bg-metallic-text text-transparent bg-clip-text leading-[100%]">
                                            <GlowingDot style="bg-[#FF0000]" />
                                            In progress</p>
                                    }
                                    <div>
                                        <h4 className="font-satoshi font-bold text-[28px] lg:text-5xl leading-none -tracking-[.02em]">{name}</h4>
                                        <p className="mt-3 font-satoshi font-medium text-base lg:text-lg leading-[150%] tracking-[.01em]">{description}</p>

                                        <div className="flex flex-wrap gap-1 lg:gap-2 w-full mt-5">
                                            {technologiesUsed.map((tech) => {
                                                const { name, logo } = tech
                                                return (
                                                    <p className="project-stack flex items-center gap-1 w-fit px-2 py-1 lg:px-4 lg:py-2 h-8 lg:h-9 font-satoshi font-medium text-base lg:text-base tracking-[.01em] bg-metallic-text text-transparent bg-clip-text !leading-none rounded-2xl border bg-dark-gray/20 border-white/30 shadow-container">
                                                        {logo}
                                                        {name}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}