import CardTour from './CardTour'

const TourList = ({ filterList, tours }) => {
    return (
        <div className="tour-list">
            {tours.map(tour => {
                return (
                    //Nếu IDTheLoai của tour nằm trong Array filterList thì sẽ không hiển thị
                    filterList.find(IDTheLoai => IDTheLoai === tour.IDTheLoaiTour) && <CardTour tour={tour} />
                )
            })}
        </div>
    )
}

export default TourList
