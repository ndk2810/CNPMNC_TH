import React from "react";
import { useLocation } from "react-router";

const CTHoatDong = ({ Tour }) => {
	const tentheloaitour = useLocation();
	console.log(tentheloaitour);
	const query = new URLSearchParams(tentheloaitour.search);
	return (
		<div>
			<div className="hoatdong">
				<h3 className="type-hoatdong">Chi tiết hoạt động</h3>
				<div className="DiemNoiBat-hoatdong">
					<div className="NoiDung-DiemNoiBat ">
						<div className="NoiDung-DiemNoiBat-ChiTiet">
							<h2 className="TieuDe-NoiDung-DiemNoiBat-ChiTiet">
								Điểm nổi bật
							</h2>
							<div className="GioiThieu-NoiDung-DiemNoiBat-ChiTiet">
								{Tour.DiemNoiBat}
							</div>
						</div>
						<div className="YeuThich-NoiDung-DiemNoiBat">
							<div className="Image-YeuThich-NoiDung-DiemNoiBat">
								<img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582533078216-28e45a291d35a380e73193eff26b4938.png"></img>
							</div>
							<div className="NoiDung-YeuThich-NoiDung-DiemNoiBat">
								Yêu thích:{query.get("TenTheLoai")}
							</div>
						</div>
						<div className="LichTrinh-NoiDung-DiemNoiBat">
							<h2
								className="TieuDe-LichTrinh-NoiDung-DiemNoiBat"
								style={{ fontSize: 15, paddingTop: 30 }}
							>
								Lịch trình tour
							</h2>
							<div className="NoiDung-LichTrinh-NoiDung-DiemNoiBat">
								{Tour.LichTrinh}
							</div>
						</div>
						<div className="TraiNghiem-NoiDung-DiemNoiBat">
							<h2
								className="TieuDe-TraiNghiem-DiemNoiBat-ChiTiet"
								style={{ paddingTop: 15 }}
							>
								Bạn sẽ trải nghiệm
							</h2>
							<div
								className="NoiDung-TraiNghiem-NoiDung-DiemNoiBat"
								style={{ paddingTop: 10 }}
							>
								{Tour.NoiDungTour}
							</div>
						</div>
					</div>
					<div className="Noidung-DatTour-small-hoatdong ">
						<div className="tieude-diadiem">{Tour.TenTour}</div>
						<div className="btn-timtour btn-Noidung-DatTour-small-hoatdong">
							Tìm tour
						</div>
						<div className="Ve-Noidung-DatTour-small-hoatdong">
							<img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582532977248-c01603da7f91217b28788f2c9642158f.png?tr=h-16,w-16"></img>
							<p className="title-Ve-Noidung-DatTour-small-hoatdong">
								Ngày có vé tiếp theo: Chủ Nhật, 09 May 2021
							</p>
						</div>
						<div className="ThoiGian-Noidung-DatTour-small-hoatdong">
							<img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582533047443-34d220e4b4d814bd55e67b2677144ca4.png?tr=h-16,w-16"></img>
							<p className="title-ThoiGian-Noidung-DatTour-small-hoatdong">
								Độ dài: {Tour.DoDai} giờ
							</p>
						</div>
						<div className="TinhNang-Noidung-DatTour-small-hoatdong">
							Tính năng
						</div>
						<div className="Easy-Noidung-DatTour-small-hoatdong">
							<img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/22/1616400208843-5663daf4fb49618b48d0b3994b2eb396.png"></img>
							<p className="title-Easy-Noidung-DatTour-small-hoatdong">
								Easy Refund
							</p>
						</div>
						<div className="Gia-Noidung-DatTour-small-hoatdong">
							<img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582533156947-8b600d26b18117730c2ce64fbb2bc3a0.png"></img>
							<p className="title-Gia-Noidung-DatTour-small-hoatdong">
								Giá đặc biệt
							</p>
						</div>
						<div className="Accept-Noidung-DatTour-small-hoatdong">
							<img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582540787301-acbdf7cfb83202c8f12f58580001f5fe.png"></img>
							<p className="title-Accept-Noidung-DatTour-small-hoatdong">
								Xác nhận tức thì
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="ThongTin-DuaDon">
				<div className="Type-ThongTin-DuaDon"></div>
				<div className=""></div>
			</div> */}
		</div>
	);
};

export default CTHoatDong;
