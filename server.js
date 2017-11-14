//server.js

var http = require ("http");

let listing = require ("./toDoList");
let randomItem = listing.toDoList[Math.floor((Math.random() * listing.toDoList.length) + 1)];

// get a random item from toDoList

http.createServer(function(request, response) {
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(randomItem);
  response.end();
}).listen(3000);
 