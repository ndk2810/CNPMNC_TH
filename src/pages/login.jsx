import React from "react";
import "../styles/login.css";
import Login from "../components/PageLogin/Login";

const login = ({ handleLogin }) => {
	return (
		<div>
			<Login handleLogin={handleLogin} />
		</div>
	);
};

export default login;
