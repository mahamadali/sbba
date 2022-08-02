<?php

namespace Models;

use Models\Base\Model;
use Models\Traits\TrashMask;

class City extends Model
{
	use TrashMask;
	
	protected $table = 'cities';

}