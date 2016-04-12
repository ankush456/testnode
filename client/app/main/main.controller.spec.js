(function() {
  'use strict';

  describe('controllers', function(){

     beforeEach(module('uiTest'));
   it('should demonstrate using expect (200 status)', inject(function($http,$httpBackend) {

  var $scope = {};

  /* Code Under Test */
  $http.get('http://localhost:3000/customers/list')
    .success(function(data) {
      $scope.valid = true;
      $scope.response = data;
    }).error(function() {
      $scope.valid = false;
  });
  /* End */

  $httpBackend
    .expect('GET', 'http://localhost:3000/customers/list')
    .respond(200, { foo: 'bar' });

  expect($httpBackend.flush).not.toThrow();

  // NB we could still test the scope object properties as we did before...
  // expect($scope.valid).toBe(true);
  // expect($scope.response).toEqual({ foo: 'bar' });

}));

  });
})();
