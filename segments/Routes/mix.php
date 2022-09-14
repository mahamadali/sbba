<?php

use Bones\Router;
use Controllers\WelcomeController;
use Controllers\AuthController;

Router::get(['/home', '/'], [ WelcomeController::class, 'index' ])->name('landing');
Router::get('/terms-condition', [ WelcomeController::class, 'terms_conditions' ])->name('terms-condition');
Router::get('/about-us', [ WelcomeController::class, 'about_us' ])->name('about-us');
Router::get('/privacy-policy', [ WelcomeController::class, 'privacy_policy' ])->name('privacy-policy');
Router::get('/contact-us', [ WelcomeController::class, 'contact_us' ])->name('contact-us');
