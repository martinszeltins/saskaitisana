#!/bin/sh

while ! $(nc -z saskaitisana-server-mysql 3306) ; do sleep 1; echo "---> Waiting for MySQL to come up..."; done

echo "Running ---> composer install..."
composer install && \

echo "Running ---> chmod -R 777 /var/www"
chmod -R 777 /var/www && \

echo "Running ---> php artisan storage:link"
if [ ! -L "/var/www/public/storage" ]; then
    php artisan storage:link
fi

echo "Running ---> php artisan telescope:install"
php artisan telescope:install && \

echo "Running ---> php artisan migrate --seed"
php artisan migrate --seed && \

echo "Running ---> php-fpm"
php-fpm
