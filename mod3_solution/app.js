(function(){
'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.controller('FoundItemDirectiveController',FoundItemDirectiveController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',foundItemDirective);
NarrowItDownController.$inject['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
    var narrow = this;
    narrow.searchTerm="";
    narrow.found=[];
    narrow.search = function (){
        MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(function (result) {
        narrow.found = result;
        });
    };
    narrow.onRemove = MenuSearchService.onRemove;
}
function foundItemDirective(){
    var ddo={
    scope:{
    found: '<',
    onRemove: '&'
    },
    controller:'FoundItemDirectiveController as narrowdir',
    bindToController : true,
    templateUrl:'restaurant.html'
};
return ddo;
}
function FoundItemDirectiveController(){
    var narrowdir = this;
    narrowdir.ifEmpty=function (){
        return narrowdir.found.lenght==0;
    };
}
MenuSearchService.$inject['$http']
function MenuSearchService($http){
    var service = this;
    service.getMatchedMenuItems=function (searchTerm){
        return $http({
            method:'GET',
            url:"https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(
            function success(result){
                var resultItems=result.data.menu_items;
                var found = [];
                for(var i=0;i<resultItems.length;i++){
                    if(searchTerm!=''&resultItems[i].description.indexOf(searchTerm!=-1)){
                        found.append({
                            name:resultItems[i].name,
                            description:resultItems[i].description
                        });
                    }
                }
                return found;
            }, function error(error) {

      });
    };
    service.onRemove = function (itemIndex) {
    item.splice(itemIndex, 1);
};
}
})();