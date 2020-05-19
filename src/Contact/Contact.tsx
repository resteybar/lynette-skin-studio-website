import React from 'react'
import './Contact.css'
import { styled, withStyle } from 'styletron-react'

// Images
//  - Social Media
import facebookImage from '../images/Facebook_Graphic-01.png'
import yelpImage from '../images/Yelp_Graphic-01.png'

//  - Phone Call & Address
import phoneImage from '../images/Phone_Graphic-01.png'
import locationImage from '../images/Location_Graphic-01.png'

const Contact: React.FC = () => {
    const facebookLink = 'https://www.facebook.com/LynetteSkinStudio/'
    const yelpLink = 'https://www.yelp.com/biz/lynettes-skin-studio-marina'
    
    return (
        <ContactPage id="Contact">
            <div>
                <AppointmentMsg>
                    BY APPOINTMENT ONLY* 
                </AppointmentMsg>

                {/* Phone # & Address */}
                <ContactInfo>
                    <PhoneInfo>
                        <PhoneIcon src={ phoneImage } />
                        <Info>(831) 884-5086</Info>
                    </PhoneInfo>
                    <LocationInfo>
                        <LocationIcon src={ locationImage } />
                        <Info>287 Carmel Ave, Marina, CA 93933</Info>
                    </LocationInfo>
                </ContactInfo>

                <CancelMsg>
                    *For any cancellations, please notify at least 
                    24 hours in advance as courtesy.
                </CancelMsg>
            </div>

            <div>
                {/* FB & Yelp Icons */}
                <SocialIcons>
                    <a href={ facebookLink } target='_blank' rel='noopener noreferrer'>
                        <FacebookIcon src={ facebookImage } />
                    </a>
                    <a href={ yelpLink } target='_blank' rel='noopener noreferrer'>
                        <YelpIcon src={ yelpImage } />
                    </a>
                </SocialIcons>
            </div>
        </ContactPage>
    )
}

const ContactPage = styled('div', {
    color: '#862e08',
    backgroundColor: '#dabe8e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

// Appointment Details
const AppointmentMsg = styled('h1', {
    fontFamily: 'Halant Med'
})

const CancelMsg = styled('h2', {
    fontFamily: 'Halant Med'
})

const ContactInfo = styled('div', {
    fontFamily: 'Shree Reg'
})

// Social Media Icons
const SocialIcons = styled('div', {
    paddingTop: '15px',
})

const socialIconSize = '30px'
const YelpIcon = styled('img', {
    height: socialIconSize,
    width: socialIconSize
})

const FacebookIcon = withStyle(YelpIcon, {
    marginRight: '10px',
})

// Contact Info Icons
const PhoneInfo = styled('div', {
    display: 'flex',
    alignItems: 'center'
})

const LocationInfo = withStyle(PhoneInfo, {
    marginTop: '8px'
})

const Info = styled('h2', {
    display: 'inline'
})

const contactIconSize = '45px'
const PhoneIcon = styled('img', {
    height: contactIconSize,
    width: contactIconSize,
    marginRight: '10px'
})

const LocationIcon = withStyle(PhoneIcon, {
    
})

export default Contact