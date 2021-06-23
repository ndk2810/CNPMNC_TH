import React from "react";
import { Link } from "react-router-dom";

const Login = ({ handleLogin }) => {
	return (
		<div className="form-content">
			<form className="form">
				<h1>ĐĂNG NHẬP</h1>
				<div className="form-inputs">
					<label htmlFor="username" className="form-label">
						Email
						<input
							type="email"
							id="username"
							className="form-input"
							placeholder="Enter your email"
						></input>
					</label>
				</div>
				<div className="form-inputs">
					<label htmlFor="password" className="form-label ">
						Password
						<input
							id="password"
							type="password"
							name="password"
							className="form-input"
							placeholder="Enter your password"
						></input>
					</label>
				</div>
				<button className="form-input-btn" type="submit" id="signIn-confirm-btn" onClick={(e) => {
					e.preventDefault()
					handleLogin(e)
				}}>
					Sign in
				</button>
				<span style={{ marginLeft: 15 }}>
					No account ? Register{" "}
					<Link to="/reg" style={{ color: "blue" }}>
						here
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
