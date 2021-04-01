import React from 'react'

const DiemDen = ({ diemDen }) => {
    return (
        <li className="diemDen">
            <h4>{diemDen.ten}</h4>
            <img src={diemDen.img} alt="" />
        </li>
    )
}

export default DiemDen
