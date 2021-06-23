import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

import server from "./serverAddress";
import axios from "axios";

//Import các trang
import Index from "./pages/index";
import DiaDiem from "./pages/diaDiem";
import DatCho from "./pages/datCho";
import TimKiem from "./pages/timKiem";
import ChiTietTour from "./pages/chiTietTour";
import ThanhToan from "./pages/thanhToan";
import Login from "./pages/login";
import Register from "./pages/register";
import SuaThongTinKH from "./pages/suaThongTinKh";
import VoucherKh from "./pages/voucher";
import TourDat from './pages/tourDat.jsx'
import YeuThich from './pages/yeuThich'

const App = () => {
	//GET tất cả địa điểm
	const [DiaDiems, setDiaDiems] = useState([]);
	useEffect(() => {
		fetch(server + "/diaDiem")
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

	//GET tất cả tour Hà Nội
	const [TourHaNoi, setTourHaNoi] = useState([]);
	useEffect(() => {
		fetch(server + "/tour/top4/2")
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				setTourHaNoi(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleLogin = (e) => {
		const email = e.target.form[0].value;
		const pass = e.target.form[1].value;

		document.getElementById("signIn-confirm-btn").style.backgroundColor =
			"green";

		axios.post('https://gift-api-v1.herokuapp.com/customer/login', {
			email: email,
			mat_khau: pass
		})
			.then((res) => {
				res.data.email = email
				window.localStorage.setItem('userToken', JSON.stringify(res.data))
				window.location.replace('/')
			})
			.catch((err) => alert("Tài khoản hoặc mật khẩu sai"));
	};

	const handleLogout = () => {
		window.localStorage.removeItem("userToken");
		//window.localStorage.removeItem("userToken");
		window.location.reload();
	};

	const user = JSON.parse(window.localStorage.getItem("userToken"));

	return (
		<Router>
			<div className="App">
				<Header user={user} handleLogout={handleLogout} />

				<div className="body">
					<Switch>
						{/* Mốt có thêm trang nào vào thì thêm trong Switch đây nhé */}

						<Route exact path="/">
							<Index arrDiaDiem={DiaDiems} TourHaNoi={TourHaNoi} />
						</Route>

						<Route exact path="/diaDiem">
							<DiaDiem />
						</Route>

						<Route expact path="/thongTinTour">
							<ChiTietTour />
						</Route>

						<Route exact path="/datCho">
							<DatCho />
						</Route>

						<Route exact path="/thanhToan">
							<ThanhToan />
						</Route>

						<Route exact path="/timKiem">
							<TimKiem />
						</Route>
						<Route exact path="/login">
							<Login handleLogin={handleLogin} />
						</Route>
						<Route exact path="/reg">
							<Register />
						</Route>
						<Route exact path="/taikhoan">
							<SuaThongTinKH />
						</Route>
						<Route exact path="/voucher">
							<VoucherKh />
						</Route>
						<Route exact path="/lichsudat">
							<TourDat />
						</Route>
						<Route exact path="/yeuThich">
							<YeuThich />
						</Route>
					</Switch>
				</div>

				<Footer />
			</div>
		</Router>
	);
};

export default App;
