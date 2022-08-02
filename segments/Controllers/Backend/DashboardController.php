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
		$total_users = count(User::whereHas('role', function($query) {
			return $query->where('name', 'user');
		})->get());

		$total_cities = count(City::get());

		$total_practice_area = count(PracticeArea::get());

		

		return render('backend/admin/dashboard', [
			'total_users' => $total_users,
			'total_cities' => $total_cities,
			'total_practice_area' => $total_practice_area,
		]);
	}
}