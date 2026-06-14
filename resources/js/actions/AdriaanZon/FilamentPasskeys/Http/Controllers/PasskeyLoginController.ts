import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:21
 * @route '/admin/passkeys/login/options'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/passkeys/login/options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:21
 * @route '/admin/passkeys/login/options'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:21
 * @route '/admin/passkeys/login/options'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:21
 * @route '/admin/passkeys/login/options'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::store
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:34
 * @route '/admin/passkeys/login'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/passkeys/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::store
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:34
 * @route '/admin/passkeys/login'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::store
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:34
 * @route '/admin/passkeys/login'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})
const PasskeyLoginController = { index, store }

export default PasskeyLoginController