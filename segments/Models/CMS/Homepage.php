<?php

namespace Models\CMS;

use Models\Base\Model;
use Models\Traits\TrashMask;

class Homepage extends Model
{
    use TrashMask;
	
	protected $table = 'cms_homepage';
}
