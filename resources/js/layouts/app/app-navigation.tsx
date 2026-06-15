import { useState } from "react";
import {
    Home,
    LayoutDashboard,
    List,
    Menu,
    Phone,
    Trees,
    X,
} from "lucide-react";
import { Link } from "@inertiajs/react";
import { availabilityList, home, trees, visit } from "@/routes";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/app/wrapper.tsx";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCurrentUrl } from "@/hooks/use-current-url";

const links = [
    { id: "home", label: "Home", icon: Home, href: home.url() },
    { id: "trees", label: "Trees Directory", icon: Trees, href: trees.url() },
    {
        id: "availability-list",
        label: "Availability List",
        icon: List,
        href: availabilityList.url(),
    },
    {
        id: "contact-us",
        label: "Contact & Visit",
        icon: Phone,
        href: visit.url(),
    },
];

export default function AppNavigation() {
    const { isCurrentUrl, isCurrentOrParentUrl } = useCurrentUrl();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-40 transition-colors duration-300 print:hidden">
            <Wrapper
                as={`header`}
                className=" py-2.5 flex flex-col md:flex-row items-center justify-between gap-4"
            >
                <div className="flex items-center justify-between w-full md:w-auto">
                    {/* Logo wrapped in Inertia Link */}
                    <Link
                        prefetch={true}
                        href={home.url()}
                        className="flex items-center gap-2.5 cursor-pointer group"
                    >
                        <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95 duration-200">
                            <Trees className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h1 className="font-geist text-3xl font-black tracking-tighter text-primary uppercase leading-none">
                                Prime Trees
                            </h1>
                        </div>
                    </Link>

                    {/* Mobile Menu Toggle Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="p-2 rounded-xl border border-border bg-card text-foreground hover:bg-muted focus:outline-hidden transition-all duration-200"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="size-5 animate-in spin-in-90 duration-200" />
                            ) : (
                                <Menu className="size-5 animate-in fade-in duration-200" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation Tabs */}
                <nav
                    aria-label="Primary"
                    className="hidden items-center gap-1 rounded-full border border-border/60    bg-card px-2 py-2  md:flex"
                >
                    {links.map(({ id, label, icon: Icon, href }) => {
                        const isActive =
                            href === home.url()
                                ? isCurrentUrl(href)
                                : isCurrentOrParentUrl(href);
                        return (
                            <Link
                                prefetch={true}
                                key={id}
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide transition-all ${
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-foreground/60 hover:bg-muted hover:text-foreground"
                                }`}
                            >
                                <Icon className="h-4 w-4" />
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop Right Navigation Elements */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                </div>
            </Wrapper>

            {/* Mobile Dropdown Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 space-y-3 flex flex-col">
                        {links.map(({ id, label, icon: Icon, href }) => {
                            const isActive =
                                href === home.url()
                                    ? isCurrentUrl(href)
                                    : isCurrentOrParentUrl(href);
                            return (
                                <Link
                                    prefetch={true}
                                    key={id}
                                    href={href}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-wide transition-colors ${
                                        isActive
                                            ? "bg-primary/10 text-primary"
                                            : "text-foreground/60 hover:bg-muted hover:text-foreground"
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </Link>
                            );
                        })}
                        <hr className="border-border/60" />
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row justify-between items-center w-full px-2 py-1">
                                <span className="text-xs font-mono font-bold uppercase text-muted-foreground">
                                    Appearance
                                </span>
                                <ThemeToggle />
                            </div>
                            <Button
                                asChild
                                size="sm"
                                className="w-full justify-center font-semibold uppercase tracking-wider font-mono text-xs"
                            >
                                <a href="/admin">
                                    <LayoutDashboard className="size-4 mr-2" />
                                    Admin Panel
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

AppNavigation.displayName = "AppNavigation";
