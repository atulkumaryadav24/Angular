(function(){
'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearch',MenuSearchService)
.directive('foundItem',foundItemDirective)
.constant('siteUrl','https://davids-restaurant.herokuapp.com/menu_items.json');
NarrowItDownController.$inject['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    narrow.searchTerm="";
    narrow.found = MenuSearchService.getMatchedMenuItems(searchTerm);
    narrow.onRemove = MenuSearchService.onRemove;
}
function foundItemDirective(){
    var ddo={
    scope:{
    foundItems: '<'
    onRemove: '&'}
    templateUrl:'restaurant.html'
};
return ddo;
}
MenuSearchService.$inject['siteUrl','$http']
function MenuSearchService(siteUrl,$http){
    var service = this;
    service.getMatchedMenuItems=function (searchTerm){
        return $http({
            method:'GET',
            url:siteUrl
        }).then(
            function (result){
                var resultItems=result.data.menu_items;
                var foundItems = [];
                for(var i=0;i<resultItems.lenght;i++){
                    if(searchTerm!=''&resultItems[i].description.indexOf(searchTerm!=-1)){
                        foundItems.append({
                            name:resultItems[i].name,
                            description:resultItems[i].description
                        });
                    }
                }
                return foundItems;
            });
    };
    service.onRemove = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
}
})();