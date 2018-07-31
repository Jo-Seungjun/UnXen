var cal = {};
cal.add = function(a,b){
    return a+b;
}

console.log('before seperate module - call \'add\' function : %d',cal.add(10,10));