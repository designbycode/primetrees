import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Trees\Pages\EditTree::__invoke
 * @see app/Filament/Resources/Trees/Pages/EditTree.php:7
 * @route '/admin/trees/{record}/edit'
 */
const EditTree = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTree.url(args, options),
    method: 'get',
})

EditTree.definition = {
    methods: ["get","head"],
    url: '/admin/trees/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Trees\Pages\EditTree::__invoke
 * @see app/Filament/Resources/Trees/Pages/EditTree.php:7
 * @route '/admin/trees/{record}/edit'
 */
EditTree.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTree.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Trees\Pages\EditTree::__invoke
 * @see app/Filament/Resources/Trees/Pages/EditTree.php:7
 * @route '/admin/trees/{record}/edit'
 */
EditTree.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTree.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Trees\Pages\EditTree::__invoke
 * @see app/Filament/Resources/Trees/Pages/EditTree.php:7
 * @route '/admin/trees/{record}/edit'
 */
EditTree.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTree.url(args, options),
    method: 'head',
})
export default EditTree