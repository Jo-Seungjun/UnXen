var http = require('http');
var url = require('url');
var fs = require('fs');

var mime = require('mime');

var server = http.createServer(function(request,response){
    var parsedUrl = url.parse(request.url);
    var resourse = parsedUrl.pathname;

    if(resourse.indexOf('/images/') == 0){
        var imagePath = resourse.substring(1);
        console.log('imagePath = '+imagePath);

        var imgMime = mime.lookup(imagePath);
        console.log('mime = '+imgMime);

        fs.readFile(imagePath,function(errer,data){
            if(errer){
                response.writeHead(500,{'Content-Type':'text/html'});
                response.end('errer '+errer);
            }else{
                response.writeHead(200,{'Content-Type':imgMime});
                response.end(data);
            }
        });
    }else{
        response.writeHead(404,{'Content-Type':'text/html'});
        response.end('404 page not found');
    }
});

server.listen(80,function(){console.log('server running!!');});