<?php

use Bones\DataWing;
use Bones\Skeletons\DataWing\Skeleton;

return new class 
{

	protected $table = 'user_area_practices';

	public function arise()
	{
		DataWing::create($this->table, function (Skeleton $table)
		{
			$table->id()->primaryKey();
			$table->unsignedBigInteger('user_id');
			$table->text('practice_areas');
			return $table;
		});
	}

	public function fall()
	{
		DataWing::drop($this->table);
	}

};
