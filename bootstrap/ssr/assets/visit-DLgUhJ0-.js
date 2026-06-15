import { n as Wrapper, t as AppLayout } from "../ssr.js";
import { t as PageHeader } from "./page-header-BUogbAqS.js";
import { t as SelectCombobox } from "./combobox-DShYAb7e.js";
import { useState } from "react";
import { ChevronRight, Clock, Compass, MapPin, MessageSquare, Phone, UserCheck } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
//#region resources/js/pages/visit.tsx
var CONTACT_TYPE_OPTIONS = [
	{
		value: "nursery-tour",
		label: "Schedule Nursery Tour"
	},
	{
		value: "wholesale",
		label: "Wholesale Order Enquiry"
	},
	{
		value: "public",
		label: "Mature Tree (2000L) Public Sale"
	},
	{
		value: "other",
		label: "General Horticultural Inquiry"
	}
];
function VisitPage() {
	const [contactName, setContactName] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	const [contactCompany, setContactCompany] = useState("");
	const [contactType, setContactType] = useState("nursery-tour");
	const [contactMessage, setContactMessage] = useState("");
	const [isContactSubmitting, setIsContactSubmitting] = useState(false);
	const handleContactSubmit = (e) => {
		e.preventDefault();
		if (!contactName || !contactEmail) {
			toast.error("Please fill in your name and email.");
			return;
		}
		setIsContactSubmitting(true);
		setTimeout(() => {
			setIsContactSubmitting(false);
			const subject = contactType === "nursery-tour" ? "Nursery Tour Booking" : "Wholesale Enquiry";
			toast.success(`${subject} request sent successfully! Bruce and the Prime Trees team will be in touch to confirm details.`);
			setContactName("");
			setContactEmail("");
			setContactCompany("");
			setContactMessage("");
		}, 1200);
	};
	return /* @__PURE__ */ jsxs(Wrapper, {
		className: "py-12 min-h-screen",
		children: [/* @__PURE__ */ jsx(PageHeader, {
			as: "h2",
			badgeText: "Book a Consultation or Guided Tour",
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["CONTACT & ", /* @__PURE__ */ jsx("span", {
				className: "text-primary",
				children: "VISITS"
			})] }),
			description: "Connect with the Prime Trees team. Whether you need to schedule a wholesale tree inspection, book a tour of our 20-hectare Mistico Farm nursery in Paarl, or discuss customized delivery and crane placement on-site, we are here to assist."
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border-t border-border/60 pt-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5 flex flex-col justify-between gap-6",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-2xl font-geist font-black uppercase tracking-tight text-foreground",
						children: "Nursery Location"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-sm mt-3 leading-relaxed",
						children: "Mistico Farm is located in the beautiful agricultural valley of Paarl, Western Cape. Our location provides perfect soil and drainage conditions for growing healthy, robust deciduous and evergreen stock."
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4 my-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ jsx("div", {
									className: "size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0",
									children: /* @__PURE__ */ jsx(MapPin, { className: "size-4" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground",
									children: "Farm Address"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-medium text-foreground",
									children: "Mistico Farm, Paarl Region, Western Cape, South Africa"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ jsx("div", {
									className: "size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0",
									children: /* @__PURE__ */ jsx(Clock, { className: "size-4" })
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground",
										children: "Operational Hours"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs font-medium text-foreground",
										children: "Monday – Friday: 08:00 – 17:00"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "block text-[0.65rem] text-muted-foreground font-sans mt-0.5",
										children: "Saturdays: By Appointment Only • Sundays: Closed"
									})
								] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ jsx("div", {
									className: "size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0",
									children: /* @__PURE__ */ jsx(UserCheck, { className: "size-4" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground",
									children: "Founder & grower"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-medium text-foreground",
									children: "Bruce Stewart (Horticulturalist)"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ jsx("div", {
									className: "size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0",
									children: /* @__PURE__ */ jsx(Phone, { className: "size-4" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground",
									children: "Wholesale enquiries"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-medium text-foreground",
									children: "bruce@primetrees.co.za"
								})] })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative overflow-hidden rounded-2xl border border-border/80 bg-card p-4.5 flex items-center gap-4 group",
						children: [/* @__PURE__ */ jsx("div", {
							className: "size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform",
							children: /* @__PURE__ */ jsx(Compass, { className: "size-6 animate-spin-slow" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[0.65rem] font-mono font-bold text-primary block uppercase",
									children: "Nursery Details"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold text-foreground",
									children: "20+ Hectares of Premium Container Stock"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "block text-[0.6rem] text-muted-foreground font-mono mt-0.5",
									children: "Over 80,000 mature shade & ornamental specimens"
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-card border border-border/80 rounded-3xl p-6 md:p-8 h-full shadow-xs",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 mb-4",
						children: [/* @__PURE__ */ jsx(MessageSquare, { className: "size-5 text-primary" }), /* @__PURE__ */ jsx("h4", {
							className: "text-lg font-bold font-sans text-foreground",
							children: "Book a Tour / Submit Inquiry"
						})]
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleContactSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "contactName",
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
									children: "Full Name *"
								}), /* @__PURE__ */ jsx("input", {
									id: "contactName",
									type: "text",
									required: true,
									value: contactName,
									onChange: (e) => setContactName(e.target.value),
									className: "w-full bg-muted/40 border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50",
									placeholder: "e.g. John Doe"
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "contactEmail",
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
									children: "Email Address *"
								}), /* @__PURE__ */ jsx("input", {
									id: "contactEmail",
									type: "email",
									required: true,
									value: contactEmail,
									onChange: (e) => setContactEmail(e.target.value),
									className: "w-full bg-muted/40 border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50",
									placeholder: "e.g. john@company.com"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "contactCompany",
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
									children: "Company / Organization"
								}), /* @__PURE__ */ jsx("input", {
									id: "contactCompany",
									type: "text",
									value: contactCompany,
									onChange: (e) => setContactCompany(e.target.value),
									className: "w-full bg-muted/40 border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50",
									placeholder: "Landscape Co. (Optional)"
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "contactType",
									className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
									children: "Inquiry Type"
								}), /* @__PURE__ */ jsx(SelectCombobox, {
									id: "contactType",
									value: contactType,
									onValueChange: setContactType,
									options: CONTACT_TYPE_OPTIONS,
									placeholder: "Select Inquiry Type",
									className: "w-full text-xs h-8"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "contactMessage",
								className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
								children: "Message / Booking details"
							}), /* @__PURE__ */ jsx("textarea", {
								id: "contactMessage",
								rows: 6,
								value: contactMessage,
								onChange: (e) => setContactMessage(e.target.value),
								className: "w-full bg-muted/40 border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50 resize-none",
								placeholder: "Specify preferred dates for a nursery visit or details about your landscaping stock list..."
							})] }),
							/* @__PURE__ */ jsxs("button", {
								type: "submit",
								disabled: isContactSubmitting,
								className: "w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all disabled:opacity-50 mt-2 cursor-pointer",
								children: [
									isContactSubmitting ? "Sending..." : "Submit Inquiry",
									" ",
									/* @__PURE__ */ jsx(ChevronRight, { className: "size-4" })
								]
							})
						]
					})]
				})
			})]
		})]
	});
}
VisitPage.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "Contact & Visits",
	children: page
});
//#endregion
export { VisitPage as default };
