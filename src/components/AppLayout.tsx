import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "@/components/Header"
import AppContextProvider from "@/contexts/AppContext"
import Footer from "@/components/Footer"
import useScrollToSectionOnHashChange from "@/hooks/useScrollToSectionOnHashChange"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function AppLayout() {
    const location = useLocation()
    useScrollToSectionOnHashChange()
    gsap.registerPlugin(useGSAP);

    useEffect(() => {
        if (location.hash) return
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className="relative flex flex-col items-center w-full overflow-hidden bg-black px-5 md:px-20">
            <div className="absolute inset-0 mx-auto z-[1] left-[-1px] top-[-1px] min-w-[1440px] h-full site-bg"></div>
            <AppContextProvider>
                <Header />
                <main className="flex flex-col pt-20 w-full max-w-[1440px]">
                    <Outlet />
                </main>
                <Footer />
            </AppContextProvider>
        </div>
    )
}