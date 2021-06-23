import React from "react";

import TourCard from "./TourCard";

const TourDat = ({ ListTourDaDat }) => {

	return (
		<div className="danhsach-dat">
			<h3>Lịch sử đặt tour</h3>
			<div className="list-lichsu">
				{
					ListTourDaDat.map(tour => {
						return (
							<TourCard IDTour={tour.IDTour} tour={tour} />
						)
					})
				}
			</div>
		</div>
	);
};

export default TourDat;
