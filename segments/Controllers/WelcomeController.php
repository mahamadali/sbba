<?php

namespace Controllers;
use Models\City;
use Models\HomeSectionArea;


class WelcomeController
{
    public function index()
    {
        $cities = City::get();
        $HomeSectionArea = HomeSectionArea::get();
        return render('welcome', [
            'cities' => $cities,
            'HomeSectionArea' => $HomeSectionArea
        ]);
     
    }


    public function terms_conditions()
    {
        return render('terms_conditions');
    }

    
    public function about_us()
    {
        return render('about_us');
    }

     public function privacy_policy()
    {
        return render('privacy_policy');
    }

    public function contact_us()
    {
        return render('contact_us');
    }
}