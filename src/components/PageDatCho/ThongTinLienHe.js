import React from 'react'

const ThongTinLienHe = () => {
    return (
        <div className="thongTinLienHe">
            <h2>Thông tin liên hệ</h2> <br />
            <div>
                <form className="form-thongTinLienHe">
                    <div className="form-thongTinLienHe-header">
                        <h3>Thông tin liên hệ (nhận vé/phiếu thanh toán)</h3>
                        <button>Lưu</button>
                    </div>

                    <div className="form-thongTinLienHe-body">
                        <div className="form-thongTinLienHe-input">
                            <label>Họ tên</label>
                            <input type="text" id="input-hoTen" />
                        </div>

                        <div className="form-thongTinLienHe-input">
                            <label>Điện thoại</label>
                            <input type="number" id="input-dienThoai" />
                        </div>

                        <div className="form-thongTinLienHe-input">
                            <label>Email</label>
                            <input type="email" id="input-email" />
                        </div>
                    </div>

                    <div className="form-thongTinLienHe-footer">
                        <div>
                            <input type="radio" id="male" name="gender" value="male" />
                            <label for="male">Tôi là khách tham quan</label>
                        </div>
                        <div>
                            <input type="radio" id="male" name="gender" value="male" />
                            <label for="male">Tôi đặt cho người khác</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ThongTinLienHe
