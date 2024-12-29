import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

export default function useAnimateHeading() {
    const location = useLocation();

    useGSAP(
        () => {
            const headings = document.querySelectorAll(".heading");
            if (headings.length <= 0) return;
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
        },
        { dependencies: [location.pathname], revertOnUpdate: true }
    );
}
