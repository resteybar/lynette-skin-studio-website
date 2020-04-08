import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'

interface HomeProps {
    renderLinks: JSX.Element[]
}

const Home: React.FC<HomeProps> = props => {
    return (
        <div id="Home" className='debug-border'>
            <div id='test'>
                <NavBar renderLinks={props.renderLinks} />
                <h1>Home Page Showing</h1>
                {/* <img src='../images/home_background.jpg' height='42px' width='42px'/> */}
            </div>
        </div>
    )
}

export default Home