import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const pageHeaderVariants = cva(
    "text-left w-full pt-4",
    {
        variants: {
            size: {
                lg: "mb-10",
                sm: "mb-6",
            },
        },
        defaultVariants: {
            size: "lg",
        },
    }
);

const titleVariants = cva(
    "font-geist font-black tracking-tighter uppercase leading-[0.9] text-foreground wrap-break-word",
    {
        variants: {
            size: {
                lg: "text-4xl sm:text-6xl lg:text-7xl",
                sm: "text-3xl md:text-5xl",
            },
        },
        defaultVariants: {
            size: "lg",
        },
    }
);

const descriptionVariants = cva(
    "text-muted-foreground mt-4 max-w-3xl leading-relaxed font-sans",
    {
        variants: {
            size: {
                lg: "text-base",
                sm: "text-sm",
            },
        },
        defaultVariants: {
            size: "lg",
        },
    }
);

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface PageHeaderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
        VariantProps<typeof pageHeaderVariants> {
    as?: HeadingTag;
    badgeText?: string;
    badgeIcon?: React.ComponentType<{ className?: string }> | null;
    title: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
}

export function PageHeader({
    as: TitleTag = "h1",
    badgeText,
    badgeIcon: BadgeIcon = ShieldCheck,
    title,
    description,
    actions,
    size = "lg",
    className,
    ...props
}: PageHeaderProps) {
    const leftContent = (
        <div className="text-left max-w-3xl">
            {badgeText && (
                <div className="flex items-center gap-1.5 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-primary text-xs font-mono font-bold tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {BadgeIcon && <BadgeIcon className="size-3.5" />}
                        {badgeText}
                    </span>
                </div>
            )}

            <TitleTag className={cn(titleVariants({ size }))}>
                {title}
            </TitleTag>

            {description && (
                <p className={cn(descriptionVariants({ size }))}>
                    {description}
                </p>
            )}
        </div>
    );

    if (actions) {
        return (
            <div
                className={cn(
                    pageHeaderVariants({ size }),
                    "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
                    className
                )}
                {...props}
            >
                {leftContent}
                <div className="flex shrink-0">
                    {actions}
                </div>
            </div>
        );
    }

    return (
        <div className={cn(pageHeaderVariants({ size }), className)} {...props}>
            {leftContent}
        </div>
    );
}

PageHeader.displayName = "PageHeader";
