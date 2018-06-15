import React from 'react'
// import { Route } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* AppContainer component, this is our root element */
import AppContainer from './views/AppContainer.jsx'
import LandingPage from './views/landing/LandingPage.jsx'
import AboutPage from './views/about/AboutPage.jsx'
import Error404 from './views/error404/Error404.jsx'

/* import IntroRoutes */
// import IntroDesignPrinciples from './views/introduction/design-principles/IntroDesignPrinciples.jsx'


/* construct routes */
export default () => {
    return (
        <Router>
            <AppContainer>
                <Switch>
                    {/* Base Component */}
                    <Route path='/' exact component={LandingPage}/>

                    {/* Views Routes */}
                    <Route path='/about' exact component={AboutPage}/>

                    {/* No Matching Routes */}
                    <Route component={Error404}/>
                </Switch>
            </AppContainer>
        </Router>
    )
}
