import * as React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AboutPage.scss'

class LandingPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        axios.get('/api/about').then((response) => {
            this.setState({ data: response.data.success })
        })
    }

    render() {
        return (
            <div className='landingContainer'>
                {/* put landing page content here */}
                <p className='aboutParagraph'>About Page</p>
                <Link to='/test'>Test</Link>
                <Link to='/'>Landing</Link>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

export default LandingPage
