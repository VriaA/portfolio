import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useSplitText from "../useSplitText";
import { useContext } from "react";
import { AppContext, TAppContext } from "@/contexts/AppContext";

export default function useAnimateExperience(): void {
    const { hasSplitText } = useSplitText(".experience", "words,chars");
    const { viewport } = useContext(AppContext) as TAppContext;
    useGSAP(
        () => {
            if (!hasSplitText) return;
            const letters = document.querySelectorAll(".experience .char");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".experience",
                    start: "top 40%",
                    scrub: viewport.isPc ? 2 : 5,
                    markers: false,
                },
            });

            tl.to(letters, {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: "sine",
            });
        },
        { dependencies: [hasSplitText], revertOnUpdate: true }
    );
}
