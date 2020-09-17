<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
//use Vich\UploaderBundle\Mapping\Annotation as Vich;
use App\Controller\UploadController;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Class Image
 * @package App\Entity
 * @ORM\Entity()
 * @ApiResource(
 *  collectionOperations={
 *     "get",
 *     "post"={
 *        "method"="POST",
 *        "path"="/images",
 *        "controller"=UploadController::class,
 *        "defaults"={"_api_recieve"=false},
 *     "deserialize"=false,
 *      "swagger_context"={
 *                 "consumes"={
 *                     "multipart/form-data",
 *                 },
 *                 "parameters"={
 *                     {
 *                         "in"="formData",
 *                         "name"="file",
 *                         "type"="file",
 *                         "description"="The file to upload",
 *                     },
 *                 },
 *             },
 *
 *      }
 *     },
 *       denormalizationContext={
 *          "groups"={"article"}
 *     }
 * )
 */
class Image
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    private $file;

    /**
     * @ORM\Column(nullable=true)
     * @Groups({"article", "get-blog-post-with-author"})
     */
    private $url;

    public function getId()
    {
        return $this->id;
    }

    public function getFile()
    {
        return $this->file;
    }

    public function setFile($file): void
    {
        $this->file = $file;
    }

    public function getUrl()
    {
        return '/images/' . $this->url;
    }

    public function setUrl($url): void
    {
        $this->url = $url;
    }


}