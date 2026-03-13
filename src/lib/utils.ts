import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { useEffect, useState } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const useLineAnimation = (delay = 600) => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setExpanded(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return expanded;
};