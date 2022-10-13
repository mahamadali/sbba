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
				'content' => '<h2 style=" font-weight: inherit; text-decoration-line: inherit; color: rgb(33, 37, 41); line-height: inherit; font-size: 2rem; letter-spacing: -0.02em; margin: 0px 0px 0.5rem; font-family: Poppins, sans-serif; background-color: rgb(255, 255, 255)"><span style="font-size: 2rem; font-weight: inherit; letter-spacing: -0.02em; text-decoration-line: inherit;">What is The SBBA?</span></h2>








<p><span style="background-color: rgb(255, 255, 255); color: rgb(33, 37, 41); font-family: Poppins, sans-serif; font-size: 14px; font-weight: 700; text-decoration-line: inherit;">Solo & Boutique Bar Association LLC (“SBBA”) is a new free bar association focusing on building personal connections and synergy between small and boutique law firms. We don’t promise CLE’s or zoom meetings, and we don’t take ourselves too seriously. But we do promise fun events that will help you foster meaningful connections. Sign up, and we’ll let you know when we have our next free event nearby!</span></p>






<p><span style="background-color: rgb(255, 255, 255); color: rgb(33, 37, 41); font-family: Poppins, sans-serif; font-size: 2rem; font-weight: inherit; letter-spacing: -0.02em; text-decoration-line: inherit;">What do you gain from joining?</span></p>










<p style=" font-weight: 700; text-decoration-line: inherit; color: rgb(33, 37, 41); line-height: inherit; font-size: 14px; margin: 0px 0px 1rem; font-family: Poppins, sans-serif; background-color: rgb(255, 255, 255)"><span style="text-decoration-line: inherit;">Fun and hopefully making new friends and connections that are truly meaningful for your practice and career. We know the challenges lawyers at small and boutique firms face – we live them too. None of us have every area of expertise in house but working together we certainly do.</span></p>










<p class="mt-3" style=" font-weight: 700; text-decoration-line: inherit; color: rgb(33, 37, 41); line-height: inherit; font-size: 14px; margin-top: 1rem !important; margin-bottom: 1rem; font-family: Poppins, sans-serif; background-color: rgb(255, 255, 255)">We work hard to create fun events, and events that mix practitioners from small and boutique firms and from compatible practice areas. We set you up for success and make it fun to succeed. Build your network, make friends, and have a great time.</p>






<p class="mt-3" style="text-decoration-line: inherit; color: rgb(33, 37, 41); line-height: inherit; font-size: 14px; margin-bottom: 1rem; font-family: Poppins, sans-serif; background-color: rgb(255, 255, 255); margin-top: 1rem !important;"><span style="font-size: 2rem; letter-spacing: -0.02em; text-decoration-line: inherit;">What do we need from you?</span></p>










<p style=" font-weight: 700; text-decoration-line: inherit; color: rgb(33, 37, 41); line-height: inherit; font-size: 14px; margin: 0px 0px 1rem; font-family: Poppins, sans-serif; background-color: rgb(255, 255, 255)"><span style="text-decoration-line: inherit;">All we need is your openness to having a good time and trying a new way to meet some helpful and interesting colleagues. SBBA was started by attorneys, for attorneys, and it is all of us having fun and working together that is making it amazing. Sign up, and we’ll see you at the next event!</span></p>',
			],
		]);
	}

};