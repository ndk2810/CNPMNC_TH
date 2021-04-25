const CardTour = ({ tour }) => {
    return (
        <div className="card-tour">
            {/* <img className="card-tour-img" alt="#" src={tour.hinhAnh} /> */}
            <div className="card-tour-info">
                <p className="type">Tour</p>
                <img className="favourite-btn" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/745a2dacef20a88638b724cfa87c7fd8.svg"></img>
                <h1 className="card-tour-info-tenTour">{tour.TenTour}</h1>
                <img className="card-tour-locationImg" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/e437c4bab99263e4f59a3c7b03552858.svg" width="12" height="12"></img>
                <p className="card-tour-info-diaDiem">{tour.DiaChiTour}</p>
                <p className="card-tour-info-gia">3.500.000 VND</p>
            </div>
        </div>
    )
}

export default CardTour
