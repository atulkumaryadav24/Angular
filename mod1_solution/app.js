(function (){
    'use strict';
    angular.module('AppModule',[])
    .controller('AppController',ContFun);
    ContFun.$injector=['$scope'];
    function ContFun($scope){
        $scope.items = "";
        $scope.message="";
        $scope.checkTooMuch = function (){
            var SepElem = $scope.items.split(",");
            //For excluding empty elements
            var FilElem = SepElem.filter(Boolean);
            if($scope.items=="")
                $scope.message = "Please enter data first"
            else if (FilElem.length<=3)
                $scope.message = "Enjoy!"
            else
                $scope.message = "Too Much!"
        };
    }
})();