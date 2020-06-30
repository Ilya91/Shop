<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     attributes={"maximum_items_per_page"=50},
 *     denormalizationContext={
 *          "groups"={"article"}
 *     },
 *     itemOperations={
 *         "get"={
 *             "normalization_context"={
 *                 "groups"={"get-blog-post-with-author"}
 *             }
 *          },
 *         "put"={
 *             "access_control"="is_granted('ROLE_EDITOR') or (is_granted('ROLE_WRITER') and object.getAuthor() == user)"
 *         }
 *     },
 *     )
 * @ORM\Entity(repositoryClass="App\Repository\ArticleRepository")
 */
class Article
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="integer")
     */
    private $author_id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $category_id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $image_id;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Image")
     * @ORM\JoinTable()
     * @ApiSubresource()
     * @Groups({"article", "get-blog-post-with-author"})
     */
    private $images;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->images = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getAuthorId(): ?int
    {
        return $this->author_id;
    }

    public function setAuthorId(int $author_id): self
    {
        $this->author_id = $author_id;

        return $this;
    }

    public function getCategoryId(): ?int
    {
        return $this->category_id;
    }

    public function setCategoryId(?int $category_id): self
    {
        $this->category_id = $category_id;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImageId(): ?int
    {
        return $this->image_id;
    }

    public function getImages(): \Doctrine\Common\Collections\Collection
    {
        return $this->images;
    }

    public function addImage(Image $image)
    {
        $this->images->add($image);
    }

    public function removeImage(Image $image)
    {
        $this->images->removeElement($image);
    }

    public function setImageId(?int $image_id): self
    {
        $this->image_id = $image_id;

        return $this;
    }
}
