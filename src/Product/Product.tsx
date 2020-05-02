import React from 'react'
import './Product.css'
import { styled } from 'styletron-react'

const Product: React.FC = () => {
    return (
        <Background id="Product" className='debug-border'>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            <h1>Product Page Showing</h1>
            
        </Background>
    )
}

const Background = styled('div', {
    backgroundColor: '#f4f2f5'
})

export default Product