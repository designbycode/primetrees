<?php

use Illuminate\Support\Facades\Route;
use Inertia\Testing\AssertableInertia as Assert;

test('renders custom error page for 404 not found', function () {
    $response = $this->get('/non-existent-route-for-testing-404');

    $response->assertNotFound();
    $response->assertInertia(fn (Assert $page) => $page
        ->component('error')
        ->where('status', 404)
    );
});

test('renders custom error page for 403 forbidden', function () {
    Route::middleware('web')->get('/_test-error-403', function () {
        abort(403);
    });

    $response = $this->get('/_test-error-403');

    $response->assertForbidden();
    $response->assertInertia(fn (Assert $page) => $page
        ->component('error')
        ->where('status', 403)
    );
});

test('renders custom error page for 500 internal server error', function () {
    Route::middleware('web')->get('/_test-error-500', function () {
        abort(500);
    });

    $response = $this->get('/_test-error-500');

    $response->assertStatus(500);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('error')
        ->where('status', 500)
    );
});

test('renders custom error page for 404 not found in local environment', function () {
    $this->app->detectEnvironment(fn () => 'local');

    $response = $this->get('/non-existent-route-for-testing-404');

    $response->assertNotFound();
    $response->assertInertia(fn (Assert $page) => $page
        ->component('error')
        ->where('status', 404)
    );
});

test('renders default exception page for 500 internal server error in local environment', function () {
    $this->app->detectEnvironment(fn () => 'local');

    Route::middleware('web')->get('/_test-error-500-local', function () {
        abort(500);
    });

    $response = $this->get('/_test-error-500-local');

    $response->assertStatus(500);
    $response->assertHeaderMissing('X-Inertia');
});
