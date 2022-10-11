<?php

namespace Bones\Skeletons\DBFiller;

use Bones\Database;

return new class
{
	protected $table = 'cities';

	public function fill()
	{
		Database::table($this->table)->insertMulti([
			[
				'name' => 'Atlanta',
			],
			[
				'name' => 'Chicago',
			],
			[
				'name' => 'Denver',
			],
			[
				'name' => 'Miami',
			],
			[
				'name' => 'Milwaukee',
			],
			[
				'name' => 'New York',
			],
		]);
	}

};