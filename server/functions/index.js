const functions = require('firebase-functions')
const firebase = require('firebase-admin')
const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

firebase.initializeApp(functions.config().firebase)

const app = express()
const router = require('./routes/index')()
app.use(helmet())

app.use(function (req, res, next) {
    res.setHeader('X-Powered-By', 'Not Your App v6.6.6')
    next()
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', router)

// error handling
app.use((req, res, next) => {
    console.log('404 error - resource not found')
    res.status(404).redirect('/404')
    next()
})

exports.api = functions.https.onRequest(app)
