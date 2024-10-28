import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "@/components/Header"
import AppContextProvider from "@/contexts/AppContext"
import Footer from "@/components/Footer"
import useScrollToSectionOnHashChange from "@/hooks/useScrollToSectionOnHashChange"

export default function AppLayout() {
    const location = useLocation()
    useScrollToSectionOnHashChange()

    useEffect(() => {
        if (location.hash) return
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className="relative w-full overflow-hidden bg-black px-5 md:px-20">
            <div className="absolute inset-0 mx-auto z-[1] left-[-1px] top-[-1px] min-w-[1440px] h-full site-bg"></div>
            <AppContextProvider>
                <Header />
                <main className="flex flex-col gap-20 pt-20">
                    <Outlet />
                </main>
                <Footer />
            </AppContextProvider>
        </div>
    )
}