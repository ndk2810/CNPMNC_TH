import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import numberComma from "../../resources/scripts/numberComma"
import server from "../../serverAddress";

const YeuThichCard = ({ IDTour, tour }) => {
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

    const linkTo =
        "/thongTinTour?IDTour=" +
        tour.IDTour

    return (
        <div className="flexer">
            <Link to={linkTo} className="list-lichsu-tourDaDat">
                <img src={src} alt="dl"></img>

                <div className="list-lichsu-tourDaDat-ttct">
                    <h3>{Tour.TenTour}</h3>
                    {/* <p><b>Ngày đi : </b> {ngayDi}</p>
                    <p><b>Số người đi : </b> {tour.SoLuongNguoiLon} người lớn, {tour.SoLuongTreEm} trẻ em</p>
                    <p><b>Tổng tiền : </b>  {numberComma(tour.TongTien)} VNĐ</p> */}
                </div>
            </Link>

            {/* {btnHuy()} */}
        </div>
    )
}

export default YeuThichCard
