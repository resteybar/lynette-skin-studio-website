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

type LinkValue = {
    name: string;
    path: string;
    mobileAdjustment: number;
    browserAdjustment: number;
}

interface GoalsProps {
    links: LinkValue[],
    scrollToPage(id: string, mobileAdjustment: number, browserAdjustment: number): void
}

const Goals: React.FC<GoalsProps> = props => {

    const checkNames: Map<string, boolean> = new Map([
        ['Services', true],
        ['Contact', true],
        ['Products', true],
    ])

    const linkNames: string[] = [
        'Services',
        'Contact',
        'Products'
    ]

    const getButtonLinks = (): Map<string, LinkValue> => {
        let buttonLinks: Map<string, LinkValue> = new Map()

        for (let i = 0; i < props.links.length; i++) {
            const name: string = props.links[i].name

            if (checkNames.has(name)) 
                buttonLinks.set(name, props.links[i])
        }

        return buttonLinks
    }

    const renderGoals = (): JSX.Element[] => {
        var renderedMenu: JSX.Element[] = []

        const buttonLinks: Map<string, LinkValue> = getButtonLinks()

        for (let i = 0; i < LynettesGoals.length; i++) {
            const goalName: string = LynettesGoals[i].goalName
            const goalDescription: string = LynettesGoals[i].goalDescription
            const goalButtonText: string = LynettesGoals[i].goalButtonText

            const link: LinkValue | undefined = buttonLinks.get(linkNames[i])

            if (link) {
                const path = link.path
                const mobileAdj = link.mobileAdjustment
                const browserAdj = link.browserAdjustment

                renderedMenu.push(
                    <Goal key={ i }>
                        <div>
                            <GoalName>{ goalName }</GoalName>
                            <GoalDescription>{ goalDescription }</GoalDescription>
                        </div>
    
                        <GoalButtonText
                            onClick={ () => props.scrollToPage(path, mobileAdj, browserAdj) } 
                        >
                            { goalButtonText }
                        </GoalButtonText>
                    </Goal>
                )
            }
        }

        return renderedMenu
    }

    return (
        <GoalsPage>
            <AboutTitle>ABOUT</AboutTitle>
            {/* Goals */}
            <GridLayout>
                { renderGoals() }
            </GridLayout>
        </GoalsPage>
    )
}

// CSS
const LynetteBrown = '#862e08'

const GoalsPage = styled('div', {
    paddingTop: '40px',
    marginBottom: '-90px',
})

const AboutTitle = styled('h1', {
    fontFamily: 'Halant Light',
    textAlign: 'center',
    letterSpacing: '13px',
    fontSize: '40px',
    color: LynetteBrown,
    marginTop: '30px',
    marginBottom: '25px',
})

const Goal = styled('div', {
    textAlign: 'center',

    // Organizing title, description, & button
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

const GoalName = styled('h2', {
    fontFamily: 'Shree Bold',
    letterSpacing: '4px',
    borderBottom: '1px solid ' + LynetteBrown,
    fontSize: '18pt',
})

const GoalDescription = styled('p', {
    marginTop: '20px',
    fontFamily: 'Shree Reg',
    marginBottom: '25px',
})

const GoalButtonText = styled('button', {
    // Font Related
    fontFamily: 'Shree Reg',
    letterSpacing: '1px',

    // Colors
    border: '1px solid ' + LynetteBrown,
    color: LynetteBrown,
    backgroundColor: 'transparent',

    // Centered Menu
    marginLeft: 'auto',
    marginRight: 'auto',

    // Size of box
    height: '45px',
    width: '150px',
})

const GridLayout = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '100px',
    gridRowGap: '50px',

    // Center Menu
    marginLeft: 'auto',
    marginRight: 'auto',

    // Ensuring size does not maximize and minimize too much
    minWidth: '400px',
    maxWidth: '1200px',

    // Helps organize Services when website is getting minimized or on Mobile
    '@media screen and (max-width: 1250px)': {
        marginLeft: '50px',
        marginRight: '50px',
    },

    '@media screen and (max-width: 900px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        maxWidth: '700px',
        minWidth: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    '@media screen and (max-width: 760px)': {
        marginLeft: '30px',
        marginRight: '30px',
    },
})

export default Goals