import { useForm } from "antd/lib/form/Form";
import React from "react";
import { Link } from "react-router-dom";
import UseRegister from "./UseRegister";
import validate from "./ValidateInfo";
const Register = () => {
	const { handleChange, values, handleSubmit, errors } = UseRegister(validate);
	return (
		<div className="form-content-1">
			<form className="form-1" onSubmit={handleSubmit}>
				<h1> Đăng ký</h1>
				<div className="input-group-1">
					<div className="form-inputs-1">
						<label htmlFor="username" className="form-label-1">
							Tên tài khoản
						</label>
						<input
							id="username"
							type="text"
							name="username"
							className="form-input-1"
							placeholder="Nhập tên tài khoản"
							value={values.username}
							onChange={handleChange}
						></input>
						{errors.username && <p>{errors.username}</p>}
					</div>
					<div className="form-inputs-1">
						<label htmlFor="email" className="form-label-1">
							Email
						</label>
						<input
							id="email"
							type="email"
							name="email"
							className="form-input-1"
							placeholder="Nhập email"
							value={values.email}
							onChange={handleChange}
						></input>
						{errors.email && <p>{errors.email}</p>}
					</div>
					<div className="form-inputs-1">
						<label htmlFor="password" className="form-label-1">
							Mật khẩu
						</label>
						<input
							id="password"
							type="password"
							name="password"
							className="form-input-1"
							placeholder="Nhập Mật khẩu"
							value={values.password}
							onChange={handleChange}
						></input>
						{errors.password && <p>{errors.password}</p>}
					</div>
					<div className="form-inputs-1">
						<label htmlFor="password2" className="form-label-1">
							Xác nhận lại mật khẩu
						</label>
						<input
							id="password2"
							type="password"
							name="password2"
							className="form-input-1"
							placeholder="Nhập lại mật khẩu"
							value={values.password2}
							onChange={handleChange}
						></input>
						{errors.password2 && <p>{errors.password2}</p>}
					</div>
				</div>
				<button className="form-input-btn1" type="submit">
					Sign up
				</button>
				<span className="form-input-login" style={{ marginLeft: 15 }}>
					Already have account ? Login{" "}
					<Link to="/login" style={{ color: "blue" }}>
						here
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
