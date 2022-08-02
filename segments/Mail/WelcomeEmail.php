<?php

namespace Mail;

use Contributors\Mailer;

class WelcomeEmail extends Mailer
{
    public $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function prepare()
    {
        return $this->html(content('mails/welcome', ['user' => $this->user]))
                    ->subject('Welcome to ' . setting('app.title', 'Jolly Framework!'))
                    ->attachment('hello121');
    }

}