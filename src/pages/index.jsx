//import components
import TopImage from '../components/PageIndex/TopImage'
import SearchBox from '../components/PageIndex/SearchBox'
import DiaDiems from '../components/PageIndex/DiaDiems'

const Index = ({ arrDiaDiem }) => {
    return (
        <div>
            <TopImage />
            <SearchBox />

            <div className="main-index-body">
                <div className="list-diaDiemDP">
                    <h1>Điểm đến địa phương</h1>
                    <h4>Những nơi đáng tham quan và khám phá trong nước</h4>
                </div>
                <DiaDiems arrDiaDiem={arrDiaDiem} />


                <div className="list-diaDiemDP">
                    <h1>Khám phá thế giới</h1>
                    <h4>Du lịch thật xa đến những đất nước đang được nhiều người yêu thích</h4>
                </div>
                <DiaDiems arrDiaDiem={arrDiaDiem} />
            </div>
        </div>
    )
}



export default Index
