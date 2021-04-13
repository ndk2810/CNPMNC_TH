import { Link } from 'react-router-dom'

const DiaDiem = ({ diaDiem }) => {
    return (
        <Link to="/diaDiem">
            <li className="diaDiem" style={{ backgroundImage: `url(${diaDiem.hinhAnh})` }}>
                <h4>{diaDiem.tenDiaDiem}</h4>
            </li>
        </Link>
    )
}

export default DiaDiem
