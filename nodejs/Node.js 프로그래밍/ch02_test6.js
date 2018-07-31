var nconf = require('nconf');
nconf.env();

console.log('OS environment valuable : '+ nconf.get('OS'));