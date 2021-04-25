const router = require('express').Router()
const db = require('../dbConfig')

router.route('/:IDDiaDiem').get((req, res) => {
    db.connect().then(() => {
        //simple query
        var queryString = 'select * FROM TOUR WHERE IDDiaDiem = ' + req.params.IDDiaDiem;
        db.request().query(queryString, (err, result) => {
            if (err)
                console.log(err)
            else {
                console.log(result)
                res.send(result.recordset)
            }
        })
    })
})

module.exports = router