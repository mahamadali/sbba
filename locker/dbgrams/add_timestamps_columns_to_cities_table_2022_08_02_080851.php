<?php

use Bones\DataWing;
use Bones\Skeletons\DataWing\Skeleton;

return new class 
{

	protected $table = 'cities';

	public function arise()
	{
		DataWing::modify($this->table, function (Skeleton $table)
		{
			$table->timestamps();
			$table->softDelete();
			return $table;
		});
	}

	public function fall()
	{
		DataWing::dropColumn('created_at');
		DataWing::dropColumn('updated_at');
		DataWing::dropColumn('deleted_at');
	}

};
