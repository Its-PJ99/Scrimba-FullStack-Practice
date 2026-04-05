import React from "react"

export default function Toggle({ children }) {
    /**
     * Challenge: set up context!
     * Reminder of the steps:
     * 1. Create a new context (outside the component, but in this file)
     * 2. Export that context instance from the file so we 
     *    can use it eleswhere
     * 3. Use the Context Provider to wrap the `children` returned
     *    from this Toggle component
     * 4. Pass the state values to the context value prop for access
     *    from child components later on
     */
    
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return children
}
