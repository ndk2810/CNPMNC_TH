import React from 'react'

const FormThemDD = ({ submitForm }) => {
    return (
        <div>
            <form>
                <label>Tên địa điểm</label><br />
                <input type="text" placeholder="Nhập tên địa điểm..." id="tenDiaDiem" />
                <br />
                <label>Hình ảnh</label><br />
                <input type="text" placeholder="Nhập link hình ảnh địa điểm..." id="hinhAnh" />

                <br />
                <input type="submit" value="Thêm" onClick={submitForm} />
            </form>
        </div>
    )
}

export default FormThemDD
