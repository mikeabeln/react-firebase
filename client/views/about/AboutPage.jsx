import * as React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AboutPage.scss'

class AboutPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        axios.get('/api/test/about').then((response) => {
            console.log('requesting api/test/about', response)
            this.setState({ data: response.data.msg })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className='Landing_Container'>
                {/* put landing page content here */}
                <p className='paragraph'>About Page</p>
                <Link to='/test'>Test</Link>
                <Link to='/'>Landing</Link>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

export default AboutPage
