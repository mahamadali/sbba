<?php

namespace Models;

use Models\Base\Model;
use Models\Role;
use Models\Traits\TrashMask;

class User extends Model
{
	use TrashMask;

	protected $table = 'users';
	protected $attaches = ['full_name'];

	protected $defaults = [];

	public function role() 
	{
		return $this->parallelTo(Role::class, 'role_id');
	}

	public function getFullNameProperty()
	{
		return $this->first_name . ' ' . $this->last_name;
	}


}