import React from 'react'
import { Link } from 'react-router-dom'

//import { BsTrashFill } from "react-icons/bs"

const TableDT = ({ ListDatTour }) => {
    return (
        <div className="page-datTour">
            <div className="table-admin" style={{ marginTop: 0 }}>
                <table>
                    <thead>
                        <tr>
                            <th>Họ tên khách</th>
                            <th>Ngày đi</th>
                            <th>Tổng tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListDatTour.map(data => {
                            const linkTo = "/datChiTiet?IDDat=" + data.IDDat + "&IDTour=" + data.IDTour
                            return (
                                <tr>
                                    <td>{data.HoTen}</td>
                                    <td>{data.NgayDi}</td>
                                    <td>{data.TongTien}</td>
                                    <td>
                                        <Link to={linkTo}><button style={{ marginTop: 0 }} className="table-btn btn-details">Chi tiết</button></Link> <br />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableDT
