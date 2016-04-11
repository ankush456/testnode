(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('deleteDialogController', deleteDialogController);


  /** @ngInject */
  function deleteDialogController($scope, $mdDialog, deleteConfirm, title, content) {

    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.title = title;
    $scope.content = content;

    $scope.confirm = function(){
      deleteConfirm();
      $scope.close();
    };
  }
})();
