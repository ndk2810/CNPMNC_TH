import '../styles/datCho.css'

//COMPONENTS
import ThongTinLienHe from '../components/PageDatCho/ThongTinLienHe'
import ThongTinKhach from '../components/PageDatCho/ThongTinKhach'
import BoxTourDat from '../components/PageDatCho/BoxTourDat'

const datCho = () => {
    return (
        <div>
            <div className="main-index-body">
                <h1>Đặt chỗ của tôi</h1>
                <h4>Điền thông tin và xem lại đặt chỗ.</h4>
                <BoxTourDat />
                <ThongTinLienHe />
                <ThongTinKhach />
            </div>
        </div>
    )
}

export default datCho
