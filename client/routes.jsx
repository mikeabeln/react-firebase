import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* AppContainer component, this is our root element */
import App from './views/App.jsx'
import LandingPage from './views/landing/LandingPage.jsx'
import AboutPage from './views/about/AboutPage.jsx'
import LoginPage from './views/login/LoginPage.jsx'
import SignupPage from './views/signup/SignupPage.jsx'

import Error404 from './views/error404/Error404.jsx'


/* construct routes */
export default () => {
    return (
        <Router>
            <App>
                <Switch>
                    {/* Base Component */}
                    <Route path='/' exact component={LandingPage}/>

                    {/* Views Routes */}
                    <Route path='/about' exact component={AboutPage}/>
                    <Route path='/login' exact component={LoginPage}/>
                    <Route path='/signup' exact component={SignupPage}/>

                    {/* No Matching Routes */}
                    <Route component={Error404}/>
                </Switch>
            </App>
        </Router>
    )
}
