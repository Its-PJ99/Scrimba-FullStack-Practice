import React from "react"
import Parent from "./Parent"

function GrandParent() {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div className="grandparent">
            <p>GrandParent Component.</p>
            <Parent />
            <Parent />
        </div>
    )
}

export default React.memo(GrandParent)