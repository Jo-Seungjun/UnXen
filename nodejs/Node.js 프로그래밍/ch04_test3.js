process.on('tick',()=>{
    console.log('tick event emited');
});

setTimeout(()=>{
    console.log('after 2 second tick event tried');

    process.emit('tick','2');
},2000);