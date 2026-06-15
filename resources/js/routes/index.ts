import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
 * @see app/Http/Controllers/HomePageIndexController.php:13
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
 * @see app/Http/Controllers/HomePageIndexController.php:13
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
 * @see app/Http/Controllers/HomePageIndexController.php:13
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
 * @see app/Http/Controllers/HomePageIndexController.php:13
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TreesPageIndexController::__invoke
 * @see app/Http/Controllers/TreesPageIndexController.php:13
 * @route '/trees'
 */
export const trees = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trees.url(options),
    method: 'get',
})

trees.definition = {
    methods: ["get","head"],
    url: '/trees',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TreesPageIndexController::__invoke
 * @see app/Http/Controllers/TreesPageIndexController.php:13
 * @route '/trees'
 */
trees.url = (options?: RouteQueryOptions) => {
    return trees.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TreesPageIndexController::__invoke
 * @see app/Http/Controllers/TreesPageIndexController.php:13
 * @route '/trees'
 */
trees.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trees.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TreesPageIndexController::__invoke
 * @see app/Http/Controllers/TreesPageIndexController.php:13
 * @route '/trees'
 */
trees.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trees.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VisitPageIndexController::__invoke
 * @see app/Http/Controllers/VisitPageIndexController.php:13
 * @route '/visit'
 */
export const visit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visit.url(options),
    method: 'get',
})

visit.definition = {
    methods: ["get","head"],
    url: '/visit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisitPageIndexController::__invoke
 * @see app/Http/Controllers/VisitPageIndexController.php:13
 * @route '/visit'
 */
visit.url = (options?: RouteQueryOptions) => {
    return visit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisitPageIndexController::__invoke
 * @see app/Http/Controllers/VisitPageIndexController.php:13
 * @route '/visit'
 */
visit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VisitPageIndexController::__invoke
 * @see app/Http/Controllers/VisitPageIndexController.php:13
 * @route '/visit'
 */
visit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: visit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AvailabilityIndexController::__invoke
 * @see app/Http/Controllers/AvailabilityIndexController.php:14
 * @route '/availability-list'
 */
export const availabilityList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: availabilityList.url(options),
    method: 'get',
})

availabilityList.definition = {
    methods: ["get","head"],
    url: '/availability-list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AvailabilityIndexController::__invoke
 * @see app/Http/Controllers/AvailabilityIndexController.php:14
 * @route '/availability-list'
 */
availabilityList.url = (options?: RouteQueryOptions) => {
    return availabilityList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AvailabilityIndexController::__invoke
 * @see app/Http/Controllers/AvailabilityIndexController.php:14
 * @route '/availability-list'
 */
availabilityList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: availabilityList.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AvailabilityIndexController::__invoke
 * @see app/Http/Controllers/AvailabilityIndexController.php:14
 * @route '/availability-list'
 */
availabilityList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: availabilityList.url(options),
    method: 'head',
})