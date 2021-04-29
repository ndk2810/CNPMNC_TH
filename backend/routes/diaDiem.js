const router = require('express').Router()
const db = require('../dbConfig')

router.route('/').get((req, res) => {
    db.connect().then(() => {
        //simple query
        const queryString = 'select * FROM DIADIEM';
        db.request().query(queryString, (err, result) => {
            if (err)
                console.log(err)
            else {
                res.send(result.recordset)
            }
        })
    })
})

router.route('/add').post((req, res) => {
    db.connect().then(() => {
        const TenDiaDiem = req.body.tenDiaDiem
        const HinhAnhDiaDiem = req.body.hinhAnh
        //simple query
        const queryString = `DECLARE @str VARCHAR(MAX);
        SET @str = '${HinhAnhDiaDiem}';
        INSERT INTO DIADIEM(TenDiaDiem, HinhAnhDiaDiem)
        VALUES (N'${TenDiaDiem}', cast(N'' as xml).value('xs:base64Binary(sql:variable("@str"))', 'VARBINARY(MAX)'))`;

        db.request().query(queryString, (err, result) => {
            if (err)
                console.log(err)
            else {
                res.send(result.recordset)
            }
        })
    })
})

router.route('/remove').post((req, res) => {
    db.connect().then(() => {
        const IDDiaDiem = req.body.IDDiaDiem
        //simple query
        const queryString = `DELETE FROM DIADIEM WHERE IDDiaDiem = ` + IDDiaDiem;

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