import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import { styled } from 'styletron-react'

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
            <List key={ 0 }>
                <Link>{ links[0].name.toUpperCase() }</Link>
            </List>
        )

        // On Home Page, show every link except the "Contact Us"
        // because we made a button to handle that link
        for (let i = 1; i < links.length - 1; i++) {
            const pageName: string = links[i].name
            const path: string = links[i].path
            const linkRef: string = '#' + path
            const mobileAdjustment: number = links[i].mobileAdjustment
            const browserAdjustment: number = links[i].browserAdjustment

            renderedLinks.push(
                <List key={ i }>
                    <Link onClick={ () => props.scrollToPage(path, mobileAdjustment, browserAdjustment) } 
                        $style={{ color: 'white' }}>
                    { pageName.toUpperCase() }
                    </Link>
                </List>
            )
        }
        
        return renderedLinks
    }

    const lastIndex = props.links.length - 1
    const contactPageId: string = props.links[lastIndex].name
    const contactPageMobileAdj: number = props.links[lastIndex].mobileAdjustment
    const contactPageBrowserAdj: number = props.links[lastIndex].browserAdjustment

    return (
        <div id="Home" className='debug-border'>
            <NavBar renderLinks={ renderLinks() } />

            <ButtonContainer>
                <h1 id='welcome-message'>WELCOME MESSAGE</h1>
                <ButtonInput 
                    type="button" 
                    value="CONTACT US"
                    onClick={ () => props.scrollToPage(contactPageId, contactPageMobileAdj, contactPageBrowserAdj) } />
            </ButtonContainer>

        </div>
    )
}
const ButtonContainer = styled('div', {
    textAlign: 'center',
})

const ButtonInput = styled('input', {
    marginTop: '0px',
    height: '60px',
    width: '200px',
    border: '1px solid',
    borderColor: '#862e08',
    backgroundColor: 'Transparent',
    ':hover':{
        backgroundColor: '#862e08',

        opacity: 0.7,
        color: 'rgba(255,255,255,2)',
        cursor: 'pointer'   // Changes cursor to a 'It's a Link!' cursor
    },

    //Contact us text
    color: '#862e08',
    fontSize: '16pt',
    letterSpacing: '2px',
    fontFamily: 'Shree Devanagari 714-Regular.ttf',
    fontWeight: 100,
})

const LynetteBrown = '#862e08'

const List = styled('li', {
  listStyleType: 'none',  /* Takes off Bullet Points from List */
})

const Link = styled('span', {
  color: LynetteBrown,
  letterSpacing: '0.1em',
  ':hover': {
    cursor: 'pointer'
  },
})

export default Home