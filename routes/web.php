<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Catch all routes and return the app view to let React handle routing
Route::get('/{path?}', function () {
    return view('app');
})->where('path', '.*');
