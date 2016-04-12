(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('mainController', mainController);

  /** @ngInject */
  function mainController(myService,$scope,dialogFactory,appPopupFactory) {
    var vm = this;


    vm.getCustomer=function(){
    	myService.getCustomers().then(function(data) {
             vm.customers=data.data;
             console.log(vm.customers);

    	});
    };

    vm.getCustomer();


    vm.deleteCustomerFn = function() {
      myService.deleteCustomer( $scope.targetCustomer )
        .then(function() {
          vm.customers.splice($scope.currIndex, 1);
          delete $scope.targetGoal;
          appPopupFactory.showSimpleToast('Customer Deleted Successfully.');
        });
    };
    vm.deleteCustomer = function(ev, index, customer) {
      $scope.targetCustomer = customer;
      $scope.currIndex = index;
      dialogFactory.showDeleteDialog({
        targetEvent: ev,
        locals: {
          deleteConfirm: vm.deleteCustomerFn,
          title: 'Delete Customer?',
          content: 'Are you sure you want to delete?'
        }
      });
    };

    vm.updateCustomer = function(ev, index, customer) {
      $scope.targetCustomer = customer;
      $scope.currIndex = index;
      dialogFactory.showUpdateCustomerDialog({
        targetEvent: ev,
        locals: {
          customer:customer
        }
      });
    };

    vm.createCustomer = function(ev) {

      dialogFactory.showCreateCustomerDialog({
        targetEvent: ev
      });
    };


  }

})();
