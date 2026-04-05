import React from "react"
import Child from "./Child"

export default function Parent() {
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
    return (
        <div className="parent">
            <p>Parent Component</p>
            <Child />
            <Child />
        </div>
    )
}
