import React from "react"
import { sleep } from "./utils"

export default function GrandChild() {
    sleep(30)
    console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
    return (
        <div className="grandchild">
            <p>GrandChild Component</p>
        </div>
    )
}
