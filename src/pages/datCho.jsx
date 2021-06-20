import server from '../serverAddress'
import '../styles/datCho.css'
import { useState, useEffect } from "react"

//COMPONENTS
import ThongTinLienHe from '../components/PageDatCho/ThongTinLienHe'
import BoxTourDat from '../components/PageDatCho/BoxTourDat'
import ThoiGianTQ from '../components/PageDatCho/ThoiGianTQ'
import TomTat from '../components/PageDatCho/TomTat'

const axios = require('axios');

const DatCho = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);

    const IDTour = params.get('idTour');
    const ngayDi = params.get('ngayDi');
    const soNguoiLon = params.get('soNguoiLon');
    const soTreEm = params.get('soTreEm');
    const idKhungGio = params.get('idKhungGio');

    const [Tour, setTour] = useState([]);
    useEffect(() => {
        fetch(server + "/tour/chiTiet/" + IDTour)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setTour(data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [KhungThoiGian, setKhungThoiGian] = useState([]);
    useEffect(() => {
        fetch(server + "/khungThoiGian/" + idKhungGio)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setKhungThoiGian(data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const xacNhanDatTour = (e) => {
        e.preventDefault()

        const hoTen = document.getElementById('input-hoTen').value
        const dienThoai = document.getElementById('input-dienThoai').value
        const email = document.getElementById('input-email').value
        const danhXung = document.getElementById('danhXung').value
        const userID = (JSON.parse(window.localStorage.getItem('userInfo'))).userId
        const ThoiGianTaoOrder = Date.now()
        const IDKhungThoiGian = idKhungGio

        if (!hoTen || !dienThoai || !email || !danhXung) {
            alert('Vui lòng điền đầy đủ thông tin !')
            return
        }
        else {
            if (window.confirm('Xác nhận đặt tour ?')) {
                axios.post(server + '/datTour/', {
                    DanhXung: danhXung,
                    HoTen: hoTen,
                    SoDienThoai: dienThoai,
                    Email: email,
                    NgayDi: ngayDi,
                    UserID: userID,
                    ThoiGianTaoOrder: ThoiGianTaoOrder,
                    IDKhungThoiGian: IDKhungThoiGian,

                    SoLuongNguoiLon: soNguoiLon,
                    SoLuongTreEm: soTreEm,
                    TongTien: Tour.GiaNguoiLon * soNguoiLon + Tour.GiaTreEm * soTreEm,
                    IDTour: IDTour
                })
                    .then(() => {
                        const linkToThanhToan = "/thanhToan?HoTenChung=" + hoTen + "&SoDienThoaiChung=" + dienThoai + "&IDTour=" + IDTour + "&NgayDi=" + ngayDi + "&KTG=" + KhungThoiGian.ThoiGian + "&TGTO=" + ThoiGianTaoOrder;
                        window.location.href = linkToThanhToan
                    })
                    .catch(err => alert(err))
            }
        }
    }

    return (
        <div>
            <div className="main-index-body">
                <h1>Đặt chỗ của tôi</h1>
                <h4>Điền thông tin và xem lại đặt chỗ.</h4>
                <BoxTourDat
                    Tour={Tour} ngayDi={ngayDi} soNguoiLon={soNguoiLon}
                    soTreEm={soTreEm} KhungThoiGian={KhungThoiGian}
                />
                <ThongTinLienHe />
                <ThoiGianTQ ngayDi={ngayDi} />
                <TomTat Tour={Tour} soNguoiLon={soNguoiLon} soTreEm={soTreEm} />

                <button className="btn-tiepTuc" onClick={e => xacNhanDatTour(e)}>Tiếp tục</button>
            </div>
        </div>
    )
}

export default DatCho
