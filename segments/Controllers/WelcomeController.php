<?php

namespace Controllers;

use Bones\Request;
use Models\City;
use Models\CMS\Homepage;
use Models\CMS\AboutUs;
use Models\CMS\Footer;

class WelcomeController
{
    public function index()
    {
        $cities = City::get();
        $HomeSectionArea = Homepage::get();
        $FooterSectionArea = Footer::get();
        return render('welcome', [
            'cities' => $cities,
            'HomeSectionArea' => $HomeSectionArea,
            'FooterSectionArea' => $FooterSectionArea
        ]);
    }

    public function page(Request $request, $page)
    {
        $AboutUsData = AboutUs::get();
        $FooterSectionArea = Footer::get();
        if (empty($page) || !in_array($page, ['terms-conditions', 'about-us', 'privacy-policy', 'contact-us'])) error(404);

        return render($page, [
            'AboutUsData' => $AboutUsData,
            'FooterSectionArea' => $FooterSectionArea
        ]);
    }
}
