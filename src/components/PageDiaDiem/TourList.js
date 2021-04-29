import CardTour from './CardTour'

const TourList = ({ filterList, tours }) => {
    return (
        <div className="tour-list">
            {tours.map(tour => {
                return (
                    filterList.find(IDTheLoai => IDTheLoai === tour.IDTheLoaiTour) && <CardTour tour={tour} />
                )
            })}
        </div>
    )
}

export default TourList
