
var http = require('http'),
    port = 8080,
    url = 'http://localhost:' + port + '/';


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, First app');
  res.end();
}).listen(port);



console.log('The http server has started at: ' + url);