# Challenge:
************

Task: Add a test for updating the bottom text. Use the Arrange-Act-Assert pattern.

Description: Check that after the user clears the second textbox and types "Code without coffee" in it, the App component will display the new bottom text in the document.

Steps:
1. Add a new test in the file `App.test.jsx`.
2. Pick a good name that sums up what the test is asserting.
3. Apply the Arrange-Act-Assert pattern.
4. Create a user using `userEvent.setup()`.
5. Render the component.
6. Query the second textbox, using `getAllByRole`, and the role `textbox`.
7. `await` the user `clear`ing the textbox. Make the function `async`.
8. `await` the user `type`ing the text `Code without coffee`.
9. Assert, using `expect` that the text is displayed in the document.
10. See Vitest test runner picking up the new test, running it, and passing, all green.
11. Use `describe` to organize all tests in this file in a test suite. What should the name of the test suite be?