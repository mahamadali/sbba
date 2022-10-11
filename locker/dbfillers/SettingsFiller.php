<?php

namespace Bones\Skeletons\DBFiller;

use Bones\Database;

return new class
{
	protected $table = 'settings';

	public function fill()
	{
		Database::table($this->table)->insertMulti([
			[
				'key' => 'receive_email_alerts_at',
				'value' => 'hasanmoriya429@gmail.com',
			],
		]);
	}

};