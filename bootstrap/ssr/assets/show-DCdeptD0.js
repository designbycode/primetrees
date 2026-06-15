import { a as trees, n as Wrapper, t as AppLayout } from "../ssr.js";
import { t as SelectCombobox } from "./combobox-DShYAb7e.js";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { ArrowLeft, Droplets, Leaf, Mail, Ruler } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
//#region resources/js/pages/trees/show.tsx
function TreeShowPage({ tree }) {
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const availableSizes = tree.stock?.filter((s) => s.is_available) || [];
	const [enquirySize, setEnquirySize] = useState(availableSizes.length > 0 ? availableSizes[0].container_size : tree.stock?.length > 0 ? tree.stock[0].container_size : "100L");
	const [enquiryQuantity, setEnquiryQuantity] = useState(1);
	const [enquiryName, setEnquiryName] = useState("");
	const [enquiryEmail, setEnquiryEmail] = useState("");
	const [enquiryCompany, setEnquiryCompany] = useState("");
	const [enquiryMessage, setEnquiryMessage] = useState(`Hello, I would like to request availability and wholesale pricing for the ${tree.common_name} (${tree.botanical_name}) tree. Please send through current lead times and pricing.`);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleEnquirySubmit = (e) => {
		e.preventDefault();
		if (!enquiryName || !enquiryEmail) {
			toast.error("Please fill in your name and email.");
			return;
		}
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			toast.success(`Quote request for ${tree.common_name} sent successfully! Bruce will review your enquiry and contact you shortly.`);
			setEnquiryName("");
			setEnquiryEmail("");
			setEnquiryCompany("");
			setEnquiryQuantity(1);
		}, 1200);
	};
	return /* @__PURE__ */ jsxs(Wrapper, {
		className: "py-12 min-h-screen",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mb-8",
			children: /* @__PURE__ */ jsxs(Link, {
				href: trees.url(),
				className: "inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group cursor-pointer",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4 transition-transform group-hover:-translate-x-1" }), "Back to Directory"]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-7 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm",
						children: [/* @__PURE__ */ jsx("img", {
							src: tree.image_urls?.[activeImageIndex]?.large || tree.image_urls?.[activeImageIndex]?.original || "/images/tree-placeholder.png",
							alt: tree.common_name,
							className: "h-full w-full object-cover transition-all duration-300",
							onError: (e) => {
								e.currentTarget.src = "/images/tree-placeholder.png";
							}
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute top-4 left-4 flex flex-wrap gap-1.5",
							children: [tree.is_indigenous && /* @__PURE__ */ jsx("span", {
								className: "rounded-md bg-emerald-700/95 text-white px-2.5 py-1 text-xs font-bold uppercase tracking-wider font-mono",
								children: "Indigenous"
							}), tree.is_evergreen ? /* @__PURE__ */ jsx("span", {
								className: "rounded-md bg-primary/95 text-primary-foreground px-2.5 py-1 text-xs font-bold uppercase tracking-wider font-mono",
								children: "Evergreen"
							}) : /* @__PURE__ */ jsx("span", {
								className: "rounded-md bg-amber-600/95 text-white px-2.5 py-1 text-xs font-bold uppercase tracking-wider font-mono",
								children: "Deciduous"
							})]
						})]
					}),
					tree.image_urls && tree.image_urls.length > 1 && /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-3",
						children: tree.image_urls.map((img, idx) => /* @__PURE__ */ jsx("button", {
							onClick: () => setActiveImageIndex(idx),
							className: `relative w-20 aspect-video rounded-xl overflow-hidden border bg-card cursor-pointer transition-all duration-200 ${activeImageIndex === idx ? "border-primary ring-2 ring-primary/20 scale-102" : "border-border/80 hover:border-foreground/40"}`,
							children: /* @__PURE__ */ jsx("img", {
								src: img.thumb,
								alt: `${tree.common_name} thumbnail ${idx + 1}`,
								className: "w-full h-full object-cover",
								onError: (e) => {
									e.currentTarget.src = "/images/tree-placeholder.png";
								}
							})
						}, idx))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bg-card border border-border rounded-2xl p-4 flex flex-col justify-between min-h-[90px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[0.625rem] font-mono font-bold text-muted-foreground/60 uppercase tracking-wider",
									children: "Growth Rate"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-geist font-black text-foreground capitalize mt-1.5",
									children: tree.growth_rate || "Moderate"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-card border border-border rounded-2xl p-4 flex flex-col justify-between min-h-[90px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[0.625rem] font-mono font-bold text-muted-foreground/60 uppercase tracking-wider",
									children: "Watering"
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-sm font-geist font-black text-foreground capitalize mt-1.5 flex items-center gap-1",
									children: [/* @__PURE__ */ jsx(Droplets, { className: "size-4 text-primary shrink-0" }), tree.water_requirement || "Medium"]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-card border border-border rounded-2xl p-4 flex flex-col justify-between min-h-[90px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[0.625rem] font-mono font-bold text-muted-foreground/60 uppercase tracking-wider",
									children: "Mature Height"
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-sm font-geist font-black text-foreground capitalize mt-1.5 flex items-center gap-1",
									children: [
										/* @__PURE__ */ jsx(Ruler, { className: "size-4 text-primary shrink-0" }),
										tree.mature_height ? `${tree.mature_height}m` : "N/A",
										tree.mature_width ? ` x ${tree.mature_width}m` : ""
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-card border border-border rounded-2xl p-4 flex flex-col justify-between min-h-[90px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[0.625rem] font-mono font-bold text-muted-foreground/60 uppercase tracking-wider",
									children: "Foliage Type"
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-sm font-geist font-black text-foreground capitalize mt-1.5 flex items-center gap-1",
									children: [/* @__PURE__ */ jsx(Leaf, { className: "size-4 text-primary shrink-0" }), tree.is_evergreen ? "Evergreen" : "Deciduous"]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "pt-6 border-t border-border/60 space-y-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-geist font-black uppercase tracking-tight text-foreground",
							children: "Horticultural Profile"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-sm leading-relaxed text-muted-foreground font-sans space-y-3",
							children: /* @__PURE__ */ jsx("p", { children: tree.description || tree.short_description || "No extended description is currently available for this species. This specimen is cultivated under premium conditions at our Paarl valley nursery, ensuring exceptional root establishment, structural uniformity, and overall transplant success." })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "pt-6 border-t border-border/60",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-geist font-black uppercase tracking-tight text-foreground mb-4",
							children: "Botanical & Landscape Specifications"
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-xs font-sans",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex justify-between py-2 border-b border-border/40",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "Origin Status"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-semibold text-foreground",
										children: tree.is_indigenous ? "Indigenous to South Africa" : "Exotic / Cultivated"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex justify-between py-2 border-b border-border/40",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "Drought Tolerance"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-semibold text-foreground capitalize",
										children: tree.drought_tolerance || "Moderate"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex justify-between py-2 border-b border-border/40",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "Frost Tolerance"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-semibold text-foreground capitalize",
										children: tree.frost_tolerance || "High"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex justify-between py-2 border-b border-border/40",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "Flowering Season"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-semibold text-foreground capitalize",
										children: tree.flowering_season || "Non-flowering / Foliage"
									})]
								}),
								tree.flower_colour && /* @__PURE__ */ jsxs("div", {
									className: "flex justify-between py-2 border-b border-border/40",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "Flower Colour"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-semibold text-foreground capitalize",
										children: tree.flower_colour
									})]
								}),
								tree.category && /* @__PURE__ */ jsxs("div", {
									className: "flex justify-between py-2 border-b border-border/40",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "Category"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-semibold text-foreground",
										children: tree.category.name
									})]
								}),
								tree.species && /* @__PURE__ */ jsxs("div", {
									className: "flex justify-between py-2 border-b border-border/40",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "Species family"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-semibold text-foreground",
										children: tree.species.name
									})]
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5 space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "bg-card border border-border rounded-3xl p-6 shadow-xs",
						children: [
							tree.category && /* @__PURE__ */ jsx("span", {
								className: "text-primary text-[0.625rem] font-mono font-bold tracking-wider uppercase bg-primary/10 px-2.5 py-1 rounded-md border border-primary/15",
								children: tree.category.name
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-3xl sm:text-4xl font-geist font-black text-foreground mt-4 leading-tight uppercase",
								children: tree.common_name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-base italic text-primary mt-1 font-sans font-medium",
								children: tree.botanical_name
							}),
							tree.short_description && /* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground mt-4 leading-relaxed font-sans",
								children: tree.short_description
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-card border border-border rounded-3xl p-6 shadow-xs space-y-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-mono font-bold uppercase tracking-wider text-foreground",
							children: "Nursery Stock & Sizing"
						}), tree.stock && tree.stock.length > 0 ? /* @__PURE__ */ jsx("div", {
							className: "space-y-2.5",
							children: tree.stock.map((st) => /* @__PURE__ */ jsxs("div", {
								className: `flex items-center justify-between p-3 rounded-2xl border text-xs ${st.is_available ? "bg-muted/40 border-border/80" : "bg-muted/10 border-border/20 opacity-60"}`,
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("div", { className: `w-2 h-2 rounded-full ${st.is_available ? "bg-emerald-500" : "bg-muted-foreground/30"}` }), /* @__PURE__ */ jsx("span", {
										className: "font-bold text-foreground font-mono",
										children: st.container_size
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "text-right",
									children: st.is_available ? /* @__PURE__ */ jsxs("span", {
										className: "font-mono text-muted-foreground font-semibold",
										children: [st.quantity, " Available"]
									}) : /* @__PURE__ */ jsx("span", {
										className: "font-mono text-muted-foreground/50 line-through",
										children: "Out of Stock"
									})
								})]
							}, st.id))
						}) : /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: "Custom sizes from 100L up to 2000L are available on contract grow orders. Contact sales directly for specific requirements."
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-5",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-geist font-black text-foreground uppercase tracking-tight",
							children: "Wholesale Price Enquiry"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground mt-1 font-sans",
							children: "Select sizes and request pricing for commercial landscapes."
						})] }), /* @__PURE__ */ jsxs("form", {
							onSubmit: handleEnquirySubmit,
							className: "space-y-4",
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
									className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50",
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
									className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50",
									placeholder: "e.g. sarah@developer.co.za"
								})] }),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "enquirySize",
										className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1",
										children: "Container Size"
									}), /* @__PURE__ */ jsx(SelectCombobox, {
										id: "enquirySize",
										value: enquirySize,
										onValueChange: setEnquirySize,
										options: tree?.stock?.length ? tree.stock.map((st) => ({
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
										className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
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
									className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50",
									placeholder: "e.g. GreenScape Contractors (Optional)"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "enquiryMessage",
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1",
									children: "Enquiry Message"
								}), /* @__PURE__ */ jsx("textarea", {
									id: "enquiryMessage",
									rows: 4,
									value: enquiryMessage,
									onChange: (e) => setEnquiryMessage(e.target.value),
									className: "w-full bg-muted/40 border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50 resize-none"
								})] }),
								/* @__PURE__ */ jsxs("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all disabled:opacity-50 mt-2 cursor-pointer shadow-sm",
									children: [/* @__PURE__ */ jsx(Mail, { className: "size-4" }), isSubmitting ? "Sending..." : "Submit Quote Request"]
								})
							]
						})]
					})
				]
			})]
		})]
	});
}
TreeShowPage.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "Tree Details",
	children: page
});
//#endregion
export { TreeShowPage as default };
