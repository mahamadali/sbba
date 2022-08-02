<?php

namespace Controllers;
use Models\City;

class AuthController
{
    public function index()
    {
        
    }


    public function signup()
    {
        return render('auth/signup');
    }
}