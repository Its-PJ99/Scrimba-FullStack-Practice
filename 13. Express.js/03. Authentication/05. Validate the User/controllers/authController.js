export async function registerUser(req, res) {

  let { name, email, username, password } = req.body

/*
Challenge:
1. Validate the incoming user data.
  - Make sure all fields are present.
  - Remove any whitespace where appropriate.
  - Use regex /^[a-zA-Z0-9_-]{1,20}$/ to check the username contains only the allowed characters.
  - Use the Validator package to check the email format is valid.

If fields are not present, the username uses disallowed characters, or the email address is not of a valid format, end the response with a suitable code and send an error object with a suitable message. For example:
   
   { error: 'All fields are required.' }

  - Test with console.logs.

hint.md for help!
*/

}