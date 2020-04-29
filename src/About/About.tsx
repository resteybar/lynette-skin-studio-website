import React from 'react'
import './About.css'
import { styled, withStyle } from 'styletron-react'
// import { url } from 'inspector'

// Images
//  - Social Icons
import facebookIcon from '../images/Facebook_Graphic-01.png'
import yelpIcon from '../images/Yelp_Graphic-01.png'

//  - Background Image, 
import aboutBackground from '../images/About_Background.png'
import lynetteHeadShot from '../images/Lynette_Headshot.png'

const About: React.FC = () => {
    const facebookLink = 'https://www.facebook.com/LynetteSkinStudio/'
    const yelpLink = 'https://www.yelp.com/biz/lynettes-skin-studio-marina'
    
    return (
        <Background id="About" className='debug-border'>
            
            <LynetteHeadShot src={ lynetteHeadShot } />
            <LynetteHeader>LYNNETE</LynetteHeader>
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
    width: '99vw',
    maxHeight: '1000px',
    // paddingTop: '250px',
    // paddingBottom: '450px',
    textAlign: 'center',
    /* Center and scale the image nicely */
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
})

const headshotSize = '125px'
const LynetteHeadShot = styled('img', {
    width: headshotSize,
    height: headshotSize
})

const LynetteHeader = styled('h2', {
    fontFamily: 'Halant Light',
    fontSize: '30pt'
})
const LynetteTitle = styled('h2', {
    fontFamily: 'Halant Bold',
    fontSize: '30pt',
})
const LynetteDescription = styled('h2', {
    fontFamily: 'Shree Reg',
    fontSize: '30pt',
    // wordWrap: 'break-word',
    // width: '500px',
    // marginRight: 'auto',
    // marginLeft: 'auto',
    // marginTop: '150px'
})

const iconSize = '45px'
const SocialIcons = styled('div', {
    paddingTop: '15px',
})
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