var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Welcome to node backend e2e MERN App!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(2000); //the server object listens on port 8 2000
