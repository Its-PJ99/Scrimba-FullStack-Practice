import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from "./Toggle/index"

/**
 * Challenge: refactor our app to use the Toggle.On 
 * and Toggle.Off components to conditionally render the
 * star icons from react-icons. (See Star.js for that code).
 * 
 * Reminders:
 * 1. Make sure to copy over the classNames from Star.js too!
 *    I've added some CSS that we don't want to lose.
 * 2. Clicking the Star should flip the Toggle state. Try to
 *    figure out how you can do that 🤔. Hint: we built something
 *    that lets us flip the Toggle state back and forth 😉
 */

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
        <Toggle.On>The toggle is on</Toggle.On>
        <Toggle.Off>The toggle is off</Toggle.Off>
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
