import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\VisitPageIndexController::__invoke
 * @see app/Http/Controllers/VisitPageIndexController.php:13
 * @route '/visit'
 */
const VisitPageIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VisitPageIndexController.url(options),
    method: 'get',
})

VisitPageIndexController.definition = {
    methods: ["get","head"],
    url: '/visit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisitPageIndexController::__invoke
 * @see app/Http/Controllers/VisitPageIndexController.php:13
 * @route '/visit'
 */
VisitPageIndexController.url = (options?: RouteQueryOptions) => {
    return VisitPageIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisitPageIndexController::__invoke
 * @see app/Http/Controllers/VisitPageIndexController.php:13
 * @route '/visit'
 */
VisitPageIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: VisitPageIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VisitPageIndexController::__invoke
 * @see app/Http/Controllers/VisitPageIndexController.php:13
 * @route '/visit'
 */
VisitPageIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: VisitPageIndexController.url(options),
    method: 'head',
})
export default VisitPageIndexController