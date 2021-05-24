import React, { useState } from "react";
import NgayDatTour from "./NgayDatTour";

const DatTour = () => {
	const professions = ["Chon", "Huy"];
	const [myProfession, setMyProfession] = useState("");
	return (
		<div className="Dattour">
			<div className="Content-Dattour">Khả dụng vào ngày khác</div>
			<div className="Chon-Dattour">
				<div className="Content-Chon-Dattour">
					Tour mở - Khởi hành tại Nha Trang
				</div>
				<div className="Btn-Chon-giatien">
					<div className="giatien-chitiet">700.000VND</div>
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
						<p>{myProfession === "Chon" && <NgayDatTour />}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DatTour;
