<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CarrosController;
use App\Http\Controllers\API\DefeitosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(["namespace" => "API"], function ($router)
{
	// Carro
    Route::get('/carros',[CarrosController::class, 'index']);
	Route::post("/carros", [CarrosController::class, 'store']);
	Route::put("/carros/update", [CarrosController::class, 'update']);
	Route::delete("/carros/{id}", [CarrosController::class, 'destroy']);

    // Defeito
    Route::get("/defeitos", [DefeitosController::class, 'index']);
	Route::post("/defeitos", [DefeitosController::class, 'store']);
	Route::put("/defeitos/update", [DefeitosController::class, 'update']);
	Route::delete("/defeitos/{id}", [DefeitosController::class, 'destroy']);

});
