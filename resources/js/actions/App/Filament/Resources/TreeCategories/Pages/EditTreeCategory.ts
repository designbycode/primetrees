import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\TreeCategories\Pages\EditTreeCategory::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/EditTreeCategory.php:7
 * @route '/admin/tree-categories/{record}/edit'
 */
const EditTreeCategory = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTreeCategory.url(args, options),
    method: 'get',
})

EditTreeCategory.definition = {
    methods: ["get","head"],
    url: '/admin/tree-categories/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\TreeCategories\Pages\EditTreeCategory::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/EditTreeCategory.php:7
 * @route '/admin/tree-categories/{record}/edit'
 */
EditTreeCategory.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTreeCategory.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\TreeCategories\Pages\EditTreeCategory::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/EditTreeCategory.php:7
 * @route '/admin/tree-categories/{record}/edit'
 */
EditTreeCategory.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTreeCategory.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\TreeCategories\Pages\EditTreeCategory::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/EditTreeCategory.php:7
 * @route '/admin/tree-categories/{record}/edit'
 */
EditTreeCategory.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTreeCategory.url(args, options),
    method: 'head',
})
export default EditTreeCategory