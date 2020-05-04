import React from 'react'
import './Products.css'
import { styled } from 'styletron-react'

const Products: React.FC = () => {
    return (
        <Background id="Products" className='debug-border'>
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

export default Products