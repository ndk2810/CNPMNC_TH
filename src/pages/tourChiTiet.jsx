import { useState, useEffect } from 'react'
import '../styles/chiTietTour.css'

const axios = require('axios');
const { default: FormCTTour } = require('../components/PageChiTietTour/FormCTTour');

function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while (d2 - d < ms);
}

const addHinhAnh = (IDTour) => {
    const hinhAnhBase64 = document.getElementById('hinhAnh').src
    const HinhAnh = hinhAnhBase64.replace(/^data:image\/\w+;base64,/, "")

    if (document.getElementById('hinhAnh').src === "https://semantic-ui.com/images/wireframe/white-image.png") {
        alert('Bạn chưa chọn hình ảnh')
        return;
    }

    if (window.confirm('Thêm hình ảnh vào tour ?')) {
        axios.post('http://localhost:5000/tour/insertPic', {
            IDTour: IDTour,
            hinhAnh: HinhAnh,
        })
            .then(() => {
                alert('Thêm hình ảnh thành công !')
                window.location.reload()
            })
            .catch(err => alert(err))
    }
}

const xoaTatCaHinhAnh = (IDTour) => {
    //e.preventDefault()

    if (window.confirm('Xoá tất cả hình ảnh của tour ?')) {
        axios.post('http://localhost:5000/tour/removeAllPic', {
            IDTour: IDTour,
        })
            .then(() => {
                window.location.reload()
            })
            .catch(err => alert(err))
    }
}

const TourChiTiet = () => {
    //Lấy những query parameters
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let IDTour = params.get('IDTour');
    let IDTheLoaiTour = params.get('IDTheLoaiTour');
    let IDDiaDiem = params.get('IDDiaDiem');

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
        fetch("http://localhost:5000/theLoaiTour/" + IDTheLoaiTour)
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

    let [DiaDiem, setDiaDiem] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/diaDiem/" + IDDiaDiem)
            .then(data => {
                return data.json();
            })
            .then(data => {
                if (data.length > 0)
                    setDiaDiem(data[0])
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
            <FormCTTour addHinhAnh={addHinhAnh} Tour={Tour} HinhAnh={HinhAnh} TheLoaiTour={TheLoaiTour} DiaDiem={DiaDiem} xoaTatCaHinhAnh={xoaTatCaHinhAnh} />
        </div>
    )
}

export default TourChiTiet
