import React from "react"
import Toggle from "../Toggle/index"

export default function Menu({ children }) {
    /**
     * Challenge:
     * 1. Accept `onOpen` as a prop for the Menu component
     * 2. Pass the onOpen prop as the value to Toggle's onToggle prop
     * 3. In index.js, pass an onOpen prop to the Menu
     *    component whose value is a function. 
     *    Just use console.log() for now.
     */
    return (
        <Toggle>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}
