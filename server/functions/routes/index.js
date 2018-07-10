const express = require('express')
const firebase = require('firebase-admin')
const router = express.Router()

const rootRef = firebase.database().ref().child('react')
// console.log(rootRef)
const speedRef = rootRef.child('speed')
// console.log(speedRef)
speedRef.once('value', (snap) => {
  	console.log(snap.val())
})


module.exports = function () {

    router.get('/test/about', function (req, res) {
        res.json({ msg: 'success' })
    })

    return router
}
