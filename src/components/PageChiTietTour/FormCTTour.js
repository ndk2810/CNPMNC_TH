// function loadIMG() {
//     const preview = document.querySelector('img');
//     const file = document.querySelector('input[type=file]').files[0];
//     const reader = new FileReader();

//     reader.addEventListener("load", function () {
//         // convert image file to base64 string
//         preview.src = reader.result;
//     }, false);

//     if (file) {
//         reader.readAsDataURL(file);
//     }
// }

const FormCTTour = ({ addHinhAnh, Tour, HinhAnh, TheLoaiTour }) => {
    let src = 'https://semantic-ui.com/images/wireframe/white-image.png'
    if (HinhAnh.HinhAnh) {
        let hinhAnhBase64 = Buffer.from(HinhAnh.HinhAnh).toString('base64')
        src = `data:image/jpeg;base64,${hinhAnhBase64}`
    }
    return (
        <div className="form-chiTiet">
            <form>
                <div className="form-chiTiet-imgs">
                    <img src={src} />
                </div>
                <div className="form-chiTiet-body">
                    <div className="form-chiTiet-info">
                        <h2>Tên tour: </h2>
                        <span>{Tour.TenTour}</span>
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Địa chỉ tour: </h2>
                        <span>{Tour.DiaChiTour}</span>
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Thể loại tour: </h2>
                        <span>{TheLoaiTour.TenTheLoaiTour}</span>
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Tên tour: </h2>
                        <span>{Tour.TenTour}</span>
                    </div>
                    <div className="form-chiTiet-info">
                        <h2>Tên tour: </h2>
                        <span>{Tour.TenTour}</span>
                    </div>
                </div>
                {/* <form>
                <div className="form1">
                    <input type="file" onChange={loadIMG} id="themHinhAnh" className="form-input" />
                </div>
                <img src="" className="upload-img" id="hinhAnh" alt="Preview..."></img>
                <input type="submit" value="Thêm" onClick={() => addHinhAnh(Tour.IDTour)} className="submit" />
            </form> */}
            </form>
        </div>
    )
}

export default FormCTTour
