(function (){
    'use strict';
    angular.module('MenuApp')
    .component('categories',{
        templateUrl:'src/MenuApp/templates/categories-component.template.html',
        bindings:{
            cateData : '<'
        }
    });
})();