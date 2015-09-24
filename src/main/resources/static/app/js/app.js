'use strict';

/* App Module */

var auxilingua = angular.module('auxilingua', [
    'ngRoute',
    'auxilinguaAnimations',
    'auxilinguaControllers',
    'auxilinguaFilters',
    'auxilinguaServices'
]);

auxilingua.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/latin-detail', {
                templateUrl: '/app/partials/latin-detail.html',
                controller: 'LatinDetailCtrl'
            }).
            //when('/login', {
            //    templateUrl: '/app/partials/login.html',
            //    controller: 'LoginController'
            //}).
            when('/registration', {
                templateUrl: '/app/partials/registration.html',
                controller: 'RegistrationController'
            }).
            when('/dashboard', {
                templateUrl: '/app/partials/dashboard.html',
                controller: 'DashboardController'
            }).
            when('/parsing_quiz', {
                templateUrl: '/app/partials/parsing-quiz.html',
                controller: 'QuizController'
            }).

            when('/common_phrase', {
                templateUrl: '/app/partials/common-phrase.html',
                controller: 'CommonPhraseController'
            }).
            when('/common_phrase_quiz', {
                templateUrl: '/app/partials/common-phrase-quiz.html',
                controller: 'CommonPhraseQuizController'
            }).

            otherwise({
                redirectTo: '/dashboard'
            });
    }]);
