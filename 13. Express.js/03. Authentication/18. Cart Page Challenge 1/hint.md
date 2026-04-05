Your SQL querey needs to do this:

    Look in the cart_items table for all rows that belong to the logged-in user (user_id = ?).

    For each of those cart items:
        Join with the products table using the product_id to get details about the product.
    
    Return a list of items including:
        The cart item’s ID (cartItemId)
        The quantity of that product in the cart
        The product's title, artist, and price

Take the result of that SQL query (which will be ab array) and send it to the frontend
    res.json({ items: items })