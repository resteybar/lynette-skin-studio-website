import React from 'react'
import './Services.css'
import { styled } from 'styletron-react'

type ServiceValues = {
    serviceName: string;
    serviceDescription: string;
    servicePrice: string;
}

const Services: React.FC = () => {
    const services: ServiceValues[] = [
        {
            serviceName: 'Regular relaxing facial'.toUpperCase(), 
            serviceDescription: '15 minutes of face and décolleté massage for a deep cleaning promoting blood circulation',
            servicePrice: '$45'
        },

        {
            serviceName: 'Diamond micro.* facial'.toUpperCase(), 
            serviceDescription: '*Micrdermabrasion facial removes dead skin cells, lightens pigmentation, minimizes fine lines, and increases collagen for clear skin',
            servicePrice: '$50'
        },

        {
            serviceName: 'Ultrasonic scrubber facial'.toUpperCase(), 
            serviceDescription: 'Removes dirt, excess fat oils, whiteheads, blackheads, and noursihes skin',
            servicePrice: '$50'
        },

        {
            serviceName: 'Warts & Skin tag TREATMENT'.toUpperCase(), 
            serviceDescription: 'Removes warts and prevents spreading to other areas of the body',
            servicePrice: '$50+'
        },

        {
            serviceName: 'Backcial scrubbing'.toUpperCase(), 
            serviceDescription: 'Back massage that hydrates and removes dry and itchy skin',
            servicePrice: '$55'
        },

        {
            serviceName: 'High frequency treatment'.toUpperCase(), 
            serviceDescription: 'Makes skin more receptive to topical acne treatments that kill bacteria. Reduces fine lines, wrinkles, and increases blood flow',
            servicePrice: '$55'
        },

        {
            serviceName: 'Mesotherapy treatment'.toUpperCase(), 
            serviceDescription: 'Anti-aging treatment that extracts excess fat, balances tone and tightens skin',
            servicePrice: '$55'
        },

        {
            serviceName: 'RF treatment Facial'.toUpperCase(), 
            serviceDescription: 'Good for saggy neck, pigmentation, wrinkles, and tightens skin',
            servicePrice: '$55'
        },

        {
            serviceName: 'BIO-Active peel (3 sessions)'.toUpperCase(), 
            serviceDescription: 'A first layer skin peel that prevents skin pigmentation, hydrates, treats dark spots, promotes healthy skin renewal for a smoother younger feel ',
            servicePrice: '$200'
        },
      ]

      const renderServiceMenu = () =>{
          var renderedMenu = []

          for (let i = 0; i < services.length; i++){
              const name: string = services[i].serviceName
              const description: string = services[i].serviceDescription
              const price: string = services[i].servicePrice

              renderedMenu.push(
                <Service>
                    <div>
                        <StyledNamePrice>{name}</StyledNamePrice>
                        <StyledDescriptions>{description}</StyledDescriptions>
                    </div>
                    <StyledNamePrice>{price}</StyledNamePrice>
                </Service>
              )
          }

          return renderedMenu
      }
    return (
        <ServicesPage>
            <ServicesTitle>SERVICES</ServicesTitle>
            <GridLayout>
                { renderServiceMenu() }
            </GridLayout>
        </ServicesPage>
    )
}

// CSS
//  TO DO:
//      1. Wrap text after right before the end of the RIGHT side of the box
//    ✔ 2. Draw Lynette Brown line above the box (borderTop)
//      3. Apply Font Family to all 3 text (Title, Desc., Price)
//      4. Bold 2 Text (Title, Price)
//      5. Adjust Font Size to all 3 text (Title, Desc., Price)
//      6. Adjust spacing between all 3 text (Title, Desc., Price) - Eros
const StyledNamePrice = styled ('h1', {
    fontFamily: 'Shree Bold',
    fontSize: '14pt'
})

const StyledDescriptions = styled('h2', {
    fontFamily: 'Shree Reg',
    fontSize: '11pt',
    maxWidth: '500px',
    wordWrap: 'break-word',
    marginTop: '0px',
    marginBottom: '10px'
})

const LynetteBrown = '#862e08'
const pageVerticalPadding = '50'

const ServicesPage = styled('div', {
    backgroundColor: '#f4f2f5',

    // Space Between About Page & Services Page, Services & Product
    paddingTop: pageVerticalPadding + 'px',
    paddingBottom: pageVerticalPadding + 'px',

    // Applying here due to <h1> tags not changing Font
    fontFamily: 'Halant Light'
})

const Service = styled('div', {
    borderTop: '1px solid ' + LynetteBrown,
    paddingTop: '8px',

    // Puts Price at the bottom, while Title & Desc. on above container
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '10px',
})

const ServicesTitle = styled('h1', {
    // fontFamiy: 'Halant Light',
    textAlign: 'center',
    letterSpacing: '15px',
    fontSize: '40px',
    color: LynetteBrown
})

const GridLayout = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '90px',
    marginLeft: '50px',
    marginRight: '50px',
    marginTop: '25px',

    // Helps organize Services when website is getting minimized or on Mobile
    '@media screen and (max-width: 700px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    }
})

export default Services