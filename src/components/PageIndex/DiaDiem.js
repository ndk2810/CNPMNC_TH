import { Link } from 'react-router-dom'

const DiaDiem = ({ diaDiem }) => {
    const linkTo = '/diaDiem?tenDiaDiem=' + diaDiem.tenDiaDiem
    return (
        <Link to={linkTo}>
            <li className="diaDiem" style={{ backgroundImage: `url(${diaDiem.hinhAnh})` }}>
                <h4>{diaDiem.tenDiaDiem}</h4>
            </li>
        </Link>
    )
}

export default DiaDiem
