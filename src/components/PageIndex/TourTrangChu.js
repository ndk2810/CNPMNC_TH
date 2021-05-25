import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const TourTrangChu = ({ Tour }) => {

    //GET Hình ảnh bìa của tour
    let [HinhAnh, setHinhAnh] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tour/hinhAnh/" + Tour.IDTour)
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
    let [TheLoaiTour, setTheLoaiTour] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/theLoaiTour/" + Tour.IDTheLoaiTour)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                if (data.length > 0) setTheLoaiTour(data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //Link dùng để chuyển trang
    const linkTo = '/thongTinTour?IDTour=' + Tour.IDTour + "&TenTheLoai=" + TheLoaiTour.TenTheLoaiTour

    let src = 'url(https://semantic-ui.com/images/wireframe/white-image.png)'
    if (HinhAnh.HinhAnh) {
        let hinhAnhBase64 = Buffer.from(HinhAnh.HinhAnh).toString('base64')
        src = `url(data:image/jpeg;base64,${hinhAnhBase64})`
    }

    return (
        <Link to={linkTo}>
            <li key={Tour.IDTour} className="Tour-trangChu-tour" style={{ backgroundImage: src }}>
                <h4>{Tour.TenTour}</h4>
            </li>
        </Link>
    )
}

export default TourTrangChu
