import React from "react"
import { Outlet } from "react-router-dom"

export default function Layout() {
    /**
     * Challenge: get the Header working again
     */
    return (
        <>
            <Outlet />
            <h1>This is the Layout Route</h1>
        </>
    )
}