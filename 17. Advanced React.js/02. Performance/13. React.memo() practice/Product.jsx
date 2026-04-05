import React from "react"
import { sleep } from "./utils"

export default function Product({ product, darkMode }) {
    sleep(1)
    const styles = {
        backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
        color: darkMode ? "white" : "#2b283a"
    }
    return (
        <div className="product-card" style={styles}>
            <p className="truncate">{product.name}</p>
        </div>
    )
}
