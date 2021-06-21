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
import SuaThongTinKH from './pages/suaThongTinKh'

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

	const getUserInfo = () => {
		const userToken = JSON.parse(window.localStorage.getItem("userToken"));

		if (userToken) {
			axios
				.get("https://oka1kh.azurewebsites.net/api/profiles", {
					headers: {
						Value: "Token",
						authorization: userToken.token,
					},
				})
				.then((res) => {
					if (res.data.status === "SUCCES") {
						window.localStorage.setItem(
							"userInfo",
							JSON.stringify(res.data.data.auth[0])
						);
						window.location.replace("/");
					}
				})
				.catch((err) => console.log(err));
		} else {
			alert("Vui lòng đăng nhập lại");
			window.location.href("/login");
		}
	};

	const handleLogin = (e) => {
		const email = e.target.form[0].value;
		const pass = e.target.form[1].value;

		document.getElementById("signIn-confirm-btn").style.backgroundColor =
			"green";

		axios
			.post("https://oka1kh.azurewebsites.net/api/user/login", {
				email: email,
				pass: pass,
			})
			.then((res) => {
				if (res.data.status === "SUCCES") {
					window.localStorage.setItem(
						"userToken",
						JSON.stringify(res.data.data)
					);

					getUserInfo();
				}
			})
			//window.location.replace('/')
			.catch((err) => alert("Tài khoản hoặc mật khẩu sai"));
	};

	const handleLogout = () => {
		window.localStorage.removeItem("userToken");
		window.localStorage.removeItem("userInfo");
		window.location.reload();
	};

	const user = JSON.parse(window.localStorage.getItem("userInfo"));

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
					</Switch>
				</div>

				<Footer />
			</div>
		</Router>
	);
};

export default App;
