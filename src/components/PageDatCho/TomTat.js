import numberComma from '../../resources/scripts/numberComma'

const TomTat = ({ Tour, soNguoiLon, soTreEm }) => {
    const tongNguoiLon = numberComma(Tour.GiaNguoiLon * soNguoiLon)
    const tongTreEm = numberComma(Tour.GiaTreEm * soTreEm)
    const tongTien = numberComma(Tour.GiaNguoiLon * soNguoiLon + Tour.GiaTreEm * soTreEm)


    return (
        <div className="tomTat">
            <h2>Tóm tắt</h2> <br />
            <div className="form-thongTinLienHe box-tomTat">
                <div className="box-tomTat-tongGia">
                    <h4>Gía bạn trả</h4>
                    <p className="card-tour-info-gia">{tongTien} VNĐ</p>
                </div>

                <div className="box-tomTat-tongGia box-tomTat-giaCaNhan">
                    <h4>
                        Người lớn (x {soNguoiLon})
                        <br />
                        <span>{Tour.GiaNguoiLon} VNĐ</span>
                    </h4>
                    <p>{tongNguoiLon} VNĐ</p>
                </div>
                <div className="box-tomTat-tongGia box-tomTat-giaCaNhan">
                    <h4>Trẻ em (x {soTreEm})
                        <br />
                        <span>{(Tour.GiaTreEm)} VNĐ</span>
                    </h4>
                    <p>{tongTreEm} VNĐ</p>
                </div>
            </div>
        </div>
    )
}

export default TomTat
