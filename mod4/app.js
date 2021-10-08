(function (){
    angular.module('ModApp',['ui.router'])
    .config(Routes);
    Routes.$inject['$stateProvider','$urlRouterProvider'];
    function Routes($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home',{
            url: '/',
            templateUrl: "temp.html"
        })
        .state('next',{
            url:'/next',
            template: "<a ui-sref='home'>Home</a>"
        });
    }
})();