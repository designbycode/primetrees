import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TreesPageIndexController::__invoke
 * @see app/Http/Controllers/TreesPageIndexController.php:13
 * @route '/trees'
 */
const TreesPageIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TreesPageIndexController.url(options),
    method: 'get',
})

TreesPageIndexController.definition = {
    methods: ["get","head"],
    url: '/trees',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TreesPageIndexController::__invoke
 * @see app/Http/Controllers/TreesPageIndexController.php:13
 * @route '/trees'
 */
TreesPageIndexController.url = (options?: RouteQueryOptions) => {
    return TreesPageIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TreesPageIndexController::__invoke
 * @see app/Http/Controllers/TreesPageIndexController.php:13
 * @route '/trees'
 */
TreesPageIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TreesPageIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TreesPageIndexController::__invoke
 * @see app/Http/Controllers/TreesPageIndexController.php:13
 * @route '/trees'
 */
TreesPageIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TreesPageIndexController.url(options),
    method: 'head',
})
export default TreesPageIndexController