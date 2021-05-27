import React from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import numberComma from "../../resources/scripts/numberComma";
import { Link } from 'react-router-dom'

function NgayDatTour({ Tour, KhungThoiGian }) {
	const tinhTongGiaTien = () => {
		const soNguoiLon = parseInt(document.getElementById('soNguoiLon').value)
		const soTreEm = parseInt(document.getElementById('soTreEm').value)

		document.getElementById('tongTien').innerText = numberComma((soNguoiLon * Tour.GiaNguoiLon * 1000) + (soTreEm * Tour.GiaTreEm)) + " VNĐ"
	}

	return (
		<div>
			<form>
				<div className="ngayDatTour">
					<div className="ngayDatTour-calendar">
						<DatePickerComponent placeholder="Enter Date"></DatePickerComponent>
					</div>

					<div className="ngayDatTour-soNguoiDi">
						<div className="ngayDatTour-soNguoiDi-input">
							<label>Số người lớn </label>
							<input id="soNguoiLon" onChange={tinhTongGiaTien} type="number" min={Tour.NguoiLonToiThieu} defaultValue={Tour.NguoiLonToiThieu} />
						</div>
						<div className="ngayDatTour-soNguoiDi-input">
							<label>Số trẻ em </label>
							<input id="soTreEm" onChange={tinhTongGiaTien} type="number" min="0" defaultValue="0" />
						</div>
						<div className="ngayDatTour-soNguoiDi-input">
							<label>Tổng giá tiền </label>
							<p id="tongTien"></p>
						</div>
					</div>

					<div className="ngayDatTour-khungGio">
						<div className="ngayDatTour-khungGio-input">
							<label>Khung giờ </label>
							<select>
								{
									KhungThoiGian.map(khungTG => {
										return (
											<option value={khungTG.IDKhungThoiGian}>{khungTG.ThoiGian}</option>
										)
									})
								}
							</select>
						</div>
					</div>
				</div>
				<Link to="/datCho" className="ngayDatTour-submit">Hoàn thành</Link>
			</form>
		</div>
	);
}

export default NgayDatTour;