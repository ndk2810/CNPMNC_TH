import React from 'react'

const TableDD = ({ DiaDiems, deleteDD }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tên địa điểm</th>
                        <th>Hình ảnh</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {DiaDiems.map(data => {
                        return (
                            <tr>
                                <td>{data.tenDiaDiem}</td>
                                <td><img className="table-img" src={data.hinhAnh} alt="#" /></td>
                                <td><button onClick={() => deleteDD(data._id.str, data.tenDiaDiem, data.hinhAnh)}>DELETE</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableDD
