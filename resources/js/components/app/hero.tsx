import Wrapper from "@/components/app/wrapper.tsx";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { trees, visit } from "@/routes";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
    return (
        <Wrapper>
            <div className="mb-14 text-left w-full pt-6 md:pt-10">
                <div className="flex items-center gap-1.5 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-primary text-xs font-mono font-bold tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        <ShieldCheck className="size-3.5" /> Wholesale Trees &
                        Shrubs in Bulk • Cape Town & Paarl
                    </span>
                </div>

                {/* Big Bold Typography */}
                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[95px] font-geist font-black tracking-tighter uppercase leading-[0.85] text-foreground wrap-break-word">
                    NATURE&apos;S{" "}
                    <span className="text-primary">SCULPTURE</span>
                    <br />
                    BORN <span>FOR LANDSCAPES</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
                    <div className="lg:col-span-8">
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans max-w-3xl">
                            Prime Trees grows and supplies large volumes of
                            uniform, top-quality trees and shrubs — from compact
                            100L specimens to mature 2000L trees. We supply
                            landscape architects, contractors, property
                            developers, schools, and municipalities at
                            competitive wholesale prices, while also offering
                            mature 2000L trees directly to the public.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Button
                                asChild
                                size="lg"
                                className="h-12 px-6 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/10 flex items-center gap-2 group transition-all active:scale-95 cursor-pointer border-none"
                            >
                                <Link href={trees.url()}>
                                    Explore Species Directory
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="h-12 px-6 rounded-xl font-semibold bg-background border border-border text-foreground hover:bg-muted transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                            >
                                <Link
                                    href={visit.url()}
                                    className="flex items-center gap-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    Contact Sales Team
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Stats Grid inside Hero */}
                </div>
            </div>
        </Wrapper>
    );
}
