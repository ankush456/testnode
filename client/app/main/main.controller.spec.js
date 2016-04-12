(function() {
  'use strict';

  describe('controllers', function(){
    
     beforeEach(module('uiTest'));
   it('should demonstrate using expect (200 status)', inject(function($http,$httpBackend) {
  
  var $scope = {};

  /* Code Under Test */
  $http.get('http://localhost:3000/api/customers')
    .success(function(data, status, headers, config) {
      $scope.valid = true;
      $scope.response = data;
    }).error(function(data, status, headers, config) {
      $scope.valid = false;
  });
  /* End */

  $httpBackend
    .expect('GET', 'http://localhost:3000/api/customers')
    .respond(200, { foo: 'bar' });

  expect($httpBackend.flush).not.toThrow();

  // NB we could still test the scope object properties as we did before...
  // expect($scope.valid).toBe(true);
  // expect($scope.response).toEqual({ foo: 'bar' });

}));

  });
})();
