<?php

namespace Models\CMS;

use Models\Base\Model;
use Models\Traits\TrashMask;

class AboutUs extends Model
{
	use TrashMask;
	
	protected $table = 'cms_about_us';
}
