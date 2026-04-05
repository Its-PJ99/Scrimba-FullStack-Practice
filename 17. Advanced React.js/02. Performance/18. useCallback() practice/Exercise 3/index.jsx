import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from "./Product"
import productsData from "./data"

function App() {
  const [count, setCount] = React.useState(0)
  const [darkMode, setDarkMode] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState(null)

  /**
   * Challenge - Part 1: Try passing `setSelectedProduct` (the 
   * state setter function React made in the useState) down to
   * the Product component. Set it up so when the div#product-card
   * is clicked, it sets the selectedProduct to the id of that
   * particular product.
   * 
   * After doing that, check if there has been a performance
   * problem from passing a function down to the child component
   * or not. Why or why not?
   */

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  const productStyles = React.useMemo(() => {
    return {
      backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
      color: darkMode ? "white" : "#2b283a"
    }
  }, [darkMode])

  const selectedStyles = {
    backgroundColor: "#93c47d"
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
          productsData.map(product => {
            const isSelected = product.id === selectedProduct
            return <Product
              key={product.id}
              product={product}
              style={isSelected ? { ...productStyles, ...selectedStyles } : productStyles}
            />
          })
        }
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);