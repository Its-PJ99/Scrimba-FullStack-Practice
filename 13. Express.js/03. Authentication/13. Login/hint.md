The bcryptjs package gives us the .compare() method which returns a boolean: 
    bcrypt.compare(user inputted password, password hash from db) 
  
We cannot use lastID here, as that comes from a newly created user. But we can get the user’s ID from the DB. So, assuming we save the user we have extracted from the db to a const ‘user’, we would do something like this:
    req.session.userId = user.id