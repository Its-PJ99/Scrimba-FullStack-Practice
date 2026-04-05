import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

/**
 * Challenge:
 * Part 1:
 * 1. Create new context here in the Menu component. Make sure
 *    to export it from this file as well.
 * 2. Wrap the `div` below with the Context Provider
 * 3. Give the Provider a value of the boolean `false` (represents
 *    the hardcoded `open` state for now - we'll fix this very soon.)
 */

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
    
    return (
        <div className="menu">
            {children}
        </div>
    )
}
