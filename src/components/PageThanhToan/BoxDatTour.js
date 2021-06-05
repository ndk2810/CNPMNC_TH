import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
const BoxDatTour = () => {
	return (
		<div className="container-thanhtoan">
			<h3>Thanh Toán</h3>
			<div className="box">
				<div className="box-gioithieu">
					<span style={{ marginLeft: 40 }}>travelokaPay</span>
					<h3
						className="hinhthuc-thanhtoan"
						style={{ fontSize: 13, marginLeft: 15, paddingTop: 15 }}
					>
						Thẻ Tín Dụng
					</h3>
				</div>
				<div className="box-thanhtoan">
					<h2 style={{ fontSize: 15, marginLeft: 15, paddingTop: 50 }}>
						Thẻ Tín Dụng
					</h2>
					<h3 style={{ fontSize: 15, marginLeft: 15, paddingTop: 20 }}>
						Số thẻ tín dụng
					</h3>
					<Input
						placeholder="16 chữ số mặt trên mặt thẻ"
						style={{ width: 445, marginLeft: 15 }}
					></Input>
					<div className="input-group-thoigianthe">
						<div className="input-group1">
							<p>Hiệu lực đến</p>
							<Input placeholder="MM/YY"></Input>
						</div>
						<div className="input-group2">
							<p>CVV</p>
							<Input placeholder="3 số CVV"></Input>
						</div>
					</div>
					<div className="input-ten">
						<h3 style={{ fontSize: 15, marginLeft: 20, paddingTop: 20 }}>
							Tên trên thẻ
						</h3>
						<Input
							placeholder="Tên trên thẻ"
							style={{ width: 445, marginLeft: 15 }}
						></Input>
					</div>
					<div className="box-giatienchitiet">
						<h3 style={{ marginLeft: 20 }}>Chi tiết giá</h3>
						<div className="giachitiet">
							<div className="chitiettour">Tour nha trang</div>
							<div className="tien">690.000VND</div>
						</div>
						<div className="giachitiet-tienich">
							<div className="tienich">Phí tiện ích</div>
							<div className="tien">690.000VND</div>
						</div>
						<div className="gia-tongtien">
							<div className="tongtien">Tổng tiền</div>
							<div className="tien">690.000VND</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxDatTour;
