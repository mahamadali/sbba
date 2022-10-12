<?php

use Bones\DataWing;
use Bones\Skeletons\DataWing\Skeleton;

return new class 
{

	protected $table = 'home_page_headings';

	public function arise()
	{
		DataWing::create($this->table, function (Skeleton $table)
		{
			$table->id()->primaryKey();
			$table->string('section1_heading');
			$table->text('section1_content');
			$table->string('section2_heading');
			$table->text('section2_content');
			$table->string('section3_heading');
			$table->text('section3_content');
			$table->timestamps();
			return $table;
		});
	}

	public function fall()
	{
		DataWing::drop($this->table);
	}

};
