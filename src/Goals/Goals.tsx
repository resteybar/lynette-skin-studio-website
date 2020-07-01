import React from 'react'
import './Goals.css'
import { styled } from 'styletron-react'

type GoalValues = {
    goalName: string;
    goalDescription: string;
    goalButtonText: string;
}

const LynettesGoals: GoalValues[] = [
    {
        goalName: 'AFFORDABLE',
        goalDescription: 'We strive to offer the best prices in the Monterey Bay Area to our customers.',
        goalButtonText: 'SEE SERVICES'
    },
    {
        goalName: 'FACIAL',
        goalDescription: 'We offer a unique experience to clients, by providing them beauty and relaxation of Lynette’s facial treatments.',
        goalButtonText: 'SCHEDULE NOW'
    },
    {
        goalName: 'CARE',
        goalDescription: 'We take pride in caring and building trust with our customers in order to provide a rejuvenating experience.',
        goalButtonText: 'SEE PRODUCTS'
    }
]

const Goals: React.FC = () => {

    const renderGoals = (): JSX.Element[] => {
        var renderedMenu: JSX.Element[] = []

        for (let i = 0; i < LynettesGoals.length; i++){
            const goalName: string = LynettesGoals[i].goalName
            const goalDescription: string = LynettesGoals[i].goalDescription
            const goalButtonText: string = LynettesGoals[i].goalButtonText

            renderedMenu.push(
                <Goal key={ i }>
                    <GoalName>{ goalName }</GoalName>
                    <GoalDescription>{ goalDescription }</GoalDescription>
                    <GoalButtonText>{ goalButtonText }</GoalButtonText>
                </Goal>
            )
        }

        return renderedMenu
    }

    return (
        <div>
            {/* Goals */}
            <GridLayout>
                { renderGoals() }
            </GridLayout>
        </div>
    )
}

// CSS
const LynetteBrown = '#862e08'

const Goal = styled('div', {
    textAlign: 'center',
})

const GoalName = styled('h2', {
    
})

const GoalDescription = styled('h2', {
    
})

const GoalButtonText = styled('button', {
    border: '1px solid' + LynetteBrown,
    color: LynetteBrown,
    fontFamily: 'Shree Reg',
    letterSpacing: '1px',

    // Same sizing as the 'Contact Us' button in the 'Home' page
    height: '60px',
    width: '200px',
})

const GridLayout = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '50px',
    gridRowGap: '30px',

    // Center Menu
    marginLeft: 'auto',
    marginRight: 'auto',

    // Ensuring size does not maximize and minimize too much
    minWidth: '400px',
    maxWidth: '1000px',

    // Helps organize Services when website is getting minimized or on Mobile
    '@media screen and (max-width: 900px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        maxWidth: '700px',
        minWidth: '200px',
    },
})

export default Goals