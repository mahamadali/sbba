<?php

use Bones\Router;
use Controllers\WelcomeController;
use Controllers\AuthController;

Router::get(['/home', '/'], [ WelcomeController::class, 'index' ])->name('landing');
Router::get('/terms-condition', [ WelcomeController::class, 'terms_conditions' ])->name('terms-condition');
Router::get('/sign-up', [ AuthController::class, 'signup' ])->name('sign-up');