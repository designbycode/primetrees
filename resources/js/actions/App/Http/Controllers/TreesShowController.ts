import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TreesShowController::__invoke
 * @see app/Http/Controllers/TreesShowController.php:14
 * @route '/trees/{tree}'
 */
const TreesShowController = (args: { tree: string | { slug: string } } | [tree: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TreesShowController.url(args, options),
    method: 'get',
})

TreesShowController.definition = {
    methods: ["get","head"],
    url: '/trees/{tree}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TreesShowController::__invoke
 * @see app/Http/Controllers/TreesShowController.php:14
 * @route '/trees/{tree}'
 */
TreesShowController.url = (args: { tree: string | { slug: string } } | [tree: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tree: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { tree: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tree: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tree: typeof args.tree === 'object'
                ? args.tree.slug
                : args.tree,
                }

    return TreesShowController.definition.url
            .replace('{tree}', parsedArgs.tree.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TreesShowController::__invoke
 * @see app/Http/Controllers/TreesShowController.php:14
 * @route '/trees/{tree}'
 */
TreesShowController.get = (args: { tree: string | { slug: string } } | [tree: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TreesShowController.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TreesShowController::__invoke
 * @see app/Http/Controllers/TreesShowController.php:14
 * @route '/trees/{tree}'
 */
TreesShowController.head = (args: { tree: string | { slug: string } } | [tree: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TreesShowController.url(args, options),
    method: 'head',
})
export default TreesShowController