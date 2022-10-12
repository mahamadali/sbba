<?php

namespace Controllers;

use Bones\Request;
use Models\City;
use Models\CMS\Homepage;

class WelcomeController
{
    public function index()
    {
        $cities = City::get();
        $HomeSectionArea = Homepage::get();
        return render('welcome', [
            'cities' => $cities,
            'HomeSectionArea' => $HomeSectionArea
        ]);
    }

    public function page(Request $request, $page)
    {
        if (empty($page) || !in_array($page, ['terms-conditions', 'about-us', 'privacy-policy', 'contact-us'])) error(404);

        return render($page);
    }
}
