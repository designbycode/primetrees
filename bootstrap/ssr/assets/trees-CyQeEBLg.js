import { c as queryParams, n as Wrapper, s as applyUrlDefaults, t as AppLayout } from "../ssr.js";
import { t as PageHeader } from "./page-header-BUogbAqS.js";
import { t as SelectCombobox } from "./combobox-DShYAb7e.js";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Info, Mail, Search, Trees, X } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";
//#region resources/js/routes/trees/index.ts
/**
* @see \App\Http\Controllers\TreesShowController::__invoke
* @see app/Http/Controllers/TreesShowController.php:14
* @route '/trees/{tree}'
*/
var show = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
show.definition = {
	methods: ["get", "head"],
	url: "/trees/{tree}"
};
/**
* @see \App\Http\Controllers\TreesShowController::__invoke
* @see app/Http/Controllers/TreesShowController.php:14
* @route '/trees/{tree}'
*/
show.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { tree: args };
	if (typeof args === "object" && !Array.isArray(args) && "slug" in args) args = { tree: args.slug };
	if (Array.isArray(args)) args = { tree: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { tree: typeof args.tree === "object" ? args.tree.slug : args.tree };
	return show.definition.url.replace("{tree}", parsedArgs.tree.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\TreesShowController::__invoke
* @see app/Http/Controllers/TreesShowController.php:14
* @route '/trees/{tree}'
*/
show.get = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\TreesShowController::__invoke
* @see app/Http/Controllers/TreesShowController.php:14
* @route '/trees/{tree}'
*/
show.head = (args, options) => ({
	url: show.url(args, options),
	method: "head"
});
Object.assign(show, show);
//#endregion
//#region resources/js/pages/trees/index.tsx
function TreesPage({ treeCategories = [] }) {
	const [selectedCategoryId, setSelectedCategoryId] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [isIndigenousFilter, setIsIndigenousFilter] = useState(false);
	const [isEvergreenFilter, setIsEvergreenFilter] = useState(false);
	const [enquiryTree, setEnquiryTree] = useState(null);
	const [enquirySize, setEnquirySize] = useState("");
	const [enquiryQuantity, setEnquiryQuantity] = useState(1);
	const [enquiryName, setEnquiryName] = useState("");
	const [enquiryEmail, setEnquiryEmail] = useState("");
	const [enquiryCompany, setEnquiryCompany] = useState("");
	const [enquiryMessage, setEnquiryMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	useEffect(() => {
		if (treeCategories && treeCategories.length > 0 && selectedCategoryId === null) setSelectedCategoryId(treeCategories[0].id);
	}, [treeCategories, selectedCategoryId]);
	const openEnquiry = (tree) => {
		setEnquiryTree(tree);
		const availableSizes = tree.stock?.filter((s) => s.is_available) || [];
		if (availableSizes.length > 0) setEnquirySize(availableSizes[0].container_size);
		else if (tree.stock?.length > 0) setEnquirySize(tree.stock[0].container_size);
		else setEnquirySize("100L");
		setEnquiryMessage(`Hello, I would like to request availability and wholesale pricing for the ${tree.common_name} (${tree.botanical_name}) tree. Please send through current lead times and pricing.`);
	};
	const handleEnquirySubmit = (e) => {
		e.preventDefault();
		if (!enquiryName || !enquiryEmail) {
			toast.error("Please fill in your name and email.");
			return;
		}
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			toast.success(`Quote request for ${enquiryTree?.common_name} sent successfully! Bruce will review your enquiry and contact you shortly.`);
			setEnquiryTree(null);
			setEnquiryName("");
			setEnquiryEmail("");
			setEnquiryCompany("");
			setEnquiryQuantity(1);
		}, 1200);
	};
	const filteredTrees = (() => {
		let sourceTrees = [];
		if (searchQuery.trim() === "") sourceTrees = (treeCategories.find((c) => c.id === selectedCategoryId) || treeCategories[0])?.trees || [];
		else sourceTrees = treeCategories.reduce((acc, cat) => {
			cat.trees.forEach((tree) => {
				if (!acc.some((t) => t.id === tree.id)) acc.push(tree);
			});
			return acc;
		}, []);
		return sourceTrees.filter((tree) => {
			const matchesSearch = tree.common_name.toLowerCase().includes(searchQuery.toLowerCase()) || tree.botanical_name.toLowerCase().includes(searchQuery.toLowerCase()) || tree.short_description?.toLowerCase().includes(searchQuery.toLowerCase()) || tree.description?.toLowerCase().includes(searchQuery.toLowerCase()) || tree.species?.name?.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesIndigenous = !isIndigenousFilter || tree.is_indigenous;
			const matchesEvergreen = !isEvergreenFilter || tree.is_evergreen;
			return matchesSearch && matchesIndigenous && matchesEvergreen;
		});
	})();
	return /* @__PURE__ */ jsxs(Wrapper, {
		className: "py-12 min-h-screen",
		children: [
			/* @__PURE__ */ jsx(PageHeader, {
				as: "h1",
				badgeText: "Certified Botanical Nursery Stock",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"TREE SPECIES",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-primary",
						children: "DIRECTORY"
					})
				] }),
				description: "Browse our extensive, uniform wholesale tree stock grown at Mistico Farm in Paarl. We grow and supply top-quality container trees from compact 100L specimens up to massive, mature 2000L landscape installations. Select a category or search below to request wholesale pricing."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-t border-border/60 pt-8",
				children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", {
					className: "text-xl font-geist font-black uppercase tracking-tight text-foreground",
					children: "Search Inventory"
				}) }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-2 items-center",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative w-full sm:w-64",
							children: [
								/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
								/* @__PURE__ */ jsx("input", {
									type: "text",
									placeholder: "Search common/botanical name...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "w-full bg-card border border-border rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold focus:outline-hidden focus:border-primary/50 transition-all text-foreground font-mono"
								}),
								searchQuery && /* @__PURE__ */ jsx("button", {
									onClick: () => setSearchQuery(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs font-mono",
									children: "clear"
								})
							]
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setIsIndigenousFilter(!isIndigenousFilter),
							className: `px-3 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wide border uppercase transition-all cursor-pointer ${isIndigenousFilter ? "bg-primary/15 border-primary text-primary" : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-muted"}`,
							children: "Indigenous Only"
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setIsEvergreenFilter(!isEvergreenFilter),
							className: `px-3 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wide border uppercase transition-all cursor-pointer ${isEvergreenFilter ? "bg-primary/15 border-primary text-primary" : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-muted"}`,
							children: "Evergreen Only"
						})
					]
				})]
			}),
			treeCategories.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-1.5 border-b border-border/80 pb-3 mb-8",
				children: [treeCategories.map((category) => /* @__PURE__ */ jsxs("button", {
					onClick: () => {
						setSelectedCategoryId(category.id);
						if (searchQuery) setSearchQuery("");
					},
					className: `px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${selectedCategoryId === category.id && !searchQuery ? "bg-primary text-primary-foreground shadow-sm shadow-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
					children: [
						category.name,
						" (",
						category.trees?.length || 0,
						")"
					]
				}, category.id)), searchQuery && /* @__PURE__ */ jsxs("span", {
					className: "px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20",
					children: [
						"Search Results (",
						filteredTrees.length,
						")"
					]
				})]
			}), filteredTrees.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: filteredTrees.map((tree) => /* @__PURE__ */ jsxs("div", {
					className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-4.5 transition-all duration-300 hover:border-primary/40 hover:shadow-md flex flex-col h-full",
					children: [/* @__PURE__ */ jsxs(Link, {
						href: show.url(tree),
						prefetch: true,
						className: "relative aspect-video w-full overflow-hidden rounded-2xl bg-muted/50 border border-border/40 block cursor-pointer",
						children: [/* @__PURE__ */ jsx("img", {
							src: tree.image_urls?.[0]?.card || "/images/tree-placeholder.png",
							alt: tree.common_name,
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
							onError: (e) => {
								e.currentTarget.src = "/images/tree-placeholder.png";
							}
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute top-3 left-3 flex flex-wrap gap-1",
							children: [tree.is_indigenous && /* @__PURE__ */ jsx("span", {
								className: "rounded-md bg-emerald-700/95 text-white px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider font-mono",
								children: "Indigenous"
							}), tree.is_evergreen ? /* @__PURE__ */ jsx("span", {
								className: "rounded-md bg-primary/95 text-primary-foreground px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider font-mono",
								children: "Evergreen"
							}) : /* @__PURE__ */ jsx("span", {
								className: "rounded-md bg-amber-600/95 text-white px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider font-mono",
								children: "Deciduous"
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex-1 flex flex-col justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs(Link, {
								href: show.url(tree),
								prefetch: true,
								className: "cursor-pointer block group-hover:text-primary transition-colors",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "font-sans text-xl font-bold tracking-tight text-foreground",
									children: tree.common_name
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs italic text-muted-foreground font-sans mt-0.5",
									children: tree.botanical_name
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2",
								children: tree.short_description || tree.description || "Grown in premium Paarl conditions to guarantee optimal transplant health and canopy uniformity."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-4 pt-3.5 border-t border-border/50 grid grid-cols-2 gap-y-2 gap-x-4 text-[0.7rem] font-sans",
								children: [tree.growth_rate && /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[0.6rem] uppercase font-mono font-bold text-muted-foreground/60",
										children: "Growth Rate"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-foreground font-medium",
										children: tree.growth_rate
									})]
								}), tree.mature_height && /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[0.6rem] uppercase font-mono font-bold text-muted-foreground/60",
										children: "Mature Size"
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-foreground font-medium",
										children: [
											tree.mature_height,
											"m",
											" ",
											tree.mature_width ? `x ${tree.mature_width}m` : ""
										]
									})]
								})]
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "mt-6 pt-4 border-t border-border/50 flex flex-col gap-3",
							children: [tree.stock && tree.stock.length > 0 ? /* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-1.5 items-center",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[0.6rem] uppercase font-mono font-bold text-muted-foreground/60 mr-1",
									children: "Available:"
								}), tree.stock.map((st) => /* @__PURE__ */ jsx("span", {
									className: `rounded-md px-2 py-0.5 text-[0.625rem] font-bold font-mono border ${st.is_available ? "bg-muted/80 border-primary/20 text-foreground" : "bg-muted/10 border-border/30 text-muted-foreground/40 line-through"}`,
									title: st.is_available ? `Quantity: ${st.quantity}` : "Unavailable",
									children: st.container_size
								}, st.id))]
							}) : /* @__PURE__ */ jsx("div", {
								className: "text-[0.6rem] font-mono text-muted-foreground/60",
								children: "Sizing available on request"
							}), /* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-2 gap-2 mt-1",
								children: [/* @__PURE__ */ jsxs(Link, {
									href: show.url(tree),
									prefetch: true,
									className: "inline-flex items-center justify-center gap-1 rounded-xl border border-border bg-card hover:bg-muted py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer text-foreground",
									children: [
										/* @__PURE__ */ jsx(Info, { className: "size-3" }),
										" ",
										"View Details"
									]
								}), /* @__PURE__ */ jsxs("button", {
									onClick: () => openEnquiry(tree),
									className: "inline-flex items-center justify-center gap-1 rounded-xl border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer",
									children: [
										/* @__PURE__ */ jsx(Mail, { className: "size-3" }),
										" ",
										"Quote Request"
									]
								})]
							})]
						})]
					})]
				}, tree.id))
			}) : /* @__PURE__ */ jsxs("div", {
				className: "py-16 text-center border border-dashed border-border rounded-3xl bg-card",
				children: [
					/* @__PURE__ */ jsx(Trees, { className: "size-10 text-muted-foreground/30 mx-auto mb-3" }),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm font-semibold text-muted-foreground font-mono",
						children: "No matching tree species found"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground/60 mt-1 max-w-xs mx-auto",
						children: "Try resetting filters or adjusting search keywords."
					})
				]
			})] }) : /* @__PURE__ */ jsxs("div", {
				className: "py-16 text-center border border-dashed border-border rounded-3xl bg-card",
				children: [/* @__PURE__ */ jsx(Trees, { className: "size-10 text-muted-foreground/30 mx-auto mb-3 animate-pulse" }), /* @__PURE__ */ jsx("p", {
					className: "text-sm font-semibold text-muted-foreground font-mono",
					children: "Nursery catalog is loading..."
				})]
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: enquiryTree && /* @__PURE__ */ jsxs("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4",
				children: [/* @__PURE__ */ jsx(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					onClick: () => setEnquiryTree(null),
					className: "absolute inset-0 bg-background/80 backdrop-blur-xs"
				}), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .95
					},
					className: "relative bg-card border border-border rounded-3xl max-w-md w-full p-6 md:p-8 shadow-xl z-10 flex flex-col gap-5",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: () => setEnquiryTree(null),
							className: "absolute top-5 right-5 p-1 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer",
							children: /* @__PURE__ */ jsx(X, { className: "size-4" })
						}),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-primary text-[0.65rem] font-mono font-bold tracking-wider uppercase bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20",
								children: "Wholesale Price Enquiry"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-xl md:text-2xl font-geist font-black text-foreground mt-2 leading-none",
								children: "Quote Request"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-xs text-muted-foreground mt-1 flex items-center gap-1.5",
								children: [
									"Selected:",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "font-bold text-foreground",
										children: enquiryTree.common_name
									}),
									" ",
									/* @__PURE__ */ jsxs("span", {
										className: "italic",
										children: [
											"(",
											enquiryTree.botanical_name,
											")"
										]
									})
								]
							})
						] }),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: handleEnquirySubmit,
							className: "space-y-3.5",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "enquiryName",
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1",
									children: "Your Name *"
								}), /* @__PURE__ */ jsx("input", {
									id: "enquiryName",
									type: "text",
									required: true,
									value: enquiryName,
									onChange: (e) => setEnquiryName(e.target.value),
									className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50",
									placeholder: "e.g. Sarah Jenkins"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "enquiryEmail",
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1",
									children: "Email Address *"
								}), /* @__PURE__ */ jsx("input", {
									id: "enquiryEmail",
									type: "email",
									required: true,
									value: enquiryEmail,
									onChange: (e) => setEnquiryEmail(e.target.value),
									className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50",
									placeholder: "e.g. sarah@developer.co.za"
								})] }),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "enquirySize",
										className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1",
										children: "Container Size"
									}), /* @__PURE__ */ jsx(SelectCombobox, {
										id: "enquirySize",
										value: enquirySize,
										onValueChange: setEnquirySize,
										options: enquiryTree?.stock?.length ? enquiryTree.stock.map((st) => ({
											value: st.container_size,
											label: `${st.container_size} ${st.is_available ? "" : "(Backorder)"}`.trim()
										})) : [
											{
												value: "100L",
												label: "100L Specimen"
											},
											{
												value: "200L",
												label: "200L Specimen"
											},
											{
												value: "500L",
												label: "500L Specimen"
											},
											{
												value: "2000L",
												label: "2000L Mature"
											}
										],
										placeholder: "Select Size",
										className: "w-full text-xs h-8"
									})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "enquiryQuantity",
										className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1",
										children: "Quantity"
									}), /* @__PURE__ */ jsx("input", {
										id: "enquiryQuantity",
										type: "number",
										min: 1,
										value: enquiryQuantity,
										onChange: (e) => setEnquiryQuantity(parseInt(e.target.value) || 1),
										className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-1.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "enquiryCompany",
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1",
									children: "Company Name"
								}), /* @__PURE__ */ jsx("input", {
									id: "enquiryCompany",
									type: "text",
									value: enquiryCompany,
									onChange: (e) => setEnquiryCompany(e.target.value),
									className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50",
									placeholder: "e.g. GreenScape Contractors (Optional)"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "enquiryMessage",
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1",
									children: "Enquiry Message"
								}), /* @__PURE__ */ jsx("textarea", {
									id: "enquiryMessage",
									rows: 3,
									value: enquiryMessage,
									onChange: (e) => setEnquiryMessage(e.target.value),
									className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50 resize-none"
								})] }),
								/* @__PURE__ */ jsx("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all disabled:opacity-50 mt-2 cursor-pointer",
									children: isSubmitting ? "Sending..." : "Submit Quote Request"
								})
							]
						})
					]
				})]
			}) })
		]
	});
}
TreesPage.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "Species Directory",
	children: page
});
//#endregion
export { TreesPage as default };
