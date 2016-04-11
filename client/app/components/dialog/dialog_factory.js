(function() {
'use strict';
angular.module('uiTest')
.factory('dialogFactory', function ($mdDialog) {


	var defaultOptions = {
		parent: angular.element(document.body),
		clickOutsideToClose: false
	};

	/**
	 * Display any custom dialog
	 * @param  {object} options that can be passed to $mdDialog.show function
	 * can be found at https://material.angularjs.org/0.11.4/api/service/$mdDialog
	 */

  function showDialog(options) {
    // Close existing navs and menus


    angular.extend(defaultOptions, options);
    $mdDialog.show(defaultOptions);
  }

	function showDeleteDialog(options) {
		options.templateUrl = 'app/components/dialog/delete-dialog/delete-dialog.html';
		options.controller = 'deleteDialogController';
		showDialog(options);
	}

  function showUpdateCustomerDialog(options){
    options.templateUrl = 'app/components/dialog/update-customer/update-customer.html';
    options.controller = 'updateCustomerDialogController';
    showDialog(options);
  }
  function showCreateCustomerDialog(options){
    options.templateUrl = 'app/components/dialog/create-customer/create-customer.html ';
    options.controller = 'createCustomerDialogController';
    showDialog(options);
  }
 


	function closeDialog() {
		$mdDialog.hide();
	}



	return {
		closeDialog: closeDialog,
		showDeleteDialog: showDeleteDialog,
    showUpdateCustomerDialog:showUpdateCustomerDialog,
    showCreateCustomerDialog:showCreateCustomerDialog
	};
});
})();
