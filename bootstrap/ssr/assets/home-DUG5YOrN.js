import { a as trees, i as cn, n as Wrapper, o as visit, r as Button, t as AppLayout } from "../ssr.js";
import { Link } from "@inertiajs/react";
import { ArrowRight, Award, Droplets, Globe, Info, Layers, Leaf, MapPin, Phone, Ruler, ShieldCheck, Sparkles, Sun, Trees, TrendingUp, Truck } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
//#region resources/js/components/app/hero.tsx
function Hero() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
		className: "mb-14 text-left w-full pt-6 md:pt-10",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-1.5 mb-3",
				children: /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1.5 text-primary text-xs font-mono font-bold tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20",
					children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "size-3.5" }), " Wholesale Trees & Shrubs in Bulk • Cape Town & Paarl"]
				})
			}),
			/* @__PURE__ */ jsxs("h2", {
				className: "text-5xl sm:text-7xl md:text-8xl lg:text-[95px] font-geist font-black tracking-tighter uppercase leading-[0.85] text-foreground wrap-break-word",
				children: [
					"NATURE'S",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-primary",
						children: "SCULPTURE"
					}),
					/* @__PURE__ */ jsx("br", {}),
					"BORN ",
					/* @__PURE__ */ jsx("span", { children: "FOR LANDSCAPES" })
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start",
				children: /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-8",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-base sm:text-lg text-muted-foreground leading-relaxed font-sans max-w-3xl",
						children: "Prime Trees grows and supplies large volumes of uniform, top-quality trees and shrubs — from compact 100L specimens to mature 2000L trees. We supply landscape architects, contractors, property developers, schools, and municipalities at competitive wholesale prices, while also offering mature 2000L trees directly to the public."
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-4 mt-8",
						children: [/* @__PURE__ */ jsx(Button, {
							asChild: true,
							size: "lg",
							className: "h-12 px-6 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/10 flex items-center gap-2 group transition-all active:scale-95 cursor-pointer border-none",
							children: /* @__PURE__ */ jsxs(Link, {
								href: trees.url(),
								children: ["Explore Species Directory", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
							})
						}), /* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "h-12 px-6 rounded-xl font-semibold bg-background border border-border text-foreground hover:bg-muted transition-all active:scale-95 cursor-pointer flex items-center gap-2",
							children: /* @__PURE__ */ jsxs(Link, {
								href: visit.url(),
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }), "Contact Sales Team"]
							})
						})]
					})]
				})
			})
		]
	}) });
}
//#endregion
//#region resources/js/components/app/bento-card.tsx
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24,
		filter: "blur(6px)"
	},
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			type: "spring",
			stiffness: 120,
			damping: 18
		}
	}
};
var container = {
	hidden: {},
	show: { transition: {
		staggerChildren: .08,
		delayChildren: .05
	} }
};
function BentoCard({ children, className, noVariant }) {
	return /* @__PURE__ */ jsx(motion.div, {
		variants: noVariant ? void 0 : fadeUp,
		className: cn("group relative overflow-hidden rounded-3xl border border-border bg-card p-6", "shadow-sm transition-colors", className),
		children
	});
}
//#endregion
//#region resources/images/maple.png
var maple_default = "/build/assets/maple-BxqZ8PyM.png";
//#endregion
//#region resources/images/leaves.png
var leaves_default = "/build/assets/leaves-BwvxAKwZ.png";
//#endregion
//#region resources/images/forest.png
var forest_default = "/build/assets/forest-C4g0yAM8.png";
//#endregion
//#region resources/images/field.png
var field_default = "/build/assets/field-WdJ_SHc0.png";
//#endregion
//#region resources/images/mountains.png
var mountains_default = "/build/assets/mountains-D61bn7K8.png";
//#endregion
//#region resources/js/components/app/grid-feature-spotlight.tsx
var facts = [
	{
		icon: Sun,
		label: "Light",
		value: "Partial shade"
	},
	{
		icon: Droplets,
		label: "Water",
		value: "Keep moist"
	},
	{
		icon: Ruler,
		label: "Height",
		value: "4–6 m"
	},
	{
		icon: Leaf,
		label: "Foliage",
		value: "Crimson red"
	}
];
function GridFeatureSpotlight() {
	return /* @__PURE__ */ jsxs(motion.div, {
		variants: container,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		className: "group/grid grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				variants: fadeUp,
				className: "group relative col-span-2 md:col-span-3 row-span-2 flex min-h-80 flex-col overflow-hidden rounded-3xl border-2 border-primary/40 bg-muted p-7 md:min-h-104",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: maple_default,
						alt: "Japanese red maple foliage",
						className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 right-0 -z-10 bg-linear-to-r from-muted via-muted/85 to-transparent backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-none group-hover:from-muted/70" }),
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-full md:max-w-[60%]",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary",
								children: [/* @__PURE__ */ jsx(Leaf, { className: "size-3" }), "Featured species"]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 font-sans text-3xl font-black tracking-tighter text-foreground text-balance md:text-5xl",
								children: "Japanese Red Maple"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: [
									/* @__PURE__ */ jsx("em", {
										className: "font-medium text-foreground/80",
										children: "Acer palmatum"
									}),
									" ",
									"— a graceful ornamental prized for its fiery, lace-like canopy through autumn."
								]
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-auto grid grid-cols-2 gap-3 pt-6 max-w-full md:max-w-[60%]",
						children: facts.map((f) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid size-9 shrink-0 place-items-center rounded-xl bg-background/70 text-primary backdrop-blur-sm",
								children: /* @__PURE__ */ jsx(f.icon, { className: "size-4" })
							}), /* @__PURE__ */ jsxs("span", {
								className: "leading-tight",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-[0.7rem] uppercase tracking-wide text-muted-foreground",
									children: f.label
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-medium text-foreground",
									children: f.value
								})]
							})]
						}, f.label))
					})
				]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				variants: fadeUp,
				whileHover: { y: -4 },
				className: "group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: mountains_default,
						alt: "Mountain landscape",
						className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-15 transition-all duration-500 group-hover:scale-105 group-hover:opacity-25"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-linear-to-b from-card/30 via-card/75 to-card backdrop-blur-[1px] transition-all duration-500 group-hover:backdrop-blur-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold uppercase tracking-wider text-primary",
							children: "Hardiness"
						}), /* @__PURE__ */ jsx(Globe, { className: "size-4 text-muted-foreground transition-colors group-hover:text-primary" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline gap-1.5",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-sans text-4xl font-black tracking-tighter text-foreground",
									children: "5–8"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-medium text-muted-foreground",
									children: "USDA Zones"
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-3 relative h-1.5 w-full rounded-full bg-muted overflow-hidden",
								children: /* @__PURE__ */ jsx("div", { className: "absolute left-[40%] right-[30%] h-full rounded-full bg-primary/80 transition-all duration-300 group-hover:bg-primary" })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-1 flex justify-between text-[0.65rem] text-muted-foreground/60 font-mono",
								children: [/* @__PURE__ */ jsx("span", { children: "Zone 1" }), /* @__PURE__ */ jsx("span", { children: "Zone 11" })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-xs leading-normal text-muted-foreground",
								children: "Thrives in temperate to cool-moderate climates."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				variants: fadeUp,
				whileHover: { y: -4 },
				className: "group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: leaves_default,
						alt: "Leaves background",
						className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-15 transition-all duration-500 group-hover:scale-105 group-hover:opacity-25"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-linear-to-b from-card/30 via-card/75 to-card backdrop-blur-[1px] transition-all duration-500 group-hover:backdrop-blur-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold uppercase tracking-wider text-primary",
							children: "Cultivars"
						}), /* @__PURE__ */ jsx(Sparkles, { className: "size-4 text-muted-foreground transition-colors group-hover:text-primary" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-sans text-4xl font-black tracking-tighter text-foreground",
								children: "120+"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold text-muted-foreground",
								children: "Named Varieties"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 flex flex-wrap gap-1 opacity-70 transition-opacity duration-300 group-hover:opacity-100",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] font-medium text-foreground/80 border border-border/50",
										children: "Bloodgood"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] font-medium text-foreground/80 border border-border/50",
										children: "Sango Kaku"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] font-medium text-foreground/80 border border-border/50",
										children: "Deshojo"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-xs leading-normal text-muted-foreground",
								children: "Wide range of leaf silhouettes and striking seasonal palettes."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				variants: fadeUp,
				whileHover: { y: -4 },
				className: "group relative col-span-2 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: forest_default,
						alt: "Dense forest background",
						className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-20"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-linear-to-r from-card via-card/90 to-card/50 backdrop-blur-[1px]" }),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-4 h-full items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col justify-between h-full",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-primary",
									children: "Sim Map"
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "mt-2 font-sans text-xl font-bold tracking-tight text-foreground",
									children: "Canopy Simulator"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground",
									children: "Position specimen trees onto a spatial grid to estimate carbon and oxygen offset values in real-time."
								})
							] }), /* @__PURE__ */ jsxs("div", {
								className: "mt-4 flex items-center gap-2 text-[0.7rem] font-mono text-primary font-bold",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "relative flex h-2 w-2",
									children: [/* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })]
								}), "SIMULATOR ACTIVE"]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative flex items-center justify-center p-3 rounded-2xl bg-muted/50 border border-border/50 h-32 md:h-full",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-4 gap-3",
								children: [...Array(16)].map((_, i) => {
									const isActive = [
										1,
										5,
										6,
										11,
										14
									].includes(i);
									return /* @__PURE__ */ jsx("div", {
										className: `relative size-2.5 rounded-full transition-all duration-500 ${isActive ? "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)] scale-110" : "bg-foreground/15 group-hover:bg-foreground/25"}`,
										children: isActive && /* @__PURE__ */ jsx("span", { className: "absolute -inset-1 rounded-full border border-primary/40 animate-pulse" })
									}, i);
								})
							}), /* @__PURE__ */ jsxs("svg", {
								className: "absolute inset-0 size-full pointer-events-none opacity-40",
								children: [
									/* @__PURE__ */ jsx("line", {
										x1: "30%",
										y1: "25%",
										x2: "45%",
										y2: "50%",
										stroke: "currentColor",
										strokeWidth: "1",
										strokeDasharray: "3",
										className: "text-primary"
									}),
									/* @__PURE__ */ jsx("line", {
										x1: "45%",
										y1: "50%",
										x2: "50%",
										y2: "25%",
										stroke: "currentColor",
										strokeWidth: "1",
										strokeDasharray: "3",
										className: "text-primary"
									}),
									/* @__PURE__ */ jsx("line", {
										x1: "45%",
										y1: "50%",
										x2: "70%",
										y2: "75%",
										stroke: "currentColor",
										strokeWidth: "1",
										strokeDasharray: "3",
										className: "text-primary"
									})
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				variants: fadeUp,
				whileHover: { y: -4 },
				className: "group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: field_default,
						alt: "Fields",
						className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-20"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-linear-to-b from-card/30 via-card/75 to-card backdrop-blur-[1px] transition-all duration-500 group-hover:backdrop-blur-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold uppercase tracking-wider text-primary",
							children: "Growth"
						}), /* @__PURE__ */ jsx(Ruler, { className: "size-4 text-muted-foreground transition-colors group-hover:text-primary" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-sans text-4xl font-black tracking-tighter text-foreground",
								children: "Slow"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold text-muted-foreground",
								children: "20–30 cm / year"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-4 flex items-end gap-3 justify-center h-12",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center gap-1 w-full",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[0.6rem] font-mono text-muted-foreground/80",
											children: "Yr 1"
										}), /* @__PURE__ */ jsx("div", { className: "w-full h-3 rounded-t bg-muted group-hover:bg-primary/30 transition-colors duration-300" })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center gap-1 w-full",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[0.6rem] font-mono text-muted-foreground/80",
											children: "Yr 5"
										}), /* @__PURE__ */ jsx("div", { className: "w-full h-7 rounded-t bg-muted/80 group-hover:bg-primary/60 transition-colors duration-300" })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center gap-1 w-full",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[0.6rem] font-mono text-muted-foreground/80",
											children: "Yr 10"
										}), /* @__PURE__ */ jsx("div", { className: "w-full h-12 rounded-t bg-primary shadow-[0_0_6px_rgba(var(--primary),0.4)]" })]
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-xs leading-normal text-muted-foreground",
								children: "Ideal for container planting and small city gardens."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				variants: fadeUp,
				whileHover: { y: -4 },
				className: "group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: "CO₂ Offset"
					}), /* @__PURE__ */ jsx(TrendingUp, { className: "size-4 text-muted-foreground transition-colors group-hover:text-primary" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-baseline gap-1",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-sans text-4xl font-black tracking-tighter text-foreground",
								children: "-22.4"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-bold text-primary",
								children: "kg"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold text-muted-foreground",
							children: "Per tree / year"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 h-10 w-full overflow-hidden",
							children: /* @__PURE__ */ jsxs("svg", {
								className: "h-full w-full",
								viewBox: "0 0 100 40",
								children: [/* @__PURE__ */ jsx("path", {
									d: "M 0,35 Q 20,30 40,25 T 80,10 T 100,5",
									fill: "none",
									stroke: "var(--primary)",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									className: "opacity-80 group-hover:opacity-100 transition-opacity"
								}), /* @__PURE__ */ jsx("circle", {
									cx: "100",
									cy: "5",
									r: "3",
									fill: "var(--primary)",
									className: "animate-pulse"
								})]
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-xs leading-normal text-muted-foreground",
							children: "High performance urban cooling and dust capture capability."
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region resources/images/prime-trees-wholesale-tree-nursery.jpg
var prime_trees_wholesale_tree_nursery_default = "/build/assets/prime-trees-wholesale-tree-nursery-CUhFS5Vc.jpg";
//#endregion
//#region resources/js/pages/home.tsx
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsxs(Wrapper, {
			className: "py-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-primary text-xs font-mono font-bold tracking-wider uppercase",
					children: "• Botanical Highlights"
				}), /* @__PURE__ */ jsx("h3", {
					className: "text-3xl md:text-5xl font-geist font-black tracking-tighter uppercase text-foreground mt-1",
					children: "Nursery Spotlight"
				})]
			}), /* @__PURE__ */ jsx(GridFeatureSpotlight, {})]
		}),
		/* @__PURE__ */ jsxs(Wrapper, {
			className: "py-12 pb-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-primary text-xs font-mono font-bold tracking-wider uppercase",
					children: "• Wholesale Standards"
				}), /* @__PURE__ */ jsx("h3", {
					className: "text-3xl md:text-5xl font-geist font-black tracking-tighter uppercase text-foreground mt-1",
					children: "The Prime Trees Difference"
				})]
			}), /* @__PURE__ */ jsxs(motion.div, {
				variants: container,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				className: "group/grid grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5",
				children: [
					/* @__PURE__ */ jsxs(BentoCard, {
						className: "md:col-span-2 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Quality Standards"
							}), /* @__PURE__ */ jsx(Award, { className: "size-4 text-muted-foreground transition-colors group-hover:text-primary" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex-1 flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "font-sans text-xl font-bold tracking-tight text-foreground",
								children: "Consistent Quality, Guaranteed Uniformity"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: "Each batch is meticulously matched for size, shape, and root health, ensuring your landscaping project looks cohesive and balanced from day one. Since launching in 2014, we have built a reputation for dependable supply and consistently high standards across every order."
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex justify-around items-end h-14 bg-muted/30 border border-border/50 rounded-xl p-2.5",
								children: [[
									1,
									2,
									3
								].map((i) => /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center gap-1 group-hover/grid:scale-105 transition-transform duration-300",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "relative flex items-center justify-center",
										children: [/* @__PURE__ */ jsx(Trees, { className: "size-6 text-primary" }), /* @__PURE__ */ jsx("span", {
											className: "absolute -top-1 -right-1 size-2.5 bg-emerald-600 rounded-full border border-background flex items-center justify-center text-[6px] text-white",
											children: "✓"
										})]
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-[0.55rem] font-mono font-bold text-muted-foreground",
										children: ["Match ", i]
									})]
								}, i)), /* @__PURE__ */ jsxs("div", {
									className: "text-right flex flex-col justify-center border-l border-border/60 pl-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-mono font-bold text-primary",
										children: "100% MATCHED"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[0.6rem] text-muted-foreground font-sans",
										children: "For Caliper & Canopy"
									})]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs(BentoCard, {
						className: "md:col-span-1 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Founder & Expertise"
							}), /* @__PURE__ */ jsx(Sparkles, { className: "size-4 text-muted-foreground transition-colors group-hover:text-primary" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex flex-col justify-between h-full",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "font-sans text-xl font-bold tracking-tight text-foreground",
								children: "A Passion for Trees"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: "Prime Trees was founded by Bruce Stewart, a horticulturalist with over 25 years of hands-on experience growing premium trees. Bruce's deep understanding of cultivation and attention to detail sets the quality standard."
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "mt-4 pt-3 border-t border-border/60 flex items-center gap-2.5",
								children: [/* @__PURE__ */ jsx("div", {
									className: "size-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-geist font-black text-xs",
									children: "BS"
								}), /* @__PURE__ */ jsxs("div", {
									className: "leading-tight",
									children: [/* @__PURE__ */ jsx("span", {
										className: "block text-[0.7rem] uppercase tracking-wide text-foreground font-bold",
										children: "Bruce Stewart"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[0.65rem] text-muted-foreground font-mono",
										children: "Founder / Horticulturalist"
									})]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs(BentoCard, {
						className: "md:col-span-1 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Logistics"
							}), /* @__PURE__ */ jsx(Truck, { className: "size-4 text-muted-foreground transition-colors group-hover:text-primary" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex flex-col justify-between h-full",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "font-sans text-xl font-bold tracking-tight text-foreground",
								children: "End-to-End Delivery"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: "Transporting large mature trees safely takes experience. Our dedicated transport and delivery service handles loading, secure hauling, and precise crane placement on-site — minimizing stress on the plant and project delays."
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "mt-4 flex items-center gap-2 text-[0.65rem] font-mono text-primary font-bold bg-primary/5 p-2 rounded-lg border border-primary/10",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "relative flex h-1.5 w-1.5 shrink-0",
									children: [/* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" })]
								}), "HYDRAULIC PLACEMENT ACTIVE"]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs(BentoCard, {
						className: "md:col-span-2 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: prime_trees_wholesale_tree_nursery_default,
								alt: "Prime Trees wholesale tree nursery in Paarl",
								className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-20 group-hover:scale-[1.02] group-hover:opacity-35 transition-all duration-500"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-linear-to-b from-card/30 via-card/80 to-card backdrop-blur-[1px]" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-primary",
									children: "Nursery Tour"
								}), /* @__PURE__ */ jsx(MapPin, { className: "size-4 text-muted-foreground transition-colors group-hover:text-primary" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-4 flex-1 flex flex-col justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
									className: "font-sans text-xl font-bold tracking-tight text-foreground",
									children: "Visit Our Farm Nursery in Paarl"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground",
									children: "Set against the stunning mountain backdrop of the Paarl region, Mistico Farm is home to the Prime Trees nursery — a thriving 20-hectare operation with more than 80,000 mature trees growing on-site. Visitors are welcome to tour the farm and see the scale and quality firsthand."
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex flex-wrap items-center justify-between gap-4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 text-xs font-mono font-bold text-muted-foreground",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ jsx(Trees, { className: "size-3 text-primary" }),
												" ",
												"20+ Hectares"
											]
										}), /* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ jsx(Layers, { className: "size-3 text-primary" }),
												" ",
												"80,000+ Stock"
											]
										})]
									}), /* @__PURE__ */ jsx(Button, {
										asChild: true,
										size: "sm",
										className: "bg-primary/90 text-primary-foreground hover:bg-primary font-mono text-[0.65rem] font-bold uppercase tracking-wider h-8 rounded-lg border-none cursor-pointer",
										children: /* @__PURE__ */ jsxs(Link, {
											href: visit.url(),
											children: [
												"Book Tour",
												" ",
												/* @__PURE__ */ jsx(ArrowRight, { className: "size-3 ml-1" })
											]
										})
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs(BentoCard, {
						className: "md:col-span-2 flex flex-col justify-between min-h-64 md:min-h-80 border-border/80 hover:border-primary/40 hover:shadow-md transition-all",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Sizing Catalog"
							}), /* @__PURE__ */ jsx(Info, { className: "size-4 text-muted-foreground transition-colors group-hover:text-primary" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex-1 flex flex-col justify-between",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
									className: "font-sans text-xl font-bold tracking-tight text-foreground",
									children: "From 100L Specimens to Mature 2000L Giants"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground",
									children: "We cater specifically to landscape architects, property developers, schools, contractors, and municipalities. Our stock ranges from compact starter specimens to fully mature canopy-instant trees."
								})] }),
								/* @__PURE__ */ jsx("div", {
									className: "mt-4 grid grid-cols-4 gap-2 text-center items-center",
									children: [
										{
											label: "100L",
											desc: "Compact"
										},
										{
											label: "200L",
											desc: "Established"
										},
										{
											label: "500L",
											desc: "Specimen"
										},
										{
											label: "2000L",
											desc: "Mature"
										}
									].map((size) => /* @__PURE__ */ jsxs("div", {
										className: "bg-muted/40 border border-border/60 rounded-xl p-2 flex flex-col justify-center hover:border-primary/30 transition-all",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-sm font-geist font-black text-primary",
											children: size.label
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[0.55rem] text-muted-foreground mt-0.5 leading-tight font-sans",
											children: size.desc
										})]
									}, size.label))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[0.65rem] font-mono text-muted-foreground",
										children: "Wholesale Inventory Sizing Guide"
									}), /* @__PURE__ */ jsx(Button, {
										asChild: true,
										size: "sm",
										className: "bg-primary/90 text-primary-foreground hover:bg-primary font-mono text-[0.65rem] font-bold uppercase tracking-wider h-8 rounded-lg border-none cursor-pointer",
										children: /* @__PURE__ */ jsxs(Link, {
											href: trees.url(),
											children: [
												"View Stock",
												" ",
												/* @__PURE__ */ jsx(ArrowRight, { className: "size-3 ml-1" })
											]
										})
									})]
								})
							]
						})]
					})
				]
			})]
		})
	] });
}
Home.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "Home",
	children: page
});
//#endregion
export { Home as default };
