import { n as Wrapper, r as Button, t as AppLayout } from "../ssr.js";
import { Link } from "@inertiajs/react";
import "react";
import { AlertTriangle, Clock, HelpCircle, Home, Lock, RefreshCw, Trees, Wrench } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
//#region resources/js/pages/error.tsx
function ErrorPage({ status }) {
	const errorDetails = getErrorDetails(status);
	const IconComponent = errorDetails.icon;
	const handleRefresh = () => {
		window.location.reload();
	};
	return /* @__PURE__ */ jsx(Wrapper, {
		className: "flex-1 flex items-center justify-center px-6 py-16 md:py-24 min-h-[60vh]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-2xl w-full text-center flex flex-col items-center relative z-10",
			children: [
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .5,
						ease: "easeOut"
					},
					className: "relative mb-6",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-3xl bg-primary/5 blur-xl -m-4" }),
						/* @__PURE__ */ jsx("div", {
							className: "relative font-geist text-8xl md:text-9xl font-black tracking-tighter text-primary/15 select-none leading-none",
							children: status
						}),
						/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 flex items-center justify-center",
							children: /* @__PURE__ */ jsx("div", {
								className: "p-5 rounded-2xl bg-card border border-border/80 shadow-lg dark:bg-card/80 dark:backdrop-blur-md",
								children: /* @__PURE__ */ jsx(IconComponent, { className: "size-12 text-primary animate-pulse" })
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .1,
						ease: "easeOut"
					},
					className: "space-y-4 max-w-lg",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-3xl md:text-4xl font-geist font-black tracking-tight uppercase text-foreground",
						children: errorDetails.title
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-sm md:text-base leading-relaxed",
						children: errorDetails.description
					})]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .2,
						ease: "easeOut"
					},
					className: "mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto",
					children: [/* @__PURE__ */ jsx(Button, {
						asChild: true,
						variant: "default",
						size: "lg",
						className: "w-full sm:w-auto shadow-sm group cursor-pointer",
						children: /* @__PURE__ */ jsxs(Link, {
							href: "/",
							children: [/* @__PURE__ */ jsx(Home, { className: "size-4 mr-1.5 transition-transform group-hover:-translate-y-0.5" }), "Back to Homepage"]
						})
					}), shouldShowRefresh(status) ? /* @__PURE__ */ jsxs(Button, {
						onClick: handleRefresh,
						variant: "outline",
						size: "lg",
						className: "w-full sm:w-auto cursor-pointer",
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: "size-4 mr-1.5" }), "Refresh Page"]
					}) : /* @__PURE__ */ jsx(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						className: "w-full sm:w-auto cursor-pointer",
						children: /* @__PURE__ */ jsxs(Link, {
							href: "/trees",
							children: [/* @__PURE__ */ jsx(Trees, { className: "size-4 mr-1.5" }), "Explore Trees"]
						})
					})]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .5,
						delay: .3
					},
					className: "mt-12 pt-8 border-t border-border/60 w-full max-w-md",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase font-mono tracking-wider text-muted-foreground/80 mb-3",
						children: "Or try one of these groves:"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono",
						children: [
							/* @__PURE__ */ jsx(Link, {
								href: "/trees",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Trees Directory"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-border",
								children: "•"
							}),
							/* @__PURE__ */ jsx(Link, {
								href: "/availability-list",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Availability List"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-border",
								children: "•"
							}),
							/* @__PURE__ */ jsx(Link, {
								href: "/visit",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Contact & Visit"
							})
						]
					})]
				})
			]
		})
	});
}
function getErrorDetails(status) {
	return {
		401: {
			title: "Grove Locked",
			description: "This path is reserved. Please authenticate or obtain authorization credentials to inspect this section of Prime Trees.",
			icon: Lock
		},
		403: {
			title: "Access Forbidden",
			description: "You do not have permission to view this resource. Accessing this part of our nursery canopy is restricted.",
			icon: Lock
		},
		404: {
			title: "Lost in the Forest",
			description: "We couldn't find the tree or page you were looking for. It may have been relocated, pruned, or has not yet been planted.",
			icon: Trees
		},
		419: {
			title: "Session Expired",
			description: "Your connection was dormant for too long. Refresh the page to re-establish a secure link with our server.",
			icon: Clock
		},
		500: {
			title: "Storm in the Canopy",
			description: "Our servers encountered an unexpected storm. Our arborists are working to diagnose and repair the server connection.",
			icon: AlertTriangle
		},
		503: {
			title: "Pruning in Progress",
			description: "Prime Trees is temporarily offline for essential landscape maintenance. We will be back shortly with a fresher canopy.",
			icon: Wrench
		}
	}[status] || {
		title: "Unexpected Weather",
		description: `We encountered an unexpected error (code ${status}). Please navigate back to home or contact support if the issue persists.`,
		icon: HelpCircle
	};
}
function shouldShowRefresh(status) {
	return [
		419,
		500,
		503
	].includes(status);
}
ErrorPage.layout = (page) => {
	return /* @__PURE__ */ jsx(AppLayout, {
		title: `${page?.props?.status || 500} Error`,
		children: page
	});
};
//#endregion
export { ErrorPage as default };
