<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        /**
         * Categories
         */
        $lunettes = new Category();
        $lunettes->setLabel("Lunettes");
        $manager->persist($lunettes);

        $bijoux = new Category();
        $bijoux->setLabel("Bijoux");
        $manager->persist($bijoux);

        $serviettes = new Category();
        $serviettes->setLabel("Serviettes");
        $manager->persist($serviettes);

        $manager->flush();

        /**
         * Products
         */
        $cateye = new Product();
        $cateye->setName("Lunettes Cat Eye");
        $cateye->setPicture("cateye.jpg");
        $cateye->setPrice(15);
        $cateye->setDescription("FC2, lunettes de soleil tout usage. Bonne protection contre les rayons du soleil. Ces lunettes de soleil respectent la norme BSENISO12312-1:2013. Ne pas regarder le soleil directement et ne pas utiliser contre des sources de lumière artificielle comme dans un solarium. Non correctrices lunettes de soleil Ne pas utiliser pour protéger vos yeux d'un impact de type mécanique. Ne convient pas pour conduire au crépuscule ou de nuit. Ne pas utiliser de détergents ou autres produits abrasifs.");
        $cateye->setCategory($lunettes);
        $manager->persist($cateye);

        $vintage = new Product();
        $vintage->setName("Lunettes vintage");
        $vintage->setPicture("vintage.jpg");
        $vintage->setPrice(7);
        $vintage->setDescription("Les Lunettes de soleil Vintage sont constituées d'un cadre en alliage et comprennent une protection UV400. Ces lunettes sont parfaites pour les occasions décontractées ou plus exceptionnelles. Lunettes style Aviator rectangulaire très design.");
        $vintage->setCategory($lunettes);
        $manager->persist($vintage);

        $flamingo = new Product();
        $flamingo->setName("Serviette de plage Flamingo");
        $flamingo->setPicture("flamingo.jpg");
        $flamingo->setPrice(45);
        $flamingo->setDescription("Serviette de plage enfant Flamingo en velours imprimé (390g/m²). Craquez pour les flamands roses de cette serviette de plage pour enfants. De coloris rose et celadon, la serviette Flamingo se transforme en sac à dos pour le côté pratique. Dimensions : 86x163 cm.");
        $flamingo->setCategory($serviettes);
        $manager->persist($flamingo);

        $turkishTowel = new Product();
        $turkishTowel->setName("Serviette Turkish Towel");
        $turkishTowel->setPicture("turkish-towel.jpg");
        $turkishTowel->setPrice(29.23);
        $turkishTowel->setCategory($serviettes);
        $manager->persist($turkishTowel);

        $fashionBeachTowel = new Product();
        $fashionBeachTowel->setName("Serviette Fashion Beach Towel");
        $fashionBeachTowel->setPrice(29);
        $fashionBeachTowel->setCategory($serviettes);
        $manager->persist($fashionBeachTowel);

        $manager->flush();
    }
}