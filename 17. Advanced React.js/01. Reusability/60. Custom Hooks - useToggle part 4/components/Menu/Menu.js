import React from "react"
import Toggle from "../Toggle/index"

/**
 * Challenge:
 * 1. Remove all references to Toggle in the all 4 Menu
 *    components
 * 2. import and use `useToggle()` to create new state
 *    and toggle functions so we can use those in the Menu.
 *    Call the variables "open" and "toggleOpen".
 */

export default function Menu({ children, onOpen }) {
    return (
        <Toggle onToggle={onOpen}>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}
