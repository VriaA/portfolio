import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function useAnimateHeading() {
    useGSAP(() => {
        const headings = document.querySelectorAll(".heading");
        headings.forEach((heading) => {
            gsap.to(heading, {
                scrollTrigger: {
                    trigger: heading,
                    start: "top 80%",
                },
                scale: 1,
                opacity: 1,
                duration: 0.5,
            });
        });
    }, []);
}
