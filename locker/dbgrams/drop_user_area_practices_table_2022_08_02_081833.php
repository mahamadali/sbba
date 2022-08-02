<?php

use Bones\DataWing;
use Bones\Skeletons\DataWing\Skeleton;

return new class 
{

	protected $table = 'user_area_practices';

	public function arise()
	{
		DataWing::drop($this->table);
	}

	public function fall()
	{
	}

};
