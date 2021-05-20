import HeaderGTTour from './HeaderGTTour'
import BodyGTTour from './BodyGTTour'

const BoxGioiThieu = ({ Tour, HinhAnhTour }) => {
    return (
        <div>
            <div className="noidung-dattour" >
                <HeaderGTTour Tour={Tour} />
                <BodyGTTour Tour={Tour} HinhAnhTour={HinhAnhTour} />
            </div>
        </div>
    )
}

export default BoxGioiThieu
