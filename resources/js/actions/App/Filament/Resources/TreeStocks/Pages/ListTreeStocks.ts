import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\TreeStocks\Pages\ListTreeStocks::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/ListTreeStocks.php:7
 * @route '/admin/tree-stocks'
 */
const ListTreeStocks = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTreeStocks.url(options),
    method: 'get',
})

ListTreeStocks.definition = {
    methods: ["get","head"],
    url: '/admin/tree-stocks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\TreeStocks\Pages\ListTreeStocks::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/ListTreeStocks.php:7
 * @route '/admin/tree-stocks'
 */
ListTreeStocks.url = (options?: RouteQueryOptions) => {
    return ListTreeStocks.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\TreeStocks\Pages\ListTreeStocks::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/ListTreeStocks.php:7
 * @route '/admin/tree-stocks'
 */
ListTreeStocks.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTreeStocks.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\TreeStocks\Pages\ListTreeStocks::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/ListTreeStocks.php:7
 * @route '/admin/tree-stocks'
 */
ListTreeStocks.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTreeStocks.url(options),
    method: 'head',
})
export default ListTreeStocks