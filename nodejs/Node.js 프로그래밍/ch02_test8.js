var path = require('path');

var directories = ["alicorn","twilight","docs"];
var docsDirectory = directories.join(path.sep);
console.log('doc directory : %s',docsDirectory);

var curPath = path.join('dirdir','dirdirdir.exe');
console.log('file path : %s',curPath);

var filename = process.argv0;
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('directory : %s \nfile name : %s \nextname : %s',dirname,basename,extname);