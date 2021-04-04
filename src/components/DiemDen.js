import React from 'react'

const DiemDen = ({ diemDen }) => {
    return (
        <li className="diemDen" style={{ backgroundImage: `url(${diemDen.img})` }}>
            <h4>{diemDen.ten}</h4>
        </li>
    )
}

export default DiemDen
