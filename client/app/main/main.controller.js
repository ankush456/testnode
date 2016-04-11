(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(myService,$scope,dialogFactory,appPopupFactory,$http) {
    var vm = this;
     $scope.newCustomer={};

    this.getCustomer=function(){
    	myService.getCustomers().then(function(data) {
             vm.customers=data;
             $scope.email=data.email;
             $scope.first_name=data.first_name;
             $scope.last_name=data.last_name;
             $scope.ip=data.ip;
             $scope.latitude=data.latitude;
             $scope.longitude=data.longitude;
    	});
    }

    this.getCustomer();


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


     vm.updateCustomerFn = function() {
      myService.updateCustomer( $scope.targetCustomer )
        .then(function() {
          vm.customers.splice($scope.currIndex, 1);
          delete $scope.targetGoal;
          appPopupFactory.showSimpleToast('Customer Deleted Successfully.');
        });
    };
    vm.updateCustomer = function(ev, index, customer) {
      $scope.targetCustomer = customer;
      $scope.currIndex = index;
      dialogFactory.showUpdateCustomerDialog({
        targetEvent: ev,
        locals: {
          deleteConfirm: vm.updateCustomerFn,
          customer:customer
        }
      });
    };


   vm.createCustomerFn = function() {
   	$scope.newCustomer.email=$scope.email;
    $scope.newCustomer.first_name=$scope.first_name;
     $scope.newCustomer.last_name=$scope.last_name;
      $scope.newCustomer.ip=$scope.ip;
      $scope.newCustomer.latitude=$scope.latitude;
       $scope.newCustomer.longitude=$scope.longitude;
   	 $http({
        method  : 'POST',
        url     : 'http://localhost:3000/api/customers',
        data    : $scope.newCustomer,  // pass in data as strings
        headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
      })
        .success(function(data) {
          appPopupFactory.showSimpleToast('Customer Created Successfully.');
          console.log("OK");
        })
        .error(function(data, status, headers, config){
        console.log(data);
        console.log(status);
      });
    };
    vm.createCustomer = function(ev) {
      dialogFactory.showCreateCustomerDialog({
        targetEvent: ev,
        locals: {
          createConfirm: vm.createCustomerFn,
        }
      });
    };
  

  }

})();
