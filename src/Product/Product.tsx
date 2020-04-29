import React from 'react'
import './Product.css'

const Product: React.FC = () => {
    const printWhatever = () => {
        const numLines = 20
        var renderedLinks = []
  
        for (let i = 0; i < numLines; i++)
            renderedLinks.push(
                <h1>Product Page showing</h1>
            )
        
        return renderedLinks
    }
    return (
        <div id="Product" className='debug-border'>
            { printWhatever() }
        </div>
    )
}

export default Product