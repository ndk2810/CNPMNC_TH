const router = require('express').Router()
let diaDiem = require('../models/diaDiem.model')

router.route('/').get((req, res) => {
    diaDiem.find()
        .then(diaDiems => res.json(diaDiems))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const tenDiaDiem = req.body.tenDiaDiem
    const hinhAnh = req.body.hinhAnh

    const newDiaDiem = new diaDiem({ tenDiaDiem, hinhAnh })

    newDiaDiem.save()
        .then(() => console.log('DiaDiem added !'))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/remove').post((req, res) => {
    const tenDiaDiem = req.body.tenDiaDiem

    diaDiem.deleteOne({ tenDiaDiem: tenDiaDiem }, function (err) {
        if (err)
            console.log(err);
        else
            console.log('Delete ' + tenDiaDiem + ' successful')
    })
})

module.exports = router