(function (){
    'use strict';
    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject['SignUpService'];
    function SignUpController(SignUpService){
        ctrl = this;
        ctrl.validDishNumber = false;
        ctrl.checkDishNumber = function (){
            ctrl.validDishNumber = SignUpService.isShortName(ctrl.favoriteDishNumber).then(function (result){
                return result;
            });
        };  
    }
})();