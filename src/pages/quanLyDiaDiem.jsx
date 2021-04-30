import axios from 'axios'

//Components
import FormThemDD from '../components/PageIndex/FormThemDD'
import TableDD from '../components/PageIndex/TableDD'

const submitForm = (e) => {
    e.preventDefault()
    const TenDiaDiem = document.getElementById('tenDiaDiem').value
    const GioiThieuDiaDiem = document.getElementById('gioiThieuDiaDiem').value
    const hinhAnhBase64 = document.getElementById('hinhAnh').src
    const HinhAnh = hinhAnhBase64.replace(/^data:image\/\w+;base64,/, "")

    if (!TenDiaDiem || !hinhAnhBase64 || !GioiThieuDiaDiem) {
        alert('Không được để trống các trường thông tin')
        return;
    }

    if (window.confirm('Thêm địa điểm vào CSDL ?')) {
        axios.post('http://localhost:5000/diaDiem/add', {
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
        axios.post('http://localhost:5000/diaDiem/remove', data)
            .then(() => console.log('success'))
            .catch(err => console.log(err))

        window.location.reload()
    }
}

const quanLyDiaDiem = ({ DiaDiems }) => {
    return (
        <div>
            <FormThemDD submitForm={submitForm} />
            <TableDD DiaDiems={DiaDiems} deleteDD={deleteDD} />
        </div>
    )
}

export default quanLyDiaDiem
