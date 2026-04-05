import { test, expect } from 'vitest'

import { render, screen } from '@testing-library/react'

import App from './App'

test("ensures troll face image is accessible", () => {
  render(<App />)

  expect(screen.getByAltText("Troll face")).toBeInTheDocument()
})