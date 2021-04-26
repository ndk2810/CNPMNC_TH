import CardTour from './CardTour'

const TourList = ({ tours }) => {
    return (
        <div className="tour-list">
            {tours.map(tour => {
                return (
                    <CardTour tour={tour} />
                )
            })}
        </div>
    )
}

export default TourList
