'use strict';
angular.module('LearningApp.controllers', []);
var modules = [
    'ui.bootstrap'
    , 'ngAnimate'
];
var app = angular.module('LearningApp', modules);
app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    const home = {
        url: '/'
        , templateUrl: 'app/home.html'
    };
    const simpleif = {
        url: '/if'
        , templateUrl: 'app/simpleif.html'
        , controller: 'ifController'
    };
    const simpleelse = {
        url: '/else'
        , templateUrl: 'app/simpleelse.html'
        , controller: 'elseController'
    , };
    $stateProvider.state('home', home).state('simpleif', simpleif).state('simpleelse', simpleelse);
});