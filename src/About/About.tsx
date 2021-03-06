import React from 'react'
import './About.css'
import { styled, withStyle } from 'styletron-react'
// import { url } from 'inspector'

// Images
//  - Social Icons
import facebookIcon from '../images/Facebook_Graphic-01.png'
import yelpIcon from '../images/Yelp_Graphic-01.png'

//  - Background Image, Image by dungthuyvunguyen from Pixabay https://pixabay.com/photos/cosmetic-skincare-female-natural-2357981/
import aboutBackground from '../images/About_Background_Fixed.png'
import lynetteHeadShot from '../images/Lynette_Headshot.png'

const About: React.FC = () => {
    const facebookLink = 'https://www.facebook.com/LynetteSkinStudio/'
    const yelpLink = 'https://www.yelp.com/biz/lynettes-skin-studio-marina'
    
    return (
        <Background id="About">
            <LynetteHeadShot id='lynette-photo' src={ lynetteHeadShot } />
            <LynetteHeader>LYNETTE</LynetteHeader>
            <LynetteTitle>Professional Esthetician</LynetteTitle>
            <LynetteDescription>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Cras risus mauris, 
                lobortis non iaculis in, elementum in massa. 
                Phasellus posuere euismod dignissim. Suspendisse 
                posuere.
            </LynetteDescription>
            <SocialIconList>
                <SocialIcons>
                    <a href={ facebookLink } target='_blank' rel='noopener noreferrer'>
                        <FacebookIcon src={ facebookIcon } />
                    </a>
                    <a href={ yelpLink } target='_blank' rel='noopener noreferrer'>
                        <YelpIcon src={ yelpIcon } />
                    </a>
                </SocialIcons>
            </SocialIconList>
        </Background>
    )
}

const Background = styled('div', {
    backgroundImage: 'url("' + aboutBackground + '")',
    height: '100vh',
    width: '100%',
    maxHeight: '760px',
    paddingTop: '250px',
    // paddingBottom: '450px',
    textAlign: 'center',
    /* Center and scale the image nicely */
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    // Ensures Services Page does not overlap content in About Page
    '@media screen and (max-height: 663px)': {
        minHeight: '663px'
    }
})

const headshotSize = '145px'
const LynetteHeadShot = styled('img', {
    width: headshotSize,
    height: headshotSize
})

const LynetteHeader = styled('h2', {
    fontFamily: 'Halant Light',
    fontSize: '40pt',
    letterSpacing: '5px',
    fontWeight: 100,
})
const LynetteTitle = styled('h2', {
    fontFamily: 'Halant Bold',
    fontSize: '23pt',
    marginTop: '-25px',
    letterSpacing: '6px',
    color: '#989898'
})
const LynetteDescription = styled('h2', {
    fontFamily: 'Shree Reg',
    fontSize: '15pt',
    maxWidth: '900px',
    wordWrap: 'break-word',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '20px',
    letterSpacing: '5px',
})

const SocialIcons = styled('div', {
    paddingTop: '20px',
})

const iconSize = '50px'
const YelpIcon = styled('img', {
    height: iconSize,
    width: iconSize
})
const FacebookIcon = withStyle(YelpIcon, {
    marginRight: '10px',
})
const SocialIconList = styled('li', {
    listStyleType: 'none',  /* Takes off Bullet Points from List */
})

export default About