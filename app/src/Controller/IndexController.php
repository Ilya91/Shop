<?php

namespace App\Controller;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\UploadedFile;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

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
     * @param SluggerInterface $slugger
     * @return Response
     */
    public function upload(Request $request, SluggerInterface $slugger){
        /** @var UploadedFile $file */
        $file = $request->files->get('image');
        if ($file) {
            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            // this is needed to safely include the file name as part of the URL
            $safeFilename = $slugger->slug($originalFilename);
            $newFilename = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

            // Move the file to the directory where brochures are stored
            try {
                $file->move(
                    $this->getParameter('files_directory'),
                    $newFilename
                );
            } catch (FileException $e) {
                dd($e);
            }
        }


        return $this->render('index/index.html.twig', []);
    }
}