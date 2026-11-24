<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Actions\Fortify\CreateNewUser;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/csrf-cookie', function () {
    return ;
});

Route::middleware(['auth', 'verified'])->get('/home', function () {
    return ;
})->name('home');
