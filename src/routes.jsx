import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

/* AppContainer component, this is our root element */
import AppContainer from './views/AppContainer.jsx'
import LandingPage from './views/landing/LandingPage.jsx'

/* import IntroRoutes */
// import IntroDesignPrinciples from './views/introduction/design-principles/IntroDesignPrinciples.jsx'


/* construct routes */
export default () => {
    return (
        <BrowserRouter>
            <AppContainer>

                {/* Base Component and Root */}
                <Route path='/' exact={true} component={LandingPage}/>

                {/* Introduction Section */}
                {/* <Route path='/introduction/design-principles' component={IntroDesignPrinciples}/> */}

            </AppContainer>
        </BrowserRouter>
    )
}
