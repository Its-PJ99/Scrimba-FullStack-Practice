import { getDBConnection } from '../db/db.js'

export async function addToCart(req, res) {
 const db = await getDBConnection()

/*
Challenge:

1. Write code to ensure that when a logged-in user clicks 'Add to Cart', the product is either added to their cart or its quantity increased if it’s already there, storing the data in the cart_items table. If successful, send the frontend this JSON: { message: 'Added to cart' }.

Ignore frontend console errors for now!

For testing, log in with:
Username: test
Password: test

Use logTable.js to verify success!

Loads of help in hint.md
*/

}
