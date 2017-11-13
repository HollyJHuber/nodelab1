//server.js

var http = require ("http");

var toDoList = require ("./toDoList");

http.createServer(function(request, response) {
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(toDoList);
  response.end();
}).listen(8888);
 