'use strict';
angular.module('LearningApp', ['ngAnimate', 'ui.bootstrap']).controller('MainController', ['$scope', '$window', ($scope, $window) => {
    $scope.selectedView = 1;
    $scope.selected = function (i) {
        $scope.selectedView = i;
    };
}]).controller('SimpleIfController', ['$scope', ($scope) => {
    $scope.execution = 'not_executed';
    $scope.options = [
        {
            id: 1
            , name: "1"
        }
        , {
            id: 2
            , name: "2"
        }
        , {
            id: 3
            , name: "3"
        }
        , {
            id: 4
            , name: "4"
        }
        , {
            id: 5
            , name: "5"
        }
    ];
}]);