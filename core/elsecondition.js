angular.module('LearningApp.elsecondition').controller('elseConditionController', ['$scope', ($scope) => {
  $scope.varx = 6;
  $scope.result = {
    success: "not_executed",
    fail: "executed"
  };

  $scope.check = () => {
    var answer = 5;

    if($scope.varx > answer) {
      $scope.result.success = 'executed';
      $scope.result.fail = 'not_executed';
    } else {
      $scope.result.success = 'not_executed';
      $scope.result.fail = 'executed';
    }
  };
}]);
