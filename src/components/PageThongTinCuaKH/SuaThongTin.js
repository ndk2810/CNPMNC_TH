import React, { useState } from "react";
import { Switch } from "antd";
import "antd/dist/antd.css";
import { FaUser } from "react-icons/fa";
// import { FaPen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
const SuaThongTin = () => {
	const [visiable, setVisiable] = useState(false);
	const handleSwitch = () => setVisiable(!visiable);

	const [visiable1, setVisiable1] = useState(false);
	const handleSwitch1 = () => setVisiable1(!visiable1);

	const [visiable2, setVisiable2] = useState(false);
	const handleSwitch2 = () => setVisiable2(!visiable2);
	return (
		<div>
			<div className="box-group">
				<div className="box-ten">
					<FaUser style={{ marginRight: 8, fontWeight: 500 }} />
					<span style={{ fontWeight: "bold", fontSize: 17 }}>TUNG NGUYEN</span>
					<Switch
						checked={visiable}
						onChange={handleSwitch}
						style={{ float: "right" }}
					/>
					<span style={{ float: "right", marginRight: 15 }}>
						Cập nhật thông tin:
					</span>
					{visiable ? (
						<div className="input-sua">
							<h3>Họ và tên</h3>
							<input></input>
							<button type="button">Lưu</button>
						</div>
					) : (
						<></>
					)}
				</div>
				<div className="box-sodienthoai">
					<FaPhone style={{ marginRight: 8, fontWeight: 500 }} />
					<span style={{ fontSize: 18, fontWeight: "bold" }}>Điện thoại</span>
					<Switch
						checked={visiable1}
						onChange={handleSwitch1}
						style={{ float: "right" }}
					/>
					<span style={{ float: "right", marginRight: 15 }}>
						Cập nhật thông tin:
					</span>
					<div className="sodienthoai-kh">1. 0914342555</div>
					{visiable1 ? (
						<div className="input-sua">
							<h3>Số điện thoại</h3>
							<input></input>
							<button type="button">Lưu</button>
						</div>
					) : (
						<></>
					)}
				</div>
				<div className="box-email">
					<FaEnvelopeOpenText style={{ marginRight: 8, fontWeight: 500 }} />
					<span style={{ fontSize: 18, fontWeight: "bold" }}>Email</span>
					<Switch
						checked={visiable2}
						onChange={handleSwitch2}
						style={{ float: "right" }}
					/>
					<span style={{ float: "right", marginRight: 15 }}>
						Cập nhật thông tin:
					</span>
					<div className="email-kh">1.nthanhtung1440@gmail.com</div>
					{visiable2 ? (
						<div className="input-sua">
							<h3>Email</h3>
							<input></input>
							<button type="button">Lưu</button>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default SuaThongTin;
