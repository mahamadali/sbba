<?php

namespace Mail;

use Contributors\Mail\Mailer;
use Models\Setting;

class WelcomeEmail extends Mailer
{
    public $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function prepare()
    {
        $admin_email = Setting::where('key', 'receive_email_alerts_at')->first();
        return $this->html(content('mails/welcome', ['user' => $this->user]))
                   ->to($admin_email->value)->subject('New Member Registration');
    }

}