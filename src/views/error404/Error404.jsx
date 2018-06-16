import * as React from 'react'
import { Redirect } from 'react-router-dom'

// import './LandingPage.scss'

class Error404 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error404: false,
            timer: 2
        }
    }

    tick() {
        this.setState({
            timer: this.state.timer - 1
        })
    }

    componentDidMount() {
        setTimeout(() => this.setState({ error404: true }), 2500)
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {

        if (this.state.error404) {
            return <Redirect to='/'/>
        }
        return (
	        <div>
	            {/* put 404 page content here */}
	            <p>404: Page Not Found! You will be redirected in {this.state.timer} second(s).</p>
	        </div>

        )
    }
}

export default Error404
