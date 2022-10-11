<?php

namespace Bones\Skeletons\DBFiller;

use Bones\Database;

return new class
{
	protected $table = 'practice_areas';

	public function fill()
	{
		Database::table($this->table)->insertMulti([
			[
				'title' => 'Banking & Finance'
			],
			[
				'title' => 'Commercial Bankruptcy'
			],
			[
				'title' => 'Consumer Bankruptcy'
			],
			[
				'title' => 'Commercial Litigation'
			],
			[
				'title' => 'Corporate Law'
			],
			[
				'title' => 'Intellectual Property'
			],
			[
				'title' => 'Labor & Employment'
			],
			[
				'title' => 'Mergers & Acquisitions'
			],
			[
				'title' => 'Personal Injury'
			],
			[
				'title' => 'Real Estate'
			],
			[
				'title' => 'Real Estate Litigation'
			],
			[
				'title' => 'Tax'
			],
		]);
	}

};