import React from 'react'
//import { BsTrashFill } from "react-icons/bs"

const TableDD = ({ DiaDiems, deleteDD, }) => {
    return (
        <div className="table-admin">
            <table>
                <thead>
                    <tr>
                        <th>Tên địa điểm</th>
                        <th>Hình ảnh</th>
                        <th>Giới thiệu</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {DiaDiems.map(data => {
                        let hinhAnhBase64 = ''
                        if (data.HinhAnhDiaDiem)
                            hinhAnhBase64 = Buffer.from(data.HinhAnhDiaDiem).toString('base64')
                        return (
                            <tr>
                                <td>{data.TenDiaDiem}</td>
                                <td><img className="table-img" src={`data:image/jpeg;base64,${hinhAnhBase64}`} alt="Not available" /></td>
                                <td>{data.GioiThieu}</td>
                                <td>
                                    <button className="table-btn btn-details">Chi tiết</button> <br />
                                    <button className="table-btn btn-del" onClick={() => deleteDD(data.IDDiaDiem)}>Xoá</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableDD
