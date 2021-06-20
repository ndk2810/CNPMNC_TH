import React from 'react'


const ThongTinLienHe = () => {
    return (
        <div className="thongTinLienHe">
            <h2>Thông tin liên hệ</h2> <br />
            <div>
                <form className="form-thongTinLienHe">
                    <div className="form-thongTinLienHe-header">
                        <h3>Thông tin liên hệ (nhận vé/phiếu thanh toán)</h3>
                    </div>
                    <div className="form-thongTinLienHe-body">
                        <div className="form-thongTinLienHe-input">
                            <label>Danh xưng</label>
                            <select id="danhXung">
                                <option value="Ông" selected>Ông</option>
                                <option value="Bà">Bà</option>
                                <option value="Cô">Cô</option>
                            </select>
                        </div>
                        <div className="form-thongTinLienHe-input">
                            <label>Họ tên</label>
                            <input type="text" id="input-hoTen" />
                        </div>

                        <div className="form-thongTinLienHe-input">
                            <label>Điện thoại</label>
                            <input type="text" id="input-dienThoai" />
                        </div>

                        <div className="form-thongTinLienHe-input">
                            <label>Email</label>
                            <input type="email" id="input-email" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ThongTinLienHe
