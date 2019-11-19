# African Roots API using Laravel Passport

## Installation

 - Clone the repository
 - Set up database credentials in the .env file
 - Run ```composer update```
 - Run ```php artisan migrate``` to migrate the database
 - Run ```php artisan db:seed``` to seed data into the database

## API Routes

```https://dev-african-roots.herokuapp.com/api/register [POST]```

```https://dev-african-roots.herokuapp.com/api/login [POST]```
```https://dev-african-roots.herokuapp.com/api/meals [GET]```
```https://dev-african-roots.herokuapp.com/api/inventory [GET]```
```https://dev-african-roots.herokuapp.com/api/orders [GET]```
(you can also substitute the base url with 127.0.0.1:8000/ remember to run php artisan serve)

## Sources

- https://tutsforweb.com/laravel-passport-create-rest-api-with-authentication)
- https://jenssegers.com/projects/laravel-mongodb
- https://medium.com/@alexrenoki/when-to-use-nosql-getting-started-with-mongodb-in-laravel-f5376ceaf545
- https://devcenter.heroku.com/articles/getting-started-with-laravel
- https://www.techrrival.com/deploy-laravel-production-server-ubuntu-github/
- https://stackoverflow.com/questions/49905826/trying-to-get-property-id-of-non-object-on-passport-after-createtoken
- https://appdividend.com/2018/05/17/laravel-many-to-many-relationship-example/
- https://vegibit.com/many-to-many-relationships-in-laravel/
- https://github.com/sadnub/laravel-mongodb-passport-fix
- https://stackoverflow.com/questions/51745860/laravel-put-patch-request
