import { n as Wrapper } from "../ssr.js";
import { Clock, MapPin, Navigation } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
//#region resources/js/components/app/map-section.tsx
var customIcon = L.divIcon({
	html: `
        <div class="relative flex items-center justify-center">
            <span class="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-primary/30 opacity-75"></span>
            <div class="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground border-2 border-background shadow-xl hover:scale-105 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tree-deciduous"><path d="M8 22h8"/><path d="M12 18v4"/><path d="M12 18c-3.3 0-6-2.7-6-6 0-1.8.8-3.4 2-4.5.3-.3.4-.7.3-1.1-.3-1.3.2-2.7 1.2-3.6 1-1 2.3-1.3 3.6-1.1.4.1.8-.1 1.1-.3C15 1 17.3 1 19 2.5c1.4 1.3 1.9 3.2 1.3 5-.1.4.1.8.4 1.1 1 1.1 1.6 2.6 1.6 4.4 0 3.3-2.7 6-6 6Z"/></svg>
            </div>
        </div>
    `,
	className: "custom-leaflet-icon",
	iconSize: [48, 48],
	iconAnchor: [24, 48],
	popupAnchor: [0, -48]
});
function MapSection() {
	const position = [-33.7599571, 18.8092257];
	return /* @__PURE__ */ jsx("section", {
		className: "relative w-full border-t border-border bg-muted/20 py-16 px-6 transition-colors duration-300",
		children: /* @__PURE__ */ jsxs(Wrapper, {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5 flex flex-col justify-between p-6 md:p-8 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-xs font-mono font-bold uppercase tracking-wider text-primary",
							children: "Our Location"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-geist font-black uppercase tracking-tight text-foreground mt-2",
							children: "Visit Mistico Farm"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-sm mt-3 leading-relaxed",
							children: "Mistico Farm is located in the beautiful agricultural valley of Paarl, Western Cape. Come visit our 20-hectare nursery to inspect our wholesale stock of premium deciduous and evergreen trees."
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0",
								children: /* @__PURE__ */ jsx(MapPin, { className: "size-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground",
								children: "Nursery Address"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-semibold text-foreground leading-tight",
								children: "Mistico Farm, Paarl Region, Western Cape, South Africa"
							})] })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0",
								children: /* @__PURE__ */ jsx(Clock, { className: "size-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground",
								children: "Operational Hours"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-semibold text-foreground",
								children: "Mon - Fri: 08:00 - 17:00 | Sat: By Appointment"
							})] })]
						})]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8 pt-6 border-t border-border",
					children: /* @__PURE__ */ jsxs("a", {
						href: `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer shadow-sm shadow-primary/20 hover:shadow-md",
						children: [/* @__PURE__ */ jsx(Navigation, { className: "size-3.5" }), "Get Directions"]
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] w-full rounded-2xl border border-border overflow-hidden relative shadow-sm z-0",
				children: /* @__PURE__ */ jsxs(MapContainer, {
					center: position,
					zoom: 13,
					scrollWheelZoom: false,
					className: "w-full h-full",
					children: [/* @__PURE__ */ jsx(TileLayer, {
						attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
						url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					}), /* @__PURE__ */ jsx(Marker, {
						position,
						icon: customIcon,
						children: /* @__PURE__ */ jsx(Popup, {
							className: "custom-leaflet-popup",
							children: /* @__PURE__ */ jsxs("div", {
								className: "space-y-1 p-1",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "font-geist font-bold text-sm text-foreground",
									children: "Prime Trees Nursery"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground",
									children: "Mistico Farm, Paarl"
								})]
							})
						})
					})]
				})
			})]
		})
	});
}
//#endregion
export { MapSection as default };
