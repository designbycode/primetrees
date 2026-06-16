import { i as cn, n as Wrapper, r as Button } from "../ssr.js";
import { t as PageHeader } from "./page-header-BUogbAqS.js";
import { n as Input, t as SelectCombobox } from "./combobox-DShYAb7e.js";
import { t as show } from "./trees-Cc6CRQbY.js";
import { Link } from "@inertiajs/react";
import { useMemo, useState } from "react";
import { AlertTriangle, ArrowDown, ArrowUp, ArrowUpDown, CheckCircle2, Eye, FileDown, Mail, RotateCcw, Search, SlidersHorizontal, Trees, XCircle } from "lucide-react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/ui/badge.tsx
var badgeVariants = cva("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot.Root : "span", {
		"data-slot": "badge",
		"data-variant": variant,
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/table.tsx
function Table({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ jsx("table", {
			"data-slot": "table",
			className: cn("w-full caption-bottom text-sm", className),
			...props
		})
	});
}
function TableHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("thead", {
		"data-slot": "table-header",
		className: cn("[&_tr]:border-b", className),
		...props
	});
}
function TableBody({ className, ...props }) {
	return /* @__PURE__ */ jsx("tbody", {
		"data-slot": "table-body",
		className: cn("[&_tr:last-child]:border-0", className),
		...props
	});
}
function TableRow({ className, ...props }) {
	return /* @__PURE__ */ jsx("tr", {
		"data-slot": "table-row",
		className: cn("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", className),
		...props
	});
}
function TableHead({ className, ...props }) {
	return /* @__PURE__ */ jsx("th", {
		"data-slot": "table-head",
		className: cn("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0", className),
		...props
	});
}
function TableCell({ className, ...props }) {
	return /* @__PURE__ */ jsx("td", {
		"data-slot": "table-cell",
		className: cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className),
		...props
	});
}
//#endregion
//#region resources/js/pages/availability-list.tsx
function AvailabilityList({ stocks = [] }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedSpecies, setSelectedSpecies] = useState("");
	const [selectedSize, setSelectedSize] = useState("");
	const [selectedAvailability, setSelectedAvailability] = useState("all");
	const [sortKey, setSortKey] = useState("tree");
	const [sortDirection, setSortDirection] = useState("asc");
	const allSpecies = useMemo(() => {
		const speciesMap = /* @__PURE__ */ new Map();
		stocks.forEach((stock) => {
			const speciesName = stock.tree?.species?.name;
			if (speciesName) speciesMap.set(speciesName, speciesName);
		});
		return Array.from(speciesMap.values()).sort();
	}, [stocks]);
	const allSizes = useMemo(() => {
		const sizes = /* @__PURE__ */ new Set();
		stocks.forEach((stock) => {
			if (stock.container_size) sizes.add(stock.container_size);
		});
		return Array.from(sizes).sort();
	}, [stocks]);
	const speciesOptions = useMemo(() => [{
		value: "",
		label: "All Species"
	}, ...allSpecies.map((s) => ({
		value: s,
		label: s
	}))], [allSpecies]);
	const sizeOptions = useMemo(() => [{
		value: "",
		label: "All Container Sizes"
	}, ...allSizes.map((s) => ({
		value: s,
		label: s
	}))], [allSizes]);
	const availabilityOptions = useMemo(() => [
		{
			value: "all",
			label: "All Availability"
		},
		{
			value: "available",
			label: "In Stock (Qty > 0)"
		},
		{
			value: "low-stock",
			label: "Low Stock (Qty ≤ 150)"
		},
		{
			value: "out-of-stock",
			label: "Out of Stock"
		}
	], []);
	const handleSort = (key) => {
		if (sortKey === key) setSortDirection((prev) => {
			if (prev === "asc") return "desc";
			if (prev === "desc") return null;
			return "asc";
		});
		else {
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
	const isFiltersActive = searchQuery !== "" || selectedSpecies !== "" || selectedSize !== "" || selectedAvailability !== "all";
	const filteredAndSortedStocks = useMemo(() => {
		let result = [...stocks];
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			result = result.filter((stock) => {
				const commonName = stock.tree?.common_name?.toLowerCase() || "";
				const botanicalName = stock.tree?.botanical_name?.toLowerCase() || "";
				const speciesName = stock.tree?.species?.name?.toLowerCase() || "";
				const size = stock.container_size?.toLowerCase() || "";
				return commonName.includes(query) || botanicalName.includes(query) || speciesName.includes(query) || size.includes(query);
			});
		}
		if (selectedSpecies) result = result.filter((stock) => stock.tree?.species?.name === selectedSpecies);
		if (selectedSize) result = result.filter((stock) => stock.container_size === selectedSize);
		if (selectedAvailability === "available") result = result.filter((stock) => stock.is_available && stock.quantity > 0);
		else if (selectedAvailability === "low-stock") result = result.filter((stock) => stock.quantity > 0 && stock.quantity <= 150);
		else if (selectedAvailability === "out-of-stock") result = result.filter((stock) => !stock.is_available || stock.quantity === 0);
		if (sortKey && sortDirection) result.sort((a, b) => {
			let valA = "";
			let valB = "";
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
			if (typeof valA === "string") return sortDirection === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
			else return sortDirection === "asc" ? valA - valB : valB - valA;
		});
		return result;
	}, [
		stocks,
		searchQuery,
		selectedSpecies,
		selectedSize,
		selectedAvailability,
		sortKey,
		sortDirection
	]);
	const stats = useMemo(() => {
		return {
			totalUnique: new Set(stocks.map((s) => s.tree_id)).size,
			totalQty: stocks.reduce((acc, s) => acc + (s.is_available ? s.quantity : 0), 0),
			totalLines: stocks.length
		};
	}, [stocks]);
	return /* @__PURE__ */ jsxs(Wrapper, {
		className: "py-12 min-h-screen",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "hidden print:flex flex-col items-center text-center border-b border-slate-350 pb-6 mb-8",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-3xl font-black tracking-tight text-slate-900 uppercase",
						children: "PRIME TREES"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-1",
						children: "Wholesale Tree Nursery • Paarl, Western Cape"
					}),
					/* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-emerald-600 mt-3 rounded-full" }),
					/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-bold text-slate-800 uppercase tracking-tight mt-4",
						children: "Stock Availability List"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-6 mt-2 text-xs text-slate-400 font-mono",
						children: [
							/* @__PURE__ */ jsxs("span", { children: [
								"Date:",
								" ",
								(/* @__PURE__ */ new Date()).toLocaleDateString("en-ZA", {
									year: "numeric",
									month: "long",
									day: "numeric"
								})
							] }),
							/* @__PURE__ */ jsx("span", { children: "•" }),
							/* @__PURE__ */ jsx("span", { children: "Website: www.primetrees.co.za" })
						]
					})
				]
			}),
			/* @__PURE__ */ jsx(PageHeader, {
				className: "print:hidden",
				as: "h2",
				badgeText: "Certified Botanical Nursery Stock",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Availability ", /* @__PURE__ */ jsx("span", {
					className: "text-primary",
					children: "List"
				})] }),
				description: "Browse our extensive, uniform wholesale tree stock grown at Mistico Farm in Paarl. We grow and supply top-quality container trees from compact 100L specimens up to massive, mature 2000L landscape installations. Select a category or search below to request wholesale pricing.",
				actions: /* @__PURE__ */ jsxs(Button, {
					onClick: () => window.print(),
					className: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 h-10 rounded-lg flex items-center gap-2 cursor-pointer shadow-xs text-sm",
					children: [/* @__PURE__ */ jsx(FileDown, { className: "size-4" }), " Download PDF / Print"]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 print:hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "bg-card border border-border/60 rounded-xl p-4 flex items-center justify-between shadow-xs",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground",
							children: "Unique Species"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-2xl font-geist font-black text-foreground",
							children: stats.totalUnique
						})] }), /* @__PURE__ */ jsx("div", {
							className: "size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary",
							children: /* @__PURE__ */ jsx(Trees, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-card border border-border/60 rounded-xl p-4 flex items-center justify-between shadow-xs",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground",
							children: "Total Nursery Stock Qty"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-2xl font-geist font-black text-foreground",
							children: stats.totalQty.toLocaleString()
						})] }), /* @__PURE__ */ jsx("div", {
							className: "size-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500",
							children: /* @__PURE__ */ jsx(CheckCircle2, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-card border border-border/60 rounded-xl p-4 flex items-center justify-between shadow-xs",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground",
							children: "Product Lines Listed"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-2xl font-geist font-black text-foreground",
							children: stats.totalLines
						})] }), /* @__PURE__ */ jsx("div", {
							className: "size-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500",
							children: /* @__PURE__ */ jsx(SlidersHorizontal, { className: "size-5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-card border border-border/60 rounded-xl p-5 mb-6 shadow-xs print:hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-4 pb-3 border-b border-border/40",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(SlidersHorizontal, { className: "size-4 text-primary" }), /* @__PURE__ */ jsx("span", {
							className: "text-xs font-mono font-bold uppercase tracking-wider text-foreground",
							children: "Table Filters"
						})]
					}), isFiltersActive && /* @__PURE__ */ jsxs(Button, {
						variant: "ghost",
						size: "xs",
						onClick: handleResetFilters,
						className: "text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer",
						children: [/* @__PURE__ */ jsx(RotateCcw, { className: "size-3" }), " Reset Filters"]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-4 gap-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
								placeholder: "Search tree, species, size...",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "pl-8 text-xs h-8"
							})]
						}),
						/* @__PURE__ */ jsx(SelectCombobox, {
							value: selectedSpecies,
							onValueChange: setSelectedSpecies,
							options: speciesOptions,
							placeholder: "All Species",
							className: "w-full text-xs h-8"
						}),
						/* @__PURE__ */ jsx(SelectCombobox, {
							value: selectedSize,
							onValueChange: setSelectedSize,
							options: sizeOptions,
							placeholder: "All Container Sizes",
							className: "w-full text-xs h-8"
						}),
						/* @__PURE__ */ jsx(SelectCombobox, {
							value: selectedAvailability,
							onValueChange: setSelectedAvailability,
							options: availabilityOptions,
							placeholder: "All Availability",
							className: "w-full text-xs h-8"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "bg-card border border-border/60 rounded-xl overflow-hidden shadow-xs print:border-none print:shadow-none",
				children: /* @__PURE__ */ jsxs(Table, {
					className: "print:text-black",
					children: [/* @__PURE__ */ jsx(TableHeader, {
						className: "bg-muted/30 print:bg-slate-100",
						children: /* @__PURE__ */ jsxs(TableRow, { children: [
							/* @__PURE__ */ jsx(TableHead, {
								className: "cursor-pointer select-none font-bold py-3 text-xs print:cursor-default",
								onClick: () => handleSort("tree"),
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5",
									children: ["Tree Name", /* @__PURE__ */ jsx("span", {
										className: "print:hidden",
										children: sortKey === "tree" ? sortDirection === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "size-3 text-muted-foreground/45" })
									})]
								})
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "cursor-pointer select-none font-bold py-3 text-xs print:cursor-default",
								onClick: () => handleSort("species"),
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5",
									children: ["Species", /* @__PURE__ */ jsx("span", {
										className: "print:hidden",
										children: sortKey === "species" ? sortDirection === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "size-3 text-muted-foreground/45" })
									})]
								})
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "cursor-pointer select-none font-bold py-3 text-xs print:cursor-default",
								onClick: () => handleSort("container_size"),
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5",
									children: ["Container Size", /* @__PURE__ */ jsx("span", {
										className: "print:hidden",
										children: sortKey === "container_size" ? sortDirection === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "size-3 text-muted-foreground/45" })
									})]
								})
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "cursor-pointer select-none font-bold py-3 text-xs text-right print:cursor-default",
								onClick: () => handleSort("quantity"),
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5 justify-end",
									children: ["Quantity", /* @__PURE__ */ jsx("span", {
										className: "print:hidden",
										children: sortKey === "quantity" ? sortDirection === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "size-3 text-muted-foreground/45" })
									})]
								})
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "cursor-pointer select-none font-bold py-3 text-xs text-right print:cursor-default",
								onClick: () => handleSort("price"),
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5 justify-end",
									children: ["Price", /* @__PURE__ */ jsx("span", {
										className: "print:hidden",
										children: sortKey === "price" ? sortDirection === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "size-3 text-primary" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "size-3 text-muted-foreground/45" })
									})]
								})
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "font-bold py-3 text-xs text-center print:text-left print:pl-4",
								children: "Status"
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "font-bold py-3 text-xs text-right print:hidden",
								children: "Actions"
							})
						] })
					}), /* @__PURE__ */ jsx(TableBody, { children: filteredAndSortedStocks.length > 0 ? filteredAndSortedStocks.map((stock) => {
						const isAvailable = stock.is_available && stock.quantity > 0;
						const isLowStock = isAvailable && stock.quantity <= 150;
						return /* @__PURE__ */ jsxs(TableRow, {
							className: "hover:bg-muted/20 border-b border-border/40 transition-colors print:border-slate-300",
							children: [
								/* @__PURE__ */ jsxs(TableCell, {
									className: "py-3.5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-semibold text-foreground text-sm print:text-slate-900",
										children: stock.tree?.common_name || "Unknown Tree"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground italic font-sans mt-0.5 print:text-slate-500",
										children: stock.tree?.botanical_name
									})]
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "py-3.5 italic text-muted-foreground text-xs font-mono print:text-slate-700 print:font-sans",
									children: stock.tree?.species?.name || "N/A"
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "py-3.5",
									children: /* @__PURE__ */ jsx(Badge, {
										variant: "outline",
										className: "font-mono text-xs border-border/80 print:border-slate-400 print:text-slate-900",
										children: stock.container_size
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "py-3.5 text-right font-mono font-semibold text-sm print:text-slate-900",
									children: stock.quantity.toLocaleString()
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "py-3.5 text-right font-mono text-sm text-foreground print:text-slate-900",
									children: stock.price ? `R ${parseFloat(stock.price).toLocaleString("en-ZA", {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2
									})}` : "On Request"
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "py-3.5 text-center print:text-left print:pl-4",
									children: isAvailable ? isLowStock ? /* @__PURE__ */ jsxs(Badge, {
										variant: "secondary",
										className: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 text-[10px] gap-1 px-1.5 print:bg-transparent print:text-amber-700 print:border-none print:p-0 print:font-semibold",
										children: [
											/* @__PURE__ */ jsx(AlertTriangle, { className: "size-3 print:hidden" }),
											" ",
											"Low Stock"
										]
									}) : /* @__PURE__ */ jsxs(Badge, {
										className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-[10px] gap-1 px-1.5 print:bg-transparent print:text-emerald-700 print:border-none print:p-0 print:font-semibold",
										children: [
											/* @__PURE__ */ jsx(CheckCircle2, { className: "size-3 print:hidden" }),
											" ",
											"In Stock"
										]
									}) : /* @__PURE__ */ jsxs(Badge, {
										variant: "destructive",
										className: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 text-[10px] gap-1 px-1.5 print:bg-transparent print:text-rose-700 print:border-none print:p-0 print:font-semibold",
										children: [
											/* @__PURE__ */ jsx(XCircle, { className: "size-3 print:hidden" }),
											" ",
											"Out of Stock"
										]
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "py-3.5 text-right print:hidden",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-end gap-2",
										children: [stock.tree?.slug && /* @__PURE__ */ jsx(Link, {
											prefetch: "hover",
											href: show(stock.tree.slug),
											className: "inline-flex size-7 items-center justify-center rounded-md border border-border/60 bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-all cursor-pointer",
											title: "View Details",
											children: /* @__PURE__ */ jsx(Eye, { className: "size-3.5" })
										}), /* @__PURE__ */ jsx(Button, {
											asChild: true,
											variant: "default",
											size: "xs",
											className: "h-7 text-xs bg-primary/95 hover:bg-primary font-medium cursor-pointer",
											children: /* @__PURE__ */ jsxs("a", {
												href: `mailto:bruce@primetrees.co.za?subject=Wholesale Request: ${encodeURIComponent(stock.tree?.common_name || "")} (${encodeURIComponent(stock.container_size)})&body=Hi Bruce,%0D%0A%0D%0AI would like to enquire about wholesale pricing and availability for:%0D%0A-%20Tree:%20${encodeURIComponent(stock.tree?.common_name || "")}%20(${encodeURIComponent(stock.tree?.botanical_name || "")})%0D%0A-%20Container%20Size:%20${encodeURIComponent(stock.container_size)}%0D%0A-%20Quantity%20Desired:%20${encodeURIComponent(stock.quantity > 0 ? Math.min(stock.quantity, 10).toString() : "10")}%0D%0A%0D%0APlease let me know the pricing and estimated delivery details.%0D%0A%0D%0AKind regards,%0D%0A[Your Name]`,
												children: [
													/* @__PURE__ */ jsx(Mail, { className: "size-3.5" }),
													" ",
													"Enquire"
												]
											})
										})]
									})
								})
							]
						}, stock.id);
					}) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
						colSpan: 7,
						className: "h-48 text-center py-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center justify-center gap-2",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "size-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground",
									children: /* @__PURE__ */ jsx(Search, { className: "size-6 animate-pulse" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-geist font-bold text-foreground mt-2",
									children: "No results found"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground max-w-xs leading-relaxed",
									children: "We couldn't find any stock matching your search criteria. Try removing some filters or resetting the search."
								}),
								isFiltersActive && /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									onClick: handleResetFilters,
									className: "mt-3 text-xs gap-1 border-border/80 cursor-pointer",
									children: [
										/* @__PURE__ */ jsx(RotateCcw, { className: "size-3" }),
										" ",
										"Clear All Filters"
									]
								})
							]
						})
					}) }) })]
				})
			})
		]
	});
}
AvailabilityList.displayName = "AvailabilityList";
//#endregion
export { AvailabilityList as default };
