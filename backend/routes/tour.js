const router = require('express').Router()
let Tour = require('../models/tour.model')

router.route('/').get((req, res) => {
    Tour.find()
        .then(tours => res.json(tours))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:tenDiaDiem').get((req, res) => {
    Tour.find({ diaDiem: req.params.tenDiaDiem })
        .then(tours => res.json(tours))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const tenTour = req.body.tenTour
    const diaDiem = req.body.diaDiem
    const gia = req.body.gia
    const diemNoiBat = req.body.diemNoiBat
    const gioiThieu = req.body.gioiThieu
    const lichTrinh = req.body.lichTrinh
    const hinhAnh = req.body.hinhAnh

    const newTour = new Tour({ tenTour, diaDiem, gia, diemNoiBat, gioiThieu, lichTrinh, hinhAnh })

    newTour.save()
        .then(() => console.log('Tour added !'))
        .catch(err => res.status(400).json('Error ' + err))

    res.send('Done added ' + tenTour + ' to database')
})

module.exports = router