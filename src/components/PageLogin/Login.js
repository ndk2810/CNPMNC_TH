import React from "react";

const Login = () => {
	return (
		<div className="form-content">
			<form className="form">
				<h1>Dang nhap</h1>
				<div className="form-inputs">
					<label
						htmlFor="username"
						className="form-label"
						style={{ color: "white" }}
					>
						Username
						<input
							type="text"
							name="username"
							className="form-input"
							placeholder="Enter your username"
						></input>
					</label>
				</div>
				<div className="form-inputs">
					<label
						htmlFor="password"
						className="form-label "
						style={{ color: "white" }}
					>
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
				<button className="form-input-btn" type="submit">
					Sign in
				</button>
				<span style={{ color: "white" }}>
					Sign up{" "}
					<a href="#" style={{ color: "blue" }}>
						here
					</a>
				</span>
			</form>
		</div>
	);
};

export default Login;
