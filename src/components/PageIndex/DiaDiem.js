import { Link } from 'react-router-dom'


const DiaDiem = ({ diaDiem }) => {
    //Link dùng để chuyển trang
    const linkTo = '/diaDiem?IDDiaDiem=' + diaDiem.IDDiaDiem + '&TenDiaDiem=' + diaDiem.TenDiaDiem
    const hinhAnhBase64 = Buffer.from(diaDiem.HinhAnhDiaDiem).toString('base64')

    return (
        <Link to={linkTo}>
            <li key={diaDiem.IDDiaDiem} className="diaDiem" style={{ backgroundImage: `url(data:image/jpeg;base64,${hinhAnhBase64}` }}>
                <h4>{diaDiem.TenDiaDiem}</h4>
            </li>
        </Link>
    )
}

export default DiaDiem
