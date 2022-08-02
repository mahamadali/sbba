<?php

namespace Models;

use Models\Base\Model;
use Models\Traits\TrashMask;

class PracticeArea extends Model
{
	use TrashMask;
	
	protected $table = 'practice_areas';

}