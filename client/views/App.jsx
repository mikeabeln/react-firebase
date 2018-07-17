import * as React from 'react'
import './App.scss'

import Header from './../components/Header/Header.jsx'
import Footer from './../components/Footer/Footer.jsx'

const App = ({ children }) => {
    return (
        <div className='appContainer'>
            <Header />
            <main className='main'>{children}</main>
            <Footer />
        </div>
    )
}

export default App
