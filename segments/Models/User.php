<?php

namespace Models;

use Models\Base\Model;
use Models\Role;
use Models\Traits\TrashMask;
use Models\UserPracticeAreas;
use Models\City;


class User extends Model
{
	use TrashMask;

	protected $table = 'users';
	protected $attaches = ['full_name'];
	protected $with = ['city'];

	protected $defaults = [];

	public function role() 
	{
		return $this->parallelTo(Role::class, 'role_id');
	}

	public function getFullNameProperty()
	{
		return ucfirst($this->first_name) . ' ' . ucfirst($this->last_name);
	}

	public function practiceArea(){
		return $this->hasMany(UserPracticeAreas::class, 'user_id')->get();
	}

	public function city() {
		return $this->parallelTo(City::class, 'city_id')->first();
	}
	


}