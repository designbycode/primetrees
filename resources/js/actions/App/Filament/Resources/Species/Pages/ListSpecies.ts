import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Species\Pages\ListSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/ListSpecies.php:7
 * @route '/admin/species'
 */
const ListSpecies = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSpecies.url(options),
    method: 'get',
})

ListSpecies.definition = {
    methods: ["get","head"],
    url: '/admin/species',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Species\Pages\ListSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/ListSpecies.php:7
 * @route '/admin/species'
 */
ListSpecies.url = (options?: RouteQueryOptions) => {
    return ListSpecies.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Species\Pages\ListSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/ListSpecies.php:7
 * @route '/admin/species'
 */
ListSpecies.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSpecies.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Species\Pages\ListSpecies::__invoke
 * @see app/Filament/Resources/Species/Pages/ListSpecies.php:7
 * @route '/admin/species'
 */
ListSpecies.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSpecies.url(options),
    method: 'head',
})
export default ListSpecies