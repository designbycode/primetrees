import React from "react";
import { cn } from "@/lib/utils";

type WrapperElement = "div" | "nav" | "section" | "header" | "footer";

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
    as?: WrapperElement;
    children: React.ReactNode;
}

export default function Wrapper({
    as: Component = "div",
    className,
    children,
    ...props
}: WrapperProps) {
    return (
        <Component
            className={cn(
                "mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8",
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

Wrapper.displayName = "Wrapper";
