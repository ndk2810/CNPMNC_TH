import React from "react";

const BoxTour = ({ ThongTinDat, NgayDi }) => {
	return (
		<div className="tour">
			<form className="Box-tour">
				<div className="Ma-datcho">
					<h3 style={{ fontSize: 14 }}>Mã đặt chỗ</h3>
					<div className="Ma-so-datcho">{ThongTinDat.IDDat}</div>
				</div>
				<div className="Box-tour-chiTietDat">
					<div className="Chitietdat">
						<h4 className="Chitiet1"></h4>
						<h3 className="Chitiet2">Chi tiết đặt chỗ</h3>
					</div>
					<div className="ngaythamquan">
						<div>Ngày tham quan</div>
						<div>{NgayDi}</div>
					</div>
					<div className="apdung">
						<div>Áp dụng cho</div>
						<div>{ThongTinDat.SoLuongNguoiLon} người lớn, {ThongTinDat.SoLuongTreEm} trẻ em</div>
					</div>
					<div className="thoigian">
						<div>Khung thời gian</div>
						<div>08:30</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BoxTour;
