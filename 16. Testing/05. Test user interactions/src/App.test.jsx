import { test, expect } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import App from './App'


test("updates the top text", async () => {
  // Arrange
  const user = userEvent.setup()
  render(<App />)
  const topTextbox = screen.getAllByRole('textbox')[0]

  // Act
  await user.clear(topTextbox)
  await user.type(topTextbox,  "A coder does not simply")

  // Assert
  expect(screen.getByText("A coder does not simply")).toBeInTheDocument()
})