import { useState, useEffect } from "react";
import server from "../serverAddress";

//COMPONENTS
import BoxThanhToan from "../components/PageThanhToan/BoxThanhToan";
import BoxTour from "../components/PageThanhToan/BoxTour";
import "../styles/thanhToan.css";

const axios = require("axios");

//test link: http://localhost:3000/thanhToan?HoTenChung=T%C3%B9ng&SoDienThoaiChung=0123456789&IDTour=8&NgayDi=6/21/2021&KTG=14:00&TGTO=0x0D000001E51E1228


const ThanhToan = () => {
	const search = window.location.search;
	const params = new URLSearchParams(search);

	const IDTour = params.get("IDTour");
	const SoDienThoai = params.get("SoDienThoaiChung");
	const NgayDi = params.get("NgayDi");
	const KTG = params.get("KTG");
	const TGTO = params.get("TGTO");

	//Search tour
	const [ThongTinDat, setThongTinDat] = useState([]);
	useEffect(() => {
		axios
			.post(server + "/datTour/chiTiet/useThongTinCT", {
				SoDienThoai: SoDienThoai,
				NgayDi: NgayDi,
				IDUser: JSON.parse(window.localStorage.getItem("userToken")).id,
				IDTour: IDTour,
				ThoiGianTaoOrder: TGTO,
			})
			.then((res) => {
				setThongTinDat(res.data[0]);
			})
			.catch((err) => alert(err));
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
			<h3 style={{ textAlign: "center", fontSize: 25 }}>Thanh Toán</h3>
			<BoxTour ThongTinDat={ThongTinDat} NgayDi={NgayDi} KTG={KTG} />
			<BoxThanhToan ThongTinDat={ThongTinDat} Tour={Tour} />
		</div>
	);
};

export default ThanhToan;
