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
                        <a href='https://goo.gl/maps/X8CDzALiztyKY4aU6' target='_blank'>
                            <LocationIcon src={ locationImage } />
                        </a>
                        <AddressInfo href='https://goo.gl/maps/X8CDzALiztyKY4aU6' target='_blank'>
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
    flexWrap: 'wrap',
})

// Business Hours
const BusinessHours = styled('div', {
    paddingRight: '60px',
    
    '@media screen and (max-width: 968px)': {
        paddingTop: '30px',
        paddingLeft: '60px',
    },
})

const BusinessHoursMsg = styled('h2', {
    fontFamily: 'Halant Med',
    textAlign: 'center'
})

const TimeFrame = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
})

const Days = styled('div', {
    marginRight: '20px'
})

const Day = styled('h4', {
    fontFamily: 'Shree Reg'
})

const Times = styled('div', {
    fontFamily: 'Shree Reg'
})

const Time = styled('h4', {

})

const ClosedTime = withStyle(Time, {
    textAlign: 'right'    
})

// Details
const Details = styled('div', {
    paddingLeft: '60px',
    paddingRight: '50px',
})

// Appointment Details
const AppointmentMsg = styled('h2', {
    fontFamily: 'Halant Med'
})

const CancelMsg = styled('h3', {
    fontFamily: 'Halant Reg',
    fontWeight: 100,
    wordWrap: 'break-word',
    marginTop: '10px'
})

// Social Media Icons
const SocialIcons = styled('div', {
    paddingTop: '15px',
    textAlign: 'right'
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
const ContactInfo = styled('div', {
    fontFamily: 'Shree Reg',
    marginTop: '10px'
})
const PhoneInfo = styled('div', {
    display: 'flex',
    alignItems: 'center'
})

const LocationInfo = withStyle(PhoneInfo, {
    marginTop: '8px',
})

const Info = styled('h3', {
    display: 'inline'
})

const AddressInfo = styled('a', {
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

export default Contact