<?php

use Bones\DataWing;
use Bones\Skeletons\DataWing\Skeleton;

return new class 
{

	protected $table = 'users';

	public function arise()
	{
		DataWing::modify($this->table, function (Skeleton $table)
		{
			$table->unsignedBigInteger('city_id')->nullable()->after('email');
			return $table;
		});
	}

	public function fall()
	{
		DataWing::dropColumn('city_id');
	}

};
