import axios from "axios";
import { useState } from "react";

const UseRegister = validate => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		password2: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(values))
		const listErrors = validate(values)

		if (!listErrors.email && !listErrors.password && !listErrors.password2) {
			axios.post('https://oka1kh.azurewebsites.net/api/user', {
				email: values.email,
				pass: values.password
			})
				.then((res) => {
					if (res.data.status === "SUCCES") {
						alert('Đăng ký thành công !')
						window.location.replace('/login')
					}
				})
				.catch(err => console.log(err))
		}
	};
	return { handleChange, values, handleSubmit, errors };
};
export default UseRegister;
