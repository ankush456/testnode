(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('createCustomerDialogController', createCustomerDialogController);


  /** @ngInject */
  function createCustomerDialogController($scope, $mdDialog,createConfirm) {

    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

     $scope.confirm = function(){
      createConfirm();
      $scope.close();
    };
  }
})();
