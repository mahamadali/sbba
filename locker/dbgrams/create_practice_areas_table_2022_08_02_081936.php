<?php

use Bones\DataWing;
use Bones\Skeletons\DataWing\Skeleton;

return new class 
{

	protected $table = 'practice_areas';

	public function arise()
	{
		DataWing::create($this->table, function (Skeleton $table)
		{
			$table->id()->primaryKey();
			$table->string('title')->nullable(false);
			$table->timestamps();
			$table->trashMask();
			return $table;
		});
	}

	public function fall()
	{
		DataWing::drop($this->table);
	}

};
