<?php

namespace App\DataFixtures;

use App\Entity\Article;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ArticleFixtures extends Fixture
{

    private $faker;

    public function __construct()
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager)
    {
        $this->loadArticles($manager);
    }

    private function loadArticles(ObjectManager $manager)
    {
        for ($i = 0; $i < 30; $i++) {

            $article = new Article();
            $article->setTitle($this->faker->sentence(6, true));
            $article->setAuthorId(1);
            $article->setCategoryId(1);
            $article->setDescription($this->faker->paragraph(23, true));

            $manager->persist($article);
        }

        $manager->flush();
    }

}
