angular
  .module("newspaper", [])

  .controller("HeaderController", function ($scope) {
    $scope.date = new Date();
  });
