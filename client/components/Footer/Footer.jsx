import * as React from 'react'
import './Footer.scss'

class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <footer className='footer'>
                {/* put footer content here */}
                <p>Footer</p>
            </footer>
        )
    }
}

export default Footer
