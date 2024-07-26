import SectionHeader from "./SectionHeader"

export default function Contact(): JSX.Element {
    return (
        <section className="relative z-[2] flex flex-col items-center py-20">
            <SectionHeader text="Contact" />
            <h3 className="mt-4 md:mt-6 text-center font-brown-sugar text-[32px] md:text-[52px] text-off-white -tracking-[.02em] !leading-transparent">Get in touch</h3>

            <form className="w-full max-w-[600px] mt-10 bg-[#33333330] backdrop-blur px-5 py-10 md:p-10 rounded-2xl">
                <fieldset className="grid grid-cols-2 grid-rows-form md:grid-rows-form-md gap-5">
                    <label className="flex flex-col col-start-1 col-end-3 md:col-end-2 row-start-1 row-end-2 gap-3 font-satoshi font-medium !leading-none text-base lg:text-lg tracking-normal bg-transparent text-off-white">Firstname:
                            <input className="font-normal bg-transparent placeholder:text-[#999999] p-3 md:px-5 rounded-2xl  border border-white/30" type="text" placeholder="Your first name" />
                    </label>
                    <label className="flex flex-col col-start-1 col-end-3 md:col-start-2 row-start-2 row-end-3 md:row-start-1 md:row-end-2 gap-3 font-satoshi font-medium !leading-none text-base lg:text-lg tracking-normal bg-transparent text-off-white">Lastname:
                            <input className="font-normal bg-transparent placeholder:text-[#999999] p-3 md:px-5 rounded-2xl  border border-white/30" type="text" placeholder="Your last name" />
                    </label>
                    <label className="flex flex-col col-start-1 col-end-3 row-start-3 row-end-4 md:row-start-2 md:row-end-3 gap-3 font-satoshi font-medium !leading-none text-base lg:text-lg tracking-normal bg-transparent text-off-white">Email:
                            <input className="font-normal bg-transparent placeholder:text-[#999999] p-3 md:px-5 rounded-2xl  border border-white/30" type="email" placeholder="your@email.com" />
                    </label>
                    <label className="flex flex-col col-start-1 col-end-3 row-start-4 row-end-5 md:row-start-3 md:row-end-4 gap-3 font-satoshi font-medium !leading-none text-base lg:text-lg tracking-normal bg-transparent text-off-white"> Message:
                        <textarea className="h-[200px] resize-none bg-transparent p-3 md:px-5 rounded-2xl placeholder:text-[#999999] border border-white/30" placeholder="Your message..."></textarea>
                    </label>
                </fieldset>
                <button className="flex justify-center items-center gap-3 w-full text-lg lg:text-xl mt-5 px-5 py-2 md:py-4 rounded-2xl font-satoshi font-bold bg-cta-primary">
                    Send message 
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#010101" strokeWidth={.6}>
                        <path d="M16.0383 7.3674L10.4133 12.9924C10.2372 13.1685 9.99829 13.2675 9.74922 13.2675C9.50015 13.2675 9.26128 13.1685 9.08516 12.9924C8.90904 12.8163 8.81009 12.5774 8.81009 12.3283C8.81009 12.0793 8.90904 11.8404 9.08516 11.6643L13.1094 7.64162H1.625C1.37636 7.64162 1.1379 7.54284 0.962087 7.36703C0.786272 7.19121 0.6875 6.95276 0.6875 6.70412C0.6875 6.45548 0.786272 6.21702 0.962087 6.0412C1.1379 5.86539 1.37636 5.76662 1.625 5.76662H13.1094L9.08672 1.74162C8.9106 1.5655 8.81166 1.32663 8.81166 1.07755C8.81166 0.828482 8.9106 0.589612 9.08672 0.413491C9.26284 0.237371 9.50171 0.138428 9.75078 0.138428C9.99985 0.138428 10.2387 0.237371 10.4148 0.413491L16.0398 6.03849C16.1273 6.12571 16.1966 6.22933 16.2438 6.34341C16.2911 6.45749 16.3153 6.57979 16.3152 6.70327C16.315 6.82675 16.2905 6.94899 16.243 7.06296C16.1955 7.17693 16.1259 7.28039 16.0383 7.3674Z" fill="#010101"/>
                    </svg>
                </button>
            </form>
        </section>
    )
}