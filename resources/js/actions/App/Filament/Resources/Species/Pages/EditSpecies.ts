import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Species\Pages\EditSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/EditSpecies.php:7
 * @route '/admin/species/{record}/edit'
 */
const EditSpecies = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSpecies.url(args, options),
    method: 'get',
})

EditSpecies.definition = {
    methods: ["get","head"],
    url: '/admin/species/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Species\Pages\EditSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/EditSpecies.php:7
 * @route '/admin/species/{record}/edit'
 */
EditSpecies.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSpecies.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Species\Pages\EditSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/EditSpecies.php:7
 * @route '/admin/species/{record}/edit'
 */
EditSpecies.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSpecies.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Species\Pages\EditSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/EditSpecies.php:7
 * @route '/admin/species/{record}/edit'
 */
EditSpecies.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSpecies.url(args, options),
    method: 'head',
})
export default EditSpecies