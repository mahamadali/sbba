<?php

namespace Bones\Skeletons\DBFiller;

use Bones\Database;

return new class
{
	protected $table = 'users';

	public function fill()
	{
		Database::table($this->table)->insertMulti([
			[
				'first_name' => 'Super',
				'last_name' => 'Admin',
				'email' => 'super@admin.com',
				'password' => md5('secret'),
				'role_id' => 1,
			],
		]);
	}

};