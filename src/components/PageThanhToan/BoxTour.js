import React from "react";

const BoxTour = ({ Tour, ngayDi, soNguoiLon, soTreEm, KhungThoiGian }) => {
	return (
		<div className="tour">
			<form className="Box-tour">
				<div className="Ma-datcho">
					<h3 style={{ fontSize: 14 }}>Mã đặt chổ</h3>
					<div className="Ma-so-datcho">123456789</div>
				</div>
				<div className="Chitietdat">
					<h4 className="Chitiet1"></h4>
					<h3 className="Chitiet2">Chi tiết đặt chổ</h3>
					<p className="diadiemtour">đi biển</p>
				</div>
				<div className="ngaythamquan">
					<div>Ngày tham quan</div>
					<div>T7,5 th06 2021</div>
				</div>
				<div className="apdung">
					<div>Áp dụng cho</div>
					<div>người lớn,1</div>
				</div>
				<div className="thoigian">
					<div>Khung thời gian</div>	
					<div>08:30</div>
				</div>
			</form>
		</div>
	);
};

export default BoxTour;
