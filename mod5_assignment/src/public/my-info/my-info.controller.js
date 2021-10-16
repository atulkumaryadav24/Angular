(function (){
    'use strict';
    angular.module('public')
    .controller('MyInfoController',MyInfoController);

    MyInfoController.$inject = ['RegisterService','ApiPath'];
    function MyInfoController(RegisterService,ApiPath){
        var ctrl = this;
        ctrl.basePath = ApiPath;
        ctrl.details = RegisterService.details;
        if(ctrl.details)
            ctrl.profile = RegisterService.getProfile();
    }
})();