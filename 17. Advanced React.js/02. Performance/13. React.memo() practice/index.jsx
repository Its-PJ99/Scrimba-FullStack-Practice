import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from "./Product"
import productsData from "./data"

/**
 * Challenge: Using what you've learned about React.memo(),
 * improve the performance of this app when the counter
 * is changed. Since the products don't care about the `count`
 * value at all, they shouldn't need to rerender when `count`
 * changes.
 */

function App() {
  const [count, setCount] = React.useState(0)
  const [darkMode, setDarkMode] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
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
            <Product
              key={product.id}
              product={product}
              darkMode={darkMode}
            />
          ))
        }
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);