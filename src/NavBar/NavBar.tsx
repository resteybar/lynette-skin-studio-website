import React from 'react'
import './NavBar.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home  from '../Home/Home'
import Product from '../Product/Product'

const NavBar: React.FC = () => {
    // Links in Nav Bar
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Product', path: '/product' }
    ]

    // Automate Rendering Links
    const renderLinks = () => {
        var renderedLinks = []

        for (let i = 0; i < links.length; i++)
            renderedLinks.push(
                <li>
                    <Link to={ links[i].path }>{ links[i].name }</Link>
                </li>
            )
        
        return renderedLinks
    }

    return (
        <div id="NavBar">
            <h1>Lynette's Skin Studio</h1>
            <BrowserRouter>
                <ul>
                    { renderLinks() }
                </ul>

                {/* Switch - Ensures 1 route displays @ once */}
                <Switch>
                    {/* exact = url has to be exactly with this */}
                    {/* w/o exact = as long as it has the substr of one of the paths */}
                    <Route path='/' exact component={ Home } />
                    <Route path='/product' exact component={ Product }/>

                    {/* No Matching Routes */}
                    <Route path='/' render={() => <div>404</div>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default NavBar