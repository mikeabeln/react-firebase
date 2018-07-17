const functions = require('firebase-functions')
const firebase = require('firebase-admin')
const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const firebaseApp = firebase.initializeApp(functions.config().firebase)

console.log(firebaseApp.options_.projectId)

const api = express()
const router = require('./routes/index')()
api.use(helmet())

api.use(function (req, res, next) {
    res.setHeader('X-Powered-By', 'Not Your Api v6.6.6')
    next()
})

api.use(logger('dev'))
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: false }))
api.use(cookieParser())

api.use('/api', router)

// error handling
api.use((req, res, next) => {
    console.log('404 error - resource not found')
    res.status(404).redirect('/404')
    next()
})

exports.api = functions.https.onRequest(api)
