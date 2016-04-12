(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('updateCustomerDialogController', updateCustomerDialogController);


  /** @ngInject */
  function updateCustomerDialogController($scope, $mdDialog,customer,myService,appPopupFactory) {

    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.customer=customer;
    $scope.customer.updated_at=new Date();
    var customer=$scope.customer;
    var id=$scope.customer.id;
    $scope.confirm = function(){
      var id=$scope.customer.id;
      var customer=$scope.customer;
      $scope.customer.updated_at=new Date();
      myService.updateCustomer(id,customer)
        .then(function() {
        appPopupFactory.showSimpleToast('Customer Updated Successfully.');
          $scope.close();
      });

    };

  }
})();
