process.on('exit', function(){
    console.log('exit event emitted');
});

setTimeout(function(){
    console.log('after 2 second system exit try');

    process.exit();
},2000);