function loadIMG() {
    const preview = document.querySelector('img');
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

const FormThemDD = ({ submitForm }) => {
    return (
        <div className="form-create" id="form">
            <form action="" className="Create">
                <h1 className="form-title">Create Tour</h1>
                <div className="form1">
                    <input type="text" placeholder="Nhập tên tour..." id="tenTour" className="form-input" />
                    <label className="form-label">Tên tour</label>
                </div>
                <div className="form1">
                    <input type="text" placeholder="Nhập địa chỉ tour..." id="diaChiTour" className="form-input" />
                    <label className="form-label">Địa chỉ tour</label>
                </div>
                <div className="form1">
                    <input type="text" placeholder="Nhập điểm nổi bật..." id="diemNoiBat" className="form-input" />
                    <label className="form-label">Điểm nổi bật</label>
                </div>
                <div className="form1">
                    <input type="text" placeholder="Nhập lịch trình tour..." id="lichTrinh" className="form-input" />
                    <label className="form-label">Lịch trình tour</label>
                </div>
                <div className="form1">
                    <input type="text" placeholder="Nhập nội dung tour..." id="noiDung" className="form-input" />
                    <label className="form-label">Nội dung tour</label>
                </div>
                <div className="form1">
                    <input type="number" placeholder="Độ dài..." id="tenDiaDiem" className="form-input" />
                    <label className="form-label">Độ dài</label>
                </div>
                {/* <div className="form1">
                    <input type="file" onChange={loadIMG} className="form-input" />
                </div>
                <img src="" className="upload-img" id="hinhAnh" alt="Preview..."></img> */}
                <input type="submit" value="Thêm" onClick={submitForm} className="submit" />
            </form>
        </div>
    )
}

export default FormThemDD
