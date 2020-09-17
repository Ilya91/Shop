<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{

    private $faker;
    /**
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->faker = Factory::create();
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $this->loadAdmin($manager);
        $this->loadUsers($manager);
    }

    private function loadUsers(ObjectManager $manager)
    {
        for ($i = 0; $i < 10; $i++) {

            $user = new User();
            $user->setEmail($this->faker->safeEmail);
            $user->setUsername($this->faker->userName);
            $password = $this->encoder->encodePassword($user, '1111');
            $user->setPassword($password);
            $user->setName($this->faker->name);

            $manager->persist($user);
        }

        $manager->flush();
    }

    private function loadAdmin(ObjectManager $manager)
    {
        $user = new User();
        $user->setEmail('admin@mail.com');
        $user->setUsername('admin');
        $password = $this->encoder->encodePassword($user, 'admin');
        $user->setPassword($password);
        $user->setName('Admin');

        $manager->persist($user);
        $manager->flush();
    }

}
