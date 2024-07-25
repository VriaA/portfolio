import { useState } from "react"
import victoria from "@/assets/victoria.png"
import logos from "@/data/logos"
import { useViewport } from "@/hooks/useviewport"

export default function Header(): JSX.Element {
    const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState<boolean>(false)
    const [viewport] = useViewport()
    const canShowNav = isMobileNavMenuOpen || viewport.isPc

    function toggleMobileNavMenuVisibility(): void {
        if (viewport.isPc) return
        setIsMobileNavMenuOpen(prevValue => !prevValue)
    }

    return <header className="fixed flex justify-between items-center w-full px-5 md:px-20 mt-5">
        <div className="w-fit h-[86px] bg-[#555555] rounded-full overflow-hidden">
            <img className="w-[86px] h-fit object-top" src={victoria} alt="Oyelola victoria" />
        </div>

        {canShowNav && <nav className="absolute right-5 top-[84%] lg:static bg-[#55555550] backdrop-blur-sm rounded-lg shadow-nav-shadow border border-white/30">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:px-8 md:py-5">
                <li><a className="font-satoshi text-base text-off-white font-medium !leading-none tracking-[.01em]">Projects</a></li>
                <li><a className="font-satoshi text-base text-off-white font-medium !leading-none tracking-[.01em]">Experience</a></li>
                <li><a className="font-satoshi text-base text-off-white font-medium !leading-none tracking-[.01em]">Resume</a></li>
                <li><a className="font-satoshi text-base text-off-white font-medium !leading-none tracking-[.01em]">Contact</a></li>
            </ul>
        </nav>}

        <div className="flex items-center gap-4 md:gap-8">
            <nav>
                <ul className="flex gap-4 md:gap-8">
                    <li><a className="block first:w-7 first:h-7" href="https://linkedin.com/in/victoriaoyelola" target="_blank">{logos.linkedin}</a></li>
                    <li><a className="block first:w-7 first:h-7" href="https://github.com/VriaA" target="_blank" >{logos.github}</a></li>
                </ul>
            </nav>

            <button type="button" className="flex flex-col gap-[5px] lg:hidden" onClick={toggleMobileNavMenuVisibility}>
                <span className="w-5 h-[3px] bg-off-white rounded"></span>
                <span className="w-5 h-[3px] bg-off-white rounded"></span>
                <span className="w-5 h-[3px] bg-off-white rounded"></span>
            </button>
        </div>

    </header >
}