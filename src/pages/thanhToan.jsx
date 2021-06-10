import React from "react";
import { useState, useEffect } from 'react'
import server from '../serverAddress'

//COMPONENTS
import BoxThanhToan from "../components/PageThanhToan/BoxThanhToan";
import BoxTour from "../components/PageThanhToan/BoxTour";
import "../styles/thanhToan.css";

const axios = require('axios');

//test link: http://localhost:3000/thanhToan?HoTenChung=Khang&SoDienThoaiChung=0123456789&IDTour=1&NgayDi=5/5/2021

const ThanhToan = () => {
	const search = window.location.search;
	const params = new URLSearchParams(search);

	const IDTour = params.get('IDTour');
	const HoTen = params.get('HoTenChung');
	const SoDienThoai = params.get('SoDienThoaiChung');
	const NgayDi = params.get('NgayDi');

	//Search tour
	const [ThongTinDat, setThongTinDat] = useState([])
	useEffect(() => {
		axios.post(server + '/datTour/chiTiet/useThongTinCT', {
			HoTen: HoTen,
			SoDienThoai: SoDienThoai,
			NgayDi: NgayDi,
			IDTour: IDTour
		})
			.then((res) => {
				setThongTinDat(res.data[0])
				console.log(ThongTinDat)
			})
			.catch(err => alert(err))
	}, []);

	//GET thông tin tour
	const [Tour, setTour] = useState([]);
	useEffect(() => {
		fetch(server + "/tour/chiTiet/" + IDTour)
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				setTour(data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h3 style={{ textAlign: "center" }}>Thanh Toán</h3>
			<BoxTour ThongTinDat={ThongTinDat} NgayDi={NgayDi} />
			<BoxThanhToan ThongTinDat={ThongTinDat} Tour={Tour} />
		</div>
	);
};

export default ThanhToan;
