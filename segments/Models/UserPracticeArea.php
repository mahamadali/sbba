<?php

namespace Models;

use Models\Base\Model;
use Models\Traits\TrashMask;

class UserPracticeArea extends Model
{
	use TrashMask;
	
	protected $table = 'user_practice_areas';

}