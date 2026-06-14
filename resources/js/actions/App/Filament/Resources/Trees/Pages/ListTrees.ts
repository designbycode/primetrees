import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Trees\Pages\ListTrees::__invoke
 * @see app/Filament/Resources/Trees/Pages/ListTrees.php:7
 * @route '/admin/trees'
 */
const ListTrees = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTrees.url(options),
    method: 'get',
})

ListTrees.definition = {
    methods: ["get","head"],
    url: '/admin/trees',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Trees\Pages\ListTrees::__invoke
 * @see app/Filament/Resources/Trees/Pages/ListTrees.php:7
 * @route '/admin/trees'
 */
ListTrees.url = (options?: RouteQueryOptions) => {
    return ListTrees.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Trees\Pages\ListTrees::__invoke
 * @see app/Filament/Resources/Trees/Pages/ListTrees.php:7
 * @route '/admin/trees'
 */
ListTrees.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTrees.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Trees\Pages\ListTrees::__invoke
 * @see app/Filament/Resources/Trees/Pages/ListTrees.php:7
 * @route '/admin/trees'
 */
ListTrees.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTrees.url(options),
    method: 'head',
})
export default ListTrees