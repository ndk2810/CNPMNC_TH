//import components
import TopImage from '../components/TopImage'
import SearchBox from '../components/SearchBox'
import DiaDiems from '../components/DiaDiems'

const Index = ({ arrDiaDiem }) => {
    return (
        <div>
            <TopImage />
            <SearchBox />

            <div className="main-index-body">
                <DiaDiems arrDiaDiem={arrDiaDiem} />
            </div>
            <div className="main-index-body">
                <DiaDiems arrDiaDiem={arrDiaDiem} />
            </div>
        </div>
    )
}



export default Index
