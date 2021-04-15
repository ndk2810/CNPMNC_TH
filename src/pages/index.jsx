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
                <DiaDiems arrDiaDiem={arrDiaDiem} />

                <DiaDiems arrDiaDiem={arrDiaDiem} />
            </div>
        </div>
    )
}



export default Index
