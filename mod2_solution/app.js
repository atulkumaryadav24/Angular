(function (){
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyControler)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    ToBuyControler.$inject=['ShoppingListCheckOffService'];
    function ToBuyControler(ShoppingListCheckOffService){

    }
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){

    }
    ShoppingListCheckOffService.$inject=['ShoppingListCheckOffService'];
    function ShoppingListCheckOffService(ShoppingListCheckOffService){

    }
})();