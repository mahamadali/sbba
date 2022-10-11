<?php

namespace Controllers\Backend;

use Bones\Request;
use Models\User;
use Models\City;
use Models\PracticeArea;


class DashboardController
{
	public function index(Request $request)
	{
		$total_users = User::whereHas('role', function($query) {
			return $query->where('name', 'user');
		})->count();

		$total_cities = City::count();

		$total_practice_area = PracticeArea::count();

		

		return render('backend/admin/dashboard', [
			'total_users' => $total_users,
			'total_cities' => $total_cities,
			'total_practice_area' => $total_practice_area,
		]);
	}
}