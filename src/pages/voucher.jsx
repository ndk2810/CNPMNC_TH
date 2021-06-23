import React from 'react'
import { useState, useEffect } from "react";

import MenuKH from '../components/PageThongTinCuaKH/MenuKH'
import VoucherKH from '../components/PageThongTinCuaKH/VoucherKH'

const Voucher = () => {
    const idKhach = (JSON.parse(localStorage.getItem('userToken'))).id

    const [ThongTinKhach, setThongTinKhach] = useState([]);
    useEffect(() => {
        fetch("https://gift-api-v1.herokuapp.com/customer/detail/?id=" + idKhach)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setThongTinKhach(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="ThongTinKhachHang">
            <MenuKH />
            <VoucherKH ThongTinKhach={ThongTinKhach} />
        </div>
    )
}

export default Voucher
