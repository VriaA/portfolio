import logos from "@/data/logos"

export default function Footer(): JSX.Element {
    return (
        <footer className="relative z-[2] bg-metallic-gradient p-[1px] rounded-2xl overflow-hidden mb-5">    
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-black rounded-2xl p-5 md:py-5 md:px-10 ">
                <p className="order-3 md:order-1 font-satoshi font-medium text-sm md:text-base text-transparent bg-clip-text bg-metallic-text"><span className="font-bold">©</span> <a className="bg-cta-primary bg-clip-text hover:underline hover:border-b hover:border-off-white" href="https://linkedin.com/in/victoriaoyelola" target="_blank">Oyelola Victoria.</a> All rights reserved.</p>
                <ul className="order-1 md:order-2 flex gap-4 md:gap-8">
                    <li><a className="block first:w-7 first:h-7" href="https://linkedin.com/in/victoriaoyelola" target="_blank">{logos.linkedin}</a></li>
                    <li><a className="block first:w-7 first:h-7" href="https://github.com/VriaA" target="_blank" >{logos.github}</a></li>
                </ul>
                <p className="order-2 md:order-3 font-satoshi font-medium text-sm md:text-base text-transparent bg-clip-text bg-metallic-text">Designed & developed by <a className="bg-cta-primary bg-clip-text hover:underline hover:border-b hover:border-off-white" href="https://github.com/VriaA" target="_blank">Oyelola Victoria.</a></p>
            </div>
        </footer>
    )
}