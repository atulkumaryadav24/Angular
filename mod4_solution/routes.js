(function (){
    'use strict';
    angular.module("MenuApp")
    .config(RoutesConfig);

    RoutesConfig.$inject['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url: '/',
            templateUrl:'src/MenuApp/templates/home.template.html'
        })
        .state('categories',{
            url: '/categories',
            templateUrl:'src/MenuApp/templates/categories.template.html',
            controller : 'CategoriesController as catCtrl',
            resolve : {
                categoryData:['MenuDataService', function (MenuDataService){
                                return MenuDataService.getAllCategories();
                            }]
            }
        })
        state('categories.items',{
            url: '/categories/{shortName}',
            templateUrl:'src/MenuApp/templates/items.template.html',
            controller : 'ItemsController as itemCtrl',
            resolve : {
                itemsData : ['MenuDataService','$stateParams', function (MenuDataService,$stateParams){
                                return MenuDataService.getItemsForCategory($stateParams.shortName);
                            }]
            }
        });
    }
})();