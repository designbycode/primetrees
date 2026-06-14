
import { Head } from '@inertiajs/react';
import AppNavigation from "@/layouts/app/app-navigation.tsx";
import AppFooter from "@/layouts/app/app-footer.tsx";
import AppNotificationBar from "@/layouts/app/app-notification-bar.tsx";


interface AppLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function AppLayout({ children, title }: AppLayoutProps) {


    return (
        <>
            <Head title={title ? `${title} - PrimeTrees` : 'PrimeTrees - Premium Forestry & Tree Care'} />

            <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/50 selection:text-white">
                <AppNotificationBar/>
                <AppNavigation />
                {/* Main Content */}

                <main className="flex-1 w-full">
                    {children}
                </main>

                {/* Footer */}
                <AppFooter/>
            </div>
        </>
    );
}
