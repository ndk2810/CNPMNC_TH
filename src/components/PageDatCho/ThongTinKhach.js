import React from 'react'

const ThongTinKhach = () => {
    return (
        <div className="thongTinLienHe">
            <h2>Thông tin liên hệ</h2> <br />
            <div>
                <form className="form-thongTinLienHe">
                    <div className="form-thongTinLienHe-header">
                        <h3>Người lớn 1</h3>
                        <button>Lưu</button>
                    </div>

                    <div className="form-thongTinLienHe-body">
                        <div className="form-thongTinLienHe-input">
                            <label>Danh xưng</label>
                            <select>
                                <option value="ong">Ông</option>
                                <option value="ba">Bà</option>
                                <option value="co">Cô</option>
                            </select>
                        </div>
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
                </form>
            </div>
        </div>
    )
}

export default ThongTinKhach
