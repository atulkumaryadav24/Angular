(function(){
    'use strict';
    angular.module('AngularApp',[])
    .controller('AngularController',Fun);
    Fun.$injector=['$scope','$filter']
    function Fun($scope, $filter) {
        $scope.name = "";
        // $scope.num = 0;
        // $scope.disval = function (){
        //     var sum= CharCount($scope.name);
        //     $scope.num=sum;
        $scope.caps = function () {
            var cap = $filter('uppercase');
            $scope.name = cap($scope.name);
        };
    }
        // function CharCount(string){
        //     var count=0;
        //     for(var i=0;i<string.length;i++){
        //         count+=string.charCodeAt(i);
        //     }
        //     return count;
        // }
    })();