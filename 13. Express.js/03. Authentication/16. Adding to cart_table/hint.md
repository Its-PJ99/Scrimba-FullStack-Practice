Walk Through:

    Get the product ID and make sure it’s a number.
        The product ID can be found on the incoming body, as this is a POST. So req.body.productId
        We can use parseInt() to convert a string to a number.
    Get the id of the logged in user.
        That is available to us on req.session.userId.
    Check if they have any of that product already in their cart.
        Select everything from the cart_items table where the user_id and product_id match what you are looking for. Save the result to a const so you can check if it's truthy or falsy.
    If they do, add 1 to that product count.
        You can update cart_items and set the quantity to quantity+1 where the id matches the id of the existing record you found in the step above. 
    If they don’t, insert it as a new record.
    End the response with JSON { message: 'Added to cart' }.


The SQL we used to create the cart_items table:

    CREATE TABLE cart_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            product_id INTEGER NOT NULL,
            quantity INTEGER NOT NULL DEFAULT 1,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (product_id) REFERENCES products(id)
    );
