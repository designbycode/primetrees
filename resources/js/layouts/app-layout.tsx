import { Head } from "@inertiajs/react";
import React, { useEffect, useState, Suspense } from "react";
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

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <Head
                title={
                    title
                        ? `${title} - PrimeTrees`
                        : "PrimeTrees - Premium Forestry & Tree Care"
                }
            />

            <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/50 selection:text-white flex flex-col">
                <AppNotificationBar />
                <AppNavigation />

                {/* Main Content */}
                <main className="flex-1 w-full">{children}</main>

                {/* Map Section */}
                {isMounted && (
                    <div className="print:hidden">
                        <Suspense
                            fallback={
                                <div className="w-full bg-muted/10 py-16 px-6 border-t border-border animate-pulse">
                                    <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                                        <div className="lg:col-span-5 h-[400px] bg-muted rounded-2xl"></div>
                                        <div className="lg:col-span-7 h-[400px] bg-muted rounded-2xl"></div>
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
