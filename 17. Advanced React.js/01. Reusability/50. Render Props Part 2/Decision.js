import React from "react"

export default function Decision() {
    const [goingOut, setGoingOut] = React.useState(false)
    
    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
        </div>
    )
}