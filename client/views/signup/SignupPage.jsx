import * as React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './SignupPage.scss'

class SignupPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: 'test',
            lastname: 'user',
            username: 'testuser',
            password: 'testpassword',
            email: 'test@testemail.com'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount() {
        axios.get('/api/about').then((response) => {
            this.setState({ data: response.data.success })
        })
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
        console.log(this.state)
        axios.post('/api/signup', this.state).then((response) => {
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
                <Link to='/login'>Log In</Link>
                <form method='POST' onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Last Name:
                        <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Username:
                        <input type='text' name='username' value={this.state.userName} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Password:
                        <input type='password' name='password' value={this.state.password} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Email Address:
                        <input type='email' name='email' value={this.state.email} onChange={this.handleInputChange}/>
                    </label>
                    <input type='submit' value='Sign Up' />
                </form>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

export default SignupPage
