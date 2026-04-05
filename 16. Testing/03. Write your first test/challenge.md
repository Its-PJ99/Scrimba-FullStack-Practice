# Challenge:
************

Task: Add a component test for the Main component. 

Description: Check that the Main component shows the actual text lines "One does not simply" and "Walk into Mordor" in the document. It should also check that the img with the src "https://i.imgflip.com/1bij.jpg" is in the document.

Steps:
1. Create a new file `Main.test.jsx` next to `Main.jsx`.
2. Import necessary functions from 'vitest' and '@testing-library/react'.
3. Import the component.
4. Add a test for the meme text lines and image. 
  1. Render the component.
  2. Add 3 assertions using `expect`. For the `img`, expect `src` `toBe` "https://i.imgflip.com/1bij.jpg". 
  3. See the tests in `Header.test.jsx` for reference.
5. See Vitest test runner picking the new test, running it, and passing, all green.