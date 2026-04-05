import React from "react"

export default function MenuDropdown({ children }) {
    return open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}