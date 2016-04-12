(function() {
  'use strict';

  angular
    .module('uiTest')

  /** @ngInject */
  .config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '400'
      })
      .accentPalette('teal', {
        'default': '500'
      });


    $mdThemingProvider.theme('success');
    $mdThemingProvider.theme('failure');
    $mdThemingProvider.theme('warn');
    $mdThemingProvider.theme('info');


  }]);

})();
