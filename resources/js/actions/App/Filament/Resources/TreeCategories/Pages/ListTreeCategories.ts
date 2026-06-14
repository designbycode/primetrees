import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\TreeCategories\Pages\ListTreeCategories::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/ListTreeCategories.php:7
 * @route '/admin/tree-categories'
 */
const ListTreeCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTreeCategories.url(options),
    method: 'get',
})

ListTreeCategories.definition = {
    methods: ["get","head"],
    url: '/admin/tree-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\TreeCategories\Pages\ListTreeCategories::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/ListTreeCategories.php:7
 * @route '/admin/tree-categories'
 */
ListTreeCategories.url = (options?: RouteQueryOptions) => {
    return ListTreeCategories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\TreeCategories\Pages\ListTreeCategories::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/ListTreeCategories.php:7
 * @route '/admin/tree-categories'
 */
ListTreeCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTreeCategories.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\TreeCategories\Pages\ListTreeCategories::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/ListTreeCategories.php:7
 * @route '/admin/tree-categories'
 */
ListTreeCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTreeCategories.url(options),
    method: 'head',
})
export default ListTreeCategories