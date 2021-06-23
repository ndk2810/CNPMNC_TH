import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
const MenuKH = () => {
	return (
		<div className="ThongTinKhachHang">
			<div className="menu-khachhang">
				<div className="danhsachdat" style={{ marginTop: 15 }}>
					<FaCalendarAlt style={{ marginRight: 8, color: "blue" }} />
					<Link to="/taikhoan">
						<span style={{ color: "gray", fontSize: 20 }}>Thông tin cá nhân</span>
					</Link>
				</div>
				<div className="danhsachdat" style={{ marginTop: 15 }}>
					<FaCalendarAlt style={{ marginRight: 8, color: "blue" }} />
					<Link to="/lichsudat">
						<span style={{ color: "gray", fontSize: 20 }}>Các Tour Đã Đặt</span>
					</Link>
				</div>
				<div className="danhsachvoucher" style={{ marginTop: 15 }}>
					<FaEnvelope style={{ marginRight: 8, color: "blue" }} />
					<Link to="/voucher">
						{" "}
						<span style={{ color: "gray", fontSize: 20 }}>Khuyến mãi</span>
					</Link>
				</div>
				<div className="danhsachdat" style={{ marginTop: 15 }}>
					<FaCalendarAlt style={{ marginRight: 8, color: "blue" }} />
					<Link to="/yeuThich">
						<span style={{ color: "gray", fontSize: 20 }}>Các Tour Yêu Thích</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default MenuKH;
