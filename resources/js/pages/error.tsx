import { Link } from "@inertiajs/react";
import {
    AlertTriangle,
    Clock,
    HelpCircle,
    Home,
    Lock,
    RefreshCw,
    Trees,
    Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import Wrapper from "@/components/app/wrapper.tsx";

interface ErrorPageProps {
    status: number;
}

export default function ErrorPage({ status }: ErrorPageProps) {
    const errorDetails = getErrorDetails(status);
    const IconComponent = errorDetails.icon;

    // Refresh page function
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <Wrapper className="flex-1 flex items-center justify-center px-6 py-16 md:py-24 min-h-[60vh]">
            <div className="max-w-2xl w-full text-center flex flex-col items-center relative z-10">
                {/* Animated Error Code Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative mb-6"
                >
                    <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl -m-4" />
                    <div className="relative font-geist text-8xl md:text-9xl font-black tracking-tighter text-primary/15 select-none leading-none">
                        {status}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-lg dark:bg-card/80 dark:backdrop-blur-md">
                            <IconComponent className="size-12 text-primary animate-pulse" />
                        </div>
                    </div>
                </motion.div>

                {/* Title & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="space-y-4 max-w-lg"
                >
                    <h2 className="text-3xl md:text-4xl font-geist font-black tracking-tight uppercase text-foreground">
                        {errorDetails.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {errorDetails.description}
                    </p>
                </motion.div>

                {/* Quick Navigation / Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
                >
                    <Button
                        asChild
                        variant="default"
                        size="lg"
                        className="w-full sm:w-auto shadow-sm group cursor-pointer"
                    >
                        <Link href="/">
                            <Home className="size-4 mr-1.5 transition-transform group-hover:-translate-y-0.5" />
                            Back to Homepage
                        </Link>
                    </Button>

                    {/* Show refresh button for server/timeout errors */}
                    {shouldShowRefresh(status) ? (
                        <Button
                            onClick={handleRefresh}
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto cursor-pointer"
                        >
                            <RefreshCw className="size-4 mr-1.5" />
                            Refresh Page
                        </Button>
                    ) : (
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto cursor-pointer"
                        >
                            <Link href="/trees">
                                <Trees className="size-4 mr-1.5" />
                                Explore Trees
                            </Link>
                        </Button>
                    )}
                </motion.div>

                {/* Additional Sitemap links to help users */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 pt-8 border-t border-border/60 w-full max-w-md"
                >
                    <p className="text-xs uppercase font-mono tracking-wider text-muted-foreground/80 mb-3">
                        Or try one of these groves:
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono">
                        <Link
                            href="/trees"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Trees Directory
                        </Link>
                        <span className="text-border">•</span>
                        <Link
                            href="/availability-list"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Availability List
                        </Link>
                        <span className="text-border">•</span>
                        <Link
                            href="/visit"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Contact & Visit
                        </Link>
                    </div>
                </motion.div>
            </div>
        </Wrapper>
    );
}

// Helper functions
function getErrorDetails(status: number) {
    const details: Record<
        number,
        { title: string; description: string; icon: React.ComponentType<any> }
    > = {
        401: {
            title: "Grove Locked",
            description:
                "This path is reserved. Please authenticate or obtain authorization credentials to inspect this section of Prime Trees.",
            icon: Lock,
        },
        403: {
            title: "Access Forbidden",
            description:
                "You do not have permission to view this resource. Accessing this part of our nursery canopy is restricted.",
            icon: Lock,
        },
        404: {
            title: "Lost in the Forest",
            description:
                "We couldn't find the tree or page you were looking for. It may have been relocated, pruned, or has not yet been planted.",
            icon: Trees,
        },
        419: {
            title: "Session Expired",
            description:
                "Your connection was dormant for too long. Refresh the page to re-establish a secure link with our server.",
            icon: Clock,
        },
        500: {
            title: "Storm in the Canopy",
            description:
                "Our servers encountered an unexpected storm. Our arborists are working to diagnose and repair the server connection.",
            icon: AlertTriangle,
        },
        503: {
            title: "Pruning in Progress",
            description:
                "Prime Trees is temporarily offline for essential landscape maintenance. We will be back shortly with a fresher canopy.",
            icon: Wrench,
        },
    };

    return (
        details[status] || {
            title: "Unexpected Weather",
            description: `We encountered an unexpected error (code ${status}). Please navigate back to home or contact support if the issue persists.`,
            icon: HelpCircle,
        }
    );
}

function shouldShowRefresh(status: number): boolean {
    return [419, 500, 503].includes(status);
}

ErrorPage.layout = (page: React.ReactNode) => {
    const status = (page as any)?.props?.status || 500;
    return <AppLayout title={`${status} Error`}>{page}</AppLayout>;
};
