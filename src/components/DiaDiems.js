import React from 'react'
import DiaDiem from './DiaDiem'

const DiaDiems = ({ arrDiaDiem }) => {
    return (
        <div className="list-diaDiemDP">
            <h1>Điểm đến địa phương</h1>
            <h4>Những nơi đáng tham quan và khám phá trong nước</h4>
            <ul>
                {arrDiaDiem.length > 0 ? (arrDiaDiem.map(diaDiem => (
                    <DiaDiem diaDiem={diaDiem} />
                ))) : 'No data to show'}
            </ul>
        </div>
    )
}

export default DiaDiems
