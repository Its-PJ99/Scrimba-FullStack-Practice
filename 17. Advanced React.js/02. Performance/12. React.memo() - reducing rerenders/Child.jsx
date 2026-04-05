import React from "react"
import GrandChild from "./GrandChild"

export default function Child() {
    console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
    return (
        <div className="child">
            <p>Child Component</p>
            <GrandChild />
            <GrandChild />
        </div>
    )
}
