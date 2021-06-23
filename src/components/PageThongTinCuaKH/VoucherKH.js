import React from "react";

const VoucherKH = ({ ThongTinKhach }) => {
	return (
		<div className="voucher-kh">
			<h3>Khuyến mãi của khách hàng</h3>
			<h4><b>Điểm tích luỹ :</b>  {ThongTinKhach.diem_tich_luy}</h4>
			<div className='box-voucher'>

			</div>
		</div>
	);
};

export default VoucherKH;
