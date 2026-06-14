import { i as cn, r as Button, t as AppLayout } from "../ssr.js";
import * as React from "react";
import { useState } from "react";
import { Calculator, ChevronRight, LayoutDashboard, Leaf, ShieldCheck, Terminal, TreePine, Wind } from "lucide-react";
import { cva } from "class-variance-authority";
import { Slider, Slot } from "radix-ui";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/ui/card.tsx
function Card({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card",
		"data-size": size,
		className: cn("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-header",
		className: cn("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-title",
		className: cn("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-content",
		className: cn("px-(--card-spacing)", className),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/slider.tsx
function Slider$1({ className, defaultValue, value, min = 0, max = 100, ...props }) {
	const _values = React.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [
		value,
		defaultValue,
		min,
		max
	]);
	return /* @__PURE__ */ jsxs(Slider.Root, {
		"data-slot": "slider",
		defaultValue,
		value,
		min,
		max,
		className: cn("relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col", className),
		...props,
		children: [/* @__PURE__ */ jsx(Slider.Track, {
			"data-slot": "slider-track",
			className: "relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1",
			children: /* @__PURE__ */ jsx(Slider.Range, {
				"data-slot": "slider-range",
				className: "absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full"
			})
		}), Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx(Slider.Thumb, {
			"data-slot": "slider-thumb",
			className: "relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
		}, index))]
	});
}
//#endregion
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
//#region resources/js/pages/welcome.tsx
function Welcome({ laravelVersion, phpVersion }) {
	const [treeCount, setTreeCount] = useState(10);
	const co2Absorbed = (treeCount * 48).toLocaleString();
	const oxygenProduced = (treeCount * 260).toLocaleString();
	const canopyArea = (treeCount * 150).toLocaleString();
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center animate-fade-in",
		children: [
			/* @__PURE__ */ jsxs(Badge, {
				variant: "outline",
				className: "h-auto px-3 py-1.5 rounded-full bg-primary/5 border-primary/20 text-primary text-xs font-semibold mb-6 animate-pulse select-none",
				children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-primary mr-2" }), "Next-Gen Arboriculture & Forestry Management"]
			}),
			/* @__PURE__ */ jsxs("h1", {
				className: "text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight mb-6",
				children: [
					"Sustaining Green ",
					/* @__PURE__ */ jsx("span", {
						className: "bg-linear-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent",
						children: "Horizons"
					}),
					" & Tree Life"
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed",
				children: "Combining top-tier forestry experts with modern data tools. Manage your estate's arboricultural assets with Filament backend efficiency and Inertia frontend agility."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap justify-center gap-4 mb-16",
				children: [/* @__PURE__ */ jsx(Button, {
					asChild: true,
					size: "lg",
					className: "h-12 px-6 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/5 flex items-center gap-2 group transition-all active:scale-95 cursor-pointer",
					children: /* @__PURE__ */ jsxs("a", {
						href: "/admin",
						children: ["Enter Backend Management", /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
					})
				}), /* @__PURE__ */ jsx(Button, {
					asChild: true,
					size: "lg",
					variant: "outline",
					className: "h-12 px-6 rounded-xl font-semibold bg-background border border-border text-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95 cursor-pointer",
					children: /* @__PURE__ */ jsx("a", {
						href: "#calculator",
						children: "Eco Calculator"
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20 text-left",
				children: [
					/* @__PURE__ */ jsx(Card, {
						className: "bg-card border border-border hover:border-primary/30 hover:shadow-lg dark:hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group",
						children: /* @__PURE__ */ jsxs(CardHeader, {
							className: "p-6",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",
									children: /* @__PURE__ */ jsx(ShieldCheck, { className: "size-6 text-primary" })
								}),
								/* @__PURE__ */ jsx(CardTitle, {
									className: "text-xl font-bold group-hover:text-primary transition-colors",
									children: "Arborist Auditing"
								}),
								/* @__PURE__ */ jsx(CardDescription, {
									className: "text-muted-foreground text-sm leading-relaxed mt-2",
									children: "Complete tree risk assessments, tag coordinates, monitor pest infestations, and record heights with extreme precision."
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(Card, {
						className: "bg-card border border-border hover:border-primary/30 hover:shadow-lg dark:hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group",
						children: /* @__PURE__ */ jsxs(CardHeader, {
							className: "p-6",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",
									children: /* @__PURE__ */ jsx(LayoutDashboard, { className: "size-6 text-primary" })
								}),
								/* @__PURE__ */ jsx(CardTitle, {
									className: "text-xl font-bold group-hover:text-primary transition-colors",
									children: "Agile Dashboard"
								}),
								/* @__PURE__ */ jsx(CardDescription, {
									className: "text-muted-foreground text-sm leading-relaxed mt-2",
									children: "Manage team schedules, invoice details, and tree inspections directly within the Filament-powered backend panel."
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(Card, {
						className: "bg-card border border-border hover:border-primary/30 hover:shadow-lg dark:hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group",
						children: /* @__PURE__ */ jsxs(CardHeader, {
							className: "p-6",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",
									children: /* @__PURE__ */ jsx(Terminal, { className: "size-6 text-primary" })
								}),
								/* @__PURE__ */ jsx(CardTitle, {
									className: "text-xl font-bold group-hover:text-primary transition-colors",
									children: "Wayfinder Integration"
								}),
								/* @__PURE__ */ jsx(CardDescription, {
									className: "text-muted-foreground text-sm leading-relaxed mt-2",
									children: "Fully type-safe routing automatically generated from Laravel routes straight to React components."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs(Card, {
				id: "calculator",
				className: "w-full max-w-3xl bg-card border border-border p-8 rounded-3xl text-left mb-20 shadow-xs",
				children: [/* @__PURE__ */ jsxs(CardHeader, {
					className: "p-0 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(CardTitle, {
						className: "text-2xl font-bold mb-1 text-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Calculator, { className: "size-6 text-primary" }), " Tree Canopy Impact"]
					}), /* @__PURE__ */ jsx(CardDescription, {
						className: "text-muted-foreground text-sm",
						children: "Estimate the ecological impact of your tree planting initiative in real time."
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "text-right flex items-baseline justify-end gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-5xl font-extrabold text-primary tracking-tight",
							children: treeCount
						}), /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground text-sm font-semibold uppercase",
							children: "Trees"
						})]
					})]
				}), /* @__PURE__ */ jsxs(CardContent, {
					className: "p-0",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mb-10 px-1",
						children: /* @__PURE__ */ jsx(Slider$1, {
							value: [treeCount],
							min: 1,
							max: 200,
							step: 1,
							onValueChange: (val) => setTreeCount(val[0]),
							className: "w-full cursor-pointer py-4"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
						children: [
							/* @__PURE__ */ jsxs(Card, {
								className: "bg-muted/30 border border-border hover:border-primary/20 transition-colors",
								children: [/* @__PURE__ */ jsx(CardHeader, {
									className: "p-4 pb-2",
									children: /* @__PURE__ */ jsxs(CardDescription, {
										className: "text-xs text-muted-foreground uppercase font-bold flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(Leaf, { className: "size-3.5 text-primary" }), " CO2 Offset / Year"]
									})
								}), /* @__PURE__ */ jsxs(CardContent, {
									className: "p-4 pt-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "text-2xl font-extrabold text-foreground tracking-tight",
										children: [co2Absorbed, " lbs"]
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs text-muted-foreground",
										children: "carbon absorbed"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs(Card, {
								className: "bg-muted/30 border border-border hover:border-primary/20 transition-colors",
								children: [/* @__PURE__ */ jsx(CardHeader, {
									className: "p-4 pb-2",
									children: /* @__PURE__ */ jsxs(CardDescription, {
										className: "text-xs text-muted-foreground uppercase font-bold flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(Wind, { className: "size-3.5 text-primary" }), " Oxygen Produced"]
									})
								}), /* @__PURE__ */ jsxs(CardContent, {
									className: "p-4 pt-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "text-2xl font-extrabold text-foreground tracking-tight",
										children: [oxygenProduced, " lbs"]
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs text-muted-foreground",
										children: "O₂ generated"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs(Card, {
								className: "bg-muted/30 border border-border hover:border-primary/20 transition-colors",
								children: [/* @__PURE__ */ jsx(CardHeader, {
									className: "p-4 pb-2",
									children: /* @__PURE__ */ jsxs(CardDescription, {
										className: "text-xs text-muted-foreground uppercase font-bold flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(TreePine, { className: "size-3.5 text-primary" }), " Shade Canopy"]
									})
								}), /* @__PURE__ */ jsxs(CardContent, {
									className: "p-4 pt-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "text-2xl font-extrabold text-foreground tracking-tight",
										children: [canopyArea, " sq ft"]
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs text-muted-foreground",
										children: "cooling shade"
									})]
								})]
							})
						]
					})]
				})]
			})
		]
	});
}
Welcome.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "Welcome",
	children: page
});
//#endregion
export { Welcome as default };
