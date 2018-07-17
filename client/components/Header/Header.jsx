import * as React from 'react'
import './Header.scss'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header className='header'>
                {/* put header content here */}
                <p>Header</p>
            </header>
        )
    }
}

export default Header
