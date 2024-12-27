import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useSplitText from "../useSplitText";

export default function useAnimateHomeHero(): void {
    const { hasSplitText } = useSplitText(".name", "words");

    useGSAP(
        () => {
            if (!hasSplitText) return;
            const heroTl = gsap.timeline({ delay: 0.5 });
            heroTl.to(".hero-element", {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
                ease: "back.out",
            });
            heroTl.to(
                ".name",
                {
                    opacity: 1,
                    duration: "0",
                },
                "-=.2"
            );
            heroTl.to(".name .word", {
                y: 0,
                filter: "blur(0)",
                opacity: 1,
                ease: "back.out",
                duration: "1",
                stagger: 0.2,
            });
            heroTl.to(
                "#work-status",
                { opacity: 1, ease: "back.out", duration: 2 },
                "+=.2"
            );
        },
        { dependencies: [hasSplitText], revertOnUpdate: true }
    );
}
