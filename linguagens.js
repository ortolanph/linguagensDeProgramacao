angular.module('LearningApp', ['ngAnimate', 'ui.bootstrap'])).controller('MainController', ['$scope', '$window', ($scope, $window) => {
        $scope.currentView = "intro.html";
        $scope.currentController = HomeController;
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
}]).controller('ElseController', ['$scope', ($scope) => {}]).controller('HomeController', ['$scope', ($scope) => {}]).controller('SimpleIfController', ['$scope', ($scope) => {
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
}];