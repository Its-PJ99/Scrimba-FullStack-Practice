import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
    
    /** Discovery Challenge:
     * In the MenuButton, MenuDropdown, and MenuItem components, 
     * accept `toggle` and `open` props and just console log 
     * both of them in all 3 components.
     */

    return (
        <div className="menu">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </div>
    )
}
