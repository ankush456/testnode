(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('updateCustomerDialogController', updateCustomerDialogController);


  /** @ngInject */
  function updateCustomerDialogController($scope, $mdDialog,customer) {
         var vm=this;
    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    
    $scope.customer=customer;

  }
})();
