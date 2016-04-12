(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('updateCustomerDialogController', updateCustomerDialogController);


  /** @ngInject */
  function updateCustomerDialogController($scope, $mdDialog,customer,$http,appPopupFactory) {

    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.customer=customer;
        $scope.customer.updated_at=new Date();
    $scope.confirm = function(){
     var param=$scope.customer.id;
      $scope.customer=customer;
      $http({
        method  : 'put',
        url     : 'http://localhost:3000//customer/update/'+param,
        //url     : 'http://10.0.1.64:3100/api/goals',
        data    : $scope.customer,  // pass in data as strings
        headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
      })
        .success(function() {
          appPopupFactory.showSimpleToast('Customer Updated Successfully.');
        })
        .error(function(data, status){
          console.log(data);
          console.log(status);
        });

      $scope.close();
    };

  }
})();
