<?php

namespace Models;

use Models\Base\Model;
use Models\PracticeArea;

class UserPracticeAreas extends Model
{
	protected $table = 'user_practice_areas';

    public function getPracticeArea() 
	{
		return $this->parallelTo(PracticeArea::class, 'practice_area_id')->first();
	}

}