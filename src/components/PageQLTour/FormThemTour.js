// const loadIMG = () => {
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

const FormThemDD = ({ addTour, DiaDiems, ListTheLoaiTour }) => {
    return (
        <div className="modal" id="modal">
            <div className="form-create" id="form">
                <form className="Create">
                    <h1 className="form-title">Create Tour</h1>
                    <div className="form1">
                        <select name="chonDiaDiem" id="diaDiem" className="form-select">
                            {DiaDiems.map(diaDiem => {
                                return (
                                    <option value={diaDiem.IDDiaDiem}>{diaDiem.TenDiaDiem}</option>
                                )
                            })}
                        </select>
                        <label className="form-label">Địa điểm</label>
                    </div>

                    <div className="form1">
                        <select name="chonTheLoai" id="theLoai" className="form-select">
                            {ListTheLoaiTour.map(theLoai => {
                                return (
                                    <option value={theLoai.IDTheLoaiTour}>{theLoai.TenTheLoaiTour}</option>
                                )
                            })}
                        </select>
                        <label className="form-label">Thể loại</label>
                    </div>

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
                        <input type="number" placeholder="Độ dài..." id="doDai" className="form-input" />
                        <label className="form-label">Độ dài</label>
                    </div>
                    <div className="form1">
                        <input type="number" placeholder="Giá người lớn..." id="giaNguoiLon" className="form-input" />
                        <label className="form-label">Giá người lớn</label>
                    </div>
                    <div className="form1">
                        <input type="number" placeholder="Giá trẻ em..." id="giaTreEm" className="form-input" />
                        <label className="form-label">Giá trẻ em</label>
                    </div>
                    <input type="submit" value="Thêm" onClick={addTour} className="submit" />
                </form>
            </div>
        </div>
    )
}

export default FormThemDD
