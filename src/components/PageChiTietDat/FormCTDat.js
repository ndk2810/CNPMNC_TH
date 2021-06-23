import axios from 'axios'
import server from "../../serverAddress";

const FormCTTour = ({ Dat, Tour }) => {
    const ngayDiDate = new Date(Dat.NgayDi);
    const ngayDi = ngayDiDate.getDate() + "/" + (ngayDiDate.getMonth() + 1) + "/" + ngayDiDate.getFullYear()
    const today = Date.now()

    const handleHoanTien = (e) => {
        e.preventDefault()

        if (window.confirm("Xác nhận hoàn tiền cho khách ? Bạn sẽ không thể hoàn tác việc này !")) {
            axios.post(server + '/datTour/refunded/', {
                IDDat: Dat.IDDat,
                StripeID: Dat.StripeID
            })
                .then(function (res) {
                    if (res.data === 'success') {
                        alert('Hoàn tiền thành công !')
                        window.location.reload()
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    const trangThai = () => {
        //let btnHuy = `<button className="list-lichsu-tourDaDat-huyBtn" onClick={e => handleHuyTour(e)}>Huỷ tour</button>`
        if (Dat.TrangThai === 1) {
            return (
                <div>
                    <p>Đang chờ hoàn tiền</p>
                    <button onClick={e => handleHoanTien(e)}>Xác nhận hoàn tiền</button>
                </div>
            )
        }
        if (Dat.TrangThai === 2) {
            return (<p>Đã hoàn tiền</p>)
        }
        if (ngayDiDate < today) {
            return ('')
        }
        // else {
        //     return (<button className="list-lichsu-tourDaDat-huyBtn" onClick={e => handleHuyTour(e)}>Huỷ tour</button>)
        // }
    }
    return (
        <div className="form-chiTiet">
            <form>
                <div className="form-chiTiet-body">
                    <div className="form-chiTiet-info">
                        <h2>ID đặt tour: </h2>
                        <input type="text" id="idDatTour" defaultValue={Dat.IDDat} readOnly />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Tên khách: </h2>
                        <input type="text" id="tenKhach" defaultValue={Dat.HoTen} readOnly />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>SDT: </h2>
                        <input type="text" id="sdtKhach" defaultValue={Dat.SDT} readOnly />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Email: </h2>
                        <input type="text" id="emailKhach" defaultValue={Dat.Email} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Số lượng người lớn: </h2>
                        <input type="text" id="soLuongNguoiLon" defaultValue={Dat.SoLuongNguoiLon} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Số lượng trẻ em: </h2>
                        <input type="text" id="soLuongTreEm" defaultValue={Dat.SoLuongTreEm} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Tổng tiền: </h2>
                        <input type="text" id="tongTien" defaultValue={Dat.TongTien} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Ngày đi: </h2>
                        <input type="text" id="ngayDi" defaultValue={ngayDi} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Tên Tour: </h2>
                        <input type="text" id="idTour" defaultValue={Tour.TenTour} readOnly />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Trạng Thái: </h2>
                        {trangThai()}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormCTTour
