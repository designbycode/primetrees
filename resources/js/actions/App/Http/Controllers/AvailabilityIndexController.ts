import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AvailabilityIndexController::__invoke
 * @see app/Http/Controllers/AvailabilityIndexController.php:14
 * @route '/availability-list'
 */
const AvailabilityIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AvailabilityIndexController.url(options),
    method: 'get',
})

AvailabilityIndexController.definition = {
    methods: ["get","head"],
    url: '/availability-list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AvailabilityIndexController::__invoke
 * @see app/Http/Controllers/AvailabilityIndexController.php:14
 * @route '/availability-list'
 */
AvailabilityIndexController.url = (options?: RouteQueryOptions) => {
    return AvailabilityIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AvailabilityIndexController::__invoke
 * @see app/Http/Controllers/AvailabilityIndexController.php:14
 * @route '/availability-list'
 */
AvailabilityIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AvailabilityIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AvailabilityIndexController::__invoke
 * @see app/Http/Controllers/AvailabilityIndexController.php:14
 * @route '/availability-list'
 */
AvailabilityIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AvailabilityIndexController.url(options),
    method: 'head',
})
export default AvailabilityIndexController