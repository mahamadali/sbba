<?php

namespace Contributors;

use Bones\Skeletons\Supporters\AutoMethodMap;
use Exception;
use JollyException\MailerException;

class Mailer extends AutoMethodMap
{
    protected $to;
    protected $bodyHtml;
    protected $bodyText;
    protected $subject;
    protected $cc;
    protected $bcc;
    protected $attachments;
    protected $headers;

    public function __send()
    {
        $this->validate();
        echo "<h1>" . $this->subject . "</h1>";
        echo $this->bodyHtml;
        exit;
    }

    public function validate()
    {
        if (empty($this->to)) {
            throw new MailerException('Mailer: must have atleast one receipient to send an email to');
        }

        if (empty($this->subject)) {
            throw new MailerException('Mailer: email must have a subject');
        }

        if (empty($this->bodyHtml) && empty($this->bodyText)) {
            throw new MailerException('Mailer: empty body can not be sent as an email');
        }

    }

    public function __to(...$emails)
    {
        $this->to = resolveAsArray($emails);
        return $this;
    }

    public function __subject($subject)
    {
        $this->subject = $subject;
        return $this;
    }

    public function __bodyHtml($bodyHtml)
    {
        $this->bodyHtml = $bodyHtml;
        return $this;
    }

    public function __bodyText($bodyText)
    {
        $this->bodyText = $bodyText;
        return $this;
    }

    public function __html($bodyHtml)
    {
        return $this->__bodyHtml($bodyHtml);
    }

    public function __text($bodyText)
    {
        return $this->__bodyText($bodyText);
    }

    public function __cc(...$emails)
    {
        $this->cc = resolveAsArray($emails);
        return $this;
    }

    public function __bcc(...$emails)
    {
        $this->bcc = resolveAsArray($emails);
        return $this;
    }

    public function __attachment(...$attachments)
    {
        $this->attachment = resolveAsArray($attachments);
        return $this;
    }

    public function __headers(...$headerss)
    {
        $this->headers = resolveAsArray($headerss);
        return $this;
    }

}