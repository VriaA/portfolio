import SectionHeader from "./SectionHeader";

export default function Contact(): JSX.Element {
    return (
        <section
            id="contact"
            className="relative z-[2] flex flex-col items-center pt-10 md:pt-20">
            <SectionHeader text="Contact" />
            <h3 className="mt-4 md:mt-6 text-center font-brown-sugar text-[32px] md:text-[52px] text-off-white -tracking-[.02em] !leading-none">
                Get in touch
            </h3>

            <form
                className="w-full max-w-[600px] mt-5 md:mt-10 bg-[#33333330] backdrop-blur px-5 py-10 md:p-10 rounded-2xl"
                name="contact"
                method="post"
                data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
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
                    <svg
                        className="w-9 h-9 md:w-10 md:h-10"
                        viewBox="0 0 21 21"
                        fill="#010101"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.57561 7.20184C4.59876 7.45549 4.9851 8.2413 5.76136 9.62545L6.30255 10.6112L5.33879 12.6838C4.22915 15.0631 4.12974 15.38 4.37683 15.638C4.66968 15.9437 5.23384 15.7295 6.76553 14.7088C7.56923 14.1711 8.28735 13.716 8.38101 13.6991C8.57786 13.656 9.33743 14.449 10.4946 15.9249C11.579 17.3056 11.7177 17.374 12.3169 16.7947C12.5261 16.5925 13.6429 14.8135 14.782 12.8474C15.9397 10.8817 17.1066 8.92557 17.3951 8.48101C18.0106 7.53637 18.1509 7.03268 17.8749 6.82104C17.7553 6.73433 16.9345 6.69972 16.019 6.73831C15.1035 6.77689 13.0599 6.74679 11.4747 6.65991C6.63503 6.40701 6.24314 6.39944 5.6544 6.43495C5.06566 6.47047 4.55461 6.83571 4.57561 7.20184ZM8.02803 7.26853C9.28679 7.33973 11.1332 7.43166 12.1219 7.46952C13.1106 7.50737 13.9775 7.571 14.0423 7.60039C14.1627 7.6496 13.4859 7.8991 9.35158 9.31969C7.52884 9.94092 6.93794 10.0889 6.85666 9.94669C5.9555 8.26005 5.53436 7.34227 5.62946 7.25033C5.68652 7.19517 6.75975 7.20652 8.02803 7.26853ZM11.6484 9.28903C15.2731 8.15869 15.8731 8.02024 15.2575 8.48661C13.1928 10.0409 9.61178 12.3068 8.32215 12.8727C7.86082 13.0795 7.13463 13.4687 6.69967 13.7604C6.26507 14.0333 5.84033 14.2783 5.75618 14.2861C5.67202 14.2938 5.80319 13.7806 6.05763 13.1666C6.29341 12.5522 6.57889 11.7794 6.6783 11.4624L6.86653 10.894L7.52507 10.6254C7.90118 10.4826 9.75173 9.87132 11.6484 9.28903ZM10.4001 12.5753C11.24 12.0945 15.4653 9.33462 15.7315 9.07719C15.988 8.8477 15.6867 9.47018 14.9243 10.7777C14.4807 11.5194 13.6488 13.0412 13.0674 14.1553C12.4956 15.2602 11.9734 16.2067 11.9163 16.2619C11.8117 16.363 11.5009 16.0194 9.85062 13.9713C9.54055 13.5902 9.33258 13.2392 9.38964 13.184C9.43719 13.1381 9.89996 12.8563 10.4001 12.5753Z" />
                    </svg>
                </button>
            </form>
        </section>
    );
}
