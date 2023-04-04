(function () {
 'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope']; 
    function LunchCheckController ($scope){
        $scope.lunchItems = "";
        $scope.lunchButtonColor = "primary";
        $scope.lunchMsg = "";
        $scope.lunchColor = "";
        $scope.lunchBorderColor = "";

        $scope.lunchCheck = function (){
            //$scope.lunchMsg = "We are coming up";
            $scope.lunchMsg = setMessage($scope.lunchItems);
        };

        function setMessage(lunchItems) {
            if(lunchItems.length==0){
                $scope.lunchColor = "text-warning";
                $scope.lunchButtonColor = "warning";
                $scope.lunchBorderColor = "border-warning";
                return "Please enter data first"
            }
           else {
            var arr = lunchItems.split(",");
            if(arr.length>3){
                $scope.lunchColor = "text-danger";
                $scope.lunchButtonColor = "danger";
                $scope.lunchBorderColor = "border-danger";
                return "Too much!"
            }
            else{
                $scope.lunchColor = "text-success";
                $scope.lunchButtonColor = "success";
                $scope.lunchBorderColor = "border-success";
                return "Enjoy!"
            }

           }
        }
    }

})();