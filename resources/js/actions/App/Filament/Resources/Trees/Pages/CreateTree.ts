import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Trees\Pages\CreateTree::__invoke
 * @see app/Filament/Resources/Trees/Pages/CreateTree.php:7
 * @route '/admin/trees/create'
 */
const CreateTree = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTree.url(options),
    method: 'get',
})

CreateTree.definition = {
    methods: ["get","head"],
    url: '/admin/trees/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Trees\Pages\CreateTree::__invoke
 * @see app/Filament/Resources/Trees/Pages/CreateTree.php:7
 * @route '/admin/trees/create'
 */
CreateTree.url = (options?: RouteQueryOptions) => {
    return CreateTree.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Trees\Pages\CreateTree::__invoke
 * @see app/Filament/Resources/Trees/Pages/CreateTree.php:7
 * @route '/admin/trees/create'
 */
CreateTree.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTree.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Trees\Pages\CreateTree::__invoke
 * @see app/Filament/Resources/Trees/Pages/CreateTree.php:7
 * @route '/admin/trees/create'
 */
CreateTree.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTree.url(options),
    method: 'head',
})
export default CreateTree