(function (){
    'use strict';
    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject['SignUpService','RegisterService'];
    function SignUpController(SignUpService,RegisterService){
        ctrl = this;
        ctrl.validDishNumber = false;
        ctrl.checkDishNumber = function (){
            ctrl.validDishNumber = SignUpService.isShortName(ctrl.favoriteDishNumber).then(function (result){
                return result;
            });
        };
        ctrl.createProfile = function (){
            RegisterService.setProfile({
                firstName : ctrl.firstName,
                lastName : ctrl.lastName,
                email : ctrl.email,
                phone : ctrl.phone,
                favoriteDishNumber : ctrl.favoriteDishNumber
            });
        }  
    }
})();