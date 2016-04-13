(function(){
  'use strict'

  angular
    .module('uiTest')
    .service('myService', function($http) {
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

        addCustomer:function (customer) {
           return $http.post(BASE_URL+ '/customer/add',customer)
            .then(function(results) {
               return results;
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

       updateCustomer:function(id,customer){
          return $http.put(BASE_URL+'/customer/update/'+id,{customer:customer}).then(function (status) {
           return status.data;
         });
        }


      }

    });
})();
