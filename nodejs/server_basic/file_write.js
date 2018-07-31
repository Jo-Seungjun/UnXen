var fs = require('fs');

var data = 'i love cat so much!!!!!\r\ncat is my energy sourse!!';

fs.writeFile('file01_Async.txt',data,'utf-8',function(e){
    if(e)
        console.log(e);
    else
        console.log('01 WRITE DONE!');
});

try {
    fs.writeFileSync('file02_Sync.txt',data,'utf-8');
    console.log('02 WRITE DONE!');
} catch (e) {
    console.log(e);
}