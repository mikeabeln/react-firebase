import * as React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './LoginPage.scss'

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        // console.log(this.state)
        axios.post('/api/login', this.state).then((response) => {
            console.log(response)
        })
        event.preventDefault()
    }

    render() {
        return (
            <div className='Landing_Container'>
                {/* put signup page content here */}
                <p className='paragraph'>Signup Page</p>
                <Link to='/'>Landing</Link>
                <Link to='/signup'>Sign Up</Link>
                <form method='POST' onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type='text' name='username' value={this.state.username} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Password:
                        <input type='password' name='password' value={this.state.password} onChange={this.handleInputChange}/>
                    </label>
                    <input type='submit' value='Log In' />
                </form>
            </div>
        )
    }
}

export default LoginPage
