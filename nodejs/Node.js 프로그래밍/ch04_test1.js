var url = require('url');

var curURL = url.parse('http://n.search.naver.com/search.naver?query=steven+jobs&where=m&m=mtp_hty');

var curStr = url.format(curURL);

console.log('address string : %s',curStr);
console.dir(curURL);

var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('call parameter query value : %s',param.query);
console.log('original parameter : %s',querystring.stringify(param));