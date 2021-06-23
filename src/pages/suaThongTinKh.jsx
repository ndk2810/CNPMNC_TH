import React from "react";
import { useState, useEffect } from "react";

import MenuKH from "../components/PageThongTinCuaKH/MenuKH";
import SuaThongTin from "../components/PageThongTinCuaKH/SuaThongTin";

import "../styles/ThongTinKH.css";

const SuaThongTinKh = () => {
	const idKhach = (JSON.parse(localStorage.getItem('userToken'))).id

	//GET thông tin khách hàng
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
			<SuaThongTin ThongTinKhach={ThongTinKhach} />
		</div>
	);
};

export default SuaThongTinKh;
