<?php

namespace Models;

use Models\Base\Model;
use Models\Traits\TrashMask;

class HomeSectionArea extends Model
{
	use TrashMask;
	
	protected $table = 'home_page_headings';

}