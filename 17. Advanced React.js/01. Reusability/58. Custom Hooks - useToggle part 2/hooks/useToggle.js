/**
 * Create the beginnings of the useToggle custom hook!
 * 
 * 1. Create a function called useToggle(). Skip the
 *    parameters for now. (We'll come back to that)
 * 2. Bring the useState and toggle function from
 *    our Toggle component into this hook
 * 3. Add the missing import (React)
 * 4. RETURN from this function an array with `on` as
 *    the first index and `toggle` as the second
 *    index.
 * 5. Add the missing import in Toggle.js
 */

export default function useToggle() {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
}