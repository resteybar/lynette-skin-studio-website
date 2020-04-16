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
            <h1 >WELCOME MESSAGE</h1>

            <ButtonContainer>
                <ButtonInput type="button" value="CONTACT US"/>
            </ButtonContainer>

        </div>
        
        
    )
}
const ButtonContainer = styled('div', {
    textAlign: 'center',
    //border: '1px solid',
    //top: '50px',
})
const Shree = instance.renderFontFace({
    src: 'url("../fonts/Shree\ Devanagari\ 714-Regular.ttf")'
  });
const ButtonInput = styled('input', {
    marginTop: '245px',
    height: '70px',
    width: '200px',
    border: '2px solid',
    borderColor: '#862e08',
    backgroundColor: 'Transparent',
    fontSize: '18pt',
    fontFamily: 'Shree',
});

export default Home