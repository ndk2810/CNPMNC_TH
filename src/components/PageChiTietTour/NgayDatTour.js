import React from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import numberComma from "../../resources/scripts/numberComma";
import { Link } from "react-router-dom";

function NgayDatTour({ Tour, KhungThoiGian }) {
	var today = new Date();
	const tinhTongGiaTien = () => {
		const soNguoiLon = parseInt(document.getElementById("soNguoiLon").value);
		const soTreEm = parseInt(document.getElementById("soTreEm").value);

		document.getElementById("tongTien").innerText =
			numberComma(
				soNguoiLon * Tour.GiaNguoiLon * 1000 + soTreEm * Tour.GiaTreEm
			) + " VNĐ";
	};

	const validation = () => {
		const userInfo = localStorage.getItem('userInfo')

		if (userInfo) {
			const ngayDi = document.getElementById("ngayDi").value;
			const soNguoiLon = document.getElementById("soNguoiLon").value;
			const soTreEm = document.getElementById("soTreEm").value;
			const idKhungGio = document.getElementById("khungGio").value;

			if (ngayDi)
				window.location.href =
					"/datCho?ngayDi=" +
					ngayDi +
					"&soNguoiLon=" +
					soNguoiLon +
					"&soTreEm=" +
					soTreEm +
					"&idKhungGio=" +
					idKhungGio +
					"&idTour=" +
					Tour.IDTour;
			else
				alert("Vui lòng chọn ngày đi");
		}
		else
			alert('Vui lòng đăng nhập !')
	};

	var today = new Date();

	return (
		<div>
			<form>
				<div className="ngayDatTour">
					<div className="ngayDatTour-calendar">
						<DatePickerComponent
							id="ngayDi"
							placeholder="Enter Date"
							min={today}
						></DatePickerComponent>
					</div>

					<div className="ngayDatTour-soNguoiDi">
						<div className="ngayDatTour-soNguoiDi-input">
							<label>Số người lớn </label>
							<input
								id="soNguoiLon"
								onChange={tinhTongGiaTien}
								type="number"
								min={Tour.NguoiLonToiThieu}
								defaultValue={Tour.NguoiLonToiThieu}
							/>
						</div>
						<div className="ngayDatTour-soNguoiDi-input">
							<label>Số trẻ em </label>
							<input
								id="soTreEm"
								onChange={tinhTongGiaTien}
								type="number"
								min="0"
								defaultValue="0"
							/>
						</div>
						<div className="ngayDatTour-soNguoiDi-input">
							<label>Tổng giá tiền </label>
							<p id="tongTien"></p>
						</div>
					</div>

					<div className="ngayDatTour-khungGio">
						<div className="ngayDatTour-khungGio-input">
							<label>Khung giờ </label>
							<select id="khungGio">
								{KhungThoiGian.map((khungTG) => {
									return (
										<option value={khungTG.IDKhungThoiGian}>
											{khungTG.ThoiGian}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				</div>
				<p onClick={validation} className="ngayDatTour-submit">
					Hoàn thành
				</p>
			</form>
		</div>
	);
}

export default NgayDatTour;
