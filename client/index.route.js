(function() {
  'use strict';

  angular
    .module('uiTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'mainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
