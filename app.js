var express = require('express'),
	pg = require('pg'), // PostgreSQL client for node.js
	app = express();

require('./config')(app, express);
require('./globals')();
require('./routes')(app);

require('http').createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});