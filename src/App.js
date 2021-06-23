import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import server from "./serverAddress";

//COMPONENTS
import Header from "./components/Header";

//import các trang
import QuanLyTour from "./pages/quanLyTour";
import TourChiTiet from "./pages/tourChiTiet";
import QuanLyDat from "./pages/quanLyDat";
import DatChiTiet from "./pages/datChiTiet";

function App() {
	const [DiaDiems, setDiaDiems] = useState([]);
	useEffect(() => {
		fetch(server + "/diaDiem/")
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				setDiaDiems(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const [Tours, setTours] = useState([]);
	useEffect(() => {
		fetch(server + "/tour/")
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				setTours(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	let [ListTheLoaiTour, setListTheLoaiTour] = useState([]);
	useEffect(() => {
		fetch(server + "/theLoaiTour")
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				if (data.length > 0) setListTheLoaiTour(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const [ListDatTour, setListDatTour] = useState([]);
	useEffect(() => {
		fetch(server + "/datTour/getDatTour/")
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				setListDatTour(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Router>
			<div className="App">
				<div className="body">
					<Header />
					<Switch>
						{/* Mốt có thêm trang nào vào thì thêm trong Switch đây nhé */}

						<Route exact path="/">
							<QuanLyTour
								Tours={Tours}
								DiaDiems={DiaDiems}
								ListTheLoaiTour={ListTheLoaiTour}
							/>
						</Route>

						<Route exact path="/tourChiTiet">
							<TourChiTiet ListTheLoaiTour={ListTheLoaiTour} />
						</Route>

						<Route exact path="/quanLyDat">
							<QuanLyDat ListDatTour={ListDatTour} />
						</Route>

						<Route exact path="/datChiTiet">
							<DatChiTiet />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
