import Tour from './Tour'

const TourList = ({ tours }) => {
    return (
        <div className="tour-list">
            {tours.map(tour => {
                return (
                    <Tour tour={tour} />
                )
            })}
        </div>
    )
}

export default TourList
