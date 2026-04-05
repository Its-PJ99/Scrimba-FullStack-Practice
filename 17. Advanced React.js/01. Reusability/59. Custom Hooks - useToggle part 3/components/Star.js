import React from "react"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"

/**
 * Challenge: Remove all parts of our Toggle component
 * (don't delete the react-icons stars though!) and use 
 * the useToggle hook to conditionally render the stars. 
 * Make sure to add an onClick that runs the `toggle` function
 * you get from useToggle()
 */

export default function Star({ onChange }) {
    return (
        <Toggle onToggle={onChange}>
            <Toggle.Button>
                <Toggle.On>
                    <BsStarFill className="star filled" />
                </Toggle.On>
                <Toggle.Off>
                    <BsStar className="star" />
                </Toggle.Off>
            </Toggle.Button>
        </Toggle>
    )
}