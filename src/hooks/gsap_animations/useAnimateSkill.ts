import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function useAnimateSkills() {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skill",
                start: "top 80%",
                toggleActions: "play pause resume none",
            },
        });
        tl.to(".skill", {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.1,
        });
    }, []);
}
