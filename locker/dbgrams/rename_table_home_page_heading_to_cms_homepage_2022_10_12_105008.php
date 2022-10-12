<?php

use Bones\Database;
use Bones\DataWing;
use Bones\Skeletons\DataWing\Skeleton;

return new class 
{

	protected $table = 'home_page_headings';

	public function arise()
	{
		DataWing::modify($this->table, function (Skeleton $table)
		{
			Database::rawQuery('RENAME TABLE ' . $this->table . ' TO cms_homepage');
			return $table;
		});
	}

	public function fall()
	{
		DataWing::modify($this->table, function (Skeleton $table)
		{
			return $table;
		});
	}

};
