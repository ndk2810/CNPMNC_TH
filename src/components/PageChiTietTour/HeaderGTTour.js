import React from 'react'

const HeaderTour = ({ Tour }) => {
    return (
        <div className="diadiem-dattour">
            <p className="tieude-diadiem">{Tour.TenTour}</p>
            <p className="cardtour">Tour</p>
            <img className="cardtourlocationImg" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/e437c4bab99263e4f59a3c7b03552858.svg" width="12" height="12"></img>
            <p className="cardtourinfodiaDiem">{Tour.DiaChiTour}</p>
        </div>
    )
}

export default HeaderTour
