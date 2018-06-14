import * as React from 'react'
import './AppContainer.scss'


const AppContainer = ({ children }) => {
    return (
        <div className='appContainer'>
            {/* put header component here */}
            <main className='main'>
                {children}
            </main>
        </div>
    )
}

export default AppContainer
