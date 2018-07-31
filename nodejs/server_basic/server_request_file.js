var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request,response){
    var parsedUrl = url.parse(request.url);
    var resourse = parsedUrl.pathname;

    if(resourse == '/Cat'){
        fs.readFile('./Cat.html','utf-8',function(errer,data){
            if(errer){
                response.writeHead(500,{'Content-Type':'text/html'});
                response.end('500 Internal Server Errer' + errer);
            }else{
                response.writeHead(200,{'Content-Type':'text/html'});
                response.end(data);
            }
        });
    }else{
        response.writeHead(404,{'Content-Type':'text/html'});
        response.end('404 THERE IS NO CAT!!!!!!!')
    }
});

server.listen(80,function(){console.log('Server Running!');});