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
}