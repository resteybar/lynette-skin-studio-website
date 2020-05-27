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
            <Details>
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
                        <a href='https://goo.gl/maps/X8CDzALiztyKY4aU6' target='_blank' rel="noopener noreferrer" >
                            <LocationIcon src={ locationImage } />
                        </a>
                        <AddressInfo href='https://goo.gl/maps/X8CDzALiztyKY4aU6' target='_blank' rel="noopener noreferrer" >
                            <Info>287 Carmel Ave, Marina, CA 93933</Info>
                        </AddressInfo>
                    </LocationInfo>
                </ContactInfo>

                <CancelMsg>
                    *For any cancellations, please notify at least 
                    24 hours in advance as courtesy.
                </CancelMsg>
            </Details>

            {/* Business Hours */}
            <BusinessHours>
                <BusinessHoursMsg>OPERATING HOURS</BusinessHoursMsg>

                <TimeFrame>
                    <Days>
                        <Day>MON</Day>
                        <Day>TUE</Day>
                        <Day>WED</Day>
                        <Day>THU</Day>
                        <Day>FRI</Day>
                        <Day>SAT</Day>
                        <Day>SUN</Day>
                    </Days>
                    <Times>
                        <Time>9:30 AM - 6:00 PM</Time>
                        <Time>9:30 AM - 6:00 PM</Time>
                        <Time>9:30 AM - 6:00 PM</Time>
                        <Time>9:30 AM - 6:00 PM</Time>
                        <Time>9:30 AM - 6:00 PM</Time>
                        <Time>9:30 AM - 6:00 PM</Time>
                        <ClosedTime>CLOSED</ClosedTime>
                    </Times>
                </TimeFrame>

                {/* FB & Yelp Icons */}
                <SocialIcons>
                    <a href={ facebookLink } target='_blank' rel='noopener noreferrer'>
                        <FacebookIcon src={ facebookImage } />
                    </a>
                    <a href={ yelpLink } target='_blank' rel='noopener noreferrer'>
                        <YelpIcon src={ yelpImage } />
                    </a>
                </SocialIcons>
            </BusinessHours>
        </ContactPage>
    )
}

const ContactPage = styled('div', {
    color: '#862e08',
    backgroundColor: '#dabe8e',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: '50px',
    paddingBottom: '50px',
    '@media screen and (max-width: 780px)': {
        flexWrap: 'wrap',
    },
})

// Details
const Details = styled('div', {
    marginLeft: '60px',
    marginRight: '50px',

    // Centers Phone #, Address, Appointment Info when website gets smaller
    '@media screen and (max-width: 780px)': {
        marginRight: '10%',
        marginLeft: '10%',
    },
})

//  - Appointment Details
const AppointmentMsg = styled('h2', {
    fontFamily: 'Halant Med'
})

const CancelMsg = styled('h3', {
    fontFamily: 'Halant Med',
    fontWeight: 100,
    wordWrap: 'break-word',
    marginTop: '5px'
})

//  - Contact Info Icons
const ContactInfo = styled('div', {
    fontFamily: 'Shree Reg',
    marginTop: '10px',
})

const PhoneInfo = styled('div', {
    display: 'flex',
    alignItems: 'center',
})

const LocationInfo = withStyle(PhoneInfo, {
    marginTop: '8px',
})

const Info = styled('h3', {
    display: 'inline'
})

const AddressInfo = styled('a', {
    // Hides Blue Color from links
    color: 'inherit'
})

const contactIconSize = '45px'
const PhoneIcon = styled('img', {
    height: contactIconSize,
    width: contactIconSize,
    marginRight: '10px'
})

const LocationIcon = withStyle(PhoneIcon, {
    
})

// Business Hours
const BusinessHours = styled('div', {
    marginRight: '60px',

    '@media screen and (max-width: 780px)': {
        marginLeft: '10%',
        marginTop: '40px',
        marginRight: '10%',
    },
})

const BusinessHoursMsg = styled('h2', {
    fontFamily: 'Halant Med',
    textAlign: 'center',

    '@media screen and (max-width: 780px)': {
        textAlign: 'left'
    },
})

//  - Days + Times
const TimeFrame = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
})

//      - Days
const Days = styled('div', {
    marginRight: '50px'
})

const Day = styled('h4', {
    fontFamily: 'Shree Reg'
})

//      - Times
const Times = styled('div', {
    fontFamily: 'Shree Reg',
    whiteSpace: 'nowrap'
})

const Time = styled('h4', {

})

const ClosedTime = withStyle(Time, {
    textAlign: 'right'    
})

//  - Social Media Icons
const SocialIcons = styled('div', {
    paddingTop: '15px',
    textAlign: 'right',

    '@media screen and (max-width: 780px)': {
        textAlign: 'left'
    },
})

const socialIconSize = '30px'
const YelpIcon = styled('img', {
    height: socialIconSize,
    width: socialIconSize
})

const FacebookIcon = withStyle(YelpIcon, {
    marginRight: '10px',
})

export default Contact