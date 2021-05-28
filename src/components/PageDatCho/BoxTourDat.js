const BoxTourDat = ({ Tour, ngayDi, soNguoiLon, soTreEm, idKhungGio }) => {
    return (
        <div className="box-tourDat">
            <div>
                <form className="box-tourDat">
                    <div className="box-tourDat-header">
                        <img src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/841107e3ee5dae66f6c15c41a74f5cce.svg" alt="Xperience" />
                        <h3>Xperience</h3>
                        <button>Chi tiết</button>
                    </div>

                    <div className="box-tourDat-body">
                        <h4 className="pd">{Tour.TenTour}</h4>

                        <div className="box-tourDat-chiTietTour pd">
                            <img src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/%255BSALE%252017%2525%255D%2520Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-1189b136-1c09-4911-8744-f9cfd0ea8f55.jpeg?_src=imagekit&tr=c-at_max,h-64,q-60,w-64" alt="#" />
                            <p style={{ fontWeight: 600 }}>{Tour.TenTour}</p>
                        </div>

                        <div className="box-tourDat-thongTinTour pd">
                            <table>
                                <tr>
                                    <td>Ngày tham quan</td>
                                    <td className="box-tourDat-thongTinTour-value">{ngayDi}</td>
                                </tr>
                                <tr>
                                    <td>Khung thời gian</td>
                                    <td className="box-tourDat-thongTinTour-value">{idKhungGio}</td>
                                </tr>
                                <tr>
                                    <td>Áp dụng cho</td>
                                    <td className="box-tourDat-thongTinTour-value">{soNguoiLon} Người lớn, {soTreEm} trẻ em</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BoxTourDat
