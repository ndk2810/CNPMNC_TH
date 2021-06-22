import React from "react";
import MenuKH from "../components/PageThongTinCuaKH/MenuKH";
import SuaThongTin from "../components/PageThongTinCuaKH/SuaThongTin";
import "../styles/ThongTinKH.css";

const suaThongTinKh = () => {
	return (
		<div className="ThongTinKhachHang">
			<MenuKH />
			<SuaThongTin />
		</div>
	);
};

export default suaThongTinKh;
