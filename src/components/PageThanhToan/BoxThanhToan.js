import React from "react";
import { Input } from "antd";
//import "antd/dist/antd.css";
const BoxThanhToan = () => {
	return (
		<div className="container-thanhtoan">
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
						style={{ width: 445, marginLeft: 15, padding: 6 }}
					></Input>
					<div className="input-group-thoigianthe">
						<div className="input-group1">
							<p>Hiệu lực đến</p>
							<Input placeholder="MM/YY" style={{ padding: 6 }}></Input>
						</div>
						<div className="input-group2">
							<p>CVV</p>
							<Input placeholder="3 số CVV" style={{ padding: 6 }}></Input>
						</div>
					</div>
					<div className="input-ten">
						<h3
							style={{
								fontSize: 15,
								marginLeft: 20,
								paddingTop: 20,
								padding: 6,
							}}
						>
							Tên trên thẻ
						</h3>
						<Input
							placeholder="Tên trên thẻ"
							style={{ width: 445, marginLeft: 15, padding: 6 }}
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
					<div className="end-box-thanhtoan">
						<p>
							<span>
								Bằng việc nhấn Thanh toán, bạn đồng ý
								<a href="https://www.traveloka.com/en-vn/termsandconditions">
									Điều khoản & Điều kiện
								</a>
								và
								<a href="https://www.traveloka.com/en-vn/privacypolicy">
									Chính sách quyền riêng tư
								</a>
							</span>
						</p>
						<button className="btn-thanhtoan">
							<img
								src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/17/1484666312891-e732ae873c384e84346bcccb8bb3eb1c.png?tr=q-75"
								style={{ width: 15 }}
							></img>
							<span style={{ paddingLeft: 8 }}>
								Thanh toán thẻ tín dụng Paypal
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxThanhToan;
