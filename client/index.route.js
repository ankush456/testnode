(function() {
  'use strict';

  angular
    .module('uiTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

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
