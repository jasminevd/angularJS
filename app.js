var myNinjaApp = angular.module("myNinjaApp",['ngRoute','ngAnimate']);


myNinjaApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/home', {
        templeUrl: 'views/home.html',
        controller: 'NinjaController'
    })
    .when('/contact', {
        templeUrl: 'views/home.html',
        controller: 'ContactController'    
    })
    .when('directory', {
        templeUrl: 'views/home.html',
        controller: 'ContactController'    
        
    }).otherwise({
        redirectTo:'/home'
    });

}]);


myNinjaApp.directive('randomNinja', [function() {
    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='

        },
        template: '{{title}}<div ng-transclude></div>',
        transclude: true,
        controller: function($scope) {
            $scope.random = Math.floor(Math.random()*4);
        }
    };
}]);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    $scope.removeNinja = function(ninja) {
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function() {
        var newNinja = {
            name: $scope.newninja.name, 
            belt: $scope.newninja.belt, 
            rate: parseInt($scope.newninja.rate),
        available: true};

        $scope.ninjas.push(newNinja);

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
    }

    $scope.ninjas  = [
{
    name: "Jovita",
    belt: "green",
    rate: 50,
    available: true
},
{
    name: "Jasmine",
    belt: "pink",
    rate: 50,
    available: true
},
{
    name: "Jennifer",
    belt: "yellow",
    rate: 500,
    available: true
},{
    name: "Jasper",
    belt: "red",
    rate: 500,
    available: true
}

    ]
}]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function ($scope, $location) {
    alert("here");
    $scope.sendMessage = function() {
        $location.path('/contact-success');
    }

}

]);