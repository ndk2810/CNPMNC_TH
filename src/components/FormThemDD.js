import React from 'react'

const FormThemDD = ({ submitForm }) => {
    return (
        <div className="form-create">
            <form action="" className="Create">
                <h1 className="form-title">Create Địa Điểm</h1>
                <div className="form1">
                    <input type="text" placeholder="Nhập tên địa điểm..." id="tenDiaDiem" className="form-input" />
                    <label className="form-label">Tên địa điểm</label>
                </div>            
                <div className="form1">
                    <input type="text" placeholder="Nhập link hình ảnh.." id="hinhAnh" className="form-input"/>
                    <label className="form-label">Hình ảnh</label>
                </div>       
                <input type="submit" value="Thêm" onClick={submitForm} className="submit" />
            </form>
        </div>
    )
}

export default FormThemDD
