"use client";

import { motion } from "motion/react";
import { Droplets, Leaf, Ruler, Sun, Globe, Sparkles, TrendingUp } from "lucide-react";
import { container, fadeUp } from "@/components/app/bento-card";
import maple from "@/../images/maple.png";
import leaves from "@/../images/leaves.png";
import forest from "@/../images/forest.png";
import field from "@/../images/field.png";
import mountains from "@/../images/mountains.png";

const facts = [
    { icon: Sun, label: "Light", value: "Partial shade" },
    { icon: Droplets, label: "Water", value: "Keep moist" },
    { icon: Ruler, label: "Height", value: "4–6 m" },
    { icon: Leaf, label: "Foliage", value: "Crimson red" },
];

export function GridFeatureSpotlight() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="group/grid grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
        >
            {/* Hero feature card */}
            <motion.div
                variants={fadeUp}
                className="group relative col-span-2 md:col-span-3 row-span-2 flex min-h-80 flex-col overflow-hidden rounded-3xl border-2 border-primary/40 bg-muted p-7 md:min-h-104"
            >
                {/* background image */}
                <img
                    src={maple}
                    alt="Japanese red maple foliage"
                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                {/* readability scrim that clears on hover */}
                <div className="absolute inset-y-0 left-0 right-0 -z-10 bg-linear-to-r from-muted via-muted/85 to-transparent backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-none group-hover:from-muted/70" />

                <div className="max-w-full md:max-w-[60%]">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                        <Leaf className="size-3" />
                        Featured species
                    </span>
                    <h3 className="mt-4 font-sans text-3xl font-black tracking-tighter text-foreground text-balance md:text-5xl">
                        Japanese Red Maple
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        <em className="font-medium text-foreground/80">
                            Acer palmatum
                        </em>{" "}
                        — a graceful ornamental prized for its fiery, lace-like
                        canopy through autumn.
                    </p>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3 pt-6 max-w-full md:max-w-[60%]">
                    {facts.map((f) => (
                        <div
                            key={f.label}
                            className="flex items-center gap-2.5"
                        >
                            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-background/70 text-primary backdrop-blur-sm">
                                <f.icon className="size-4" />
                            </span>
                            <span className="leading-tight">
                                <span className="block text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                                    {f.label}
                                </span>
                                <span className="text-sm font-medium text-foreground">
                                    {f.value}
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Climate resilience card */}
            <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
                {/* Background image */}
                <img
                    src={mountains}
                    alt="Mountain landscape"
                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-15 transition-all duration-500 group-hover:scale-105 group-hover:opacity-25"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-b from-card/30 via-card/75 to-card backdrop-blur-[1px] transition-all duration-500 group-hover:backdrop-blur-none" />

                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Hardiness
                    </span>
                    <Globe className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <div className="mt-4">
                    <div className="flex items-baseline gap-1.5">
                        <p className="font-sans text-4xl font-black tracking-tighter text-foreground">
                            5–8
                        </p>
                        <span className="text-xs font-medium text-muted-foreground">USDA Zones</span>
                    </div>
                    
                    {/* Visual Zone Slider */}
                    <div className="mt-3 relative h-1.5 w-full rounded-full bg-muted overflow-hidden">
                        {/* Highlights zones 5-8 */}
                        <div className="absolute left-[40%] right-[30%] h-full rounded-full bg-primary/80 transition-all duration-300 group-hover:bg-primary" />
                    </div>
                    <div className="mt-1 flex justify-between text-[0.65rem] text-muted-foreground/60 font-mono">
                        <span>Zone 1</span>
                        <span>Zone 11</span>
                    </div>

                    <p className="mt-3 text-xs leading-normal text-muted-foreground">
                        Thrives in temperate to cool-moderate climates.
                    </p>
                </div>
            </motion.div>

            {/* Named Cultivars card */}
            <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
                {/* Background image */}
                <img
                    src={leaves}
                    alt="Leaves background"
                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-15 transition-all duration-500 group-hover:scale-105 group-hover:opacity-25"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-b from-card/30 via-card/75 to-card backdrop-blur-[1px] transition-all duration-500 group-hover:backdrop-blur-none" />

                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Cultivars
                    </span>
                    <Sparkles className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <div className="mt-4">
                    <p className="font-sans text-4xl font-black tracking-tighter text-foreground">
                        120+
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground">
                        Named Varieties
                    </p>

                    {/* Stacked cultivar names as micro badges */}
                    <div className="mt-3 flex flex-wrap gap-1 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] font-medium text-foreground/80 border border-border/50">
                            Bloodgood
                        </span>
                        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] font-medium text-foreground/80 border border-border/50">
                            Sango Kaku
                        </span>
                        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] font-medium text-foreground/80 border border-border/50">
                            Deshojo
                        </span>
                    </div>

                    <p className="mt-3 text-xs leading-normal text-muted-foreground">
                        Wide range of leaf silhouettes and striking seasonal palettes.
                    </p>
                </div>
            </motion.div>

            {/* Canopy Reforestation Simulator card */}
            <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative col-span-2 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
                {/* Background image */}
                <img
                    src={forest}
                    alt="Dense forest background"
                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-20"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-card via-card/90 to-card/50 backdrop-blur-[1px]" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full items-center">
                    {/* Left: Info */}
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                Sim Map
                            </span>
                            <h4 className="mt-2 font-sans text-xl font-bold tracking-tight text-foreground">
                                Canopy Simulator
                            </h4>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                Position specimen trees onto a spatial grid to estimate carbon and oxygen offset values in real-time.
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[0.7rem] font-mono text-primary font-bold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            SIMULATOR ACTIVE
                        </div>
                    </div>

                    {/* Right: Micro Interactive Simulator Visualizer */}
                    <div className="relative flex items-center justify-center p-3 rounded-2xl bg-muted/50 border border-border/50 h-32 md:h-full">
                        {/* Dotted Grid Layout */}
                        <div className="grid grid-cols-4 gap-3">
                            {[...Array(16)].map((_, i) => {
                                const isActive = [1, 5, 6, 11, 14].includes(i);
                                return (
                                    <div
                                        key={i}
                                        className={`relative size-2.5 rounded-full transition-all duration-500 ${
                                            isActive
                                                ? "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)] scale-110"
                                                : "bg-foreground/15 group-hover:bg-foreground/25"
                                        }`}
                                    >
                                        {isActive && (
                                            <span className="absolute -inset-1 rounded-full border border-primary/40 animate-pulse" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {/* Connecting faint svg lines */}
                        <svg className="absolute inset-0 size-full pointer-events-none opacity-40">
                            <line x1="30%" y1="25%" x2="45%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="3" className="text-primary" />
                            <line x1="45%" y1="50%" x2="50%" y2="25%" stroke="currentColor" strokeWidth="1" strokeDasharray="3" className="text-primary" />
                            <line x1="45%" y1="50%" x2="70%" y2="75%" stroke="currentColor" strokeWidth="1" strokeDasharray="3" className="text-primary" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            {/* Growth Rate card */}
            <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
                {/* Background image */}
                <img
                    src={field}
                    alt="Fields"
                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-20"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-b from-card/30 via-card/75 to-card backdrop-blur-[1px] transition-all duration-500 group-hover:backdrop-blur-none" />

                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Growth
                    </span>
                    <Ruler className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <div className="mt-4">
                    <p className="font-sans text-4xl font-black tracking-tighter text-foreground">
                        Slow
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground">
                        20–30 cm / year
                    </p>

                    {/* Vertical growth progress representation */}
                    <div className="mt-4 flex items-end gap-3 justify-center h-12">
                        <div className="flex flex-col items-center gap-1 w-full">
                            <span className="text-[0.6rem] font-mono text-muted-foreground/80">Yr 1</span>
                            <div className="w-full h-3 rounded-t bg-muted group-hover:bg-primary/30 transition-colors duration-300" />
                        </div>
                        <div className="flex flex-col items-center gap-1 w-full">
                            <span className="text-[0.6rem] font-mono text-muted-foreground/80">Yr 5</span>
                            <div className="w-full h-7 rounded-t bg-muted/80 group-hover:bg-primary/60 transition-colors duration-300" />
                        </div>
                        <div className="flex flex-col items-center gap-1 w-full">
                            <span className="text-[0.6rem] font-mono text-muted-foreground/80">Yr 10</span>
                            <div className="w-full h-12 rounded-t bg-primary shadow-[0_0_6px_rgba(var(--primary),0.4)]" />
                        </div>
                    </div>

                    <p className="mt-3 text-xs leading-normal text-muted-foreground">
                        Ideal for container planting and small city gardens.
                    </p>
                </div>
            </motion.div>

            {/* Carbon Sequestration / Eco Index card */}
            <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        CO₂ Offset
                    </span>
                    <TrendingUp className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <div className="mt-4">
                    <div className="flex items-baseline gap-1">
                        <p className="font-sans text-4xl font-black tracking-tighter text-foreground">
                            -22.4
                        </p>
                        <span className="text-sm font-bold text-primary">kg</span>
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground">
                        Per tree / year
                    </p>

                    {/* Sparkline curve */}
                    <div className="mt-4 h-10 w-full overflow-hidden">
                        <svg className="h-full w-full" viewBox="0 0 100 40">
                            <path
                                d="M 0,35 Q 20,30 40,25 T 80,10 T 100,5"
                                fill="none"
                                stroke="var(--primary)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                className="opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            {/* Glowing dot at the end */}
                            <circle cx="100" cy="5" r="3" fill="var(--primary)" className="animate-pulse" />
                        </svg>
                    </div>

                    <p className="mt-3 text-xs leading-normal text-muted-foreground">
                        High performance urban cooling and dust capture capability.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

