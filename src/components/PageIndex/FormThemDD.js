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
                <h1 className="form-title">Create Địa Điểm</h1>
                <div className="form1">
                    <input type="text" placeholder="Nhập tên địa điểm..." id="tenDiaDiem" className="form-input" />
                    <label className="form-label">Tên địa điểm</label>
                </div>
                <div className="form1">
                    <input type="text" placeholder="Nhập giới thiệu địa điểm..." id="gioiThieuDiaDiem" className="form-input" />
                    <label className="form-label">Giới thiệu</label>
                </div>
                <div className="form1">
                    <input type="file" onChange={loadIMG} className="form-input" />
                </div>
                <img src="" className="upload-img" id="hinhAnh" alt="Preview..."></img>
                <input type="submit" value="Thêm" onClick={submitForm} className="submit" />
            </form>
        </div>
    )
}

export default FormThemDD
