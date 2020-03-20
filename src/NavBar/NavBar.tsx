import React from 'react'
import './NavBar.css'

const NavBar: React.FC = () => {
    // Links in Nav Bar
    const links = [
        'Home',
        'Product'
    ]

    // Automate Rendering Links
    const renderLinks = () => {
        var renderedLinks = []

        for (let i = 0; i < links.length; i++)
            renderedLinks.push(
                <li key={ i }>
                    <a href={ '#' + links[i] }>{ links[i] }</a>
                </li>
            )
        
        return renderedLinks
    }

    return (
        <div id="NavBar">
            <h1>Lynette's Skin Studio</h1>
            <ul>
                { renderLinks() }
            </ul>

                {/* Switch - Ensures 1 route displays @ once
                <BrowserRouter>
                <Switch>
                    exact = url has to be exactly with this
                    w/o exact = as long as it has the substr of one of the paths
                    <Route path='/' exact component={ Home } />
                    <Route path='/product' exact component={ Product }/>
                    <Route path='/:id' exact component={ Home }/>

                    No Matching Routes
                    <Route path='/' render={() => <div>404</div>} />
                </Switch> 
                </BrowserRouter>
                */}
        </div>
    )
}

export default NavBar