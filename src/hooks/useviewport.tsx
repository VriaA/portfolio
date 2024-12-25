import { useState, useEffect } from "react";

export type TViewport = {
    isPc: boolean;
    isTablet: boolean;
    isMobile: boolean;
    isScreenTall: boolean;
    canStick: boolean;
};

export function useViewport(): [TViewport] {
    const [viewport, setViewport] = useState<TViewport>({
        isPc: window.innerWidth >= 1024,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isMobile: window.innerWidth < 768,
        isScreenTall: window.innerHeight >= 600,
        canStick:
            (window.innerHeight >= 700 && window.innerWidth < 1024) ||
            window.innerWidth >= 1024,
    });

    useEffect(() => {
        function updateViewport(): void {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const newViewport: TViewport = {
                isPc: width >= 1024,
                isTablet: width >= 768 && width < 1024,
                isMobile: width < 768,
                isScreenTall: height >= 600,
                canStick:
                    (window.innerHeight >= 800 && window.innerWidth < 1024) ||
                    window.innerWidth >= 1024,
            };
            setViewport((prevViewport) =>
                prevViewport.isPc !== newViewport.isPc ||
                prevViewport.isTablet !== newViewport.isTablet ||
                prevViewport.isMobile !== newViewport.isMobile ||
                prevViewport.isScreenTall !== newViewport.isScreenTall
                    ? newViewport
                    : prevViewport
            );
        }
        window.addEventListener("resize", updateViewport);
        updateViewport();
        return () => window.removeEventListener("resize", updateViewport);
    }, []);
    return [viewport];
}
