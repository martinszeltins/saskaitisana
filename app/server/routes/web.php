<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScoreController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

Route::prefix('api')->group(function () {
    Route::post('login',    [LoginController::class, 'store']);
    Route::post('register', [RegisterController::class, 'store']);

    Route::get('score',     [ScoreController::class, 'index']);
    Route::post('score',    [ScoreController::class, 'store']);
});
