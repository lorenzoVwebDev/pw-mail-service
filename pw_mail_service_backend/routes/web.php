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

/*     return redirect()->away('http://localhost:4200/login'); */

/* Route::middleware(['auth', 'verified'])->get('/home', function () {
       return view("home");

})->name('home'); */
