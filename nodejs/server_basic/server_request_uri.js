var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
    console.log(request.url);
    var parsedUrl = url.parse(request.url);

    var resourse = parsedUrl.pathname;
    console.log('resourse path : ' + resourse);

    switch(resourse)
    {
        case '/cat':
        response.writeHead(200,{'Content':'text/html'});
        response.end('i love cat so much!!!');
        break;

        default :
        response.writeHead(404,{'Content':'text/html'});
        response.end('404 not found');
        break;
    }
});

server.listen(80,function(){console.log('server running!!');});