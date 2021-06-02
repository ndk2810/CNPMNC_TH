const FormCTTour = ({ Dat }) => {
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
                        <input type="text" id="sdtKhach" defaultValue={Dat.SoDienThoai} readOnly />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Email: </h2>
                        <input type="text" id="emailKhach" defaultValue={Dat.Email} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Là khách tham quan: </h2>
                        {Dat.LaKhachThamQuan === 1 ? "Đúng" : "Không"}
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
                        <input type="text" id="ngayDi" defaultValue={Dat.NgayDi} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>ID Tour: </h2>
                        <input type="text" id="idTour" defaultValue={Dat.IDTour} readOnly />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormCTTour
