import { useState, useEffect } from 'react'
import server from '../serverAddress'

import FormCTDat from '../components/PageChiTietDat/FormCTDat'

const DatChiTiet = () => {
    //Lấy những query parameters
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let IDDat = params.get('IDDat');

    const [Dat, setDat] = useState([])
    useEffect(() => {
        fetch(server + "/datTour/chiTiet/" + IDDat)
            .then(data => {
                return data.json();
            })
            .then(data => {
                setDat(data[0]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="main-body">
            <FormCTDat Dat={Dat} />
        </div>
    )
}

export default DatChiTiet
