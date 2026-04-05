import React from "react"
import ReactDOM from "react-dom/client"
import ProductsList from "./ProductsList"

/**
 * Challenge: Add back the dynamic import of the ProductsList
 * component.
 * 
 * 1. Use `React.lazy()` to create a suspending component
 *    that will only render when needed
 * 2. Use the dynamic `import()` as the return value inside of
 *    `React.lazy()`
 * 3. Use the `<React.Suspense>` component will a `fallback`
 *    prop to give React something to render in the meantime
 *    while it's downloading all the code for the suspended
 *    component.
 */

function App() {
  const [count, setCount] = React.useState(0)
  const [showProducts, setShowProducts] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>
        -
            </button>
      <button className="button" onClick={increment}>
        +
            </button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setShowProducts(prev => !prev)}
      >
        Show Products
            </button>
      <br />
      <br />
      <div className="products-list">
        {showProducts && <ProductsList />}
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
