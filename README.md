# African Roots

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


# African Roots Client using React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
