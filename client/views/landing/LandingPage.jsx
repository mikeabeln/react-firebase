import * as React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.scss'

class LandingPage extends React.Component {
    render() {
	    return (
	        <div className='Landing_Container'>
	            {/* put landing page content here */}
	            <p className='Landing_Paragraph'>Landing Page</p>
	            <Link to='/404'>404</Link>
	            <Link to='/about'>About</Link>
	            <Link to='/login'>Login</Link>
	            <Link to='/signup'>Signup</Link>
	        </div>
	    )
    }
}

export default LandingPage
