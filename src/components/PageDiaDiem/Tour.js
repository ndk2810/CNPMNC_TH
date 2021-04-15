const CardTour = ({ tour }) => {
    return (
        <div className="card-tour">
            <img className="card-tour-img" alt="#" src={tour.hinhAnh} />
            <div className="card-tour-info">
                <h1>{tour.tenTour}</h1>
                <p>{tour.diaDiem}</p>
                <p>{tour.gia}</p>
                <p>{tour.diemNoiBat}</p>
                <p>{tour.gioiThieu}</p>
            </div>
        </div>
    )
}

export default CardTour
