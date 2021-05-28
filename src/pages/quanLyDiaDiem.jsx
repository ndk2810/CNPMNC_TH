import axios from 'axios'

//Components
import FormThemDD from '../components/PageIndex/FormThemDD'
import TableDD from '../components/PageIndex/TableDD'

import server from '../serverAddress'

const addDiaDiem = (e) => {
    e.preventDefault()
    const TenDiaDiem = document.getElementById('tenDiaDiem').value
    const GioiThieuDiaDiem = document.getElementById('gioiThieuDiaDiem').value
    const hinhAnhBase64 = document.getElementById('hinhAnh').src
    const HinhAnh = hinhAnhBase64.replace(/^data:image\/\w+;base64,/, "")

    if (!TenDiaDiem || document.getElementById('themHinhAnh').files.length === 0 || !GioiThieuDiaDiem) {
        alert('Không được để trống các trường thông tin')
        return;
    }

    if (window.confirm('Thêm địa điểm vào CSDL ?')) {
        axios.post(server + '/diaDiem/add', {
            tenDiaDiem: TenDiaDiem,
            hinhAnh: HinhAnh,
            gioiThieu: GioiThieuDiaDiem
        })
            .then(() => window.location.reload())
            .catch(err => alert(err))
    }
}

const deleteDD = (IDDiaDiem) => {
    const data = {
        IDDiaDiem: IDDiaDiem,
    }

    if (window.confirm('Xoá địa điểm ?')) {
        axios.post(server + '/diaDiem/remove', data)
            .then(() => console.log('success'))
            .catch(err => console.log(err))

        window.location.reload()
    }
}

const quanLyDiaDiem = ({ DiaDiems }) => {
    return (
        <div>
            <FormThemDD addDiaDiem={addDiaDiem} />
            <TableDD DiaDiems={DiaDiems} deleteDD={deleteDD} />
        </div>
    )
}

export default quanLyDiaDiem
