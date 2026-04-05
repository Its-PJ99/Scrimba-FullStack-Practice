import React from "react"
import GrandParent from "./GrandParent"

export default function App() {
    const [count, setCount] = React.useState(0)
    const [darkMode, setDarkMode] = React.useState(false)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    const style = {
        backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
        color: darkMode ? "#e9e3ff" : "#2b283a",
    }
    
    /**
     * Challenge: Figure out how to stop the Grandparent from
     * rerendering when the value of `count` changes!
     * 
     * In other words, figure out how to teach React to hold on to
     * the reference for the `style` object above, and only consider
     * it different if the value of `darkMode` changes.
     */

    React.useEffect(() => {
        console.log("style changed")
    }, [style])

    console.log("[GP] [P] [C] [GC] APP just rendered")
    return (
        <div className="container">
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <h2>Count: {count}</h2>
            <button onClick={() => setDarkMode(prev => !prev)}>
                {darkMode ? "Switch to Light" : "Switch to Dark"}
            </button>
            <p>App component</p>
            <GrandParent style={style} />
            <GrandParent />
        </div>
    )
}
