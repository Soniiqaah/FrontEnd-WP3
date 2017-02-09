/**
 * Created by Soniiqaah on 2017-02-08.
 */
var myWeatherApp = angular.module('myWeatherApp', ['ngRoute']);

// konfigurerar mina routes
myWeatherApp.config(function ($routeProvider) {
    $routeProvider

    // route for the login page
        .when('login', {
            templateUrl: 'html/login.html',
            controller: 'loginController'
        })

        // route for the crud page
        .when('/crud', {
            templateUrl: 'html/crud.html',
            controller: 'crudController'
        })

        // route for the index page
        .when('/index', {
            templateUrl: 'html/index.html',
            controller: 'indexController'
        });


});

