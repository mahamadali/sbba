<?php

use Bones\Router;
use Controllers\AuthController;


Router::bunch('/auth', ['as' => 'auth.', 'barrier' => ['is-not-auth']], function() {
	Router::get('/login', [ AuthController::class, 'index' ])->name('login');
	Router::post('/check-login', [ AuthController::class, 'checkLogin' ])->name('check.login');
	Router::get('/sign-up', [ AuthController::class, 'signup' ])->name('sign-up');
	Router::post('/register', [ AuthController::class, 'register' ])->name('register');
	Router::get('/sign-up/thank-you', [ AuthController::class, 'thankYou' ])->name('sign-up.thank-you');
});