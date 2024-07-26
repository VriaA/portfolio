import SectionHeader from "./SectionHeader"

export default function Contact(): JSX.Element {
    return (
        <section className="relative z-[2] flex flex-col items-center py-20">
            <SectionHeader text="Contact" />
            <h3 className="mt-4 md:mt-6 text-center font-brown-sugar text-[32px] md:text-[52px] text-off-white -tracking-[.02em] !leading-transparent">Get in touch</h3>

            <form className="bg-[#33333330] backdrop-blur px-5 py-10 md:p-10 rounded-2xl">
                <fieldset className="grid grid-cols-2 grid-rows-4 md:grid-rows-3">
                    <label className="flex flex-col col-start-1 col-end-3 md:col-end-2 row-start-1 row-end-2 bg-transparent text-off-white">Firstname:
                        <input className="bg-transparent" type="text" placeholder="Your first name" />
                    </label>
                    <label className="flex flex-col col-start-1 md:col-start-2 md:col-end-3 row-start-2 row-end-3 md:row-start-1 md:row-end-2 bg-transparent text-off-white">Lastname:
                        <input className="bg-transparent" type="text" placeholder="Your last name" />
                    </label>
                    <label className="flex flex-col col-start-1 col-end-3 row-start-3 row-end-4 md:row-start-2 md:row-end-3 bg-transparent text-off-white">Email:
                        <input className="bg-transparent" type="email" placeholder="your@email.com" />
                    </label>
                    <label className="flex flex-col col-start-1 col-end-3 row-start-4 row-end-5 md:row-start-3 md:row-end-4 bg-transparent text-off-white"> Message:
                        <textarea className="resize-none bg-transparent">Your message</textarea>
                    </label>
                </fieldset>
                <button className="w-full">Send message</button>
            </form>
        </section>
    )
}