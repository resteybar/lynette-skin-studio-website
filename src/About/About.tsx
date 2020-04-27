import React from 'react'
import './About.css'
import { styled, withStyle } from 'styletron-react'

import facebookIcon from '../images/Facebook_Graphic-01.png'
import yelpIcon from '../images/Yelp_Graphic-01.png'
import { url } from 'inspector';

const About: React.FC = () => {
    const facebookLink = 'https://www.facebook.com/LynetteSkinStudio/'
    const yelpLink = 'https://www.yelp.com/biz/lynettes-skin-studio-marina'
    return (
        <Background id="About" className='debug-border'>
            <h1>About Page Showing</h1>
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
const Background = styled ('div',{
    backgroundImage: 'url("../images/About_Background.png")'
})
const LynetteHeader = styled('h2', {
    fontFamily: 'Halant Light',
    fontSize: '30pt'
})
const LynetteTitle = styled('h2', {
    fontFamily: 'Halant Bold',
    fontSize: '30pt'
})
const LynetteDescription = styled('h2', {
    fontFamily: 'Shree Reg',
    fontSize: '30pt'
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