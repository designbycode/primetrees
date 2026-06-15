import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/app/hero.tsx";
import Wrapper from "@/components/app/wrapper.tsx";
import { GridFeatureSpotlight } from "@/components/app/grid-feature-spotlight.tsx";
import { BentoCard, container } from "@/components/app/bento-card";
import { motion } from "motion/react";
import {
    ArrowRight,
    Award,
    Info,
    Layers,
    MapPin,
    Sparkles,
    Trees,
    Truck,
} from "lucide-react";
import { Link } from "@inertiajs/react";
import { trees, visit } from "@/routes";
import { Button } from "@/components/ui/button";
import nurseryImage from "@/../images/prime-trees-wholesale-tree-nursery.jpg";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Featured Species Spotlight Bento Grid */}
            <Wrapper className="py-6">
                <div className="mb-6">
                    <span className="text-primary text-xs font-mono font-bold tracking-wider uppercase">
                        • Botanical Highlights
                    </span>
                    <h3 className="text-3xl md:text-5xl font-geist font-black tracking-tighter uppercase text-foreground mt-1">
                        Nursery Spotlight
                    </h3>
                </div>
                <GridFeatureSpotlight />
            </Wrapper>

            {/* Why Prime Trees / Strengths Bento Grid */}
            <Wrapper className="py-12 pb-24">
                <div className="mb-8">
                    <span className="text-primary text-xs font-mono font-bold tracking-wider uppercase">
                        • Wholesale Standards
                    </span>
                    <h3 className="text-3xl md:text-5xl font-geist font-black tracking-tighter uppercase text-foreground mt-1">
                        The Prime Trees Difference
                    </h3>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="group/grid grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5"
                >
                    {/* Consistent Quality & Uniformity */}
                    <BentoCard className="md:col-span-2 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                Quality Standards
                            </span>
                            <Award className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                        </div>

                        <div className="mt-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h4 className="font-sans text-xl font-bold tracking-tight text-foreground">
                                    Consistent Quality, Guaranteed Uniformity
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                    Each batch is meticulously matched for size,
                                    shape, and root health, ensuring your
                                    landscaping project looks cohesive and
                                    balanced from day one. Since launching in
                                    2014, we have built a reputation for
                                    dependable supply and consistently high
                                    standards across every order.
                                </p>
                            </div>

                            {/* Uniformity Visual representation */}
                            <div className="mt-6 flex justify-around items-end h-14 bg-muted/30 border border-border/50 rounded-xl p-2.5">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center gap-1 group-hover/grid:scale-105 transition-transform duration-300"
                                    >
                                        <div className="relative flex items-center justify-center">
                                            <Trees className="size-6 text-primary" />
                                            <span className="absolute -top-1 -right-1 size-2.5 bg-emerald-600 rounded-full border border-background flex items-center justify-center text-[6px] text-white">
                                                ✓
                                            </span>
                                        </div>
                                        <span className="text-[0.55rem] font-mono font-bold text-muted-foreground">
                                            Match {i}
                                        </span>
                                    </div>
                                ))}
                                <div className="text-right flex flex-col justify-center border-l border-border/60 pl-3">
                                    <span className="text-xs font-mono font-bold text-primary">
                                        100% MATCHED
                                    </span>
                                    <span className="text-[0.6rem] text-muted-foreground font-sans">
                                        For Caliper & Canopy
                                    </span>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Bruce Stewart - Passion */}
                    <BentoCard className="md:col-span-1 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                Founder & Expertise
                            </span>
                            <Sparkles className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                        </div>

                        <div className="mt-4 flex flex-col justify-between h-full">
                            <div>
                                <h4 className="font-sans text-xl font-bold tracking-tight text-foreground">
                                    A Passion for Trees
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                    Prime Trees was founded by Bruce Stewart, a
                                    horticulturalist with over 25 years of
                                    hands-on experience growing premium trees.
                                    Bruce&apos;s deep understanding of
                                    cultivation and attention to detail sets the
                                    quality standard.
                                </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-2.5">
                                <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-geist font-black text-xs">
                                    BS
                                </div>
                                <div className="leading-tight">
                                    <span className="block text-[0.7rem] uppercase tracking-wide text-foreground font-bold">
                                        Bruce Stewart
                                    </span>
                                    <span className="text-[0.65rem] text-muted-foreground font-mono">
                                        Founder / Horticulturalist
                                    </span>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* End to End Delivery */}
                    <BentoCard className="md:col-span-1 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                Logistics
                            </span>
                            <Truck className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                        </div>

                        <div className="mt-4 flex flex-col justify-between h-full">
                            <div>
                                <h4 className="font-sans text-xl font-bold tracking-tight text-foreground">
                                    End-to-End Delivery
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                    Transporting large mature trees safely takes
                                    experience. Our dedicated transport and
                                    delivery service handles loading, secure
                                    hauling, and precise crane placement on-site
                                    — minimizing stress on the plant and project
                                    delays.
                                </p>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-[0.65rem] font-mono text-primary font-bold bg-primary/5 p-2 rounded-lg border border-primary/10">
                                <span className="relative flex h-1.5 w-1.5 shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                                </span>
                                HYDRAULIC PLACEMENT ACTIVE
                            </div>
                        </div>
                    </BentoCard>

                    {/* Visit Paarl Farm Nursery */}
                    <BentoCard className="md:col-span-2 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all">
                        <img
                            src={nurseryImage}
                            alt="Prime Trees wholesale tree nursery in Paarl"
                            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 group-hover:scale-[1.02] group-hover:opacity-35 transition-all duration-500"
                        />
                        <div className="absolute inset-0 -z-10 bg-linear-to-b from-card/30 via-card/80 to-card backdrop-blur-[1px]" />

                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                Nursery Tour
                            </span>
                            <MapPin className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                        </div>

                        <div className="mt-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h4 className="font-sans text-xl font-bold tracking-tight text-foreground">
                                    Visit Our Farm Nursery in Paarl
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                    Set against the stunning mountain backdrop
                                    of the Paarl region, Mistico Farm is home to
                                    the Prime Trees nursery — a thriving
                                    20-hectare operation with more than 80,000
                                    mature trees growing on-site. Visitors are
                                    welcome to tour the farm and see the scale
                                    and quality firsthand.
                                </p>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3 text-xs font-mono font-bold text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Trees className="size-3 text-primary" />{" "}
                                        20+ Hectares
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Layers className="size-3 text-primary" />{" "}
                                        80,000+ Stock
                                    </span>
                                </div>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-primary/90 text-primary-foreground hover:bg-primary font-mono text-[0.65rem] font-bold uppercase tracking-wider h-8 rounded-lg border-none cursor-pointer"
                                >
                                    <Link href={visit.url()}>
                                        Book Tour{" "}
                                        <ArrowRight className="size-3 ml-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Quick Wholesale Target Specs */}
                    <BentoCard className="md:col-span-2 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                Sizing Catalog
                            </span>
                            <Info className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                        </div>

                        <div className="mt-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h4 className="font-sans text-xl font-bold tracking-tight text-foreground">
                                    From 100L Specimens to Mature 2000L Giants
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                    We cater specifically to landscape
                                    architects, property developers, schools,
                                    contractors, and municipalities. Our stock
                                    ranges from compact starter specimens to
                                    fully mature canopy-instant trees.
                                </p>
                            </div>

                            {/* Size list visualizer */}
                            <div className="mt-4 grid grid-cols-4 gap-2 text-center items-center">
                                {[
                                    { label: "100L", desc: "Compact" },
                                    { label: "200L", desc: "Established" },
                                    { label: "500L", desc: "Specimen" },
                                    { label: "2000L", desc: "Mature" },
                                ].map((size) => (
                                    <div
                                        key={size.label}
                                        className="bg-muted/40 border border-border/60 rounded-xl p-2 flex flex-col justify-center hover:border-primary/30 transition-all"
                                    >
                                        <span className="text-sm font-geist font-black text-primary">
                                            {size.label}
                                        </span>
                                        <span className="text-[0.55rem] text-muted-foreground mt-0.5 leading-tight font-sans">
                                            {size.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
                                <span className="text-[0.65rem] font-mono text-muted-foreground">
                                    Wholesale Inventory Sizing Guide
                                </span>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-primary/90 text-primary-foreground hover:bg-primary font-mono text-[0.65rem] font-bold uppercase tracking-wider h-8 rounded-lg border-none cursor-pointer"
                                >
                                    <Link href={trees.url()}>
                                        View Stock{" "}
                                        <ArrowRight className="size-3 ml-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </BentoCard>
                </motion.div>
            </Wrapper>
        </>
    );
}

Home.layout = (page: React.ReactNode) => (
    <AppLayout title="Home">{page}</AppLayout>
);
