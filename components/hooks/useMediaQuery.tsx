import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false); // default false

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia(query);
        const handler = () => setMatches(mediaQuery.matches);

        // Initial check
        handler();

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);

    return matches;
}


export default useMediaQuery;
