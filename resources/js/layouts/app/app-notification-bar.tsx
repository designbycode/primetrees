import { MapPin } from "lucide-react";

export default function AppNotificationBar() {
    return (
        <>
            {/* Premium Top Navigation Announcement */}
            <div className="bg-primary text-primary-foreground border-b border-primary-foreground/10 text-[10px] sm:text-xs font-mono py-2.5 px-4 text-center flex items-center justify-center gap-1.5 uppercase tracking-widest leading-none print:hidden">
                <MapPin className="w-3.5 h-3.5 animate-pulse stroke-1" />
                <span>
                    Mistico Equestrian Centre, R312, Suid-Agter-Paarl Rd, Paarl,
                    7630
                </span>
            </div>
        </>
    );
}

AppNotificationBar.displayName = "AppNotificationBar";
