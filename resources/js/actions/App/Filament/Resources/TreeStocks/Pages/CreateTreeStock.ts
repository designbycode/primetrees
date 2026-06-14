import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\TreeStocks\Pages\CreateTreeStock::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/CreateTreeStock.php:7
 * @route '/admin/tree-stocks/create'
 */
const CreateTreeStock = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTreeStock.url(options),
    method: 'get',
})

CreateTreeStock.definition = {
    methods: ["get","head"],
    url: '/admin/tree-stocks/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\TreeStocks\Pages\CreateTreeStock::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/CreateTreeStock.php:7
 * @route '/admin/tree-stocks/create'
 */
CreateTreeStock.url = (options?: RouteQueryOptions) => {
    return CreateTreeStock.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\TreeStocks\Pages\CreateTreeStock::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/CreateTreeStock.php:7
 * @route '/admin/tree-stocks/create'
 */
CreateTreeStock.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTreeStock.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\TreeStocks\Pages\CreateTreeStock::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/CreateTreeStock.php:7
 * @route '/admin/tree-stocks/create'
 */
CreateTreeStock.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTreeStock.url(options),
    method: 'head',
})
export default CreateTreeStock