import { useEffect, useState } from "react";
import { SelectCombobox } from "@/components/ui/combobox";
import {
    Info,
    Mail,
    Search,
    Trees,
    X,
} from "lucide-react";
import { Link } from "@inertiajs/react";
import { show } from "@/routes/trees";
import AppLayout from "@/layouts/app-layout";
import { PageHeader } from "@/components/app/page-header";
import Wrapper from "@/components/app/wrapper.tsx";
import { AnimatePresence, motion } from "motion/react";
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
}

interface TreeCategory {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    image_urls: Array<{
        original: string;
        thumb: string;
        card: string;
        large: string;
    }>;
    trees: Tree[];
}

interface TreesProps {
    treeCategories?: TreeCategory[];
}

export default function TreesPage({ treeCategories = [] }: TreesProps) {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
        null,
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [isIndigenousFilter, setIsIndigenousFilter] = useState(false);
    const [isEvergreenFilter, setIsEvergreenFilter] = useState(false);

    // Modal states
    const [enquiryTree, setEnquiryTree] = useState<Tree | null>(null);

    // Form fields
    const [enquirySize, setEnquirySize] = useState("");
    const [enquiryQuantity, setEnquiryQuantity] = useState(1);
    const [enquiryName, setEnquiryName] = useState("");
    const [enquiryEmail, setEnquiryEmail] = useState("");
    const [enquiryCompany, setEnquiryCompany] = useState("");
    const [enquiryMessage, setEnquiryMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (
            treeCategories &&
            treeCategories.length > 0 &&
            selectedCategoryId === null
        ) {
            setSelectedCategoryId(treeCategories[0].id);
        }
    }, [treeCategories, selectedCategoryId]);

    const openEnquiry = (tree: Tree) => {
        setEnquiryTree(tree);
        const availableSizes = tree.stock?.filter((s) => s.is_available) || [];
        if (availableSizes.length > 0) {
            setEnquirySize(availableSizes[0].container_size);
        } else if (tree.stock?.length > 0) {
            setEnquirySize(tree.stock[0].container_size);
        } else {
            setEnquirySize("100L");
        }
        setEnquiryMessage(
            `Hello, I would like to request availability and wholesale pricing for the ${tree.common_name} (${tree.botanical_name}) tree. Please send through current lead times and pricing.`,
        );
    };

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
                `Quote request for ${enquiryTree?.common_name} sent successfully! Bruce will review your enquiry and contact you shortly.`,
            );
            setEnquiryTree(null);
            setEnquiryName("");
            setEnquiryEmail("");
            setEnquiryCompany("");
            setEnquiryQuantity(1);
        }, 1200);
    };

    // Filtered trees logic
    const filteredTrees = (() => {
        let sourceTrees: Tree[] = [];

        if (searchQuery.trim() === "") {
            const category =
                treeCategories.find((c) => c.id === selectedCategoryId) ||
                treeCategories[0];
            sourceTrees = category?.trees || [];
        } else {
            sourceTrees = treeCategories.reduce<Tree[]>((acc, cat) => {
                cat.trees.forEach((tree) => {
                    if (!acc.some((t) => t.id === tree.id)) {
                        acc.push(tree);
                    }
                });
                return acc;
            }, []);
        }

        return sourceTrees.filter((tree) => {
            const matchesSearch =
                tree.common_name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                tree.botanical_name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                tree.short_description
                    ?.toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                tree.description
                    ?.toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                tree.species?.name
                    ?.toLowerCase()
                    .includes(searchQuery.toLowerCase());

            const matchesIndigenous = !isIndigenousFilter || tree.is_indigenous;
            const matchesEvergreen = !isEvergreenFilter || tree.is_evergreen;

            return matchesSearch && matchesIndigenous && matchesEvergreen;
        });
    })();

    return (
        <Wrapper className="py-12 min-h-screen">
            <PageHeader
                as="h1"
                badgeText="Certified Botanical Nursery Stock"
                title={
                    <>
                        TREE SPECIES{" "}
                        <span className="text-primary">DIRECTORY</span>
                    </>
                }
                description="Browse our extensive, uniform wholesale tree stock grown at Mistico Farm in Paarl. We grow and supply top-quality container trees from compact 100L specimens up to massive, mature 2000L landscape installations. Select a category or search below to request wholesale pricing."
            />

            {/* Filters bar */}
            <div className="mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-t border-border/60 pt-8">
                <div>
                    <h3 className="text-xl font-geist font-black uppercase tracking-tight text-foreground">
                        Search Inventory
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                    {/* Search Input */}
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search common/botanical name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-card border border-border rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold focus:outline-hidden focus:border-primary/50 transition-all text-foreground font-mono"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs font-mono"
                            >
                                clear
                            </button>
                        )}
                    </div>

                    {/* Indigenous Filter Toggle */}
                    <button
                        onClick={() =>
                            setIsIndigenousFilter(!isIndigenousFilter)
                        }
                        className={`px-3 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wide border uppercase transition-all cursor-pointer ${
                            isIndigenousFilter
                                ? "bg-primary/15 border-primary text-primary"
                                : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                    >
                        Indigenous Only
                    </button>

                    {/* Evergreen Filter Toggle */}
                    <button
                        onClick={() => setIsEvergreenFilter(!isEvergreenFilter)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wide border uppercase transition-all cursor-pointer ${
                            isEvergreenFilter
                                ? "bg-primary/15 border-primary text-primary"
                                : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                    >
                        Evergreen Only
                    </button>
                </div>
            </div>

            {/* Category Selector Tabs */}
            {treeCategories.length > 0 ? (
                <>
                    <div className="flex flex-wrap gap-1.5 border-b border-border/80 pb-3 mb-8">
                        {treeCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setSelectedCategoryId(category.id);
                                    if (searchQuery) setSearchQuery("");
                                }}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                                    selectedCategoryId === category.id &&
                                    !searchQuery
                                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                }`}
                            >
                                {category.name} ({category.trees?.length || 0})
                            </button>
                        ))}
                        {searchQuery && (
                            <span className="px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                                Search Results ({filteredTrees.length})
                            </span>
                        )}
                    </div>

                    {/* Trees Catalog Cards Grid */}
                    {filteredTrees.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTrees.map((tree) => (
                                <div
                                    key={tree.id}
                                    className="group relative overflow-hidden rounded-3xl border border-border bg-card p-4.5 transition-all duration-300 hover:border-primary/40 hover:shadow-md flex flex-col h-full"
                                >
                                    {/* Tree image view container */}
                                    <Link
                                        href={show.url(tree)}
                                        prefetch={true}
                                        className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted/50 border border-border/40 block cursor-pointer"
                                    >
                                        <img
                                            src={
                                                tree.image_urls?.[0]?.card ||
                                                "/images/tree-placeholder.png"
                                            }
                                            alt={tree.common_name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "/images/tree-placeholder.png";
                                            }}
                                        />
                                        {/* Top absolute indicator badges */}
                                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                            {tree.is_indigenous && (
                                                <span className="rounded-md bg-emerald-700/95 text-white px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider font-mono">
                                                    Indigenous
                                                </span>
                                            )}
                                            {tree.is_evergreen ? (
                                                <span className="rounded-md bg-primary/95 text-primary-foreground px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider font-mono">
                                                    Evergreen
                                                </span>
                                            ) : (
                                                <span className="rounded-md bg-amber-600/95 text-white px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider font-mono">
                                                    Deciduous
                                                </span>
                                            )}
                                        </div>
                                    </Link>

                                    {/* Tree details block */}
                                    <div className="mt-4 flex-1 flex flex-col justify-between">
                                        <div>
                                            <Link href={show.url(tree)} prefetch={true} className="cursor-pointer block group-hover:text-primary transition-colors">
                                                <h4 className="font-sans text-xl font-bold tracking-tight text-foreground">
                                                    {tree.common_name}
                                                </h4>
                                                <p className="text-xs italic text-muted-foreground font-sans mt-0.5">
                                                    {tree.botanical_name}
                                                </p>
                                            </Link>

                                            <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                                                {tree.short_description ||
                                                    tree.description ||
                                                    "Grown in premium Paarl conditions to guarantee optimal transplant health and canopy uniformity."}
                                            </p>

                                            {/* Mini specs list */}
                                            <div className="mt-4 pt-3.5 border-t border-border/50 grid grid-cols-2 gap-y-2 gap-x-4 text-[0.7rem] font-sans">
                                                {tree.growth_rate && (
                                                    <div className="flex flex-col">
                                                        <span className="text-[0.6rem] uppercase font-mono font-bold text-muted-foreground/60">
                                                            Growth Rate
                                                        </span>
                                                        <span className="text-foreground font-medium">
                                                            {tree.growth_rate}
                                                        </span>
                                                    </div>
                                                )}
                                                {tree.mature_height && (
                                                    <div className="flex flex-col">
                                                        <span className="text-[0.6rem] uppercase font-mono font-bold text-muted-foreground/60">
                                                            Mature Size
                                                        </span>
                                                        <span className="text-foreground font-medium">
                                                            {tree.mature_height}
                                                            m{" "}
                                                            {tree.mature_width
                                                                ? `x ${tree.mature_width}m`
                                                                : ""}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Size availability list and action buttons */}
                                        <div className="mt-6 pt-4 border-t border-border/50 flex flex-col gap-3">
                                            {tree.stock &&
                                            tree.stock.length > 0 ? (
                                                <div className="flex flex-wrap gap-1.5 items-center">
                                                    <span className="text-[0.6rem] uppercase font-mono font-bold text-muted-foreground/60 mr-1">
                                                        Available:
                                                    </span>
                                                    {tree.stock.map((st) => (
                                                        <span
                                                            key={st.id}
                                                            className={`rounded-md px-2 py-0.5 text-[0.625rem] font-bold font-mono border ${
                                                                st.is_available
                                                                    ? "bg-muted/80 border-primary/20 text-foreground"
                                                                    : "bg-muted/10 border-border/30 text-muted-foreground/40 line-through"
                                                            }`}
                                                            title={
                                                                st.is_available
                                                                    ? `Quantity: ${st.quantity}`
                                                                    : "Unavailable"
                                                            }
                                                        >
                                                            {st.container_size}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-[0.6rem] font-mono text-muted-foreground/60">
                                                    Sizing available on request
                                                </div>
                                            )}

                                            <div className="grid grid-cols-2 gap-2 mt-1">
                                                <Link
                                                    href={show.url(tree)}
                                                    prefetch={true}
                                                    className="inline-flex items-center justify-center gap-1 rounded-xl border border-border bg-card hover:bg-muted py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer text-foreground"
                                                >
                                                    <Info className="size-3" />{" "}
                                                    View Details
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        openEnquiry(tree)
                                                    }
                                                    className="inline-flex items-center justify-center gap-1 rounded-xl border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
                                                >
                                                    <Mail className="size-3" />{" "}
                                                    Quote Request
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-16 text-center border border-dashed border-border rounded-3xl bg-card">
                            <Trees className="size-10 text-muted-foreground/30 mx-auto mb-3" />
                            <p className="text-sm font-semibold text-muted-foreground font-mono">
                                No matching tree species found
                            </p>
                            <p className="text-xs text-muted-foreground/60 mt-1 max-w-xs mx-auto">
                                Try resetting filters or adjusting search
                                keywords.
                            </p>
                        </div>
                    )}
                </>
            ) : (
                <div className="py-16 text-center border border-dashed border-border rounded-3xl bg-card">
                    <Trees className="size-10 text-muted-foreground/30 mx-auto mb-3 animate-pulse" />
                    <p className="text-sm font-semibold text-muted-foreground font-mono">
                        Nursery catalog is loading...
                    </p>
                </div>
            )}

            {/* Modals */}
            <AnimatePresence>
                {/* Enquiry / Quote Form Modal */}
                {enquiryTree && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setEnquiryTree(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-xs"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative bg-card border border-border rounded-3xl max-w-md w-full p-6 md:p-8 shadow-xl z-10 flex flex-col gap-5"
                        >
                            <button
                                onClick={() => setEnquiryTree(null)}
                                className="absolute top-5 right-5 p-1 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                            >
                                <X className="size-4" />
                            </button>

                            <div>
                                <span className="text-primary text-[0.65rem] font-mono font-bold tracking-wider uppercase bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                                    Wholesale Price Enquiry
                                </span>
                                <h3 className="text-xl md:text-2xl font-geist font-black text-foreground mt-2 leading-none">
                                    Quote Request
                                </h3>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                                    Selected:{" "}
                                    <span className="font-bold text-foreground">
                                        {enquiryTree.common_name}
                                    </span>{" "}
                                    <span className="italic">
                                        ({enquiryTree.botanical_name})
                                    </span>
                                </p>
                            </div>

                            <form
                                onSubmit={handleEnquirySubmit}
                                className="space-y-3.5"
                            >
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
                                        onChange={(e) =>
                                            setEnquiryName(e.target.value)
                                        }
                                        className="w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
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
                                        onChange={(e) =>
                                            setEnquiryEmail(e.target.value)
                                        }
                                        className="w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
                                        placeholder="e.g. sarah@developer.co.za"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
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
                                                enquiryTree?.stock?.length
                                                    ? enquiryTree.stock.map((st) => ({
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
                                                setEnquiryQuantity(
                                                    parseInt(e.target.value) ||
                                                        1,
                                                )
                                            }
                                            className="w-full bg-muted/40 border border-border rounded-xl px-3 py-1.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
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
                                        onChange={(e) =>
                                            setEnquiryCompany(e.target.value)
                                        }
                                        className="w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
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
                                        rows={3}
                                        value={enquiryMessage}
                                        onChange={(e) =>
                                            setEnquiryMessage(e.target.value)
                                        }
                                        className="w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all disabled:opacity-50 mt-2 cursor-pointer"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Submit Quote Request"}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </Wrapper>
    );
}

TreesPage.layout = (page: React.ReactNode) => (
    <AppLayout title="Species Directory">{page}</AppLayout>
);
