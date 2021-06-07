import React from "react";
import BoxThanhToan from "../components/PageThanhToan/BoxThanhToan";
import BoxTour from "../components/PageThanhToan/BoxTour";
import "../styles/thanhToan.css";

const thanhToan = () => {
	return (
		<div>
			<h3 style={{ textAlign: "center" }}>Thanh Toán</h3>
			<BoxTour />
			<BoxThanhToan />
		</div>
	);
};

export default thanhToan;
