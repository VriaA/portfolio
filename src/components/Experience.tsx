import { Fragment } from "react/jsx-runtime"
import SectionHeader from "./SectionHeader"
import experiences from "@/data/experience"

export default function Experience(): JSX.Element {
    return (
        <section id="experience" className="relative z-[2] bg-metallic-gradient p-[1px] rounded-2xl overflow-hidden">
            <div className="flex flex-col items-center justify-center bg-black rounded-2xl py-10 md:py-20 px-0 ">
                <SectionHeader text='Experience' />
                <div className="max-w-[900px] mt-4 md:mt-10 px-5 md:px-0">
                    {
                        experiences.map((experience, i) => {
                            const { role, institution, startDate, endDate, description } = experience
                            const isLast = (experiences.length - 1) === i
                            return <div key={institution} className={`flex flex-col md:flex-row h-fit gap-6 md:gap-0 py-6 md:py-0 ${!isLast ? 'border-b' : ''} md:border-b-0 metallic-border`}>
                                <div className="flex flex-col justify-start w-full md:w-1/2 md:p-4 md:py-6 text-left md:text-right md:border-r metallic-border">
                                    <h3 className="text-[32px] lg:text-5xl font-satoshi font-bold !leading-none -tracking-[.02em] text-off-white">{role}</h3>
                                    <p className="mt-5 text-base lg:text-lg font-satoshi font-medium !leading-[110%] tracking-[.01em] bg-metallic-text text-transparent bg-clip-text">{institution}</p>
                                    <p className="mt-1 text-base lg:text-lg font-satoshi font-regular !leading-[110%] tracking-[.01em] bg-metallic-text text-transparent bg-clip-text">{startDate} - {endDate}</p>
                                </div>

                                <p className={`w-full md:w-1/2 md:p-4 md:py-6 ${isLast ? 'md:pb-0' : ''} text-base lg:text-lg font-satoshi font-medium !leading-[150%] tracking-[.01em] text-transparent bg-cta-primary bg-clip-text`}>
                                    {description.split('\n').map((line, i) => {
                                        return <Fragment key={`${institution}-description-line-${i + 1}`}>
                                            {line}
                                            <br />
                                        </Fragment>
                                    })}
                                </p>
                            </div>
                        })
                    }

                </div>
            </div>
        </section>
    )
}