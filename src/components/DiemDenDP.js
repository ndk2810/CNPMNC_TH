import React from 'react'
import DiemDen from './DiemDen'

const DiemDenDP = ({ arrDiemDen }) => {
    return (
        <div className="list-diemDenDP">
            <h1>Điểm đến địa phương</h1>
            <h3>Những nơi đáng tham quan và khám phá trong nước</h3>
            <ul>
                {arrDiemDen.map(diemDen => (
                    <DiemDen diemDen={diemDen} />
                ))}
            </ul>
        </div>
    )
}

export default DiemDenDP
