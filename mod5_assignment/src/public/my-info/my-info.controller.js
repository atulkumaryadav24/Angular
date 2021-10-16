(function (){
    'use strict';
    angular.module('public')
    .controller('MyInfoController',MyInfoController);

    MyInfoController.$inject['RegisterService'];
    function MyInfoController(RegisterService){
        ctrl = this;
        ctrl.details = RegisterService.details;
        if(ctrl.details)
            ctrl.profile = RegisterService.getProfile();
    }
})();