angular.module('LearningApp.simplecondition').controller('simpleConditionController', ['$scope', ($scope) => {
  $scope.varx = 6;
  $scope.result = 'not_executed';
  
  $scope.check = () => {
    var answer = 5;

    if($scope.varx == answer) {
      $scope.result = 'executed';
    } else {
      $scope.result = 'not_executed';
    }
  };
}]);
