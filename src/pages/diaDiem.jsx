import { useState, useEffect } from 'react'
import '../styles/diaDiem.css'

//COMPONENTS
import TourList from '../components/PageDiaDiem/TourList'
import SearchBoxCT from '../components/PageDiaDiem/SearchBoxCT'
import BoLoc from '../components/PageDiaDiem/BoLoc'

const DiaDiem = () => {
    //Lấy những query parameters
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let IDDiaDiem = params.get('IDDiaDiem');
    let TenDiaDiem = params.get('TenDiaDiem');

    //Bộ lọc
    const [filterList, setFilterList] = useState([1, 2, 3, 4, 5])
    const filterTour = () => {
        let arr = []
        const ul = document.getElementsByClassName('loc-key')

        for (let i = 0; i < ul.length; i++) {
            ul[i].checked && arr.push(parseInt(ul[i].value))
        }

        setFilterList(arr)
    }

    //Lấy các tours có IDDiaDiem này
    const [Tours, setTours] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tour/" + IDDiaDiem)
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
                <h4 className="h4-chiTiet">Tất cả kết quả cho {TenDiaDiem}</h4>
                <BoLoc filterTour={filterTour} />
                <TourList filterList={filterList} tours={Tours} />
            </div>
        </div>
    )
}

export default DiaDiem
