import * as React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.scss'

class LandingPage extends React.Component {
    render() {
	    return (
	        <div className='landingContainer'>
	            {/* put landing page content here */}
	            <p className='paragraph'>Landing Page</p>
	            <Link to='/test'>Test</Link>
	            <Link to='/about'>About</Link>
	        </div>
	    )
    }
}

export default LandingPage
