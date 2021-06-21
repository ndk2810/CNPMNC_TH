import React from "react";
import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
const MenuKH = () => {
	return (
		<div className="ThongTinKhachHang">
			<div className="menu-khachhang">
				<div className="taikhoan">
					<FaCog style={{ marginRight: 8, color: "blue" }} />
					<Link to="/taikhoan">
						<span style={{ color: "gray", fontSize: 20 }}>Tài Khoản</span>
					</Link>
				</div>
				<div className="danhsachdat" style={{ marginTop: 15 }}>
					<FaCalendarAlt style={{ marginRight: 8, color: "blue" }} />
					<span style={{ color: "gray", fontSize: 20 }}>Các Tour Đã Đặt</span>
				</div>
				<div className="danhsachvoucher" style={{ marginTop: 15 }}>
					<FaEnvelope style={{ marginRight: 8, color: "blue" }} />
					<span style={{ color: "gray", fontSize: 20 }}>
						Voucher Khách hàng
					</span>
				</div>
			</div>
		</div>
	);
};
export default MenuKH;
