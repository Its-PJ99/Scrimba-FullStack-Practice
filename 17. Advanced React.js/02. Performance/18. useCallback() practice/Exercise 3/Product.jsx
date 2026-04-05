import React from "react"
import { sleep } from "./utils"

function Product({ product, style }) {
    sleep(1)
    return (
        <div 
            className="product-card"
            style={style}
        >
            <p className="truncate">{product.name}</p>
        </div>
    )
}

export default React.memo(Product)