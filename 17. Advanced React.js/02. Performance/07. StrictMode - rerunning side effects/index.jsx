import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from "@faker-js/faker"

import Timer from "./Timer"

function App() {
  const [showTimer, setShowTimer] = React.useState(false)

  function toggleTimer() {
    setShowTimer(prev => !prev)
  }

  return (
    <div>
      <button className="button" onClick={toggleTimer}>{showTimer ? "Hide" : "Show"} Timer</button>
      {showTimer &&
        <Timer />
      }
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 