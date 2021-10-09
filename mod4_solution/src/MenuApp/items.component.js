(function (){
    'use strict';
    angular.module('MenuApp')
    .component('items',{
        templateUrl:'src/MenuApp/templates/items-component.template.html',
        bindings:{
            itData : '<'
        }
    });
})();