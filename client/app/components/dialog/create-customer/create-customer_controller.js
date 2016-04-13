(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('createCustomerDialogController', createCustomerDialogController);


  /** @ngInject */
  function createCustomerDialogController($scope, $mdDialog,myService,$state,appPopupFactory) {

    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
     $scope.formData={};
     $scope.formData.email=$scope.email;


     $scope.confirm = function(formData){
       var formData=$scope.formData;
       $scope.formData.email=$scope.email;
       $scope.formData.first_name=$scope.first_name;
       $scope.formData.last_name=$scope.last_name;
       $scope.formData.ip=$scope.ip;
       $scope.formData.latitude=$scope.latitude;
       $scope.formData.longitude=$scope.longitude;

       $scope.formData.created_at=new Date();
       $scope.formData.updated_at=new Date();
        if($scope.email==undefined){
      appPopupFactory.showSimpleToast('Please enter email');
        }
        if($scope.first_name==undefined){
      appPopupFactory.showSimpleToast('Please enter first name');
        }
        if($scope.last_name==undefined){
      appPopupFactory.showSimpleToast('Please enter last name');
        }
        if($scope.ip==undefined){
      appPopupFactory.showSimpleToast('Please enter ip');
        }
        if($scope.latitude==undefined){
      appPopupFactory.showSimpleToast('Please enter latitude');
        }
        if($scope.longitude==undefined){
      appPopupFactory.showSimpleToast('Please enter longitude');
        }
       else{
          myService.addCustomer(formData)
         .then(function() {
          
           appPopupFactory.showSimpleToast('Customer created Successfully.');

           $state.go($state.current, {}, {reload: true});

           $scope.close();
         });
         
      }

    };
  }
})();
