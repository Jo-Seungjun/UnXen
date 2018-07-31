// 서버르 사용하기 위해 http 변수에 http 모듈을 넣는다
var http = require('http');

//http 모듈로 서버를 생성한다.
//이렇게 하면 서버를 생성한 후, 사용하로 부터 http 요청이 들어오면 function블럭 내부의 코드를 실행해서 응답한다
var server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Hello! node.js!!');
});

//listen 함수로 8080 포트를 가진 서버를 실행한다. 서버가 실행된것을 톤솔창을 통해 확인한다.
server.listen(8080,function(){console.log("Server running!!");});