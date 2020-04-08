import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'

interface HomeProps {
    renderLinks: JSX.Element[]
}

const Home: React.FC<HomeProps> = props => {
    return (
        <div id="Home" className='debug-border'>
            <NavBar renderLinks={props.renderLinks} />
            <h1>Home Page Showing</h1>
        </div>
    )
}

export default Home