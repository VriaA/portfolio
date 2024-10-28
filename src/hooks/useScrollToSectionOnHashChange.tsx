import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToSectionOnHashChange(): void {
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) return

        const elementId = location.hash.split('#')[1]
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
    }, [location.hash])
}