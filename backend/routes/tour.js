const router = require('express').Router()
const db = require('../dbConfig')

router.route('/:IDDiaDiem').get((req, res) => {
    db.connect().then(() => {
        //simple query
        const queryString =
            'select * FROM TOUR WHERE IDDiaDiem = ' + req.params.IDDiaDiem;

        db.request().query(queryString, (err, result) => {
            if (err)
                console.log(err)
            else {
                res.send(result.recordset)
            }
        })
    })
})

//GET hình ảnh
router.route('/HinhAnh/:IDTour').get((req, res) => {
    db.connect().then(() => {
        const queryString =
            'select TOP 1 * FROM HINHANHTOUR WHERE IDTour = ' + req.params.IDTour;

        db.request().query(queryString, (err, result) => {
            if (err)
                console.log(err)
            else {
                res.send(result.recordset)
            }
        })
    })
})
module.exports = router