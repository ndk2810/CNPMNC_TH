import { useState, useEffect } from 'react'
import '../styles/chiTietTour.css'

import server from '../serverAddress'
const axios = require('axios');
const { default: FormCTTour } = require('../components/PageChiTietTour/FormCTTour');

// function wait(ms) {
//     var d = new Date();
//     var d2 = null;
//     do { d2 = new Date(); }
//     while (d2 - d < ms);
// }

const suaThongTinTour = (IDTour) => {
    const TenTour = document.getElementById('tenTour').value
    const DiaChiTour = document.getElementById('diaChiTour').value
    const DiemNoiBat = document.getElementById('diemNoiBat').value
    const LichTrinh = document.getElementById('lichTrinh').value
    const TheLoai = document.getElementById('chonTheLoai').value
    const NoiDung = document.getElementById('noiDung').value
    const DoDai = document.getElementById('doDai').value
    const GiaNguoiLon = document.getElementById('giaNguoiLon').value
    const GiaTreEm = document.getElementById('giaTreEm').value
    const NguoiLonToiThieu = document.getElementById('nguoiLonToiThieu').value

    if (window.confirm('Sửa thông tin tour ?')) {
        axios.post(server + '/tour/modifyTour', {
            IDTour: IDTour,
            TenTour: TenTour,
            DiaChiTour: DiaChiTour,
            TheLoai: TheLoai,
            DiemNoiBat: DiemNoiBat,
            LichTrinh: LichTrinh,
            NoiDung: NoiDung,
            DoDai: DoDai,
            GiaNguoiLon: GiaNguoiLon,
            GiaTreEm: GiaTreEm,
            NguoiLonToiThieu: NguoiLonToiThieu
        })
            .then(() => {
                window.location.reload()
            })
            .catch(err => alert(err))
    }
}

const addHinhAnh = (IDTour) => {
    const hinhAnhBase64 = document.getElementById('hinhAnh').src
    const HinhAnh = hinhAnhBase64.replace(/^data:image\/\w+;base64,/, "")

    if (document.getElementById('hinhAnh').src === "https://semantic-ui.com/images/wireframe/white-image.png") {
        alert('Bạn chưa chọn hình ảnh')
        return;
    }

    if (window.confirm('Thêm hình ảnh vào tour ?')) {
        axios.post(server + '/tour/insertPic', {
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
    if (window.confirm('Xoá tất cả hình ảnh của tour ?')) {
        axios.post(server + '/tour/removeAllPic', {
            IDTour: IDTour,
        })
            .then(() => {
                window.location.reload()
            })
            .catch(err => alert(err))
    }
}

const TourChiTiet = ({ ListTheLoaiTour }) => {
    //Lấy những query parameters
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let IDTour = params.get('IDTour');
    let IDTheLoaiTour = params.get('IDTheLoaiTour');
    let IDDiaDiem = params.get('IDDiaDiem');

    const [Tour, setTour] = useState([])
    useEffect(() => {
        fetch(server + "/tour/chiTiet/" + IDTour)
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
        fetch(server + "/theLoaiTour/" + IDTheLoaiTour)
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
        fetch(server + "/diaDiem/" + IDDiaDiem)
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
        fetch(server + "/tour/HinhAnh/" + IDTour)
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
            <FormCTTour
                suaThongTinTour={suaThongTinTour} addHinhAnh={addHinhAnh} Tour={Tour} HinhAnh={HinhAnh} TheLoaiTour={TheLoaiTour}
                DiaDiem={DiaDiem} xoaTatCaHinhAnh={xoaTatCaHinhAnh} ListTheLoaiTour={ListTheLoaiTour}
            />
        </div>
    )
}

export default TourChiTiet
