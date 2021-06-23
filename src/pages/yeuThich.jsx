import { useState, useEffect } from "react";
import MenuKH from '../components/PageThongTinCuaKH/MenuKH'
import ToursYeuThich from '../components/PageThongTinCuaKH/ToursYeuThich'
import server from '../serverAddress';

const YeuThich = () => {
    const idKhach = (JSON.parse(localStorage.getItem('userToken'))).id

    const [YeuThich, setYeuThich] = useState([]);
    useEffect(() => {
        fetch(server + "/tour/getFavorites/" + idKhach)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setYeuThich(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="ThongTinKhachHang">
            <MenuKH />
            <ToursYeuThich YeuThich={YeuThich} />
        </div>
    )
}

export default YeuThich
