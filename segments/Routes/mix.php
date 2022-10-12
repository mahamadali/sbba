<?php

use Bones\Router;
use Controllers\WelcomeController;

Router::get(['/home', '/'], [ WelcomeController::class, 'index' ])->name('landing');
Router::get('{page}', [ WelcomeController::class, 'page' ])->name('page');
