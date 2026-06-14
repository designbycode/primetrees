"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 120, damping: 18 },
    },
};

export const container: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    /** disable the built-in fadeUp variant (when parent controls it) */
    noVariant?: boolean;
}

export function BentoCard({ children, className, noVariant }: BentoCardProps) {
    return (
        <motion.div
            variants={noVariant ? undefined : fadeUp}
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-border bg-card p-6",
                "shadow-sm transition-colors",
                className,
            )}
        >
            {children}
        </motion.div>
    );
}
