angular.module('myApp', []).
  controller('alluserscontroller', ['$scope', '$http',
                              function($scope, $http) {
    $http.get('/getAllUsers')
        .success(function(data, status, headers, config) {
          console.log("allusers controller");
      $scope.users = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }]);