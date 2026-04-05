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

    const style = React.useMemo(() => {
        return {
            backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
            color: darkMode ? "#e9e3ff" : "#2b283a",
        }
    }, [darkMode])


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
            <GrandParent style={style} increment={increment} />
            <GrandParent />
        </div>
    )
}
