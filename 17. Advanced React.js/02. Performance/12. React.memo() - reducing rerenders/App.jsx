import React from "react"
import GrandParent from "./GrandParent"

export default function App() {
    const [count, setCount] = React.useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("[GP] [P] [C] [GC] APP just rendered")
    return (
        <div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <h2>Count: {count}</h2>
            <p>App component</p>
            <GrandParent />
            <GrandParent />
        </div>
    )
}

/**
 * Play around: what happens when you pass the count to just one
 * of the `GrandParent` components? What gets re-rendered?
 * Does it matter if the GrandParent component even uses
 * that prop that was passed to it?
 */