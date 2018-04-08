var app = angular.module('myApp', [ngRoute]);
app.controller('mainCtrl', function($scope) {
    $scope.page = {template :"dashboard.html"};
   
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "dashboard.html"
    })
});
