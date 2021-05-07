const router = require('express').Router()
const db = require('../dbConfig')

//GET tất cả các tours
router.route('/').get((req, res) => {
    db.connect().then(() => {
        //simple query
        const queryString =
            'select * FROM TOUR';

        db.request().query(queryString, (err, result) => {
            err ? console.log(err) : res.send(result.recordset)
        })
    })
})
//GET tour bằng IDTour
router.route('/chiTiet/:IDTour').get((req, res) => {
    db.connect().then(() => {
        const queryString =
            'select * FROM TOUR WHERE IDTour = ' + req.params.IDTour;

        db.request().query(queryString, (err, result) => {
            err ? console.log(err) : res.send(result.recordset)
        })
    })
})
//GET các tour bằng IDDiaDiem
router.route('/:IDDiaDiem').get((req, res) => {
    console.log(req.params.IDDiaDiem)
    db.connect().then(() => {
        //simple query
        const queryString =
            'select * FROM TOUR WHERE IDDiaDiem = ' + req.params.IDDiaDiem;

        db.request().query(queryString, (err, result) => {
            err ? console.log(err) : res.send(result.recordset)
        })
    })
})


//GET hình ảnh bìa của 1 tour
router.route('/HinhAnh/:IDTour').get((req, res) => {
    db.connect().then(() => {
        const queryString =
            'select TOP 1 * FROM HINHANHTOUR WHERE IDTour = ' + req.params.IDTour;

        db.request().query(queryString, (err, result) => {
            err ? console.log(err) : res.send(result.recordset)
        })
    })
})

//Thêm tour
router.route('/add').post((req, res) => {
    db.connect().then(() => {
        const DiaDiem = req.body.DiaDiem
        const TheLoai = req.body.TheLoai
        const TenTour = req.body.TenTour
        const DiaChiTour = req.body.DiaChiTour
        const DiemNoiBat = req.body.DiemNoiBat
        const LichTrinh = req.body.LichTrinh
        const NoiDung = req.body.NoiDung
        const DoDai = req.body.DoDai

        //Query
        const queryString =
            `INSERT INTO TOUR(IDDiaDiem, IDTheLoaiTour, TenTour, DiaChiTour, DiemNoiBat, LichTrinh, NoiDungTour, DoDai) 
        VALUES(${DiaDiem}, ${TheLoai}, N'${TenTour}', N'${DiaChiTour}', N'${DiemNoiBat}', N'${LichTrinh}', N'${NoiDung}', ${DoDai})`

        db.request().query(queryString, (err, result) => {
            err ? console.log(err) : res.send(result.recordset)
        })
    })
})

//Xoá tour
router.route('/remove').post((req, res) => {
    db.connect().then(() => {
        const IDTour = req.body.IDTour
        //simple query
        const queryString = `DELETE FROM TOUR WHERE IDTour = ` + IDTour;

        db.request().query(queryString, (err, result) => {
            err ? console.log(err) : res.send(result.recordset)
        })
    })
})

//Thêm 1 hình ảnh vào tour
router.route('/insertPic').post((req, res) => {
    db.connect().then(() => {
        const IDTour = req.body.IDTour
        const HinhAnhDiaDiem = req.body.hinhAnh
        //simple query
        const queryString = `DECLARE @str VARCHAR(MAX);
        SET @str = '${HinhAnhDiaDiem}';
        INSERT INTO HINHANHTOUR(IDTour, HinhAnh)
        VALUES (${IDTour}, cast(N'' as xml).value('xs:base64Binary(sql:variable("@str"))', 'VARBINARY(MAX)'))`;

        db.request().query(queryString, (err, result) => {
            err ? console.log(err) : res.send(result.recordset)
        })
    })
})

//Sửa thông tin tour
router.route('/modifyTour').post((req, res) => {
    db.connect().then(() => {
        const IDTour = req.body.IDTour
        const TenTour = req.body.TenTour
        const DiaChiTour = req.body.DiaChiTour
        const DiemNoiBat = req.body.DiemNoiBat
        const LichTrinh = req.body.LichTrinh
        const NoiDung = req.body.NoiDung
        const DoDai = req.body.DoDai

        const queryString = `UPDATE [dbo].[TOUR]
        SET 
            [TenTour] = N'${TenTour}'
           ,[DiaChiTour] = N'${DiaChiTour}'
           ,[DiemNoiBat] = N'${DiemNoiBat}'
           ,[LichTrinh] = N'${LichTrinh}'
           ,[NoiDungTour] = N'${NoiDung}'
           ,[DoDai] = ${DoDai}
        WHERE IDTour = ${IDTour}`

        db.request().query(queryString, (err, result) => {
            err ? console.log(err) : res.send(result.recordset)
        })
    })
})

//Xoá tất cả hình ảnh tour
router.route('/removeAllPic').post((req, res) => {
    db.connect().then(() => {
        const IDTour = req.body.IDTour
        //simple query
        const queryString = `DELETE FROM HINHANHTOUR WHERE IDTour = ` + IDTour

        db.request().query(queryString, (err, result) => {
            err ? console.log(err) : res.send(result.recordset)
        })
    })
})


module.exports = router;