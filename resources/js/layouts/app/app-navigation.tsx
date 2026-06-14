import {useEffect, useState} from "react";
import {BookOpen, Globe, Home, LayoutDashboard, LineChart, Menu, Phone, Trees, X} from "lucide-react";
import {Link} from "@inertiajs/react";
import {home} from "@/routes";
import {Button} from "@/components/ui/button";
import Wrapper from "@/components/app/wrapper.tsx";

const links = [
    {id: "home", label: "Home", icon: Home, href: home.url()},
    {id: "trees", label: "Trees", icon: Trees, href: home.url()},
    {id: "availability-list", label: "Availability List", icon: BookOpen, href: "#planner"},
    {id: "lab", label: "Lab", icon: LineChart, href: "#lab"},
    {id: "contact-us", label: "Contact Us", icon: Phone, href: "#chronicles"},
];

export default function AppNavigation() {
    const [active, setActive] = useState("explorer");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleHashChange = () => {
                const hash = window.location.hash.replace("#", "");
                if (links.some(l => l.id === hash)) {
                    setActive(hash);
                }
            };

            // Set initial state
            handleHashChange();

            window.addEventListener("hashchange", handleHashChange);
            return () => window.removeEventListener("hashchange", handleHashChange);
        }
    }, []);

    return (
        <div
            className="border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-40 transition-colors duration-300">
            <Wrapper as={`header`}
                     className=" py-2.5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center justify-between w-full md:w-auto">
                    {/* Logo wrapped in Inertia Link */}
                    <Link href={home.url()} className="flex items-center gap-2.5 cursor-pointer group">
                        <div
                            className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95 duration-200">
                            <Trees className="w-5 h-5 text-primary"/>
                        </div>
                        <div>
                            <h1 className="font-sans text-4xl font-black tracking-tight text-primary uppercase leading-none">
                                PrimeTrees
                            </h1>
                        </div>
                    </Link>

                    {/* Mobile Menu Toggle Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-xl border border-border bg-card text-foreground hover:bg-muted focus:outline-hidden transition-all duration-200"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="size-5 animate-in spin-in-90 duration-200"/>
                            ) : (
                                <Menu className="size-5 animate-in fade-in duration-200"/>
                            )}
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation Tabs */}
                <nav
                    aria-label="Primary"
                    className="hidden items-center gap-1 rounded-full border border-border/60    bg-card px-2 py-2  md:flex"
                >
                    {links.map(({id, label, icon: Icon, href}) => {
                        const isActive = active === id;
                        return (
                            <Link
                                key={id}
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => setActive(id)}
                                className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide transition-all ${
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-foreground/60 hover:bg-muted hover:text-foreground"
                                }`}
                            >
                                <Icon className="h-4 w-4"/>
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop Right Navigation Elements */}
                <div className="hidden md:flex items-center gap-4">
                    <span
                        className="font-mono text-[10px] text-muted-foreground border border-border px-3 py-1.5 rounded-full flex items-center gap-1.5 font-bold uppercase">
                        <Globe className="w-3.5 h-3.5 text-primary"/> REGISTRY DATA: CONCURRENT
                    </span>

                </div>
            </Wrapper>

            {/* Mobile Dropdown Navigation Menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 space-y-3 flex flex-col">
                        {links.map(({id, label, icon: Icon, href}) => {
                            const isActive = active === id;
                            return (
                                <a
                                    key={id}
                                    href={href}
                                    onClick={() => {
                                        setActive(id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-wide transition-colors ${
                                        isActive
                                            ? "bg-primary/10 text-primary"
                                            : "text-foreground/60 hover:bg-muted hover:text-foreground"
                                    }`}
                                >
                                    <Icon className="h-4 w-4"/>
                                    {label}
                                </a>
                            );
                        })}
                        <hr className="border-border/60"/>
                        <div className="flex flex-col gap-3">
                            <span
                                className="font-mono text-[10px] text-muted-foreground border border-border px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 font-bold uppercase w-full">
                                <Globe className="w-3.5 h-3.5 text-primary"/> REGISTRY DATA: CONCURRENT
                            </span>
                            <Button asChild size="sm"
                                    className="w-full justify-center font-semibold uppercase tracking-wider font-mono text-xs">
                                <a href="/admin">
                                    <LayoutDashboard className="size-4 mr-2"/>
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
