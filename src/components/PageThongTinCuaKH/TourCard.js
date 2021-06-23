import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import numberComma from "../../resources/scripts/numberComma"
import server from "../../serverAddress";

const TourCard = ({ IDTour, tour }) => {
    //GET Hình ảnh bìa của tour
    const [HinhAnh, setHinhAnh] = useState([]);
    useEffect(() => {
        fetch(server + "/tour/hinhAnh/" + IDTour)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                if (data.length > 0) setHinhAnh(data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //GET chi tiết touur
    const [Tour, setTour] = useState([]);
    useEffect(() => {
        fetch(server + "/tour/chiTiet/" + IDTour)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                if (data.length > 0) setTour(data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //Decode hình ảnh từ binary thành base64 để hiển thị
    let src = "https://semantic-ui.com/images/wireframe/white-image.png";
    if (HinhAnh.HinhAnh) {
        let hinhAnhBase64 = Buffer.from(HinhAnh.HinhAnh).toString("base64");
        src = `data:image/jpeg;base64,${hinhAnhBase64}`;
    }

    const handleHuyTour = (e) => {
        e.preventDefault()

        if (window.confirm("Xác nhận huỷ tour ? Bạn sẽ không thể hoàn tác việc này !")) {
            axios.get(server + '/datTour/refunding/' + tour.IDDat)
                .then(function () {
                    alert('Gửi yêu cầu huỷ thành công, đang chờ hoàn tiền !')
                    window.location.reload()
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    const ngayDiDate = new Date(tour.NgayDi);
    const ngayDi = ngayDiDate.getDate() + "/" + (ngayDiDate.getMonth() + 1) + "/" + ngayDiDate.getFullYear()
    const today = Date.now()

    //Trạng thái: 0 - đã thanh toán
    //1 - refunding
    //2 - refunded

    const btnHuy = () => {
        //let btnHuy = `<button className="list-lichsu-tourDaDat-huyBtn" onClick={e => handleHuyTour(e)}>Huỷ tour</button>`
        if (tour.TrangThai === 1) {
            return (<p>Đang chờ hoàn tiền</p>)
        }
        if (tour.TrangThai === 2) {
            return (<p>Đã hoàn tiền</p>)
        }
        if (ngayDiDate < today) {
            return ('')
        }
        else {
            return (<button className="list-lichsu-tourDaDat-huyBtn" onClick={e => handleHuyTour(e)}>Huỷ tour</button>)
        }
    }


    const linkTo =
        "/thongTinTour?IDTour=" +
        tour.IDTour

    return (
        <div className="flexer">
            <Link to={linkTo} className="list-lichsu-tourDaDat">
                <img src={src} alt="dl"></img>

                <div className="list-lichsu-tourDaDat-ttct">
                    <h3>{Tour.TenTour}</h3>
                    <p><b>Ngày đi : </b> {ngayDi}</p>
                    <p><b>Số người đi : </b> {tour.SoLuongNguoiLon} người lớn, {tour.SoLuongTreEm} trẻ em</p>
                    <p><b>Tổng tiền : </b>  {numberComma(tour.TongTien)} VNĐ</p>
                </div>
            </Link>

            {btnHuy()}
        </div>
    )
}

export default TourCard
