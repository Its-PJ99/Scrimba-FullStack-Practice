import React from "react"
import classnames from "classnames"
export default function Button({children, className, size, ...rest}) {
    /**
     * Challenge: 
     * 
     * Accept a `variant` prop and style the Button component
     * accordingly. The values can be `success`, `warning`, or `danger`. 
     * Check the Figma design for the specific colors to be used for each
     * variant.
     */
    let sizeClass = size ? `button-${size}` : ""
    const allClasses = classnames(sizeClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}