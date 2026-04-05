import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from "./Product"
import productsData from "./data"

function App() {
  const [count, setCount] = React.useState(0)
  const [darkMode, setDarkMode] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  
  /**
   * Challenge: we've measured a performance issue with our Product
   * components, and we realized we don't need to rerender them every
   * time the count changes! We need your help to fix this issue!
   */

  const productStyles = {
    backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
    color: darkMode ? "white" : "#2b283a"
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setDarkMode(prev => !prev)}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
      <br />
      <br />
      <div className="products-list">
        {
          productsData.map(product => (
            <Product key={product.id} product={product} style={productStyles} />
          ))
        }
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);