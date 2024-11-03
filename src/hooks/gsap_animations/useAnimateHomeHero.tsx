import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function useAnimateHomeHero(): void {

    useGSAP(() => {
        const heroTl = gsap.timeline({ delay: .5 })
        heroTl.to('.hero-element', { y: 0, opacity: 1, duration: .5, stagger: .2, ease: "back.out" })
        heroTl.to('.name', { y: 0, filter: "blur(0)", opacity: 1, ease: "back.out", duration: '1', stagger: .2 }, "-=.2")
        heroTl.to('#work-status', { opacity: 1, ease: "back.out", duration: 2 }, "+=.2")
    })
}