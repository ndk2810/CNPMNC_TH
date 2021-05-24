//import components
import TopImage from "../components/PageIndex/TopImage";
import SearchBox from "../components/PageIndex/SearchBox";
import DiaDiems from "../components/PageIndex/DiaDiems";
import ListTours from "../components/PageIndex/ListTours";

const Index = ({ arrDiaDiem, TourHaNoi }) => {
	return (
		<div>
			<TopImage />
			<SearchBox />

			<div className="main-index-body">
				<div className="list-diaDiemDP">
					<h1>Điểm đến địa phương</h1>
					<h4>Những nơi đáng tham quan và khám phá trong nước</h4>
				</div>
				<DiaDiems arrDiaDiem={arrDiaDiem} />

				<div className="list-diaDiemDP">
					<h1>Hà Nội tươi đẹp</h1>
					<h4>
						Du lịch thật xa đến những địa điểm đang được nhiều người yêu thích
					</h4>
				</div>
				<ListTours TourHaNoi={TourHaNoi} />
			</div>
		</div>
	);
};

export default Index;
