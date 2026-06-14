import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\TreeCategories\Pages\CreateTreeCategory::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/CreateTreeCategory.php:7
 * @route '/admin/tree-categories/create'
 */
const CreateTreeCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTreeCategory.url(options),
    method: 'get',
})

CreateTreeCategory.definition = {
    methods: ["get","head"],
    url: '/admin/tree-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\TreeCategories\Pages\CreateTreeCategory::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/CreateTreeCategory.php:7
 * @route '/admin/tree-categories/create'
 */
CreateTreeCategory.url = (options?: RouteQueryOptions) => {
    return CreateTreeCategory.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\TreeCategories\Pages\CreateTreeCategory::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/CreateTreeCategory.php:7
 * @route '/admin/tree-categories/create'
 */
CreateTreeCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTreeCategory.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\TreeCategories\Pages\CreateTreeCategory::__invoke
 * @see app/Filament/Resources/TreeCategories/Pages/CreateTreeCategory.php:7
 * @route '/admin/tree-categories/create'
 */
CreateTreeCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTreeCategory.url(options),
    method: 'head',
})
export default CreateTreeCategory