import React from 'react'
import './Products.css'
import { styled } from 'styletron-react'

import DefaultProductImage from '../images/Product.png'

type ProductValues = {
    productName: string;
    productDescription: string;
    productIngredients: string;
    productPrice: string;
    productImage: string;
}

const Products: React.FC = () => {
    const products: ProductValues[] = [
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and descreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and descreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and descreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and descreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and descreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and descreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and descreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and descreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
    ]

    const renderProducts = (): JSX.Element[] => {
        var renderedMenu: JSX.Element[] = []

          for (let i = 0; i < products.length; i++){
              const name: string = products[i].productName
              const description: string = products[i].productDescription
              const price: string = products[i].productPrice
              const image: string = products[i].productImage

              renderedMenu.push(
                <Product>
                    <ProductImage src={ image } />
                    <ProductName>{ name }</ProductName>
                    <ProductPrice>{ price }</ProductPrice>
                </Product>
              )
          }

          return renderedMenu
    }

    return (
        <ProductsPage id="Products" className='debug-border'>
            <ProductsTitle>Products</ProductsTitle>

            <AttentionTitle>
                Attention: Purchases can not be made at this time. please contact Lynette for product purchases. 
                Thank you for understanding.
            </AttentionTitle>
            
            <GridLayout>
                { renderProducts() }
            </GridLayout>
        </ProductsPage>
    )
}


/*
    TODO:
        Eros
            1. "PRODUCTS" title like "SERVICES" title
            2. "ATTENTION: ..." message

        Raymond
        3. Organize layout of Products (Using Grid), 1 product at a time

        Eros & Raymond
            - Product Image
            - Title
            - Price
            - onHover Background color
            - onHover Description
            - onHover Ingredients
*/

/*
    Fonts:
        - Products Title: Halant Light
        - "Attention...": Shree Reg
            - Color: Black
        - Name of Product: Halant Medium
        - Price: Shree Reg.
        - OnHover Text: Shree Reg.
*/

// CSS
const LynetteBrown = '#862e08'

const ProductsTitle = styled('h1', {
    fontFamily: 'Halant Light',
    color: LynetteBrown,
    
    fontSize: '40px',
    letterSpacing: '13px',
    textTransform: 'uppercase',
    textAlign: 'center'
})
const AttentionTitle = styled('h2',{
    fontFamily: 'Shree Reg',
    
    fontSize: '15px',
    letterSpacing: '2.4px',
    textTransform: 'uppercase',
    textAlign: 'center'
})
const ProductsPage = styled('div', {
    backgroundColor: '#f4f2f5',

    // Debugging purposes: Using it to see the Products
    paddingTop: '100px',
    paddingBottom: '500px'
})

const Product = styled('div', {
    backgroundColor: 'white',
    // Need to fix
    // x, y, blur, spread, color
    // boxShadow: '0px 0px 15px 4px rgba(0, 0, 0, 0.17)',
    boxShadow: '3px 6px 10px 4px rgba(0, 0, 0, 0.21)',

    // opacity 10%, distance 5px, 
    // spread 40%, size 40%
    
    textAlign: 'center',
    paddingBottom: '15px'
})
const ProductName = styled('h2', {
    fontFamily: 'Halant Medium',
    fontSize: '18px',
    letterSpacing: '2px',
})
const ProductPrice = styled('h2', {
    fontFamily: 'Shree Reg',
    
    marginTop: '5px',
    fontSize: '15px',
    letterSpacing: '3px',
})
const productImageSize = '200px'
const ProductImage = styled('img', {
    height: productImageSize,
    width: productImageSize,
})

const GridLayout = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridColumnGap: '50px',
    gridRowGap: '80px',
    // Center Menu
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '25px',

    // Ensuring size does not maximize and minimize too much
    // minWidth: '400px',
    maxWidth: '1000px',

    // Helps organize Services when website is getting minimized or on Mobile
    // '@media screen and (max-width: 700px)': {
    //     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    // },

    // Just in case someone has a REALLY small phone
    // '@media screen and (max-width: 500px)': {
    //     minWidth: '0px',
    // },

    // Ensures there is space around what wraps all the services as 
    // the browser minimizes
    // '@media screen and (max-width: 1500px)': {
    //     marginLeft: '50px',
    //     marginRight: '50px'
    // }
})

export default Products