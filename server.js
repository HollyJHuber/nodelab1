//server.js

var http = require ("http");

let listing = require ("./toDoList");

// get a random item from toDoList
let item = listing.toDoList[Math.floor((Math.random() * listing.toDoList.length) + 1)];

//console.log(item);

http.createServer(function(request, response) {
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(item);
  response.end();
}).listen(3000);
 