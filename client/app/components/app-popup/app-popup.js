(function() {
  'use strict';

  angular.module('appPopup', [])
    .factory('appPopupFactory', ['$mdToast',
      function($mdToast) {
        var toastDelayTime = 3000,
          toastDirection = 'top left';

        var appPopupFactory = {};

        // showSimpleToast function's 'status' param can accept
        // 1. success (can be null by default for success),
        // 2. failure,
        // 3. warn,
        // 4. info

        appPopupFactory.showSimpleToast = function(messageToDisplay, status) {
          status = status || 'success';
          var toast = $mdToast.simple()
            .content(messageToDisplay)
            .action('X')
            .highlightAction(false)
            .position(toastDirection)
            .hideDelay(toastDelayTime)
            .theme(status);

          $mdToast.show(toast).then(function(response) {
            if ( response == 'ok' ) {
                $mdToast.hide();
              }
          });
        };

        return appPopupFactory;
      }
    ]);
})();
