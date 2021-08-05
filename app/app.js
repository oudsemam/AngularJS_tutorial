"use strict";

(function () {

  var app = angular.module("gitHubViewer", []);


  var mainController = function ($scope, $http) {

    var onUserComplete =function(response) {
      $scope.user = response.data;
    };
    
    $http.get("https://api.github.com/users/robconery")

    .then(onUserComplete);

    $scope.message = "hello Angular!";
    
  };

  app.controller("mainController", mainController);
})();
