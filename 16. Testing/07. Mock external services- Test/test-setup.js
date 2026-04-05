import '@testing-library/jest-dom/vitest';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';

import { setupServer } from 'msw/node';
import { rest } from 'msw';


// Prepare data
const memes = {
  data: {
    memes: [
      {
        url: 'https://i.imgflip.com/1c1uej.jpg',
      },
    ],
  },
}

// Define handlers using MSW 1.x
export const restHandlers = [
  rest.get('https://api.imgflip.com/get_memes', (req, res, ctx) => {
    return res(ctx.json(memes));
  }),
];

// Set up server
const server = setupServer(...restHandlers);

// Establish requests interception layer before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Clean up after all tests are done, preventing this
// interception layer from affecting irrelevant tests.
afterAll(() => server.close());


// Clean up handlers
afterEach(() => {
  server.resetHandlers();
  cleanup();
});