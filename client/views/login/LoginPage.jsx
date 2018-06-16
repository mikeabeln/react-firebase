import * as React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import './LoginPage.scss'

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        // axios.get('/api/about').then((response) => {
        //     this.setState({ data: response.data.success })
        // })
    }

    render() {
        return (
            <div className='Landing_Container'>
                {/* put landing page content here */}
                <p className='paragraph'>Login Page</p>
                <Link to='/'>Landing</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        )
    }
}

export default LoginPage
