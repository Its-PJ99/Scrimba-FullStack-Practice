You can trim whitespace with the .trim() method.

You can test regex with the .test() method.
  /^[a-zA-Z0-9_-]{1,20}$/.test(string)

Our regex allows: 1–20 characters in length, A-Z and a-z, 1-9 , _ or -.

The validator NPM package gives us a method .isEmail(string)