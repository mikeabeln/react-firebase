import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.scss'

// import createBrowserHistory from 'history/createBrowserHistory'

import Routes from './routes.jsx'

// const history = createBrowserHistory()

// history.listen(() => {
//     window.scrollTo(0, 0)
//     ReactDOM.renderApp()
// })

// console.log(history)


export const renderApp = () => {
    ReactDOM.render((<Routes/>), document.getElementById('root'))
}

renderApp()

