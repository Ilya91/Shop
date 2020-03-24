<?php

namespace App\DataFixtures;

use App\Entity\Book;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class BookFixtures extends Fixture
{

    private $faker;
    public function __construct()
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager)
    {
        $this->loadBooks($manager);
    }

    private function loadBooks(ObjectManager $manager)
    {
        for ($i = 0; $i < 50; $i++) {

            $book = new Book($this->faker->realText(30));
            $book->setPrice($this->faker->numberBetween(100, 500));
            $book->setDescription($this->faker->realText());

            $manager->persist($book);
        }

        $manager->flush();
    }

}
