import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:21
 * @route '/admin/passkeys/confirm/options'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/passkeys/confirm/options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:21
 * @route '/admin/passkeys/confirm/options'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:21
 * @route '/admin/passkeys/confirm/options'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::index
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:21
 * @route '/admin/passkeys/confirm/options'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::store
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:39
 * @route '/admin/passkeys/confirm'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/passkeys/confirm',
} satisfies RouteDefinition<["post"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::store
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:39
 * @route '/admin/passkeys/confirm'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::store
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:39
 * @route '/admin/passkeys/confirm'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})
const PasskeyConfirmationController = { index, store }

export default PasskeyConfirmationController