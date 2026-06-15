import { PageHeader } from "@/components/app/page-header";
import Wrapper from "@/components/app/wrapper.tsx";
import {
    AlertTriangle,
    ArrowDown,
    ArrowUp,
    ArrowUpDown,
    CheckCircle2,
    Eye,
    FileDown,
    Mail,
    RotateCcw,
    Search,
    SlidersHorizontal,
    Trees,
    XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { SelectCombobox } from "@/components/ui/combobox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Link } from "@inertiajs/react";
import { show as showTree } from "@/routes/trees";

interface Species {
    id: number;
    name: string;
    slug: string;
}

interface Tree {
    id: number;
    common_name: string;
    botanical_name: string;
    slug: string;
    species?: Species;
}

interface TreeStock {
    id: number;
    tree_id: number;
    container_size: string;
    quantity: number;
    price: string | null;
    is_available: boolean;
    tree: Tree;
}

interface AvailabilityListProps {
    stocks?: TreeStock[];
}

type SortKey = "tree" | "species" | "quantity" | "container_size" | "price";
type SortDirection = "asc" | "desc" | null;

export default function AvailabilityList({
    stocks = [],
}: AvailabilityListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedAvailability, setSelectedAvailability] = useState("all");

    // Sorting state
    const [sortKey, setSortKey] = useState<SortKey>("tree");
    const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

    // Dynamic lists for filters
    const allSpecies = useMemo(() => {
        const speciesMap = new Map<string, string>();
        stocks.forEach((stock) => {
            const speciesName = stock.tree?.species?.name;
            if (speciesName) {
                speciesMap.set(speciesName, speciesName);
            }
        });
        return Array.from(speciesMap.values()).sort();
    }, [stocks]);

    const allSizes = useMemo(() => {
        const sizes = new Set<string>();
        stocks.forEach((stock) => {
            if (stock.container_size) {
                sizes.add(stock.container_size);
            }
        });
        return Array.from(sizes).sort();
    }, [stocks]);

    const speciesOptions = useMemo(
        () => [
            { value: "", label: "All Species" },
            ...allSpecies.map((s) => ({ value: s, label: s })),
        ],
        [allSpecies],
    );

    const sizeOptions = useMemo(
        () => [
            { value: "", label: "All Container Sizes" },
            ...allSizes.map((s) => ({ value: s, label: s })),
        ],
        [allSizes],
    );

    const availabilityOptions = useMemo(
        () => [
            { value: "all", label: "All Availability" },
            { value: "available", label: "In Stock (Qty > 0)" },
            { value: "low-stock", label: "Low Stock (Qty ≤ 150)" },
            { value: "out-of-stock", label: "Out of Stock" },
        ],
        [],
    );

    // Handlers
    const handleSort = (key: SortKey) => {
        if (sortKey === key) {
            setSortDirection((prev) => {
                if (prev === "asc") return "desc";
                if (prev === "desc") return null;
                return "asc";
            });
        } else {
            setSortKey(key);
            setSortDirection("asc");
        }
    };

    const handleResetFilters = () => {
        setSearchQuery("");
        setSelectedSpecies("");
        setSelectedSize("");
        setSelectedAvailability("all");
        setSortKey("tree");
        setSortDirection("asc");
    };

    const isFiltersActive =
        searchQuery !== "" ||
        selectedSpecies !== "" ||
        selectedSize !== "" ||
        selectedAvailability !== "all";

    // Filtering and sorting logic
    const filteredAndSortedStocks = useMemo(() => {
        let result = [...stocks];

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter((stock) => {
                const commonName = stock.tree?.common_name?.toLowerCase() || "";
                const botanicalName =
                    stock.tree?.botanical_name?.toLowerCase() || "";
                const speciesName =
                    stock.tree?.species?.name?.toLowerCase() || "";
                const size = stock.container_size?.toLowerCase() || "";
                return (
                    commonName.includes(query) ||
                    botanicalName.includes(query) ||
                    speciesName.includes(query) ||
                    size.includes(query)
                );
            });
        }

        // Species filter
        if (selectedSpecies) {
            result = result.filter(
                (stock) => stock.tree?.species?.name === selectedSpecies,
            );
        }

        // Size filter
        if (selectedSize) {
            result = result.filter(
                (stock) => stock.container_size === selectedSize,
            );
        }

        // Availability status filter
        if (selectedAvailability === "available") {
            result = result.filter(
                (stock) => stock.is_available && stock.quantity > 0,
            );
        } else if (selectedAvailability === "low-stock") {
            result = result.filter(
                (stock) => stock.quantity > 0 && stock.quantity <= 150,
            );
        } else if (selectedAvailability === "out-of-stock") {
            result = result.filter(
                (stock) => !stock.is_available || stock.quantity === 0,
            );
        }

        // Sorting
        if (sortKey && sortDirection) {
            result.sort((a, b) => {
                let valA: any = "";
                let valB: any = "";

                if (sortKey === "tree") {
                    valA = a.tree?.common_name || "";
                    valB = b.tree?.common_name || "";
                } else if (sortKey === "species") {
                    valA = a.tree?.species?.name || "";
                    valB = b.tree?.species?.name || "";
                } else if (sortKey === "quantity") {
                    valA = a.quantity;
                    valB = b.quantity;
                } else if (sortKey === "container_size") {
                    valA = a.container_size || "";
                    valB = b.container_size || "";
                } else if (sortKey === "price") {
                    valA = parseFloat(a.price || "0");
                    valB = parseFloat(b.price || "0");
                }

                if (typeof valA === "string") {
                    return sortDirection === "asc"
                        ? valA.localeCompare(valB)
                        : valB.localeCompare(valA);
                } else {
                    return sortDirection === "asc" ? valA - valB : valB - valA;
                }
            });
        }

        return result;
    }, [
        stocks,
        searchQuery,
        selectedSpecies,
        selectedSize,
        selectedAvailability,
        sortKey,
        sortDirection,
    ]);

    // Total counts memo
    const stats = useMemo(() => {
        const totalUnique = new Set(stocks.map((s) => s.tree_id)).size;
        const totalQty = stocks.reduce(
            (acc, s) => acc + (s.is_available ? s.quantity : 0),
            0,
        );
        const totalLines = stocks.length;
        return { totalUnique, totalQty, totalLines };
    }, [stocks]);

    return (
        <Wrapper className="py-12 min-h-screen">
            {/* Branded Print Header */}
            <div className="hidden print:flex flex-col items-center text-center border-b border-slate-350 pb-6 mb-8">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
                    PRIME TREES
                </h1>
                <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-1">
                    Wholesale Tree Nursery • Paarl, Western Cape
                </p>
                <div className="w-16 h-1 bg-emerald-600 mt-3 rounded-full" />
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight mt-4">
                    Stock Availability List
                </h2>
                <div className="flex items-center gap-6 mt-2 text-xs text-slate-400 font-mono">
                    <span>
                        Date:{" "}
                        {new Date().toLocaleDateString("en-ZA", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    <span>•</span>
                    <span>Website: www.primetrees.co.za</span>
                </div>
            </div>

            {/* Screen Page Header */}
            <PageHeader
                className="print:hidden"
                as="h2"
                badgeText="Certified Botanical Nursery Stock"
                title={
                    <>
                        Availability <span className="text-primary">List</span>
                    </>
                }
                description="Browse our extensive, uniform wholesale tree stock grown at Mistico Farm in Paarl. We grow and supply top-quality container trees from compact 100L specimens up to massive, mature 2000L landscape installations. Select a category or search below to request wholesale pricing."
                actions={
                    <Button
                        onClick={() => window.print()}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 h-10 rounded-lg flex items-center gap-2 cursor-pointer shadow-xs text-sm"
                    >
                        <FileDown className="size-4" /> Download PDF / Print
                    </Button>
                }
            />

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 print:hidden">
                <div className="bg-card border border-border/60 rounded-xl p-4 flex items-center justify-between shadow-xs">
                    <div>
                        <span className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                            Unique Species
                        </span>
                        <span className="text-2xl font-geist font-black text-foreground">
                            {stats.totalUnique}
                        </span>
                    </div>
                    <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Trees className="size-5" />
                    </div>
                </div>

                <div className="bg-card border border-border/60 rounded-xl p-4 flex items-center justify-between shadow-xs">
                    <div>
                        <span className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                            Total Nursery Stock Qty
                        </span>
                        <span className="text-2xl font-geist font-black text-foreground">
                            {stats.totalQty.toLocaleString()}
                        </span>
                    </div>
                    <div className="size-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <CheckCircle2 className="size-5" />
                    </div>
                </div>

                <div className="bg-card border border-border/60 rounded-xl p-4 flex items-center justify-between shadow-xs">
                    <div>
                        <span className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                            Product Lines Listed
                        </span>
                        <span className="text-2xl font-geist font-black text-foreground">
                            {stats.totalLines}
                        </span>
                    </div>
                    <div className="size-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                        <SlidersHorizontal className="size-5" />
                    </div>
                </div>
            </div>

            {/* Filter Section Card */}
            <div className="bg-card border border-border/60 rounded-xl p-5 mb-6 shadow-xs print:hidden">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/40">
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal className="size-4 text-primary" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                            Table Filters
                        </span>
                    </div>
                    {isFiltersActive && (
                        <Button
                            variant="ghost"
                            size="xs"
                            onClick={handleResetFilters}
                            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer"
                        >
                            <RotateCcw className="size-3" /> Reset Filters
                        </Button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Search query filter */}
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                        <Input
                            placeholder="Search tree, species, size..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-8 text-xs h-8"
                        />
                    </div>

                    {/* Species select filter */}
                    <SelectCombobox
                        value={selectedSpecies}
                        onValueChange={setSelectedSpecies}
                        options={speciesOptions}
                        placeholder="All Species"
                        className="w-full text-xs h-8"
                    />

                    {/* Container size select filter */}
                    <SelectCombobox
                        value={selectedSize}
                        onValueChange={setSelectedSize}
                        options={sizeOptions}
                        placeholder="All Container Sizes"
                        className="w-full text-xs h-8"
                    />

                    {/* Availability status filter */}
                    <SelectCombobox
                        value={selectedAvailability}
                        onValueChange={setSelectedAvailability}
                        options={availabilityOptions}
                        placeholder="All Availability"
                        className="w-full text-xs h-8"
                    />
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-card border border-border/60 rounded-xl overflow-hidden shadow-xs print:border-none print:shadow-none">
                <Table className="print:text-black">
                    <TableHeader className="bg-muted/30 print:bg-slate-100">
                        <TableRow>
                            <TableHead
                                className="cursor-pointer select-none font-bold py-3 text-xs print:cursor-default"
                                onClick={() => handleSort("tree")}
                            >
                                <div className="flex items-center gap-1.5">
                                    Tree Name
                                    <span className="print:hidden">
                                        {sortKey === "tree" ? (
                                            sortDirection === "asc" ? (
                                                <ArrowUp className="size-3 text-primary" />
                                            ) : (
                                                <ArrowDown className="size-3 text-primary" />
                                            )
                                        ) : (
                                            <ArrowUpDown className="size-3 text-muted-foreground/45" />
                                        )}
                                    </span>
                                </div>
                            </TableHead>
                            <TableHead
                                className="cursor-pointer select-none font-bold py-3 text-xs print:cursor-default"
                                onClick={() => handleSort("species")}
                            >
                                <div className="flex items-center gap-1.5">
                                    Species
                                    <span className="print:hidden">
                                        {sortKey === "species" ? (
                                            sortDirection === "asc" ? (
                                                <ArrowUp className="size-3 text-primary" />
                                            ) : (
                                                <ArrowDown className="size-3 text-primary" />
                                            )
                                        ) : (
                                            <ArrowUpDown className="size-3 text-muted-foreground/45" />
                                        )}
                                    </span>
                                </div>
                            </TableHead>
                            <TableHead
                                className="cursor-pointer select-none font-bold py-3 text-xs print:cursor-default"
                                onClick={() => handleSort("container_size")}
                            >
                                <div className="flex items-center gap-1.5">
                                    Container Size
                                    <span className="print:hidden">
                                        {sortKey === "container_size" ? (
                                            sortDirection === "asc" ? (
                                                <ArrowUp className="size-3 text-primary" />
                                            ) : (
                                                <ArrowDown className="size-3 text-primary" />
                                            )
                                        ) : (
                                            <ArrowUpDown className="size-3 text-muted-foreground/45" />
                                        )}
                                    </span>
                                </div>
                            </TableHead>
                            <TableHead
                                className="cursor-pointer select-none font-bold py-3 text-xs text-right print:cursor-default"
                                onClick={() => handleSort("quantity")}
                            >
                                <div className="flex items-center gap-1.5 justify-end">
                                    Quantity
                                    <span className="print:hidden">
                                        {sortKey === "quantity" ? (
                                            sortDirection === "asc" ? (
                                                <ArrowUp className="size-3 text-primary" />
                                            ) : (
                                                <ArrowDown className="size-3 text-primary" />
                                            )
                                        ) : (
                                            <ArrowUpDown className="size-3 text-muted-foreground/45" />
                                        )}
                                    </span>
                                </div>
                            </TableHead>
                            <TableHead
                                className="cursor-pointer select-none font-bold py-3 text-xs text-right print:cursor-default"
                                onClick={() => handleSort("price")}
                            >
                                <div className="flex items-center gap-1.5 justify-end">
                                    Price
                                    <span className="print:hidden">
                                        {sortKey === "price" ? (
                                            sortDirection === "asc" ? (
                                                <ArrowUp className="size-3 text-primary" />
                                            ) : (
                                                <ArrowDown className="size-3 text-primary" />
                                            )
                                        ) : (
                                            <ArrowUpDown className="size-3 text-muted-foreground/45" />
                                        )}
                                    </span>
                                </div>
                            </TableHead>
                            <TableHead className="font-bold py-3 text-xs text-center print:text-left print:pl-4">
                                Status
                            </TableHead>
                            <TableHead className="font-bold py-3 text-xs text-right print:hidden">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredAndSortedStocks.length > 0 ? (
                            filteredAndSortedStocks.map((stock) => {
                                const isAvailable =
                                    stock.is_available && stock.quantity > 0;
                                const isLowStock =
                                    isAvailable && stock.quantity <= 150;

                                return (
                                    <TableRow
                                        key={stock.id}
                                        className="hover:bg-muted/20 border-b border-border/40 transition-colors print:border-slate-300"
                                    >
                                        <TableCell className="py-3.5">
                                            <div className="font-semibold text-foreground text-sm print:text-slate-900">
                                                {stock.tree?.common_name ||
                                                    "Unknown Tree"}
                                            </div>
                                            <div className="text-xs text-muted-foreground italic font-sans mt-0.5 print:text-slate-500">
                                                {stock.tree?.botanical_name}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-3.5 italic text-muted-foreground text-xs font-mono print:text-slate-700 print:font-sans">
                                            {stock.tree?.species?.name || "N/A"}
                                        </TableCell>
                                        <TableCell className="py-3.5">
                                            <Badge
                                                variant="outline"
                                                className="font-mono text-xs border-border/80 print:border-slate-400 print:text-slate-900"
                                            >
                                                {stock.container_size}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="py-3.5 text-right font-mono font-semibold text-sm print:text-slate-900">
                                            {stock.quantity.toLocaleString()}
                                        </TableCell>
                                        <TableCell className="py-3.5 text-right font-mono text-sm text-foreground print:text-slate-900">
                                            {stock.price
                                                ? `R ${parseFloat(
                                                      stock.price,
                                                  ).toLocaleString("en-ZA", {
                                                      minimumFractionDigits: 2,
                                                      maximumFractionDigits: 2,
                                                  })}`
                                                : "On Request"}
                                        </TableCell>
                                        <TableCell className="py-3.5 text-center print:text-left print:pl-4">
                                            {isAvailable ? (
                                                isLowStock ? (
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 text-[10px] gap-1 px-1.5 print:bg-transparent print:text-amber-700 print:border-none print:p-0 print:font-semibold"
                                                    >
                                                        <AlertTriangle className="size-3 print:hidden" />{" "}
                                                        Low Stock
                                                    </Badge>
                                                ) : (
                                                    <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-[10px] gap-1 px-1.5 print:bg-transparent print:text-emerald-700 print:border-none print:p-0 print:font-semibold">
                                                        <CheckCircle2 className="size-3 print:hidden" />{" "}
                                                        In Stock
                                                    </Badge>
                                                )
                                            ) : (
                                                <Badge
                                                    variant="destructive"
                                                    className="bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 text-[10px] gap-1 px-1.5 print:bg-transparent print:text-rose-700 print:border-none print:p-0 print:font-semibold"
                                                >
                                                    <XCircle className="size-3 print:hidden" />{" "}
                                                    Out of Stock
                                                </Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="py-3.5 text-right print:hidden">
                                            <div className="flex items-center justify-end gap-2">
                                                {stock.tree?.slug && (
                                                    <Link
                                                        prefetch={"hover"}
                                                        href={showTree(
                                                            stock.tree.slug,
                                                        )}
                                                        className="inline-flex size-7 items-center justify-center rounded-md border border-border/60 bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-all cursor-pointer"
                                                        title="View Details"
                                                    >
                                                        <Eye className="size-3.5" />
                                                    </Link>
                                                )}
                                                <Button
                                                    asChild
                                                    variant="default"
                                                    size="xs"
                                                    className="h-7 text-xs bg-primary/95 hover:bg-primary font-medium cursor-pointer"
                                                >
                                                    <a
                                                        href={`mailto:bruce@primetrees.co.za?subject=Wholesale Request: ${encodeURIComponent(stock.tree?.common_name || "")} (${encodeURIComponent(stock.container_size)})&body=Hi Bruce,%0D%0A%0D%0AI would like to enquire about wholesale pricing and availability for:%0D%0A-%20Tree:%20${encodeURIComponent(stock.tree?.common_name || "")}%20(${encodeURIComponent(stock.tree?.botanical_name || "")})%0D%0A-%20Container%20Size:%20${encodeURIComponent(stock.container_size)}%0D%0A-%20Quantity%20Desired:%20${encodeURIComponent(stock.quantity > 0 ? Math.min(stock.quantity, 10).toString() : "10")}%0D%0A%0D%0APlease let me know the pricing and estimated delivery details.%0D%0A%0D%0AKind regards,%0D%0A[Your Name]`}
                                                    >
                                                        <Mail className="size-3.5" />{" "}
                                                        Enquire
                                                    </a>
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="h-48 text-center py-10"
                                >
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <div className="size-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                                            <Search className="size-6 animate-pulse" />
                                        </div>
                                        <h3 className="font-geist font-bold text-foreground mt-2">
                                            No results found
                                        </h3>
                                        <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                                            We couldn't find any stock matching
                                            your search criteria. Try removing
                                            some filters or resetting the
                                            search.
                                        </p>
                                        {isFiltersActive && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={handleResetFilters}
                                                className="mt-3 text-xs gap-1 border-border/80 cursor-pointer"
                                            >
                                                <RotateCcw className="size-3" />{" "}
                                                Clear All Filters
                                            </Button>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Wrapper>
    );
}

AvailabilityList.displayName = "AvailabilityList";
