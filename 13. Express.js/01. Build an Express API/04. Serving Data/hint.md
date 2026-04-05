Our app instance gives us access to a method which handles GET requests.

It needs to be passed two pieces of info:
  - The route as a string
  - a callback function that takes two params, the request and the response.

The response gives us access to a method that sends JSON.
  
It needs to be passed the data we want to serve.
