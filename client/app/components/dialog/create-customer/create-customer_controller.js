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
     $scope.confirm = function(){
       var formData=$scope.formData;
       $scope.formData.created_at=new Date();
       $scope.formData.updated_at=new Date();
       myService.addCustomer(formData)
         .then(function() {
           appPopupFactory.showSimpleToast('Customer created Successfully.');
           $state.go($state.current, {}, {reload: true});

           $scope.close();
         });

    };
  }
})();
