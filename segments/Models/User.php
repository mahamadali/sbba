<?php

namespace Models;

use Models\Base\Model;

class User extends Model
{
	protected $table = 'users';

	protected $defaults = [
		'password' => 'test_12345'
	];

}