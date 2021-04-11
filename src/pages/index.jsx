//import components
import TopImage from '../components/TopImage'
import SearchBox from '../components/SearchBox'
import DiemDenDP from '../components/DiemDenDP'
import Header from '../components/Header'
import Footer from '../components/Footer'

const index = () => {
    return (
        <div className="App">
            <Header />
            <div className="body">
                <TopImage />
                <SearchBox />

                <div className="main-index-body">
                    <DiemDenDP arrDiemDen={diemDen} />
                </div>
                <div className="main-index-body">
                    <DiemDenDP arrDiemDen={diemDen} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

const diemDen = [
    {
        ten: "Sài Gòn",
        img: "https://images.hcmcpv.org.vn/res/news/2020/04/27-04-2020-tphcm-trung-tam-kinh-te-khong-ngung-dot-pha-sang-tao-phat-trien-CFAFCE7.jpg"
    },
    {
        ten: "Nha Trang",
        img: "https://pix10.agoda.net/geo/city/2679/1_2679_02.jpg?s=1920x822"
    },
    {
        ten: "Phú Quốc",
        img: "https://vcdn-dulich.vnecdn.net/2020/05/27/shutterstock-1355875478-3291-1-5462-7597-1590571669.jpg"
    },
    {
        ten: "Phú Quốc",
        img: "https://vcdn-dulich.vnecdn.net/2020/05/27/shutterstock-1355875478-3291-1-5462-7597-1590571669.jpg"
    }
]

export default index
