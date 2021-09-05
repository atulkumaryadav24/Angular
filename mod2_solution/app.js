(function (){
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyControler)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    ToBuyControler.$inject=['ShoppingListCheckOffService'];
    function ToBuyControler(ShoppingListCheckOffService){
        var buy=this;
        buy.list=ShoppingListCheckOffService.getList();
        buy.addToBought=function (index){
            ShoppingListCheckOffService.addToBought(index);
        };
    }
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var bought=this;
        bought.list=ShoppingListCheckOffService.getBought();
    }
    function ShoppingListCheckOffService(){
        var service=this;
        service.getList = function (){
            return service.shoppingList;
        };
        service.getBought = function (){
            return service.boughtList;
        };
        service.shoppingList = [
            {
                name : "Cookies",
                quantity : "10"
            },
            {
                name : "Pepto Bismol",
                quantity : "05"
            },
            {
                name : "Chips",
                quantity : "07"
            },
            {
                name : "Sugary Drinks",
                quantity : "02"
            },
            {
                name : "Chocolates",
                quantity : "09"
            }
        ]
        service.boughtList = []
        service.addToBought=function (index){
            var item = service.shoppingList[index]
            service.shoppingList.splice(index,1);
            service.boughtList.push(item);
        };
    }
})();