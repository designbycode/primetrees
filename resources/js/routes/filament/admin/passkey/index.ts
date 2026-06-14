import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::confirmOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:21
 * @route '/admin/passkeys/confirm/options'
 */
export const confirmOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmOptions.url(options),
    method: 'get',
})

confirmOptions.definition = {
    methods: ["get","head"],
    url: '/admin/passkeys/confirm/options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::confirmOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:21
 * @route '/admin/passkeys/confirm/options'
 */
confirmOptions.url = (options?: RouteQueryOptions) => {
    return confirmOptions.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::confirmOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:21
 * @route '/admin/passkeys/confirm/options'
 */
confirmOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmOptions.url(options),
    method: 'get',
})
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::confirmOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:21
 * @route '/admin/passkeys/confirm/options'
 */
confirmOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmOptions.url(options),
    method: 'head',
})

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::confirm
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:39
 * @route '/admin/passkeys/confirm'
 */
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(options),
    method: 'post',
})

confirm.definition = {
    methods: ["post"],
    url: '/admin/passkeys/confirm',
} satisfies RouteDefinition<["post"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::confirm
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:39
 * @route '/admin/passkeys/confirm'
 */
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyConfirmationController::confirm
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyConfirmationController.php:39
 * @route '/admin/passkeys/confirm'
 */
confirm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(options),
    method: 'post',
})

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::loginOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:21
 * @route '/admin/passkeys/login/options'
 */
export const loginOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loginOptions.url(options),
    method: 'get',
})

loginOptions.definition = {
    methods: ["get","head"],
    url: '/admin/passkeys/login/options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::loginOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:21
 * @route '/admin/passkeys/login/options'
 */
loginOptions.url = (options?: RouteQueryOptions) => {
    return loginOptions.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::loginOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:21
 * @route '/admin/passkeys/login/options'
 */
loginOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loginOptions.url(options),
    method: 'get',
})
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::loginOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:21
 * @route '/admin/passkeys/login/options'
 */
loginOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: loginOptions.url(options),
    method: 'head',
})

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::login
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:34
 * @route '/admin/passkeys/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/admin/passkeys/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::login
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:34
 * @route '/admin/passkeys/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyLoginController::login
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyLoginController.php:34
 * @route '/admin/passkeys/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::registrationOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:20
 * @route '/admin/user/passkeys/options'
 */
export const registrationOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registrationOptions.url(options),
    method: 'get',
})

registrationOptions.definition = {
    methods: ["get","head"],
    url: '/admin/user/passkeys/options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::registrationOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:20
 * @route '/admin/user/passkeys/options'
 */
registrationOptions.url = (options?: RouteQueryOptions) => {
    return registrationOptions.definition.url + queryParams(options)
}

/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::registrationOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:20
 * @route '/admin/user/passkeys/options'
 */
registrationOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registrationOptions.url(options),
    method: 'get',
})
/**
* @see \AdriaanZon\FilamentPasskeys\Http\Controllers\PasskeyRegistrationController::registrationOptions
 * @see vendor/adriaanzon/filament-passkeys/src/Http/Controllers/PasskeyRegistrationController.php:20
 * @route '/admin/user/passkeys/options'
 */
registrationOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: registrationOptions.url(options),
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
const passkey = {
    confirmOptions: Object.assign(confirmOptions, confirmOptions),
confirm: Object.assign(confirm, confirm),
loginOptions: Object.assign(loginOptions, loginOptions),
login: Object.assign(login, login),
registrationOptions: Object.assign(registrationOptions, registrationOptions),
store: Object.assign(store, store),
}

export default passkey