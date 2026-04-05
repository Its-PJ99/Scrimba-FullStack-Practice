import React from "react"
import Decision from "./Decision"

function App() {
    return (
        <div>
            <Decision sayName={(goingOut) => {
                return (
                    <h1>
                        Am I going out tonight?? {goingOut ? 
                        "Yes!" : "Nope..."}
                    </h1>
                )
            }} />
        </div>
    )
}

export default App