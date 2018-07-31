var result = 0;

console.time('duration_sum');

for(var i = 0; i<=100000; i++){
    result += i;
}

console.timeEnd('duration_sum');

console.log('1 to 1000 sum : %d',result);

console.log('file name : %s',__filename);
console.log('file path : %s',__dirname);

var Person = {name:'celestia', age:20};
console.dir(Person);