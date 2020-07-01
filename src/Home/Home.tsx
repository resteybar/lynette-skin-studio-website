import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import { styled, withStyle } from 'styletron-react'

type LinkValue = {
    name: string;
    path: string;
    mobileAdjustment: number;
    browserAdjustment: number;
}

interface HomeProps {
    links: LinkValue[],
    scrollToPage(id: string, mobileAdjustment: number, browserAdjustment: number): void
}

const Home: React.FC<HomeProps> = props => {
    // Automate Rendering Links
    const renderLinks = () => {
        var renderedLinks = []

        const links: LinkValue[] = props.links

        renderedLinks.push(
            <List key={ 0 } $style={{ marginRight: '25px' }}>
                <Link>{ links[0].name.toUpperCase() }</Link>
            </List>
        )

        // On Home Page, show every link except the "Contact Us"
        // because we made a button to handle that link
        for (let i = 1; i < links.length - 2; i++) {
            const pageName: string = links[i].name
            const path: string = links[i].path
            const mobileAdjustment: number = links[i].mobileAdjustment
            const browserAdjustment: number = links[i].browserAdjustment

            renderedLinks.push(
                <List key={ i } $style={{ marginRight: '25px' }}>
                    <Link onClick={ () => props.scrollToPage(path, mobileAdjustment, browserAdjustment) } 
                        $style={{ color: 'white' }}>
                    { pageName.toUpperCase() }
                    </Link>
                </List>
            )
        }

        const productsIndex: number = 3
        const pageName: string = links[productsIndex].name
        const path: string = links[productsIndex].path
        const mobileAdjustment: number = links[productsIndex].mobileAdjustment
        const browserAdjustment: number = links[productsIndex].browserAdjustment

        renderedLinks.push(
            <ProductLink key={ productsIndex } $style={{ marginRight: '0px' }}>
                <Link onClick={ () => props.scrollToPage(path, mobileAdjustment, browserAdjustment) } 
                    $style={{ color: 'white' }}>
                { pageName.toUpperCase() }
                </Link>
            </ProductLink>
        )

        // renderedLinks[Last] $style = {{ marginRight: '0px' }}
        // last link here without marginRight

        return renderedLinks
    }

    const lastIndex = props.links.length - 1
    const contactPageId: string = props.links[lastIndex].name
    const contactPageMobileAdj: number = props.links[lastIndex].mobileAdjustment
    const contactPageBrowserAdj: number = props.links[lastIndex].browserAdjustment

    return (
        <div id="Home">
            <NavBar renderLinks={ renderLinks() } />

            <ButtonContainer>
                <h1 id='welcome-message'>WELCOME MESSAGE</h1>
                <ButtonInput 
                    type="button" 
                    onClick={ () => props.scrollToPage(contactPageId, contactPageMobileAdj, contactPageBrowserAdj) }>
                        CONTACT US
                </ButtonInput>
            </ButtonContainer>

        </div>
    )
}

// CSS
const LynetteBrown = '#862e08'

const ButtonContainer = styled('div', {
    textAlign: 'center',
})

const ButtonInput = styled('button', {
    marginTop: '0px',
    height: '60px',
    width: '200px',
    border: '1px solid' + LynetteBrown,
    backgroundColor: 'Transparent',
    ':hover': {
        backgroundColor: '#862e08',

        opacity: 0.7,
        color: 'rgba(255,255,255,2)',
        cursor: 'pointer',
    },

    // Hides highlighting when button is clicked
    // outline: 'none',

    // Contact us text
    color: '#862e08',
    fontSize: '16pt',
    letterSpacing: '2px',
    fontFamily: 'Shree Devanagari 714-Regular.ttf',
    fontWeight: 100,
})

const ProductLink = styled('li', {
    listStyleType: 'none',  /* Takes off Bullet Points from List */
})

const List = withStyle(ProductLink, {
  '@media screen and (max-width: 422px)': {
        marginRight: '12px',
    }
})

const Link = styled('span', {
  color: LynetteBrown,
  letterSpacing: '0.1em',
  ':hover': {
    cursor: 'pointer'
  },
})

export default Home