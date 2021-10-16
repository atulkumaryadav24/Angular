(function (){
    'use strict';
    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject = ['SignUpService','RegisterService'];
    function SignUpController(SignUpService,RegisterService){
        var ctrl = this;
        ctrl.profileSaved = false;
        ctrl.validDishNumber = false;
        ctrl.checkDishNumber = function (){
            ctrl.validDishNumber = SignUpService.isShortName(ctrl.favoriteDishNumber);
        };
        ctrl.createProfile = function (){
            RegisterService.setProfile({
                firstName : ctrl.firstName,
                lastName : ctrl.lastName,
                email : ctrl.email,
                phone : ctrl.phone,
                favoriteDishNumber : ctrl.favoriteDishNumber
            });
            ctrl.profileSaved = true;
        }  
    }
})();