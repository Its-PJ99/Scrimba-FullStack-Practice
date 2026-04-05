import React from "react"

export default function Decision({ sayName }) {
    const [goingOut, setGoingOut] = React.useState(false)
    
    console.log(sayName(goingOut))

    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            
        </div>
    )
}