<?php

use Bones\DataWing;
use Bones\Skeletons\DataWing\Skeleton;

return new class 
{

	protected $table = 'cms_footer';

	public function arise()
	{
		DataWing::create($this->table, function (Skeleton $table)
		{
			$table->id()->primaryKey();
			$table->string('follow_on_social_media_line_text');
			$table->string('facebook_link');
			$table->string('instagram_link');
			$table->string('terms_and_conditions_link');
			$table->string('privacy_policy_link');
			$table->string('contact_us_link');
			$table->timestamps();
			return $table;
		});
	}

	public function fall()
	{
		DataWing::drop($this->table);
	}

};
