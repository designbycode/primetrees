import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(href: any): string {
    if (typeof href === "string") {
        return href;
    }
    if (href && typeof href.toString === "function") {
        return href.toString();
    }
    return String(href);
}
