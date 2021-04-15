const router = require('express').Router()
let tour = require('../models/tour.model')

router.route('/').get((req, res) => {
    tour.find()
        .then(tours => res.json(tours))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router