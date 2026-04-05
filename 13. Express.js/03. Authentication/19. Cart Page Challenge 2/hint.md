Get the id of the item.

Check that it is a number and end the response with this JSON if it is not 
  { error: 'Invalid item ID' }

Check if the item exists in the DB for that user. You can do that by finding its quantity.

If it does not, end the response with this JSON  
  { error: 'Invalid item ID' }

If it does, delete it.

End the response with a suitable code and do not use the json() method! We don't need to send anything!
