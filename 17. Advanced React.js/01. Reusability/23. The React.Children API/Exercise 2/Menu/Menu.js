import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
    
    /**
     * Challenge: figure out what needs to be passed to the
     * children so they'll have access to new props!
     */

    return (
        <div className="menu">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    
                })
            })}
        </div>
    )
}
