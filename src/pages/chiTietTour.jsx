//import components
import BoxGioiThieu from '../components/PageChiTietTour/BoxGioiThieu'
import CTHoatDong from '../components/PageChiTietTour/CTHoatDong'
import DatTour from '../components/PageChiTietTour/DatTour'

const chiTietTour = () => {
    return (
        <div className="page-dattour">
            <BoxGioiThieu />
            <CTHoatDong />
            <DatTour />
        </div >
    )
}

export default chiTietTour
