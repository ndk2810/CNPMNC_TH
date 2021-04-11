import React from 'react'
import { Link } from 'react-router-dom'

const DiemDen = ({ diemDen }) => {
    return (
        <Link to="/diaDiem">
            <li className="diemDen" style={{ backgroundImage: `url(${diemDen.img})` }}>
                <h4>{diemDen.ten}</h4>
            </li>
        </Link>
    )
}

export default DiemDen
