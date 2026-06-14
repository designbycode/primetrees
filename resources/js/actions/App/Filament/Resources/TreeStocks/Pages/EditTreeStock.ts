import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\TreeStocks\Pages\EditTreeStock::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/EditTreeStock.php:7
 * @route '/admin/tree-stocks/{record}/edit'
 */
const EditTreeStock = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTreeStock.url(args, options),
    method: 'get',
})

EditTreeStock.definition = {
    methods: ["get","head"],
    url: '/admin/tree-stocks/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\TreeStocks\Pages\EditTreeStock::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/EditTreeStock.php:7
 * @route '/admin/tree-stocks/{record}/edit'
 */
EditTreeStock.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        record: args.record,
                }

    return EditTreeStock.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\TreeStocks\Pages\EditTreeStock::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/EditTreeStock.php:7
 * @route '/admin/tree-stocks/{record}/edit'
 */
EditTreeStock.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTreeStock.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\TreeStocks\Pages\EditTreeStock::__invoke
 * @see app/Filament/Resources/TreeStocks/Pages/EditTreeStock.php:7
 * @route '/admin/tree-stocks/{record}/edit'
 */
EditTreeStock.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTreeStock.url(args, options),
    method: 'head',
})
export default EditTreeStock