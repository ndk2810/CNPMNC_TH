import React from 'react'
import { useState, useEffect } from "react";

import MenuKH from '../components/PageThongTinCuaKH/MenuKH'
import TourDat from '../components/PageThongTinCuaKH/TourDat'
import server from '../serverAddress';

const PageTourDat = () => {
    const idKhach = (JSON.parse(localStorage.getItem('userToken'))).id

    const [ListTourDaDat, setListTourDaDat] = useState([]);
    useEffect(() => {
        fetch(server + "/tour/tourDaDat/" + idKhach)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setListTourDaDat(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="ThongTinKhachHang">
            <MenuKH />
            <TourDat ListTourDaDat={ListTourDaDat} />
        </div>
    )
}

export default PageTourDat
