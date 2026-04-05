Create a const to store the server.
It should hold a new instance of the http module’s createServer method.

That method takes in a callback function with two params: 
  The request object
  The response object

The response object exposes the end() method. Call it and pass in a string.

Our instance of createServer has access to a listen() method. 
Call it passing in two arguments:
  The port
  A callback function which can log "server connected on port 8000"
