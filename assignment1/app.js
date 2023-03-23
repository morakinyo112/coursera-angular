(function (){
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController ($scope){
        $scope.name = "Mortech";
        $scope.stateOfBeing = "short";

        $scope.sayMessage = function (){
            return "Mortech likes coding";
        }

        $scope.feedMortech = function (){
            $scope.stateOfBeing = "full";
        }
    
    }
    
    })();