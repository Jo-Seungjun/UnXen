var os = require('os');

console.log('system hostname : %s',os.hostname());
console.log('system memory : %d / %d',os.freemem,os.totalmem);
console.log('system CPU info\n');
console.dir(os.cpus());
console.log('system network interface info\n');
console.dir(os.networkInterfaces());