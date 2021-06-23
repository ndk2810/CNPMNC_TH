import { useState, useEffect } from 'react'
import server from '../serverAddress'

import FormCTDat from '../components/PageChiTietDat/FormCTDat'

const DatChiTiet = () => {
    //Lấy những query parameters
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let IDDat = params.get('IDDat');
    let IDTour = params.get('IDTour');

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

    const [Tour, setTour] = useState([])
    useEffect(() => {
        fetch(server + "/tour/chiTiet/" + IDTour)
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

    return (
        <div className="main-body">
            <FormCTDat Dat={Dat} Tour={Tour} />
        </div>
    )
}

export default DatChiTiet
