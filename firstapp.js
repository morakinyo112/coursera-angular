(function () {
 'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope) {
        $scope.name = "Mortech";
        $scope.sayHello = function () {
            return "Hello Coursera!";
        };
    });

})();