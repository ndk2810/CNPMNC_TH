import server from '../serverAddress'
import '../styles/datCho.css'
import { useState, useEffect } from "react"
import numberComma from '.././resources/scripts/numberComma'

//COMPONENTS
import ThongTinLienHe from '../components/PageDatCho/ThongTinLienHe'
import ThongTinKhach from '../components/PageDatCho/ThongTinKhach'
import BoxTourDat from '../components/PageDatCho/BoxTourDat'
import ThoiGianTQ from '../components/PageDatCho/ThoiGianTQ'
import TomTat from '../components/PageDatCho/TomTat'

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
                console.log(Tour)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="main-index-body">
                <h1>Đặt chỗ của tôi</h1>
                <h4>Điền thông tin và xem lại đặt chỗ.</h4>
                <BoxTourDat
                    Tour={Tour} ngayDi={ngayDi} soNguoiLon={soNguoiLon}
                    soTreEm={soTreEm} idKhungGio={idKhungGio}
                />
                <ThongTinLienHe />
                <ThongTinKhach />
                <ThoiGianTQ />
                <TomTat />

                <button className="btn-tiepTuc">Tiếp tục</button>
            </div>
        </div>
    )
}

export default DatCho
