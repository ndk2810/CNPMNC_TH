import { useState, useEffect } from 'react'
import '../styles/chiTietTour.css'
//import components
import BoxGioiThieu from '../components/PageChiTietTour/BoxGioiThieu'
import CTHoatDong from '../components/PageChiTietTour/CTHoatDong'
import DatTour from '../components/PageChiTietTour/DatTour'

const ChiTietTour = () => {
    //Lấy những query parameters
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let IDTour = params.get('IDTour');
    let TenTheLoai = params.get('TenTheLoai');

    const [Tour, setTour] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tour/chiTiet/" + IDTour)
            .then(data => {
                return data.json();
            })
            .then(data => {
                setTour(data[0]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const [HinhAnhTour, setHinhAnhTour] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tour/ListHinhAnh/" + IDTour)
            .then(data => {
                return data.json();
            })
            .then(data => {
                setHinhAnhTour(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="page-dattour">
            <BoxGioiThieu Tour={Tour} HinhAnhTour={HinhAnhTour} />
            <CTHoatDong Tour={Tour} TenTheLoai={TenTheLoai} />
            <DatTour Tour={Tour} />
        </div >
    )
}

export default ChiTietTour
