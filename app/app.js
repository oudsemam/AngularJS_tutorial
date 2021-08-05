"use strict";

(function () {

  var app = angular.module("gitHubViewer", []);


  var mainController = function ($scope, $http) {

    var onUserComplete =function(response) {
      $scope.user = response.data;
    };

    var onError = function(reason){
      $scope.error = "Could not fetch the user.";
    }
    
    $http.get("https://api.github.com/users/robconery")

    .then(onUserComplete, onError);

    //default username search for.
    $scope.username = "angular";
    $scope.message = "GitHub Viewer for {{username}}";
    
  };

  app.controller("mainController", ["$scope", "$http", mainController]);
})();
