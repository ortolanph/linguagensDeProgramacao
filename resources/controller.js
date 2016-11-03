'use strict';
angular.module('LearningApp.controllers').controller('mainController', mainController).controller('homeController', homeController).controller('simpleIfController', simpleIfController).controller('elseController', elseController);

function mainController($scope, $window) {
    $scope.views = [];
    $scope.selectedView = 1;
    $scope.selected = function (i) {
        $scope.selectedView = i;
    }
    $scope.hideEverything = function () {
        views.forEach((view) => {
            view = false;
        });
        console.log(views);
    }
}

function homeController($scope) {}

function simpleIfController($scope) {
    $scope.result = "not_executed";
    $scope.conditional = 1;
    $scope.check = function (conditional) {
        var answer = 5;
        if (conditional == answer) {
            $scope.result = "executed";
        }
        else {
            $scope.result = "not_executed";
        }
    }
}

function elseController($scope) {}