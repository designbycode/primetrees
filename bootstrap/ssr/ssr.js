import { Head, Link, createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { renderToString } from "react-dom/server";
import { useEffect, useState, useSyncExternalStore } from "react";
import { BookOpen, CircleCheckIcon, Home, InfoIcon, LayoutDashboard, Loader2Icon, MapPin, Menu, Monitor, Moon, OctagonXIcon, Phone, Sun, TreeDeciduous, Trees, TriangleAlertIcon, X } from "lucide-react";
import { cva } from "class-variance-authority";
import { Slot, Tooltip } from "radix-ui";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { Toaster } from "sonner";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region resources/js/wayfinder/index.ts
var getValue = (value) => {
	if (value === true) return "1";
	if (value === false) return "0";
	return value.toString();
};
var addNestedParams = (obj, prefix, params) => {
	Object.entries(obj).forEach(([subKey, value]) => {
		if (value === void 0) return;
		const paramKey = `${prefix}[${subKey}]`;
		if (Array.isArray(value)) value.forEach((v) => params.append(`${paramKey}[]`, getValue(v)));
		else if (value !== null && typeof value === "object") addNestedParams(value, paramKey, params);
		else if ([
			"string",
			"number",
			"boolean"
		].includes(typeof value)) params.set(paramKey, getValue(value));
	});
};
var clearParamFamily = (params, key) => {
	const toDelete = /* @__PURE__ */ new Set();
	params.forEach((_, paramKey) => {
		if (paramKey === key || paramKey.startsWith(`${key}[`)) toDelete.add(paramKey);
	});
	toDelete.forEach((paramKey) => params.delete(paramKey));
};
var queryParams = (options) => {
	if (!options || !options.query && !options.mergeQuery) return "";
	const query = options.query ?? options.mergeQuery;
	const includeExisting = options.mergeQuery !== void 0;
	const params = new URLSearchParams(includeExisting && typeof window !== "undefined" ? window.location.search : "");
	for (const key in query) {
		const queryValue = query[key];
		if (includeExisting) clearParamFamily(params, key);
		if (queryValue === void 0 || queryValue === null) continue;
		if (Array.isArray(queryValue)) queryValue.forEach((value) => {
			params.append(`${key}[]`, value.toString());
		});
		else if (typeof queryValue === "object") addNestedParams(queryValue, key, params);
		else params.set(key, getValue(queryValue));
	}
	const str = params.toString();
	return str.length > 0 ? `?${str}` : "";
};
//#endregion
//#region resources/js/routes/index.ts
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:14
* @route '/'
*/
var home = (options) => ({
	url: home.url(options),
	method: "get"
});
home.definition = {
	methods: ["get", "head"],
	url: "/"
};
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:14
* @route '/'
*/
home.url = (options) => {
	return home.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:14
* @route '/'
*/
home.get = (options) => ({
	url: home.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:14
* @route '/'
*/
home.head = (options) => ({
	url: home.url(options),
	method: "head"
});
//#endregion
//#region resources/js/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region resources/js/components/ui/button.tsx
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot.Root : "button", {
		"data-slot": "button",
		"data-variant": variant,
		"data-size": size,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region resources/js/components/app/wrapper.tsx
function Wrapper({ as: Component = "div", className, children, ...props }) {
	return /* @__PURE__ */ jsx(Component, {
		className: cn("mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8", className),
		...props,
		children
	});
}
Wrapper.displayName = "Wrapper";
//#endregion
//#region resources/js/hooks/use-appearance.tsx
var listeners = /* @__PURE__ */ new Set();
var currentAppearance = "system";
var prefersDark = () => {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
var setCookie = (name, value, days = 365) => {
	if (typeof document === "undefined") return;
	const maxAge = days * 24 * 60 * 60;
	document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};
var isDarkMode = (appearance) => {
	return appearance === "dark" || appearance === "system" && prefersDark();
};
var applyTheme = (appearance) => {
	if (typeof document === "undefined") return;
	const isDark = isDarkMode(appearance);
	document.documentElement.classList.toggle("dark", isDark);
	document.documentElement.style.colorScheme = isDark ? "dark" : "light";
};
var subscribe = (callback) => {
	listeners.add(callback);
	return () => listeners.delete(callback);
};
var notify = () => listeners.forEach((listener) => listener());
function useAppearance() {
	const appearance = useSyncExternalStore(subscribe, () => currentAppearance, () => "system");
	const resolvedAppearance = isDarkMode(appearance) ? "dark" : "light";
	const updateAppearance = (mode) => {
		currentAppearance = mode;
		localStorage.setItem("appearance", mode);
		setCookie("appearance", mode);
		applyTheme(mode);
		notify();
	};
	return {
		appearance,
		resolvedAppearance,
		updateAppearance
	};
}
//#endregion
//#region resources/js/components/theme-toggle.tsx
function ThemeToggle() {
	const { appearance, updateAppearance } = useAppearance();
	const toggleTheme = () => {
		if (appearance === "light") updateAppearance("dark");
		else if (appearance === "dark") updateAppearance("system");
		else updateAppearance("light");
	};
	const getIcon = () => {
		switch (appearance) {
			case "light": return /* @__PURE__ */ jsx(Sun, { className: "size-4 text-primary transition-all dark:rotate-0 dark:scale-100" });
			case "dark": return /* @__PURE__ */ jsx(Moon, { className: "size-4 text-primary transition-all" });
			default: return /* @__PURE__ */ jsx(Monitor, { className: "size-4 text-muted-foreground transition-all" });
		}
	};
	return /* @__PURE__ */ jsxs(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggleTheme,
		className: "relative size-9 rounded-full border border-border/40 hover:border-border hover:bg-muted/60 transition-all duration-200 flex items-center justify-center",
		title: `Theme: ${appearance}. Click to cycle (Light -> Dark -> System).`,
		children: [getIcon(), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Toggle theme"
		})]
	});
}
//#endregion
//#region resources/js/layouts/app/app-navigation.tsx
var links = [
	{
		id: "home",
		label: "Home",
		icon: Home,
		href: home.url()
	},
	{
		id: "trees",
		label: "Trees",
		icon: Trees,
		href: home.url()
	},
	{
		id: "availability-list",
		label: "Availability List",
		icon: BookOpen,
		href: "#planner"
	},
	{
		id: "contact-us",
		label: "Contact Us",
		icon: Phone,
		href: "#chronicles"
	}
];
function AppNavigation() {
	const [active, setActive] = useState("explorer");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleHashChange = () => {
				const hash = window.location.hash.replace("#", "");
				if (links.some((l) => l.id === hash)) setActive(hash);
			};
			handleHashChange();
			window.addEventListener("hashchange", handleHashChange);
			return () => window.removeEventListener("hashchange", handleHashChange);
		}
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-40 transition-colors duration-300",
		children: [/* @__PURE__ */ jsxs(Wrapper, {
			as: `header`,
			className: " py-2.5 flex flex-col md:flex-row items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between w-full md:w-auto",
					children: [/* @__PURE__ */ jsxs(Link, {
						prefetch: true,
						href: home.url(),
						className: "flex items-center gap-2.5 cursor-pointer group",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95 duration-200",
							children: /* @__PURE__ */ jsx(Trees, { className: "w-5 h-5 text-primary" })
						}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", {
							className: "font-geist text-3xl font-black tracking-tighter text-primary uppercase leading-none",
							children: "Prime Trees"
						}) })]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex md:hidden",
						children: /* @__PURE__ */ jsx("button", {
							onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
							className: "p-2 rounded-xl border border-border bg-card text-foreground hover:bg-muted focus:outline-hidden transition-all duration-200",
							"aria-label": "Toggle Menu",
							children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "size-5 animate-in spin-in-90 duration-200" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5 animate-in fade-in duration-200" })
						})
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-1 rounded-full border border-border/60    bg-card px-2 py-2  md:flex",
					children: links.map(({ id, label, icon: Icon, href }) => {
						const isActive = active === id;
						return /* @__PURE__ */ jsxs(Link, {
							prefetch: true,
							href,
							"aria-current": isActive ? "page" : void 0,
							onClick: () => setActive(id),
							className: `flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide transition-all ${isActive ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:bg-muted hover:text-foreground"}`,
							children: [/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }), label]
						}, id);
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden md:flex items-center gap-4",
					children: /* @__PURE__ */ jsx(ThemeToggle, {})
				})
			]
		}), isMobileMenuOpen && /* @__PURE__ */ jsx("div", {
			className: "md:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-in slide-in-from-top duration-300",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-4 py-4 space-y-3 flex flex-col",
				children: [
					links.map(({ id, label, icon: Icon, href }) => {
						return /* @__PURE__ */ jsxs("a", {
							href,
							onClick: () => {
								setActive(id);
								setIsMobileMenuOpen(false);
							},
							className: `flex items-center gap-2 rounded-lg px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-wide transition-colors ${active === id ? "bg-primary/10 text-primary" : "text-foreground/60 hover:bg-muted hover:text-foreground"}`,
							children: [/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }), label]
						}, id);
					}),
					/* @__PURE__ */ jsx("hr", { className: "border-border/60" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-row justify-between items-center w-full px-2 py-1",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-mono font-bold uppercase text-muted-foreground",
								children: "Appearance"
							}), /* @__PURE__ */ jsx(ThemeToggle, {})]
						}), /* @__PURE__ */ jsx(Button, {
							asChild: true,
							size: "sm",
							className: "w-full justify-center font-semibold uppercase tracking-wider font-mono text-xs",
							children: /* @__PURE__ */ jsxs("a", {
								href: "/admin",
								children: [/* @__PURE__ */ jsx(LayoutDashboard, { className: "size-4 mr-2" }), "Admin Panel"]
							})
						})]
					})
				]
			})
		})]
	});
}
AppNavigation.displayName = "AppNavigation";
//#endregion
//#region resources/js/layouts/app/app-footer.tsx
function AppFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-card border-t border-border py-8 px-6 text-center text-xs text-muted-foreground mt-auto w-full transition-colors duration-300",
		children: /* @__PURE__ */ jsxs(Wrapper, {
			className: "flex flex-col md:flex-row items-center justify-between gap-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 text-left",
				children: [/* @__PURE__ */ jsx(TreeDeciduous, { className: "size-6 text-primary animate-pulse" }), /* @__PURE__ */ jsxs("span", {
					className: "font-mono tracking-tight",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Primetrees. All rights reserved."
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: " font-mono ",
				children: ["Designed and developed by ", /* @__PURE__ */ jsx("a", {
					className: `text-primary hover:underline hover:decoration-primary`,
					href: "https://designbycode.co.za",
					target: `_blank`,
					children: "designbycode"
				})]
			})]
		})
	});
}
AppFooter.displayName = "AppFooter";
//#endregion
//#region resources/js/layouts/app/app-notification-bar.tsx
function AppNotificationBar() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "bg-primary text-primary-foreground border-b border-primary-foreground/10 text-[10px] sm:text-xs font-mono py-2.5 px-4 text-center flex items-center justify-center gap-1.5 uppercase tracking-widest leading-none",
		children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 animate-pulse stroke-1" }), /* @__PURE__ */ jsx("span", { children: "Mistico Equestrian Centre, R312, Suid-Agter-Paarl Rd, Paarl, 7630" })]
	}) });
}
AppNotificationBar.displayName = "AppNotificationBar";
//#endregion
//#region resources/js/layouts/app-layout.tsx
function AppLayout({ children, title }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: title ? `${title} - PrimeTrees` : "PrimeTrees - Premium Forestry & Tree Care" }), /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground font-sans selection:bg-primary/50 selection:text-white",
		children: [
			/* @__PURE__ */ jsx(AppNotificationBar, {}),
			/* @__PURE__ */ jsx(AppNavigation, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1 w-full",
				children
			}),
			/* @__PURE__ */ jsx(AppFooter, {})
		]
	})] });
}
//#endregion
//#region resources/js/components/ui/tooltip.tsx
function TooltipProvider({ delayDuration = 0, ...props }) {
	return /* @__PURE__ */ jsx(Tooltip.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration,
		...props
	});
}
//#endregion
//#region resources/js/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	const { theme = "system" } = useTheme();
	return /* @__PURE__ */ jsx(Toaster, {
		theme,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ jsx(CircleCheckIcon, { className: "size-4" }),
			info: /* @__PURE__ */ jsx(InfoIcon, { className: "size-4" }),
			warning: /* @__PURE__ */ jsx(TriangleAlertIcon, { className: "size-4" }),
			error: /* @__PURE__ */ jsx(OctagonXIcon, { className: "size-4" }),
			loading: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" })
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)"
		},
		toastOptions: { classNames: { toast: "cn-toast" } },
		...props
	});
};
//#endregion
//#region resources/js/ssr.tsx
var appName = "Laravel";
createServer((page) => createInertiaApp({
	page,
	render: renderToString,
	title: (title) => title ? `${title} - ${appName}` : appName,
	resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* #__PURE__ */ Object.assign({
		"./pages/availability-list.tsx": () => import("./assets/availability-list-DFFGpfGp.js"),
		"./pages/home.tsx": () => import("./assets/home-Ckpwcz3u.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-CHS6CKce.js")
	})),
	setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props }),
	layout: (name) => {
		switch (true) {
			case name === "welcome": return null;
			default: return AppLayout;
		}
	},
	strictMode: true,
	withApp(app) {
		return /* @__PURE__ */ jsxs(TooltipProvider, {
			delayDuration: 0,
			children: [app, /* @__PURE__ */ jsx(Toaster$1, {})]
		});
	}
}));
//#endregion
export { cn as i, Wrapper as n, Button as r, AppLayout as t };
