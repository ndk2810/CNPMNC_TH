import { Link } from 'react-router-dom'


const DiaDiem = ({ diaDiem }) => {
    //Link dùng để chuyển trang
    const linkTo = '/diaDiem?IDDiaDiem=' + diaDiem.IDDiaDiem + '&TenDiaDiem=' + diaDiem.TenDiaDiem

    let src = 'url(https://semantic-ui.com/images/wireframe/white-image.png)'
    if (diaDiem.HinhAnhDiaDiem) {
        let hinhAnhBase64 = Buffer.from(diaDiem.HinhAnhDiaDiem).toString('base64')
        src = `url(data:image/jpeg;base64,${hinhAnhBase64}`
    }

    return (
        <Link to={linkTo}>
            <li key={diaDiem.IDDiaDiem} className="diaDiem" style={{ backgroundImage: src }}>
                <h4>{diaDiem.TenDiaDiem}</h4>
            </li>
        </Link>
    )
}

export default DiaDiem
