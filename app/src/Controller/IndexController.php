<?php

namespace App\Controller;

use GuzzleHttp\Client;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController
{

    /**
    * @Route("/")
    */
    public function index()
    {
        $result = 'index page';
        return new Response($result);

    }
}