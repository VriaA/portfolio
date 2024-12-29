import SectionHeader from "./SectionHeader";
import PaperPlane from "@/assets/paper_plane.svg?react";

export default function Contact(): JSX.Element {
    return (
        <section
            id="contact"
            className="relative z-[2] flex flex-col items-center pt-10 md:pt-20">
            <SectionHeader text="Contact" />
            <h3 className="heading">Get in touch</h3>

            <form
                className="w-full max-w-[600px] mt-5 md:mt-10 bg-[#33333330] backdrop-blur px-5 py-10 md:p-10 rounded-2xl"
                name="contact"
                method="post"
                data-netlify="true">
                <input
                    type="hidden"
                    name="form-name"
                    value="contact"
                />
                <fieldset className="grid grid-cols-2 grid-rows-form md:grid-rows-form-md gap-5">
                    <label className="flex flex-col col-start-1 col-end-3 md:col-end-2 row-start-1 row-end-2 gap-3 font-satoshi font-medium !leading-none text-base xl:text-lg tracking-normal bg-transparent text-off-white">
                        Firstname:
                        <input
                            id="firstname"
                            name="firstname"
                            className="font-normal bg-transparent placeholder:text-[#999999] p-3 md:px-5 rounded-2xl  border border-white/30"
                            type="text"
                            placeholder="Your first name"
                            required={true}
                        />
                    </label>
                    <label className="flex flex-col col-start-1 col-end-3 md:col-start-2 row-start-2 row-end-3 md:row-start-1 md:row-end-2 gap-3 font-satoshi font-medium !leading-none text-base xl:text-lg tracking-normal bg-transparent text-off-white">
                        Lastname:
                        <input
                            id="lastname"
                            name="lastname"
                            className="font-normal bg-transparent placeholder:text-[#999999] p-3 md:px-5 rounded-2xl  border border-white/30"
                            type="text"
                            placeholder="Your last name"
                            required={true}
                        />
                    </label>
                    <label className="flex flex-col col-start-1 col-end-3 row-start-3 row-end-4 md:row-start-2 md:row-end-3 gap-3 font-satoshi font-medium !leading-none text-base xl:text-lg tracking-normal bg-transparent text-off-white">
                        Email:
                        <input
                            id="email"
                            name="email"
                            className="font-normal bg-transparent placeholder:text-[#999999] p-3 md:px-5 rounded-2xl  border border-white/30"
                            type="email"
                            placeholder="your@email.com"
                            required={true}
                        />
                    </label>
                    <label className="flex flex-col col-start-1 col-end-3 row-start-4 row-end-5 md:row-start-3 md:row-end-4 gap-3 font-satoshi font-medium !leading-none text-base xl:text-lg tracking-normal bg-transparent text-off-white">
                        {" "}
                        Message:
                        <textarea
                            id="message"
                            name="message"
                            className="h-[200px] resize-none bg-transparent p-3 md:px-5 rounded-2xl placeholder:text-[#999999] border border-white/30"
                            placeholder="Your message..."
                            required={true}></textarea>
                    </label>
                </fieldset>
                <button className="flex justify-center items-center gap-1 w-full text-lg xl:text-xl mt-5 px-5 h-11 md:h-[60px] rounded-2xl font-satoshi font-bold bg-cta-primary hover:bg-none hover:bg-[#AEB2FA]">
                    Send message
                    <PaperPlane className="w-9 h-9 md:w-10 md:h-10" />
                </button>
            </form>
        </section>
    );
}
