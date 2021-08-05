"use strict";

(function () {

  var app = angular.module("gitHubViewer", []);


  var mainController = function ($scope,) {
    var person = {
      firstName: "Maggie",
      lastName: "Oudsema",
      imageSrc: "https://pbs.twimg.com/profile_images/1336092056243101700/MwrUZoe3_400x400.jpg"
    }
    $scope.message = "hello Angular!";
    $scope.person = person
  };

  app.controller("mainController", mainController);
})();
