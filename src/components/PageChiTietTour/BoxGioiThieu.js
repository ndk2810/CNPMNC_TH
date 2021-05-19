import HeaderGTTour from './HeaderGTTour'
import BodyGTTour from './BodyGTTour'

const BoxGioiThieu = ({ Tour }) => {
    return (
        <div>
            <div className="noidung-dattour" >
                <HeaderGTTour Tour={Tour} />
                <BodyGTTour Tour={Tour} />
            </div>
        </div>
    )
}

export default BoxGioiThieu
