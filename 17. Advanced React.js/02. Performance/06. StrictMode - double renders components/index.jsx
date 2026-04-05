import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from "@faker-js/faker"

import Product from "./Product"
import productsData from "./data"

function App() {
  const [count, setCount] = React.useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  productsData.push({
    id: faker.database.mongodbObjectId(),
    name: "+ Create new item"
  })

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <div className="products-list">
        {
          productsData.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
); 