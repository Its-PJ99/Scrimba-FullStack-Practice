import React from "react"

export default function Button({children, size, ...rest}) {
    /**
     * Challenge: See if you can fix the problem with the
     * conflicting `className` props. Doesn't need to be
     * elegant, just see if you can get the button to be
     * both large AND with green text
     */
    
    let sizeClass
    if (size === "sm") sizeClass = "button-small"
    if (size === "lg") sizeClass = "button-large"
    
    return (
        <button className={sizeClass} {...rest}>
            {children}
        </button>
    )
}