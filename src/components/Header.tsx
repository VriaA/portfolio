import { useState } from "react"
import victoria from "@/assets/victoria.webp"
import logos from "@/data/logos"
import { useViewport } from "@/hooks/useviewport"
import { Link } from "react-router-dom"

export default function Header(): JSX.Element {
    const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState<boolean>(false)
    const [viewport] = useViewport()
    const canShowNav = isMobileNavMenuOpen || viewport.isPc

    function toggleMobileNavMenuVisibility(): void {
        if (viewport.isPc) return
        setIsMobileNavMenuOpen(prevValue => !prevValue)
    }

    return <header className="fixed left-0 z-10 flex justify-between items-center w-full px-5 md:px-20 mt-5">
        <Link to="/" className="w-fit h-[72px] bg-off-white rounded-full overflow-hidden">
            <img className="object-top" src={victoria} width={72} height={89.92} alt="Oyelola victoria" />
        </Link>

        {canShowNav && <nav className="absolute right-5 md:right-20 top-[84%] lg:static bg-[#33333330] backdrop-blur-[2px] rounded-lg shadow-container border border-white/30">
            <ul className="flex flex-col lg:flex-row gap-4 md:gap-8 p-4 md:px-8 md:py-5">
                <li><Link to="/projects" className="font-satoshi text-base text-off-white metallic-border hover:bg-cta-primary hover:bg-clip-text hover:text-transparent font-medium !leading-none tracking-[.01em]">Projects</Link></li>
                <li><Link to=".#experience" className="font-satoshi text-base text-off-white metallic-border hover:bg-cta-primary hover:bg-clip-text hover:text-transparent font-medium !leading-none tracking-[.01em]">Experience</Link></li>
                <li><a href="https://drive.google.com/file/d/1xl5xTilwH9EUdFXkCZgqR82F2o89HZxk/view?usp=sharing" target="_blank" className="font-satoshi text-base text-off-white metallic-border hover:bg-cta-primary hover:bg-clip-text hover:text-transparent font-medium !leading-none tracking-[.01em]">Resume</a></li>
                <li><Link to="#contact" className="font-satoshi text-base text-off-white metallic-border hover:bg-cta-primary hover:bg-clip-text hover:text-transparent font-medium !leading-none tracking-[.01em]">Contact</Link></li>
            </ul>
        </nav>}

        <div className="flex items-center gap-4 md:gap-8">
            <nav>
                <ul className="flex gap-4 md:gap-8">
                    <li><a className="block first:w-7 first:h-7" href="https://linkedin.com/in/victoriaoyelola" aria-label="Link to Oyelola Victoria's LinkedIn profile" target="_blank">{logos.linkedin}</a></li>
                    <li><a className="block first:w-7 first:h-7" href="https://github.com/VriaA" aria-label="Link to Oyelola Victoria's GitHub profile" target="_blank" >{logos.github}</a></li>
                </ul>
            </nav>

            <button type="button" className="flex flex-col gap-[5px] lg:hidden" onClick={toggleMobileNavMenuVisibility} aria-label="Navigation menu button">
                <span className="w-5 h-[3px] bg-off-white rounded"></span>
                <span className="w-5 h-[3px] bg-off-white rounded"></span>
                <span className="w-5 h-[3px] bg-off-white rounded"></span>
            </button>
        </div>

    </header >
}