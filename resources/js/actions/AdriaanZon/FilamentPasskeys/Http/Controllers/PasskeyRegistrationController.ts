import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:20
 * @route '/admin/user/passkeys/options'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/user/passkeys/options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:20
 * @route '/admin/user/passkeys/options'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:20
 * @route '/admin/user/passkeys/options'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:20
 * @route '/admin/user/passkeys/options'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::store
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:37
 * @route '/admin/user/passkeys'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/user/passkeys',
} satisfies RouteDefinition<["post"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::store
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:37
 * @route '/admin/user/passkeys'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::store
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:37
 * @route '/admin/user/passkeys'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})
const PasskeyRegistrationController = { index, store }

export default PasskeyRegistrationController