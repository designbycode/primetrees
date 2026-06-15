import { i as cn } from "../ssr.js";
import "react";
import { ShieldCheck } from "lucide-react";
import { cva } from "class-variance-authority";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/app/page-header.tsx
var pageHeaderVariants = cva("text-left w-full pt-4", {
	variants: { size: {
		lg: "mb-10",
		sm: "mb-6"
	} },
	defaultVariants: { size: "lg" }
});
var titleVariants = cva("font-geist font-black tracking-tighter uppercase leading-[0.9] text-foreground wrap-break-word", {
	variants: { size: {
		lg: "text-4xl sm:text-6xl lg:text-7xl",
		sm: "text-3xl md:text-5xl"
	} },
	defaultVariants: { size: "lg" }
});
var descriptionVariants = cva("text-muted-foreground mt-4 max-w-3xl leading-relaxed font-sans", {
	variants: { size: {
		lg: "text-base",
		sm: "text-sm"
	} },
	defaultVariants: { size: "lg" }
});
function PageHeader({ as: TitleTag = "h1", badgeText, badgeIcon: BadgeIcon = ShieldCheck, title, description, actions, size = "lg", className, ...props }) {
	const leftContent = /* @__PURE__ */ jsxs("div", {
		className: "text-left max-w-3xl",
		children: [
			badgeText && /* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-1.5 mb-3",
				children: /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1.5 text-primary text-xs font-mono font-bold tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20",
					children: [BadgeIcon && /* @__PURE__ */ jsx(BadgeIcon, { className: "size-3.5" }), badgeText]
				})
			}),
			/* @__PURE__ */ jsx(TitleTag, {
				className: cn(titleVariants({ size })),
				children: title
			}),
			description && /* @__PURE__ */ jsx("p", {
				className: cn(descriptionVariants({ size })),
				children: description
			})
		]
	});
	if (actions) return /* @__PURE__ */ jsxs("div", {
		className: cn(pageHeaderVariants({ size }), "flex flex-col md:flex-row md:items-end md:justify-between gap-6", className),
		...props,
		children: [leftContent, /* @__PURE__ */ jsx("div", {
			className: "flex shrink-0",
			children: actions
		})]
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn(pageHeaderVariants({ size }), className),
		...props,
		children: leftContent
	});
}
PageHeader.displayName = "PageHeader";
//#endregion
export { PageHeader as t };
