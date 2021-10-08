(function (){
    angular.module('ModApp',['ui.router'])
    .config(Routes);
    Routes.$inject['$stateProvider','$urlRouterProvider'];
    function Routes(){
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home',{
            url: '/',
            template: "<a ui-sref='next'>NEXT</a>"
        })
        .state('next',{
            url:'/next',
            template: "YOU ARE HERE!!!"
        });
    }
})();