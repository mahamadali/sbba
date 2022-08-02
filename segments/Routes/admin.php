<?php

use Bones\Router;
use Controllers\Backend\DashboardController;
use Controllers\Backend\UserController;
use Controllers\AuthController;
use Barriers\Admin\IsAuthenticated;
use Controllers\Backend\CityController;
use Controllers\Backend\PracticeAreaController;


Router::bunch('/admin', ['as' => 'admin.', 'barrier' => [IsAuthenticated::class]], function() {
	Router::get('/dashboard', [ DashboardController::class, 'index' ])->name('dashboard');
	Router::bunch('/users', ['as' => 'users.'], function() {
		Router::get('/list', [ UserController::class, 'index' ])->name('list');
		Router::get('/view/{user}', [ UserController::class, 'view' ])->name('view');
	});

	Router::bunch('/cities', ['as' => 'cities.'], function() {
		Router::get('/list', [ CityController::class, 'index' ])->name('list');
		Router::get('/create', [ CityController::class, 'create' ])->name('create');
		Router::post('/store', [ CityController::class, 'store' ])->name('store');
		Router::get('/edit/{user}', [ CityController::class, 'edit' ])->name('edit');
		Router::post('/update', [ CityController::class, 'update' ])->name('update');
		Router::post('/delete/{user}', [ CityController::class, 'delete' ])->name('delete');
	});

	Router::bunch('/practice_area', ['as' => 'practice_area.'], function() {
		Router::get('/list', [ PracticeAreaController::class, 'index' ])->name('list');
		Router::get('/create', [ PracticeAreaController::class, 'create' ])->name('create');
		Router::post('/store', [ PracticeAreaController::class, 'store' ])->name('store');
		Router::get('/edit/{user}', [ PracticeAreaController::class, 'edit' ])->name('edit');
		Router::post('/update', [ PracticeAreaController::class, 'update' ])->name('update');
		Router::post('/delete/{user}', [ PracticeAreaController::class, 'delete' ])->name('delete');
	});
});

Router::get('/logout', [ AuthController::class, 'logout' ])->name('auth.logout');