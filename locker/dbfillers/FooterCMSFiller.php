<?php

namespace Bones\Skeletons\DBFiller;

use Bones\Database;

return new class
{
	protected $table = 'cms_footer';

	public function fill()
	{
		Database::table($this->table)->insertMulti([
			[
				'follow_on_social_media_line_text' => 'Follow us on social media',
				'facebook_link' => 'javascript:void(0)',
				'instagram_link' => 'javascript:void(0)',
				'terms_and_conditions_link' => 'https://sobofirms.com/terms-conditions',
				'privacy_policy_link' => 'https://sobofirms.com/privacy-policy',
				'contact_us_link' => 'https://sobofirms.com/contact-us',
			],
		]);
	}

};