<?php

namespace Controllers;
use Models\City;

class WelcomeController
{
    public function index()
    {
        $cities = City::get();
        return render('welcome', [
            'cities' => $cities
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