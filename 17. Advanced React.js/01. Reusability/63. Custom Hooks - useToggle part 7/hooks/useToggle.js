import React from "react"
/**
 * Challenge:
 * 1. Pass a parameter called `initialValue` to our custom hook.
 *    Have its default be `false` in case that parameter isn't
 *    provided when useToggle() is called.
 * 2. Initialize state with the `initialValue` parameter
 */
export default function useToggle() {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return [on, toggle]
}