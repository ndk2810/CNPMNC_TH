//import { BsTrashFill } from "react-icons/bs"

const TableDD = ({ Tours, deleteTour }) => {
    return (
        <div className="table-admin">
            <table>
                <thead>
                    <tr>
                        <th>Tên tour</th>
                        <th>Địa chỉ</th>
                        <th>Điểm nổi bật</th>
                        <th>Lịch trình</th>
                        <th>Nội dung</th>
                        <th>Độ dài</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {Tours.map(data => {
                        return (
                            <tr>
                                <td>{data.TenTour}</td>
                                <td>{data.DiaChiTour}</td>
                                <td>{data.DiemNoiBat}</td>
                                <td>{data.LichTrinh}</td>
                                <td>{data.NoiDungTour}</td>
                                <td>{data.DoDai} giờ</td>
                                <td>
                                    <button className="table-btn btn-details">Chi tiết</button> <br />
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
