import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { home } from '@/routes';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import {
    TreePine,
    Terminal,
    Calculator,
    ChevronRight,
    Leaf,
    Wind,
    LayoutDashboard,
    ShieldCheck
} from 'lucide-react';

interface Props {
    laravelVersion: string;
    phpVersion: string;
}

export default function Welcome({ laravelVersion, phpVersion }: Props) {
    const [treeCount, setTreeCount] = useState(10);

    // Tree calculators
    const co2Absorbed = (treeCount * 48).toLocaleString(); // lbs/year
    const oxygenProduced = (treeCount * 260).toLocaleString(); // lbs/year
    const canopyArea = (treeCount * 150).toLocaleString(); // sq ft

    return (
        <>
            <Head title="PrimeTrees - Premium Forestry & Tree Care" />
            <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">

                {/* Header */}
                <header className="sticky top-0 z-50 backdrop-blur-md bg-background/60 border-b border-border px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                            <TreePine className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold tracking-tight bg-linear-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
                            PrimeTrees
                        </span>
                    </div>

                    <nav className="flex items-center gap-6">
                        <Link href={home.url()} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                            Home
                        </Link>
                        <Button asChild size="sm" className="font-semibold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-primary/10 active:scale-95">
                            <a href="/admin">
                                Filament Admin
                            </a>
                        </Button>
                    </nav>
                </header>

                {/* Hero Section */}
                <main className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center">
                    <Badge variant="outline" className="h-auto px-3 py-1.5 rounded-full bg-primary/5 border-primary/20 text-primary text-xs font-semibold mb-6 animate-pulse select-none">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                        Next-Gen Arboriculture & Forestry Management
                    </Badge>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight mb-6">
                        Sustaining Green <span className="bg-linear-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Horizons</span> & Tree Life
                    </h1>

                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                        Combining top-tier forestry experts with modern data tools. Manage your estate's arboricultural assets with Filament backend efficiency and Inertia frontend agility.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <Button asChild size="lg" className="h-12 px-6 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/5 flex items-center gap-2 group transition-all active:scale-95 cursor-pointer">
                            <a href="/admin">
                                Enter Backend Management
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-12 px-6 rounded-xl font-semibold bg-background border border-border text-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95 cursor-pointer">
                            <a href="#calculator">
                                Eco Calculator
                            </a>
                        </Button>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20 text-left">
                        <Card className="bg-card border border-border hover:border-primary/30 hover:shadow-lg dark:hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group">
                            <CardHeader className="p-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <ShieldCheck className="size-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                    Arborist Auditing
                                </CardTitle>
                                <CardDescription className="text-muted-foreground text-sm leading-relaxed mt-2">
                                    Complete tree risk assessments, tag coordinates, monitor pest infestations, and record heights with extreme precision.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-card border border-border hover:border-primary/30 hover:shadow-lg dark:hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group">
                            <CardHeader className="p-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <LayoutDashboard className="size-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                    Agile Dashboard
                                </CardTitle>
                                <CardDescription className="text-muted-foreground text-sm leading-relaxed mt-2">
                                    Manage team schedules, invoice details, and tree inspections directly within the Filament-powered backend panel.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-card border border-border hover:border-primary/30 hover:shadow-lg dark:hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group">
                            <CardHeader className="p-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Terminal className="size-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                    Wayfinder Integration
                                </CardTitle>
                                <CardDescription className="text-muted-foreground text-sm leading-relaxed mt-2">
                                    Fully type-safe routing automatically generated from Laravel routes straight to React components.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    {/* Interactive Calculator Section */}
                    <Card id="calculator" className="w-full max-w-3xl bg-card border border-border p-8 rounded-3xl text-left mb-20 shadow-xs">
                        <CardHeader className="p-0 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <CardTitle className="text-2xl font-bold mb-1 text-foreground flex items-center gap-2">
                                    <Calculator className="size-6 text-primary" /> Tree Canopy Impact
                                </CardTitle>
                                <CardDescription className="text-muted-foreground text-sm">
                                    Estimate the ecological impact of your tree planting initiative in real time.
                                </CardDescription>
                            </div>
                            <div className="text-right flex items-baseline justify-end gap-2">
                                <span className="text-5xl font-extrabold text-primary tracking-tight">{treeCount}</span>
                                <span className="text-muted-foreground text-sm font-semibold uppercase">Trees</span>
                            </div>
                        </CardHeader>

                        <CardContent className="p-0">
                            <div className="mb-10 px-1">
                                <Slider
                                    value={[treeCount]}
                                    min={1}
                                    max={200}
                                    step={1}
                                    onValueChange={(val) => setTreeCount(val[0])}
                                    className="w-full cursor-pointer py-4"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <Card className="bg-muted/30 border border-border hover:border-primary/20 transition-colors">
                                    <CardHeader className="p-4 pb-2">
                                        <CardDescription className="text-xs text-muted-foreground uppercase font-bold flex items-center gap-1.5">
                                            <Leaf className="size-3.5 text-primary" /> CO2 Offset / Year
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <div className="text-2xl font-extrabold text-foreground tracking-tight">{co2Absorbed} lbs</div>
                                        <span className="text-xs text-muted-foreground">carbon absorbed</span>
                                    </CardContent>
                                </Card>

                                <Card className="bg-muted/30 border border-border hover:border-primary/20 transition-colors">
                                    <CardHeader className="p-4 pb-2">
                                        <CardDescription className="text-xs text-muted-foreground uppercase font-bold flex items-center gap-1.5">
                                            <Wind className="size-3.5 text-primary" /> Oxygen Produced
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <div className="text-2xl font-extrabold text-foreground tracking-tight">{oxygenProduced} lbs</div>
                                        <span className="text-xs text-muted-foreground">O₂ generated</span>
                                    </CardContent>
                                </Card>

                                <Card className="bg-muted/30 border border-border hover:border-primary/20 transition-colors">
                                    <CardHeader className="p-4 pb-2">
                                        <CardDescription className="text-xs text-muted-foreground uppercase font-bold flex items-center gap-1.5">
                                            <TreePine className="size-3.5 text-primary" /> Shade Canopy
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <div className="text-2xl font-extrabold text-foreground tracking-tight">{canopyArea} sq ft</div>
                                        <span className="text-xs text-muted-foreground">cooling shade</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                </main>

                {/* Footer */}
                <footer className="bg-muted/20 border-t border-border py-8 px-6 text-center text-xs text-muted-foreground mt-auto">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            &copy; {new Date().getFullYear()} PrimeTrees. All rights reserved.
                        </div>
                        <div className="flex items-center gap-4 flex-wrap justify-center">
                            <span className="px-2 py-1 bg-muted rounded border border-border">
                                Laravel v{laravelVersion}
                            </span>
                            <span className="px-2 py-1 bg-muted rounded border border-border">
                                PHP v{phpVersion}
                            </span>
                            <span className="px-2 py-1 bg-muted rounded border border-border text-primary font-semibold">
                                Inertia React
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}


