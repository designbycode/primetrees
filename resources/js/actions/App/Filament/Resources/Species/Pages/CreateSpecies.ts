import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Species\Pages\CreateSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/CreateSpecies.php:7
 * @route '/admin/species/create'
 */
const CreateSpecies = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSpecies.url(options),
    method: 'get',
})

CreateSpecies.definition = {
    methods: ["get","head"],
    url: '/admin/species/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Species\Pages\CreateSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/CreateSpecies.php:7
 * @route '/admin/species/create'
 */
CreateSpecies.url = (options?: RouteQueryOptions) => {
    return CreateSpecies.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Species\Pages\CreateSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/CreateSpecies.php:7
 * @route '/admin/species/create'
 */
CreateSpecies.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSpecies.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Species\Pages\CreateSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/CreateSpecies.php:7
 * @route '/admin/species/create'
 */
CreateSpecies.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSpecies.url(options),
    method: 'head',
})
export default CreateSpecies