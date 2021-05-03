import { useState, useEffect } from 'react'
import '../styles/chiTietTour.css'

const axios = require('axios');
const { default: FormCTTour } = require('../components/PageChiTietTour/FormCTTour');

const addHinhAnh = (IDTour) => {
    //e.preventDefault()
    const hinhAnhBase64 = document.getElementById('hinhAnh').src
    const HinhAnh = hinhAnhBase64.replace(/^data:image\/\w+;base64,/, "")

    if (document.getElementById('themHinhAnh').files.length === 0) {
        alert('Không được để trống các trường thông tin')
        return;
    }

    if (window.confirm('Thêm hình ảnh vào tour ?')) {
        axios.post('http://localhost:5000/tour/insertPic', {
            IDTour: IDTour,
            hinhAnh: HinhAnh,
        })
            .then(() => window.location.reload())
            .catch(err => alert(err))
    }
    console.log(HinhAnh)
}

const TourChiTiet = () => {
    //Lấy những query parameters
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let IDTour = params.get('IDTour');

    const [Tour, setTour] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tour/chiTiet/" + IDTour)
            .then(data => {
                return data.json();
            })
            .then(data => {
                setTour(data[0]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    let [TheLoaiTour, setTheLoaiTour] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/theLoaiTour/" + Tour.IDTheLoaiTour)
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

    let [HinhAnh, setHinhAnh] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tour/HinhAnh/" + IDTour)
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

    return (
        <div className="main-body">
            <FormCTTour addHinhAnh={addHinhAnh} Tour={Tour} HinhAnh={HinhAnh} TheLoaiTour={TheLoaiTour} />
        </div>
    )
}

export default TourChiTiet
