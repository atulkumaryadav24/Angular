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
            SignUpService.isShortName(ctrl.favoriteDishNumber)
                                    .then(function (response){
                                        ctrl.response = response.data;
                                        if(response.status === 200){
                                            ctrl.validDishNumber = true;
                                        }
                                        else{
                                            ctrl.validDishNumber = false;
                                        }
                                        // console.log("response : ",response);
                                    });
        };
        ctrl.createProfile = function (){
            RegisterService.setProfile({
                firstName : ctrl.firstName,
                lastName : ctrl.lastName,
                email : ctrl.email,
                phone : ctrl.phone,
                favoriteDishNumber : ctrl.favoriteDishNumber,
                dishName : ctrl.response.name
            });
            ctrl.profileSaved = true;
        }
    }
})();