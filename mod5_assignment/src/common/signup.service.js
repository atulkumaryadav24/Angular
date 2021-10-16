(function (){
    'use strict';
    angular.module('common')
    .service('SignUpService',SignUpService);

    SignUpService.$inject = ['$http','ApiPath'];
    function SignUpService($https,ApiPath) {
        var service = this;
        service.isShortName = function (favoriteDishNumber){
        return $https.get(ApiPath+"/menu_items/"+favoriteDishNumber+".json")
        .then(function (result){
            return result;
        },function (error){
            return error;
        });
        };
    }
})();