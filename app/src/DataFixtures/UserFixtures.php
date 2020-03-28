<?php

namespace App\DataFixtures;

use App\Entity\Book;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class UserFixtures extends Fixture
{

    private $faker;
    public function __construct()
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager)
    {
        $this->loadUsers($manager);
    }

    private function loadUsers(ObjectManager $manager)
    {
        for ($i = 0; $i < 10; $i++) {

            $user = new User();
            $user->setEmail($this->faker->safeEmail);
            $user->setUsername($this->faker->userName);
            $user->setPassword('111111');
            $user->setName($this->faker->name);

            $manager->persist($user);
        }

        $manager->flush();
    }

}
