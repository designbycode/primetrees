<?php

use App\Http\Controllers\HomePageIndexController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomePageIndexController::class)->name('home');
