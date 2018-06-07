import React from 'react'
import { Route } from 'react-router'
import { Router } from 'react-router-dom'

/* Styleguide component, this is our root element */
import Styleguide from './views/Styleguide.jsx'

/* import IntroRoutes */
import IntroDesignPrinciples from './views/introduction/design-principles/IntroDesignPrinciples.jsx'


/* construct routes */
export default (props) => {
    return (
        <Router history={props.history}>
            <div>
                <Styleguide toggleMenu={props.toggleMenu} render={props.render} menuOpen={props.menuOpen}>

                    {/* Base Component and Root */}
                    {/* <Route path='/' exact={true} component={IntroOverview}/> */}

                    {/* Introduction Section */}
                    <Route path='/introduction/design-principles' component={IntroDesignPrinciples}/>

                </Styleguide>
            </div>
        </Router>
    )
}
