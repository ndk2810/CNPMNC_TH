const loadIMG = () => {
    const preview = document.getElementById('hinhAnh');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // convert image file to base64 string
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

const FormCTTour = ({ addHinhAnh, Tour, HinhAnh, TheLoaiTour, DiaDiem, xoaTatCaHinhAnh }) => {
    let src = 'https://semantic-ui.com/images/wireframe/white-image.png'
    if (HinhAnh.HinhAnh) {
        let hinhAnhBase64 = Buffer.from(HinhAnh.HinhAnh).toString('base64')
        src = `data:image/jpeg;base64,${hinhAnhBase64}`
    }
    return (
        <div className="form-chiTiet">
            <form>
                <div className="form-chiTiet-imgs">
                    <img src={src} alt="Ảnh bìa tour" />
                </div>
                <div className="form-chiTiet-body">
                    <div className="form-chiTiet-info">
                        <h2>Tên tour: </h2>
                        <input type="text" value={Tour.TenTour} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Địa chỉ tour: </h2>
                        <input type="text" value={Tour.DiaChiTour} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Thể loại tour: </h2>
                        <input type="text" value={TheLoaiTour.TenTheLoaiTour} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Điểm nổi bật: </h2>
                        <input type="text" value={Tour.DiemNoiBat} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Lịch trình: </h2>
                        <input type="text" value={Tour.LichTrinh} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Nội dung tour: </h2>
                        <input type="text" value={Tour.NoiDungTour} />
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Độ dài (giờ): </h2>
                        <input type="text" value={Tour.DoDai} />
                    </div>
                </div>
            </form>

            <form className="form-themHinhAnh">
                <input type="file" onChange={loadIMG} id="themHinhAnh" className="form-themHinhAnh-input" />
                <img src="https://semantic-ui.com/images/wireframe/white-image.png" className="form-themHinhAnh-upload-img" id="hinhAnh" alt="Preview..." height="120"></img>
                <input type="submit" value="Thêm hình ảnh" onClick={(e) => {
                    e.preventDefault()
                    addHinhAnh(Tour.IDTour)
                }} className="submit" />
            </form>

            <button onClick={() => xoaTatCaHinhAnh(Tour.IDTour)}>Xoá tất cả hình ảnh của tour</button>
        </div>
    )
}

export default FormCTTour
