import * as React from 'react'
import { Redirect } from 'react-router-dom'

// import './LandingPage.scss'

class Error404 extends React.Component {

    render() {
	    return (
	        <div>
	            {/* put 404 page content here */}
	            <p>404 Not Found</p>
	            <Redirect to='/'/>
	        </div>
	    )
    }
}

export default Error404
