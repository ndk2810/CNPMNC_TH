import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import numberComma from '../../resources/scripts/numberComma'
import server from '../../serverAddress'

const CardTour = ({ tour }) => {
	//GET Hình ảnh bìa của tour
	let [HinhAnh, setHinhAnh] = useState([]);
	useEffect(() => {
		fetch(server + "/tour/hinhAnh/" + tour.IDTour)
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				if (data.length > 0) setHinhAnh(data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	//GET thể loại tour
	let [TheLoaiTour, setTheLoaiTour] = useState([]);
	useEffect(() => {
		fetch(server + "/theLoaiTour/" + tour.IDTheLoaiTour)
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				if (data.length > 0) setTheLoaiTour(data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	//Decode hình ảnh từ binary thành base64 để hiển thị
	let src = "https://semantic-ui.com/images/wireframe/white-image.png";
	if (HinhAnh.HinhAnh) {
		let hinhAnhBase64 = Buffer.from(HinhAnh.HinhAnh).toString("base64");
		src = `data:image/jpeg;base64,${hinhAnhBase64}`;
	}

	const linkTo =
		"/thongTinTour?IDTour=" +
		tour.IDTour +
		"&TenTheLoai=" +
		TheLoaiTour.TenTheLoaiTour;

	return (
		<div className="card-tour">
			<Link to={linkTo}>
				<img
					className="card-tour-img"
					alt="#"
					src={src}
				/>
			</Link>
			<div className="card-tour-info">
				<p className="card-tour-type">Tour</p>
				<p className="card-tour-theLoai">{TheLoaiTour.TenTheLoaiTour}</p>
				<Link to={linkTo}>
					<h1 className="card-tour-info-tenTour">{tour.TenTour}</h1>
				</Link>
				<Link to={linkTo}>
					<img
						className="card-tour-locationImg"
						src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/e437c4bab99263e4f59a3c7b03552858.svg"
						width="12"
						height="12"
					></img>
				</Link>
				<p className="card-tour-info-diaDiem">{tour.DiaChiTour}</p>
				<p className="card-tour-info-gia">{numberComma(tour.GiaNguoiLon)} VNĐ</p>
			</div>
		</div>
	);
};

export default CardTour;
