var app = angular.module('MinifyingTry', []);

app.controller('MainCtrl',['$scope',function($scope){
    $scope.timeNow = new Date().getTime();
}]);