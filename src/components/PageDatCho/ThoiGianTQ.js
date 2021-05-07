const ThoiGianTQ = () => {
    return (
        <div className="thoiGianTQ">
            <h2>Ngày & Giờ tham quan đã chọn</h2> <br />
            <div className="form-thongTinLienHe box-thoiGianTQ">
                <div className="box-thoiGianTQ-header">
                    <div className="box-thoiGianTQ-header-content">
                        <img src="https://d1785e74lyxkqq.cloudfront.net/webpla-desktop/_next/static/f9d9420a4ef5766ce64577ce5c43988e.svg" alt="calender" />
                        <div>
                            <h4>Ngày tham quan</h4>
                            <p>Thứ 7, 5 tháng 06 2021</p>
                        </div>
                    </div>
                </div>
                <div className="box-thoiGianTQ-yeuCauThem">
                    <h3>Yêu cầu thêm (tuỳ chọn)</h3>
                    <textarea placeholder="Yêu cầu đặc biệt ..." />
                </div>
            </div>
        </div>
    )
}

export default ThoiGianTQ
