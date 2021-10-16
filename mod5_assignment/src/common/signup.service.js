(function (){
    'use strict';
    angular.module('common')
    .service('SignUpService',SignUpService);

    SignUpService.$inject = ['$http','ApiPath','$q'];
    function SignUpService($https,ApiPath,$q) {
        var service = this;
        service.isShortName = function (favoriteDishNumber){
        var defer = $q.defer();
        return $https.get(ApiPath+"/menu_items/"+favoriteDishNumber+".json")
        .then(function (result){
            defer.resolve(result);
        })
        .catch(function (error){
            defer.resolve(error);
        });
        };
    }
})();