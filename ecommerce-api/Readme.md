# Site ecommerce API

## paramétrage du projet
composer create-project symfony/skeleton ecommerce-api
cd ecommerce-api
composer req api

php bin/console doctrine:database:create

composer require symfony/maker-bundle --dev

php bin/console make:entity

