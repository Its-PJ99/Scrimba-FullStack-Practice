If the user selects a genre, save that query string to a const (best to use destructuring!).

We can access the query on the req object.

Check if the const holding the query string is a truthy value. If it is: 
  - Complete the existing SQL query using a ? placeholder.
  - Push the genre to a params array.

Pass both query and params to the all() method.
