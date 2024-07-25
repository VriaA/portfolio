import { createContext, ReactNode } from "react";
import { useViewport, TViewport } from "@/hooks/useviewport";

export type TAppContext = {
    viewport: TViewport
}

export const AppContext = createContext<TAppContext | null>(null)

export default function AppContextProvider({ children }: { children: ReactNode }): JSX.Element {
    const [viewport] = useViewport()

    return (
        <AppContext.Provider value={{ viewport }}>
            {children}
        </AppContext.Provider>
    )
}