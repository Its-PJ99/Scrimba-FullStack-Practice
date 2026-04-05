import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"

/**
 * Challenge: Add the "FaMoneyBill" icon to the left
 * of the "Buy now!" text in the button
 */

function App() {
  return (
    <main>
      <Button>
        {/*Icon goes here*/}
        Buy now!
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);