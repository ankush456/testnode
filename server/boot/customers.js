module.exports = function(app) {
  app.dataSources.postgresqlDB.automigrate('customers', function(err) {
    if (err) throw err; 
  });
};