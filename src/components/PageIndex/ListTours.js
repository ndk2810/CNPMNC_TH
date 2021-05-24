import React from "react";
import TourTrangChu from "./TourTrangChu";

const ListTours = ({ TourHaNoi }) => {
	return (
		<div className="list-diaDiemDP Tour-trangChu">
			<ul>
				{TourHaNoi.length > 0
					? TourHaNoi.map((Tour) => <TourTrangChu Tour={Tour} />)
					: "Không có tour nào cả"}
			</ul>
		</div>
	);
};

export default ListTours;
