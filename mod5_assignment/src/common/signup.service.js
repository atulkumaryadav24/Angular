(function (){
    'use strict';
    angular.module('common')
    .service('SignUpService',SignUpService);

    SignUpService.$inject['$http','ApiPath'];
    function SignUpService($https,ApiPath) {
        var service = this;
        service.isShortName = function (favoriteDishNumber){
        return $https(ApiPath+"/menu_items/"+favoriteDishNumber+".json")
        .then(function (result){
            if(result.data!=undefined){
                return true;
            }
        },function (error){
            console.log(error);});
        };
    }
})();