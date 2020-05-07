<?php

namespace App\Controller;

use GuzzleHttp\Client;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{

    /**
    * @Route("/")
    */
    public function index()
    {
        $result = 'index page';
        return new Response($result);

    }

    /**
     * @Route("/upload", name="upload")
     * @param Request $request
     * @return Response
     */
    public function upload(Request $request){
        if ($request->files->get('image')){
            dd($request->files->get('image'));
        }
        return $this->render('index/index.html.twig', []);
    }
}