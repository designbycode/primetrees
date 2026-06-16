import { Head, usePage } from "@inertiajs/react";
import React, { Suspense, useEffect, useState } from "react";
import AppNavigation from "@/layouts/app/app-navigation.tsx";
import AppFooter from "@/layouts/app/app-footer.tsx";
import AppNotificationBar from "@/layouts/app/app-notification-bar.tsx";

// Lazy load the MapSection component to prevent SSR errors (Leaflet depends on window)
const MapSection = React.lazy(() => import("@/components/app/map-section.tsx"));

interface AppLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function AppLayout({ children, title }: AppLayoutProps) {
    const [isMounted, setIsMounted] = useState(false);
    const { component } = usePage();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const isErrorPage = component === "error";

    return (
        <>
            <Head
                title={
                    title
                        ? `${title} - PrimeTrees`
                        : "PrimeTrees - Premium Forestry & Tree Care"
                }
            />
            {/* Subtle forest theme glow inside layout */}
            <div className="fixed    inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[150px]" />
            </div>

            <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/50 selection:text-white flex flex-col">
                <AppNotificationBar />
                <AppNavigation />

                {/* Main Content */}
                <main className="flex-1 w-full">{children}</main>

                {/* Map Section */}
                {isMounted && !isErrorPage && (
                    <div className="print:hidden">
                        <Suspense
                            fallback={
                                <div className="w-full bg-muted/10 py-16 px-6 border-t border-border animate-pulse">
                                    <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                                        <div className="lg:col-span-5 h-100 bg-muted rounded-2xl"></div>
                                        <div className="lg:col-span-7 h-100 bg-muted rounded-2xl"></div>
                                    </div>
                                </div>
                            }
                        >
                            <MapSection />
                        </Suspense>
                    </div>
                )}

                {/* Footer */}
                <div className="print:hidden">
                    <AppFooter />
                </div>
            </div>
        </>
    );
}
