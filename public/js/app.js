var app= angular.module('myApp', ['ngRoute','angular-medium-editor'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/signin', {
                templateUrl: '/partials/signin.html',
                controller: 'authController'
            }).
            when('/signup', {
                templateUrl: '/partials/signup.html',
                controller: 'authController'
            }).
            when('/user', {
                templateUrl: '/partials/userinfo.html',
                controller: 'authController'
            }).
            when('/blogpage', {
                templateUrl: '/partials/blogpage.html',
                controller: 'blogPageController'
            }).
            otherwise({
                redirectTo: '/signin'
            });
    }]);