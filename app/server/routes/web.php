<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

Route::prefix('api')->group(function () {
    Route::post('login',    [LoginController::class, 'store']);
    Route::post('register', [RegisterController::class, 'store']);
});



//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

//Route::get('/', function () {
//    return view('welcome');
//});
