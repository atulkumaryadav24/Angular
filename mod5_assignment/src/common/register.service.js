(function (){
    'use strict';
    angular.module('common')
    .service('RegisterService',RegisterService);

    function RegisterService(){
        var service = this;
        service.profile={};
        service.details = false;
        service.setProfile=function (profile){
            service.profile = profile;
            service.details = true;
        };
        service.getProfile=function (){
            return service.profile;
        };

    }
})();