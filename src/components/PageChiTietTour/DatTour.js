import React, { useState } from "react";
import NgayDatTour from "./NgayDatTour";

const DatTour = ({ Tour, KhungThoiGian }) => {
	const professions = ["Chọn", "Huỷ"];
	const [myProfession, setMyProfession] = useState("");
	return (
		<div className="Dattour">
			<div className="Content-Dattour">Khả dụng vào ngày khác</div>
			<div className="Chon-Dattour">
				<h3 className="Content-Chon-Dattour">
					{Tour.TenTour}
				</h3>
				<div className="Btn-Chon-giatien">
					<div className="giatien-chitiet-tour giatien-chitiet">{Tour.GiaNguoiLon} VNĐ</div>
					<div className="btn-group" role="group" aria-label="Basic example">
						{professions.map((profession) => (
							<button
								type="button"
								key={profession}
								className={"btn-Chon"}
								onClick={() => setMyProfession(profession)}
							>
								{profession.toLocaleUpperCase()}
							</button>
						))}
					</div>
					<div className="show-NgayDat">
						{myProfession === "Chọn" && <NgayDatTour Tour={Tour} KhungThoiGian={KhungThoiGian} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DatTour;
