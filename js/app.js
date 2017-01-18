console.log('app.js was loaded.');

angular.module('App', [])
.controller('appCtrl', ['$scope', function($scope){
$scope.display = 0;
$scope.calc = [];

$scope.clear = function(){
  $scope.display = 0;
};

$scope.input = function(num){
  if ($scope.display === 0){
    $scope.display = num;
  } else{
    $scope.display = $scope.display.toString() + num.toString();
    $scope.display = parseInt($scope.display, 10);
  }
};

$scope.add = function(){
  $scope.calc.push($scope.display);
  $scope.display = 0;
};

$scope.total = function(){
  $scope.calc.push($scope.display);
  $scope.display = $scope.calc[0] + $scope.calc[1];
  $scope.calc = [];

};

}]);
