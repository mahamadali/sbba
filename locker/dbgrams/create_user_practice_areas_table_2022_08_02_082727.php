<?php

use Bones\DataWing;
use Bones\Skeletons\DataWing\Skeleton;

return new class 
{

	protected $table = 'user_practice_areas';

	public function arise()
	{
		DataWing::create($this->table, function (Skeleton $table)
		{
			$table->id()->primaryKey();
			$table->unsignedBigInteger('user_id');
			$table->unsignedBigInteger('practice_area_id');
			$table->string('other')->nullable();
			$table->timestamps();
			$table->softDelete();
			return $table;
		});
	}

	public function fall()
	{
		DataWing::drop($this->table);
	}

};
