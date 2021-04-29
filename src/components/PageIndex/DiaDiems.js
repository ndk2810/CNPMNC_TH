import React from 'react'
import DiaDiem from './DiaDiem'

const DiaDiems = ({ arrDiaDiem }) => {

    return (
        <div className="list-diaDiemDP">
            <ul>
                {arrDiaDiem.length > 0 ? (arrDiaDiem.map(diaDiem => (
                    <DiaDiem diaDiem={diaDiem} />
                ))) : 'Không có địa điểm nào cả'}
            </ul>
        </div>
    )
}

export default DiaDiems
