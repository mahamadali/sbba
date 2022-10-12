<?php

namespace Bones\Skeletons\DBFiller;

use Bones\Database;

return new class
{
	protected $table = 'home_page_headings';

	public function fill()
	{
		Database::table($this->table)->insertMulti([
			[
				'section1_heading' => 'Who Are We?',
				'section1_content' => 'We are a free bar association for solo and boutique law firms. Enjoy social events and benefit from referrals from other members.',
				'section2_heading' => 'Where Are We?',
				'section2_content' => 'We’ve started in six cities. Choose a city and sign up. We’ll alert you when we have networking events near you!',
				'section3_heading' => 'How To Join',
				'section3_content' => "Sign-up today — we’ll get you out of the office (or off the laptop) in no time. Let's have fun! And make getting referrals easier for all of us.",
			],
		]);
	}

};