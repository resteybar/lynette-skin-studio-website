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
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and decreases appearance of freckles.',
            productIngredients: 'No ingredients displayed yet!',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and decreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and decreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and decreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and decreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and decreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and decreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
        {
            productName: 'BB CREAM SPF 60',
            productDescription: 'Smooths & maintains healthy skin inorder to prevent dark spots and decreases appearance of freckles.',
            productIngredients: '???',
            productPrice: '$25',
            productImage: DefaultProductImage
        },
    ]

    const renderProducts = (): JSX.Element[] => {
        var renderedMenu: JSX.Element[] = []

          for (let i = 0; i < products.length; i++){
              const name: string = products[i].productName
              const price: string = products[i].productPrice
              const image: string = products[i].productImage
              const description: string = products[i].productDescription
              const ingredients: string = products[i].productIngredients

              renderedMenu.push(
                <Product key={ i }>
                    <ImageContainer>
                        <UnclickableImage><ProductImage src={ image } /></UnclickableImage>
                        <ProductInfo id='product-info'>
                            <ProductDescription>{ description }</ProductDescription>
                            <ProductIngredients>Ingredients:&nbsp;{ ingredients }</ProductIngredients>
                        </ProductInfo>
                    </ImageContainer>
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
    textAlign: 'center',

    marginLeft: '50px',
    marginRight: '50px',

    // '@media screen and (max-width: 1100px)': {
    //     marginLeft: '50px',
    //     marginRight: '50px'
    // },
})
const ProductsPage = styled('div', {
    backgroundColor: '#f4f2f5',

    // Debugging purposes: Using it to see the Products
    paddingTop: '75px',
    paddingBottom: '250px'
})

const Product = styled('div', {
    backgroundColor: 'white',
    boxShadow: '3px 6px 10px 4px rgba(0, 0, 0, 0.21)',
    textAlign: 'center',
    paddingBottom: '15px',
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

    // Ensures that you cannot drag the product image
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    pointerEvents: 'none',
})
const UnclickableImage = styled('div', {
    // When hovering the Product image, it will display the product's
    // descipription & ingredients
    ':hover + #product-info': {
        display: 'flex'
    }
})

const ImageContainer = styled('div', {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
})

const ProductInfo = styled('div', {
    color: '#f4f2f5',
    fontFamily: 'Shree Reg',
    fontSize: '14px',
    backgroundColor: 'black',
    position: 'absolute',
    height: '100%',
    width: '100%',
    right: '0',
    top: '0',
    display: 'none',
    textAlign: 'left',

    justifyContent: 'space-between',
    flexDirection: 'column',
    wordWrap: 'break-word',

    opacity: '0.85',

    // Takes off highlighting to text
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    pointerEvents: 'none',
})

const spaceLeftRight: string = '20px'
const spaceTopBot: string = '20px'
const ProductDescription = styled('p', {
    marginTop: spaceTopBot,
    marginLeft: spaceLeftRight,
    marginRight: spaceLeftRight,
})

const ProductIngredients = styled('p', {
    marginBottom: spaceTopBot,
    marginLeft: spaceLeftRight,
    marginRight: spaceLeftRight,
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
    '@media screen and (max-width: 1100px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        maxWidth: '700px'
    },

    '@media screen and (max-width: 800px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        maxWidth: '600px'
    },

    '@media screen and (max-width: 700px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        marginLeft: '50px',
        marginRight: '50px',
    },

    '@media screen and (max-width: 600px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '225px'
    },
})

export default Products