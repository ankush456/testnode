module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  var util = require('util');
  var dataEmp = require('../empData').array;
  var _ = require('underscore');
  //router.get('/', server.loopback.status());
  server.use(router);

    router.get('/customer/list', 
	   	function(req,res){
	      var obj = {};      
	      obj.data = dataEmp;
	      res.send(obj);
	             
	   });

    router.post('/customer/add',
        function(req, res){
        	//console.log("111111" + util.inspect(req.body));
        	var empObj = req.body;
             dataEmp.push(empObj); 
             res.send("Cutomer created Successfully");
             console.log(dataEmp);           

    });

   router.delete('/customer/delete/:id',
        function(req, res){
          var id = req.params.id;	
          dataEmp = _.reject(dataEmp, function(objArr){ return objArr.Id == id; });          
          res.send("Cutomer deleted Successfully");
          console.log(dataEmp);
            
    });

   router.put('/customer/update/:id',
        function(req, res){
        	var updateEmpObj = req.body;
        	var updateEmpId = req.params.id;
         if(updateEmpId && updateEmpObj){
	     if (dataEmp.filter(function(e) { return e.Id == updateEmpId; }).length > 0) {
		  for(var i=0;i<dataEmp.length;i++){
		     if(dataEmp[i].Id == updateEmpId){
		        dataEmp[i].FirstName = updateEmpObj.FirstName;
		        dataEmp[i].LastName = updateEmpObj.LastName;
		        dataEmp[i].Email = updateEmpObj.Email;
		        dataEmp[i].DOB = updateEmpObj.DOB;
		        dataEmp[i].Age = updateEmpObj.Age;
		        dataEmp[i].Address = updateEmpObj.Address;
		        dataEmp[i].PhoneNo = updateEmpObj.PhoneNo;
		     }             
		  }
		  res.send("Successfully Updated!!!");
	     } else {
		  res.send("No Specifed User Found");
	     }   
        console.log(dataEmp);
      } 
    });

};
