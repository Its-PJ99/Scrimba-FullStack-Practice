You can see how to set up a database connection in logTable.js

To create the table you can use the exec() method.

The floating-point type is 'REAL'.

In the previous scrim we created a table with this code:

    await db.exec(`
    CREATE TABLE IF NOT EXISTS abductions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location TEXT NOT NULL,
        details TEXT NOT NULL
    )
    `)

You can close a connection with
    await db.close()