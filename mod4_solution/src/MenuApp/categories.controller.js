(function (){
    'use strict';
    angular.module('MenuApp')
    .controller('CategoriesController',CategoriesController);
    CategoriesController.$inject['categoryData'];
    function CategoriesController(categoryData){
        var category = this;
        category.categoryData = categoryData;
    }
})();