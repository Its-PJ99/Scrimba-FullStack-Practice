# Challenge:
************

Task: Add a test for getting a new meme image.

Description: The test should check that after the user click the "Get a new meme image 🖼" button, a new image is displayed. Use the Arrange-Act-Assert pattern. Only finish the first two parts of the pattern.

Optional for Extra Credit: Add the Assert part as well. What is the `src` of the meme image that the mock service will return?

Steps:
1. Add a new test in the file `App.test.jsx`.
2. Pick a good name that sums up what the test is asserting.
3. Add the Arrange-Act-Assert pattern skeleton.
4. Create a user using `userEvent.setup()`.
5. Render the component.
6. Query the button, using `getByRole`, and the role `button`.
7. In the Act part, have the user `click` on the button. What does that return? Does the test function need to be `async`? 
8. See Vitest test runner picking up the new test, running it, and passing, all green.