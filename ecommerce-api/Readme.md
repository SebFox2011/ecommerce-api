# Site ecommerce API
Installé sous PHP Storm
Utilise API Plateform : https://api-platform.com/
autres exemples d'API
    https://swapi.co/
    https://any-api.com/
    https://apilist.fun/

## paramétrage du projet
Créer un fichier .env.local et y renseigner les bonnes informations
de la base de donnée:
> Configure your db driver and server_version in config/packages/doctrine.yaml
  DATABASE_URL=mysql://root:root@127.0.0.1:8889/ecommerce

lancer ensuite les commandes suivantes:

composer create-project symfony/skeleton ecommerce-api
cd ecommerce-api
composer req api

## Création de la base de données
php bin/console doctrine:database:create

composer require symfony/maker-bundle --dev

php bin/console make:entity
 >Product
 >Mark this class as an API Platform resource (expose a CRUD API for it) 
    Yes (ajouter a CRUD API)
 >New property name (press <return> to stop adding fields):
    name string 255 no
    picture string 255 yes
    price decimal 10 2 no
    description text yes
    
php bin/console make:entity    
    >Category
     >Mark this class as an API Platform resource (expose a CRUD API for it) 
        Yes (ajouter a CRUD API)
    > New property name  label
    string 255 no
    
php bin/console make:entity 
    product
   >New property name : category
   type relation avec Category ManyToOne
   Is the Product.category property allowed to be null (nullable)? no
    Do you want to add a new property to Category so that you can access/update Product objects from it yes
    A new property will also be added to the Category class so that you can access the related Product objects from it. No

New field name inside Category [products]: Product
Do you want to automatically delete orphaned App\Entity\Product objects (orphanRemoval)? NO

composer req migrations
php bin/console make:migration

php bin/console doctrine:migrations:migrate

Fin de l'installation de la base

## Gestion fixtures
composer require --dev doctrine/doctrine-fixtures-bundle

Ajouter les DataFixtures dans AppFixtures.php
et lancer la commande suivante:

php bin/console doctrine:fixtures:load

## Lancement du projet
Installer le server Apache:
composer req symfony/web-server-bundle --dev

et le lancer
php bin/console server:run

Aller sur cette url:
http://127.0.0.1:8000/api pour créer la documentation de l'api


Paramétrer avec l'url du server de prod au lieu de localhost:
###> nelmio/cors-bundle ###
CORS_ALLOW_ORIGIN=^https?://localhost(:[0-9]+)?$
###< nelmio/cors-bundle ###

