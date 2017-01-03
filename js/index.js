var ligApp = angular.module ('ligApp', []);

ligApp.controller('indexController', function indexController($scope, $http) {
    $scope.contributions = [];
    $scope.authors = {};

    $http.get ('data/contributions.json').then (function (data) {
        $scope.contributions = data.data;
    });

    $http.get ('data/authors.json').then (function (data) {
        $scope.authors = data.data;
    });
});