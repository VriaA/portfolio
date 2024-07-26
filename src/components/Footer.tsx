import logos from "@/data/logos"

export default function Footer(): JSX.Element {
    return (
        <footer className="pt-10 md:pt-20">
            <p><b>©</b><a href="https://linkedin.com/in/victoriaoyelola">Oyelola Victoria.</a> All rights reserved.</p>
            <ul className="flex gap-4 md:gap-8">
                <li><a className="block first:w-7 first:h-7" href="https://linkedin.com/in/victoriaoyelola" target="_blank">{logos.linkedin}</a></li>
                <li><a className="block first:w-7 first:h-7" href="https://github.com/VriaA" target="_blank" >{logos.github}</a></li>
            </ul>
            <p>Designed & developed by <a href="https://github.com/VriaA">Oyelola Victoria.</a></p>
        </footer>
    )
}