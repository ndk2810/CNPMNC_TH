import React from "react";
import YeuThichCard from "./YeuThichCard";

const ToursYeuThich = ({ YeuThich }) => {

	return (
		<div className="danhsach-dat">
			<h3>Các tour yêu thích</h3>
			<div className="list-lichsu">
				{
					YeuThich.map(yeuThich => {
						return (
							<YeuThichCard IDTour={yeuThich.IDTour} tour={yeuThich} />
						)
					})
				}
			</div>
		</div>
	);
};

export default ToursYeuThich;
