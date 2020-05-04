import React from 'react'
// import './Services.css'
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
            serviceDescription: 'Removes dead skin cells, lightens pigmentation, minimizes fine lines, and increases collagen for clear skin',
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
                <li>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                    <h3>{price}</h3>
                </li>
              )
          }

          return renderedMenu
      }
    return (
        <div id="Services">
            <ul>
                {renderServiceMenu()}
            </ul>
        </div>
    )
}

export default Services