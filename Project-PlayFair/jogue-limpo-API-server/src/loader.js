const server = require('./config/server')
require('./config/dbconfig');
require('./config/routes')(server);