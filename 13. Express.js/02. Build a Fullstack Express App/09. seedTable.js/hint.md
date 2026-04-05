You can use the exec() method to begin the transaction and to commit at the end of the process.

Iterate over the data and use the run() method to insert data into the database. Remember to bind the data!

database.run(
       `INSERT INTO table (col1, col2, col3)
        VALUES (?, ?, ?)`,
       [name, age, city]
     )

If there are errors, you can rollback. Use the exec() method to do this and pass in the string 'ROLLBACK'.