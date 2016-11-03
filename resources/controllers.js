function mainController($scope) {
    $scope.title = "Linguagens de Programação";
}

angular.module('LearningApp.controllers')
    .controller('mainController', mainController);