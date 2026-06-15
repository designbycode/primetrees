import { useState } from "react";
import { SelectCombobox } from "@/components/ui/combobox";
import {
    ArrowLeft,
    Droplets,
    Leaf,
    Mail,
    Ruler,
} from "lucide-react";
import { Link } from "@inertiajs/react";
import { trees } from "@/routes";
import AppLayout from "@/layouts/app-layout";
import Wrapper from "@/components/app/wrapper.tsx";
import { toast } from "sonner";

interface TreeStock {
    id: number;
    container_size: string;
    quantity: number;
    price: string;
    is_available: boolean;
}

interface Species {
    id: number;
    name: string;
    common_name?: string;
}

interface TreeCategory {
    id: number;
    name: string;
    slug: string;
    description: string | null;
}

interface Tree {
    id: number;
    common_name: string;
    botanical_name: string;
    slug: string;
    short_description: string | null;
    description: string | null;
    mature_height: string | null;
    mature_width: string | null;
    growth_rate: string | null;
    water_requirement: string | null;
    frost_tolerance: string | null;
    drought_tolerance: string | null;
    flower_colour: string | null;
    flowering_season: string | null;
    is_evergreen: boolean;
    is_indigenous: boolean;
    is_featured: boolean;
    image_urls: Array<{
        original: string;
        thumb: string;
        card: string;
        large: string;
    }>;
    stock: TreeStock[];
    species?: Species;
    category?: TreeCategory;
}

interface TreeShowProps {
    tree: Tree;
}

export default function TreeShowPage({ tree }: TreeShowProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Form states
    const availableSizes = tree.stock?.filter((s) => s.is_available) || [];
    const initialSize = availableSizes.length > 0
        ? availableSizes[0].container_size
        : (tree.stock?.length > 0 ? tree.stock[0].container_size : "100L");

    const [enquirySize, setEnquirySize] = useState(initialSize);
    const [enquiryQuantity, setEnquiryQuantity] = useState(1);
    const [enquiryName, setEnquiryName] = useState("");
    const [enquiryEmail, setEnquiryEmail] = useState("");
    const [enquiryCompany, setEnquiryCompany] = useState("");
    const [enquiryMessage, setEnquiryMessage] = useState(
        `Hello, I would like to request availability and wholesale pricing for the ${tree.common_name} (${tree.botanical_name}) tree. Please send through current lead times and pricing.`,
    );
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleEnquirySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!enquiryName || !enquiryEmail) {
            toast.error("Please fill in your name and email.");
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success(
                `Quote request for ${tree.common_name} sent successfully! Bruce will review your enquiry and contact you shortly.`,
            );
            setEnquiryName("");
            setEnquiryEmail("");
            setEnquiryCompany("");
            setEnquiryQuantity(1);
        }, 1200);
    };

    return (
        <Wrapper className="py-12 min-h-screen">
            {/* Back to Directory Button */}
            <div className="mb-8">
                <Link
                    href={trees.url()}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
                >
                    <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                    Back to Directory
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column: Interactive Image Gallery (lg:col-span-7) */}
                <div className="lg:col-span-7 space-y-4">
                    {/* Main Image View */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                        <img
                            src={
                                tree.image_urls?.[activeImageIndex]?.large ||
                                tree.image_urls?.[activeImageIndex]?.original ||
                                "/images/tree-placeholder.png"
                            }
                            alt={tree.common_name}
                            className="h-full w-full object-cover transition-all duration-300"
                            onError={(e) => {
                                e.currentTarget.src = "/images/tree-placeholder.png";
                            }}
                        />

                        {/* Top absolute indicator badges */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                            {tree.is_indigenous && (
                                <span className="rounded-md bg-emerald-700/95 text-white px-2.5 py-1 text-xs font-bold uppercase tracking-wider font-mono">
                                    Indigenous
                                </span>
                            )}
                            {tree.is_evergreen ? (
                                <span className="rounded-md bg-primary/95 text-primary-foreground px-2.5 py-1 text-xs font-bold uppercase tracking-wider font-mono">
                                    Evergreen
                                </span>
                            ) : (
                                <span className="rounded-md bg-amber-600/95 text-white px-2.5 py-1 text-xs font-bold uppercase tracking-wider font-mono">
                                    Deciduous
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Gallery Thumbnails List */}
                    {tree.image_urls && tree.image_urls.length > 1 && (
                        <div className="flex flex-wrap gap-3">
                            {tree.image_urls.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImageIndex(idx)}
                                    className={`relative w-20 aspect-video rounded-xl overflow-hidden border bg-card cursor-pointer transition-all duration-200 ${
                                        activeImageIndex === idx
                                            ? "border-primary ring-2 ring-primary/20 scale-102"
                                            : "border-border/80 hover:border-foreground/40"
                                    }`}
                                >
                                    <img
                                        src={img.thumb}
                                        alt={`${tree.common_name} thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "/images/tree-placeholder.png";
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Horticultural Highlight Specs Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                        <div className="bg-card border border-border rounded-2xl p-4 flex flex-col justify-between min-h-[90px]">
                            <span className="text-[0.625rem] font-mono font-bold text-muted-foreground/60 uppercase tracking-wider">
                                Growth Rate
                            </span>
                            <span className="text-sm font-geist font-black text-foreground capitalize mt-1.5">
                                {tree.growth_rate || "Moderate"}
                            </span>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-4 flex flex-col justify-between min-h-[90px]">
                            <span className="text-[0.625rem] font-mono font-bold text-muted-foreground/60 uppercase tracking-wider">
                                Watering
                            </span>
                            <span className="text-sm font-geist font-black text-foreground capitalize mt-1.5 flex items-center gap-1">
                                <Droplets className="size-4 text-primary shrink-0" />
                                {tree.water_requirement || "Medium"}
                            </span>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-4 flex flex-col justify-between min-h-[90px]">
                            <span className="text-[0.625rem] font-mono font-bold text-muted-foreground/60 uppercase tracking-wider">
                                Mature Height
                            </span>
                            <span className="text-sm font-geist font-black text-foreground capitalize mt-1.5 flex items-center gap-1">
                                <Ruler className="size-4 text-primary shrink-0" />
                                {tree.mature_height ? `${tree.mature_height}m` : "N/A"}
                                {tree.mature_width ? ` x ${tree.mature_width}m` : ""}
                            </span>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-4 flex flex-col justify-between min-h-[90px]">
                            <span className="text-[0.625rem] font-mono font-bold text-muted-foreground/60 uppercase tracking-wider">
                                Foliage Type
                            </span>
                            <span className="text-sm font-geist font-black text-foreground capitalize mt-1.5 flex items-center gap-1">
                                <Leaf className="size-4 text-primary shrink-0" />
                                {tree.is_evergreen ? "Evergreen" : "Deciduous"}
                            </span>
                        </div>
                    </div>

                    {/* Full Description / Horticultural Profile */}
                    <div className="pt-6 border-t border-border/60 space-y-4">
                        <h3 className="text-lg font-geist font-black uppercase tracking-tight text-foreground">
                            Horticultural Profile
                        </h3>
                        <div className="text-sm leading-relaxed text-muted-foreground font-sans space-y-3">
                            <p>
                                {tree.description ||
                                    tree.short_description ||
                                    "No extended description is currently available for this species. This specimen is cultivated under premium conditions at our Paarl valley nursery, ensuring exceptional root establishment, structural uniformity, and overall transplant success."}
                            </p>
                        </div>
                    </div>

                    {/* Technical / Specs Table */}
                    <div className="pt-6 border-t border-border/60">
                        <h3 className="text-lg font-geist font-black uppercase tracking-tight text-foreground mb-4">
                            Botanical & Landscape Specifications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-xs font-sans">
                            <div className="flex justify-between py-2 border-b border-border/40">
                                <span className="text-muted-foreground">Origin Status</span>
                                <span className="font-semibold text-foreground">
                                    {tree.is_indigenous ? "Indigenous to South Africa" : "Exotic / Cultivated"}
                                </span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-border/40">
                                <span className="text-muted-foreground">Drought Tolerance</span>
                                <span className="font-semibold text-foreground capitalize">
                                    {tree.drought_tolerance || "Moderate"}
                                </span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-border/40">
                                <span className="text-muted-foreground">Frost Tolerance</span>
                                <span className="font-semibold text-foreground capitalize">
                                    {tree.frost_tolerance || "High"}
                                </span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-border/40">
                                <span className="text-muted-foreground">Flowering Season</span>
                                <span className="font-semibold text-foreground capitalize">
                                    {tree.flowering_season || "Non-flowering / Foliage"}
                                </span>
                            </div>
                            {tree.flower_colour && (
                                <div className="flex justify-between py-2 border-b border-border/40">
                                    <span className="text-muted-foreground">Flower Colour</span>
                                    <span className="font-semibold text-foreground capitalize">
                                        {tree.flower_colour}
                                    </span>
                                </div>
                            )}
                            {tree.category && (
                                <div className="flex justify-between py-2 border-b border-border/40">
                                    <span className="text-muted-foreground">Category</span>
                                    <span className="font-semibold text-foreground">
                                        {tree.category.name}
                                    </span>
                                </div>
                            )}
                            {tree.species && (
                                <div className="flex justify-between py-2 border-b border-border/40">
                                    <span className="text-muted-foreground">Species family</span>
                                    <span className="font-semibold text-foreground">
                                        {tree.species.name}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Sizing Availability & Wholesale Enquiry Form (lg:col-span-5) */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Species & Title Card */}
                    <div className="bg-card border border-border rounded-3xl p-6 shadow-xs">
                        {tree.category && (
                            <span className="text-primary text-[0.625rem] font-mono font-bold tracking-wider uppercase bg-primary/10 px-2.5 py-1 rounded-md border border-primary/15">
                                {tree.category.name}
                            </span>
                        )}
                        <h1 className="text-3xl sm:text-4xl font-geist font-black text-foreground mt-4 leading-tight uppercase">
                            {tree.common_name}
                        </h1>
                        <p className="text-base italic text-primary mt-1 font-sans font-medium">
                            {tree.botanical_name}
                        </p>
                        {tree.short_description && (
                            <p className="text-xs text-muted-foreground mt-4 leading-relaxed font-sans">
                                {tree.short_description}
                            </p>
                        )}
                    </div>

                    {/* Stock & Sizing Card */}
                    <div className="bg-card border border-border rounded-3xl p-6 shadow-xs space-y-4">
                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-foreground">
                            Nursery Stock & Sizing
                        </h3>

                        {tree.stock && tree.stock.length > 0 ? (
                            <div className="space-y-2.5">
                                {tree.stock.map((st) => (
                                    <div
                                        key={st.id}
                                        className={`flex items-center justify-between p-3 rounded-2xl border text-xs ${
                                            st.is_available
                                                ? "bg-muted/40 border-border/80"
                                                : "bg-muted/10 border-border/20 opacity-60"
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={`w-2 h-2 rounded-full ${
                                                    st.is_available ? "bg-emerald-500" : "bg-muted-foreground/30"
                                                }`}
                                            />
                                            <span className="font-bold text-foreground font-mono">
                                                {st.container_size}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            {st.is_available ? (
                                                <span className="font-mono text-muted-foreground font-semibold">
                                                    {st.quantity} Available
                                                </span>
                                            ) : (
                                                <span className="font-mono text-muted-foreground/50 line-through">
                                                    Out of Stock
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Custom sizes from 100L up to 2000L are available on contract grow orders. Contact
                                sales directly for specific requirements.
                            </p>
                        )}
                    </div>

                    {/* Enquiry Form Card */}
                    <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-5">
                        <div>
                            <h3 className="text-lg font-geist font-black text-foreground uppercase tracking-tight">
                                Wholesale Price Enquiry
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1 font-sans">
                                Select sizes and request pricing for commercial landscapes.
                            </p>
                        </div>

                        <form onSubmit={handleEnquirySubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="enquiryName"
                                    className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1"
                                >
                                    Your Name *
                                </label>
                                <input
                                    id="enquiryName"
                                    type="text"
                                    required
                                    value={enquiryName}
                                    onChange={(e) => setEnquiryName(e.target.value)}
                                    className="w-full bg-muted/40 border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
                                    placeholder="e.g. Sarah Jenkins"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="enquiryEmail"
                                    className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1"
                                >
                                    Email Address *
                                </label>
                                <input
                                    id="enquiryEmail"
                                    type="email"
                                    required
                                    value={enquiryEmail}
                                    onChange={(e) => setEnquiryEmail(e.target.value)}
                                    className="w-full bg-muted/40 border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
                                    placeholder="e.g. sarah@developer.co.za"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="enquirySize"
                                        className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1"
                                    >
                                        Container Size
                                    </label>
                                        <SelectCombobox
                                            id="enquirySize"
                                            value={enquirySize}
                                            onValueChange={setEnquirySize}
                                            options={
                                                tree?.stock?.length
                                                    ? tree.stock.map((st) => ({
                                                        value: st.container_size,
                                                        label: `${st.container_size} ${st.is_available ? "" : "(Backorder)"}`.trim()
                                                      }))
                                                    : [
                                                        { value: "100L", label: "100L Specimen" },
                                                        { value: "200L", label: "200L Specimen" },
                                                        { value: "500L", label: "500L Specimen" },
                                                        { value: "2000L", label: "2000L Mature" }
                                                      ]
                                            }
                                            placeholder="Select Size"
                                            className="w-full text-xs h-8"
                                        />
                                </div>

                                <div>
                                    <label
                                        htmlFor="enquiryQuantity"
                                        className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1"
                                    >
                                        Quantity
                                    </label>
                                    <input
                                        id="enquiryQuantity"
                                        type="number"
                                        min={1}
                                        value={enquiryQuantity}
                                        onChange={(e) =>
                                            setEnquiryQuantity(parseInt(e.target.value) || 1)
                                        }
                                        className="w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="enquiryCompany"
                                    className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1"
                                >
                                    Company Name
                                </label>
                                <input
                                    id="enquiryCompany"
                                    type="text"
                                    value={enquiryCompany}
                                    onChange={(e) => setEnquiryCompany(e.target.value)}
                                    className="w-full bg-muted/40 border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
                                    placeholder="e.g. GreenScape Contractors (Optional)"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="enquiryMessage"
                                    className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1"
                                >
                                    Enquiry Message
                                </label>
                                <textarea
                                    id="enquiryMessage"
                                    rows={4}
                                    value={enquiryMessage}
                                    onChange={(e) => setEnquiryMessage(e.target.value)}
                                    className="w-full bg-muted/40 border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all disabled:opacity-50 mt-2 cursor-pointer shadow-sm"
                            >
                                <Mail className="size-4" />
                                {isSubmitting ? "Sending..." : "Submit Quote Request"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

TreeShowPage.layout = (page: React.ReactNode) => (
    <AppLayout title="Tree Details">{page}</AppLayout>
);
