import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import { styled, withStyle } from 'styletron-react'
import { Client } from "styletron-engine-atomic";

const instance = new Client();

interface HomeProps {
    renderLinks: JSX.Element[]
}

const Home: React.FC<HomeProps> = props => {
    const displayLinks = () => {

    }
    return (

        <div id="Home" className='debug-border'>
            <NavBar renderLinks={props.renderLinks} />

            <ButtonContainer>
                <h1 id='welcome-message'>WELCOME MESSAGE</h1>
                
                {/* Raymond will complete the a tag later */}
                <a href='#'>
                    <ButtonInput type="button" value="CONTACT US"/>
                </a>
            </ButtonContainer>

        </div>
        
        
    )
}
const ButtonContainer = styled('div', {
    textAlign: 'center',
    //border: '1px solid',
    //top: '50px',
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
        //opacity: '.3',
        color: 'rgba(255,255,255,2)',
        cursor: 'pointer'   // Changes cursor to a 'It's a Link!' cursor
    },

    //Contact us text
    color: '#862e08',
    fontSize: '16pt',
    letterSpacing: '2px',
    fontFamily: 'Shree Devanagari 714-Regular.ttf',
    fontWeight: 200,
});

export default Home