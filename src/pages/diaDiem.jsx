import { useState, useEffect } from 'react'
import '../styles/diaDiem.css'

//COMPONENTS
import TourList from '../components/PageDiaDiem/TourList'
import SearchBoxCT from '../components/PageDiaDiem/SearchBoxCT'
import BoLoc from '../components/PageDiaDiem/BoLoc'

const DiaDiem = () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let diaDiem = params.get('tenDiaDiem');

    const [Tours, setTours] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/tour/" + diaDiem)
            .then(data => {
                return data.json();
            })
            .then(data => {
                setTours(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <SearchBoxCT />
            <div className="main-index-body">
                <h4 className="h4-chiTiet">Tất cả kết quả cho {diaDiem}</h4>
                <BoLoc />
                <TourList tours={Tours} />
            </div>
        </div>
    )
}

export default DiaDiem
