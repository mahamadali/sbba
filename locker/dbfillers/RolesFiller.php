<?php

namespace Bones\Skeletons\DBFiller;

use Bones\Database;

return new class
{
	protected $table = 'roles';

	public function fill()
	{
		Database::table($this->table)->insertMulti([
			[
				'name' => 'admin',
			],
			[
				'name' => 'user',
			],
		]);
	}

};