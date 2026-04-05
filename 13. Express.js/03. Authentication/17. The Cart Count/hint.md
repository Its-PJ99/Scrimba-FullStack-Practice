In your SQL query, select the sum of a row for a specific user. 

An example without bindings might look something like this:

    SELECT SUM(grades) AS totalGrades
    FROM students
    WHERE student_id = 266`,



The SQL we used to create the cart_items table:

    CREATE TABLE cart_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 1,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
    );
