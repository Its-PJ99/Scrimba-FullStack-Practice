import React from "react"
import { sleep } from "./utils"

export default function Product({ product, style }) {
    sleep(1)
    return (
        <div className="product-card" style={style}>
            <p className="truncate">{product.name}</p>
        </div>
    )
}
