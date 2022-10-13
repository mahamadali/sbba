<?php

namespace Bones\Skeletons\DBFiller;

use Bones\Database;

return new class
{
	protected $table = 'cms_about_us';

	public function fill()
	{
		Database::table($this->table)->insertMulti([
			[
				'content' => 'What is The SBBA?
Solo & Boutique Bar Association LLC (“SBBA”) is a new free bar association focusing on building personal connections and synergy between small and boutique law firms. We don’t promise CLE’s or zoom meetings, and we don’t take ourselves too seriously. But we do promise fun events that will help you foster meaningful connections. Sign up, and we’ll let you know when we have our next free event nearby!

What do you gain from joining?
Fun and hopefully making new friends and connections that are truly meaningful for your practice and career. We know the challenges lawyers at small and boutique firms face – we live them too. None of us have every area of expertise in house but working together we certainly do.

We work hard to create fun events, and events that mix practitioners from small and boutique firms and from compatible practice areas. We set you up for success and make it fun to succeed. Build your network, make friends, and have a great time.

What do we need from you?
All we need is your openness to having a good time and trying a new way to meet some helpful and interesting colleagues. SBBA was started by attorneys, for attorneys, and it is all of us having fun and working together that is making it amazing. Sign up, and we’ll see you at the next event!',
			],
		]);
	}

};