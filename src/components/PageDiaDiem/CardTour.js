import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CardTour = ({ tour }) => {
    //GET Hình ảnh bìa của tour
    let [HinhAnh, setHinhAnh] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tour/hinhAnh/" + tour.IDTour)
            .then(data => {
                return data.json();
            })
            .then(data => {
                if (data.length > 0)
                    setHinhAnh(data[0])
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    //GET thể loại tour
    let [TheLoaiTour, setTheLoaiTour] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/theLoaiTour/" + tour.IDTheLoaiTour)
            .then(data => {
                return data.json();
            })
            .then(data => {
                if (data.length > 0)
                    setTheLoaiTour(data[0])
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    //Decode hình ảnh từ binary thành base64 để hiển thị
    let src = 'https://semantic-ui.com/images/wireframe/white-image.png'
    if (HinhAnh.HinhAnh) {
        let hinhAnhBase64 = Buffer.from(HinhAnh.HinhAnh).toString('base64')
        src = `data:image/jpeg;base64,${hinhAnhBase64}`
    }

    const linkTo = "/thongTinTour?IDTour=" + tour.IDTour + "&TenTheLoai=" + TheLoaiTour.TenTheLoaiTour

    return (
        <div className="card-tour">
            <img className="card-tour-img" alt="#" src={src} />
            <div className="card-tour-info">
                <p className="card-tour-type">Tour</p>
                <p className="card-tour-theLoai">{TheLoaiTour.TenTheLoaiTour}</p>
                <Link to={linkTo}>
                    <h1 className="card-tour-info-tenTour">{tour.TenTour}</h1>
                </Link>
                <img className="card-tour-locationImg" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/e437c4bab99263e4f59a3c7b03552858.svg" width="12" height="12"></img>
                <p className="card-tour-info-diaDiem">{tour.DiaChiTour}</p>
                <p className="card-tour-info-gia">3.500.000 VND</p>
            </div>
        </div>
    )
}

export default CardTour
