const router = require('express').Router()
let diaDiem = require('../models/diaDiem.model')

router.route('/').get((req, res) => {
    diaDiem.find()
        .then(diaDiems => res.json(diaDiems))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router