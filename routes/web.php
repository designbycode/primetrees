<?php

use App\Http\Controllers\AvailabilityIndexController;
use App\Http\Controllers\HomePageIndexController;
use App\Http\Controllers\TreesPageIndexController;
use App\Http\Controllers\TreesShowController;
use App\Http\Controllers\VisitPageIndexController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomePageIndexController::class)->name('home');
Route::get('/trees', TreesPageIndexController::class)->name('trees');
Route::get('/trees/{tree:slug}', TreesShowController::class)->name('trees.show');
Route::get('/visit', VisitPageIndexController::class)->name('visit');
Route::get('/availability-list', AvailabilityIndexController::class)->name('availability-list');
