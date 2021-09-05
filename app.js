(function(){
    'use strict';
    angular.module('AngularApp',[])
    .controller('AngularController',Fun)
    .filter('replace', ReplaceFilterFactory);
    Fun.$injector=['$scope','$filter','replaceFilter']
    function Fun($scope, $filter,replaceFilter) {
        $scope.name = "";
        $scope.filName="";
        // $scope.num = 0;
        // $scope.disval = function (){
        //     var sum= CharCount($scope.name);
        //     $scope.num=sum;
        $scope.caps = function () {
            var cap = $filter('uppercase');
            $scope.name = cap($scope.name);
        };
        $scope.filtertest=function (){
            var input = "This is a sample text so be gentle with it";
            $scope.filName = replaceFilter(input,"sample","ample");
        };
    }
    function ReplaceFilterFactory(){
        return function (input,repit,repwith){
            input = input || "";
            input = input.replace(repit,repwith);
            return input;
        }
    }
        // function CharCount(string){
        //     var count=0;
        //     for(var i=0;i<string.length;i++){
        //         count+=string.charCodeAt(i);
        //     }
        //     return count;
        // }
    })();