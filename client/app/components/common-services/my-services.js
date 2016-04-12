(function(){
  'use strict'

  angular
    .module('uiTest')
    .service('myService', function($http) {
   // var BASE_URL="http://10.0.1.226:3100";
    var BASE_URL="http://localhost:3000";
      return {
        getCustomers: function() {
          //since $http.get returns a promise,
          //and promise.then() also returns a promise
          //that resolves to whatever value is returned in it's
          //callback argument, we can return that.
          return $http.get(BASE_URL+ '/customer/list')
            .then(function(result) {
            return result.data;
          });
        },

        addCustomer:function (data) {
           return $http.post(BASE_URL+ '/api/customers')
            .then(function(result) {
          });
        },

        deleteCustomer:function(id){
          var param = [];
          if(Array.isArray(id)) {
            param = id;
          } else {
            param.push(id);
          }
          return $http.delete(BASE_URL+'/customer/delete/'+param)
            .then (function(result){

            })
        },

       updateCustomer:function(id,data){
          var param=id;
          return $http.put(BASE_URL+'/api/goals/'+param)
            .then(function(result) {

            });
        }


      }

    });
})();
