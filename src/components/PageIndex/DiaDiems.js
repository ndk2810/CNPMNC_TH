import React from 'react'
import DiaDiem from './DiaDiem'

const DiaDiems = ({ arrDiaDiem }) => {

    return (
        <div className="list-diaDiemDP">
            <ul>
                {arrDiaDiem.length > 0 ? (arrDiaDiem.map(diaDiem => (
                    <DiaDiem diaDiem={diaDiem} />
                ))) : 'No data to show'}
            </ul>
        </div>
    )
}

export default DiaDiems
