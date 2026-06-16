import { c as queryParams, s as applyUrlDefaults } from "../ssr.js";
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
export { show as t };
