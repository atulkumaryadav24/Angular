(function (){
    'use strict';
    angular.module('MenuApp')
    .controller('ItemsController',ItemsController);
    ItemsController.$inject['itemsData']
    function ItemsController(itemsData){
        var items = this;
        items.itemsData = itemsData;
    }
})();