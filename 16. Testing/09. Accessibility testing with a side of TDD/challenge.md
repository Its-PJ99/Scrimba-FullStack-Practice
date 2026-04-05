# Challenge:
************

Task: Make the meme image accessible. Use TDD.

Description: First write a test to check that the meme image is accessible and has the alt attribute set to "One Does Not Simply". Watch the test fail, and then get it to pass by making the necessary change in `Main.jsx`. When done, organize both tests in a test suite.

Steps:
1. Add a new test in `a11y.test.jsx`.
2. Render the App component.
3. Using `getByAltText`, query the image using the alt text "One Does Not Simply" and expect that it is in the document.
4. Watch the test fail.
5. Make the change in `Main.jsx` to get the test to pass. Which HTML attribute do you need to add to the meme image `img` element? What should be its value? Do not hard code the value.
6. Save the change and watch the test pass now.
7. Refactor `a11y.test.jsx`, organizing the tests in a test suite.
8. Congratulations! You just did TDD! 