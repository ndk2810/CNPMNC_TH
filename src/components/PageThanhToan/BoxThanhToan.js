import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
	"pk_test_51IzjQtAHeeyUAi3R0NUAODbvvHUsbSnR28rxbiSZOC2MVmk1M5d835wj7Nh6GwMCERYO4cgUwVt7V9elmc27uFC7002UAaioYH";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const BoxThanhToan = ({ Tour, ThongTinDat }) => {
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
					<h2
						style={{
							fontSize: 15,
							marginLeft: 15,
							paddingTop: 50,
							marginBottom: 10,
						}}
					>
						Thẻ Tín Dụng
					</h2>
					<Elements stripe={stripeTestPromise}>
						<PaymentForm
							amount={ThongTinDat.TongTien}
							tenTour={Tour.TenTour}
							hoTen={ThongTinDat.HoTen}
							ThongTinDat={ThongTinDat}
						/>
					</Elements>
					{/* <div className="voucher">
						<input
							type="text"
							placeholder="Nhập mã giảm giá"
							className="voucher-input"
						></input>
						<button className="voucher-btn">Áp dụng mã</button>
					</div> */}

					<div className="box-giatienchitiet">
						<h3 style={{ marginLeft: 20 }}>Chi tiết giá</h3>
						<div className="giachitiet">
							<div className="chitiettour">{Tour.TenTour}</div>
							<div className="tien">{ThongTinDat.TongTien} VND</div>
						</div>
						<div className="gia-tongtien">
							<div className="tongtien">Tổng tiền</div>
							<div className="tien">{ThongTinDat.TongTien} VND</div>
						</div>
					</div>
					<div className="end-box-thanhtoan">
						<p>
							<span>
								Bằng việc nhấn Thanh toán, bạn đồng ý với{" "}
								<a href="https://www.traveloka.com/en-vn/termsandconditions">
									Điều khoản & Điều kiện
								</a>{" "}
								và{" "}
								<a href="https://www.traveloka.com/en-vn/privacypolicy">
									Chính sách quyền riêng tư
								</a>
							</span>
						</p>
						{/* <button className="btn-thanhtoan">
							<img
								src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/17/1484666312891-e732ae873c384e84346bcccb8bb3eb1c.png?tr=q-75"
								style={{ width: 15 }}
							></img>
							<span style={{ paddingLeft: 8 }}>
								Thanh toán
							</span>
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxThanhToan;
