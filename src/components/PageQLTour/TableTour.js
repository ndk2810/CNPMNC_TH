import { Link } from 'react-router-dom'

const TableDD = ({ Tours, deleteTour }) => {
    return (
        <div className="table-admin">
            <table>
                <thead>
                    <tr>
                        <th>Tên tour</th>
                        <th>Địa chỉ</th>
                        <th>Điểm nổi bật</th>
                        <th>Độ dài</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {Tours.map(data => {
                        const linkTo = "/tourChiTiet?IDTour=" + data.IDTour + "&IDTheLoaiTour=" + data.IDTheLoaiTour + "&IDDiaDiem=" + data.IDDiaDiem
                        return (
                            <tr>
                                <td>{data.TenTour}</td>
                                <td>{data.DiaChiTour}</td>
                                <td>{data.DiemNoiBat}</td>
                                <td>{data.DoDai} giờ</td>
                                <td>
                                    <Link to={linkTo}><button className="table-btn btn-details">Chi tiết</button></Link> <br />
                                    <button className="table-btn btn-del" onClick={() => deleteTour(data.IDTour)}>Xoá</button>
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
